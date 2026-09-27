import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig } from "@/lib/site-config";

const imageMap: Record<string, string> = {
  domestic: "/images/courier/domestic-courier-service-500x500.webp",
  international: "/images/courier/international-domestic-courier-service-709.jpg",
  express: "/images/courier/red-delivery-car-deliver-express-shipping-fast-delivery-background-3d-rendering-illustration_56104-1910.avif",
  ecommerce: "/images/courier/abc-blog.jpg",
  freight: "/images/courier/01-cargo-vs-freight.jpg",
  corporate: "/images/courier/images.jpg",
};

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-32 bg-white">
      <Container>
        <Reveal className="max-w-2xl">
          <h2
            className="font-bold text-navy tracking-tight leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Logistics built around your needs
          </h2>
          <p className="mt-4 text-navy/60 text-lg">
            From a single parcel to a full supply chain, Chowra covers the
            movement of goods at every scale.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((service, i) => (
            <Reveal key={service.slug} delay={i * 0.06}>
              <Link
                href={service.href}
                className="group relative flex flex-col overflow-hidden rounded-card bg-ivory shadow-card transition-transform duration-500 hover:-translate-y-2.5 hover:scale-[1.015]"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={imageMap[service.image]}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-navy/0 to-transparent" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-navy">{service.title}</h3>
                  <p className="mt-2 text-sm text-navy/60 leading-relaxed flex-1">
                    {service.short}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-amber-dark transition-colors">
                    Learn more
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
