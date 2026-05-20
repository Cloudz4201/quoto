import type { Trade } from "./types";
import imageElectricians from "@/assets/trades/electricians.jpg";
import imagePlumbers from "@/assets/trades/plumbers.jpg";
import imageLandscapers from "@/assets/trades/landscapers.jpg";
import imagePainters from "@/assets/trades/painters.jpg";
import imageBuilders from "@/assets/trades/builders.jpg";

const electricians: Trade = {
  slug: "electricians",
  singular: "electrician",
  plural: "electricians",
  shortLabel: "Electricians",
  emoji: "⚡",
  image: imageElectricians,
  imageAlt: "Australian electrician working on an open residential switchboard",
  metaTitle: "Quoting app for electricians | Quoto",
  metaDescription:
    "Quote switchboard upgrades, power points, lighting and EV chargers in under a minute. Quoto is the simple quoting app built for Australian electricians — works with Xero, ServiceM8, MYOB and QuickBooks.",
  heroEyebrow: "Built for sparkies",
  heroHeadline: "Quoting app for electricians.",
  heroSub:
    "Stop writing quotes on the back of a job sheet at 9pm. Build a clean, branded quote on site — switchboard upgrades, power points, lighting, EV chargers — and send it before you've packed up the ute.",
  painPoints: [
    "Estimating cable runs, GPOs and labour without a calculator and a notebook",
    "Forgetting to add the call-out fee or compliance certificate to the final quote",
    "Customers ghosting because the quote arrived three days after the site visit",
    "Re-keying every approved job into Xero or ServiceM8 by hand at the end of the week",
  ],
  useCases: [
    {
      title: "Switchboard upgrades",
      desc: "Itemise the board, breakers, RCDs, labour and disposal of the old unit — with a clear total your customer can accept on their phone.",
    },
    {
      title: "Power point and lighting jobs",
      desc: "Add multiple GPOs and downlights as line items in seconds. Bundle materials and labour, or keep them separate — your call.",
    },
    {
      title: "EV charger installs",
      desc: "Quote the charger, the dedicated circuit, cable run, and any switchboard work — with a callout fee and a compliance line baked in.",
    },
  ],
  lineItemExamples: [
    "Switchboard upgrade",
    "Double GPO install",
    "LED downlight (supply & install)",
    "Smoke alarm replacement",
    "EV charger install",
    "Compliance certificate",
    "Call-out fee",
  ],
  faqs: [
    {
      q: "Does Quoto handle GST and AS/NZS compliance line items?",
      a: "Yes. Quoto automatically calculates GST and lets you add compliance certificates, callout fees and any other standard line items in a couple of taps.",
    },
    {
      q: "Can I save my common electrical line items as templates?",
      a: "Yes — save your usual GPO, downlight, switchboard and EV charger items with prices and labour, then drop them into any quote in seconds.",
    },
    {
      q: "Will it push approved quotes into ServiceM8 or simPRO?",
      a: "ServiceM8 sync is built in — approved quotes flow straight through with no double entry. simPRO support is on the roadmap; in the meantime, customers on simPRO use Quoto for the quoting flow and export to PDF.",
    },
    {
      q: "Is Quoto good for solo sparkies as well as small crews?",
      a: "Both. The Starter plan is free for solo electricians, and Pro and Team plans add branded PDFs, integrations and shared customer lists for small crews.",
    },
  ],
};

