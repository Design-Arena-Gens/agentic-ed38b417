"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import type { ReactNode } from "react";

export type ModalProps = {
  open?: boolean;
  onOpenChange?: (value: boolean) => void;
  title: string;
  description?: string;
  triggerLabel?: string;
  children: ReactNode;
};

export function Modal({ open, onOpenChange, title, description, triggerLabel = "Open", children }: ModalProps) {
  const [internalOpen, setInternalOpen] = useState(false);
  const isControlled = typeof open === "boolean";
  const shown = isControlled ? open : internalOpen;

  const setOpen = (value: boolean) => {
    if (!isControlled) setInternalOpen(value);
    onOpenChange?.(value);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-primary-orange px-5 py-3 text-sm font-semibold text-white shadow-card transition hover:bg-[#ff7a00]"
      >
        {triggerLabel}
      </button>

      <Transition appear show={shown} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={setOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-neutral-dark/30 backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-150"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-100"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-3xl bg-white p-6 text-left align-middle shadow-card">
                  <Dialog.Title as="h3" className="text-2xl font-semibold text-neutral-dark">
                    {title}
                  </Dialog.Title>
                  {description && (
                    <p className="mt-2 text-base text-neutral-dark/70">{description}</p>
                  )}

                  <div className="mt-6">{children}</div>

                  <div className="mt-6 flex justify-end gap-3">
                    <button
                      type="button"
                      className="rounded-full bg-neutral-light px-4 py-2 text-sm font-semibold text-neutral-dark hover:bg-neutral-light/80"
                      onClick={() => setOpen(false)}
                    >
                      Close
                    </button>
                    <button
                      type="button"
                      className="rounded-full bg-primary-orange px-4 py-2 text-sm font-semibold text-white hover:bg-[#ff7a00]"
                      onClick={() => setOpen(false)}
                    >
                      Confirm
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
