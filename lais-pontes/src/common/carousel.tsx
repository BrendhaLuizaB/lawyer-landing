"use client";
import { useState, type ReactNode } from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type CarouselWrapperProps = {
  autoplay?: boolean;
  showArrows?: boolean;
  children: ReactNode;
};

export function CarouselWrapper({
  autoplay = false,
  showArrows = true,
  children,
}: CarouselWrapperProps) {
  const [, setApi] = useState<CarouselApi | undefined>(undefined);

  return (
    <Carousel
      setApi={setApi}
      opts={{ align: "start", loop: true }}
      plugins={autoplay ? [Autoplay({ delay: 6000 })] : []}
      className="w-full max-w-lg tablet:max-w-5xl mx-auto"
    >
      <CarouselContent>{children}</CarouselContent>

      {showArrows && (
        <>
          <CarouselPrevious />
          <CarouselNext />
        </>
      )}
    </Carousel>
  );
}
