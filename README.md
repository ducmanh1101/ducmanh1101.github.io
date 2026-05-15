# Web3 Portfolio

High-end Web3 developer portfolio — Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion, React Three Fiber.

## Stack

- **Next.js 14** — App Router
- **TypeScript** — strict
- **Tailwind CSS** — design tokens, glassmorphism utilities
- **Framer Motion** — section reveals, card tilt, micro-interactions
- **@react-three/fiber + drei** — 3D network sphere hero scene
- **lucide-react** — icons

## Getting started

```bash
npm install
npm run dev
```

App runs at [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
  layout.tsx        # Metadata, fonts, OG tags
  page.tsx          # Page composition
  globals.css       # Tailwind + design utilities
components/
  Navbar.tsx
  Footer.tsx
  sections/         # Hero, Skills, Projects, Experience, Contact
  ui/               # Container, Section, Card, Button, Badge, ExternalLink, WalletPill
  three/HeroScene.tsx
lib/
  data.ts           # All mock content — single source of truth
  utils.ts          # cn() + shortenAddress()
```

## Editing content

All copy lives in [lib/data.ts](lib/data.ts) — profile, skills, projects, experience, contact links, stats. Update once and the entire site reflects the change.

## Deploy

Optimized for [Vercel](https://vercel.com). Push to GitHub and import the repo — no extra config needed.
