import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { QuoteForm } from "@/components/sections/QuoteForm";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Get a Quote",
  description:
    "Request an estimated quote for domestic, international, express, freight or corporate logistics with Chowra Logistics.",
  alternates: { canonical: "/quote" },
};

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Get a Quote"
        title="Tell us about your shipment"
        description="Share a few details and our team will follow up with an estimated quote tailored to your needs."
      />
      <section className="py-20 lg:py-28 bg-ivory">
        <Container>
          <QuoteForm />
        </Container>
      </section>
    </>
  );
}
