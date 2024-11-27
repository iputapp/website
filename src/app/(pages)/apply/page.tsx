import { TokenManager } from "@/server";

import { Form } from "./form";

export default function Page() {
  // 正規リクエスト確認のトークンを生成
  const token = TokenManager.generate();

  return (
    <main className="grid min-h-dvh w-full place-content-center gap-8">
      <h1 className="text-center text-2xl">入会申請</h1>
      <Form token={token} />
    </main>
  );
}
