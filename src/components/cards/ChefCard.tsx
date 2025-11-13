import Image from "next/image";
import { Badge } from "../data-display/Badge";
import { RatingStars } from "../data-display/RatingStars";

export type ChefCardProps = {
  name: string;
  speciality: string;
  rating: number;
  deliveryTime: string;
  avatarUrl: string;
  isOnline?: boolean;
};

export function ChefCard({ name, speciality, rating, deliveryTime, avatarUrl, isOnline = true }: ChefCardProps) {
  return (
    <article className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-card">
      <div className="relative h-16 w-16">
        <Image src={avatarUrl} alt={name} fill className="rounded-2xl object-cover" />
        <span className="absolute -bottom-1 right-0 inline-flex items-center gap-1 rounded-full bg-white px-2 py-0.5 text-xs font-semibold text-primary-green">
          <span className={`h-2 w-2 rounded-full ${isOnline ? "bg-primary-green" : "bg-neutral-light"}`} />
          {isOnline ? "Online" : "Offline"}
        </span>
      </div>
      <div className="flex-1 space-y-2">
        <div>
          <h3 className="text-lg font-semibold text-neutral-dark">{name}</h3>
          <p className="text-sm text-neutral-dark/60">{speciality}</p>
        </div>
        <div className="flex items-center gap-3">
          <RatingStars rating={rating} showLabel={false} />
          <Badge tone="neutral">{deliveryTime}</Badge>
        </div>
      </div>
    </article>
  );
}
