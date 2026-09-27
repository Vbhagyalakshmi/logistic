# Chowra Logistics and Couriers Limited — Website

A production-ready Next.js (App Router + TypeScript) website for Chowra
Logistics and Couriers Limited: courier, express, freight, e-commerce and
corporate logistics services, with shipment tracking, a quote calculator,
and PostgreSQL-backed data persistence via Drizzle ORM.

## Stack

- Next.js 14 (App Router), TypeScript, React 18
- Tailwind CSS
- Framer Motion (with reduced-motion support)
- PostgreSQL + Drizzle ORM
- Zod validation on every API route
- lucide-react icons

## Getting started

This project was authored offline and has **not** had `npm install` run
against it yet — do that first:

```bash
npm install
```

Then copy the environment template and fill in your own database URL:

```bash
cp .env.example .env.local
```

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:5432/chowra
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

The site runs and looks complete **without** a database configured — the
tracking API falls back to a deterministic demo response, and the
quote/contact API routes simply skip the insert step. Once `DATABASE_URL`
is set, push the schema:

```bash
npm run db:push
```

Then start the dev server:

```bash
npm run dev
```

Visit `http://localhost:3000`.

## Project structure

See the `app/`, `components/` and `lib/` directories:

- `app/` — routes (App Router), API routes under `app/api/*`
- `components/layout` — Navbar, Footer, MobileMenu, PageHeader
- `components/hero` — Hero, ShipmentCard, RouteAnimation, FloatingGlobe
- `components/sections` — Tracking, Services, Coverage, WhyChowra,
  QuoteCalculator, Partners, CTA, and the service/quote/contact form
  components
- `components/ui` — Button, Card, Badge, Container
- `components/motion` — FadeIn, Reveal, Parallax, Floating (Framer Motion
  wrappers, all reduced-motion aware)
- `lib/site-config.ts` — all copy, nav, services and contact details live
  here so content isn't scattered through components
- `lib/schema.ts` / `lib/db.ts` — Drizzle ORM schema and connection
- `lib/validations.ts` — Zod schemas shared by the API routes

## Images

`public/images/**` currently contains generated placeholder artwork in
the brand palette (navy / amber / ivory) so every page renders correctly
out of the box. Swap these for real photography before launch — the
`next/image` `src` paths are centralised in each component (search for
`imageMap` in `components/sections/Services.tsx`,
`components/sections/ServiceDetail.tsx`, and the `Hero.tsx` /
`Parallax.tsx` `src` props).

## Notes

- No database credentials are ever sent to the browser — `lib/db.ts` is
  marked `server-only` and imported dynamically inside API routes only.
- Sample tracking number for testing: `CHW-20481`.
- All pricing shown by the quote calculator is explicitly labelled as an
  estimate, not official pricing.
