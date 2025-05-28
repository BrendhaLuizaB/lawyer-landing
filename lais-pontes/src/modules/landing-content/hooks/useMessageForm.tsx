"use client";

import { useForm } from "@/hooks/use-form";
import { formSchema, MessageFormData } from "../schema/message-form-schema";

export const useMessageForm = () => {
  const {
    control,
    setValue,
    handleSubmit,
    register,
    getValues,
    watch,
    formState: { errors, isDirty, isValid, isSubmitting },
  } = useForm<MessageFormData>({
    schema: formSchema,
    defaultValues: {
      name: "",
      email: "",
      title: "",
      message: "",
    },
  });

  return {
    isSubmitting,
    control,
    handleSubmit,
    register,
    errors,
    isDirty,
    isValid,
    watch,
    getValues,
    setValue,
    reset: () => {
      setValue("name", "");
      setValue("email", "");
      setValue("title", "");
      setValue("message", "");
    },
  };
};
