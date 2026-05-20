import { createFileRoute, Link } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { StoreButtons } from "@/components/site/StoreButtons";
import { Reveal } from "@/components/site/Reveal";
import { Testimonials } from "@/components/site/Testimonials";
import { AustralianTrust } from "@/components/site/AustralianTrust";
import { BuiltForYourTrade } from "@/components/site/BuiltForYourTrade";
import { Pricing } from "@/components/site/Pricing";
import { ComingSoon } from "@/components/site/ComingSoon";
import {
  OG_IMAGE_HEIGHT,
  OG_IMAGE_WIDTH,
  SITE_COUNTRY,
  SITE_NAME,
  SITE_URL,
  absoluteUrl,
} from "@/lib/site";
import phoneMockup from "@/assets/phone-mockup.png";
import featureQuotes from "@/assets/features/quotes-in-a-minute.png";
import featureTradies from "@/assets/features/built-for-tradies.png";
import featureTrack from "@/assets/features/track-every-quote.png";
import featureStack from "@/assets/features/plays-nice-with-stack.png";
import stepBuild from "@/assets/steps/01-build-the-quote.png";
import stepSend from "@/assets/steps/02-send-it-instantly.png";
import stepSync from "@/assets/steps/03-sync-with-your-tools.png";

const HOME_TITLE = `${SITE_NAME} | Simple Quoting App for Tradies`;
const HOME_DESCRIPTION =
  "Quoto is the quoting app built for tradies. Send professional, branded quotes from the ute in under a minute, track every job, and sync approved quotes with Xero, ServiceM8 and the tools you already use.";
const HOME_OG_IMAGE = absoluteUrl("/og-image.jpg");

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: SITE_NAME,
  description: HOME_DESCRIPTION,
  applicationCategory: "BusinessApplication",
  applicationSubCategory: "Quoting & Invoicing",
  operatingSystem: "iOS, Android",
  url: SITE_URL,
  image: HOME_OG_IMAGE,
  inLanguage: "en-AU",
  countriesSupported: SITE_COUNTRY,
  audience: {
    "@type": "BusinessAudience",
    audienceType: "Tradespeople, contractors and small trade businesses",
  },
  featureList: [
    "Send branded quotes in under a minute",
    "Track quote status — sent, viewed, accepted, declined",
    "Sync approved quotes to Xero",
    "Sync jobs with ServiceM8",
    "MYOB and QuickBooks integrations",
    "Designed for one-handed, on-site use",
  ],
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
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Quoto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quoto is a simple quoting app built for Australian tradies. You can build, send and track professional quotes from your phone in under a minute, and sync approved quotes with Xero, ServiceM8 and the tools you already use.",
      },
    },
    {
      "@type": "Question",
      name: "Does Quoto work with Xero, MYOB, ServiceM8 and QuickBooks?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Quoto integrates with Xero, ServiceM8, MYOB and QuickBooks so approved quotes flow into your accounting and job-management tools with no double entry.",
      },
    },
    {
      "@type": "Question",
      name: "Is Quoto free to use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is a free Starter plan you can use straight away. Paid Pro and Team plans unlock integrations, branded PDFs and team features. See the Pricing section on the homepage for current pricing.",
      },
    },
    {
      "@type": "Question",
      name: "Is Quoto Australian-owned and is my data stored in Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Quoto is 100% Australian-owned. Your data is stored in Australia and protected with bank-level encryption in transit, and our support team is based in Australia.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to send a quote?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most tradies send their first quote in under a minute. Add the customer, line items, labour and materials, then email a clean, branded quote your customer can accept from their phone.",
      },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: HOME_TITLE },
      { name: "description", content: HOME_DESCRIPTION },
      { property: "og:title", content: HOME_TITLE },
      { property: "og:description", content: HOME_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: HOME_OG_IMAGE },
      { property: "og:image:alt", content: `${SITE_NAME} — simple quoting app for tradies` },
      { property: "og:image:width", content: OG_IMAGE_WIDTH },
      { property: "og:image:height", content: OG_IMAGE_HEIGHT },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: HOME_TITLE },
      { name: "twitter:description", content: HOME_DESCRIPTION },
      { name: "twitter:image", content: HOME_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(softwareSchema),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify(faqSchema),
      },
    ],
  }),
  component: Home,
});

const features = [
  {
    title: "Quotes in under a minute",
    desc: "Add line items, labour and materials on site — send a professional quote before you leave the driveway.",
    image: featureQuotes,
  },
  {
    title: "Built for tradies",
    desc: "Designed for one-handed, on-the-job use. Big tap targets, fast input, no clutter.",
    image: featureTradies,
  },
  {
    title: "Track every quote",
    desc: "See what's sent, viewed, accepted or declined — and follow up without digging through emails.",
    image: featureTrack,
  },
  {
    title: "Plays nice with your stack",
    desc: "Push approved quotes straight to Xero, sync jobs with ServiceM8 and keep your existing workflow.",
    image: featureStack,
  },
];

