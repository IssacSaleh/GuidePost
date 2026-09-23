# Founder Notebook

Welcome to your Founder Notebook. This is the single source of truth for your startup project. As founder and lead decision-maker, use this file to define your concept, guide OpenCode, and track every important decision.

---

## 1. Vision & Problem Discovery

*The foundation: Knowledge → Problem → Solution → Value → Product*

- **Domain / Industry:** Gaming — player help and game guides
- **Target Audience (Who is this for?):** Casual PC gamers who just started a game — a brand-new release or an older game they picked up late — and want to know which guides are actually worth reading before they sink hours in.
- **The Core Problem (What pain point are you solving?):** Guides are scattered across dozens of sites. A new player can't tell which pages are worth visiting, so they waste time on outdated, ad-heavy, or misleading guides. For a brand-new game the mess is even worse.
- **Proposed Solution:** A simple, free web tool for PC games. Search any game, then pick a category — **Bosses, Builds, Walkthroughs, Quests, Weapons, or Tips** — and find a short, hand-picked list of guide links. Multi-game by design; a few seeded games at launch, Elden Ring as the worked example. No ads, no SEO clutter — just the guides that actually work.
- **Value Proposition (Why choose this over existing alternatives?):** Google ranks by SEO, so ad-stuffed sites win; Reddit buries good answers inside threads. We offer a short, clean list per game. Players see guides picked by someone who actually finished the game — "Need a guide? Skip the junk." The tool stays free, built for community impact, not profit.

---

## 2. Founder Decision

*The official statement of direction. This is what we are building and why. Passed the 5-Point Filter (User, Problem, Value, Feasibility, Clarity) on 2026-09-17.*

### Direction

We are building a simple, free web tool for casual PC gamers who just started a game. Search any PC game, pick a category — **Bosses, Builds, Walkthroughs, Quests, Weapons, Tips** — and get a short set of trusted guide links. Designed multi-game from the start, seeded with a few games (Elden Ring as the worked example). "Need a guide? Skip the junk."

### Why this wins the 5-Point Filter

- **User:** Casual PC gamers starting a new game — new releases and older games alike. Specific and reachable.
- **Problem:** Guides are scattered across dozens of sites; new players can't tell which pages are worth their time (outdated, ad-heavy, misleading).
- **Value:** Cuts through the noise. Pick a game → a short list of guides that actually work → start playing. Google ranks by ads and SEO; Reddit buries answers in threads. We don't.
- **Feasibility:** This stage's deliverable is a static landing page (no backend, no frameworks). The tool is simple later: one page per game, hand-picked links, optional "did this help?" votes, simple SQLite storage.
- **Clarity:** Explainable in 20 seconds. One sentence, one job, no jargon.

### What we commit to

- Free forever. Community impact over profit.
- Built and honestly framed as a side project, not a startup racing for growth.
- Start small: a few seeded games, then expand.
- Landing page first — that is this stage's deliverable.

### Non-negotiable guardrails

- One primary CTA type (waitlist signup), repeated deliberately where it converts: Hero + Final CTA. Navbar stays CTA-free. *(Guardrail formally lifted 2026-09-23 — see Section 6 note and Decision Log.)*
- Every design choice traces back to the brand personality words (chosen in Stage 3).
- No ranking algorithm in v1 — curated picks are the ranking.
- No community features before the site is useful alone — seed lists first, votes later.
- No personalization in v1 — revisit only if real users ask for it.

---

## 3. MVP + Product Spec

*What the product does, defined in the simplest possible terms. We are building the landing page first, which presents this product idea.*

### Product in one sentence

> We help casual PC gamers who just started a game and face ad-heavy, scattered guides by providing a searchable tool where each PC game has short, hand-picked guides organized by category (Bosses, Builds, Walkthroughs, Quests, Weapons, Tips), helping them skip the junk and find exactly what they need faster.

### 20-Second Simplicity Check

A new player searches their game → picks a category (e.g. Bosses) → sees a short list of good guides → clicks one and gets unstuck. Even before anyone else helps, the lists are already useful. ✅

### What the tool would do (context for the landing page)

- **Search games:** pick any game you're starting.
- **Categories:** each game's guides are organized into Bosses, Builds, Walkthroughs, Quests, Weapons, and Tips.
- **Short, hand-picked lists:** every category shows a handful of guides that actually work.
- **Multi-game by design:** the structure supports any PC game; a few are seeded at launch (Elden Ring as the worked example).
- **Clean and calm:** a short curated list, not hundreds of auto-generated pages.
- **Optional "did this help?" signal:** later, players can vote; it feeds back into the list without ever being required.

