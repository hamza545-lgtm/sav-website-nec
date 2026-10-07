# Savnec website

React + Vite + Tailwind CSS + Framer Motion + Lucide icons. Multi-page, deployed on Vercel.

## Edit the basics
Everything you will routinely change lives in **`src/config/site.js`**:
- Web3Forms access keys (clients, experts, general)
- Emails: clients `hello@`, experts `experts@`, general and compliance `info@`, careers `careers@`
- Address (shown as "Savnec" with the address underneath), LinkedIn and Instagram links

Page copy lives in `src/pages/*.jsx`. Industries, formats, use cases and FAQs live in `src/data/content.js`.
Blog articles live in `src/data/insights.js` (add a new object to publish a new article, then add its URL to `public/sitemap.xml`).
Privacy & Cookie Policy and Terms live in `src/data/legal.js`.

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
When you publish a new article, also add its URL to `public/sitemap.xml`.

## Performance
Home loads first; every other page is split into its own small file and prefetched while the
browser is idle. Decorative glows are painted once (no blur filters or endless animations), so
scrolling stays smooth on phones.

## Theme
The site is light by default. Colors are tokens in `src/index.css` (`--page`, `--fg`, `--accent` and so on).
Add the class `theme-dark` to any section to make it navy; everything inside adapts automatically.

## Proof
Home-page stats and testimonials live in `src/config/site.js` (`stats`, `testimonials`).
The testimonials section stays hidden until you add a real quote.
