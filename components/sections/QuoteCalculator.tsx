"use client";

import { useMemo, useState } from "react";
import { m } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { CitySelect } from "@/components/ui/CitySelect";
import { estimateQuote } from "@/lib/utils";

const packageTypes = [
  { value: "document", label: "Document" },
  { value: "parcel", label: "Parcel" },
  { value: "fragile", label: "Fragile" },
  { value: "bulk", label: "Bulk / Freight" },
];

const deliveryTypes = [
  { value: "standard", label: "Standard" },
  { value: "express", label: "Express" },
  { value: "priority", label: "Priority" },
] as const;

export function QuoteCalculator() {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [packageType, setPackageType] = useState("parcel");
  const [weight, setWeight] = useState("2");
  const [deliveryType, setDeliveryType] = useState<
    (typeof deliveryTypes)[number]["value"]
  >("standard");

  const international = useMemo(() => {
    const d = destination.toLowerCase();
    return ["dubai", "singapore", "london", "usa", "uk", "international"].some((k) =>
      d.includes(k)
    );
  }, [destination]);

  const estimate = useMemo(
    () =>
      estimateQuote({
        weightKg: parseFloat(weight) || 0.5,
        deliveryType,
        international,
      }),
    [weight, deliveryType, international]
  );

  return (
    <section className="py-24 lg:py-32 bg-ivory">
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
          <Reveal>
            <h2
              className="font-bold text-navy tracking-tight leading-tight"
              style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
            >
              Get an estimated quote
            </h2>
            <p className="mt-4 text-navy/60 text-lg max-w-md">
              Enter your shipment details for an instant estimate, then
              request a full quote from our team.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-card bg-white shadow-card p-8 lg:p-10">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Pickup City">
                  <CitySelect
                    name="pickupCity"
                    value={pickup}
                    onChange={setPickup}
                  />
                </Field>
                <Field label="Delivery City">
                  <CitySelect
                    name="destinationCity"
                    value={destination}
                    onChange={setDestination}
                  />
                </Field>
                <Field label="Package Type">
                  <select
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="chowra-input"
                  >
                    {packageTypes.map((p) => (
                      <option key={p.value} value={p.value}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Weight (kg)">
                  <input
                    type="number"
                    min={0.5}
                    step={0.5}
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="chowra-input"
                  />
                </Field>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold text-steel uppercase tracking-wide mb-3">
                  Delivery Speed
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {deliveryTypes.map((d) => (
                    <button
                      key={d.value}
                      type="button"
                      onClick={() => setDeliveryType(d.value)}
                      className={`rounded-full px-5 py-2 text-sm font-medium border transition-colors ${
                        deliveryType === d.value
                          ? "bg-navy text-ivory border-navy"
                          : "bg-transparent text-navy/70 border-navy/15 hover:border-navy/40"
                      }`}
                    >
                      {d.label}
                    </button>
                  ))}
                </div>
              </div>

              <m.div
                key={`${estimate.price}-${estimate.days}`}
                initial={{ opacity: 0.6 }}
                animate={{ opacity: 1 }}
                className="mt-8 grid grid-cols-2 gap-4 rounded-2xl bg-ivory p-6"
              >
                <div>
                  <p className="text-xs font-semibold text-steel uppercase tracking-wide">
                    Estimated Delivery
                  </p>
                  <p className="text-xl font-bold text-navy mt-1">{estimate.days}</p>
                </div>
                <div>
                  <p className="text-xs font-semibold text-steel uppercase tracking-wide">
                    Estimated Price
                  </p>
                  <p className="text-xl font-bold text-amber-dark mt-1">
                    ₹{estimate.price.toLocaleString("en-IN")}
                  </p>
                </div>
                <p className="col-span-2 text-xs text-navy/40">
                  Estimated quote — final pricing confirmed after booking.
                </p>
              </m.div>

              <Button href="/quote" variant="primary" className="mt-6 w-full sm:w-auto">
                Request a Quote
              </Button>
            </div>
          </Reveal>
        </div>
      </Container>

      <style>{`
        .chowra-input {
          width: 100%;
          border-radius: 12px;
          border: 1px solid rgba(7,26,43,0.15);
          background: white;
          padding: 0.7rem 1rem;
          font-size: 0.875rem;
          color: #071A2B;
        }
        .chowra-input:focus-visible {
          outline: 2px solid #F4A62A;
          outline-offset: 1px;
        }
      `}</style>
    </section>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="block text-xs font-semibold text-steel uppercase tracking-wide mb-2">
        {label}
      </span>
      {children}
    </label>
  );
}
