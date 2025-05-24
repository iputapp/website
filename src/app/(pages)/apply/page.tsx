import { TokenManager } from "@/server";

import { Form } from "./form";

/**
 * 入会申請ページ
 */
export default async function Page() {
  // 正規リクエスト検証のトークンを生成
  const token = TokenManager.generate();

  return (
    <main className="grid w-full place-content-center bg-white p-8 py-16">
      <Form token={token} />
    </main>
  );
}
