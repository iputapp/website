import Image from "next/image"

import UnserLine from "@/assets/icons/draw-underline.svg"

export default function PageBar({
  title,
}: {
  title: string
}) {
  return (
    <header className="relative w-full h-48 sm:h-64 bg-[#F2F2F2] flex flex-col items-center justify-end pb-8">
      <div className="relative inline-flex flex-col items-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-[#333333] z-10 relative">{title}</h1>
        <UnserLine className="w-[130px] sm:w-[200px] h-full -mt-3 relative z-0 animate-line-write2" /> 
        <div className="absolute -right-14 sm:-right-20 w-16 sm:w-20 h-full">
          <Image
            src="/images/pencil.png"
            alt="鉛筆"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </header>
  )
}