const plumbers: Trade = {
  slug: "plumbers",
  singular: "plumber",
  plural: "plumbers",
  shortLabel: "Plumbers",
  emoji: "🔧",
  image: imagePlumbers,
  imageAlt: "Australian plumber installing a hot water system with a pipe wrench",
  metaTitle: "Quoting app for plumbers | Quoto",
  metaDescription:
    "Quote hot water systems, blocked drains, bathroom roughs and gas fitouts in under a minute. Quoto is the simple quoting app built for Australian plumbers — syncs with Xero, MYOB, ServiceM8 and QuickBooks.",
  heroEyebrow: "Built for plumbers",
  heroHeadline: "Quoting app for plumbers.",
  heroSub:
    "Hot water systems, blocked drains, bathroom rough-ins, gas fitouts — quote it on site and send it before you've washed your hands. No more handwritten quotes that get lost behind the cab.",
  painPoints: [
    "Quoting hot water replacements with cylinder, fittings, labour and removal all going on one page",
    "Forgetting to include the access fee, after-hours rate, or trade waste levy",
    "Losing track of which quotes the customer actually opened",
    "Doing your books on Sunday night because the week's jobs aren't in Xero yet",
  ],
  useCases: [
    {
      title: "Hot water system replacements",
      desc: "Itemise the unit, valves, tundish, fittings, labour and old-unit removal — with one tap to add same-day or after-hours surcharge.",
    },
    {
      title: "Blocked drains and emergency jobs",
      desc: "Build a quick callout quote on the truck. Customer accepts on their phone, you get on with the job.",
    },
    {
      title: "Bathroom rough-ins and gas fitouts",
      desc: "Long-form quotes broken into clean stages — rough-in, fit-off, gas test — so the customer sees exactly what they're paying for.",
    },
  ],
  lineItemExamples: [
    "Hot water unit (gas/electric/heat pump)",
    "Blocked drain — CCTV & clear",
    "Tap or mixer replacement",
    "Toilet pan & cistern install",
    "Gas line test & certification",
    "After-hours callout",
  ],
  faqs: [
    {
      q: "Can Quoto handle staged plumbing quotes — rough-in, fit-off, gas test?",
      a: "Yes. Group line items into stages so the customer sees a clear breakdown for each part of the job, with a single total at the bottom.",
    },
    {
      q: "Do you handle GST and trade waste / access fees?",
      a: "GST is calculated automatically. Trade waste levies, access fees and after-hours surcharges drop in as one-tap line items you can save as templates.",
    },
    {
      q: "Can I send a quote and then turn it into an invoice in Xero or MYOB?",
      a: "When a quote is accepted, push it straight to Xero — no re-keying. MYOB sync is in the pipeline and ships in a coming release.",
    },
    {
      q: "Will the customer be able to accept the quote on their phone?",
      a: "Yes. Quotes go out as a clean, mobile-friendly link the customer can review and accept with a single tap — you get a notification the moment they do.",
    },
  ],
};

const landscapers: Trade = {
  slug: "landscapers",
  singular: "landscaper",
  plural: "landscapers",
  shortLabel: "Landscapers",
  emoji: "🌿",
  image: imageLandscapers,
  imageAlt: "Australian landscaper laying fresh rolls of turf in a backyard",
  metaTitle: "Quoting app for landscapers | Quoto",
  metaDescription:
    "Quote turf, retaining walls, decks, paving and irrigation in under a minute. Quoto is the simple quoting app built for Australian landscapers — works with Xero, MYOB, ServiceM8 and QuickBooks.",
  heroEyebrow: "Built for landscapers",
  heroHeadline: "Quoting app for landscapers.",
  heroSub:
    "Turf, retaining walls, decks, paving, irrigation — quote it on site with photos in the file, send it before you leave, and track every job from first walkthrough to final invoice.",
  painPoints: [
    "Quoting on the spot from a clipboard while the customer's expecting a number by tonight",
    "Big multi-stage jobs that need a clean breakdown, not a wall of numbers in an email",
    "Forgetting to add tip fees, machine hire, or the day-rate uplift for offsite labour",
    "Following up on quotes you sent three weeks ago and lost track of",
  ],
  useCases: [
    {
      title: "Turf, mulch and garden refresh",
      desc: "Calculate square metres on site, itemise materials, labour and delivery — send the quote before the customer's kettle has boiled.",
    },
    {
      title: "Retaining walls, decks and paving",
      desc: "Multi-stage quotes broken into prep, build and finish — with photos and notes attached so the customer knows exactly what's included.",
    },
    {
      title: "Irrigation and lighting",
      desc: "Bundle controllers, valves, drip line, sprinkler heads and labour — save your usual kit as a template and drop it in next time.",
    },
  ],
  lineItemExamples: [
    "Turf (supply & lay, per m²)",
    "Mulch delivery & spread",
    "Retaining wall (per linear metre)",
    "Timber decking (supply & install)",
    "Paving (per m²)",
    "Irrigation system",
    "Machine hire / day rate",
  ],
  faqs: [
    {
      q: "Can I quote per square metre and have the total work itself out?",
      a: "Yes. Set a per-m² (or per linear metre) rate on any line item, type the size, and Quoto calculates the total — including GST.",
    },
    {
      q: "Can I attach site photos to a quote?",
      a: "Yes — snap a photo of the site, attach it to the quote, and the customer sees exactly what's being quoted on. Great for retaining walls and big multi-stage jobs.",
    },
    {
      q: "What about staged payment landscapes — deposit, mid-job, final?",
      a: "Show the staged breakdown on the quote so the customer knows the payment schedule up front. Push accepted quotes to Xero and invoice each stage from there.",
    },
    {
      q: "Is it any good for a one-person landscaping business?",
      a: "It's the sweet spot. The free Starter plan handles solo landscapers all day, and you only step up to Pro when you want branded PDFs or Xero sync.",
    },
  ],
};

