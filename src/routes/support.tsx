import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SupportForm } from "@/components/site/SupportForm";
import { SITE_NAME, SUPPORT_EMAIL, absoluteUrl } from "@/lib/site";

const SUPPORT_URL = absoluteUrl("/support");
const SUPPORT_TITLE = `Support | ${SITE_NAME}`;
const SUPPORT_DESCRIPTION =
  "Get help with Quoto. Send us a message and our Australian-based support team will get back to you within one business day.";

export const Route = createFileRoute("/support")({
  head: () => ({
    meta: [
      { title: SUPPORT_TITLE },
      { name: "description", content: SUPPORT_DESCRIPTION },
      { property: "og:title", content: SUPPORT_TITLE },
      { property: "og:description", content: SUPPORT_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SUPPORT_URL },
    ],
    links: [
      { rel: "canonical", href: SUPPORT_URL },
      { rel: "preconnect", href: "https://api.web3forms.com" },
      { rel: "preconnect", href: "https://hcaptcha.com", crossOrigin: "anonymous" },
      { rel: "preconnect", href: "https://newassets.hcaptcha.com", crossOrigin: "anonymous" },
    ],
  }),
  component: SupportPage,
});

function SupportPage() {
  return (
    <Layout>
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/70 bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span aria-hidden="true">🇦🇺</span>
            Australian-based support
          </span>
          <h1 className="mt-5 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            How can we help?
          </h1>
          <p className="mt-4 text-base text-muted-foreground sm:text-lg">
            Send us a message and a real human on the Quoto team will get back to you within one business day — usually faster.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_320px] lg:gap-16">
          <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-10">
            <SupportForm />
          </div>

          <aside className="space-y-8">
            <SidebarCard title="Email us directly">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Prefer email? Reach us at{" "}
                <a
                  href={`mailto:${SUPPORT_EMAIL}`}
                  className="font-medium text-primary hover:underline"
                >
                  {SUPPORT_EMAIL}
                </a>
                .
              </p>
            </SidebarCard>

            <SidebarCard title="Response time">
              <p className="text-sm leading-relaxed text-muted-foreground">
                We reply to every message within one business day, Monday–Friday, AEST/AEDT.
              </p>
            </SidebarCard>

            <SidebarCard title="What to include">
              <ul className="space-y-2 text-sm leading-relaxed text-muted-foreground">
                <li>• A short description of what's happening</li>
                <li>• Steps to reproduce, if it's a bug</li>
                <li>• Your device and app version</li>
                <li>• Screenshots if you have them</li>
              </ul>
            </SidebarCard>
          </aside>
        </div>
      </section>
    </Layout>
  );
}

function SidebarCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border/70 bg-card p-6">
      <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </h2>
      <div className="mt-3">{children}</div>
    </div>
  );
}
