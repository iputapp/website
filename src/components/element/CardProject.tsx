"use client";

import Image from "next/image";
import Link from "next/link";

interface CardProjectProps {
  label: string;
  title: string;
  description: string;
  imageSrc: string;
  gradient?: string;
  href?: string;
}

export default function CardProject({
  label,
  title,
  description,
  imageSrc,
  gradient = "radial-gradient(67.47% 67.47% at 50% 50%, #00BFFF 0%, #00BFFF 55%, #00A3DE 100%)",
  href = "#aaaaaa",
}: CardProjectProps) {
  return (
    <Link
      href={href}
      target="_blank"
      className="isolate flex w-full flex-col items-start justify-center overflow-hidden rounded-[2.5rem] p-10 transition duration-500 ease-in-out hover:scale-105 md:flex-row md:items-center"
      style={{
        background: gradient,
      }}
    >
      <div className="z-10 flex flex-col justify-between text-[clamp(2rem,6vw,3.5rem)] md:w-1/2">
        <div>
          <p className="text-[0.5em] font-semibold text-black">{label}</p>
          <h2 className="font-extrabold tracking-tight text-white">{title}</h2>
          <p className="max-w-md text-[0.4em] font-medium text-white">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-4"></div>
      </div>
      <div className="relative mx-auto mt-5 aspect-[4/3] w-full max-w-sm md:mt-0 md:w-1/2">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className="object-contain"
          priority
        />
      </div>
    </Link>
  );
}
