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
        justify-center items-start md:items-center
        rounded-[2.5rem] p-10 transition ease-in-out duration-500
        md:flex-row
        hover:scale-105
      "
      style={{
        background: gradient,
      }}
    >
      <div className="z-10 flex flex-col justify-between text-[clamp(2rem,6vw,3.5rem)] md:w-1/2">
        <div>
          <p className="text-[0.5em] font-semibold text-black">{label}</p>
          <h2 className="font-extrabold text-white tracking-tight">
            {title}
          </h2>
          <p className="text-[0.4em] max-w-md font-medium text-white">{description}</p>
        </div>
        <div className="flex items-center gap-4">
        </div>
      </div>
      <div className="relative mx-auto aspect-[4/3] w-full max-w-sm mt-5 md:mt-0 md:w-1/2">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  )
}