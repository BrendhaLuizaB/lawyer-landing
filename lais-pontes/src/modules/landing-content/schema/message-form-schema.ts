import { z } from "zod";

export const formSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório."),
  email: z.string().email("E-mail é obrigatório."),
  title: z.string().min(1, "O título é obrigatório."),
  message: z.string().min(1, "A mensagem é um campo obrigatório."),
});

export type MessageFormData = z.infer<typeof formSchema>;
