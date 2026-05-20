import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-12 sm:flex-row sm:items-center">
        <Logo />
        <nav className="flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <Link to="/blog" className="transition hover:text-foreground">Blog</Link>
          <Link to="/privacy-policy" className="transition hover:text-foreground">Privacy Policy</Link>
          <Link to="/terms-and-conditions" className="transition hover:text-foreground">Terms &amp; Conditions</Link>
        </nav>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Quoto. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
