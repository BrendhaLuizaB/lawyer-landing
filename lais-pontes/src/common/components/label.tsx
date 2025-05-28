import { ComponentProps } from "react";
import { VariantProps, cn, tv } from "tailwind-variants";

const label = tv(
  {
    base: "absolute left-4 font-02 transition-all duration-300",
    variants: {
      state: {
        focused:
          "-translate-y-2 transform bg-white px-[5px] text-3xs text-primary-500",
        active:
          "-translate-y-2 transform bg-white px-[5px] text-3xs text-neutral-400",
        normal: "bg-transparent p-0 text-2xs text-neutral-500",
        hasValue: cn(
          "-translate-y-2 transform z-50 bg-white px-[5px] text-3xs",
          "text-neutral-500"
        )
      },
      messageType: {
        info: "text-neutral-400",
        error: "text-danger-dark",
      },
      disabled: {
        true: "cursor-not-allowed text-neutral-300",
      },
      isSelect: {
        true: 'group-aria-[expanded=true]:-translate-y-1/2 group-aria-[expanded=true]:transform py-0 group-aria-[expanded=true]:text-blue-500 group-aria-[expanded=true]:text-3xs',
        false:
          'group-focus-within:text-3xs group-focus-within:-translate-y-1/2 group-focus-within:transform',
      },
      inputType: {
        textfield: "top-0",
        textarea: "top-[23px]",
      },
      size: {
        sm: "py-2.5 text-2xs",
        md: "py-3.5 text-2xs",
        lg: "py-4 text-xs",
      },
      isResponsive: {
        true: "m-0 py-3.5",
      },
      textarea: {
        true: "py-[18px]",
      },
    },
    compoundVariants: [
      {
        size: "lg",
        textarea: true,
        class: "ml-2",
      },
      {
        state: "focused",
        responsive: true,
        class:
          "-translate-y-2 transform bg-white px-[5px] text-3xs text-primary-500",
      },
      {
        state: "active",
        responsive: true,
        class:
          "-translate-y-2 transform bg-white px-[5px] text-3xs text-neutral-400",
      },
      {
        state: "normal",
        responsive: true,
        class: "bg-transparent text-neutral-500 tablet:py-3 tablet:text-xs",
      },
      {
        state: "focused",
        messageType: "info",
        class: "text-primary-500",
      },
      {
        state: ["focused", "active"],
        class: "py-0 text-3xs",
      },
      {
        state: ["focused", "active"],
        messageType: "error",
        class:
          "-translate-y-2 transform bg-white px-[5px] text-3xs text-danger-dark",
      },
    ],
    defaultVariants: {
      state: "normal",
      messageType: "info",
      disabled: false,
      inputType: "textfield",
      size: "sm",
      textarea: false,
    },
  },
  {}
);

export type LabelProps = ComponentProps<"label"> &
  VariantProps<typeof label> & {
    labelText: string;
    inputId: string;
  };

export function Label({
  labelText,
  inputId,
  isSelect,
  state,
  messageType,
  disabled,
  isResponsive,
  textarea,
  inputType,
  size,
  className,
  ...props
}: LabelProps) {
  return (
    <label
      htmlFor={inputId}
      data-message-type={messageType}
      className={label({
        state,
        messageType,
        disabled,
        isResponsive,
        textarea,
        isSelect,
        inputType,
        size,
        className,
      })}
      {...props}
    >
      {labelText}
    </label>
  );
}
