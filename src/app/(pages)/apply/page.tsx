import { TokenManager } from "@/server";

import { Form } from "./form";

/**
 * 入会申請ページ
 */
export default async function Page() {
  // 正規リクエスト検証のトークンを生成
  const token = TokenManager.generate();

  return (
    <main className="grid place-content-center w-full p-8 py-16 bg-white">
      <Form token={token} />
    </main>
  );
}
