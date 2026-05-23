# Jhelan Suggun Portfolio

A polished, static-first Next.js portfolio for Jhelan Suggun, focused on enterprise data platforms, AI enablement, cloud architecture, clean backend systems, identity, governance, and first-principles engineering.

## Local Setup

Install dependencies:

```bash
bun install
```

Run the development server:

```bash
bun run dev
```

Open `http://localhost:3000`.

Build for production:

```bash
bun run build
```

Start the production build locally:

```bash
bun run start
```

The `package.json` also includes standard npm-compatible scripts:

```bash
npm run dev
npm run build
npm run start
npm run lint
```

## Content Editing

Most public copy lives in `content/`:

- `content/profile.ts` for identity, links, hero, SEO, and current focus.
- `content/capabilities.ts` for skill groups.
- `content/work.ts` for case studies and work detail routes.
- `content/writing.ts` for article placeholders.

## Vercel Deployment

1. Push this repository to GitHub.
2. Import the repo into Vercel.
3. Use the default Next.js framework preset.
4. Keep the build command as `npm run build` or `bun run build`.
5. Add the final production domain to `NEXT_PUBLIC_SITE_URL` if desired.

No server-only secrets or databases are required for this first version.

## Replace Before Publishing

- LinkedIn URL in `content/profile.ts`.
- GitHub URL in `content/profile.ts`.
- Canonical domain in `content/profile.ts` or `NEXT_PUBLIC_SITE_URL`.
- CV file and link if a downloadable CV should be added.
- Profile image if desired.
- Real public project links when available.
