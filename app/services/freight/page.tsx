import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServiceDetail } from "@/components/sections/ServiceDetail";
import { siteConfig } from "@/lib/site-config";

const service = siteConfig.services.find((s) => s.slug === "freight");

export const metadata: Metadata = {
  title: service ? `${service.title} | Chowra Logistics` : "Service",
  description: service?.description,
  alternates: { canonical: "/services/freight" },
};

export default function Page() {
  if (!service) return notFound();
  return <ServiceDetail service={service} />;
}
