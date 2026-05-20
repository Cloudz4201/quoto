import { Reveal } from "@/components/site/Reveal";

const plans = [
  {
    name: "Starter",
    price: "Free",
    period: null,
    desc: "Everything you need to get started. No credit card required.",
    features: [
      "Up to 5 quotes per month",
      "Professional PDF quotes",
      "Email delivery",
      "Quote status tracking",
      "iOS & Android app",
    ],
    cta: "Download free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    desc: "For tradies who are serious about winning more work.",
    features: [
      "Unlimited quotes",
      "Custom branding & logo",
      "Xero & MYOB sync",
      "ServiceM8 & Tradify sync",
      "Quote acceptance & signatures",
      "Follow-up reminders",
      "Priority support",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Team",
    price: "$49",
    period: "/month",
    desc: "For small crews and growing businesses.",
    features: [
      "Everything in Pro",
      "Up to 5 team members",
      "Shared customer list",
      "Team quote activity feed",
      "Admin controls",
      "Dedicated onboarding",
    ],
    cta: "Start free trial",
    highlight: false,
  },
];

function Check() {
  return (
    <svg className="mt-0.5 h-4 w-4 shrink-0 text-primary" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="border-t border-border/60 bg-secondary/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Simple, honest pricing.
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Start free. Upgrade when you're ready. No lock-in contracts.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 80}>
              <div
                className={`relative flex h-full flex-col rounded-2xl border p-8 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm ${
                  plan.highlight
                    ? "border-primary bg-card shadow-md"
                    : "border-border/70 bg-card"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-semibold text-white">
                    Most popular
                  </span>
                )}

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                    {plan.name}
                  </p>
                  <div className="mt-3 flex items-baseline gap-1">
                    <span className="text-4xl font-bold tracking-tight text-foreground">
                      {plan.price}
                    </span>
                    {plan.period && (
                      <span className="text-sm text-muted-foreground">{plan.period}</span>
                    )}
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{plan.desc}</p>
                </div>

                <ul className="mt-8 flex flex-1 flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                      <Check />
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="/#download"
                  className={`mt-8 block w-full rounded-full py-3 text-center text-sm font-semibold transition hover:opacity-90 active:scale-95 ${
                    plan.highlight
                      ? "bg-primary text-white"
                      : "border border-border/70 bg-secondary text-foreground hover:bg-secondary/80"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-center text-xs text-muted-foreground">
            All plans include a 14-day free trial on Pro and Team. Cancel any time.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