### MVP scope for the actual tool (future, not built now)

- Start with a few seed games — the structure supports many later.
- Search + categories (Bosses, Builds, Walkthroughs, Quests, Weapons, Tips) with curated links.
- No community features until the site is useful alone — votes come after the lists.
- Free to use. No user accounts, no payments, no login needed to read.

---

## 4. Landing Page Spec (what we actually build)

*This stage's deliverable is a landing page that presents the idea. The real tool comes later.*

### User stories (visitors to the landing page)

- As a new player, I can understand what the product does in 20 seconds or less.
- As a casual PC gamer, I can see why this is different from Google (ads/SEO) and Reddit (threads).
- As a curious visitor, I know how to take one clear next step (join the waitlist — offered at the Hero and the final CTA).
- As someone who wants the tool, I can leave my contact to hear when it launches.

### In scope

- A hero section: product name, one-line pitch, one clear CTA.
- A "problem" section: guide searches are full of ads and SEO junk.
- A "solution" section: pick a game → a short list of guides that actually work → start playing.
- A "how it works" section: simple steps showing the curated-list idea.
- Visual design (colors, fonts, motion) that fits the brand personality.
- One primary Call to Action type (waitlist signup) at the Hero, plus a final closing CTA — see Section 6.

### Out of scope (for this stage)

- ❌ The actual working tool: game pages, voting, link submissions.
- ❌ User accounts, logins, dashboards.
- ❌ Payment processing.
- ❌ Backend APIs or databases — static frontend only.
- ❌ React, Vue, or any JavaScript framework.

---

## 5. Brand Identity & Design System

*Define the visual and emotional tone before generating code or copy.*

- **Company / Product Name:** **GuidePost**
- **Tagline (draft):** *"Need a guide? Skip the junk."*
- **Brand Personality / Tone of Voice (e.g., Playful, Minimalist, Bold, Professional):** **Friendly · Calm · Playful**
- **Color Palette ("Cloud Mint"):**
  - Primary: `#2A9D8F` (soft teal — accents, borders, highlights)
  - Primary deep: `#1F7A6F` (deeper teal — buttons & links on light backgrounds; AA-safe text)
  - Primary dark: `#1E6F64` (teal on hover)
  - Secondary: `#8EC9A7` (light sage — subtle accents, backgrounds)
  - Accent: `#F4A261` (sunny coral — playful pops, badges, small highlights)
  - Accent deep: `#A8560F` (deep coral — small text on light backgrounds; AA-safe)
  - On-accent: `#3b2a14` (dark brown text on coral surfaces)
  - Background: `#FDF9F1` (warm cream — page background)
  - Surface / Card: `#FFFFFF` (cards, panels, inputs)
  - Text (Primary / Muted): `#2C2E33` / `#5F6670`
- **Typography:**
  - Heading Font: **Quicksand** (weights 600–700; friendly, round)
  - Body Font: **Nunito** (weight 400; easy to read, soft)
- **Buttons:**
  - Shape: **pill** (fully rounded) — playful and friendly
  - Primary button: deep teal `#1F7A6F` background, white text, pill shape
  - Hover: `#1E6F64` + gentle lift — the one microinteraction
- **Border Radius Rules (the "round and friendly" system):**
  - Buttons (pill): `999px`
  - Cards & panels: `16px`
  - Inputs & small boxes: `12px`
  - Badges & tags: `999px` (pill)
- **Spacing:** base unit `4px`; space sections with multiples (8, 16, 24, 32, 64).
- **Motion Budget (from TECH.md — max 3, all with purpose):**
  1. Hero entrance animation (`@keyframes fade-up` — gentle fade/slide, staggered: h1 → sub → form → mock)
  2. One scroll-triggered effect (`IntersectionObserver` + `@keyframes stagger-in` — cards fade/slide in; Features cards stagger at 0.05s → 0.15s → 0.25s, guide cards at 0.05s → 0.12s → 0.19s → 0.26s)
  3. Microinteraction: button hover lift + scale (`translateY(-2px) scale(1.03)`)
  - Decorative extra: "Start here" badge pulses gently twice (2.5s cycle, starts 1.2s after load) — treated as part of the hero entrance budget.
  - All motion disabled by `prefers-reduced-motion` (uses `body`-prefixed selectors so the overrides always win the CSS cascade — including the scroll reveal). 

---

## 6. Website Structure & Page Architecture

*Outline the narrative flow and layout of the public-facing website.*

