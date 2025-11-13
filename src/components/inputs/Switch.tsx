"use client";

import { useState } from "react";
import { clsx } from "clsx";

export type SwitchProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
  description?: string;
};

export function Switch({ checked, onChange, label, description }: SwitchProps) {
  const [internalChecked, setInternalChecked] = useState(checked ?? false);
  const isControlled = typeof checked === "boolean";
  const currentChecked = isControlled ? checked : internalChecked;

  const toggle = () => {
    const nextValue = !currentChecked;
    if (!isControlled) setInternalChecked(nextValue);
    onChange?.(nextValue);
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={currentChecked}
      onClick={toggle}
      className="flex w-full items-center justify-between gap-4 rounded-2xl bg-white px-4 py-3 text-left shadow-sm"
    >
      <span>
        {label && <span className="block text-base font-medium text-neutral-dark">{label}</span>}
        {description && <span className="block text-sm text-neutral-dark/60">{description}</span>}
      </span>
      <span
        className={clsx(
          "relative inline-flex h-6 w-12 items-center rounded-full transition",
          currentChecked ? "bg-primary-orange" : "bg-neutral-light"
        )}
      >
        <span
          className={clsx(
            "inline-block h-5 w-5 rounded-full bg-white shadow transition-transform",
            currentChecked ? "translate-x-6" : "translate-x-1"
          )}
        />
      </span>
    </button>
  );
}
