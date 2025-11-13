import { Button } from "../primitives/Button";
import type { ReactNode } from "react";

export type PageHeaderProps = {
  title: string;
  subtitle?: string;
  primaryAction?: {
    label: string;
    onClick: () => void;
  };
  secondaryAction?: ReactNode;
};

export function PageHeader({ title, subtitle, primaryAction, secondaryAction }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-4 rounded-3xl bg-white px-6 py-8 shadow-card">
      <div className="space-y-2">
        <h1 className="text-3xl font-semibold text-neutral-dark">{title}</h1>
        {subtitle && <p className="text-base text-neutral-dark/70">{subtitle}</p>}
      </div>
      <div className="flex flex-wrap gap-3">
        {primaryAction && (
          <Button intent="primary" onClick={primaryAction.onClick}>
            {primaryAction.label}
          </Button>
        )}
        {secondaryAction}
      </div>
    </header>
  );
}
