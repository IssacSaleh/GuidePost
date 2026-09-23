# Validation: GuidePost Landing Page

**Folder:** `SPECS/2026-09-23-landing-page/`
**Status:** Passed — see evidence below.

## How to know the feature is complete

1. The page loads at the public URL with no console/page errors.
2. Every section of the approved Page Architecture renders with approved copy (Hero now reads "Stuck on a new game? Here's the guide worth reading." / "GuidePost gives new PC gamers a short, hand-picked list that cuts the clutter — no ads, no SEO junk.").
3. The Games picker filters guide cards correctly; chips announce their state via `aria-pressed`; everything works by keyboard.
4. The waitlist submit shows the in-form success note and opens a pre-filled email (no JS errors).
5. No horizontal overflow at 360px–1440px; all checked text/background pairs meet WCAG AA (≥ 4.5:1).
6. Motion budget ≤ 3 and fully disabled under `prefers-reduced-motion`.
7. Docs (MISSION.md, SPECS/ constitution, this feature spec) are in sync with the shipped build.

## Evidence (2026-09-23, real-browser Playwright against the live server)

- **Load:** server bound to `0.0.0.0:3000`, `curl http://localhost:3000/` → **200**; public URL
  `https://adamsleep-colacanyon-3000.codio.io/` responds.
- **Errors:** **0 console errors / 0 pageerrors** in the full launch review and the post-polish re-run.
- **Contrast:** all 13 audited text/background pairs **≥ 4.5:1** (worst nav-hover 4.91, best 5.98).
- **Overflow:** **none** at 360 / 390 / 768 / 1024 / 1440 px
  (pre-fix: 481px scrollWidth vs 360px viewport — since fixed by `flex-wrap`).
- **Chips:** 11 chips (`aria-pressed="false"` initially) toggle to `"true"` on click and back off on re-click; filter logic returns correct guides.
- **Keyboard:** chips are native `<button>`s, reachable/toggleable via keyboard (verified result = 2 Terraria guides with no category filter).
- **Reduced motion:** with `prefers-reduced-motion: reduce`, **0 animated elements** run.
- **Semantics:** exactly **one `<h1>`**; `sr-only` labels on both email inputs.
- **Meta/fonts:** OG + Twitter tags present, `rel=canonical` present, `og-image.png` serves **200**, Google Fonts load.
- **Structure:** CSS braces balanced; `script.js` parses cleanly.

## Regression fixes captured (proven before → after)

- **Critical — waitlist submit:** success note sat *outside* its form → JS threw PAGEERROR and the note never showed. **Fixed:** note now lives inside the form; verify submit clears the error and reveals the note.
- **Important — mobile overflow:** `.nav-links` (401px wide) and footer links overflowed at 360/390px. **Fixed:** `flex-wrap: wrap` + centered alignment.
- **Important — contrast & a11y:** buttons/links below AA on cream; chips gave no state. **Fixed:** deep-token AA palette + `aria-pressed`.
- **Conversions checked:** both Hero and Final CTA forms navigate/clear correctly (2 forms is the approved pattern per the lifted guardrail).

## Known carry-overs (explicitly not fixed, documented)

- Waitlist `mailto:` points to placeholder `hello@guidepost.example`.
- No `<noscript>` fallback if JS is disabled.
- Footer social links are `href="#"` "Coming soon" placeholders.
- Trending copy is hand-curated (honest — not live data).

## Docs sync check

- `build-lab/MISSION.md` — design system, Page Architecture, decision log, Section 8 checklist ✅
- `SPECS/MISSION.md`, `SPECS/ROADMAP.md`, `SPECS/TECH.md` — constitution updated (guardrail lift, stages 1–5 checked, file structure incl. `og-image.png`) ✅
- This folder — requirements / plan / validation ✅
- **Not yet done (Stage 6):** peer human test, Git commit, deployment to a real host.