import { ShieldCheck, Zap, Radar, SlidersHorizontal } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";

const features = [
  {
    icon: ShieldCheck,
    title: "Reliable",
    description: "Consistent logistics operations you can build your business around.",
  },
  {
    icon: Zap,
    title: "Fast",
    description: "Solutions designed around delivery timelines that matter to you.",
  },
  {
    icon: Radar,
    title: "Connected",
    description: "Technology-enabled shipment visibility from pickup to delivery.",
  },
  {
    icon: SlidersHorizontal,
    title: "Flexible",
    description: "Solutions for individuals, businesses and e-commerce alike.",
  },
];

export function WhyChowra() {
  return (
    <section id="why-chowra" className="py-24 lg:py-32 bg-white">
      <Container>
        <Reveal className="max-w-2xl">
          <h2
            className="font-bold text-navy tracking-tight leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
          >
            Why businesses choose Chowra
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px sm:grid-cols-2 lg:grid-cols-4 bg-navy/10 rounded-card overflow-hidden">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.08} className="bg-white p-8">
              <feature.icon size={22} className="text-amber-dark" strokeWidth={1.75} />
              <h3 className="mt-5 text-lg font-bold text-navy">{feature.title}</h3>
              <p className="mt-2 text-sm text-navy/60 leading-relaxed">
                {feature.description}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
