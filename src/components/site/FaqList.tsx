import type { ReactNode } from "react";

export type FaqItem = { q: string; a: ReactNode };

export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <ul className="divide-y divide-border/70 rounded-2xl border border-border/70 bg-card">
      {items.map((item, i) => (
        <li key={i} className="p-6 sm:p-8">
          <h3 className="text-base font-semibold text-foreground sm:text-lg">{item.q}</h3>
          <div className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            {item.a}
          </div>
        </li>
      ))}
    </ul>
  );
}
