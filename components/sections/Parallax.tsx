"use client";

import Image from "next/image";
import { useRef } from "react";
import { m, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";

export function ParallaxBand() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative h-[70vh] min-h-[420px] overflow-hidden">
      <m.div style={{ y }} className="absolute inset-0 -z-10 scale-110">
        <Image
          src="/images/warehouse/warehouse-3.jpg"
          alt="Modern automated logistics warehouse"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </m.div>
      <div className="absolute inset-0 bg-navy/55" />

      <Container className="relative h-full flex items-center">
        <div className="max-w-xl">
          <h2
            className="font-bold text-ivory tracking-tight leading-[1.1]"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
          >
            Built for speed.
            <br />
            Designed for reliability.
          </h2>
        </div>
      </Container>
    </section>
  );
}
