# BALIN — Maison de Couture

A digital fashion house built from `balin_luxury_fashion_website_prompt.md`.
One-page immersive experience implementing the five pillars of the brief:

| Pillar | Where |
| --- | --- |
| Magazine-style layout | `Manifesto` (drop caps, pull quotes, asymmetric 12-col grid), `Journal` (editorial article grid) |
| Cinematic product reveals | `Atelier` (pinned, scroll-scrubbed reveal from darkness), preloader, letter-by-letter hero title |
| Horizontal scrolling | `CoverStory` (pinned horizontal lookbook with inner parallax + progress bar) |
| Premium typography | Cormorant Garamond (high-contrast serif) + Jost (geometric sans), outline masthead, oversized display type |
| Video backgrounds | `Hero` and `Cinema` (muted looping film with poster fallback, pause control) |

## Tech stack

- **Vite 7 + React 19 + TypeScript**
- **GSAP 3.13** — ScrollTrigger (pinning, scrubbing, containerAnimation parallax) + SplitText (line/word reveals)
- **Lenis** — inertia smooth scrolling, synced to GSAP's ticker
- Hand-written CSS design tokens (no framework) — ink / bone / bronze palette, film-grain overlay

## Run

```bash
npm install
npm run dev      # local dev
npm run build    # type-check + production build
npm run preview  # serve the production build
```

## Notes

- Imagery is hot-linked from Unsplash and film from Pexels (both free licenses) — swap for real campaign assets in `src/data/content.ts`.
- Respects `prefers-reduced-motion`: smooth scroll, pinning, and scrub animations are disabled for those users.
- Video is muted by default with an elegant pause control; a Ken Burns poster stands in wherever video can't play.
