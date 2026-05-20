import { Reveal } from "@/components/site/Reveal";
import avatarJake from "@/assets/testimonials/testimonial-jake.jpg";
import avatarDean from "@/assets/testimonials/testimonial-dean.jpg";
import avatarSarah from "@/assets/testimonials/testimonial-sarah.jpg";

const testimonials = [
  {
    quote:
      "Used to write quotes on paper and photograph them. Now I send a proper quote before I've even backed out of the driveway. Customers love it.",
    name: "Jake Morrison",
    role: "Electrician · Morrison Electrical, Sydney",
    avatar: avatarJake,
  },
  {
    quote:
      "I was losing jobs because my quotes took too long. Quoto fixed that. I can price a job on site in two minutes and the Xero sync saves me an hour a week.",
    name: "Dean Hartley",
    role: "Plumber · Hartley Plumbing, Brisbane",
    avatar: avatarDean,
  },
  {
    quote:
      "Finally an app that doesn't feel like it was made for an accountant. It's dead simple, looks professional and my clients actually respond faster.",
    name: "Sarah Nguyen",
    role: "Painter · Coastal Painting & Decorating, Melbourne",
    avatar: avatarSarah,
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5" aria-label="5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4 fill-amber-400 text-amber-400" viewBox="0 0 20 20" aria-hidden="true">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              Tradies love it.
            </h2>
            <p className="mt-4 text-base text-muted-foreground sm:text-lg">
              From solo operators to small crews — here's what they're saying.
            </p>
          </div>
        </Reveal>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 80}>
              <div className="flex h-full flex-col gap-5 rounded-2xl border border-border/70 bg-card p-7">
                <Stars />
                <blockquote className="flex-1 text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    width={40}
                    height={40}
                    className="h-10 w-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
