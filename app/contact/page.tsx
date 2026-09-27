import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { ContactForm } from "@/components/sections/ContactForm";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Chowra Logistics and Couriers Limited for shipping enquiries, support and partnership opportunities.",
  alternates: { canonical: "/contact" },
};

const faqs = [
  {
    q: "How do I track my shipment?",
    a: "Use the tracking number provided at pickup on our Tracking page to see live shipment status.",
  },
  {
    q: "How is my quote calculated?",
    a: "Quotes are estimated based on pickup and delivery location, package type, weight and delivery speed. Final pricing is confirmed after booking.",
  },
  {
    q: "Do you deliver internationally?",
    a: "Yes, we offer international courier services with customs documentation support across major trade lanes.",
  },
  {
    q: "How can businesses set up a corporate account?",
    a: "Reach out through this contact form and our team will get in touch to discuss a tailored corporate logistics program.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        description="Have a question about a shipment, a quote or a partnership? We're here to help."
      />

      <section className="py-20 lg:py-28 bg-ivory">
        <Container className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <div>
            <Reveal className="space-y-6">
              <ContactInfo icon={Phone} label="Phone" value={siteConfig.contact.phone} />
              <ContactInfo icon={Mail} label="Email" value={siteConfig.contact.email} />
              <ContactInfo icon={MapPin} label="Address" value={siteConfig.contact.address} />
              <ContactInfo icon={Clock} label="Hours" value={siteConfig.contact.hours} />
            </Reveal>

            <Reveal delay={0.1} id="faq" className="mt-14">
              <h2 className="text-xl font-bold text-navy mb-6">
                Frequently asked questions
              </h2>
              <div className="space-y-5">
                {faqs.map((faq) => (
                  <div key={faq.q} className="border-b border-navy/10 pb-5">
                    <p className="font-semibold text-navy">{faq.q}</p>
                    <p className="mt-2 text-sm text-navy/60 leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}

function ContactInfo({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Phone;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-start gap-4">
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-navy text-amber">
        <Icon size={17} />
      </span>
      <div>
        <p className="text-xs font-semibold text-steel uppercase tracking-wide">{label}</p>
        <p className="text-navy font-medium mt-0.5">{value}</p>
      </div>
    </div>
  );
}