const painters: Trade = {
  slug: "painters",
  singular: "painter",
  plural: "painters",
  shortLabel: "Painters",
  emoji: "🎨",
  image: imagePainters,
  imageAlt: "Australian painter rolling a fresh coat of paint onto an interior wall",
  metaTitle: "Quoting app for painters | Quoto",
  metaDescription:
    "Quote interior repaints, exterior jobs, prep work and roof coatings in under a minute. Quoto is the simple quoting app built for Australian painters — works with Xero, MYOB and ServiceM8.",
  heroEyebrow: "Built for painters",
  heroHeadline: "Quoting app for painters.",
  heroSub:
    "Whole-house repaints, exterior jobs, ceilings, doors, prep and second coats — break it down by room or surface and send a clean quote your customer can actually read.",
  painPoints: [
    "Quoting whole-house jobs without a 4-page Word doc that nobody reads",
    "Customers asking for a 'just the walls' option and a 'walls plus ceilings' option — and you having to redo the whole quote",
    "Forgetting to add prep, gap-filling, two-coat upgrade, or trim work",
    "Losing track of which quotes are still warm and which ones are dead",
  ],
  useCases: [
    {
      title: "Interior repaints (room by room)",
      desc: "Build a quote room by room with walls, ceilings, trims and doors itemised — so the customer can pick the rooms they want done and the quote updates instantly.",
    },
    {
      title: "Exterior repaints",
      desc: "Quote prep, undercoat, two coats and trim work as separate lines — with optional add-ons for gutters, fascia and roof.",
    },
    {
      title: "Heritage and detailed work",
      desc: "Add notes and photos per line item for sashes, mouldings and timber repair, so quotes don't get queried two weeks later.",
    },
  ],
  lineItemExamples: [
    "Interior walls (per room)",
    "Ceiling (per room)",
    "Doors and trims",
    "Exterior — prep & two coats",
    "Roof coating",
    "Gap fill & sand back",
    "Colour consultation",
  ],
  faqs: [
    {
      q: "Can I send a quote with optional add-ons the customer picks from?",
      a: "Yes. Mark line items as optional and the customer can tick the ones they want — the quote total updates as they go, so a 'walls only' vs 'walls + ceilings' quote is one document, not three.",
    },
    {
      q: "Does Quoto handle by-the-room and by-the-coat pricing?",
      a: "Both. Build line items per room, per surface, or per coat — whatever matches how you actually price. Save your most-used setups as templates so the next quote is a 30-second job.",
    },
    {
      q: "Can I track which leads have viewed but not accepted the quote?",
      a: "Yes — Quoto shows you which customers opened the quote and which ones didn't, so your follow-ups go to people who are actually thinking about it.",
    },
    {
      q: "Will it work for a husband-and-wife painting team?",
      a: "Perfectly. Pro and Team plans share customers, quotes and templates between users, so the office partner and the on-site partner are always looking at the same quote.",
    },
  ],
};

