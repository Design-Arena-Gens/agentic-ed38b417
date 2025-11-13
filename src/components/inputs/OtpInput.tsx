"use client";

import { useEffect, useRef } from "react";
import { clsx } from "clsx";

export type OtpInputProps = {
  length?: 4 | 6;
  value: string;
  onChange: (value: string) => void;
  autoFocus?: boolean;
};

export function OtpInput({ length = 4, value, onChange, autoFocus }: OtpInputProps) {
  const inputsRef = useRef<HTMLInputElement[]>([]);

  useEffect(() => {
    if (!autoFocus) return;
    const firstInput = inputsRef.current[0];
    firstInput?.focus();
  }, [autoFocus]);

  useEffect(() => {
    const handleOtpAutoFill = (event: ClipboardEvent) => {
      if (event.clipboardData) {
        const pasted = event.clipboardData.getData("text").replace(/[^0-9]/g, "");
        if (pasted.length === length) {
          onChange(pasted.slice(0, length));
        }
      }
    };

    window.addEventListener("paste", handleOtpAutoFill);
    return () => window.removeEventListener("paste", handleOtpAutoFill);
  }, [length, onChange]);

  const handleChange = (index: number, digit: string) => {
    const sanitized = digit.replace(/[^0-9]/g, "");
    if (!sanitized) {
      onChange(value.slice(0, index) + value.slice(index + 1));
      return;
    }

    const nextValue = value.slice(0, index) + sanitized + value.slice(index + 1);
    onChange(nextValue.slice(0, length));

    if (sanitized && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (event.key === "Backspace" && !value[index] && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }

    if (event.key === "ArrowLeft" && index > 0) {
      event.preventDefault();
      inputsRef.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < length - 1) {
      event.preventDefault();
      inputsRef.current[index + 1]?.focus();
    }
  };

  return (
    <div className="flex items-center justify-center gap-3">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          type="text"
          inputMode="numeric"
          maxLength={1}
          value={value[index] ?? ""}
          onChange={(event) => handleChange(index, event.target.value)}
          onKeyDown={(event) => handleKeyDown(event, index)}
          ref={(node) => {
            if (node) inputsRef.current[index] = node;
          }}
          className={clsx(
            "h-14 w-12 rounded-2xl border text-center text-xl font-semibold text-neutral-dark shadow-sm",
            value[index] ? "border-primary-orange" : "border-neutral-light"
          )}
        />
      ))}
    </div>
  );
}
