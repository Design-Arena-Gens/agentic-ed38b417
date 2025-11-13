import { Bars3Icon, ShoppingBagIcon } from "@heroicons/react/24/outline";
import { HomeModernIcon } from "@heroicons/react/24/solid";
import { IconButton } from "../primitives/IconButton";

export type TopNavProps = {
  location: string;
  onLocationClick?: () => void;
  onMenuClick?: () => void;
  onCartClick?: () => void;
};

export function TopNav({ location, onLocationClick, onMenuClick, onCartClick }: TopNavProps) {
  return (
    <header className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 shadow-card">
      <IconButton aria-label="Open menu" onClick={onMenuClick}>
        <Bars3Icon className="h-6 w-6" />
      </IconButton>
      <button
        type="button"
        onClick={onLocationClick}
        className="flex items-center gap-2 rounded-full bg-neutral-light px-4 py-2 text-sm font-semibold text-neutral-dark"
      >
        <HomeModernIcon className="h-5 w-5 text-primary-orange" />
        <span>{location}</span>
      </button>
      <IconButton aria-label="View cart" onClick={onCartClick}>
        <ShoppingBagIcon className="h-6 w-6" />
      </IconButton>
    </header>
  );
}
