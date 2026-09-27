import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Boxes } from "lucide-react";

export function Partners() {
  const partners = Array.from({ length: 5 }, (_, i) => `Partner 0${i + 1}`);

  return (
    <section className="py-20 bg-ivory border-y border-navy/5">
      <Container>
        <Reveal className="text-center">
          <p className="text-sm font-semibold text-navy/50 uppercase tracking-wide">
            Trusted by businesses moving forward
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-14 gap-y-8">
            {partners.map((name) => (
              <div
                key={name}
                className="flex items-center gap-2 text-navy/30 grayscale opacity-70 hover:opacity-100 hover:text-navy/50 transition-all duration-300"
              >
                <Boxes size={20} strokeWidth={1.5} />
                <span className="text-sm font-semibold tracking-wide">{name}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
