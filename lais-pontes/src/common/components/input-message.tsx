import { ComponentProps } from "react";
import { VariantProps, tv } from "tailwind-variants";

const inputMessage = tv({
  base: "mt-1 font-02 text-3xs/5",
  variants: {
    messageType: {
      info: "text-neutral-400",
      error: "text-danger-dark",
    },
  },
  defaultVariants: {
    messageType: "info",
  },
});

export type InputMessageProps = ComponentProps<"p"> &
  VariantProps<typeof inputMessage> & {
    message: string;
  };

export function InputMessage({
  message,
  messageType,
  className,
  ...props
}: InputMessageProps) {
  return (
    <p
      data-message-type={messageType}
      className={inputMessage({ messageType, className })}
      {...props}
    >
      {message}
    </p>
  );
}
