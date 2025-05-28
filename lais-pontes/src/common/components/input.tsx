"use client";

import {
  ChangeEvent,
  ComponentProps,
  FocusEventHandler,
  forwardRef,
  useEffect,
  useState,
} from "react";
import { VariantProps, tv } from "tailwind-variants";
import { useIMask } from "react-imask";
import { type FactoryOpts, Masked, createMask } from "imask";
import { Label } from "./label";
import { InputMessage } from "./input-message";

const input = tv({
  base: "box-border w-full rounded border border-neutral-200 font-02 font-light outline-none placeholder:opacity-0",
  variants: {
    inputSize: {
      sm: "h-10 px-3 py-2.5",
      md: "h-12 px-4 py-3.5",
      lg: "h-14 px-6 py-5",
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
      true: "h-12 px-3 py-2.5 text-2xs tablet:h-12 tablet:px-4 tablet:py-3.5 tablet:text-xs",
    },
  },
  compoundVariants: [
    {
      inputSize: ["sm", "md"],
      class: "text-2xs",
    },
    {
      inputSize: "lg",
      class: "text-xs",
    },
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
  ],
  defaultVariants: {
    inputSize: "sm",
    messageType: "info",
    disabled: false,
    active: false,
  },
});

export type InputProps = ComponentProps<"input"> &
  VariantProps<typeof input> & {
    message?: string;
    label: string;
    inputId: string;
    value?: string | number;
    mask?: string | string[];
    optMask?: string | Masked;
  };

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(
  (
    {
      message,
      label,
      inputId,
      value,
      mask,
      optMask,
      inputSize,
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
    const [opts, setOpts] = useState<FactoryOpts>({ mask: "" });

    const handleFocus: FocusEventHandler<HTMLInputElement> = (event) => {
      setLabelState("focused");
      onFocus?.(event);
    };

    const { ref: inputMaskRef } = useIMask(opts, {
      onAccept(_value, _maskRef, e?) {
        if (!e) return;

        onChange?.(e as unknown as ChangeEvent<HTMLInputElement>);
      },
    });

    const handleBlur: FocusEventHandler<HTMLInputElement> = (event) => {
      setLabelState(event.target.value ? "active" : "normal");
      onBlur?.(event);
    };

    function handleRefs(instance: HTMLInputElement | null) {
      if (ref) {
        if (typeof ref === "function") {
          ref(instance);
        } else {
          ref.current = instance;
        }
      }

      if (instance) {
        inputMaskRef.current = instance;
        if (labelState !== "focused") {
          setLabelState(
            instance.value && instance.value !== "" ? "active" : "normal"
          );
        }
      }
    }

    useEffect(() => {
      if (mask) {
        if (Array.isArray(mask)) {
          setOpts({
            mask: createMask({
              mask: mask.map((m) => createMask({ mask: m })),
            }),
          });
        } else {
          setOpts({ mask });
        }
      }
    }, [mask]);

    useEffect(() => {
      if (optMask) {
        if (typeof optMask === "string") {
          setOpts({
            mask: createMask({ mask: optMask }),
          });
        } else {
          setOpts({ mask: optMask });
        }
      }
    }, [optMask]);

    return (
      <div className="relative w-full">
        <input
          id={inputId}
          placeholder={label}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={onChange}
          className={input({
            inputSize,
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
          inputId={inputId}
          labelText={label}
          messageType={messageType}
          size={inputSize}
          isResponsive={isResponsive}
        />
        {message && (
          <InputMessage message={message} messageType={messageType} />
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
