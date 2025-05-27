import { TestimonialsCarousel } from "@/common/carousel";
import { Container } from "@/common/container";

function Activity() {
  return (
    <Container className="flex flex-col justify-center">
      <div className="flex flex-col items-center">
        <h1 className="font-02 text-center tablet:text-start text-[20px] text-accent font-semibold mb-4 mt-24">
          ÁREAS DE ATUAÇÃO
        </h1>
        <TestimonialsCarousel />
      </div>
    </Container>
  );
}

export default Activity;
