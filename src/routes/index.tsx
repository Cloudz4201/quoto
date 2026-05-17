import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { StoreButtons } from "@/components/site/StoreButtons";
import phoneMockup from "@/assets/phone-mockup.png";
import ogImage from "@/assets/og-image.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "JobSlip | Simple Job Management App" },
      { name: "description", content: "JobSlip is a simple, modern job management app designed to help you create, track, and manage work faster." },
      { name: "keywords", content: "JobSlip, job management app, work management app, mobile job tracker, job tracking app" },
      { property: "og:title", content: "JobSlip | Simple Job Management App" },
      { property: "og:description", content: "JobSlip is a simple, modern job management app designed to help you create, track, and manage work faster." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:image", content: ogImage },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "JobSlip | Simple Job Management App" },
      { name: "twitter:description", content: "JobSlip is a simple, modern job management app designed to help you create, track, and manage work faster." },
      { name: "twitter:image", content: ogImage },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const features = [
  {
    title: "Create jobs quickly",
    desc: "Add new jobs in seconds with a fast, mobile-first form designed for the field.",
    icon: (
      <path d="M12 5v14M5 12h14" />
    ),
  },
  {
    title: "Track job progress",
    desc: "See every job's status at a glance and update progress without breaking your flow.",
    icon: <path d="M4 12l5 5L20 6" />,
  },
  {
    title: "Keep work organised",
    desc: "Group, sort, and filter jobs so nothing slips through the cracks.",
    icon: <path d="M4 6h16M4 12h10M4 18h16" />,
  },
  {
    title: "Mobile-first workflow",
    desc: "Designed for one-handed use on iOS and Android — fast on any connection.",
    icon: <path d="M7 2h10a2 2 0 012 2v16a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm5 17h.01" />,
  },
];

const steps = [
  { n: "01", title: "Add the job", desc: "Capture a new job in seconds — title, location, and details." },
  { n: "02", title: "Track the details", desc: "Update progress and notes as work moves forward." },
  { n: "03", title: "Stay organised", desc: "Everything in one calm, focused place — on every device." },
];

function Home() {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 pt-16 pb-20 sm:pt-24 sm:pb-28 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Coming soon on iOS and Android
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Job management,
              <br />
              <span className="text-primary">beautifully simple.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg text-muted-foreground">
              JobSlip helps you create, track, and manage every job from your pocket — fast, organised, and effortlessly clean.
            </p>
            <StoreButtons className="mt-8" />
          </div>
          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-gradient-to-br from-primary/10 via-transparent to-transparent blur-3xl" />
            <img
              src={phoneMockup}
              alt="JobSlip app shown on iPhone"
              width={1024}
              height={1536}
              className="w-[280px] drop-shadow-2xl sm:w-[340px] lg:w-[400px]"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border/60 bg-secondary/40 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Built to keep work moving.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Every detail tuned for speed, clarity, and the way you actually work.
            </p>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-border/70 bg-card p-6 transition hover:-translate-y-0.5 hover:shadow-sm">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    {f.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-base font-semibold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how" className="py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              How it works
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Three quiet steps. No clutter, no friction.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl border border-border/70 bg-card p-8">
                <span className="text-sm font-medium text-primary">{s.n}</span>
                <h3 className="mt-3 text-xl font-semibold tracking-tight text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section id="download" className="pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="overflow-hidden rounded-3xl border border-border/70 bg-card px-8 py-14 text-center sm:px-12 sm:py-20">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Download JobSlip when it becomes available.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
              Coming soon on iOS and Android. A simpler way to run your jobs is on the way.
            </p>
            <StoreButtons className="mt-8 justify-center sm:inline-flex" />
          </div>
        </div>
      </section>
    </Layout>
  );
}
