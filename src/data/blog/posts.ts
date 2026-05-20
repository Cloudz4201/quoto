import type { Post } from "./types";
import { quotoVsServiceM8 } from "./quoto-vs-servicem8";
import { quotoVsTradify } from "./quoto-vs-tradify";
import { bestQuotingApps2026 } from "./best-quoting-apps-for-tradies-2026";

export const posts: Post[] = [
  bestQuotingApps2026,
  quotoVsServiceM8,
  quotoVsTradify,
].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getRelatedPosts(slug: string, limit = 2): Post[] {
  return posts.filter((p) => p.slug !== slug).slice(0, limit);
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug);
}
