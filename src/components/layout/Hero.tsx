import Image from "next/image";
import { Button } from "../primitives/Button";

export type HeroProps = {
  headline: string;
  subheadline: string;
  ctaLabel: string;
  onCtaClick?: () => void;
  backgroundImage: string;
};

export function Hero({ headline, subheadline, ctaLabel, onCtaClick, backgroundImage }: HeroProps) {
  return (
    <section className="relative overflow-hidden rounded-3xl bg-white shadow-card">
      <div className="absolute inset-0">
        <Image src={backgroundImage} alt={headline} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-dark/80 to-neutral-dark/20" />
      </div>
      <div className="relative z-10 flex flex-col gap-4 p-10 text-white">
        <p className="text-sm font-semibold uppercase tracking-wide text-primary-orange">Home Bite</p>
        <h1 className="text-3xl font-semibold">{headline}</h1>
        <p className="max-w-xl text-base text-white/80">{subheadline}</p>
        <div>
          <Button intent="secondary" onClick={onCtaClick} className="bg-white text-primary-orange">
            {ctaLabel}
          </Button>
        </div>
      </div>
    </section>
  );
}
