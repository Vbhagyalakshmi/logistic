"use client";

import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Floating } from "@/components/motion/Floating";
import { FloatingGlobe } from "@/components/hero/FloatingGlobe";
import { siteConfig } from "@/lib/site-config";

// Simple relative positions on a stylised map canvas (percentage-based)
const points = [
  { name: "Visakhapatnam", x: 68, y: 58 },
  { name: "Hyderabad", x: 60, y: 52 },
  { name: "Bengaluru", x: 58, y: 68 },
  { name: "Chennai", x: 64, y: 70 },
  { name: "Mumbai", x: 48, y: 48 },
  { name: "Delhi", x: 52, y: 28 },
  { name: "Dubai", x: 30, y: 40 },
  { name: "Singapore", x: 82, y: 78 },
  { name: "London", x: 14, y: 14 },
];

const hub = points[0];

export function Coverage() {
  return (
    <section id="coverage" className="py-24 lg:py-32 bg-ivory">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2
              className="font-bold text-navy tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Connected across cities and borders
            </h2>
            <p className="mt-4 text-navy/60 text-lg max-w-md">
              A logistics network that reaches major Indian cities and
              connects onward to key international hubs.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-6 max-w-md">
              {siteConfig.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-navy">{stat.value}</p>
                  <p className="text-sm text-navy/55 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-xs text-navy/40 max-w-md">
              {siteConfig.statsDisclaimer}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex justify-center mb-8">
              <Floating range={8}>
                <FloatingGlobe />
              </Floating>
            </div>
            <div className="relative aspect-[4/3] rounded-card bg-white shadow-card overflow-hidden p-4">
              <svg viewBox="0 0 100 100" className="w-full h-full" aria-hidden="true">
                <rect x="0" y="0" width="100" height="100" fill="#F7F4EE" rx="4" />
                {points
                  .filter((p) => p.name !== hub.name)
                  .map((p) => (
                    <line
                      key={p.name}
                      x1={hub.x}
                      y1={hub.y}
                      x2={p.x}
                      y2={p.y}
                      stroke="#53728A"
                      strokeWidth="0.35"
                      strokeOpacity="0.45"
                      strokeDasharray="1.5 1.5"
                    />
                  ))}
                {points.map((p) => (
                  <g key={p.name}>
                    <m.circle
                      cx={p.x}
                      cy={p.y}
                      r={p.name === hub.name ? 2.2 : 1.5}
                      fill={p.name === hub.name ? "#F4A62A" : "#071A2B"}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                    />
                  </g>
                ))}
              </svg>

              <div className="absolute inset-x-4 bottom-4 flex flex-wrap gap-1.5">
                {points.map((p) => (
                  <span
                    key={p.name}
                    className="text-[10px] font-medium rounded-full bg-ivory px-2.5 py-1 text-navy/70 border border-navy/10"
                  >
                    {p.name}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
