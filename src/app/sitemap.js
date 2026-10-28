import { pageMeta, canonicalUrl } from '@/data/seo'
import { insights } from '@/data/insights'

// /sitemap.xml, built from the same page list as the titles and descriptions, so every page and
// article is included automatically. lastModified is the real date each page last changed.
export default function sitemap() {
  const pages = Object.entries(pageMeta).map(([path, m]) => ({
    url: canonicalUrl(path),
    lastModified: m.updated,
  }))
  const articles = insights.map((a) => ({
    url: canonicalUrl(`/insights/${a.slug}`),
    lastModified: a.updated || a.date,
  }))
  return [...pages, ...articles]
}
