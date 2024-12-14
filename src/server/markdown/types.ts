import type { ComponentProps, ComponentType } from "react";

import type { Article } from "./schema";

export type { Article };

/**
 * HTMLとコンポーネントのマッピング
 * @todo 必要なHTMLタグを追加する
 */
export interface CustomComponents {
  h1?: ComponentType<ComponentProps<"h1">>;
  h2?: ComponentType<ComponentProps<"h2">>;
  p?: ComponentType<ComponentProps<"p">>;
  pre?: ComponentType<ComponentProps<"pre">>;
  code?: ComponentType<ComponentProps<"code">>;
}
