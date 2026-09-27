"use client";

import { m, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export function Parallax({
  children,
  strength = 80,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-strength, strength]);

  return (
    <div ref={ref} className={className}>
      <m.div style={{ y }}>{children}</m.div>
    </div>
  );
}
