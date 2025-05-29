import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    question: "Quais são os principais direitos em um processo de divórcio?",
    answer:
      "No divórcio, os direitos envolvem a partilha de bens, definição da guarda dos filhos, pensão alimentícia e, em alguns casos, o direito de permanecer no imóvel do casal. Tudo depende do regime de bens e das particularidades da relação.",
  },
  {
    question:
      "Fui ofendido ou prejudicado por alguém. Posso pedir indenização por danos morais?",
    answer:
      "Sim. Sempre que sua honra, imagem ou dignidade forem violadas, você pode buscar uma indenização por danos morais. É importante reunir provas que mostrem o prejuízo emocional ou psicológico causado.",
  },
  {
    question:
      "Comprei um produto com defeito e a loja não resolveu. O que fazer?",
    answer:
      "Você tem direito à troca, conserto ou devolução do valor pago. Se a loja não resolver, é possível acionar os órgãos de defesa do consumidor ou entrar com uma ação judicial.",
  },
  {
    question: "A empresa me demitiu sem justificativa. Isso é legal?",
    answer:
      "Demissões sem justa causa são permitidas, mas a empresa deve cumprir obrigações legais como aviso prévio, pagamento de verbas rescisórias, saldo de FGTS e liberação para o seguro-desemprego.",
  },
  {
    question: "Quem tem direito à pensão alimentícia?",
    answer:
      "Filhos menores, cônjuges ou ex-cônjuges e, em alguns casos, pais idosos podem ter direito à pensão alimentícia, desde que comprovem necessidade e possibilidade de quem paga.",
  },
];

export function FAQ() {
  return (
    <div id="duvidas" className="flex flex-col justify-center items-center px-4 tablet:px-0">
      <h1 className="font-02 text-center tablet:text-start text-[20px] text-accent font-semibold mb-4 mt-24">
        DÚVIDAS FREQUENTES
      </h1>
      <div className="w-full max-w-3xl">
        <Accordion type="single" collapsible>
          {faqItems.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="font-02 text-md">{item.question}</AccordionTrigger>
              <AccordionContent className="text-subtitle text-sm font-02">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}

export default FAQ;
