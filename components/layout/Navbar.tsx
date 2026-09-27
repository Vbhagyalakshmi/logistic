"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Package, Menu } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-navy/95",
          scrolled
            ? "py-2 backdrop-blur-md bg-navy/90 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.5)]"
            : "py-4"
        )}
      >
        <Container className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2.5 text-ivory group"
            aria-label={siteConfig.name}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber text-navy transition-transform group-hover:scale-105">
              <Package size={18} strokeWidth={2.5} />
            </span>
            <span className="text-[15px] font-bold tracking-tight leading-none">
              CHOWRA<span className="text-amber"> LOGISTICS</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden lg:flex items-center gap-8">
            {siteConfig.nav.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium text-ivory/80 hover:text-ivory transition-colors py-1",
                    "after:absolute after:left-0 after:-bottom-0.5 after:h-[1.5px] after:bg-amber after:transition-all after:duration-300",
                    active ? "text-ivory after:w-full" : "after:w-0 hover:after:w-full"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Button href="/tracking" variant="outline-light" className="px-5 py-2.5 text-sm">
              Track Shipment
            </Button>
            <Button href="/quote" variant="primary" className="px-5 py-2.5 text-sm">
              Get a Quote
            </Button>
          </div>

          <button
            onClick={() => setOpen(true)}
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-full text-ivory hover:bg-ivory/10 transition-colors"
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </Container>
      </header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}
