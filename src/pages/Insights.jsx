import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, ArrowRight } from 'lucide-react'
import { PageHero, Section, Reveal, usePageSeo } from '../components/ui.jsx'
import { CtaBand } from '../components/Visuals.jsx'
import { insights, formatDate } from '../data/insights.js'

export default function Insights() {
  usePageSeo('/insights')
  const featured = insights.find((a) => a.featured)
  const rest = insights.filter((a) => a !== featured)
  const categories = useMemo(() => ['All', ...new Set(rest.map((a) => a.category))], [rest])
  const [cat, setCat] = useState('All')
  const shown = cat === 'All' ? rest : rest.filter((a) => a.category === cat)

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes from the <span className="serif-accent text-accent">work.</span>
          </>
        }
        intro="Practical guides on expert research, written by the people who run the projects."
      />

      <Section className="!pt-0">
        {featured && (
          <Reveal>
            <Link
              to={`/insights/${featured.slug}`}
              className="theme-dark group relative grid overflow-hidden rounded-[28px] bg-page border border-line/[0.12] lg:grid-cols-[1.2fr_1fr]"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/40 via-navy-900 to-navy-950" />
              <div className="grid-bg absolute inset-0 opacity-50" />
              <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-emerald-400/20 blur-[100px] transition-opacity duration-700 group-hover:opacity-100 lg:opacity-60" />
              <div className="relative p-8 sm:p-12">
                <div className="flex items-center gap-3">
                  <span className="rounded-full border border-emerald-400/40 bg-emerald-500/10 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent">
                    Featured {featured.category.toLowerCase()}
                  </span>
                  <span className="text-[13px] text-muted">{featured.readMinutes} min read</span>
                </div>
                <h2 className="mt-7 text-[32px] font-semibold leading-[1.08] sm:text-[44px]">{featured.title}</h2>
                <p className="mt-5 max-w-xl text-[16.5px] leading-relaxed text-body">{featured.description}</p>
                <span className="mt-9 inline-flex items-center gap-2 text-[14.5px] font-medium text-fg">
                  Read the guide
                  <ArrowRight size={16} className="text-accent transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </div>
              <div className="relative hidden border-l border-line/[0.1] p-12 lg:block">
                <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">Inside</p>
                <ul className="mt-6 space-y-3.5">
                  {featured.blocks
                    .filter((b) => b.t === 'h2')
                    .slice(0, 7)
                    .map((b, i) => (
                      <li key={b.c} className="flex gap-3 text-[14.5px] text-body">
                        <span className="font-mono text-[11px] leading-6 text-accent">{String(i + 1).padStart(2, '0')}</span>
                        {b.c}
                      </li>
                    ))}
                </ul>
              </div>
            </Link>
          </Reveal>
        )}

        <div className="mt-16 flex flex-wrap items-center justify-between gap-4">
          <h2 className="text-[26px] font-semibold">Latest</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`relative rounded-full px-4 py-2 text-[13.5px] transition-colors ${cat === c ? 'text-fg' : 'text-muted hover:text-fg'}`}
              >
                {cat === c && (
                  <motion.span layoutId="insight-cat" className="absolute inset-0 rounded-full border border-emerald-400/40 bg-emerald-500/10" />
                )}
                <span className="relative">{c}</span>
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((a) => (
              <motion.div
                key={a.slug}
                layout
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
              >
                <Link
                  to={`/insights/${a.slug}`}
                  className="group relative flex h-full min-h-[320px] flex-col overflow-hidden rounded-3xl p-8 glass transition-colors duration-500 hover:border-emerald-400/30"
                >
                  <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-emerald-500/15 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative flex items-center justify-between">
                    <span className="rounded-full border border-line/15 bg-page/50 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent">
                      {a.category}
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                    />
                  </div>
                  <h3 className="relative mt-auto pt-10 text-[22px] font-semibold leading-snug">{a.title}</h3>
                  <p className="relative mt-4 text-[13px] text-muted">
                    {formatDate(a.date)} · {a.readMinutes} min read
                  </p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Section>

      <CtaBand />
    </>
  )
}
