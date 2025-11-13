import Image from "next/image";
import { QuantityStepper } from "../inputs/QuantityStepper";

export type CartItemCardProps = {
  name: string;
  chef: string;
  price: number;
  quantity: number;
  imageUrl: string;
  onQuantityChange: (quantity: number) => void;
};

export function CartItemCard({ name, chef, price, quantity, imageUrl, onQuantityChange }: CartItemCardProps) {
  return (
    <article className="flex items-center gap-4 rounded-3xl bg-white p-4 shadow-card">
      <div className="relative h-20 w-20 overflow-hidden rounded-2xl">
        <Image src={imageUrl} alt={name} fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col gap-2">
        <div>
          <h4 className="text-base font-semibold text-neutral-dark">{name}</h4>
          <p className="text-sm text-neutral-dark/60">By {chef}</p>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-neutral-dark">₹{(price * quantity).toFixed(0)}</span>
          <QuantityStepper value={quantity} min={1} max={10} onChange={onQuantityChange} compact />
        </div>
      </div>
    </article>
  );
}
