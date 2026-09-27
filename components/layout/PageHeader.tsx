import { Container } from "@/components/ui/Container";
import { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative bg-navy pt-36 pb-20 lg:pt-44 lg:pb-24 overflow-hidden">
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.12]"
        viewBox="0 0 800 300"
        fill="none"
        aria-hidden="true"
        preserveAspectRatio="none"
      >
        <path
          d="M-50 260 C 150 180, 300 120, 450 150 S 700 60, 850 20"
          stroke="#F4A62A"
          strokeWidth="1.5"
          className="route-path"
        />
      </svg>
      <Container className="relative">
        {eyebrow && (
          <p className="text-xs font-semibold tracking-wide text-amber uppercase mb-4">
            {eyebrow}
          </p>
        )}
        <h1
          className="font-bold text-ivory tracking-tight leading-[1.05] max-w-2xl"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}
        >
          {title}
        </h1>
        {description && (
          <p className="mt-5 text-ivory/65 text-lg max-w-xl">{description}</p>
        )}
        {children}
      </Container>
    </section>
  );
}
