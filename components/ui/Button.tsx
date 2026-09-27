import { cn } from "@/lib/utils";
import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline-light";

const variants: Record<Variant, string> = {
  primary:
    "bg-amber text-navy hover:bg-amber-dark shadow-[0_10px_30px_-10px_rgba(244,166,42,0.6)]",
  secondary:
    "bg-navy text-ivory hover:bg-navy-light",
  ghost: "bg-transparent text-navy hover:bg-navy/5",
  "outline-light":
    "bg-transparent text-ivory border border-ivory/30 hover:bg-ivory/10",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  children,
  variant = "primary",
  className,
  href,
  onClick,
  ...props
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>) {
  const classes = cn(base, variants[variant], className);

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        onClick={onClick as unknown as () => void}
      >
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      {children}
    </button>
  );
}
