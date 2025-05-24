"use client";
import React, { useEffect } from "react";

import LeftIcon from "@/assets/icons/left.svg";
import RightIcon from "@/assets/icons/right.svg";

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full">
      <div
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth pb-10 [scrollbar-width:none] md:pb-20"
        ref={carouselRef}
        onScroll={checkScrollability}
      >
        <div className="mx-auto flex max-w-7xl flex-row justify-start gap-4 pl-8 pr-10">
          {items.map((item, index) => (
            <div
              key={"card" + index}
              className={index === items.length - 1 ? "pr-10" : ""}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto mr-5 flex max-w-7xl justify-end gap-5">
        <button
          className="relative z-40 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
          onClick={scrollLeft}
          disabled={!canScrollLeft}
        >
          <LeftIcon className="h-5 w-5 text-gray-500" />
        </button>
        <button
          className="relative z-40 flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 disabled:opacity-50"
          onClick={scrollRight}
          disabled={!canScrollRight}
        >
          <RightIcon className="h-5 w-5 text-gray-500" />
        </button>
      </div>
    </div>
  );
};
