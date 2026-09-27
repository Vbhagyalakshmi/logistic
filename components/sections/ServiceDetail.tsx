import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PageHeader } from "@/components/layout/PageHeader";
import { Reveal } from "@/components/motion/Reveal";
import { siteConfig, type ServiceItem } from "@/lib/site-config";

const imageMap: Record<string, string> = {
  domestic: "/images/courier/domestic-courier-service-500x500.webp",
  international: "/images/courier/international-domestic-courier-service-709.jpg",
  express: "/images/courier/red-delivery-car-deliver-express-shipping-fast-delivery-background-3d-rendering-illustration_56104-1910.avif",
  ecommerce: "/images/courier/abc-blog.jpg",
  freight: "/images/courier/01-cargo-vs-freight.jpg",
  corporate: "/images/courier/images.jpg",
};

export function ServiceDetail({ service }: { service: ServiceItem }) {
  const otherServices = siteConfig.services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={service.title}
        description={service.description}
      >
        <div className="mt-8 flex flex-wrap gap-4">
          <Button href="/quote" variant="primary">
            Get a Quote
          </Button>
          <Button href="/tracking" variant="outline-light">
            Track Shipment
          </Button>
        </div>
      </PageHeader>

      <section className="py-20 lg:py-28 bg-white">
        <Container className="grid lg:grid-cols-2 gap-14 items-center">
          <Reveal>
            <div className="relative aspect-[4/3] rounded-card overflow-hidden shadow-card">
              <Image
                src={imageMap[service.image]}
                alt={service.title}
                fill
                sizes="(max-width: 1024px) 90vw, 560px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-2xl font-bold text-navy tracking-tight">
              What&apos;s included
            </h2>
            <ul className="mt-6 space-y-4">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle2 size={19} className="text-amber-dark mt-0.5 shrink-0" />
                  <span className="text-navy/75">{feature}</span>
                </li>
              ))}
            </ul>
            <Button href="/quote" variant="secondary" className="mt-8">
              Request this service
            </Button>
          </Reveal>
        </Container>
      </section>

      <section className="py-20 lg:py-24 bg-ivory">
        <Container>
          <h2 className="text-xl font-bold text-navy mb-8">
            Explore other services
          </h2>
          <div className="grid gap-5 sm:grid-cols-3">
            {otherServices.slice(0, 3).map((s) => (
              <a
                key={s.slug}
                href={s.href}
                className="rounded-2xl bg-white shadow-card p-6 hover:-translate-y-1 transition-transform duration-300"
              >
                <p className="font-semibold text-navy">{s.title}</p>
                <p className="text-sm text-navy/55 mt-2">{s.short}</p>
              </a>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
