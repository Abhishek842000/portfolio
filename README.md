# Abhishek Deshpande — portfolio

Single-page personal site modeled on the visual language of apurvau.dev: pixel display name, Playfair headings, cream project hover, and a fixed network background.

## Stack

Next.js 16 (App Router) + TypeScript + Tailwind v4 + Framer Motion. Content lives in typed files under `src/content/`. The only server endpoint is `POST /api/contact`. No database, CMS, or auth.

## Content

- `src/content/site-config.ts` — name, roles, email, socials, avatar path
- `src/content/experience.ts` / `education.ts`
- `src/content/projects.ts` — ClaimGuard, Waypoint, and Nflexon
- `src/content/publications.ts` — IRJET and Springer papers; add another object to the array for a new card
- `src/content/skills.ts`

Swap the photo by replacing `public/images/avatar.jpg`. Swap the PDF by replacing `public/resume.pdf`.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3012.

```bash
npm run build
npm run test:e2e
```

## Deploy

Vercel, default Next.js settings.

1. `npx vercel login` then `npx vercel --prod`, or import `https://github.com/Abhishek842000/portfolio` in the Vercel dashboard.
2. Set `NEXT_PUBLIC_SITE_URL` to the canonical origin (no trailing slash), e.g. `https://your-domain.com`. That value is used for Open Graph, `sitemap.xml`, and `robots.txt`.
3. Custom domain: Project → Settings → Domains. Point the DNS A/CNAME records Vercel shows, then wait for HTTPS.

`/robots.txt` and `/sitemap.xml` are generated from `src/app/robots.ts` and `src/app/sitemap.ts`. The homepage and 404 route both export Open Graph + Twitter metadata; `/opengraph-image` is the share card.
