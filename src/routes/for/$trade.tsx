import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { StoreButtons } from "@/components/site/StoreButtons";
import { FaqList } from "@/components/site/FaqList";
import { getTradeBySlug, trades } from "@/data/trades/trades";
import type { Trade } from "@/data/trades/types";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

export const Route = createFileRoute("/for/$trade")({
  loader: ({ params }) => {
    const trade = getTradeBySlug(params.trade);
    if (!trade) throw notFound();
    return { trade };
  },
  head: ({ loaderData }) => {
    const trade = loaderData?.trade;
    if (!trade) return {};
    return buildHead(trade);
  },
  component: TradePage,
  notFoundComponent: TradeNotFound,
});

function buildHead(trade: Trade) {
  const path = `/for/${trade.slug}`;
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl("/og-image.jpg");

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: `${SITE_NAME} — quoting app for ${trade.plural}`,
    description: trade.metaDescription,
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Quoting & Invoicing",
    operatingSystem: "iOS, Android",
    url,
    image: ogImage,
    inLanguage: "en-AU",
    countriesSupported: "AU",
    audience: {
      "@type": "BusinessAudience",
      audienceType: `Australian ${trade.plural}`,
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "AUD",
      availability: "https://schema.org/InStock",
    },
    publisher: { "@id": `${SITE_URL}/#organization` },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trade.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "By trade", item: absoluteUrl("/for") },
      { "@type": "ListItem", position: 3, name: trade.shortLabel, item: url },
    ],
  };

  return {
    meta: [
      { title: trade.metaTitle },
      { name: "description", content: trade.metaDescription },
      { property: "og:title", content: trade.metaTitle },
      { property: "og:description", content: trade.metaDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: url },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: trade.metaTitle },
      { name: "twitter:description", content: trade.metaDescription },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(softwareSchema) },
      { type: "application/ld+json", children: JSON.stringify(faqSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  };
}

function TradePage() {
  const { trade } = Route.useLoaderData();
  const otherTrades = trades.filter((t) => t.slug !== trade.slug).slice(0, 4);

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 pt-12 pb-16 sm:pt-16 sm:pb-20 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
                <span aria-hidden="true">{trade.emoji}</span>
                {trade.heroEyebrow}
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                {trade.heroHeadline}
              </h1>
              <p className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg">
                {trade.heroSub}
              </p>
              <StoreButtons className="mt-8" />
              <p className="mt-5 text-xs text-muted-foreground">
                Works with Xero · ServiceM8 · MYOB · QuickBooks
              </p>
            </Reveal>
          </div>
          <Reveal delay={120}>
            <div className="relative overflow-hidden rounded-3xl border border-border/70 bg-card shadow-sm">
              <img
                src={trade.image}
                alt={trade.imageAlt}
                loading="eager"
                decoding="async"
                fetchPriority="high"
                className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Pain points */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Quoting headaches Quoto fixes for {trade.plural}.
            </h2>
          </Reveal>
          <ul className="mt-10 grid gap-4 sm:grid-cols-2">
            {trade.painPoints.map((point, i) => (
              <Reveal as="li" key={i} delay={i * 60}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-border/70 bg-card p-5">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent text-xs font-semibold text-primary"
                  >
                    ✓
                  </span>
                  <p className="text-sm leading-relaxed text-foreground sm:text-base">
                    {point}
                  </p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-t border-border/60 bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built for the jobs {trade.plural} actually quote.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {trade.useCases.map((uc, i) => (
              <Reveal key={uc.title} delay={i * 80}>
                <div className="flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6">
                  <h3 className="text-lg font-semibold text-foreground">{uc.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {uc.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Line items chip cloud */}
      <section className="py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Your line items. Saved. Ready to drop in.
            </h2>
            <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Save the line items you quote week in, week out — labour, materials, callouts,
              surcharges — then drop them into any quote in a couple of taps.
            </p>
          </Reveal>
          <ul className="mt-8 flex flex-wrap gap-2">
            {trade.lineItemExamples.map((item) => (
              <li
                key={item}
                className="rounded-full border border-border/70 bg-card px-4 py-2 text-sm text-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-border/60 bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              {trade.shortLabel} ask us this all the time.
            </h2>
          </Reveal>
          <div className="mt-10">
            <FaqList items={trade.faqs.map((f) => ({ q: f.q, a: f.a }))} />
          </div>
        </div>
      </section>

      {/* Other trades */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <h2 className="text-xl font-semibold tracking-tight text-foreground sm:text-2xl">
              Quoto for other trades
            </h2>
          </Reveal>
          <ul className="mt-6 flex flex-wrap gap-2">
            {otherTrades.map((t) => (
              <li key={t.slug}>
                <Link
                  to="/for/$trade"
                  params={{ trade: t.slug }}
                  className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:bg-accent"
                >
                  <span aria-hidden="true">{t.emoji}</span>
                  Quoto for {t.plural}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/for"
                className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-4 py-2 text-sm font-medium text-primary transition hover:bg-accent"
              >
                See all trades →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-border/60 bg-background py-20 sm:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Start quoting smarter today.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Download Quoto on the App Store or Google Play and send your first quote in minutes.
            </p>
            <div className="mt-8 flex justify-center">
              <StoreButtons />
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}

function TradeNotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Trade page not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          We don't have a page for that trade yet — but Quoto works for any Australian tradie.
        </p>
        <Link
          to="/for"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Browse all trades
        </Link>
      </div>
    </Layout>
  );
}
