import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Domestic and international courier, express delivery, e-commerce logistics, freight and cargo, and corporate logistics solutions from Chowra.",
  alternates: { canonical: "/services" },
};

const imageMap: Record<string, string> = {
  domestic: "/images/courier/domestic-courier-service-500x500.webp",
  international: "/images/courier/international-domestic-courier-service-709.jpg",
  express: "/images/courier/red-delivery-car-deliver-express-shipping-fast-delivery-background-3d-rendering-illustration_56104-1910.avif",
  ecommerce: "/images/courier/abc-blog.jpg",
  freight: "/images/courier/01-cargo-vs-freight.jpg",
  corporate: "/images/courier/images.jpg",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Logistics built around your needs"
        description="From a single parcel to a full supply chain, explore the full range of Chowra's courier, freight and logistics solutions."
      />

      <section className="py-20 lg:py-28 bg-white">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {siteConfig.services.map((service, i) => (
              <Reveal key={service.slug} delay={i * 0.06}>
                <Link
                  href={service.href}
                  className="group relative flex flex-col overflow-hidden rounded-card bg-ivory shadow-card transition-transform duration-500 hover:-translate-y-2.5 hover:scale-[1.015]"
                >
                  <div className="relative h-56 overflow-hidden bg-navy/10">
                    <Image
                      src={imageMap[service.image]}
                      alt={service.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/70 via-navy/10 to-transparent" />
                    <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-navy shadow-sm backdrop-blur-sm">
                      Chowra Logistics
                    </div>
                    <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                      <span className="text-sm font-semibold text-white drop-shadow-md">
                        {service.title}
                      </span>
                      <span className="rounded-full bg-amber px-2.5 py-1 text-xs font-bold text-navy opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        Explore
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h2 className="text-lg font-bold text-navy">{service.title}</h2>
                    <p className="mt-2 text-sm text-navy/60 leading-relaxed flex-1">
                      {service.short}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-amber-dark transition-colors">
                      Learn more
                      <ArrowUpRight size={15} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
