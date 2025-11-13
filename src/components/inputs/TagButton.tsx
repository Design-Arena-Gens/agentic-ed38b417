"use client";

import { clsx } from "clsx";
import type { ButtonHTMLAttributes, ReactNode } from "react";

export type TagButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  selected?: boolean;
  icon?: ReactNode;
};

export function TagButton({ selected, icon, className, children, ...rest }: TagButtonProps) {
  return (
    <button
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition",
        selected
          ? "border-primary-orange bg-primary-orange text-white shadow-card"
          : "border-transparent bg-white text-neutral-dark hover:border-primary-orange/60 hover:bg-[#fff2e4]",
        className
      )}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </button>
  );
}
