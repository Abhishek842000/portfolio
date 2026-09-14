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
