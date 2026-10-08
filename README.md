# Savnec website

React + Vite + Tailwind CSS + Framer Motion + Lucide icons. Multi-page, deployed on Vercel.

## Edit the basics
Everything you will routinely change lives in **`src/config/site.js`**:
- Web3Forms access keys (clients, experts, general)
- Emails: clients `hello@`, experts `experts@`, general and compliance `info@`, careers `careers@`
- Address (under "Savnec" on About and Contact, on its own in the footer), LinkedIn and Instagram links

Page copy lives in `src/pages/*.jsx`. Industries, formats, use cases and FAQs live in `src/data/content.js`.
Blog articles live in `src/data/insights.js` (add a new object to publish a new article; its page, preview tags and sitemap entry are created on build).
Privacy & Cookie Policy and Terms live in `src/data/legal.js`.

## Forms
The three Web3Forms keys go in `src/config/site.js`, each between the quotes, for example
`clients: 'a1b2c3d4-0000-1111-2222-333344445555',`. After you commit, wait until the new
deployment shows **Ready** in Vercel before testing (if it shows **Error**, a quote or comma is
missing in `site.js` and the previous version stays live).
If a form says "We could not send that just now", open the browser console: Web3Forms explains
why there (most often an invalid key).

## Pages
| Route | Page |
|---|---|
| `/` | Home |
| `/clients` | For clients |
| `/experts` | For experts |
| `/industries` | Industries (anchors like `/industries#tech`) |
| `/compliance` | Compliance |
| `/about` | About (dropdown: Insights, FAQs, Careers, Contact) |
| `/insights`, `/insights/<slug>` | Blog index and articles (each article has its own URL, meta tags, Article + FAQ schema) |
| `/request-trial` | Client form (Web3Forms: clients) |
| `/join` | Expert form (Web3Forms: experts) |
| `/contact`, `/careers` | General forms (Web3Forms: general) |
| `/privacy-policy`, `/terms` | Legal (`/privacy` and `/cookie-policy` redirect) |

Old `.html` URLs from the previous site redirect automatically (see `vercel.json`).

## Run locally (optional)
```bash
npm install
npm run dev
```

## Vercel settings
Framework preset: **Vite** · Build command: `npm run build` · Output directory: `dist`

## Brand files
`public/brand/` holds the brand in SVG and PNG:
- `savnec-wordmark-navy` (light backgrounds) and `savnec-wordmark-white` (dark backgrounds)
- `savnec-icon` / `savnec-icon-512.png` (the converging-v mark, also the favicon)
- `savnec-social-avatar.png` (LinkedIn / Instagram profile picture)
- `savnec-linkedin-banner.png` (1584 × 396)

The wordmark is lowercase "savnec" outlined from Outfit Bold, all navy, with the two strokes of
the v converging on a single emerald node.

## SEO and link previews
Page titles and descriptions live in `src/data/seo.js`. On every `npm run build`,
`scripts/prerender.mjs` writes one HTML file per page (and per article) with its own title,
description and preview tags, so Google, LinkedIn and WhatsApp show the right summary.
The sitemap (`/sitemap.xml`) is generated on every build from the same list, so new articles
appear in it automatically. If you add a brand-new page, give it an entry in `src/data/seo.js`.

## Performance and sharp text
Home loads first; every other page is split into its own small file and prefetched while the
browser is idle.

The effects (frosted navigation and menus, drifting glows, grain, button shimmer) are built so
they cost little and never soften the text:
- The soft glows are tiny pre-rendered images (a few KB, inlined in the CSS) instead of live blur
  filters. The two hero glows drift on an 18-second cycle by moving slightly once a second, which
  looks continuous because they are so soft, and keeps them part of the page.
- Text renders on Chrome's sharpest (subpixel) path across the site. To keep it that way:
  - backdrop filters use blur only (a colour filter such as `saturate()` turns sharp text off for
    the whole page behind it);
  - `Reveal` fades on the compositor but rises on the main thread;
  - hover fades on cards use the `.fade-hover` class (a registered custom property) instead of
    opacity transitions;
  - sticky side panels have an opaque `bg-page` background and `z-10`;
  - `.container-site` centres on a whole pixel.
- Loops (shimmer, pulses, glow drift) pause while the page scrolls, the hero animations stop when
  they are off screen, and everything stops
  entirely for visitors who prefer reduced motion.

## Theme
The site is light by default. Colors are tokens in `src/index.css` (`--page`, `--fg`, `--accent` and so on).
Add the class `theme-dark` to any section to make it navy; everything inside adapts automatically.

## Proof
Home-page stats and testimonials live in `src/config/site.js` (`stats`, `testimonials`).
The testimonials section stays hidden until you add a real quote.
