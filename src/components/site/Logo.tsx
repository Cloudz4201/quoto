import { Link } from "@tanstack/react-router";
import logo from "@/assets/jobslip-logo.png";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`flex items-center gap-2.5 ${className}`}>
      <img
        src={logo}
        alt="JobSlip logo"
        width={32}
        height={32}
        className="h-8 w-8 rounded-[8px]"
      />
      <span className="text-lg font-semibold tracking-tight text-foreground">JobSlip</span>
    </Link>
  );
}
