import { NextResponse } from "next/server";

/**
 * APIレスポンス (成功)
 */
export type APISuccessResponse<T> = {
  type: "success";
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
 * // => { data: { message: "Hello, World!" }, status: 200 }
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
 *   // => { data: data, status: 200 }
 * } catch (error) {
 *   return handleAPIError(error);
 * }
 * ```
 */
export function handleAPISuccess<T>(data: T) {
  return NextResponse.json(createAPIResponse(data));
}
