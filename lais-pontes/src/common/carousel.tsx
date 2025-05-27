import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Card from "./card";

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


export function TestimonialsCarousel() {
    return (
      <Carousel
        opts={{ align: "start" }}
        className="w-full max-w-lg tablet:max-w-5xl mx-auto"
      >
        <CarouselContent>
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
        </CarouselContent>
  
        {/* Só aparece em tablet ou maior */}
        <div className="hidden tabletCarousel:block">
          <CarouselPrevious />
          <CarouselNext />
        </div>
      </Carousel>
    );
  }
  
