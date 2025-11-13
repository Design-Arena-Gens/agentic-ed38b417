"use client";

import { useState } from "react";
import { clsx } from "clsx";

export type PhoneNumberInputProps = {
  value?: string;
  onChange?: (value: string) => void;
  error?: string;
  helperText?: string;
  label?: string;
};

const INDIAN_MOBILE_REGEX = /^[6-9]\d{9}$/;

export function PhoneNumberInput({
  value = "",
  onChange,
  error,
  helperText,
  label = "Enter mobile number"
}: PhoneNumberInputProps) {
  const [internalValue, setInternalValue] = useState(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const sanitized = event.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    setInternalValue(sanitized);
    onChange?.(sanitized);
  };

  const isValid = internalValue.length === 10 && INDIAN_MOBILE_REGEX.test(internalValue);
  const showError = Boolean(error) || (internalValue.length === 10 && !isValid);

  return (
    <div className="flex w-full flex-col gap-2">
      <label className="text-sm font-medium text-neutral-dark" htmlFor="phone-number-input">
        {label}
      </label>
      <div
        className={clsx(
          "flex items-center justify-between gap-2 rounded-2xl border bg-white px-4 py-3 shadow-sm transition",
          showError ? "border-feedback-error" : "border-transparent focus-within:border-primary-orange"
        )}
      >
        <span className="text-sm font-medium text-neutral-dark">+91</span>
        <input
          id="phone-number-input"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={10}
          value={internalValue}
          onChange={handleChange}
          placeholder="9876543210"
          className="w-full bg-transparent text-base text-neutral-dark placeholder:text-neutral-dark/40 focus:outline-none"
        />
        {isValid && (
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary-green/10 text-primary-green">
            ✓
          </span>
        )}
      </div>
      <p
        className={clsx(
          "text-sm",
          showError ? "text-feedback-error" : "text-neutral-dark/60"
        )}
      >
        {showError ? error ?? "Enter a valid 10-digit Indian mobile number" : helperText ?? "We will send you a 4-digit OTP"}
      </p>
    </div>
  );
}
