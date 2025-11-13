import type { ReactNode } from "react";

export type Highlight = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export type HighlightsGridProps = {
  highlights: Highlight[];
};

export function HighlightsGrid({ highlights }: HighlightsGridProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {highlights.map((highlight) => (
        <article key={highlight.title} className="flex flex-col gap-3 rounded-3xl bg-white p-5 shadow-card">
          {highlight.icon && <div className="text-3xl">{highlight.icon}</div>}
          <h3 className="text-lg font-semibold text-neutral-dark">{highlight.title}</h3>
          <p className="text-sm text-neutral-dark/70">{highlight.description}</p>
        </article>
      ))}
    </div>
  );
}
