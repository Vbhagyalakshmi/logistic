"use client";

import { useState, FormEvent } from "react";
import { AnimatePresence, m } from "framer-motion";
import { Search, CheckCircle2, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { trackingStages } from "@/lib/utils";

type Result = {
  trackingNumber: string;
  status: string;
  origin: string;
  destination: string;
  estimatedDelivery: string | null;
};

export function Tracking({ showHeading = true }: { showHeading?: boolean }) {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<Result | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setResult(null);
    if (!value.trim()) return;
    setLoading(true);
    try {
      const res = await fetch("/api/tracking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ trackingNumber: value.trim() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error ?? "Could not find that shipment.");
      } else {
        setResult(data.shipment);
      }
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const activeIndex = result ? trackingStages.indexOf(result.status as any) : -1;

  return (
    <section id="tracking" className="py-24 lg:py-32 bg-ivory">
      <Container>
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
          <Reveal>
            {showHeading && (
              <>
                <h2
                  className="font-bold text-navy tracking-tight leading-tight"
                  style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)" }}
                >
                  Track your shipment
                </h2>
                <p className="mt-4 text-navy/60 text-lg max-w-md">
                  Know where your shipment is, from pickup to delivery.
                </p>
              </>
            )}

            <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg">
              <div className="relative flex-1">
                <Search
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-navy/40"
                />
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  type="text"
                  placeholder="Enter tracking number (e.g. CHW-20481)"
                  aria-label="Enter tracking number"
                  className="w-full rounded-full border border-navy/15 bg-white pl-11 pr-4 py-3.5 text-sm text-navy placeholder:text-navy/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-amber-dark disabled:opacity-60"
              >
                {loading ? <Loader2 size={16} className="animate-spin" /> : null}
                Track Shipment
              </button>
            </form>

            {error && (
              <p role="alert" className="mt-4 text-sm text-red-600">
                {error}
              </p>
            )}
            <p className="mt-4 text-xs text-navy/40">
              Try the sample tracking number: <span className="font-medium text-navy/60">CHW-20481</span>
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-card bg-white shadow-card p-8 lg:p-10 min-h-[340px]">
              <AnimatePresence mode="wait">
                {result ? (
                  <m.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <p className="text-xs font-semibold text-steel uppercase tracking-wide">
                          Tracking Number
                        </p>
                        <p className="text-lg font-bold text-navy">{result.trackingNumber}</p>
                      </div>
                      {result.estimatedDelivery && (
                        <div className="text-right">
                          <p className="text-xs font-semibold text-steel uppercase tracking-wide">
                            ETA
                          </p>
                          <p className="text-lg font-bold text-amber-dark">
                            {result.estimatedDelivery}
                          </p>
                        </div>
                      )}
                    </div>

                    <ol className="space-y-0">
                      {trackingStages.map((stage, i) => {
                        const done = i <= activeIndex;
                        const isLast = i === trackingStages.length - 1;
                        return (
                          <li key={stage} className="flex gap-4">
                            <div className="flex flex-col items-center">
                              <m.span
                                initial={{ scale: 0.7, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: i * 0.12 }}
                                className={`flex h-7 w-7 items-center justify-center rounded-full ${
                                  done ? "bg-navy text-amber" : "bg-ivory border border-navy/15 text-transparent"
                                }`}
                              >
                                <CheckCircle2 size={15} />
                              </m.span>
                              {!isLast && (
                                <span
                                  className={`w-px flex-1 min-h-[28px] ${
                                    i < activeIndex ? "bg-navy" : "bg-navy/15"
                                  }`}
                                />
                              )}
                            </div>
                            <div className="pb-8">
                              <p
                                className={`text-sm font-semibold ${
                                  done ? "text-navy" : "text-navy/35"
                                }`}
                              >
                                {stage}
                              </p>
                              {i === activeIndex && (
                                <p className="text-xs text-steel mt-0.5">Current status</p>
                              )}
                            </div>
                          </li>
                        );
                      })}
                    </ol>
                  </m.div>
                ) : (
                  <m.div
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex h-full min-h-[280px] flex-col items-center justify-center text-center"
                  >
                    <div className="h-12 w-12 rounded-full bg-ivory flex items-center justify-center mb-4">
                      <Search size={20} className="text-navy/30" />
                    </div>
                    <p className="text-sm text-navy/50 max-w-xs">
                      Enter a tracking number to see live shipment status and delivery
                      progress.
                    </p>
                  </m.div>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
