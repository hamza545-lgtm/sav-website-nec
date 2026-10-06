# Savnec website

React + Vite + Tailwind CSS + Framer Motion + Lucide icons. Multi-page, deployed on Vercel.

## Edit the basics
Everything you will routinely change lives in **`src/config/site.js`**:
- Web3Forms access keys (clients, experts, general)
- Emails (set `showEmails: true` once the inboxes exist)
- Registered address, LinkedIn and Instagram links

Page copy lives in `src/pages/*.jsx`. Industries, FAQs, formats and Insights articles live in `src/data/content.js`.

## Pages
| Route | Page |
|---|---|
| `/` | Home |
| `/clients` | For clients |
| `/experts` | For experts |
| `/industries` | Industries (anchors like `/industries#tech`) |
| `/compliance` | Compliance |
| `/about` | About (dropdown: Insights, FAQs, Careers, Contact) |
| `/request-trial` | Client form (Web3Forms: clients) |
| `/join` | Expert form (Web3Forms: experts) |
| `/contact`, `/careers` | General forms (Web3Forms: general) |
| `/privacy`, `/terms` | Legal |

Old `.html` URLs from the previous site redirect automatically (see `vercel.json`).

## Run locally (optional)
```bash
npm install
npm run dev
```

## Vercel settings
Framework preset: **Vite** · Build command: `npm run build` · Output directory: `dist`

## Brand files
`public/brand/` holds the logo in SVG and PNG (white, navy, stacked, icon, social avatar).
They are also served at `https://www.savnec.com/brand/...`.
