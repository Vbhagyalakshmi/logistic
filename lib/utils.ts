import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Deterministic demo tracking timeline used by the tracking API and UI.
 * Real integrations would replace this with live carrier/network data.
 */
export const trackingStages = [
  "Pickup Confirmed",
  "In Transit",
  "Arrived at Hub",
  "Out for Delivery",
  "Delivered",
] as const;

export type TrackingStage = (typeof trackingStages)[number];

/** Produces a stable demo status from a tracking number so the same
 * number always returns the same result in this reference build. */
export function demoStatusFor(trackingNumber: string): TrackingStage {
  const sum = trackingNumber
    .split("")
    .reduce((acc, char) => acc + char.charCodeAt(0), 0);
  return trackingStages[sum % trackingStages.length];
}

/** Simple estimated-quote calculator for the rate calculator UI.
 * Clearly a demo estimate — not official pricing. */
export function estimateQuote(params: {
  weightKg: number;
  deliveryType: "standard" | "express" | "priority";
  international: boolean;
}) {
  const { weightKg, deliveryType, international } = params;
  const base = international ? 900 : 120;
  const perKg = international ? 350 : 40;
  const speedMultiplier =
    deliveryType === "priority" ? 1.8 : deliveryType === "express" ? 1.4 : 1;

  const price = Math.round((base + perKg * Math.max(weightKg, 0.5)) * speedMultiplier);

  const days = international
    ? deliveryType === "priority"
      ? "2-3 days"
      : deliveryType === "express"
      ? "4-5 days"
      : "7-10 days"
    : deliveryType === "priority"
    ? "Next day"
    : deliveryType === "express"
    ? "1-2 days"
    : "3-5 days";

  return { price, days };
}
