import { clsx } from "clsx";
import type { HTMLAttributes } from "react";

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "default" | "positive" | "warning" | "neutral";
};

const toneClasses: Record<NonNullable<BadgeProps["tone"]>, string> = {
  default: "bg-primary-orange/10 text-primary-orange border border-primary-orange/30",
  positive: "bg-primary-green/10 text-primary-green border border-primary-green/30",
  warning: "bg-[#FFE8D1] text-[#B05E00] border border-[#FF8A00]/30",
  neutral: "bg-neutral-light text-neutral-dark border border-neutral-dark/10"
};

export function Badge({ tone = "default", className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium",
        toneClasses[tone],
        className
      )}
      {...rest}
    >
      {children}
    </span>
  );
}
