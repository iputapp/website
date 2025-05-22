'use client'

import IputappLogo from '@/assets/logo/iputapp_namelogo_black 1.svg'
import { ButtonLink } from '@/components/element/ButtonLink'

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="mx-auto mt-2 max-w-7xl">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <IputappLogo className="w-80 h-auto"/>
          </div>
          <ButtonLink href='/join' text='加入する' />
        </div>
      </div>
    </header>
  )
}