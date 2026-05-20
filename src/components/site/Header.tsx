import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

const navLinks = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#pricing", label: "Pricing" },
  { to: "/blog" as const, label: "Blog" },
  { to: "/support" as const, label: "Support" },
  { href: "/#download", label: "Download" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
          {navLinks.map((l) =>
            "to" in l ? (
              <Link key={l.label} to={l.to} className="transition hover:text-foreground">{l.label}</Link>
            ) : (
              <a key={l.label} href={l.href} className="transition hover:text-foreground">{l.label}</a>
            )
          )}
        </nav>

        <Link
          to="/"
          hash="download"
          className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90 sm:inline-flex"
        >
          Get the app
        </Link>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-9 w-9 items-center justify-center rounded-md text-foreground sm:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M4 4l12 12M16 4L4 16" strokeLinecap="round" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <path d="M3 5h14M3 10h14M3 15h14" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu drawer */}
      {open && (
        <nav className="border-t border-border/60 bg-background/95 backdrop-blur-xl sm:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-4 gap-1">
            {navLinks.map((l) =>
              "to" in l ? (
                <Link
                  key={l.label}
                  to={l.to}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground transition hover:bg-secondary"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              )
            )}
            <div className="mt-3 border-t border-border/60 pt-3">
              <Link
                to="/"
                hash="download"
                className="block w-full rounded-full bg-foreground px-4 py-2.5 text-center text-sm font-medium text-background transition hover:opacity-90"
                onClick={() => setOpen(false)}
              >
                Get the app
              </Link>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
