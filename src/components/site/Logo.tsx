import { Link } from "@tanstack/react-router";
import logo from "@/assets/quoto-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logo}
        alt="Quoto logo"
        width={32}
        height={32}
        className="h-8 w-8 rounded-[8px]"
      />
      <span className="text-lg font-semibold tracking-tight text-foreground">quoto</span>
    </Link>
  );
}
