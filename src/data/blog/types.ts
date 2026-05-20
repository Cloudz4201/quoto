export type Block =
  | { type: "p"; text: string }
  | { type: "phtml"; html: string }
  | { type: "h2"; text: string; id?: string }
  | { type: "h3"; text: string; id?: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "tldr"; items: string[] }
  | { type: "callout"; text: string }
  | { type: "compare"; headers: [string, string, string]; rows: Array<[string, string, string]> }
  | { type: "cta"; text: string; href: string; label: string };

export type PostCategory = "comparison" | "guide";

export type Post = {
  slug: string;
  title: string;
  description: string;
  category: PostCategory;
  competitorTags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingMinutes: number;
  lead: string;
  blocks: Block[];
};
