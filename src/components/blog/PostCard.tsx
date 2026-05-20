import { Link } from "@tanstack/react-router";
import type { Post } from "@/data/blog/types";

const CATEGORY_LABEL: Record<Post["category"], string> = {
  comparison: "Comparison",
  guide: "Guide",
};

export function PostCard({ post }: { post: Post }) {
  return (
    <Link
      to="/blog/$slug"
      params={{ slug: post.slug }}
      className="group flex h-full flex-col rounded-2xl border border-border/70 bg-card p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm sm:p-7"
    >
      <div className="flex items-center gap-3 text-xs">
        <span className="rounded-full bg-accent px-2.5 py-1 font-medium text-primary">
          {CATEGORY_LABEL[post.category]}
        </span>
        <span className="text-muted-foreground">{post.readingMinutes} min read</span>
      </div>
      <h3 className="mt-4 text-lg font-semibold tracking-tight text-foreground transition group-hover:text-primary sm:text-xl">
        {post.title}
      </h3>
      <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
        {post.description}
      </p>
      <span className="mt-auto pt-5 text-sm font-medium text-primary">
        Read article →
      </span>
    </Link>
  );
}
