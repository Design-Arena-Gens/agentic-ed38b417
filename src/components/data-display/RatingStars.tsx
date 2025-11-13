import { clsx } from "clsx";

export type RatingStarsProps = {
  rating: number;
  outOf?: number;
  showLabel?: boolean;
};

export function RatingStars({ rating, outOf = 5, showLabel = true }: RatingStarsProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        {Array.from({ length: outOf }).map((_, index) => {
          const isFull = index < fullStars;
          const isHalf = !isFull && index === fullStars && hasHalf;

          return (
            <span
              key={index}
              className={clsx(
                "inline-flex h-4 w-4 items-center justify-center",
                isFull || isHalf ? "text-primary-orange" : "text-neutral-light"
              )}
            >
              {isHalf ? "◐" : isFull ? "★" : "☆"}
            </span>
          );
        })}
      </div>
      {showLabel && <span className="text-sm font-medium text-neutral-dark">{rating.toFixed(1)}</span>}
    </div>
  );
}
