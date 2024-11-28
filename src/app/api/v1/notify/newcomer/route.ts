import { cookies } from "next/headers";
import type { NextRequest } from "next/server";

import {
  API_NOTIFY_NEWCOMER,
  CONTACT_TOOL_JA,
  OCCUPATIONAL_STATUS_JA,
} from "@/constants";
import { NewcomerSchema } from "@/models";
import {
  APIError,
  Discord,
  handleAPIError,
  handleAPISuccess,
  TokenManager,
} from "@/server";

/**
 * API: 入会申請の通知
 *
 * Mock test: test/api/notify/newcomer.test.ts
 */
export async function POST(request: NextRequest) {
  const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || "";

  try {
    const body = await request.json();
    const validatedData = NewcomerSchema.parse(body);

    /**
     * 正規リクエスト検証
     * テストではスキップ
     */
    if (process.env.NODE_ENV !== "test") {
      // 正規リクエスト検証のトークンを取得
      const cookieToken = cookies().get(
        API_NOTIFY_NEWCOMER.TOKEN_COOKIE_NAME
      )?.value;
      const headerToken = request.headers.get(
        API_NOTIFY_NEWCOMER.TOKEN_HEADER_NAME
      );
      const formToken = validatedData.csrfToken;

      // 正規リクエスト検証のトークンを Cookie から削除
      cookies().delete(API_NOTIFY_NEWCOMER.TOKEN_COOKIE_NAME);

      // 正規リクエスト検証
      const isValidRequest = TokenManager.validate({
        cookieToken,
        headerToken,
        formToken,
      });

      if (!isValidRequest) {
        return handleAPIError(new APIError("不正なリクエストです", 401));
      }
    }

    /**
     * Discord Webhook を実行して申請を通知
     * 本番環境でのみ実行
     */
    if (process.env.NODE_ENV === "production") {
      Discord.Webhook.executeWebhook({
        url: DISCORD_WEBHOOK_URL,
        payload: {
          content: `
          🔔入会申請🔔
          **名前**：${validatedData.name}
          **在籍**：${OCCUPATIONAL_STATUS_JA[validatedData.occupationalStatus]}
          **連絡手段**：${CONTACT_TOOL_JA[validatedData.contactTool]}
          **連絡先**：${validatedData.contactDetail}
        `,
        },
      });
    }

    return handleAPISuccess(validatedData);
  } catch (error) {
    return handleAPIError(error);
  }
}
