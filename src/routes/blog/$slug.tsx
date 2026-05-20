import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Layout } from "@/components/site/Layout";
import { Reveal } from "@/components/site/Reveal";
import { PostBlocks } from "@/components/blog/PostBlocks";
import { PostCard } from "@/components/blog/PostCard";
import { getPostBySlug, getRelatedPosts } from "@/data/blog/posts";
import type { Post } from "@/data/blog/types";
import { SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

const CATEGORY_LABEL: Record<Post["category"], string> = {
  comparison: "Comparison",
  guide: "Guide",
};

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPostBySlug(params.slug);
    if (!post) throw notFound();
    const related = getRelatedPosts(params.slug, 2);
    return { post, related };
  },
  head: ({ loaderData }) => {
    const post = loaderData?.post;
    if (!post) return {};
    const path = `/blog/${post.slug}`;
    const url = absoluteUrl(path);
    const ogImage = absoluteUrl("/og-image.jpg");
    const articleSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.description,
      datePublished: post.publishedAt,
      dateModified: post.updatedAt ?? post.publishedAt,
      inLanguage: "en-AU",
      image: ogImage,
      author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
      publisher: {
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        logo: { "@type": "ImageObject", url: absoluteUrl("/favicon.png") },
      },
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
    };
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    };
    return {
      meta: [
        { title: `${post.title} | ${SITE_NAME}` },
        { name: "description", content: post.description },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:url", content: url },
        { property: "og:image", content: ogImage },
        { property: "article:published_time", content: post.publishedAt },
        ...(post.updatedAt
          ? [{ property: "article:modified_time", content: post.updatedAt }]
          : []),
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: post.title },
        { name: "twitter:description", content: post.description },
        { name: "twitter:image", content: ogImage },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        { type: "application/ld+json", children: JSON.stringify(articleSchema) },
        { type: "application/ld+json", children: JSON.stringify(breadcrumbSchema) },
      ],
    };
  },
  component: PostPage,
  notFoundComponent: PostNotFound,
});

function PostPage() {
  const { post, related } = Route.useLoaderData();
  return (
    <Layout>
      <article className="mx-auto max-w-3xl px-6 py-16 sm:py-20">
        <Reveal>
          <Link to="/blog" className="text-sm font-medium text-primary hover:underline">
            ← Back to blog
          </Link>
          <div className="mt-6 flex items-center gap-3 text-xs">
            <span className="rounded-full bg-accent px-2.5 py-1 font-medium text-primary">
              {CATEGORY_LABEL[post.category]}
            </span>
            <span className="text-muted-foreground">
              {post.readingMinutes} min read
            </span>
            <span className="text-muted-foreground">
              {formatDate(post.publishedAt)}
            </span>
          </div>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground sm:text-xl">
            {post.lead}
          </p>
        </Reveal>

        <div className="mt-12">
          <PostBlocks blocks={post.blocks} />
        </div>
      </article>

      {related.length > 0 && (
        <section className="border-t border-border/60 bg-secondary/40 py-16 sm:py-20">
          <div className="mx-auto max-w-6xl px-6">
            <Reveal>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Keep reading
              </h2>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 80}>
                  <PostCard post={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}
    </Layout>
  );
}

function PostNotFound() {
  return (
    <Layout>
      <div className="mx-auto max-w-2xl px-6 py-24 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-foreground">
          Article not found
        </h1>
        <p className="mt-3 text-muted-foreground">
          The article you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/blog"
          className="mt-6 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
        >
          Back to blog
        </Link>
      </div>
    </Layout>
  );
}

function formatDate(iso: string): string {
  const date = new Date(iso);
  return date.toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
