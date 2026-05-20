import { Link } from "@tanstack/react-router";
import type { Block } from "@/data/blog/types";

export function PostBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="space-y-6">
      {blocks.map((block, i) => (
        <BlockRenderer key={i} block={block} />
      ))}
    </div>
  );
}

function BlockRenderer({ block }: { block: Block }) {
  switch (block.type) {
    case "p":
      return (
        <p className="text-base leading-relaxed text-muted-foreground sm:text-[17px]">
          {block.text}
        </p>
      );
    case "phtml":
      return (
        <p
          className="text-base leading-relaxed text-muted-foreground sm:text-[17px]"
          dangerouslySetInnerHTML={{ __html: block.html }}
        />
      );
    case "h2":
      return (
        <h2
          id={block.id}
          className="scroll-mt-24 pt-6 text-2xl font-semibold tracking-tight text-foreground sm:text-[28px]"
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          id={block.id}
          className="scroll-mt-24 pt-2 text-lg font-semibold tracking-tight text-foreground sm:text-xl"
        >
          {block.text}
        </h3>
      );
    case "ul":
      return (
        <ul className="list-disc space-y-2 pl-6 text-base leading-relaxed text-muted-foreground marker:text-primary sm:text-[17px]">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol className="list-decimal space-y-2 pl-6 text-base leading-relaxed text-muted-foreground marker:text-primary marker:font-semibold sm:text-[17px]">
          {block.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ol>
      );
    case "tldr":
      return (
        <aside className="rounded-2xl border border-border/70 bg-accent/40 p-6 sm:p-7">
          <div className="text-xs font-semibold uppercase tracking-wider text-primary">
            TL;DR
          </div>
          <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-foreground marker:text-primary">
            {block.items.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </aside>
      );
    case "callout":
      return (
        <aside className="rounded-2xl border-l-4 border-primary bg-secondary/60 px-5 py-4 text-sm leading-relaxed text-foreground">
          {block.text}
        </aside>
      );
    case "compare":
      return (
        <div className="overflow-x-auto rounded-2xl border border-border/70">
          <table className="w-full border-collapse text-sm">
            <thead className="bg-secondary/60">
              <tr>
                {block.headers.map((h, i) => (
                  <th
                    key={i}
                    className="px-4 py-3 text-left font-semibold text-foreground"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {block.rows.map((row, i) => (
                <tr key={i} className="border-t border-border/70">
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={
                        j === 0
                          ? "px-4 py-3 font-medium text-foreground"
                          : "px-4 py-3 text-muted-foreground"
                      }
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "cta":
      return (
        <div className="rounded-2xl border border-border/70 bg-card p-6 text-center sm:p-8">
          <p className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
            {block.text}
          </p>
          <Link
            to="/"
            hash="download"
            className="mt-5 inline-flex items-center justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:opacity-90"
          >
            {block.label}
          </Link>
        </div>
      );
    default: {
      const _exhaustive: never = block;
      return _exhaustive;
    }
  }
}
