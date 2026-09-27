import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Badge({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-navy/10 bg-white/70 px-4 py-1.5 text-xs font-medium text-navy/80 backdrop-blur-sm",
        className
      )}
    >
      {children}
    </span>
  );
}
