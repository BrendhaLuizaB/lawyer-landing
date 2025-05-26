import { Container } from "@/common/container";
import Image from "next/image";
import { Button } from "../button/button";

export function AboutSection() {
  const textAboutMe =
    "Sou advogada formada pela Universidade Federal do Rio de Janeiro (UFRJ), com registro na OAB e atuação focada em Direito do Trabalho, Direito Cível e Direito do Consumidor. Acredito em uma advocacia acessível, próxima e comprometida com as pessoas. Atuo com empatia e responsabilidade, acompanhando cada etapa do processo ao seu lado.";

  return (
    <Container>
      <div className="flex flex-col tablet:flex-row justify-between items-center gap-12">
        <div className="w-full tablet:w-2/3">
          <h1 className="font-02 text-center tablet:text-start text-[20px] text-accent font-semibold mb-4">
            SOBRE MIM
          </h1>
          <p className="text-[24px] text-justify tablet:text-[32px] font-02 leading-relaxed px-4 tablet:pr-[50px] tablet:pl-0">
            {textAboutMe}
          </p>
          <div className="flex justify-center tablet:justify-start">
            <Button
              className="rounded-sm mt-6"
              text="Entre em contato"
              phone="5521951019463"
              message="Olá! vim pelo site :)"
            />
          </div>
        </div>
        <div className="w-full tablet:w-1/3 flex justify-center">
          <Image
            src="/assets/tingey-injury-law.jpg"
            alt="Advogada"
            width={497}
            height={744}
            className="rounded-sm h-auto w-full max-w-[300px] tablet:max-w-none"
          />
        </div>
      </div>
    </Container>
  );
}

export default AboutSection;
