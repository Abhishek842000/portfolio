# Progress log

Newest phase at the bottom.

## Rebuild — design system from the apurvau.dev brief

Started over to match the specified visual system instead of the earlier Black Ops One / Source Sans approximation. Personal info stayed the same (WWC, Commscope, UTD, EY, UT Dallas MS, VNIT, ClaimGuard, Waypoint, email, LinkedIn, GitHub, resume PDF, headshot).

**Stack:** Next.js 16 App Router, TypeScript, Tailwind v4, Framer Motion.

**Fonts (`next/font/google`):** Silkscreen (hero name only), Playfair Display bold/italic (section and card titles), Inter (body), JetBrains Mono (tags, dates, email).

**Tokens:** `surface` `#F7F7F9`, `ink` `#111114`, `card-hover` `#F5F0DE`, accent gradient blue → purple → pink.

**Shell:** fixed network SVG (`NetworkBackground`), sticky hamburger, Contact me FAB, scroll-to-top after 400px, resume as a full-screen PDF modal.

**Single page:** Hero → Experience/Education → Projects → Publication → Skills → Let's Connect. Hamburger uses in-page anchors.

**Avatar:** `public/images/avatar.jpg` with `object-cover` in a fixed circle. Replacing that file is the only photo step.

## Phase 2 — Projects section + modal + publications

**Cards:** Playfair title (up to two lines), thin divider, JetBrains Mono tags. Framer `whileHover` interpolates the card to cream `#F5F0DE` and fades in underlined `VIEW PROJECT`. No CSS `:hover` snap. Grid is 1 column on mobile, 3 on `md+`.

**Modal:** centered over a dimmed, blurred backdrop (not a right drawer). `max-w-3xl`, `max-h: min(90vh, 840px)` — those sizes are not in the brief; they keep the video readable without covering the page. Header is title + tags + ×. Body is the summary, optional lazy demo video, then data-driven `sections[]` (ClaimGuard: Key Features + Architecture; Waypoint: Key Features + Architecture & Performance; Nflexon: Key Features + Architecture). Footer pills render only when URLs exist: purple GitHub, gold Try it out. Close via ×, backdrop, or Escape.

**Demos:** ClaimGuard and Waypoint still point at `/demos/{slug}.webm|.mp4` with architecture SVGs as posters. The video files are not in the repo yet, so the poster is what shows until they are dropped in.

**Publications:** IRJET VGG-16 DR paper (Scholar citation) and Springer ICSADL 2021 critical-temperature chapter. Google Scholar profile is linked under the section heading. Heading stays “Publication” to match the nav.

**Tested:** Playwright covers menu → Projects, tab toggle, card hover + centered modal + GitHub link + backdrop close, both papers, resume modal, email copy.

**Approximate / revisit:**
- Hero name is one Silkscreen line with clamp sizing.
- Demo `.webm`/`.mp4` files are still missing.
- Nflexon has no Try-it URL (no live demo).
- Contact form is not on the homepage. `/api/contact` remains for later.

## Phase 3 — Publications section

**Card:** white, rounded, drop shadow, 6px CSS `linear-gradient(90deg, blue → purple → pink)` bar on the top edge (plain CSS, not a Tailwind utility, so Safari/Firefox clip the same). Type is a small lavender pill (`JOURNAL PAPER` / `CONFERENCE PAPER`) with the year beside it. Title is Playfair bold, styled as an external link in scholarly blue `#2563eb`. Lead sentence is bold; the longer abstract sits under it in muted body text. Right column is `PUBLISHED IN` (Playfair italic), `PUBLISHER`, and `AUTHORS` as a vertical list with `Abhishek Deshpande` bolded. Bottom-left black pill is `READ ON [PUBLISHER]` plus an external-link icon.

**Data:** `publications.ts` is still a typed array. Two real papers: IRJET VGG-16 DR (PDF on irjet.net) and Springer ICSADL 2021 critical-temperature chapter. Adding another paper is another object in that array; the section maps the list.

**Tested:** Playwright checks both titles, both publisher pills, both hrefs, the lead sentence, own name on each card, and that the accent bar’s computed `background-image` is a `linear-gradient`. Browser: desktop and mobile viewports on `/#publication`.

## Phase 4 — Technical Skills section

