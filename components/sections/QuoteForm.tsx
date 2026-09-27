"use client";

import { FormEvent, useState } from "react";
import { m } from "framer-motion";
import { Loader2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { CitySelect } from "@/components/ui/CitySelect";

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
];

export function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setError(null);

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok) {
        setError(json.error ?? "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }
      setStatus("success");
      form.reset();
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <Reveal className="rounded-card bg-white shadow-card p-10 text-center max-w-lg mx-auto">
        <m.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-amber/15 text-amber-dark mb-5"
        >
          <CheckCircle2 size={26} />
        </m.div>
        <h2 className="text-xl font-bold text-navy">Quote request received</h2>
        <p className="mt-3 text-navy/60">
          Thanks for reaching out. Our team will get back to you shortly with
          an estimated quote for your shipment.
        </p>
      </Reveal>
    );
  }

  return (
    <Reveal className="rounded-card bg-white shadow-card p-8 lg:p-10 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
        <Field label="Full Name">
          <input name="name" required className="chowra-input" placeholder="Your name" />
        </Field>
        <Field label="Email">
          <input
            type="email"
            name="email"
            required
            className="chowra-input"
            placeholder="you@example.com"
          />
        </Field>
        <Field label="Phone">
          <input name="phone" required className="chowra-input" placeholder="+91 00000 00000" />
        </Field>
        <Field label="Package Type">
          <select name="packageType" defaultValue="parcel" className="chowra-input">
            {packageTypes.map((p) => (
              <option key={p.value} value={p.value}>
                {p.label}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Pickup City">
          <CitySelect name="pickup" />
        </Field>
        <Field label="Delivery City">
          <CitySelect name="destination" />
        </Field>
        <Field label="Weight (kg)">
          <input name="weight" required className="chowra-input" placeholder="e.g. 2" />
        </Field>
        <Field label="Delivery Speed">
          <select name="deliveryType" defaultValue="standard" className="chowra-input">
            {deliveryTypes.map((d) => (
              <option key={d.value} value={d.value}>
                {d.label}
              </option>
            ))}
          </select>
        </Field>
        <div className="sm:col-span-2">
          <Field label="Message (optional)">
            <textarea
              name="message"
              rows={4}
              className="chowra-input"
              placeholder="Anything else we should know about this shipment?"
            />
          </Field>
        </div>

        {error && (
          <p role="alert" className="sm:col-span-2 text-sm text-red-600">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-full bg-amber px-6 py-3.5 text-sm font-semibold text-navy transition-colors hover:bg-amber-dark disabled:opacity-60"
        >
          {status === "loading" && <Loader2 size={16} className="animate-spin" />}
          Request a Quote
        </button>
      </form>

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
    </Reveal>
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
