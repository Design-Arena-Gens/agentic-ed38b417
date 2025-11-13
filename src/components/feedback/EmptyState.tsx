import { Button } from "../primitives/Button";
import type { ReactNode } from "react";

export type EmptyStateProps = {
  title: string;
  description: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
  illustration?: ReactNode;
};

export function EmptyState({ title, description, ctaLabel, onCtaClick, illustration }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center gap-6 rounded-3xl bg-white p-10 text-center shadow-card">
      {illustration ?? (
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary-orange/10 text-4xl">
          🍲
        </div>
      )}
      <div className="space-y-2">
        <h3 className="text-2xl font-semibold text-neutral-dark">{title}</h3>
        <p className="text-base text-neutral-dark/70">{description}</p>
      </div>
      {ctaLabel && (
        <Button intent="primary" onClick={onCtaClick}>
          {ctaLabel}
        </Button>
      )}
    </div>
  );
}
