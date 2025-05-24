import Image from "next/image";

import UnserLine from "@/assets/icons/draw-underline.svg";

export default function PageBar({ title }: { title: string }) {
  return (
    <header className="relative flex h-48 w-full flex-col items-center justify-end bg-[#F2F2F2] pb-8 sm:h-64">
      <div className="relative inline-flex flex-col items-center">
        <h1 className="relative z-10 text-3xl font-bold text-[#333333] sm:text-5xl">
          {title}
        </h1>
        <UnserLine className="relative z-0 -mt-3 h-full w-[130px] animate-line-write2 sm:w-[200px]" />
        <div className="absolute -right-14 h-full w-16 sm:-right-20 sm:w-20">
          <Image
            src="/images/pencil.png"
            alt="鉛筆"
            fill
            className="object-contain"
          />
        </div>
      </div>
    </header>
  );
}
