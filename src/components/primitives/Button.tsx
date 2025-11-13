"use client";

import { cva, type VariantProps } from "class-variance-authority";
import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";

const buttonStyles = cva(
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-orange disabled:cursor-not-allowed disabled:opacity-60",
  {
    variants: {
      intent: {
        primary: "bg-primary-orange text-white shadow-card hover:bg-[#ff7a00]",
        secondary: "bg-white text-primary-orange border border-primary-orange hover:bg-[#ffe8d1]",
        ghost: "bg-transparent text-neutral-dark hover:bg-warm-white border border-transparent",
        success: "bg-primary-green text-white hover:bg-[#35a034]",
        danger: "bg-feedback-error text-white hover:bg-[#e32f26]"
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-5 py-3 text-base",
        lg: "px-6 py-4 text-lg"
      }
    },
    defaultVariants: {
      intent: "primary",
      size: "md"
    }
  }
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonStyles> & {
    loading?: boolean;
  };

export function Button({ intent, size, className, loading, children, disabled, ...rest }: ButtonProps) {
  return (
    <button
      className={clsx(buttonStyles({ intent, size }), className)}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && (
        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" aria-hidden />
      )}
      <span>{children}</span>
    </button>
  );
}
