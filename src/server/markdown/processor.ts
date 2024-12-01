import { createElement, Fragment } from "react";
import * as dev from "react/jsx-dev-runtime";
import * as prod from "react/jsx-runtime";
import rehypeReact, { type Options } from "rehype-react";
import remarkFrontmatter from "remark-frontmatter";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkParseFrontmatter from "remark-parse-frontmatter";
import remarkRehype from "remark-rehype";
import { unified } from "unified";

import type { CustomComponents } from "./types";

/**
 * Markdown プロセッサ
 * @param components - コンポーネントマッピング
 */
export function markdownProcessor(components: CustomComponents = {}) {
  return unified()
    .use(remarkParse)
    .use(remarkFrontmatter)
    .use(remarkParseFrontmatter)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeReact, {
      /**
       * React Error: Expected `jsxDEV` in options when `development: true`
       * 開発環境で JSX 開発モードを有効にする
       */
      ...(process.env.NODE_ENV !== "production"
        ? {
            development: true,
            jsxDEV: dev.jsxDEV,
          }
        : {
            jsx: prod.jsx,
            jsxs: prod.jsxs,
          }),
      createElement,
      Fragment,
      components,
    } as unknown as Options);
}
