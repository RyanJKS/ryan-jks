# Jhelan — Portfolio

A calm, premium one-page portfolio for a Data Platform Engineer.

Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Node 22 recommended (see `.nvmrc`). Node 20.19+ also works locally.

## Edit content

Most personal copy lives in one file:

```txt
src/data/portfolio.ts
```

Update name, links, sections, and workflow steps there.

Optional: set `NEXT_PUBLIC_SITE_URL` in `.env.local` for SEO metadata.

## Project structure

```txt
src/
  app/
  components/
    layout/
    portfolio/
    motion/
    theme/
    ui/
  data/
    portfolio.ts
  lib/
.github/workflows/   # CI
.husky/              # Git hooks
.vscode/             # Editor defaults
```

## Scripts

| Script                 | Description                       |
| ---------------------- | --------------------------------- |
| `npm run dev`          | Development server                |
| `npm run build`        | Production build                  |
| `npm run start`        | Serve production build            |
| `npm run lint`         | ESLint                            |
| `npm run lint:fix`     | ESLint with auto-fix              |
| `npm run format`       | Prettier write                    |
| `npm run format:check` | Prettier check (CI)               |
| `npm run typecheck`    | TypeScript `--noEmit`             |
| `npm run validate`     | Format + lint + typecheck + build |

## Developer setup

This repo includes tooling you'd expect on a maintained project:

- **EditorConfig** — consistent indentation and line endings
- **Prettier** — formatting (+ Tailwind class sorting)
- **ESLint** — Next.js + TypeScript rules
- **Husky + lint-staged** — pre-commit format and lint on staged files
- **Commitlint** — conventional commit messages enforced on commit
- **GitHub Actions** — CI on push/PR (`format:check`, lint, typecheck, build)
- **Dependabot** — weekly npm and Actions updates
- **VS Code settings** — format on save, ESLint fix on save

After clone:

```bash
npm install   # also runs `husky` via prepare
```

Pre-commit runs automatically. Full gate before pushing:

```bash
npm run validate
```

## Deploy

### Vercel (recommended)

1. Import the repo and set **Framework Preset** to **Next.js**.
2. Leave **Output Directory** empty (do not set `public` — that is for static sites).
3. Use **Node.js 22** (matches `.nvmrc`).
4. Set `NEXT_PUBLIC_SITE_URL` to your production URL.

If you see `No Output Directory named "public" found`, the project is misconfigured as a static site. In **Settings → Build & Deployment**, set Framework Preset to **Next.js** and clear any Output Directory override.

This repo includes `vercel.json` with explicit `npm ci` / `npm run build` commands so Vercel does not mis-detect the package manager.
