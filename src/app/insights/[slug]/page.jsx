import { notFound } from 'next/navigation'
import InsightArticle from '@/views/InsightArticle'
import { insights, getInsight, articleJsonLd } from '@/data/insights'
import { buildMetadata, jsonLdScript, SITE_URL } from '@/data/seo'

// Every article is built as a static page; any other address under /insights is a 404.
export const dynamicParams = false

export function generateStaticParams() {
  return insights.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const article = getInsight(slug)
  if (!article) return {}
  const meta = buildMetadata({ path: `/insights/${slug}`, title: article.title, description: article.description, type: 'article' })
  return {
    ...meta,
    openGraph: { ...meta.openGraph, publishedTime: article.date, modifiedTime: article.updated || article.date },
  }
}

export default async function Page({ params }) {
  const { slug } = await params
  const article = getInsight(slug)
  if (!article) notFound()
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={jsonLdScript(articleJsonLd(article, SITE_URL))} />
      <InsightArticle slug={slug} />
    </>
  )
}
