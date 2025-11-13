"use client";

import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import type { InputHTMLAttributes } from "react";

export type SearchBarProps = InputHTMLAttributes<HTMLInputElement> & {
  showMicrophone?: boolean;
};

export function SearchBar({ showMicrophone = true, className, ...rest }: SearchBarProps) {
  return (
    <div
      className={clsx(
        "flex w-full items-center gap-3 rounded-full border border-transparent bg-white px-4 py-3 shadow-sm",
        "focus-within:border-primary-orange focus-within:ring-2 focus-within:ring-primary-orange/10",
        className
      )}
    >
      <MagnifyingGlassIcon className="h-5 w-5 text-primary-orange" />
      <input
        type="search"
        placeholder="Search home-cooked meals…"
        className="w-full bg-transparent text-base text-neutral-dark placeholder:text-neutral-dark/50 focus:outline-none"
        {...rest}
      />
      {showMicrophone && (
        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-orange/10 text-primary-orange transition hover:bg-primary-orange/20"
          aria-label="Voice search"
        >
          <MicrophoneIcon className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
