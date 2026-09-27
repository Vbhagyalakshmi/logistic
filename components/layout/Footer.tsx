import Link from "next/link";
import { Package, Twitter, Linkedin, Instagram, Facebook } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-navy text-ivory">
      <Container className="pt-16 pb-10">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber text-navy">
                <Package size={18} strokeWidth={2.5} />
              </span>
              <span className="text-[15px] font-bold tracking-tight">
                CHOWRA<span className="text-amber"> LOGISTICS</span>
              </span>
            </Link>
            <p className="text-sm font-medium text-ivory/90 mb-1">
              {siteConfig.name}
            </p>
            <p className="text-sm text-ivory/60 leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Twitter, href: siteConfig.social.twitter, label: "Twitter" },
                { icon: Linkedin, href: siteConfig.social.linkedin, label: "LinkedIn" },
                { icon: Instagram, href: siteConfig.social.instagram, label: "Instagram" },
                { icon: Facebook, href: siteConfig.social.facebook, label: "Facebook" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-ivory/15 text-ivory/70 hover:text-navy hover:bg-amber hover:border-amber transition-colors"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {siteConfig.footerColumns.map((col) => (
            <div key={col.title}>
              <h3 className="text-sm font-semibold text-ivory mb-4">{col.title}</h3>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-ivory/60 hover:text-amber transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-ivory/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ivory/50 text-center sm:text-left">
            © {year} Chowra Logistics and Couriers Limited. All rights reserved.
          </p>
          <p className="text-xs text-ivory/50">{siteConfig.contact.address}</p>
        </div>
      </Container>
    </footer>
  );
}
