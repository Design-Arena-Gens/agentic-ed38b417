"use client";

import { clsx } from "clsx";
import type { ButtonHTMLAttributes } from "react";

export type IconButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "solid" | "soft" | "ghost";
  size?: "sm" | "md" | "lg";
};

const sizeClasses: Record<NonNullable<IconButtonProps["size"]>, string> = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-12 w-12"
};

const variantClasses: Record<NonNullable<IconButtonProps["variant"]>, string> = {
  solid: "bg-primary-orange text-white shadow-card hover:bg-[#ff7a00]",
  soft: "bg-[#fff2e4] text-primary-orange hover:bg-[#ffe8d1]",
  ghost: "bg-transparent text-neutral-dark hover:bg-warm-white"
};

export function IconButton({
  variant = "soft",
  size = "md",
  className,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-full transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-orange",
        variantClasses[variant],
        sizeClasses[size],
        className
      )}
      {...rest}
    >
      {children}
    </button>
  );
}
