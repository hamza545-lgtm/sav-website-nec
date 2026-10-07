import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowUpRight, Clock, CalendarDays } from 'lucide-react'
import { GlowBackdrop, Button, Reveal, SpotlightCard, ease, useSeo } from '../components/ui.jsx'
import { ArticleBody } from '../components/RichText.jsx'
import { Accordion } from '../components/Form.jsx'
import { CtaBand } from '../components/Visuals.jsx'
import { insights, getInsight, formatDate, slugify, articleJsonLd } from '../data/insights.js'
import { site } from '../config/site.js'
import NotFound from './NotFound.jsx'

function useActiveHeading(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [ids])
  return active
}

function Article({ article }) {
  const toc = useMemo(
    () => article.blocks.filter((b) => b.t === 'h2').map((b) => ({ id: slugify(b.c), label: b.c })),
    [article]
  )
  const ids = useMemo(() => [...toc.map((t) => t.id), ...(article.faqs ? ['faqs'] : [])], [toc, article])
  const active = useActiveHeading(ids)
  const related = insights.filter((a) => a.slug !== article.slug).slice(0, 3)
  const url = `${site.url}/insights/${article.slug}`

  const jsonLd = useMemo(() => articleJsonLd(article, site.url), [article])

  useSeo(article.title, article.description, { jsonLd, type: 'article' })

  const jump = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' })
  }

  return (
    <>
      <header className="noise relative overflow-hidden pb-16 pt-36 sm:pt-44">
        <GlowBackdrop />
        <div className="container-site relative">
          <motion.nav
            aria-label="Breadcrumb"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="flex items-center gap-2 text-[13px] text-muted"
          >
            <Link to="/insights" className="inline-flex items-center gap-1.5 transition-colors hover:text-fg">
              <ArrowLeft size={14} /> Insights
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-accent">{article.category}</span>
          </motion.nav>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.06, ease }}
            className="mt-7 max-w-4xl text-[38px] font-semibold leading-[1.06] tracking-tightest sm:text-[58px]"
          >
            {article.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.14, ease }}
            className="mt-6 max-w-2xl text-[18px] leading-relaxed text-muted"
          >
            {article.description}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-line/[0.1] pt-6 text-[13.5px] text-muted"
          >
            <span className="text-body">By the Savnec research team</span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays size={14} /> <time dateTime={article.date}>{formatDate(article.date)}</time>
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={14} /> {article.readMinutes} min read
            </span>
          </motion.div>
        </div>
      </header>

      <div className="container-site grid gap-14 pb-10 lg:grid-cols-[minmax(0,1fr)_260px]">
        <article className="max-w-[720px]">
          <ArticleBody blocks={article.blocks} />

          {article.faqs && (
            <section id="faqs" className="scroll-mt-28 pt-16">
              <h2 className="mb-6 text-[28px] font-semibold sm:text-[32px]">Frequently asked questions</h2>
              <Accordion items={article.faqs} />
            </section>
          )}

          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-3xl p-8 glass sm:flex-row sm:items-center">
            <div>
              <p className="text-[20px] font-semibold text-fg">Have a project in mind?</p>
              <p className="mt-1 text-[15px] text-muted">Send one live brief and see a screened shortlist within 48 hours.</p>
            </div>
            <Button to="/request-trial">Request a Trial</Button>
          </div>
        </article>

        {toc.length > 2 && (
          <aside className="hidden lg:block">
            <nav aria-label="On this page" className="sticky top-28">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">On this page</p>
              <ul className="mt-4 space-y-1 border-l border-line/[0.11]">
                {[...toc, ...(article.faqs ? [{ id: 'faqs', label: 'FAQs' }] : [])].map((t) => (
                  <li key={t.id}>
                    <button
                      onClick={() => jump(t.id)}
                      className={`relative block w-full py-1.5 pl-4 text-left text-[13.5px] leading-snug transition-colors ${
                        active === t.id ? 'text-fg' : 'text-muted hover:text-body'
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

      <section className="py-20">
        <div className="container-site">
          <h2 className="text-[26px] font-semibold">Keep reading</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {related.map((a, i) => (
              <Reveal key={a.slug} delay={i * 0.06}>
                <SpotlightCard className="h-full">
                  <Link to={`/insights/${a.slug}`} className="flex h-full flex-col p-7">
                    <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent">{a.category}</span>
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

export default function InsightArticle() {
  const { slug } = useParams()
  const article = getInsight(slug)
  if (!article) return <NotFound />
  return <Article key={article.slug} article={article} />
}
