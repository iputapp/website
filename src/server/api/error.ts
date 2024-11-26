import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * APIレスポンス (エラー)
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
 *   // APIError => { error: { message: error.message, code: error.code }, status: error.status }
 *   // ZodError => { error: { message: "入力値が不正です", details: error.errors }, status: 400 }
 *   // OtherError => { error: { message: "サーバーエラーが発生しました" }, status: 500 }
 * }
 * ```
 */
export function handleAPIError(error: unknown) {
  if (error instanceof APIError) {
    return NextResponse.json(
      {
        error: {
          message: error.message,
          code: error.code,
        },
      },
      { status: error.status }
    );
  }

  if (error instanceof z.ZodError) {
    return NextResponse.json(
      {
        error: {
          message: "入力値が不正です",
          details: error.errors,
        },
      },
      { status: 400 }
    );
  }

  console.error(error);
  return NextResponse.json(
    { error: { message: "サーバーエラーが発生しました" } },
    { status: 500 }
  );
}
