import Image from "next/image";
import { Button } from "../button/button";

export function Hero() {
  return (
    <div className="mt-8">
      <div className="flex flex-col items-center max-w-[52.7rem] w-full mx-auto text-center gap-6 px-4">
        <h1 className="font-01 font-bold text-[32px] tablet:text-[64px] leading-tight">
          Assessoria jurídica com empatia.
        </h1>
        <p className="font-02 text-sm tablet:text-md">
          Advogada especializada em Direito Trabalhista, Cível e do Consumidor —
          com você em cada etapa.
        </p>
        <Button
          className="rounded-sm"
          text="Vamos conversar"
          phone="5521951019463"
          message="Olá! vim pelo site :)"
        />
      </div>
      <div className="flex justify-center mt-12 px-4">
        <Image
          className="rounded-sm w-full h-auto max-w-5xl"
          src="/assets/martelo.jpg"
          alt="Martelo"
          width={1289}
          height={440}
        />
      </div>
    </div>
  );
}

export default Hero;
