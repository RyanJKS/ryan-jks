# Jhelan — Portfolio

A calm, premium one-page portfolio for a Data Platform Engineer / Platform & AI Enablement Engineer.

Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Edit content

Most personal copy lives in one file:

```txt
src/data/portfolio.ts
```

Update name, links, projects, principles, stack, and section copy there.

Replace placeholder contact links:

- `links.github`
- `links.linkedin`
- `links.email`

Optional: set `NEXT_PUBLIC_SITE_URL` in `.env.local` for SEO metadata.

## Project structure

```txt
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    layout/
    portfolio/
    ui/
  data/
    portfolio.ts
  lib/
    utils.ts
    motion.ts
```

## Scripts

- `npm run dev` — development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Deploy

Works on Vercel, Netlify, or any Node host that supports Next.js App Router.
