"use client";

import { Transition } from "@headlessui/react";
import { CheckCircleIcon, ExclamationCircleIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import { Fragment, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type ToastTone = "success" | "error" | "info";

export type ToastProps = {
  open: boolean;
  onClose: () => void;
  tone?: ToastTone;
  title: string;
  description?: string;
  duration?: number;
};

const toneStyles: Record<ToastTone, { icon: ReactNode; ring: string; text: string }> = {
  success: {
    icon: <CheckCircleIcon className="h-6 w-6" />,
    ring: "ring-primary-green/20",
    text: "text-primary-green"
  },
  error: {
    icon: <ExclamationCircleIcon className="h-6 w-6" />,
    ring: "ring-feedback-error/20",
    text: "text-feedback-error"
  },
  info: {
    icon: <CheckCircleIcon className="h-6 w-6" />,
    ring: "ring-primary-orange/20",
    text: "text-primary-orange"
  }
};

export function Toast({ open, onClose, tone = "success", title, description, duration = 4000 }: ToastProps) {
  const [visible, setVisible] = useState(open);

  useEffect(() => {
    setVisible(open);
    if (!open) return;
    const timeout = window.setTimeout(() => {
      onClose();
    }, duration);
    return () => window.clearTimeout(timeout);
  }, [open, onClose, duration]);

  const { icon, ring, text } = toneStyles[tone];

  return (
    <Transition
      show={visible}
      as={Fragment}
      enter="ease-out duration-150"
      enterFrom="translate-y-4 opacity-0"
      enterTo="translate-y-0 opacity-100"
      leave="ease-in duration-100"
      leaveFrom="translate-y-0 opacity-100"
      leaveTo="translate-y-4 opacity-0"
    >
      <div className={clsx("flex w-full max-w-sm items-start gap-4 rounded-3xl bg-white p-4 shadow-card ring-2", ring)}>
        <span className={clsx("flex h-10 w-10 items-center justify-center rounded-full", text)}>{icon}</span>
        <div className="flex-1 space-y-1">
          <p className="text-base font-semibold text-neutral-dark">{title}</p>
          {description && <p className="text-sm text-neutral-dark/70">{description}</p>}
        </div>
        <button onClick={onClose} className="text-neutral-dark/50 transition hover:text-neutral-dark" aria-label="Close toast">
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </Transition>
  );
}
