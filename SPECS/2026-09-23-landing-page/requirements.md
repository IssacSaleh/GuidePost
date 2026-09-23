# Feature: GuidePost Landing Page

**Date:** 2026-09-23 (build spanned 2026-09-17 → 2026-09-23)
**Status:** Built and verified (see validation.md)
**Constitution references:** `SPECS/MISSION.md`, `SPECS/ROADMAP.md` (Stages 1–5), `SPECS/TECH.md`

---

## Goal

A single, professional-looking, static landing page that presents GuidePost — a
free, ad-free tool that gives new PC gamers a short, hand-picked list of game
guides. The page must let a visitor understand the product in 20 seconds, play
with a live mock of the game/category picker, and join the waitlist.

## Scope (what was built)

A vanilla HTML/CSS/JS landing page with **9 sections**:

1. **Navbar** — brand link + anchor links (Problem, Solution, Games, Trending, Features). No CTA in the navbar.
2. **Hero** — headline "Stuck on a new game? Here's the guide worth reading." (updated 2026-09-23 peer-test follow-up), subheadline "GuidePost gives new PC gamers a short, hand-picked list that cuts the clutter — no ads, no SEO junk.", waitlist email form, and a decorative CSS mock of the guide-list UI (Elden Ring + category pills + two fake guide cards).
3. **Problem** — two pain cards ("Ad-stuffed results", "Buried in threads").
4. **Solution** — three-step flow (Pick your game → See the good guides → Start playing).
5. **Games** — the interactive centerpiece: 5 game chips + 6 category chips (Bosses, Builds, Walkthroughs, Quests, Weapons, Tips) that filter a hand-curated `guides` array rendered as guide cards (title, game, difficulty, rating, read time). Fully keyboard-accessible; chips expose `aria-pressed`.
6. **Features** — three cards (Organized by category, Multi-game, Hand-picked/clean/calm).
7. **Trending** — "Popular guides this month." + static list rendered from JS, honestly framed as hand-curated (not live data).
8. **Social Proof** — two concept-tester quotes + an honest "side project, not a growth machine" trust line.
9. **FAQ** — three Q&As ("Isn't this just Google?", "How are guides picked?", "Is GuidePost free?").

Plus a **Final CTA section** (headline "Be first in when GuidePost launches." + a
second waitlist email form) and a **footer** (brand, secondary links, "Coming
soon" social links, copyright line).

## Out of scope (explicitly NOT built)

- The actual working tool (per-game pages, voting, link submissions).
- User accounts, logins, dashboards, payments.
- Backend APIs, databases, or any persistence. **Static frontend only.**
- Any framework (React, Vue, etc.), npm packages, or build tooling.
- No `<noscript>` fallback for the JS-rendered guide lists (known carry-over, `index.html`).

## Non-functional requirements

- **Vanilla only** per `SPECS/TECH.md` — plain HTML5, CSS3, and JavaScript.
- **Design tokens first** — all colors/fonts/spacing as CSS custom properties in `style.css`; no hardcoded hex codes in components (exception: plain `#ffffff` and rgba shadows use literals).
- **Motion budget: max 3** (TECH.md) — hero entrance fade-up, one scroll-reveal (IntersectionObserver + `stagger-in`), one button-hover microinteraction; badge pulse counted as decorative hero extra. All disabled under `prefers-reduced-motion`.
- **AA contrast** — text/background pairs meet 4.5:1 (fix added `--color-primary-deep`, `--color-primary-dark`, `--color-accent-deep`, `--color-on-accent`, deeper `--color-text-muted`).
- **Responsive** — no horizontal overflow at 360px and up; nav/footer links wrap on small screens.
- **Semantic HTML + a11y** — one `<h1>`, `sr-only` labels on email inputs, `aria-pressed` on chips, `aria-hidden` on decorative mock, keyboard-operable pickers.

## Key decisions and deviations (from the conversation/build)

- **Two waitlist forms (Hero + Final CTA)**. Original guardrail said "one CTA." **Formally lifted 2026-09-23**: one CTA *action* (waitlist) at two conversion moments; navbar stays CTA-free. Recorded in `build-lab/MISSION.md` Section 2 + decision log and `SPECS/MISSION.md` non-negotiables.
- **Categories ship 6** (Bosses, Builds, Walkthroughs, Quests, Weapons, Tips) — docs had 5; "Weapons" was added/reconciled everywhere.
- **Page sections ship 9 content sections + apologies to the older 4-section draft** — the architecture is the approved truth (`build-lab/MISSION.md` "Page Architecture").
- **Mailto waitlist** — no backend allowed per TECH.md, so submit opens a pre-filled email; address is a placeholder (`hello@guidepost.example`) — a known carry-over.
- **Trending is static/hand-curated**, explicitly not live usage data (honesty rule).

## Files

- `build-lab/index.html` — page structure and copy
- `build-lab/style.css` — design tokens + all styling
- `build-lab/script.js` — guide data, picker/filter logic, waitlist submit, scroll-reveal
- `build-lab/og-image.png` — 1200×630 social-preview image
- `build-lab/MISSION.md` — founder notebook (design system, architecture, decision log)