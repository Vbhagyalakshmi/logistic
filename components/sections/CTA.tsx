import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-navy py-24 lg:py-32">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.18]"
        viewBox="0 0 800 400"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M-50 350 C 150 250, 250 150, 450 180 S 700 100, 850 40"
          stroke="#F4A62A"
          strokeWidth="1.5"
          className="route-path"
        />
        <path
          d="M-50 80 C 200 120, 300 250, 500 260 S 650 350, 850 320"
          stroke="#53728A"
          strokeWidth="1.5"
          className="route-path"
        />
      </svg>

      <Container className="relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2
            className="font-bold text-ivory tracking-tight leading-tight"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.5rem)" }}
          >
            Ready to move what matters?
          </h2>
          <p className="mt-5 text-ivory/65 text-lg">
            From a single package to an entire supply chain, Chowra helps
            keep your deliveries moving.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button href="/quote" variant="primary">
              Get a Quote
            </Button>
            <Button href="/tracking" variant="outline-light">
              Track Shipment
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
