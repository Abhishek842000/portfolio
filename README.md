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

1. Import `https://github.com/Abhishek842000/portfolio` in the Vercel dashboard (or `npx vercel login` then `npx vercel --prod`).
2. Set `NEXT_PUBLIC_SITE_URL` to `https://abhishekdeshpande.dev`.
3. Add `abhishekdeshpande.dev` under Project → Settings → Domains. In Cloudflare DNS (grey-cloud / DNS only):
   - `A` `@` → `76.76.21.21`
   - `CNAME` `www` → `cname.vercel-dns.com` (or the target Vercel displays)

`/robots.txt` and `/sitemap.xml` are generated from `src/app/robots.ts` and `src/app/sitemap.ts`. The homepage and 404 route both export Open Graph + Twitter metadata; `/opengraph-image` is the share card.
