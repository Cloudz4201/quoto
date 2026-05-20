import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { trades } from "@/data/trades/trades";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

const HUB_URL = absoluteUrl("/for");
const HUB_TITLE = `Quoting app by trade | ${SITE_NAME}`;
const HUB_DESCRIPTION =
  "Quoto is built for Australian tradies. Pick your trade — electricians, plumbers, landscapers, painters, builders — and see exactly how Quoto handles your day-to-day quoting.";
const HUB_OG_IMAGE = absoluteUrl("/og-image.jpg");

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${HUB_URL}#collection`,
  name: HUB_TITLE,
  description: HUB_DESCRIPTION,
  url: HUB_URL,
  inLanguage: "en-AU",
  isPartOf: { "@id": `${SITE_URL}/#website` },
  publisher: { "@id": `${SITE_URL}/#organization` },
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: trades.map((trade, index) => ({
    "@type": "ListItem",
    position: index + 1,
    url: absoluteUrl(`/for/${trade.slug}`),
    name: `Quoting app for ${trade.plural}`,
  })),
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "By trade", item: HUB_URL },
  ],
};

export const Route = createFileRoute("/for/")({
  head: () => ({
    meta: [
      { title: HUB_TITLE },
      { name: "description", content: HUB_DESCRIPTION },
      { property: "og:title", content: HUB_TITLE },
      { property: "og:description", content: HUB_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: HUB_URL },
      { property: "og:image", content: HUB_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HUB_TITLE },
      { name: "twitter:description", content: HUB_DESCRIPTION },
      { name: "twitter:image", content: HUB_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: HUB_URL }],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(collectionSchema) },
      { type: "application/ld+json", children: JSON.stringify(itemListSchema) },
      { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
    ],
  }),
  component: TradesHubPage,
});

function TradesHubPage() {
  return (
    <Layout>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Built for your trade
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              A quoting app for every Australian trade.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Quoto is built for the day-to-day reality of tradie life — on-site quoting,
              big tap targets, fast templates and clean PDFs your customers can actually
              read. Pick your trade to see how it fits your week.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trades.map((trade, i) => (
              <Reveal key={trade.slug} delay={i * 80}>
                <Link
                  to="/for/$trade"
                  params={{ trade: trade.slug }}
                  className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={trade.image}
                      alt={trade.imageAlt}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.04]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute left-3 top-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-lg shadow-sm backdrop-blur"
                    >
                      {trade.emoji}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="text-lg font-semibold text-foreground">
                      Quoto for {trade.plural}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {trade.heroSub}
                    </p>
                    <span className="mt-5 inline-flex items-center text-sm font-medium text-primary">
                      See how Quoto fits {trade.plural}
                      <span
                        aria-hidden="true"
                        className="ml-1 transition-transform group-hover:translate-x-0.5"
                      >
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
