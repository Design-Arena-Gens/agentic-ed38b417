export type ReviewCardProps = {
  reviewer: string;
  date: string;
  comment: string;
  rating: number;
};

export function ReviewCard({ reviewer, date, comment, rating }: ReviewCardProps) {
  return (
    <article className="flex flex-col gap-3 rounded-3xl bg-white p-5 shadow-card">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-base font-semibold text-neutral-dark">{reviewer}</p>
          <p className="text-sm text-neutral-dark/70">{date}</p>
        </div>
        <span className="rounded-full bg-primary-orange/10 px-3 py-1 text-sm font-semibold text-primary-orange">
          {rating.toFixed(1)} ★
        </span>
      </div>
      <p className="text-sm text-neutral-dark/80">{comment}</p>
    </article>
  );
}
