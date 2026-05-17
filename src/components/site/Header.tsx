import { Link } from "@tanstack/react-router";
import { Logo } from "./Logo";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Logo />
        <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground sm:flex">
          <a href="/#features" className="transition hover:text-foreground">Features</a>
          <a href="/#how" className="transition hover:text-foreground">How it works</a>
          <a href="/#download" className="transition hover:text-foreground">Download</a>
        </nav>
        <Link
          to="/"
          hash="download"
          className="hidden rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-90 sm:inline-flex"
        >
          Get the app
        </Link>
      </div>
    </header>
  );
}