const builders: Trade = {
  slug: "builders",
  singular: "builder",
  plural: "builders",
  shortLabel: "Builders & carpenters",
  emoji: "🔨",
  image: imageBuilders,
  imageAlt: "Australian carpenter driving a deck screw into hardwood decking",
  metaTitle: "Quoting app for builders and carpenters | Quoto",
  metaDescription:
    "Quote extensions, renovations, decks, pergolas and carpentry in under a minute. Quoto is the simple quoting app built for Australian builders and carpenters — syncs with Xero, MYOB, ServiceM8 and QuickBooks.",
  heroEyebrow: "Built for builders and chippies",
  heroHeadline: "Quoting app for builders and carpenters.",
  heroSub:
    "Extensions, renovations, decks, pergolas, second-fix carpentry — break the job into clean stages, attach plans and photos, and send a quote the client can actually understand on their phone.",
  painPoints: [
    "Big multi-stage jobs that turn into a 6-page PDF nobody reads end-to-end",
    "Quoting against a builder's PC schedule without dropping a line item",
    "Variations turning into 'I never agreed to that' conversations at handover",
    "Losing a Saturday updating spreadsheets to keep the office and the site on the same page",
  ],
  useCases: [
    {
      title: "Extensions and renovations",
      desc: "Stage the quote by demo, framing, lock-up, fit-off and finish — with PC allowances and provisional sums clearly called out so there are no surprises later.",
    },
    {
      title: "Decks, pergolas and outdoor structures",
      desc: "Itemise structural timber, decking, fixings and labour. Add optional upgrades (hardwood vs treated pine, screening, balustrade) the customer can pick from.",
    },
    {
      title: "Second-fix carpentry",
      desc: "Quote skirting, architrave, doors and built-ins room by room, with materials and labour separated so the client sees where the money goes.",
    },
  ],
  lineItemExamples: [
    "Demolition & site prep",
    "Framing & structural carpentry",
    "Decking (supply & install per m²)",
    "Pergola (supply & install)",
    "Skirting & architrave (per linear metre)",
    "PC sum / provisional allowance",
    "Variations",
  ],
  faqs: [
    {
      q: "Can Quoto handle PC sums, provisional sums and variations?",
      a: "Yes — flag any line as a PC or provisional sum so it shows clearly on the quote. Variations get their own quote (or are added to the existing one) so the paper trail matches what's actually agreed.",
    },
    {
      q: "Can I attach plans or scope documents to the quote?",
      a: "Yes — attach PDFs and photos to a quote (plans, council notes, site shots) so the client signs off knowing exactly what's included and what's not.",
    },
    {
      q: "Will it push approved jobs into Xero so my bookkeeper is happy?",
      a: "Yes. Approved quotes push straight to Xero with line items intact, so your bookkeeper isn't chasing you for what was actually quoted on each job.",
    },
    {
      q: "Is it overkill for a one-chippy operation?",
      a: "No — the free Starter plan is plenty for a solo carpenter, and Pro adds branded PDFs and Xero sync when you're ready. You can start free and stay there as long as it works for you.",
    },
  ],
};

export const trades: Trade[] = [
  electricians,
  plumbers,
  landscapers,
  painters,
  builders,
];

export function getTradeBySlug(slug: string): Trade | undefined {
  return trades.find((t) => t.slug === slug);
}

export function getAllTradeSlugs(): string[] {
  return trades.map((t) => t.slug);
}
