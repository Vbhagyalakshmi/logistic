import { Hero } from "@/components/hero/Hero";
import { Tracking } from "@/components/sections/Tracking";
import { Services } from "@/components/sections/Services";
import { ParallaxBand } from "@/components/sections/Parallax";
import { Coverage } from "@/components/sections/Coverage";
import { WhyChowra } from "@/components/sections/WhyChowra";
import { QuoteCalculator } from "@/components/sections/QuoteCalculator";
import { Partners } from "@/components/sections/Partners";
import { CTA } from "@/components/sections/CTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Tracking />
      <Services />
      <ParallaxBand />
      <Coverage />
      <WhyChowra />
      <QuoteCalculator />
      <Partners />
      <CTA />
    </>
  );
}
