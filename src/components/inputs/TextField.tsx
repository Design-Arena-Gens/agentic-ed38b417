"use client";

import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  helperText?: string;
  error?: string;
};

export function TextField({ label, helperText, error, className, id, ...rest }: TextFieldProps) {
  const fieldId = id ?? `field-${label.toLowerCase().replace(/\s+/g, "-")}`;
  const showError = Boolean(error);

  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={fieldId} className="text-sm font-medium text-neutral-dark">
        {label}
      </label>
      <input
        id={fieldId}
        className={clsx(
          "w-full rounded-2xl border bg-white px-4 py-3 text-base text-neutral-dark shadow-sm transition focus:outline-none",
          showError ? "border-feedback-error" : "border-transparent focus:border-primary-orange focus:ring-2 focus:ring-primary-orange/10",
          className
        )}
        {...rest}
      />
      {(helperText || error) && (
        <p className={clsx("text-sm", showError ? "text-feedback-error" : "text-neutral-dark/60")}>{error ?? helperText}</p>
      )}
    </div>
  );
}
