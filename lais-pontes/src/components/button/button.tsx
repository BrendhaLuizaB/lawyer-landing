"use client";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames";
import Link from "next/link";
import { ComponentProps, MouseEvent, ReactNode, useRef } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex items-center justify-center gap-3 font-02 font-semibold transition duration-300 ease-in-out",
  variants: {
    variant: {
      primary:
        "border-primary-400 bg-accent text-white hover:bg-accentLight focus:border-primary-600 focus:bg-primary-400",
      secondary:
        "border-primary-50 bg-primary-50 text-primary-600 hover:border-primary-100 hover:bg-primary-100 focus:border-primary-600 focus:bg-primary-200",
      danger:
        "border-danger-dark bg-danger-dark text-white hover:border-danger-default hover:bg-danger-default hover:text-danger-dark focus:border-danger-dark focus:bg-danger-light focus:text-danger-dark",
      warning:
        "border-warning-dark bg-warning-dark text-white hover:border-warning-default hover:bg-warning-default hover:text-warning-dark focus:border-warning-dark focus:bg-warning-light focus:text-warning-dark",
      success:
        "border-success-dark bg-success-dark text-white hover:border-success-default hover:bg-success-default hover:text-success-dark focus:border-success-dark focus:bg-success-light focus:text-success-dark",
      link: "border-transparent bg-transparent text-primary-400 hover:text-primary-600 focus:text-neutral-600",
    },
    size: {
      xs: "h-8 px-3 py-2",
      sm: "h-10 px-4 py-3",
      md: "h-12 px-6 py-4",
      lg: "font-xs h-14 px-8 py-5",
    },
    shape: {
      pill: "rounded-pill",
      normal: "rounded-xs",
    },
    disabled: {
      true: "cursor-not-allowed border-neutral-200 bg-neutral-200 text-white hover:border-neutral-200 hover:bg-neutral-200 hover:text-white focus:border-neutral-200 focus:bg-neutral-200",
    },
    loading: {
      true: "cursor-wait",
    },
    isResponsive: {
      true: "tablet:font-xs h-12 px-6 py-4 tablet:h-14 tablet:px-8 tablet:py-5",
    },
  },
  compoundVariants: [
    {
      size: ["xs", "sm", "md"],
      class: "text-2xs",
    },
    {
      variant: "link",
      disabled: true,
      class:
        "cursor-not-allowed border-transparent bg-transparent text-neutral-300 hover:border-transparent hover:bg-transparent hover:text-neutral-300 focus:border-transparent focus:bg-transparent focus:text-neutral-300",
    },
    {
      disabled: true,
      loading: true,
      class:
        "border-neutral-300 bg-neutral-300 hover:border-neutral-300 hover:bg-neutral-300 focus:border-neutral-300 focus:bg-neutral-300",
    },
    {
      shape: "pill",
      class:
        "border border-primary-200 bg-neutral-0 px-4 py-3 text-2xs font-normal text-primary-400 hover:text-white focus:text-white",
    },
  ],
  defaultVariants: {
    variant: "primary",
    size: "md",
    shape: "normal",
    disabled: false,
  },
});
export type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    leftIcon?: ReactNode;
    rightIcon?: ReactNode;
    text?: string;
    isResponsive?: boolean;
    icon?: {
      name: IconProp;
      className?: string;
    };
    phone?: string;
    message?: string;
    children?: React.ReactNode;
  };

export function Button({
  variant,
  size,
  shape,
  disabled,
  leftIcon,
  rightIcon,
  icon,
  text,
  loading,
  isResponsive,
  className,
  onClick,
  phone,
  message,
  ...props
}: ButtonProps) {
  const hasIcon = leftIcon || rightIcon;

  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      buttonRef.current.focus();
      onClick?.(event);
    }
  };
  // const base = `https://wa.me/${phone}`;
  // const url = message ? `${base}?text=${encodeURIComponent(message)}` : base;
  const content = (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={button({
        variant,
        size,
        shape,
        disabled: disabled || loading,
        loading,
        isResponsive,
        className,
      })}
      disabled={disabled || loading}
      {...props}
    >
      <div className="flex items-center">
        {leftIcon}
        <div className="relative flex items-center justify-center">
          <span
            className={classnames(
              hasIcon ? "mx-2" : "",
              "font-02",
              loading ? "invisible" : ""
            )}
          >
            {text}
          </span>
        </div>
      </div>
      {rightIcon}
      {icon && <FontAwesomeIcon icon={icon.name} className={icon.className} />}
    </button>
  );

  if (phone) {
    const base = `https://wa.me/${phone}`;
    const url = message ? `${base}?text=${encodeURIComponent(message)}` : base;

    return (
      <Link href={url} target="_blank" rel="noopener noreferrer">
        {content}
      </Link>
    );
  }

  return content;
}
