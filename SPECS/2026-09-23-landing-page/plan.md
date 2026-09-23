# Plan: GuidePost Landing Page

**Folder:** `SPECS/2026-09-23-landing-page/`
**Status:** Complete — all task groups done and verified.
**TDD note:** this is a frontend-only static page; there is no test runner in the
repo. Validation was performed with real-browser Playwright checks (see
`validation.md`) in addition to manual QA.

---

## Task Group 0 — Planning & foundation

- [x] Pin target user, problem, solution, value prop in `build-lab/MISSION.md` (Stages 1–2).
- [x] Choose brand personality (Friendly · Calm · Playful), palette (Cloud Mint), typography (Quicksand + Nunito), UI rules (Stage 3).
- [x] Draft and approve the page architecture/outline (Stage 4).
- [x] Define design tokens in `style.css` before any component CSS.

## Task Group 1 — Base shell + design tokens

- [x] `index.html` semantic shell: `<header>`, `<main>`, `<section>`s, `<footer>`, meta viewport, favicon.
- [x] Google Fonts (Quicksand 600/700, Nunito 400/600/700) with `preconnect`.
- [x] Token block in `style.css`: background, surface, primary, primary-deep, primary-dark, secondary, accent, accent-deep, on-accent, text, text-muted, radii, spacing, fonts.
- [x] Shared primitives: `.container`, `.section`, `.section-head`, `.btn`, `.chip`, `.sr-only`.

## Task Group 2 — Navbar and Hero

- [x] Sticky/normal navbar: brand + anchor links, no CTA, wraps on mobile.
- [x] Hero: `h1`, subheadline, waitlist form (email + pill button), success note.
- [x] Decorative hero mock (CSS "app window": game title, category pills, featured + plain guide cards).
- [x] Hero entrance animation (`fade-up`, staggered h1 → sub → form → mock) honoring reduced motion.

## Task Group 3 — Content sections

- [x] Problem section (2 pain cards).
- [x] Solution section (3-step flow with arrows).
- [x] Games section: game chips, category chips, picker hint, guide-list container.
- [x] Features section (3 cards).
- [x] Trending section (JS-only static guide list).
- [x] Social Proof (2 testimonials + trust line).
- [x] FAQ (3 items).
- [x] Final CTA section (second waitlist form) + footer (brand, links, social placeholders).

## Task Group 4 — Interactivity & motion (professional component)

- [x] `guides` data array in `script.js` (5+ games × 6 categories, curated links fields).
- [x] Game/category filter logic with "showing across all games" fallback; keyboard-accessibly via native `<button>`.
- [x] Waitlist submit handler — prevent default, reveal success note, `mailto:` open; note lives **inside** its form (fixes JS errors).
- [x] Scroll reveal via `IntersectionObserver` + `stagger-in` keyframes (once-only, reduced-motion-aware).
- [x] Button hover lift + scale microinteraction.
- [x] Badge pulse (decorative, folded into hero budget) with the `body`-prefixed reduced-motion override winning the cascade.

## Task Group 5 — Quality audit, launch fixes & polish

- [x] Run the 5-Point Quality Audit (playwright real-browser).
- [x] Fix Critical: waitlist success note moved inside its form (no PAGEERROR on submit).
- [x] Fix Important: nav/footer link wrapping (kills horizontal scroll at 360/390px); AA-safe deep tokens; `aria-pressed` on all chips.
- [x] Polish: OG/Twitter meta + canonical; "through" typo; honest trending copy; doc/build reconciliation (Weapons category, Games/Trending/FAQ sections in architecture); `textContent` for titles; `.cta` class rename cleanup; `--color-on-accent` token; `og-image.png` (1200×630).
- [x] Guardrail decision: formally lifted "one CTA" to allow Hero + Final CTA forms; spec/notebook/constitution updated in sync.
- [x] Final live check: page serves 200, zero console errors, no overflow to 360px, contrast ≥ 4.5:1, single `<h1>`, keyboard + reduced-motion verified.

## Task Group 6 — Checks to run

- [x] CSS brace balance + JS syntax (no build step; targets `index.html`/`style.css`/`script.js` directly).
- [x] Playwright checks in `/tmp/opencode/verify/`: console errors, overflow at 360/390/768/1024/1440, contrast, `aria-pressed` toggles, keyboard selection, reduced-motion, single `<h1>`, fonts load, `og-image.png` 200.
- [ ] Peer 1-Minute Human Test (Stage 6 — **not done**, deferred).
- [ ] Git commit + deploy to GitHub Pages/Vercel/Netlify (Stage 6 — **not done**, deferred).

## Future (explicitly deferred, not part of this feature)

- Real waitlist backend to replace the `mailto:` placeholder.
- `<noscript>` fallback for JS-rendered lists.
- Live social links replacing "Coming soon" placeholders.