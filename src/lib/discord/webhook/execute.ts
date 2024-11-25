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

  const response = await fetch(webhookUrl.toString(), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(
      `Failed to execute webhook: ${response.status} ${response.statusText}`
    );
  }

  return response;
}
