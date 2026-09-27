"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight, Radio, Package, Truck, Globe2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ShipmentCard } from "./ShipmentCard";
import { RouteAnimation } from "./RouteAnimation";

export function Hero() {
  return (
    <section className="hero-shell relative isolate overflow-hidden pt-28 pb-12 sm:pt-32 sm:pb-16 lg:pt-40 lg:pb-24">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/hero/courier-hero.avif"
          alt="Courier delivery vehicle and logistics network"
          fill
          priority
          sizes="100vw"
          className="hero-bg-image object-cover"
        />
        <div className="hero-image-wash absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_40%,rgba(244,166,42,0.18),transparent_28%)]" />
      </div>

      <div className="hero-grid absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
      <m.div
        className="hero-orb hero-orb-one"
        animate={{ y: [0, -18, 0], x: [0, 8, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <m.div
        className="hero-orb hero-orb-two"
        animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative grid lg:grid-cols-[1.02fr_0.98fr] gap-10 lg:gap-14 items-center">
        <div className="min-w-0">
          <m.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
            <Badge>
              <Radio size={12} className="text-amber" />
              Trusted Logistics Network
            </Badge>
          </m.div>

          <m.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="mt-5 sm:mt-6 font-bold tracking-tight text-navy leading-[0.98] max-w-3xl"
            style={{ fontSize: "clamp(2.35rem, 6vw, 5.2rem)" }}
          >
            Whatever You Order.
            <br />
            <span className="text-amber-dark">We Deliver.</span>
          </m.h1>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
            className="mt-5 sm:mt-6 text-base sm:text-lg text-navy/70 max-w-xl leading-relaxed"
          >
            Reliable logistics and courier solutions for e-commerce, businesses and everyday deliveries — from pickup to doorstep.
          </m.p>

          <m.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
            className="mt-7 sm:mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <Button href="/tracking" variant="secondary" className="group justify-center w-full sm:w-auto">
              Track Your Shipment
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="/quote" variant="primary" className="justify-center w-full sm:w-auto">
              Get a Quote
            </Button>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.42 }}
            className="mt-8 grid grid-cols-3 max-w-lg border-y border-navy/10 py-4 sm:py-5"
          >
            {[
              [Package, "Every Parcel"],
              [Truck, "Fast Delivery"],
              [Globe2, "Global Reach"],
            ].map(([Icon, label]) => (
              <div key={label as string} className="flex items-center gap-2 sm:gap-3 min-w-0">
                <span className="flex h-8 w-8 sm:h-9 sm:w-9 shrink-0 items-center justify-center rounded-full bg-white/80 shadow-sm">
                  <Icon size={15} className="text-amber-dark" />
                </span>
                <span className="text-[10px] sm:text-xs font-semibold text-navy/70 leading-tight">{label as string}</span>
              </div>
            ))}
          </m.div>

          <div className="mt-7 hidden sm:block max-w-[220px]">
            <RouteAnimation />
          </div>
        </div>

        <div className="relative min-w-0 flex justify-center lg:justify-end pt-4 sm:pt-6 lg:pt-0">
          <m.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: [0, -7, 0] }}
            transition={{ opacity: { duration: 0.7, delay: 0.25 }, scale: { duration: 0.7, delay: 0.25 }, y: { duration: 6, repeat: Infinity, ease: "easeInOut" } }}
            className="relative w-full max-w-[520px] aspect-[4/3] sm:aspect-[5/4] rounded-[28px] overflow-hidden shadow-soft border border-white/70 bg-white/30 backdrop-blur-sm"
          >
            <Image
              src="/images/hero/courier-hero.avif"
              alt="Fast courier delivery vehicle"
              fill
              sizes="(max-width: 1024px) 92vw, 520px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-navy/30 via-transparent to-white/10" />
            <div className="absolute left-4 top-4 sm:left-6 sm:top-6 rounded-2xl bg-white/90 backdrop-blur-md px-3 py-2 shadow-card">
              <p className="text-[9px] font-bold uppercase tracking-[0.16em] text-steel">Live network</p>
              <p className="mt-0.5 text-xs sm:text-sm font-bold text-navy">Pickup → Hub → Doorstep</p>
            </div>
          </m.div>

          <div className="absolute -bottom-4 left-2 sm:-bottom-7 sm:left-0 lg:-left-10">
            <ShipmentCard />
          </div>

          <m.div
            animate={{ y: [0, -8, 0], rotate: [0, 2, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-1 right-0 sm:-top-4 sm:-right-3 rounded-2xl bg-white/95 shadow-card px-3 sm:px-4 py-2.5 sm:py-3 border border-white/80"
          >
            <p className="text-[9px] font-semibold text-steel uppercase tracking-wide">Network</p>
            <p className="text-xs sm:text-sm font-bold text-navy">100+ Locations</p>
          </m.div>
        </div>
      </Container>
    </section>
  );
}
