// src/components/element/CardProject.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

interface CardProjectProps {
  label: string
  title: string
  description: string
  imageSrc: string
  gradient?: string
  href?: string
}

export default function CardProject({
  label,
  title,
  description,
  imageSrc,
  gradient = 'radial-gradient(67.47% 67.47% at 50% 50%, #00BFFF 0%, #00BFFF 55%, #00A3DE 100%)',
  href = '#aaaaaa',
}: CardProjectProps) {
  return (
    <Link
      href={href}
      className="
        isolate flex w-full flex-col overflow-hidden
        justify-center items-center
        rounded-[2rem] p-10 transition ease-in-out duration-500
        md:flex-row
        hover:scale-105
        b
      "
      style={{
        background: gradient,
      }}
    >
      <div className="z-10 flex flex-col justify-between  md:w-1/2">
        <div>
          <p className="text-lg font-semibold text-black">{label}</p>
          <h2 className="text-5xl font-extrabold text-white tracking-tight my-2">
            {title}
          </h2>
          <p className="max-w-md ml-2 text-white">{description}</p>
        </div>
        <div className="flex items-center gap-4">
        </div>
      </div>
      <div className="relative mx-auto aspect-[4/3] w-full max-w-sm md:mt-0 md:w-1/2">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-contain"
          priority
        />
      </div>
      <span
        className="absolute inset-0 rounded-[2rem]"
        style={{
          boxShadow: 'inset 0 0 40px rgba(255,255,255,0.12)',
        }}
      />
    </Link>
  )
}