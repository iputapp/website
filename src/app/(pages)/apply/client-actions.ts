import { API_NOTIFY_NEWCOMER } from "@/constants";
import { fetcher } from "@/lib";
import type { Newcomer } from "@/models";

/**
 * 申請送信のAPIリクエスト
 * @param url - APIエンドポイント
 * @param arg - 申請データ
 * @returns SWR の fetcher として使用
 */
export async function sendApply(url: string, { arg }: { arg: Newcomer }) {
  return fetcher(url, {
    method: "POST",
    body: JSON.stringify(arg),
    headers: {
      // 正規リクエスト検証のトークンをヘッダに含める
      [API_NOTIFY_NEWCOMER.TOKEN_HEADER_NAME]: arg.csrfToken,
    },
  });
}
