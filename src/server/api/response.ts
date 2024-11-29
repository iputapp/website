import { NextResponse } from "next/server";

import type { APISuccessResponse } from "./types";

/**
 * API成功時のオブジェクトを生成する
 * @param data - レスポンスデータ
 * @returns `APIResponse`
 * @example
 * ```ts
 * const response = createAPIResponse({ message: "Hello, World!" });
 * // => { type: "success", data: { message: "Hello, World!" }, status: 200 }
 * ```
 */
export function createAPIResponse<T>(data: T): APISuccessResponse<T> {
  return { type: "success", data, status: 200 };
}

/**
 * API成功時のレスポンスを生成する
 * @param data - レスポンスデータ
 * @returns `NextResponse`
 * @example
 * ```ts
 * try {
 *   // API処理
 *   return handleAPISuccess(data);
 *   // => { type: "success", data: data, status: 200 }
 * } catch (error) {
 *   return handleAPIError(error);
 * }
 * ```
 */
export function handleAPISuccess<T>(data: T) {
  return NextResponse.json(createAPIResponse(data));
}
