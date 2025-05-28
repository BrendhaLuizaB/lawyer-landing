import { CarouselWrapper } from "@/common/components/carousel";
import { CarouselItem } from "@/components/ui/carousel";

function Feedbacks() {
  const feedbacks = [
    {
      quote:
        "Atendimento humanizado e comprometido. Me senti amparada do início ao fim.",
      author: "Mariana S.",
    },
    {
      quote:
        "Profissionais extremamente capacitados e atenciosos. Resolvi meu caso com rapidez.",
      author: "Lucas M.",
    },
    {
      quote:
        "Transparência e empatia em todas as etapas. Recomendo de olhos fechados.",
      author: "Renata A.",
    },
    {
      quote:
        "Tive todo o suporte necessário para lidar com um momento difícil. Excelente atendimento.",
      author: "João P.",
    },
    {
      quote:
        "Fui muito bem orientada em cada decisão. Me senti segura e respeitada.",
      author: "Fernanda L.",
    },
    {
      quote:
        "Equipe cuidadosa, ética e muito profissional. Conquistaram minha confiança.",
      author: "Carlos H.",
    },
  ];

  return (
    <div className="bg-black px-6 py-16 tablet:px-44 tablet:py-32 mt-24">
      <CarouselWrapper autoplay showArrows={false}>
        {feedbacks.map((feedback, index) => (
          <CarouselItem key={index} className="basis-full">
            <div>
              <h1 className="text-white font-01 tablet:text-2xl">
                <q>{feedback.quote}</q> 
                <p>— {feedback.author}</p>
              </h1>
            </div>
          </CarouselItem>
        ))}
      </CarouselWrapper>
    </div>
  );
}

export default Feedbacks;
