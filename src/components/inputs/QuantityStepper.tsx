"use client";

import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline";
import { clsx } from "clsx";

export type QuantityStepperProps = {
  value: number;
  min?: number;
  max?: number;
  onChange: (value: number) => void;
  compact?: boolean;
};

export function QuantityStepper({ value, min = 1, max = 10, onChange, compact = false }: QuantityStepperProps) {
  const decrease = () => onChange(Math.max(min, value - 1));
  const increase = () => onChange(Math.min(max, value + 1));

  return (
    <div
      className={clsx(
        "inline-flex items-center gap-2 rounded-full bg-white shadow-card",
        compact ? "px-2 py-1" : "px-3 py-2"
      )}
    >
      <button
        type="button"
        onClick={decrease}
        disabled={value <= min}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-orange/10 text-primary-orange disabled:cursor-not-allowed disabled:opacity-40"
      >
        <MinusSmallIcon className="h-5 w-5" />
      </button>
      <span className="min-w-[2ch] text-center text-base font-semibold text-neutral-dark">{value}</span>
      <button
        type="button"
        onClick={increase}
        disabled={value >= max}
        className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-orange text-white disabled:cursor-not-allowed disabled:opacity-40"
      >
        <PlusSmallIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
