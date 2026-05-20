import { useRef, useState, type FormEvent } from "react";
import { Reveal } from "@/components/site/Reveal";

import worksOffline from "@/assets/coming-soon/works-offline.png";
import tapToAccept from "@/assets/coming-soon/tap-to-accept.png";
import depositOnAccept from "@/assets/coming-soon/deposit-on-accept.png";
import smartFollowups from "@/assets/coming-soon/smart-followups.png";
import variationsInOneTap from "@/assets/coming-soon/variations-in-one-tap.png";
import voiceToQuote from "@/assets/coming-soon/voice-to-quote.png";

const WEB3FORMS_ACCESS_KEY = "c4211349-a4f6-4d0a-a9a6-4eb95c520d56";

type Feature = {
  title: string;
  desc: string;
  image: string;
};

const features: Feature[] = [
  {
    title: "Works offline",
    desc: "Draft, save and review quotes in a roof cavity or rural basement. Syncs the second you've got bars again.",
    image: worksOffline,
  },
  {
    title: "Tap to Accept & sign",
    desc: "Customer taps a link, signs with their finger and you get the ping — before you've reached the ute.",
    image: tapToAccept,
  },
  {
    title: "Deposit on accept",
    desc: "Take a 20% deposit the moment a quote is accepted. Card, Apple Pay or PayID — no 14-day holds.",
    image: depositOnAccept,
  },
  {
    title: "Smart follow-ups",
    desc: "One gentle nudge at 3 days, one at 7, then it stops. Free — no per-SMS credits, ever.",
    image: smartFollowups,
  },
  {
    title: "Variations in one tap",
    desc: "Add an extra to a live job, the customer re-signs the delta, and it flows straight onto the invoice.",
    image: variationsInOneTap,
  },
  {
    title: "Voice → quote",
    desc: "Talk for 30 seconds on the drive home. A polished draft quote is ready when you stop the engine.",
    image: voiceToQuote,
  },
];

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function ComingSoon() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const formRef = useRef<HTMLFormElement>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus({ kind: "submitting" });

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Quoto Roadmap Notify");
    formData.append("subject", "New roadmap notify-me signup");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data: { success: boolean; message?: string } = await response.json();
      if (data.success) {
        setStatus({ kind: "success" });
        form.reset();
      } else {
        setStatus({
          kind: "error",
          message: data.message ?? "Couldn't add you to the list. Try again in a sec.",
        });
      }
    } catch {
      setStatus({
        kind: "error",
        message: "Couldn't reach our server. Check your connection and try again.",
      });
    }
  };

  const isSubmitting = status.kind === "submitting";

  return (
    <section id="roadmap" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" aria-hidden="true" />
              Coming soon
            </span>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              What&apos;s next on the toolbelt.
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Hand-picked from real tradie reviews in 2026 — only the features that make sense, built rock-solid simple. No fluff, no bloat, no &ldquo;AI everything&rdquo; just to fill the page.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 70}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition duration-300 hover:-translate-y-0.5 hover:shadow-sm">
                <span className="absolute right-4 top-4 z-10 inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  Coming soon
                </span>
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
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 rounded-2xl border border-border/70 bg-card p-6 sm:p-8">
            <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
              <div>
                <h3 className="text-lg font-semibold text-foreground">Get a heads-up when these ship.</h3>
                <p className="mt-1 text-sm text-muted-foreground">
                  One short email when a feature lands. No spam, no marketing waffle.
                </p>
              </div>
              <form
                ref={formRef}
                onSubmit={onSubmit}
                className="flex w-full flex-col gap-3 sm:flex-row sm:items-stretch lg:w-auto lg:min-w-[28rem]"
                noValidate
              >
                {/* Honeypot for spam bots — must stay visually hidden */}
                <input
                  type="checkbox"
                  name="botcheck"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  aria-hidden="true"
                />
                <label htmlFor="roadmap-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="roadmap-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  placeholder="you@yourtrade.com.au"
                  className="w-full flex-1 rounded-full border border-border/70 bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {isSubmitting ? "Adding…" : "Notify me"}
                </button>
              </form>
            </div>
            <NotifyStatus status={status} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function NotifyStatus({ status }: { status: Status }) {
  switch (status.kind) {
    case "idle":
    case "submitting":
      return null;
    case "success":
      return (
        <p
          role="status"
          className="mt-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-400"
        >
          You&apos;re on the list. We&apos;ll only email when a feature actually ships.
        </p>
      );
    case "error":
      return (
        <p
          role="alert"
          className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-700 dark:text-red-400"
        >
          {status.message}
        </p>
      );
  }
}
