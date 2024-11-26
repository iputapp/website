import { WebhookError } from "./error";
import type { WebhookPayload } from "./types";

interface WebhookExecuteOptions {
  url: string;
  payload: WebhookPayload;
  options?: {
    wait?: boolean;
    threadId?: string;
  };
}

/**
 * Discord Webhook を実行する
 * @param url Webhook URL
 * @param payload Webhook に送信するデータ
 * @param options Webhook 実行時のオプション
 * @returns
 * @see {@link https://discord.com/developers/docs/resources/webhook#execute-webhook}
 */
export async function executeWebhook({
  url,
  payload,
  options = {},
}: WebhookExecuteOptions): Promise<Response> {
  const { wait = false, threadId } = options;

  const webhookUrl = new URL(url);

  // クエリパラメータを追加
  if (wait) {
    webhookUrl.searchParams.append("wait", "true");
  }
  if (threadId) {
    webhookUrl.searchParams.append("thread_id", threadId);
  }

  try {
    const response = await fetch(webhookUrl.toString(), {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      let errorMessage: string;
      try {
        // レスポンスからエラーメッセージをパースする
        const errorData = await response.json();
        errorMessage =
          errorData.message || `HTTP error! status: ${response.status}`;
      } catch {
        // パースに失敗した場合は、標準のエラーメッセージを使用する
        errorMessage = `HTTP error! status: ${response.status}`;
      }
      throw new WebhookError(errorMessage, response.status, response);
    }

    return response;
  } catch (error) {
    // WebhookError はそのままスローする
    if (error instanceof WebhookError) {
      throw error;
    }
    // ネットワークエラーやその他の失敗をスローする
    throw new WebhookError(
      error instanceof Error ? error.message : "Failed to execute webhook",
      undefined,
      undefined
    );
  }
}
