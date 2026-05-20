import { createFileRoute } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PostCard } from "@/components/blog/PostCard";
import { posts } from "@/data/blog/posts";
import { SITE_NAME, absoluteUrl } from "@/lib/site";

const BLOG_URL = absoluteUrl("/blog");
const BLOG_TITLE = `Blog | ${SITE_NAME} — guides and comparisons for tradies`;
const BLOG_DESCRIPTION =
  "Honest guides, comparisons and how-tos on quoting apps, tradie software and winning more work — from the team at Quoto.";
const BLOG_OG_IMAGE = absoluteUrl("/og-image.jpg");

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: BLOG_TITLE },
      { name: "description", content: BLOG_DESCRIPTION },
      { property: "og:title", content: BLOG_TITLE },
      { property: "og:description", content: BLOG_DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BLOG_URL },
      { property: "og:image", content: BLOG_OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: BLOG_TITLE },
      { name: "twitter:description", content: BLOG_DESCRIPTION },
      { name: "twitter:image", content: BLOG_OG_IMAGE },
    ],
    links: [{ rel: "canonical", href: BLOG_URL }],
  }),
  component: BlogIndexPage,
});

function BlogIndexPage() {
  return (
    <Layout>
      <section className="border-b border-border/60 bg-secondary/40">
        <div className="mx-auto max-w-4xl px-6 py-20 sm:py-28">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              Quoto blog
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
              Guides and comparisons for tradies.
            </h1>
            <p className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">
              Honest takes on the tools tradies use every day — what's good, what's
              overhyped, and how to pick the right one without wasting a weekend
              comparing feature lists.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <PostCard post={post} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
