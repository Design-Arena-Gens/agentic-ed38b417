import { clsx } from "clsx";
import type { HTMLAttributes, ReactNode } from "react";

export type BannerProps = HTMLAttributes<HTMLDivElement> & {
  tone?: "prominent" | "info" | "success" | "critical";
  action?: ReactNode;
};

const toneStyles: Record<NonNullable<BannerProps["tone"]>, string> = {
  prominent: "bg-primary-orange text-white",
  info: "bg-[#fff2e4] text-primary-orange",
  success: "bg-primary-green text-white",
  critical: "bg-feedback-error text-white"
};

export function Banner({ tone = "info", action, className, children, ...rest }: BannerProps) {
  return (
    <div
      className={clsx(
        "flex w-full items-center justify-between gap-4 rounded-3xl px-5 py-4 text-base font-medium shadow-card",
        toneStyles[tone],
        className
      )}
      {...rest}
    >
      <span>{children}</span>
      {action}
    </div>
  );
}
