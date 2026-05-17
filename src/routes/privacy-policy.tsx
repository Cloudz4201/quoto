import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | JobSlip" },
      { name: "description", content: "Read the JobSlip privacy policy and learn how information is collected, used, and protected." },
      { property: "og:title", content: "Privacy Policy | JobSlip" },
      { property: "og:description", content: "Read the JobSlip privacy policy and learn how information is collected, used, and protected." },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="prose-content mt-12 space-y-10 text-foreground">
          <Section title="Information we collect">
            We collect information you provide directly when using JobSlip, including account details, job records, and any content you create within the app. We may also collect basic device information and usage data to improve reliability and performance.
          </Section>
          <Section title="How we use your information">
            Information is used to operate the app, deliver the features you request, improve product quality, and provide customer support. We do not sell your personal data.
          </Section>
          <Section title="Data storage">
            Your data is stored securely using industry-standard providers and protected with encryption in transit. We retain information only for as long as needed to deliver the service or comply with legal obligations.
          </Section>
          <Section title="Third-party services">
            JobSlip may use trusted third-party services for analytics, crash reporting, and infrastructure. These providers are bound by confidentiality and only process data on our behalf.
          </Section>
          <Section title="Your rights">
            You may request access to, correction of, or deletion of your personal information at any time. You can also request a copy of your data or withdraw consent where applicable.
          </Section>
          <Section title="Contact">
            For privacy questions or requests, contact us at{" "}
            <a href="mailto:support@jobslip.app" className="font-medium text-primary hover:underline">support@jobslip.app</a>.
          </Section>
        </div>
      </article>
    </Layout>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight text-foreground">{title}</h2>
      <p className="mt-3 leading-relaxed text-muted-foreground">{children}</p>
    </section>
  );
}
