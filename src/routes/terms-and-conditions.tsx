import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

const TERMS_URL = absoluteUrl("/terms-and-conditions");
const TERMS_TITLE = `Terms & Conditions | ${SITE_NAME}`;
const TERMS_DESCRIPTION =
  "Read the Quoto terms and conditions for using the app and website.";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () => ({
    meta: [
      { title: TERMS_TITLE },
      { name: "description", content: TERMS_DESCRIPTION },
      { property: "og:title", content: TERMS_TITLE },
      { property: "og:description", content: TERMS_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: TERMS_URL },
    ],
    links: [{ rel: "canonical", href: TERMS_URL }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Terms &amp; Conditions</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="mt-12 space-y-10">
          <Section title="Use of the app">
            By accessing or using Quoto, you agree to these terms. You may use the app only for lawful purposes and in accordance with these terms.
          </Section>
          <Section title="User responsibilities">
            You are responsible for the accuracy of information you enter, for keeping your account credentials secure, and for any activity that occurs under your account.
          </Section>
          <Section title="Account access">
            We may suspend or terminate access if these terms are violated or if usage threatens the integrity of the service. You may close your account at any time.
          </Section>
          <Section title="Limitation of liability">
            Quoto is provided "as is" without warranties of any kind. To the maximum extent permitted by law, we are not liable for any indirect, incidental, or consequential damages arising from use of the app.
          </Section>
          <Section title="Changes to service">
            We may update, modify, or discontinue parts of the service at any time. Material changes to these terms will be communicated through the app or website.
          </Section>
          <Section title="Contact">
            Questions about these terms? Contact us at{" "}
            <a href="mailto:support@quoto.app" className="font-medium text-primary hover:underline">support@quoto.app</a>.
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
