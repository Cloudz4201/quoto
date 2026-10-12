import { createFileRoute, redirect } from "@tanstack/react-router";

// Short URL for App Store Connect; the policy itself lives at /privacy-policy.
export const Route = createFileRoute("/privacy")({
  beforeLoad: () => {
    throw redirect({ to: "/privacy-policy", statusCode: 301 });
  },
});
