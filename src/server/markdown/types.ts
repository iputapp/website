/* eslint-disable @typescript-eslint/no-explicit-any */

import type { ComponentType } from "react";

import type { Article } from "./schema";

export type { Article };

/**
 * HTMLとコンポーネントのマッピング
 * @todo 必要なHTMLタグを追加する
 */
export interface CustomComponents {
  h1?: ComponentType<any>;
  h2?: ComponentType<any>;
  p?: ComponentType<any>;
  code?: ComponentType<any>;
}
