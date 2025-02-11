import { NextResponse } from "next/server";
import { z } from "zod";

import type { APIErrorResponse } from "./types";

/**
 * [JavaScript `Error()` constructor](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) を拡張したAPIエラー用のクラス
 * @example
 * ```ts
 * try {
 *   if (true) {
 *     // カスタムエラーメッセージのレスポンスを返す
 *     throw new APIError("エラーメッセージ", 403, "ERROR_CODE");
 *   }
 * } catch (error) {
 *   return handleAPIError(error);
 *   // => { type: "error", error: { message: "エラーメッセージ", code: "ERROR_CODE" }, status: 403 }
 * }
 * ```
 */
export class APIError extends Error {
  constructor(
    message: string,
    public status: number = 400,
    public code?: string
  ) {
    super(message);
    this.name = "APIError";
  }
}

/**
 * APIエラー時のレスポンスを生成する
 * @param error - エラーオブジェクト
 * @returns `NextResponse`
 * @example
 * ```ts
 * try {
 *   // API処理
 * } catch (error) {
 *   return handleAPIError(error);
 *   // APIError => { type: "error", error: { message: error.message, code: error.code }, status: error.status }
 *   // ZodError => { type: "error", error: { message: "入力値が不正です", details: error.errors }, status: 400 }
 *   // OtherError => { type: "error", error: { message: "サーバーエラーが発生しました" }, status: 500 }
 * }
 * ```
 */
export function handleAPIError(
  error: unknown
): ReturnType<typeof NextResponse.json<APIErrorResponse>> {
  if (error instanceof APIError) {
    return NextResponse.json(
      {
        type: "error",
        error: {
          message: error.message,
          code: error.code,
        },
        status: error.status,
      },
      { status: error.status }
    );
  }

  if (error instanceof z.ZodError) {
    return NextResponse.json(
      {
        type: "error",
        error: {
          message: "入力値が不正です",
          details: error.errors,
        },
        status: 400,
      },
      { status: 400 }
    );
  }

  console.error(error);
  return NextResponse.json(
    {
      type: "error",
      error: { message: "サーバーエラーが発生しました" },
      status: 500,
    },
    { status: 500 }
  );
}
