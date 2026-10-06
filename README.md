# Savnec website

React + Vite + Tailwind CSS + Framer Motion + Lucide icons. Multi-page, deployed on Vercel.

## Edit the basics
Everything you will routinely change lives in **`src/config/site.js`**:
- Web3Forms access keys (clients, experts, general)
- Emails (set `showEmails: true` once the inboxes exist)
- Registered address, LinkedIn and Instagram links

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
- `savnec-wordmark-white` (for dark backgrounds) and `savnec-wordmark-navy` (for white backgrounds)
- `savnec-icon` / `savnec-icon-512.png` (split-S monogram, also the favicon)
- `savnec-social-avatar.png` (LinkedIn / Instagram profile picture)
- `savnec-linkedin-banner.png` (1584 × 396)

The wordmark is outlined from Inter Display SemiBold: "Sav" in white or navy, "nec" in emerald.
