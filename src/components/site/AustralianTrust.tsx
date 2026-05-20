import { Reveal } from "@/components/site/Reveal";
import aussieOwned from "@/assets/trust/aussie-owned.png";
import encryption from "@/assets/trust/encryption.png";
import dataAustralia from "@/assets/trust/data-australia.png";
import support from "@/assets/trust/support.png";

const pillars = [
  {
    title: "100% Australian owned",
    desc: "Designed, built and run by a local team — not a multinational with an Aussie support email.",
    image: aussieOwned,
  },
  {
    title: "Bank-level encryption",
    desc: "Your quotes, customers and pricing are protected with the same 256-bit encryption your bank uses.",
    image: encryption,
  },
  {
    title: "Your data stays in Australia",
    desc: "Every quote and customer record is stored on secure Australian servers. Never sent offshore.",
    image: dataAustralia,
  },
  {
    title: "Aussie-based support",
    desc: "Real humans on Aussie time. Email or chat us during the working day and hear back fast.",
    image: support,
  },
];

export function AustralianTrust() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-heading"
      className="py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span aria-hidden="true">🇦🇺</span>
              Made in Australia
            </span>
            <h2
              id="trust-heading"
              className="mt-5 text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
            >
              Australian-owned. Bank-grade safe.
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              Built and supported by a team here in Australia. Your data stays on Aussie shores — protected with the same standards the banks trust.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/70 bg-card transition duration-300 hover:-translate-y-0.5 hover:shadow-sm">
                <div className="flex items-center justify-center bg-background px-6 pt-6 pb-2">
                  <img
                    src={p.image}
                    alt=""
                    width={1024}
                    height={1024}
                    loading="lazy"
                    className="h-32 w-32 object-contain transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-base font-semibold text-foreground">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
