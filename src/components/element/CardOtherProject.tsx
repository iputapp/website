'use client'

import Image from 'next/image'

type Card = {
  bgImage: string;
  headline: string;
  textColor?: string; 
};

export default function CardOtherProject({
  card,
}: {
  card: Card;
}) {
  return (
    <div
      className="
        relative flex-none aspect-[2/3] w-[clamp(250px,32vw,350px)] snap-center
        overflow-hidden rounded-[2.5rem] shadow-md
      "
    >
      <Image
        src={card.bgImage}
        alt=""                
        fill                 
        className="object-cover"
        priority
      />
      <div
        className={`
          absolute left-[10%] top-[10%] z-10 whitespace-pre-wrap
          text-left text-[clamp(20px,3vw,30px)] font-bold leading-snug
          ${card.textColor === 'white' ? 'text-white' : 'text-black'}
        `}
      >
        {card.headline}
      </div>
    </div>
  )
}