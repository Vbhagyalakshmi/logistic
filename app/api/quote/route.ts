import { NextRequest, NextResponse } from "next/server";
import { quoteRequestSchema } from "@/lib/validations";

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  const parsed = quoteRequestSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json(
      { error: parsed.error.issues[0]?.message ?? "Invalid request." },
      { status: 400 }
    );
  }

  try {
    if (process.env.DATABASE_URL) {
      const { db } = await import("@/lib/db");
      const { quoteRequests } = await import("@/lib/schema");
      await db.insert(quoteRequests).values(parsed.data);
    }
  } catch (err) {
    console.error("Failed to save quote request:", err);
    return NextResponse.json(
      { error: "Could not save your request right now. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
