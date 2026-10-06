import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowUpRight, X } from 'lucide-react'
import { PageHero, Section, Reveal, useSeo } from '../components/ui.jsx'
import { CtaBand } from '../components/Visuals.jsx'
import { insights } from '../data/content.js'

const accents = ['from-emerald-500/30', 'from-[#1F4E8C]/40', 'from-emerald-700/40']

export default function Insights() {
  useSeo('Insights', 'Practical notes from Savnec on expert research method, commercial diligence and compliance.')
  const [open, setOpen] = useState(null)
  const article = insights.find((a) => a.slug === open)

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && setOpen(null)
    window.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      <PageHero
        eyebrow="Insights"
        title={
          <>
            Notes from the <span className="serif-accent text-emerald-300">work.</span>
          </>
        }
        intro="Short, practical pieces on getting more out of expert research. Written by the people who run the projects."
      />

      <Section className="!pt-0">
        <div className="grid gap-5 lg:grid-cols-3">
          {insights.map((a, i) => (
            <Reveal key={a.slug} delay={i * 0.08}>
              <motion.button
                layoutId={`card-${a.slug}`}
                onClick={() => setOpen(a.slug)}
                className="group relative flex h-full min-h-[360px] w-full flex-col overflow-hidden rounded-3xl text-left glass"
              >
                <div className={`absolute inset-x-0 top-0 h-40 bg-gradient-to-b ${accents[i]} to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100`} />
                <div className="grid-bg absolute inset-0 opacity-40" />
                <div className="relative flex h-full flex-col p-8">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/15 bg-navy-950/50 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-emerald-200">
                      {a.tag}
                    </span>
                    <ArrowUpRight size={18} className="text-steel transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-emerald-300" />
                  </div>
                  <h3 className="mt-auto text-[24px] font-semibold leading-snug">{a.title}</h3>
                  <p className="mt-4 text-[13px] text-steel">{a.read}</p>
                </div>
              </motion.button>
            </Reveal>
          ))}
        </div>
      </Section>

      <AnimatePresence>
        {article && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-navy-950/80 p-4 pt-24 backdrop-blur-md sm:p-8 sm:pt-28"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(null)}
          >
            <motion.article
              layoutId={`card-${article.slug}`}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl rounded-3xl bg-navy-900 p-8 shadow-2xl ring-1 ring-white/10 sm:p-12"
            >
              <button
                onClick={() => setOpen(null)}
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-steel hover:text-white"
                aria-label="Close article"
              >
                <X size={16} />
              </button>
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-emerald-300">{article.tag}</span>
              <h2 className="mt-4 text-[30px] font-semibold leading-tight">{article.title}</h2>
              <p className="mt-2 text-[13px] text-steel">{article.read}</p>
              <div className="mt-8 space-y-5 text-[16.5px] leading-relaxed text-ink">
                {article.body.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>
            </motion.article>
          </motion.div>
        )}
      </AnimatePresence>

      <CtaBand />
    </>
  )
}
