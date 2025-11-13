"use client";

import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import type { ReactNode } from "react";

export type BottomSheetProps = {
  triggerLabel?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function BottomSheet({ triggerLabel = "View details", title, description, children }: BottomSheetProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="rounded-full bg-neutral-dark px-5 py-3 text-sm font-semibold text-white shadow-card"
      >
        {triggerLabel}
      </button>

      <Transition show={open} as={Fragment}>
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
            <div className="fixed inset-0 bg-neutral-dark/30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-x-0 bottom-0 flex max-h-[90vh] justify-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-200"
                enterFrom="translate-y-full"
                enterTo="translate-y-0"
                leave="ease-in duration-150"
                leaveFrom="translate-y-0"
                leaveTo="translate-y-full"
              >
                <Dialog.Panel className="w-full max-w-md rounded-t-3xl bg-white p-6 shadow-card">
                  <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-neutral-light" />
                  <Dialog.Title className="text-xl font-semibold text-neutral-dark">{title}</Dialog.Title>
                  {description && <p className="mt-1 text-sm text-neutral-dark/70">{description}</p>}
                  <div className="mt-4 grid gap-4">{children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
