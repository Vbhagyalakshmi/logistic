"use client";

import { m } from "framer-motion";
import { ReactNode } from "react";

export function Floating({
  children,
  className,
  range = 12,
  duration = 6,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  range?: number;
  duration?: number;
  delay?: number;
}) {
  return (
    <m.div
      animate={{ y: [0, -range, 0] }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </m.div>
  );
}
