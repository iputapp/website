"use server";

import { cookies } from "next/headers";

import { API_NOTIFY_NEWCOMER } from "@/constants";
import { TokenManager } from "@/server";

/**
 * Cookie に正規リクエスト検証のトークンを保存
 * @param token - トークン
 */
export async function setTokenToCookie(token: string): Promise<void> {
  cookies().set({
    name: API_NOTIFY_NEWCOMER.TOKEN_COOKIE_NAME,
    value: token,
    expires: new Date(Date.now() + TokenManager.DEFAULT_MAX_AGE),
    maxAge: TokenManager.DEFAULT_MAX_AGE,
    secure: process.env.NODE_ENV === "production",
    httpOnly: true,
    sameSite: "strict",
  });
}