- **Primary Goal / Conversion Action:** **Waitlist signup** — one email field + one button. Repeated at the Hero and the Final CTA section (two moments, same action).
- **Page Sections:**

  1. **Navbar**
     - Brand name "GuidePost" (small, calm).
     - Links: Problem · Solution · How it works (anchor links).
     - No CTA in the navbar — the waitlist lives in the Hero and the Final CTA section.

  2. **Hero Section**
     - **Headline (draft):** "Need a guide? Skip the junk."
     - **Subheadline (draft):** "GuidePost gives you a short list of game guides that actually help — no ads, no SEO clutter."
     - **CTA:** email input + "Join the waitlist" pill button.
     - Visual: a calm, playful mock of a "game guide list" (three fake guide cards, one highlighted).

  3. **Problem Section**
     - Message: Searching for a game guide means sifting through ads and junk. Google ranks ad-stuffed sites; Reddit buries good answers in threads.
     - Simple visual: "before" feeling — messy search page / cluttered cards.

  4. **Solution Section**
     - Message: GuidePost gives every game a short, hand-picked list of guides that actually work.
     - Show it: pick a game → see 3–4 good guides, one clearly "worth starting here."
     - Tie back to the differentiator: calm, friendly, no junk.

  5. **How It Works Section**
     - Three simple steps (one, two, three):
       1. Pick your game.
       2. See a short list of guides picked by someone who finished it.
       3. Start playing — no rabbit holes.
     - Playful step cards in the design system.

  6. **Footer**
     - GuidePost name, one-line mission, credit line.
     - No CTA (the waitlist already lives in the Hero).
- **Waitlist form note (build-time):** no backend allowed — the simplest honest approach is an email input whose submit opens a pre-filled email (`mailto:`), or a no-code form service. Decide at Stage 5.

---

## Page Architecture

*The approved landing-page structure (replaces the section draft in Section 6 above). Headlines and copy approved 2026-09-17.*

### 1. Hero
- **Headline:** "Stuck on a new game? Here's the guide worth reading."
- **Subheadline:** "GuidePost gives new PC gamers a short, hand-picked list that cuts the clutter — no ads, no SEO junk."
- Single waitlist CTA (email field + "Join the waitlist" pill button).
- Calm mock of a searchable guide list: Elden Ring + category pills (Bosses, Builds, Walkthroughs, Quests, Weapons, Tips) + example guide cards ("Start here" badge).

### 2. Problem
- **Headline:** "Finding a guide shouldn't feel like a boss fight."
- Guide searches return ad-stuffed sites that rank for SEO, not for helping.
- Good advice exists — but it's buried in endless threads and wikis, so new players can't tell what's worth their time.

### 3. Solution
- **Headline:** "Every game. One short list of guides that actually work."
- Search any PC game → pick a category (Bosses, Builds, Walkthroughs, Quests, Weapons, Tips) → see hand-picked guides chosen by someone who finished it — not by ads.
- Calm, clean, no rabbit holes. Make your pick and start playing.

