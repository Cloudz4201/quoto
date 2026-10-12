import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { SITE_NAME, SUPPORT_EMAIL, absoluteUrl } from "@/lib/site";

const LAST_UPDATED = "12 October 2026";

const PRIVACY_URL = absoluteUrl("/privacy-policy");
const PRIVACY_TITLE = `Privacy Policy | ${SITE_NAME}`;
const PRIVACY_DESCRIPTION =
  "Read the Quoto privacy policy and learn how information is collected, used, and protected.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: PRIVACY_TITLE },
      { name: "description", content: PRIVACY_DESCRIPTION },
      { property: "og:title", content: PRIVACY_TITLE },
      { property: "og:description", content: PRIVACY_DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: PRIVACY_URL },
    ],
    links: [{ rel: "canonical", href: PRIVACY_URL }],
  }),
  component: PrivacyPage,
});

const OPENAI_PRIVACY = "https://openai.com/policies/privacy-policy";

function PrivacyPage() {
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <h1 className="text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">Privacy Policy</h1>
        <p className="mt-4 text-sm text-muted-foreground">Last updated: {LAST_UPDATED}</p>
        <p className="mt-6 leading-relaxed text-muted-foreground">
          This policy explains what the Quoto iPhone app and this website collect, why, and who else handles it. "We" means the Quoto team.
        </p>

        <div className="prose-content mt-12 space-y-10 text-foreground">
          <Section title="What we collect in the app">
            <ul className="list-disc space-y-2 pl-5">
              <li>Account: your email address (you sign in with an emailed code), your name, and your business name, ABN and GST settings if you enter them.</li>
              <li>Your quoting data: clients (name, company, email, phone, address), your rates, and your quotes, line items and notes.</li>
              <li>Attachments you add when asking the AI to build a quote, such as job photos and PDFs. Photos and PDFs are uploaded to our storage.</li>
              <li>Voice: if you dictate a job, Apple's speech recognition turns your voice into text, on your device where supported. Voice notes you record are saved on your device.</li>
              <li>Subscription status: purchases are handled by Apple and RevenueCat. We do not receive your card details.</li>
              <li>App activity: basic events such as opening the app or sending a quote, sent to our own servers, without client names, contact details or quote notes.</li>
            </ul>
          </Section>
          <Section title="AI quote creation (OpenAI)">
            When you ask Quoto to build or change a quote, we send OpenAI the messages in that conversation, any photos or PDFs you attached, your client list, your saved rates and your GST settings, so it can draft the quote. The result is saved to your account. OpenAI handles this data under its own terms and privacy policy (<a href={OPENAI_PRIVACY} className="font-medium text-primary hover:underline">openai.com/policies/privacy-policy</a>). Do not attach anything you do not want processed this way.
          </Section>
          <Section title="Where your data is stored">
            Your account and quoting data are stored with Supabase, in its Tokyo (Japan) region. Quote pages and some app services run on Cloudflare. Because of these providers, and OpenAI, your information may be processed outside Australia.
          </Section>
          <Section title="Quotes you send to customers">
            When you send a quote, we store a copy of the PDF and a private link for your customer. We record when the link is opened and when the customer accepts or declines, using a one-way hash of their IP address, their browser type, their approximate country and any name they enter. We show these events to you so you know where a quote stands.
          </Section>
          <Section title="Who else handles data">
            Supabase (database, sign-in and file storage), OpenAI (AI quote creation), RevenueCat and Apple (subscriptions), and Cloudflare (hosting for the customer quote page). We do not use advertising or tracking SDKs, we do not track you across other apps or websites, and we do not sell your data.
          </Section>
          <Section title="Deleting your data">
            You can delete your account in the app under Account → Delete Account. This removes your account and the quotes, clients, rates and settings linked to it. It does not cancel an Apple subscription; manage that in your Apple ID settings. To ask us to delete anything else, contact us below.
          </Section>
          <Section title="Your rights">
            You can ask us for access to, or correction or deletion of, your personal information. If you are in Australia and are unhappy with how we handle a request, you can complain to the Office of the Australian Information Commissioner (oaic.gov.au).
          </Section>
          <Section title="Website">
            This website does not use advertising cookies. If you use the support form, we receive the details you enter so we can reply.
          </Section>
          <Section title="Contact">
            For privacy questions or requests, email{" "}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-primary hover:underline">{SUPPORT_EMAIL}</a>
            {" "}or use the <a href="/support" className="font-medium text-primary hover:underline">support page</a>.
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
      <div className="mt-3 leading-relaxed text-muted-foreground">{children}</div>
    </section>
  );
}
