import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Tracking } from "@/components/sections/Tracking";

export const metadata: Metadata = {
  title: "Track Your Shipment",
  description:
    "Track your Chowra Logistics shipment status from pickup to delivery using your tracking number.",
  alternates: { canonical: "/tracking" },
};

export default function TrackingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Tracking"
        title="Track your shipment"
        description="Enter your tracking number below to see live status, from pickup to delivery."
      />
      <Tracking showHeading={false} />
    </>
  );
}
