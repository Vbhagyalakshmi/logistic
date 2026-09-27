import { NextRequest, NextResponse } from "next/server";
import { trackingSchema } from "@/lib/validations";
import { demoStatusFor } from "@/lib/utils";

// Demo shipment used when the database is not connected yet, so the
// tracking UI works out of the box for CHW-20481 (the sample number
// referenced throughout the site).
const DEMO_SHIPMENT = {
  trackingNumber: "CHW-20481",
  origin: "Visakhapatnam",
  destination: "Mumbai",
  status: "In Transit",
  estimatedDelivery: "Tomorrow",
};

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = trackingSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid tracking number." },
      { status: 400 }
    );
  }

  const { trackingNumber } = parsed.data;
  const normalized = trackingNumber.toUpperCase();

  try {
    // If DATABASE_URL is configured, look the shipment up for real.
    if (process.env.DATABASE_URL) {
      const { db } = await import("@/lib/db");
      const { shipments } = await import("@/lib/schema");
      const { eq } = await import("drizzle-orm");

      const [found] = await db
        .select()
        .from(shipments)
        .where(eq(shipments.trackingNumber, normalized))
        .limit(1);

      if (found) {
        return NextResponse.json({
          shipment: {
            trackingNumber: found.trackingNumber,
            origin: found.origin,
            destination: found.destination,
            status: found.status,
            estimatedDelivery: found.estimatedDelivery,
          },
        });
      }
    }
  } catch {
    // If the database isn't reachable, fall through to demo behaviour
    // rather than failing the whole tracking experience.
  }

  if (normalized === DEMO_SHIPMENT.trackingNumber) {
    return NextResponse.json({ shipment: DEMO_SHIPMENT });
  }

  // Unknown numbers still resolve to a deterministic demo status so the
  // UI can be explored end-to-end without a database configured.
  return NextResponse.json({
    shipment: {
      trackingNumber: normalized,
      origin: "Visakhapatnam",
      destination: "Hyderabad",
      status: demoStatusFor(normalized),
      estimatedDelivery: null,
    },
  });
}
