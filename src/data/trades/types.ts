// Typed model for a trade landing page (`/for/$trade`).
// Each trade gets its own commercial-intent landing page targeting queries
// like "quoting app for electricians" — written in the trade's own language
// so the page reads as bespoke, not templated.

export type TradeFaq = { q: string; a: string };

export type TradeUseCase = { title: string; desc: string };

export type Trade = {
  slug: string;
  singular: string;
  plural: string;
  shortLabel: string;
  emoji: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  heroEyebrow: string;
  heroHeadline: string;
  heroSub: string;
  painPoints: string[];
  useCases: TradeUseCase[];
  lineItemExamples: string[];
  faqs: TradeFaq[];
};
