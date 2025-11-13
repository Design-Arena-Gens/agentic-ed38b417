import { clsx } from "clsx";

export type OrderStatus = "placed" | "accepted" | "preparing" | "out-for-delivery" | "delivered";

const statusLabels: Record<OrderStatus, string> = {
  placed: "Order Placed",
  accepted: "Chef Accepted",
  preparing: "Being Prepared",
  "out-for-delivery": "Out for Delivery",
  delivered: "Delivered"
};

const statusOrder: OrderStatus[] = ["placed", "accepted", "preparing", "out-for-delivery", "delivered"];

export type OrderTimelineProps = {
  currentStatus: OrderStatus;
  etaMinutes?: number;
};

export function OrderTimeline({ currentStatus, etaMinutes }: OrderTimelineProps) {
  const currentIndex = statusOrder.indexOf(currentStatus);
  return (
    <div className="rounded-3xl bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-dark">Delivery timeline</h3>
        {etaMinutes && <span className="text-sm font-medium text-primary-orange">ETA {etaMinutes} min</span>}
      </div>
      <ol className="mt-6 grid gap-6">
        {statusOrder.map((status, index) => {
          const reached = index <= currentIndex;
          return (
            <li key={status} className="flex items-center gap-4">
              <span
                className={clsx(
                  "flex h-9 w-9 items-center justify-center rounded-full text-sm font-semibold",
                  reached ? "bg-primary-orange text-white" : "bg-neutral-light text-neutral-dark/50"
                )}
              >
                {index + 1}
              </span>
              <div>
                <p className="text-base font-semibold text-neutral-dark">{statusLabels[status]}</p>
                <p className="text-sm text-neutral-dark/60">
                  {reached ? "Completed" : index === currentIndex + 1 ? "Up next" : "Pending"}
                </p>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
