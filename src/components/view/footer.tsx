import Link from "next/link";

import GitHub from "@/assets/icons/github.svg";
import X from "@/assets/icons/x.svg";
import Zenn from "@/assets/icons/zenn.svg";
import IputappLogo from "@/assets/logo/iputapp_namelogo_white 1.svg";

export default function Footer() {
  return (
    <footer className="bg-[#4b4b4b] p-8">
      <div className="mx-auto w-full max-w-screen-xl md:p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="items-cente mb-5 flex space-x-3 rtl:space-x-reverse"
          >
            <IputappLogo className="h-auto w-60 md:w-80" />
          </Link>
          <ul className="flex flex-wrap items-center text-base font-bold text-white lg:text-2xl">
            <li>
              <Link
                href="/privacy"
                className="me-4 hover:underline hover:decoration-red md:me-6"
              >
                プライバシーポリシー
              </Link>
            </li>
            <li>
              <Link
                href="/apply"
                className="me-4 hover:underline hover:decoration-red md:me-6"
              >
                加入申請
              </Link>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex flex-col items-start">
            <span className="text-sm text-white">
              © 2025 アプリ開発サークル
            </span>
            <p className="my-2 text-xs text-white md:text-sm">
              私たちは東京国際工科専門職大学の公認サークルです。
            </p>
          </div>
          <div className="mt-4 flex gap-x-4 sm:mt-0 sm:justify-center">
            <Link href="https://x.com/iputapp" target="_blank">
              <X className="h-8 w-8 text-white" />
            </Link>
            <Link href="https://github.com/iputapp" target="_blank">
              <GitHub className="h-8 w-8 text-white" />
            </Link>
            <Link href="https://zenn.dev/p/iput_app" target="_blank">
              <Zenn className="h-8 w-8 text-white" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
