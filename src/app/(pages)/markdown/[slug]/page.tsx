import Image from "next/image";
import { notFound } from "next/navigation";

import { MarkdownContent } from "@/components";
import { MARKDOWN_DIR_PATH } from "@/constants";
import { parseMarkdown, readFileContent } from "@/server";
import type { DynamicSegments } from "@/types";

export default async function Page({ params }: DynamicSegments<"slug">) {
  const ARTICLE_FILE_PATH = `${MARKDOWN_DIR_PATH}/sample/${params.slug}.md`;

  const content = readFileContent({
    filePath: ARTICLE_FILE_PATH,
  });

  // Markdown ファイルの読み込みに失敗した場合
  if (!content.success) {
    return notFound();
  }

  /**
   * Markdown を記事情報にパース
   */
  const article = await parseMarkdown(content.data);

  // 非公開記事の場合は 404 ページを表示
  if (article.status === "private") {
    return notFound();
  }

  return (
    <main className="mx-auto grid w-full max-w-screen-md gap-12 p-12">
      <div className="relative aspect-video overflow-hidden rounded-2xl bg-neutral-300 dark:bg-neutral-600">
        {article.eyecatchUrl && (
          <Image
            className="object-cover"
            src={article.eyecatchUrl}
            alt="アイキャッチ"
            fill
          />
        )}
      </div>
      <section className="grid justify-items-center gap-6">
        <h1 className="text-center text-3xl">{article.title}</h1>
        <ul className="flex items-center gap-2">
          {article.tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full bg-neutral-500 px-2.5 py-2 text-xs text-white"
            >
              {tag}
            </li>
          ))}
        </ul>
      </section>
      <section>
        <MarkdownContent
          content={article.content}
          components={{
            /**
             * @todo 他のコンポーネントも追加する
             * @/server/markdown/types.ts にタグを定義
             */
            h1: ({ children }) => (
              <h1 className="my-10 border-b-2 py-2.5 text-2xl">{children}</h1>
            ),
            p: ({ children }) => <p className="mt-8 opacity-75">{children}</p>,
            pre: ({ children }) => (
              <pre className="mt-8 rounded-lg bg-neutral-200 p-4 font-mono text-sm dark:bg-neutral-700">
                {children}
              </pre>
            ),
            code: ({ children }) => (
              <code className="mx-0.5 rounded-lg bg-neutral-200 px-1.5 py-1 font-mono text-sm dark:bg-neutral-700">
                {children}
              </code>
            ),
          }}
        />
      </section>
    </main>
  );
}