**Columns:** three categories side by side (`Programming & Data`, `Machine Learning & AI`, `Backend & DevOps`), stacked on mobile. Headings are Playfair small-caps with a short underline. Each column maps `skills.ts` — adding a skill is another object with `name`, `logo`, and `brandColor`.

**Cards:** white rounded squares with the existing brand SVGs/PNGs (not a new icon library). Resting state is grayscale + the default line border. Hover/focus paints a brand-colored border and glow (`--brand` from `brandColor`) and restores the icon color. Python `#3776AB`, Docker `#2496ED`, etc.

**Motion:** each column fades/slides in on scroll with a 140ms offset; icons inside a column stagger at 55ms so the grid does not pop in as one block.

**Tested:** Playwright checks the three headings, sample labels, default gray border, and that Python vs Docker hover to different brand border colors. Browser: hover several icons, desktop 3-column and mobile stack, scroll-in stagger.

## Phase 5 — Contact / footer + resume modal

**Connect:** `LET'S CONNECT` heading, short invite line, black `COPY TO CLIPBOARD` pill above the email field. The field is a white pill with JetBrains Mono uppercase email (`ABHISHEKDESHPANDE222@GMAIL . COM`) and a copy-icon button that shares the same clipboard write + “Copied” / check confirmation. Circular socials: LinkedIn, GitHub, Email (`mailto:`). Copyright line at the bottom.

**Resume:** hero `MY RESUME →` still opens `ResumeUi` / `ResumeModal`. The overlay is full-screen white (hamburger stays above it). Header is `RESUME` left, black `DOWNLOAD` pill + × right. Body is a native `<iframe>` of `/resume.pdf` so Chrome’s PDF toolbar/thumbnails show, matching the reference without adding react-pdf.

**Tested:** Playwright opens the modal from the hero, checks Download → `/resume.pdf`, the iframe src, and close. Copy-to-clipboard still reports Copied; LinkedIn, GitHub, and mailto hrefs are asserted. Browser: copy confirmation, social hits, open/download/close resume on desktop and mobile.

## Phase 6 — Nav, responsive, Lighthouse, SEO, deploy

**Nav:** hamburger still top-left; the panel slides in from the left over a blurred overlay. Links: Home, Experience, Education, Projects, Publications, Skills, Contact. Clicking a link smooth-scrolls, closes the panel, and restores focus. Escape and backdrop click also close. Education is the experience tab with hash `#education` so the menu can open that timeline directly. Section heading stays “Publication” (reference); the menu label is “Publications”.

**Responsive:** hero name can wrap on narrow widths; role line tracking tightens; timeline cards stack with year above the card; project cards are one column with `VIEW PROJECT` always visible under `md`; skill categories stack with a slightly smaller icon; connect keeps the email on one line and extra bottom padding so the copyright is not under the FAB.

**Perf / SEO:** network pattern is `public/images/network-pattern.svg` tiled in CSS (one asset, no SVG DOM). Avatar is `next/image` `fill` + `object-cover` in a fixed circle, `preload` for LCP. Silkscreen/Playfair use `display: optional` + fallback metrics; JetBrains Mono is not preloaded. Homepage + 404 use `buildMetadata`; `sitemap.xml`, `robots.txt`, `icon`, and `opengraph-image` are App Router files.

**Lighthouse** (production `next start`, 2026-09-14): mobile 90 / 100 / 100 (perf / a11y / SEO), desktop 100 / 100 / 100. Unselected Experience/Education tab text is `zinc-600` instead of the reference’s paler gray so contrast passes.

**Tested:** Playwright — full menu list, Education hash → MSIT heading, existing section tests, `/sitemap.xml` and `/robots.txt`. Browser — mobile hero, menu, education, stacked projects, skills, connect; deployed preview matches local.

**Deploy:** CLI is logged out here, so this is an anonymous preview that expires in ~60 minutes: https://temporary-racing-zephyr-zd26be0.vercel.app — claim it at https://vercel.com/claim-deployment?code=54e3ad51-3f61-45a0-81b3-e34220a04006 then attach a custom domain and set `NEXT_PUBLIC_SITE_URL`. Until that env is set, sitemap/robots still fall back to the build host.

**Approximate / revisit:**
- Demo videos still missing.
- Unselected tab color is a bit darker than the reference for WCAG.
- Custom domain is waiting on Vercel login + DNS.
