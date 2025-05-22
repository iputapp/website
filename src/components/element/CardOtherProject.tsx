// src/components/element/CardOtherProject.tsx
'use client'

import Image from 'next/image'
import { ReactNode } from 'react'

export interface CardOtherProjectProps {
  headline: string | ReactNode
  textColor?: 'white' | 'black'
  bgImage: string
}

export default function CardOtherProject({
  headline,
  textColor = 'black',
  bgImage,
}: CardOtherProjectProps) {
  return (
    <div
      className="
        relative flex-none w-[400px] h-[600px] snap-center
        overflow-hidden rounded-[2.5rem] shadow-md transition hover:brightness-105
      "
    >
      <Image
        src={bgImage}
        alt=""                
        fill                 
        className="object-cover"
        sizes="(max-width: 640px) 320px, 25vw"
        priority
      />
      <div
        className={`
          absolute left-10 top-10 z-10 whitespace-pre-wrap
          text-left text-3xl font-bold leading-snug
          ${textColor === 'white' ? 'text-white' : 'text-black'}
        `}
      >
        {headline}
      </div>
    </div>
  )
}