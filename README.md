# savnec.com

The Savnec website, built with Next.js (App Router), React, Tailwind CSS and Framer Motion,
hosted on Vercel.

Every page is generated as complete HTML at build time, so search engines, AI search and link
previews see the full text and links without running JavaScript.

## Day-to-day edits

| What | Where |
| --- | --- |
| Form keys, emails, address, social links, home-page stats, testimonials | `src/config/site.js` |
| Page titles, descriptions and "last updated" dates for Google | `src/data/seo.js` |
| Industries, formats, client types, FAQs | `src/data/content.js` |
| Insights articles | `src/data/insights.js` |
| Privacy Policy and Terms | `src/data/legal.js` |

When you change a page's content, update its `updated` date in `src/data/seo.js` (for articles,
add or change `updated` in `src/data/insights.js`). That date goes into `sitemap.xml` and tells
Google the page changed.

## Structure

```
src/app/          one folder per address (about/page.jsx is /about), plus the shared layout,
                  sitemap.xml (sitemap.js) and the 404 page (not-found.jsx)
src/views/        the content of each page
src/components/   navigation, footer, buttons, forms, animations
src/data/         text and settings (see the table above)
src/config/       site.js
public/           images, icons, robots.txt
```

## Run it locally

```
npm install
npm run dev        # http://localhost:3000
npm run build      # production build, the same one Vercel runs
```

## Search

- `sitemap.xml` is generated from `src/data/seo.js` and `src/data/insights.js`, so new pages and
  articles are included automatically.
- Old addresses (`/about.html`, `/index.html`, ...) redirect permanently to the clean ones
  (`next.config.mjs`).
- The Google Search Console verification tag is in `src/app/layout.jsx`.
