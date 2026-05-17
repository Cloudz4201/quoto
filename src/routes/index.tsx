import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { StoreButtons } from "@/components/site/StoreButtons";
import { Reveal } from "@/components/site/Reveal";
import phoneMockup from "@/assets/phone-mockup.png";
import ogImage from "@/assets/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JobSlip | Simple Quoting App for Tradies" },
      {
        name: "description",
        content:
          "JobSlip is a simple, modern quoting app for tradies. Build, send and track quotes in seconds — with Xero, ServiceM8 and the tools you already use.",
      },
      {
        name: "keywords",
        content:
          "JobSlip, quoting app, tradie quoting app, quote app for tradies, Xero quoting, ServiceM8 integration, mobile quoting tool, electrician plumber builder quotes",
      },
      { property: "og:title", content: "JobSlip | Simple Quoting App for Tradies" },
      {
        property: "og:description",
        content:
          "Build, send and track quotes in seconds. Works beautifully with Xero, ServiceM8 and the tools tradies already use.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JobSlip | Simple Quoting App for Tradies" },
      {
        name: "twitter:description",
        content:
          "Build, send and track quotes in seconds. Works with Xero, ServiceM8 and the tools tradies already use.",
      },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  {
    title: "Quotes in under a minute",
    desc: "Add line items, labour and materials on site — send a professional quote before you leave the driveway.",
    icon: <path d="M5 12l5 5L20 7" />,
  },
  {
    title: "Built for tradies",
    desc: "Designed for one-handed, on-the-job use. Big tap targets, fast input, no clutter.",
    icon: <path d="M14 7l-1.5-1.5a2 2 0 00-2.83 0L4 11.17V14h2.83l5.67-5.67a2 2 0 000-2.83zM14 7l3 3M5 21h14" />,
  },
  {
    title: "Track every quote",
    desc: "See what's sent, viewed, accepted or declined — and follow up without digging through emails.",
    icon: <path d="M3 3v18h18M7 14l4-4 4 4 5-6" />,
  },
  {
    title: "Plays nice with your stack",
    desc: "Push approved quotes straight to Xero, sync jobs with ServiceM8 and keep your existing workflow.",
    icon: <path d="M4 7h16M4 12h16M4 17h10" />,
  },
];

const steps = [
  { n: "01", title: "Build the quote", desc: "Add the customer, labour, materials and a call-out fee in a few taps." },
  { n: "02", title: "Send it instantly", desc: "Email a clean, branded quote your customer can accept on their phone." },
  { n: "03", title: "Sync with your tools", desc: "Approved quotes flow to Xero and ServiceM8 — no double entry." },
];

const integrations = ["Xero", "ServiceM8", "MYOB", "QuickBooks", "Tradify", "Stripe"];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-14 pb-20 sm:pt-20 sm:pb-28 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Available on iOS and Android
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Quoting,
              <br />
              <span className="text-primary">beautifully simple.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base text-muted-foreground sm:text-lg">
              JobSlip is the quoting app built for tradies. Send professional quotes from the ute, track every job and sync with the tools you already use — Xero, ServiceM8 and more.
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
              alt="JobSlip quoting app shown on iPhone"
              width={1024}
              height={1536}
              className="w-[260px] drop-shadow-2xl sm:w-[320px] lg:w-[400px]"
            />
          </Reveal>
        </div>
      </section>

      {/* Integrations strip */}
      <section aria-label="Integrations" className="border-y border-border/60 bg-secondary/40">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-10 gap-y-3 px-6 py-6 text-sm font-medium text-muted-foreground sm:gap-x-14">
          <span className="text-xs uppercase tracking-wider text-muted-foreground/80">Integrates with</span>
          {integrations.map((name) => (
            <span key={name} className="text-foreground/70">{name}</span>
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
                <div className="h-full rounded-2xl border border-border/70 bg-card p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                      {f.icon}
                    </svg>
                  </span>
                  <h3 className="mt-5 text-base font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
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
                <div className="h-full rounded-2xl border border-border/70 bg-card p-8">
                  <span className="text-sm font-medium text-primary">{s.n}</span>
                  <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
                    JobSlip slots into your existing stack. Push approved quotes to Xero, keep jobs in sync with ServiceM8 and avoid double entry.
                  </p>
                </div>
                <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {integrations.map((name, i) => (
                    <Reveal as="li" key={name} delay={i * 60}>
                      <div className="flex items-center justify-center rounded-xl border border-border/70 bg-background px-4 py-4 text-sm font-medium text-foreground">
                        {name}
                      </div>
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal>
            <div className="overflow-hidden rounded-3xl border border-border/70 bg-card px-6 py-14 text-center sm:px-12 sm:py-20">
              <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
                Start quoting smarter today.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Download JobSlip on the App Store or Google Play and send your first quote in minutes.
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
