import type { NextRequest } from "next/server";

import {
  CONTACT_TOOL_JA,
  DISCORD_WEBHOOK_URL,
  OCCUPATIONAL_STATUS_JA,
} from "@/constants";
import { Discord, handleAPIError, handleAPISuccess } from "@/lib";
import { NewcomerSchema } from "@/models";

/**
 * API: 入会申請の通知
 *
 * Mock test: test/api/notify/newcomer.test.ts
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const validatedData = NewcomerSchema.parse(body);

    /**
     * @todo Discord Webhook を実行して申請を通知する
     * ! 外部から実行されないような対策が必要
     * ! 本番環境でのみ実行する
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