### 4. Games
- **Headline:** "Choose your game."
- Interactive game + category picker: pick a game (Elden Ring, Baldur's Gate 3, Minecraft, Terraria, Cyberpunk 2077), then a category (Bosses, Builds, Walkthroughs, Quests, Weapons, Tips).
- Renders a short, hand-picked list of guide cards (title, game, difficulty, rating, read time) below the picker.

### 5. Features
- **Headline:** "Everything you need. Nothing you don't."
- **Hand-picked:** every guide is there because it helped, not because it ranked.
- **Organized by category:** Bosses, Builds, Walkthroughs, Quests, Weapons, Tips — find the exact type of guide you need.
- **Multi-game:** built for any PC game, seeded with a few to start.
- **Clean & calm:** no ads, no popups — just the links that work.

### 6. Trending
- **Headline:** "Popular guides this month."
- A static, hand-curated shortlist of the guides the picker returns to most often — not live usage data.

### 7. Social Proof
- **Headline:** "Players are done sifting through junk."
- Quotes from early testers who used the mock lists.
- Built by a player, for players — an honest side project, not a growth machine.

### 8. FAQ
- **Headline:** "Isn't this just… Google?"
- Three short answers: why not just search Google, how guides are picked, and confirming GuidePost is free.

### 9. CTA
- **Headline:** "Be first in when GuidePost launches."
- Enter your email — no spam, just a ping when your game's list goes live.
- Single button: **Join the waitlist**

*Guardrail update (2026-09-23): the original "one CTA on the landing page. Not two, not three" guardrail in Section 2 was formally lifted. The approved pattern is **one CTA action (waitlist signup)**, placed at two conversion moments — the Hero and the Final CTA section. The navbar stays CTA-free. This replaces the earlier "known deviation" note below Section 9.*

---

## 7. Decision Log

*Follow the cycle: Think → Ask → Evaluate → Decide → Build*

| Date | Topic / Area | Options Considered | Final Decision & Rationale | Status |
| :--- | :--- | :--- | :--- | :--- |
| 2026-09-17 | Problem & audience | Broad gaming products vs. targeted help | Help casual PC gamers who are stuck find quality guides fast — a problem we know first-hand | Done |
| 2026-09-17 | Solution | Scrape sites / build own guides / rank curated links | Rank curated guide links with a simple algorithm — avoids legal issues, start small | Done |
| 2026-09-17 | Pricing model | Paid vs. free | Free forever — community impact over profit | Done |
| 2026-09-17 | Starting scope | One game / a few games / many games | A few manually-curated games — balanced effort and demo value | Done |
| 2026-09-17 | First deliverable | Working tool vs. landing page | Landing page first — this stage's roadmap target; the tool's features are described on the page | Done |
| 2026-09-17 | Name | GuideRank (working) vs. Skipit / GuidePost / GoodRun / It Works / The Good List | **GuidePost** — calm + helpful; "a guidepost points you the right way." Working tagline: "Need a guide? Skip the junk." | Done |
| 2026-09-17 | Founder Decision | Choices from our discovery talk | Locked the direction after passing the 5-Point Filter — recorded in Section 2 | Done |
| 2026-09-17 | Simpler v1 (challenge pass) | Algorithm + personalization vs. plain community voting | Dropped algorithm and personalization — community votes are the ranking. Audience narrowed to "starting fresh," not "stuck." See Section 2 | Done |
| 2026-09-17 | Fix: competition (Google/Reddit) | Sharpen differentiation vs. pivot vs. better story | Claim: clean short lists, no ads/SEO junk — Google ranks by ads, Reddit buries answers in threads | Done |
| 2026-09-17 | Fix: cold start | Seed lists vs. drop voting vs. vote-as-signal | Seed hand-picked lists first so the site is useful alone; votes come later as an optional signal, never required | Done |
| 2026-09-17 | Fix: sustainability | Side project vs. shared maintenance vs. defer | Honestly framed as a side project — community impact kept, startup pressure dropped | Done |
| 2026-09-17 | Brand personality | Offered trait sets | Friendly, Calm, Playful — from our choices; drives all design | Done |
| 2026-09-17 | Color palette | Cloud Mint vs. Night Glow vs. Sunset Lofi | Cloud Mint (#2A9D8F teal, cream background, coral accent) — most calm + friendly, good for readability | Done |
| 2026-09-17 | Typography | Quicksand+Nunito / Poppins+Inter / Baloo 2 | Quicksand headings + Nunito body — round and friendly | Done |
| 2026-09-17 | Button style & radii | Pill / soft-rounded / sharp | Pill buttons, rounded cards — playful + friendly; full rules in Section 5 | Done |
| 2026-09-17 | Primary CTA | Waitlist / learn-more / try-example | **Waitlist signup** — lowest friction, works on a static page. One CTA action; later amended 2026-09-23 to allow the Hero + Final CTA placement (see below) | Done |
| 2026-09-17 | Page sections | Hero, Problem, Solution, How It Works (+ Navbar & Footer) | Focused page, 4 content sections; no social proof or FAQ for now | Done |
| 2026-09-17 | Page outline | Drafted section Q&As | Saved in Section 6 (headline, subheadline, CTA, step copy) | Done |
| 2026-09-17 | Categories | Simple one-page-per-game vs. categorized guides | Added Bosses/Builds/Walkthroughs/Quests/Tips categories — helps users find the exact guide type they need; multi-game design with Elden Ring as worked example | Done |
| 2026-09-17 | Motion set | Max-3 budget vs. richer motion set | Kept the max-3 budget, polished within it: staggered card entrances (scroll-reveal), button hover lift+scale (microinteraction), badge pulse (decorative extra folded into hero entrance). Fixed two motion bugs: `.reveal` lost the cascade to card hover transitions, and reduced-motion overrides were silently beaten by later equal-specificity rules | Done |
| 2026-09-23 | Launch readiness | Ship vs. fix first | Ran a real-browser (Playwright) launch review. Fixed: waitlist success note now sits inside its form (JS no longer throws on submit), mobile nav/footer links wrap (killed horizontal scroll at 360/390px), added AA-safe `--color-primary-deep`/`--color-accent-deep`/deeper muted token, added `aria-pressed` to filter chips. Known carry-overs: mailto still points to a placeholder address; no `<noscript>` fallback | Done |
| 2026-09-23 | Docs vs. build reconciliation | Leave docs stale vs. update | Added the "Weapons" category everywhere (docs had 5, page ships 6) and extended Page Architecture with the Games, Trending, and FAQ sections that were live on the page. Flagged the "one CTA" guardrail conflict with the Hero + Final CTA forms; guardrail formally lifted same day (see row above) | Done |
| 2026-09-23 | Feature spec | Ship without spec vs. write spec after build | Created `SPECS/2026-09-23-landing-page/` (requirements.md, plan.md, validation.md) documenting the landing page as actually built and verified. Marked the feature complete in Section 8. Stage 6 (peer test, commit, deploy) deliberately left open | Done |
| 2026-09-23 | Hero copy (peer-test follow-up) | Old vague headline vs. who+problem framing | New Hero: **"Stuck on a new game? Here's the guide worth reading."** + sub "GuidePost gives new PC gamers a short, hand-picked list that cuts the clutter — no ads, no SEO junk." Stated the audience (new PC gamers) + problem (clutter) in one glance; tone stays Friendly · Calm · Playful. Colors, navbar, CTA styles, and font hierarchy untouched | Done |
| 2026-09-23 | Version control + GitHub | No VCS vs. git repo + public remote | Created a git repo in `build-lab/` (branch `main`), first commit "Initial commit: GuidePost landing page". Created **public** GitHub repo `IssacSaleh/GuidePost` and pushed `main` up. Auth: gh CLI as IssacSaleh (re-authed; browser device flow) + `gh auth setup-git` so future pushes use the credential helper | Done |
| 2026-09-23 | One CTA guardrail | Restore single form vs. lift guardrail | **Formally lifted the "one CTA" guardrail.** Approved pattern: one CTA *action* (waitlist) at two conversion moments — Hero + Final CTA. Navbar stays CTA-free. Updated Section 2, Section 6, and the Page Architecture note; `SPECS/MISSION.md` non-negotiables updated to match | Done |
| 2026-09-23 | Design tokens doc sync | Leave docs stale vs. update | Updated Section 5 to document the shipped AA-safe tokens (primary-deep `#1F7A6F`, primary-dark `#1E6F64`, accent-deep `#A8560F`, on-accent `#3b2a14`, muted `#5F6670`) and the deep-teal primary button, so the notebook matches `style.css`. Also refreshed `SPECS/ROADMAP.md` (current-state now "Stages 1–5 complete", stage boxes checked) and added `og-image.png` to the documented file structure in `SPECS/TECH.md` | Done |

---

## 8. Notes & Prompts for OpenCode

*Use this section to draft prompt briefs, review feedback, and keep track of pending tasks.*

- [x] Define core problem statement and audience
- [x] Pick target user, core solution, and value proposition
- [x] Challenge pass: simplify to community voting, drop algorithm + personalization
- [x] Problem pass: sharpened differentiation, seeded lists first, framed as side project
- [x] Choose a name and tagline (**GuidePost** — "Need a guide? Skip the junk.")
- [x] Select color palette and typography (Cloud Mint — saved in Section 5)
- [x] Draft website structure (Navbar/Hero/Problem/Solution/How-It-Works + footer, waitlist CTA — Section 6)
- [x] Build the base shell + design tokens (Cloud Mint tokens in style.css; section shell in index.html)
- [x] Build responsive hero and navigation components
- [x] Implement content sections (Problem, Solution, Features, Social Proof, Final CTA, Footer)
- [x] Add interactive elements and conversion forms (both waitlist forms + scroll reveal)
- [x] Add categories to product (Bosses/Builds/Walkthroughs/Quests/Tips) — Elden Ring as worked example
- [x] Polish: responsive + UX fixes, hero mock with real game, meta/favicon/logo, honesty cleanup, FAQ
- [x] Animation polish: staggered card entrances (Features + guides), button hover scale, badge pulse, fixed reduced-motion cascade bug (`body` prefix) and the `.reveal` vs card-transition conflict (switched cards to a `stagger-in` animation)
- [x] Final visual polish and responsive testing (Stage 5 audit)
- [x] Landing page feature complete — documented in `SPECS/2026-09-23-landing-page/` (requirements.md, plan.md, validation.md) and verified via Playwright (2026-09-23, see decision log). Stage 6 (human test, commit, deploy) still open.
