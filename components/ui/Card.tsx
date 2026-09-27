import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Card({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-card bg-white shadow-card overflow-hidden",
        className
      )}
    >
      {children}
    </div>
  );
}
