# GuidePost — Need a guide? Skip the junk.

A free, ad-free tool for **new PC gamers**: search any game, pick a category
(Bosses, Builds, Walkthroughs, Quests, Weapons, Tips), and get a short,
hand-picked list of game guides that actually work — no ads, no SEO clutter.

> **Tagline:** *"Stuck on a new game? Here's the guide worth reading."*

## Live site

The working preview runs at a temporary Codio URL while it's being developed.

## What it does

- Picks a game (Elden Ring, Baldur's Gate 3, Minecraft, Terraria, Cyberpunk 2077).
- Picks a category — Bosses, Builds, Walkthroughs, Quests, Weapons, Tips.
- Shows a short, hand-picked list of guide cards (title, game, difficulty, rating, read time).
- Lets you join the waitlist so you hear when GuidePost launches.

## Tech stack

Plain **HTML5 + CSS3 + vanilla JavaScript**. No frameworks, no build step, no
backend — it runs anywhere a static file server does.

## Project structure

```
build-lab/
├── index.html      ← The landing page
├── style.css       ← All styles and design tokens
├── script.js       ← Guide data, picker/filter logic, waitlist submit
├── og-image.png    ← Social-preview image for the OG/Twitter meta tags
├── MISSION.md      ← The Founder Notebook (design system, architecture, decision log)
└── SPECS/          ← Project constitution (MISSION, TECH, ROADMAP) + feature specs
```

## Run it locally

Just serve the folder with any static server:

```bash
python3 -m http.server 3000
```

then open <http://localhost:3000/>. (On a Codio box, the public URL is
`https://${CODIO_HOSTNAME}-3000.codio.io/`.)

## Notes for fellow students

- GuidePost is an honest side project, not a startup chasing growth. Community
  impact over profit.
- Trending guides are hand-curated, not live analytics.
- The waitlist opens a pre-filled email (`mailto:`), because there is no backend.

## Roadmap status

- [x] Landing page built and launch-reviewed (Stages 1–5)
- [x] Feature spec + validation (`SPECS/2026-09-23-landing-page/`)
- [x] Git repo + public GitHub remote
- [ ] Stage 6: peer human test, deploy to a real host, submit

## License

A student project, built with care.