'use client'
import {
  ComponentProps,
  FocusEventHandler,
  ChangeEventHandler,
  forwardRef,
  useState,
} from "react";
import { VariantProps, tv } from "tailwind-variants";
import { Label } from "./label";
import { InputMessage } from "./input-message";

const textArea = tv({
  base: "box-border w-full resize-none rounded border font-light outline-none placeholder:opacity-0",
  variants: {
    textareaSize: {
      md: "h-20 py-[18px] pl-4 pr-1",
      lg: "h-20 py-[18px] pl-6 pr-1",
    },
    messageType: {
      info: "text-neutral-600 focus:border-primary-500",
      error: "border-danger-dark",
    },
    disabled: {
      true: "cursor-not-allowed border-neutral-200 bg-neutral-50 text-neutral-300",
    },
    active: {
      true: "border border-neutral-300",
    },
    isResponsive: {
      true: "h-20 py-[18px] pl-4 pr-1 text-2xs tablet:pl-6 tablet:text-xs",
    },
  },
  compoundVariants: [
    {
      active: true,
      disabled: true,
      class: "border-neutral-200",
    },
    {
      active: true,
      messageType: "error",
      class: "border-danger-dark",
    },
    {
      textareaSize: "md",
      class: "text-2xs",
    },
    {
      textareaSize: "lg",
      class: "text-xs",
    },
  ],
  defaultVariants: {
    textareaSize: "md",
    messageType: "info",
    disabled: false,
    active: false,
  },
});

export type TextAreaProps = ComponentProps<"textarea"> &
  VariantProps<typeof textArea> & {
    message?: string;
    label: string;
    textAreaId: string;
    value?: string | number;
  };

type Ref = HTMLTextAreaElement;

export const TextArea = forwardRef<Ref, TextAreaProps>(
  (
    {
      message,
      label,
      textAreaId,
      value,
      textareaSize,
      messageType,
      disabled,
      isResponsive,
      className,
      onChange,
      onFocus,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const [labelState, setLabelState] = useState<
      "active" | "normal" | "focused"
    >("normal");

    const handleBlur: FocusEventHandler<HTMLTextAreaElement> = (event) => {
      setLabelState(event.target.value ? "active" : "normal");
      onBlur?.(event);
    };

    const handleFocus: FocusEventHandler<HTMLTextAreaElement> = (event) => {
      setLabelState("focused");
      onFocus?.(event);
    };

    const handleOnChange: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
      onChange?.(event);
    };

    function handleRefs(instance: HTMLTextAreaElement | null) {
      if (ref) {
        if (typeof ref === "function") {
          ref(instance);
        } else {
          ref.current = instance;
        }
      }

      if (instance) {
        if (labelState !== "focused") {
          setLabelState(
            instance.value && instance.value !== "" ? "active" : "normal"
          );
        }
      }
    }

    return (
      <div className="relative w-full">
        <textarea
          id={textAreaId}
          placeholder={label}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleOnChange}
          className={textArea({
            textareaSize,
            messageType,
            disabled,
            active: labelState === "active",
            isResponsive,
            className,
          })}
          disabled={disabled}
          value={value}
          ref={handleRefs}
          {...rest}
        />
        <Label
          state={labelState}
          inputId={textAreaId}
          labelText={label}
          messageType={messageType}
          size={textareaSize}
          isResponsive={isResponsive}
          textarea={true}
        />
        {message && (
          <InputMessage message={message} messageType={messageType} />
        )}
      </div>
    );
  }
);

TextArea.displayName = "TextArea";
