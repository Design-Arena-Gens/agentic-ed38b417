import { clsx } from "clsx";
import Image from "next/image";
import { Button } from "../primitives/Button";
import { RatingStars } from "../data-display/RatingStars";

export type MealCardProps = {
  title: string;
  chef: string;
  price: number;
  rating: number;
  imageUrl: string;
  tags?: string[];
  featured?: boolean;
  onAddToCart?: () => void;
};

export function MealCard({ title, chef, price, rating, imageUrl, tags = [], featured = false, onAddToCart }: MealCardProps) {
  return (
    <article
      className={clsx(
        "group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-card transition",
        featured && "ring-2 ring-primary-orange"
      )}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image src={imageUrl} alt={title} fill className="object-cover transition group-hover:scale-105" />
        {featured && (
          <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-sm font-semibold text-primary-orange">
            Best Seller
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col gap-4 p-4">
        <div>
          <h3 className="text-lg font-semibold text-neutral-dark">{title}</h3>
          <p className="text-sm text-neutral-dark/60">By {chef}</p>
        </div>

        <RatingStars rating={rating} />

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-neutral-light px-3 py-1 text-xs font-medium text-neutral-dark/70">
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto flex items-center justify-between">
          <div>
            <span className="text-sm text-neutral-dark/60">Starting at</span>
            <p className="text-xl font-semibold text-neutral-dark">₹{price.toFixed(0)}</p>
          </div>
          <Button intent="primary" size="sm" onClick={onAddToCart}>
            Add
          </Button>
        </div>
      </div>
    </article>
  );
}
