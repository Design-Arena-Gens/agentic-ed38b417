import type { ReactNode } from "react";

export type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
};

export function SectionHeader({ eyebrow, title, description, action }: SectionHeaderProps) {
  return (
    <div className="flex flex-wrap items-end justify-between gap-4">
      <div>
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-wide text-primary-orange">{eyebrow}</p>}
        <h2 className="text-2xl font-semibold text-neutral-dark">{title}</h2>
        {description && <p className="mt-2 max-w-xl text-sm text-neutral-dark/70">{description}</p>}
      </div>
      {action}
    </div>
  );
}
