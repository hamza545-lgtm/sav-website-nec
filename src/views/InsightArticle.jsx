'use client'

import { useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { GlowBackdrop, Button, Reveal, SpotlightCard, heroIn, useActiveSection, scrollToId } from '@/components/ui'
import { ArticleBody } from '@/components/RichText'
import { Accordion } from '@/components/Form'
import { CtaBand } from '@/components/Visuals'
import { insights, getInsight, formatDate, slugify } from '@/data/insights'

function Article({ article }) {
  const toc = useMemo(
    () => article.blocks.filter((b) => b.t === 'h2').map((b) => ({ id: slugify(b.c), label: b.c })),
    [article]
  )
  const ids = useMemo(() => [...toc.map((t) => t.id), ...(article.faqs ? ['faqs'] : [])], [toc, article])
  const active = useActiveSection(ids)
  const related = insights.filter((a) => a.slug !== article.slug).slice(0, 3)
  const jump = (id) => scrollToId(id, 100)
  const h = [heroIn(0, 12), heroIn(0.06, 24), heroIn(0.14, 18), heroIn(0.25, 10)]

  return (
    <>
      <header className="noise relative overflow-hidden pb-12 pt-32 sm:pt-40">
        <GlowBackdrop />
        <div className="container-site relative">
          <nav aria-label="Breadcrumb" className={`${h[0].className} flex items-center gap-2 text-[14px] text-muted`} style={h[0].style}>
            <Link href="/insights" className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-fg">
              <ArrowLeft size={14} /> Insights
            </Link>
            <span className="text-fg/20">/</span>
            <span className="text-accent">{article.category}</span>
          </nav>
          <h1 className={`${h[1].className} mt-6 max-w-4xl text-[36px] font-medium leading-[1.08] tracking-tightest sm:text-[52px]`} style={h[1].style}>
            {article.title}
          </h1>
          <p className={`${h[2].className} mt-5 max-w-2xl text-[18px] leading-relaxed text-muted`} style={h[2].style}>
            {article.description}
          </p>
          <div
            className={`${h[3].className} mt-7 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line/[0.1] pt-5 text-[14px] text-muted`}
            style={h[3].style}
          >
            <span className="text-body">By the Savnec research team</span>
            <span><time dateTime={article.date}>{formatDate(article.date)}</time></span>
            <span>{article.readMinutes} min read</span>
          </div>
        </div>
      </header>

      <div className="container-site grid gap-14 pb-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        <article className="max-w-[720px]">
          <ArticleBody blocks={article.blocks} />

          {article.faqs && (
            <section id="faqs" className="pt-14">
              <h2 className="mb-6 text-[28px] font-semibold sm:text-[32px]">Frequently asked questions</h2>
              <Accordion items={article.faqs} />
            </section>
          )}

          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl p-7 glass sm:flex-row sm:items-center">
            <div>
              <p className="text-[20px] font-semibold text-fg">Have a project in mind?</p>
              <p className="mt-1 text-[15px] text-muted">Send one live brief and see a screened shortlist, usually within 24–48 hours.</p>
            </div>
            <Button to="/request-trial">Request a Trial</Button>
          </div>
        </article>

        {toc.length > 2 && (
          <aside className="hidden lg:z-10 lg:block">
            <nav aria-label="On this page" className="sticky top-28 bg-page">
              <p className="label">On this page</p>
              <ul className="mt-4 space-y-1 border-l border-line/[0.11]">
                {[...toc, ...(article.faqs ? [{ id: 'faqs', label: 'FAQs' }] : [])].map((t) => (
                  <li key={t.id}>
                    <button
                      onClick={() => jump(t.id)}
                      className={`relative block w-full py-1.5 pl-4 text-left text-[14px] leading-snug transition-colors ${
                        active === t.id ? 'font-medium text-fg' : 'text-fg/60 hover:text-fg'
                      }`}
                    >
                      {active === t.id && (
                        <motion.span layoutId="toc-rail" className="absolute -left-px top-0 h-full w-[2px] bg-tick" />
                      )}
                      {t.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        )}
      </div>

      <section className="bg-sunk py-12 sm:py-16">
        <div className="container-site">
          <h2 className="text-[26px] font-semibold">Keep reading</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <SpotlightCard className="h-full">
                  <Link href={`/insights/${a.slug}`} className="flex h-full flex-col p-7">
                    <span className="eyebrow">{a.category}</span>
                    <h3 className="mt-4 text-[18px] font-semibold leading-snug">{a.title}</h3>
                    <span className="mt-auto inline-flex items-center gap-1.5 pt-6 text-[13px] text-muted group-hover:text-fg">
                      {a.readMinutes} min read <ArrowUpRight size={14} />
                    </span>
                  </Link>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}

export default function InsightArticle({ slug }) {
  const article = getInsight(slug)
  return <Article key={article.slug} article={article} />
}
