// src/app/(pages)/privacy/page.tsx
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "プライバシーポリシー | YourSite",
  description: "当サイトのプライバシーポリシーです。",
}

const SECTIONS = [
  {
    title: "1. 収集する情報",
    body: `当サイトでは、サービス提供のために最小限の個人情報を収集します。
IP アドレス・閲覧履歴などは匿名化された形で解析されます。`,
  },
  {
    title: "2. 情報の利用目的",
    body: `収集した情報は、サービス改善・不具合対応・お問い合わせ応答のためにのみ使用します。第三者へ無断で提供することはありません。`,
  },
  {
    title: "3. 情報の共有",
    body: `法令に基づく開示要請を除き、ユーザーの同意なく第三者に提供・販売することはありません。`,
  },
  {
    title: "4. Cookie / トラッキング",
    body: `当サイトは利便性向上のため Cookie を使用します。ブラウザ設定で無効化できますが、一部機能が制限される場合があります。`,
  },
  {
    title: "5. お問い合わせ",
    body: `本ポリシーに関するお問い合わせは、下記窓口までお願いいたします。\ncontact@iputapp.com`,
  },
]

export default function PrivacyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl space-y-14 px-6 py-24">
      <div className="space-y-4">
        <h1 className="text-start text-3xl font-extrabold sm:text-4xl">
          プライバシーポリシー
        </h1>
        <p className="text-base text-gray-700">
          本プライバシーポリシーは、アプリ開発サークル（以下「当方」という）が提供するアプリやサービス
          （以下「本アプリ」という)において、本アプリを利用されるお客様（以下「ユーザー」という）の個人情報もしくはそれに準ずる情報を取り扱う際に、
          本アプリが遵守する方針を示したものです。
        </p>
      </div>
      {SECTIONS.map(({ title, body }) => (
        <section key={title} className="space-y-4">
          <h2 className="flex items-start gap-3 text-xl font-semibold sm:text-2xl">
            <span className="mt-1 inline-block h-3 w-3 flex-none rounded-full bg-red" />
            {title}
          </h2>
          <p className="whitespace-pre-wrap leading-relaxed text-gray-800">
            {body}
          </p>
        </section>
      ))}
      <p className="text-right text-sm text-gray-500">最終更新：2025-05-24</p>
    </main>
  )
}