import type { APIErrorResponse, APISuccessResponse } from "@/server";

/**
 * APIエンドポイントのレスポンスデータ型
 * @template T - レスポンスデータの型
 * @example
 * ```ts
 * type Response = APIResponse<{ id: number }>;
 * // => APISuccessResponse<{ id: number }> | APIErrorResponse
 * ```
 */
export type APIResponse<T> = APISuccessResponse<T> | APIErrorResponse;
