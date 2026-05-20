import { Link } from "@tanstack/react-router";
import { Reveal } from "./Reveal";
import { trades } from "@/data/trades/trades";
import type { Trade } from "@/data/trades/types";

export function BuiltForYourTrade() {
  return (
    <section id="trades" className="border-t border-border/60 bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Built for your trade
              </span>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                A landing page for every Aussie trade.
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Real photos. Real line items. Written in your trade's language —
                not corporate speak.
              </p>
            </div>
            <Link
              to="/for"
              className="self-start text-sm font-medium text-primary transition hover:underline sm:self-auto"
            >
              See all trades →
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {trades.map((trade, i) => (
            <Reveal key={trade.slug} delay={i * 80}>
              <TradeCard trade={trade} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function TradeCard({ trade }: { trade: Trade }) {
  return (
    <Link
      to="/for/$trade"
      params={{ trade: trade.slug }}
      className="group relative block aspect-[4/5] overflow-hidden rounded-2xl border border-border/70 bg-card transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
    >
      <img
        src={trade.image}
        alt={trade.imageAlt}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/5"
      />

      <span
        aria-hidden="true"
        className="absolute left-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-lg shadow-sm backdrop-blur"
      >
        {trade.emoji}
      </span>

      <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 p-5 sm:p-6">
        <span className="text-[11px] font-medium uppercase tracking-wider text-white/75">
          Quoto for
        </span>
        <h3 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
          {trade.shortLabel}
        </h3>
        <span className="mt-1 inline-flex items-center gap-1.5 text-sm font-medium text-white/90">
          See how it fits
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
