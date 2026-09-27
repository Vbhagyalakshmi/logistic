"use client";

import { AnimatePresence, m } from "framer-motion";
import Link from "next/link";
import { X, Package } from "lucide-react";
import { siteConfig } from "@/lib/site-config";
import { Button } from "@/components/ui/Button";
import { useEffect } from "react";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-navy/60 backdrop-blur-sm lg:hidden"
            onClick={onClose}
            aria-hidden
          />
          <m.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 34 }}
            className="fixed top-0 right-0 z-[70] h-full w-[86%] max-w-sm bg-navy text-ivory lg:hidden flex flex-col"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-ivory/10">
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-amber text-navy">
                  <Package size={16} strokeWidth={2.5} />
                </span>
                <span className="text-sm font-bold tracking-tight">
                  CHOWRA<span className="text-amber"> LOGISTICS</span>
                </span>
              </div>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="flex h-9 w-9 items-center justify-center rounded-full hover:bg-ivory/10 transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <nav className="flex flex-col gap-1 px-6 py-8" aria-label="Mobile">
              {siteConfig.nav.map((item, i) => (
                <m.div
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.05 }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block py-3 text-lg font-medium text-ivory/90 hover:text-amber transition-colors border-b border-ivory/5"
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}
            </nav>

            <div className="mt-auto px-6 pb-10 flex flex-col gap-3">
              <Button href="/tracking" variant="outline-light" onClick={onClose} className="w-full">
                Track Shipment
              </Button>
              <Button href="/quote" variant="primary" onClick={onClose} className="w-full">
                Get a Quote
              </Button>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