const steps = [
  { n: "01", title: "Build the quote", desc: "Add the customer, labour, materials and a call-out fee in a few taps.", image: stepBuild },
  { n: "02", title: "Send it instantly", desc: "Email a clean, branded quote your customer can accept on their phone.", image: stepSend },
  { n: "03", title: "Sync with your tools", desc: "Approved quotes flow to Xero and ServiceM8 — no double entry.", image: stepSync },
];

const integrations: { name: string; logo: string }[] = [
  { name: "Xero", logo: "/integrations/xero.svg" },
  { name: "ServiceM8", logo: "/integrations/servicem8.webp" },
  { name: "MYOB", logo: "/integrations/myob.svg" },
  { name: "QuickBooks", logo: "/integrations/quickbooks.svg" },
  { name: "Tradify", logo: "/integrations/tradify.png" },
  { name: "Stripe", logo: "/integrations/stripe.svg" },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-6 pb-16 sm:pt-10 sm:pb-20 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Quoting,
              <br />
              <span className="text-primary">beautifully simple.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
              Quoto is the quoting app built for tradies. Send professional quotes from the ute, track every job and sync with the tools you already use — Xero, ServiceM8 and more.
            </p>
            <StoreButtons className="mt-8" />
            <p className="mt-5 text-xs text-muted-foreground">
              Works with Xero · ServiceM8 · MYOB · QuickBooks
            </p>
          </div>
          <Reveal className="relative flex justify-center lg:justify-end" delay={120}>
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-3xl" />
            <img
              src={phoneMockup}
              alt="Quoto quoting app shown on iPhone"
              width={1024}
              height={1536}
              loading="eager"
              decoding="async"
              fetchPriority="high"
              className="w-[260px] drop-shadow-2xl sm:w-[320px] lg:w-[400px]"
            />
          </Reveal>
        </div>
      </section>

      {/* Integrations strip */}
      <section aria-label="Integrations" className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-4 px-6 py-6 sm:gap-x-12">
          <span className="text-xs uppercase tracking-wider text-muted-foreground/80">Integrates with</span>
          {integrations.map(({ name, logo }) => (
            <img
              key={name}
              src={logo}
              alt={`${name} logo`}
              loading="lazy"
              className="h-6 w-auto opacity-80 transition hover:opacity-100 sm:h-7"
            />
          ))}
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Built to win more work.
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Every detail tuned for speed and clarity — so you can quote on site and get back to the job.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f, i) => (
              <Reveal key={f.title} delay={i * 80}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition duration-300 hover:-translate-y-0.5 hover:shadow-sm">
                  <div className="flex items-center justify-center bg-background px-6 pt-6 pb-2">
                    <img
                      src={f.image}
                      alt=""
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="h-32 w-32 object-contain transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-base font-semibold text-foreground">{f.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="border-t border-border/60 bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                How it works
              </h2>
              <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                Three quiet steps. No clutter, no friction.
              </p>
            </div>
          </Reveal>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 100}>
                <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition duration-300 hover:-translate-y-0.5 hover:shadow-sm">
                  <div className="flex items-center justify-center bg-background px-8 pt-8 pb-4">
                    <img
                      src={s.image}
                      alt=""
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="h-40 w-40 object-contain transition duration-300 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <span className="text-sm font-medium text-primary">{s.n}</span>
                    <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <AustralianTrust />

      <BuiltForYourTrade />

      <Testimonials />

      <Pricing />

      <ComingSoon />

      {/* Integrations callout */}
      <section className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-card p-8 sm:p-12">
              <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
                <div>
                  <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                    Works with the tools you already use.
                  </h2>
                  <p className="mt-4 text-base text-muted-foreground sm:text-lg">
                    Quoto slots into your existing stack. Push approved quotes to Xero, keep jobs in sync with ServiceM8 and avoid double entry.
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {integrations.map(({ name, logo }, i) => (
                    <Reveal as="li" key={name} delay={i * 60}>
                      <div className="flex h-20 items-center justify-center rounded-xl border border-border/70 bg-background px-4 py-4">
                        <img
                          src={logo}
                          alt={`${name} logo`}
                          loading="lazy"
                          className="max-h-8 w-auto object-contain"
                        />
                        <span className="sr-only">{name}</span>
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Support callout */}
      <section id="support" className="border-t border-border/60 bg-secondary/40 py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="grid gap-8 rounded-3xl border border-border/70 bg-card p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-12">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                  <span aria-hidden="true">🇦🇺</span>
                  Australian-based support
                </span>
                <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                  Need a hand? Talk to a real human.
                </h2>
                <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
                  Questions, bugs, ideas — send a message and the Quoto team will reply within one business day. No bots, no offshore call centre.
                </p>
              </div>
              <Link
                to="/support"
                className="inline-flex items-center justify-center self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] lg:self-center"
              >
                Contact support
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Start quoting smarter today.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Download Quoto on the App Store or Google Play and send your first quote in minutes.
              </p>
              <div className="mt-8 flex justify-center">
                <StoreButtons />
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </Layout>
  );
}
