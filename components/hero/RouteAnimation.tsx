"use client";

import { m } from "framer-motion";

const stops = [
  { label: "Visakhapatnam", y: 20 },
  { label: "Hyderabad", y: 100 },
  { label: "Mumbai", y: 180 },
  { label: "Global", y: 260 },
];

export function RouteAnimation() {
  return (
    <svg
      viewBox="0 0 220 300"
      className="w-full h-full"
      fill="none"
      aria-hidden="true"
    >
      <line
        x1="14"
        y1="20"
        x2="14"
        y2="260"
        stroke="#53728A"
        strokeOpacity="0.3"
        strokeWidth="2"
        strokeDasharray="1 7"
        strokeLinecap="round"
      />

      {stops.map((stop, i) => (
        <g key={stop.label}>
          <circle
            cx="14"
            cy={stop.y}
            r={i === stops.length - 1 ? 6 : 5}
            fill={i === 0 ? "#F4A62A" : "#071A2B"}
          />
          <text
            x="30"
            y={stop.y + 4}
            fontSize="12"
            fontWeight={i === 0 ? 700 : 500}
            fill="#071A2B"
            fillOpacity={i === 0 ? 1 : 0.7}
          >
            {stop.label}
          </text>
        </g>
      ))}

      <m.circle
        r="4.5"
        fill="#F4A62A"
        initial={{ cy: 20 }}
        animate={{ cy: [20, 100, 180, 260, 20] }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.28, 0.58, 0.85, 1],
        }}
        cx="14"
      />
    </svg>
  );
}
