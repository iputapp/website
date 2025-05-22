import Link from 'next/link'

import GitHub from '@/assets/icons/github.svg'
import X from '@/assets/icons/x.svg'
import Zenn from '@/assets/icons/zenn.svg'
import IputappLogo from '@/assets/logo/iputapp_namelogo_white 1.svg'

export default function Footer() {
  return (
  <footer className="bg-[#4b4b4b] p-8">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
              <Link href="/" className="flex items-cente space-x-3 rtl:space-x-reverse">
                <IputappLogo className="w-80 h-auto"/>
              </Link>
              <ul className="flex flex-wrap items-center text-2xl font-bold text-white">
                <li>
                  <Link href="#" className="hover:underline me-4 md:me-6">プライバシーポリシー</Link>
                </li>
                <li>
                  <Link href="/apply" className="hover:underline me-4 md:me-6">参加申請</Link>
                </li>
              </ul>
          </div>
          <p className="text-sm text-white m-2">私たちは東京国際工科専門職大学の公認サークルです。</p>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-white">© 2025 アプリ開発サークル</span>
            <div className="flex mt-4 sm:justify-center sm:mt-0 gap-x-4">
              <Link href="https://x.com/iputapp" target="_blank">
                <X className="w-8 h-8 text-white" />
              </Link>
              <Link href="https://github.com/iputapp" target="_blank">
                <GitHub className="w-8 h-8 text-white" />
              </Link>
              <Link href="https://zenn.dev/p/iput_app" target="_blank">
                <Zenn className="w-8 h-8 text-white" />
              </Link>
            </div>
          </div>
      </div>
  </footer>
  )
}