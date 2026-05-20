import { useRef, useState, type FormEvent } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const WEB3FORMS_ACCESS_KEY = "c4211349-a4f6-4d0a-a9a6-4eb95c520d56";
// Public Web3Forms-managed hCaptcha sitekey (free plan).
const HCAPTCHA_SITEKEY = "50b2fe65-b00b-4b9e-ad62-3ba471098be2";

type Status =
  | { kind: "idle" }
  | { kind: "submitting" }
  | { kind: "success" }
  | { kind: "error"; message: string };

export function SupportForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<HCaptcha>(null);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!captchaToken) {
      setStatus({
        kind: "error",
        message: "Please complete the captcha to confirm you're not a bot.",
      });
      return;
    }

    setStatus({ kind: "submitting" });

    const formData = new FormData(form);
    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("from_name", "Quoto Support Form");
    formData.append("subject", `New support request from ${formData.get("name") ?? "website"}`);
    formData.append("h-captcha-response", captchaToken);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data: { success: boolean; message?: string } = await response.json();
      if (data.success) {
        setStatus({ kind: "success" });
        form.reset();
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      } else {
        setStatus({
          kind: "error",
          message: data.message ?? "Something went wrong. Please try again.",
        });
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      }
    } catch {
      setStatus({
        kind: "error",
        message: "We couldn't reach our server. Check your connection and try again.",
      });
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  };

  const isSubmitting = status.kind === "submitting";

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      {/* Honeypot for spam bots — must stay visually hidden */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <Field
        id="support-name"
        name="name"
        label="Your name"
        type="text"
        autoComplete="name"
        required
      />
      <Field
        id="support-email"
        name="email"
        label="Email address"
        type="email"
        autoComplete="email"
        required
      />
      <Field
        id="support-topic"
        name="topic"
        label="What's this about?"
        type="text"
        placeholder="e.g. Billing, a bug, a feature request"
        required
      />

      <div className="flex flex-col gap-2">
        <label htmlFor="support-message" className="text-sm font-medium text-foreground">
          Message
        </label>
        <textarea
          id="support-message"
          name="message"
          required
          rows={6}
          placeholder="Tell us what's going on. Screenshots? Paste a link or describe the steps."
          className="w-full rounded-xl border border-border/70 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
        />
      </div>

      <div className="flex flex-col gap-2">
        <HCaptcha
          ref={captchaRef}
          sitekey={HCAPTCHA_SITEKEY}
          reCaptchaCompat={false}
          onVerify={(token) => setCaptchaToken(token)}
          onExpire={() => setCaptchaToken(null)}
          onError={() => setCaptchaToken(null)}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>

      <StatusBanner status={status} />
    </form>
  );
}

type FieldProps = {
  id: string;
  name: string;
  label: string;
  type: "text" | "email";
  autoComplete?: string;
  placeholder?: string;
  required?: boolean;
};

function Field({ id, name, label, type, autoComplete, placeholder, required }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-xl border border-border/70 bg-card px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/70 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/30"
      />
    </div>
  );
}

function StatusBanner({ status }: { status: Status }) {
  switch (status.kind) {
    case "idle":
    case "submitting":
      return null;
    case "success":
      return (
        <p
          role="status"
          className="rounded-xl border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-sm font-medium text-emerald-700 dark:text-emerald-400"
        >
          Thanks — your message is on its way. We usually reply within one business day.
        </p>
      );
    case "error":
      return (
        <p
          role="alert"
          className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-700 dark:text-red-400"
        >
          {status.message}
        </p>
      );
  }
}
