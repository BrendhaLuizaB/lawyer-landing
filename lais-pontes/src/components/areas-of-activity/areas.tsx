'use client'
import { useEffect, useState } from "react";
import Card from "@/common/components/card";
import { CarouselWrapper } from "@/common/components/carousel";
import { Container } from "@/common/components/container";
import { CarouselItem } from "@/components/ui/carousel";

function Activity() {
  const testimonials = [
    {
      title: "Direito do trabalho",
      description: "Defesa dos seus direitos nas relações de trabalho",
      imageSrc: "/assets/trabalho.svg",
    },
    {
      title: "Direito cível",
      description: "Soluções jurídicas para conflitos do dia a dia",
      imageSrc: "/assets/civel.svg",
    },
    {
      title: "Direito do consumidor",
      description: "Justiça em casos de abuso ou propaganda enganosa",
      imageSrc: "/assets/consumidor.svg",
    },
    {
      title: "Direito da família",
      description:
        "Atuação em divórcios, pensão, guarda e regulamentação de visitas",
      imageSrc: "/assets/familia.svg",
    },
  ];

  const [isTabletUp, setIsTabletUp] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsTabletUp(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Container className="flex flex-col justify-center">
      <div id="areas" className="flex flex-col items-center">
        <h1 className="font-02 text-center tablet:text-start text-[20px] text-accent font-semibold mb-4 mt-24">
          ÁREAS DE ATUAÇÃO
        </h1>
        <CarouselWrapper autoplay={false} showArrows={isTabletUp}>
          {testimonials.map((testimonial, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-4">
                <Card
                  title={testimonial.title}
                  description={testimonial.description}
                  imageSrc={testimonial.imageSrc}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselWrapper>
      </div>
    </Container>
  );
}

export default Activity;
