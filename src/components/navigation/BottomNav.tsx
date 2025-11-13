"use client";

import { HomeIcon, HeartIcon, UserCircleIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { clsx } from "clsx";
import type { ReactNode } from "react";

export type BottomNavItem = {
  id: string;
  label: string;
  icon: ReactNode;
};

export type BottomNavProps = {
  items?: BottomNavItem[];
  activeId: string;
  onChange: (id: string) => void;
};

const defaultItems: BottomNavItem[] = [
  { id: "home", label: "Home", icon: <HomeIcon className="h-6 w-6" /> },
  { id: "favourites", label: "Favourites", icon: <HeartIcon className="h-6 w-6" /> },
  { id: "orders", label: "Orders", icon: <ShoppingBagIcon className="h-6 w-6" /> },
  { id: "profile", label: "Profile", icon: <UserCircleIcon className="h-6 w-6" /> }
];

export function BottomNav({ items = defaultItems, activeId, onChange }: BottomNavProps) {
  return (
    <nav className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] max-w-xl -translate-x-1/2 rounded-full bg-white px-3 py-2 shadow-card">
      <ul className="flex items-center justify-between">
        {items.map((item) => {
          const isActive = item.id === activeId;
          return (
            <li key={item.id}>
              <button
                type="button"
                onClick={() => onChange(item.id)}
                className={clsx(
                  "flex flex-col items-center gap-1 rounded-full px-3 py-1 text-xs font-medium",
                  isActive ? "text-primary-orange" : "text-neutral-dark/60"
                )}
              >
                <span className={clsx("inline-flex items-center justify-center", isActive && "text-primary-orange")}>{item.icon}</span>
                <span>{item.label}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
