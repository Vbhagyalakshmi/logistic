"use client";

import { m } from "framer-motion";
import { PackageCheck, MapPin } from "lucide-react";

export function ShipmentCard() {
  return (
    <m.div
      initial={{ opacity: 0, y: 30, rotateX: 8, rotateY: -6 }}
      animate={{
        opacity: 1,
        y: [0, -10, 0],
        rotateX: [8, 4, 8],
        rotateY: [-6, -3, -6],
      }}
      transition={{
        opacity: { duration: 0.8, delay: 0.5 },
        y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 6, repeat: Infinity, ease: "easeInOut" },
      }}
      style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      className="relative w-[220px] sm:w-[290px] rounded-2xl bg-white/95 backdrop-blur-md shadow-soft border border-white p-4 sm:p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div>
          <p className="text-[10px] font-semibold tracking-wide text-steel uppercase">
            Shipment
          </p>
          <p className="text-sm font-bold text-navy">CHW-20481</p>
        </div>
        <span className="flex items-center gap-1.5 rounded-full bg-amber/15 text-amber-dark text-[11px] font-semibold px-2.5 py-1">
          <PackageCheck size={13} />
          In Transit
        </span>
      </div>

      <div className="space-y-3 mb-4">
        {[
          { city: "Visakhapatnam", done: true },
          { city: "Hyderabad", done: true },
          { city: "Mumbai", done: false },
        ].map((stop, i) => (
          <div key={stop.city} className="flex items-center gap-3">
            <span
              className={`flex h-5 w-5 items-center justify-center rounded-full ${
                stop.done ? "bg-navy text-ivory" : "bg-ivory border border-navy/20 text-transparent"
              }`}
            >
              <MapPin size={11} />
            </span>
            <span
              className={`text-sm ${
                stop.done ? "text-navy font-medium" : "text-navy/40"
              }`}
            >
              {stop.city}
            </span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-xl bg-navy px-4 py-2.5">
        <span className="text-[11px] font-medium text-ivory/60">ETA</span>
        <span className="text-sm font-semibold text-amber">Tomorrow</span>
      </div>
    </m.div>
  );
}
