"use client";

import { toast } from "sonner";
import emailjs from "emailjs-com";
import { Container } from "@/common/components/container";
import { Input } from "@/common/components/input";
import { TextArea } from "@/common/components/input-text-area";
import { Button } from "../button/button";
import { useMessageForm } from "@/modules/landing-content/hooks/useMessageForm";
import { MessageFormData } from "@/modules/landing-content/schema/message-form-schema";

export function MessageForm() {
  const {
    register,
    handleSubmit,
    errors, isDirty, isValid, isSubmitting,
    reset,
  } = useMessageForm();

  const onSubmit = async (data: MessageFormData) => {
    try {
      await emailjs.send(
        "service_y4ju8dj",
        "template_whk55mj",
        data,
        "lOhoeQooPOFFBmc8C"
      );
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (err) {
      console.error("Erro ao enviar:", err);
      toast.error("Erro ao enviar a mensagem. Tente novamente.");
    }
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center mb-14">
        <h1 className="font-02 text-center tablet:text-start text-[20px] text-accent font-semibold mb-4 mt-24">
          ENTRE EM CONTATO
        </h1>
      </div>
      <div className="bg-black py-12">
        <Container>
          <div className="max-w-lg mx-auto w-full px-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-6"
            >
              <Input
                inputId="title"
                label="Título da mensagem"
                {...register("title")}
                message={errors.title?.message}
                messageType={errors.title ? "error" : undefined}
              />
              <Input
                inputId="name"
                label="Seu nome"
                {...register("name")}
                message={errors.name?.message}
                messageType={errors.name ? "error" : undefined}
              />
              <Input
                inputId="email"
                label="Seu email"
                {...register("email")}
                message={errors.email?.message}
                messageType={errors.email ? "error" : undefined}
              />
              <TextArea
                textAreaId="message"
                label="Sua mensagem"
                {...register("message")}
                message={errors.message?.message}
                messageType={errors.message ? "error" : undefined}
              />
              <Button
                type="submit"
                text={isSubmitting ? "Enviando..." : "Enviar"}
                disabled={!isDirty || !isValid || isSubmitting}
              />
            </form>
          </div>
        </Container>
      </div>
    </div>
  );
}
