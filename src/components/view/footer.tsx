import Link from 'next/link'

import GitHub from '@/assets/icons/github.svg'
import X from '@/assets/icons/x.svg'
import Zenn from '@/assets/icons/zenn.svg'
import IputappLogo from '@/assets/logo/iputapp_namelogo_white 1.svg'

export default function Footer() {
  return (
  <footer className="bg-[#4b4b4b] p-8">
      <div className="w-full max-w-screen-xl mx-auto md:p-4 md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
            <Link href="/" className="flex items-cente space-x-3 rtl:space-x-reverse mb-5">
              <IputappLogo className="w-60 md:w-80 h-auto"/>
            </Link>
            <ul className="flex flex-wrap items-center text-base lg:text-2xl font-bold text-white">
              <li>
                <Link href="/privacy" className="hover:underline hover:decoration-red  me-4 md:me-6">プライバシーポリシー</Link>
              </li>
              <li>
                <Link href="/apply" className="hover:underline hover:decoration-red me-4 md:me-6">加入申請</Link>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <div className='flex flex-col items-start'>
              <span className="text-sm text-white">© 2025 アプリ開発サークル</span>
              <p className="text-xs md:text-sm text-white my-2">私たちは東京国際工科専門職大学の公認サークルです。</p>
            </div>
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