// Writes one static HTML file per page into dist/ after `vite build`, each with its own
// <title>, description, canonical URL, social-preview tags and structured data.
// The React app still loads and takes over as normal; this only improves what search
// engines and link previews (LinkedIn, WhatsApp, Slack) see before JavaScript runs.
import fs from 'node:fs'
import path from 'node:path'
import { pageMeta, fullTitle, SITE_URL } from '../src/data/seo.js'
import { insights, articleJsonLd } from '../src/data/insights.js'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function setTag(html, re, tag) {
  return re.test(html) ? html.replace(re, tag) : html.replace('</head>', `    ${tag}\n  </head>`)
}

export function renderPage(template, { route, title, description, type = 'website', jsonLd }) {
  const url = route === '/' ? SITE_URL : `${SITE_URL}${route}`
  const t = esc(fullTitle(title))
  const d = esc(description)
  let html = template
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${t}</title>`)
  html = setTag(html, /<meta name="description"[^>]*>/, `<meta name="description" content="${d}" />`)
  html = setTag(html, /<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${url}" />`)
  html = setTag(html, /<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${t}" />`)
  html = setTag(html, /<meta property="og:description"[^>]*>/, `<meta property="og:description" content="${d}" />`)
  html = setTag(html, /<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${url}" />`)
  html = setTag(html, /<meta property="og:type"[^>]*>/, `<meta property="og:type" content="${type}" />`)
  html = setTag(html, /<meta name="twitter:title"[^>]*>/, `<meta name="twitter:title" content="${t}" />`)
  html = setTag(html, /<meta name="twitter:description"[^>]*>/, `<meta name="twitter:description" content="${d}" />`)
  if (jsonLd) {
    const json = JSON.stringify(jsonLd).replace(/</g, '\\u003c')
    html = html.replace('</head>', `    <script type="application/ld+json" id="page-jsonld">${json}</script>\n  </head>`)
  }
  return html
}

export function prerender(distDir) {
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
  const pages = [
    ...Object.entries(pageMeta).map(([route, m]) => ({ route, ...m })),
    ...insights.map((a) => ({
      route: `/insights/${a.slug}`,
      title: a.title,
      description: a.description,
      type: 'article',
      jsonLd: articleJsonLd(a, SITE_URL),
    })),
  ]
  for (const page of pages) {
    const html = renderPage(template, page)
    const file = page.route === '/' ? 'index.html' : `${page.route.slice(1)}.html`
    const out = path.join(distDir, file)
    fs.mkdirSync(path.dirname(out), { recursive: true })
    fs.writeFileSync(out, html)
  }
  return pages.length
}
