"use client";

import { m } from "framer-motion";

const nodes = [
  { label: "India", x: 62, y: 55 },
  { label: "Asia", x: 78, y: 42 },
  { label: "Middle East", x: 46, y: 48 },
  { label: "Europe", x: 38, y: 28 },
];

const center = { x: 50, y: 50 };

export function FloatingGlobe() {
  return (
    <div className="relative w-full aspect-square max-w-[280px] mx-auto">
      <m.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle at 32% 28%, rgba(83,114,138,0.18), transparent 60%), radial-gradient(circle at 65% 70%, rgba(244,166,42,0.10), transparent 55%)",
          border: "1px solid rgba(7,26,43,0.12)",
          boxShadow: "inset 0 0 60px rgba(7,26,43,0.08)",
        }}
      />

      {/* latitude rings for a subtle sphere feel */}
      {[26, 50, 74].map((pct) => (
        <div
          key={pct}
          className="absolute left-1/2 -translate-x-1/2 rounded-full border border-navy/10"
          style={{ top: `${pct}%`, width: "88%", height: "1px" }}
        />
      ))}
      <div className="absolute inset-[6%] rounded-full border border-navy/10" />
      <div className="absolute inset-[18%] rounded-full border border-navy/[0.08]" />

      <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" aria-hidden="true">
        {nodes.map((node) => (
          <line
            key={node.label}
            x1={center.x}
            y1={center.y}
            x2={node.x}
            y2={node.y}
            stroke="#F4A62A"
            strokeWidth="0.4"
            strokeOpacity="0.5"
            className="route-path"
          />
        ))}
        <circle cx={center.x} cy={center.y} r="2.2" fill="#F4A62A" />
        {nodes.map((node) => (
          <circle key={node.label} cx={node.x} cy={node.y} r="1.6" fill="#071A2B" />
        ))}
      </svg>

      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-center whitespace-nowrap">
        <p className="text-xs font-semibold text-navy">Global Network</p>
        <p className="text-[11px] text-steel">Connected Across Borders</p>
      </div>
    </div>
  );
}
