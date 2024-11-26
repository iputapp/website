import { NextResponse } from "next/server";

/**
 * APIレスポンス (成功)
 */
export type APIResponse<T> = {
  data: T;
  status: number;
};

/**
 * API成功時のオブジェクトを生成する
 * @param data - レスポンスデータ
 * @returns `APIResponse`
 * @example
 * ```ts
 * const response = createAPIResponse({ message: "Hello, World!" });
 * console.log(response);
 * // => { data: { message: "Hello, World!" }, status: 200 }
 * ```
 */
export function createAPIResponse<T>(data: T): APIResponse<T> {
  return { data, status: 200 };
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
 *   // => { data: data, status: 200 }
 * } catch (error) {
 *   return handleAPIError(error);
 * }
 * ```
 */
export function handleAPISuccess<T>(data: T) {
  return NextResponse.json(createAPIResponse(data));
}
