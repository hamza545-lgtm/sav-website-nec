import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { PageHero, Reveal, useSeo, Button } from '../components/ui.jsx'
import { CtaBand } from '../components/Visuals.jsx'
import { industries } from '../data/content.js'

export default function Industries() {
  useSeo('Industries', 'Expert coverage across technology, consumer, financial services, industrials, healthcare, advertising, investors, consulting, market research and AI data.')
  const [active, setActive] = useState(industries[0].id)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )
    industries.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  const jump = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' })
  }

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Deep in ten sectors. <span className="serif-accent text-accent">Fluent in the questions.</span>
          </>
        }
        intro="Our recruiters specialize by vertical, so they know which titles hold the answer, which companies to approach, and which questions separate real experience from a good LinkedIn summary."
      />

      <section className="relative pb-24">
        <div className="container-site grid gap-12 lg:grid-cols-[280px_1fr]">
          <aside className="hidden lg:block">
            <nav className="sticky top-28 space-y-1 border-l border-line/[0.11]">
              {industries.map(({ id, name }) => (
                <button
                  key={id}
                  onClick={() => jump(id)}
                  className={`relative block w-full py-2 pl-5 text-left text-[14px] transition-colors ${
                    active === id ? 'text-fg' : 'text-muted hover:text-body'
                  }`}
                >
                  {active === id && (
                    <motion.span
                      layoutId="ind-rail"
                      className="absolute -left-px top-0 h-full w-[2px] bg-tick"
                    />
                  )}
                  {name}
                </button>
              ))}
            </nav>
          </aside>

          <div className="space-y-8">
            {industries.map(({ id, name, icon: Icon, summary, focus, questions }, idx) => (
              <Reveal key={id}>
                <article id={id} className="scroll-mt-28 overflow-hidden rounded-3xl glass">
                  <div className="grid gap-0 md:grid-cols-[1.15fr_1fr]">
                    <div className="p-8 sm:p-10">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-accent">
                          <Icon size={22} />
                        </span>
                        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                          {String(idx + 1).padStart(2, '0')} / {industries.length}
                        </span>
                      </div>
                      <h2 className="mt-7 text-[28px] font-semibold leading-tight sm:text-[34px]">{name}</h2>
                      <p className="mt-4 text-[16px] leading-relaxed text-muted">{summary}</p>
                      <div className="mt-7 flex flex-wrap gap-2">
                        {focus.map((f) => (
                          <span key={f} className="rounded-full border border-line/[0.12] bg-fg/[0.02] px-3.5 py-1.5 text-[13px] text-body">
                            {f}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="border-t border-line/[0.1] bg-sunk/70 p-8 sm:p-10 md:border-l md:border-t-0">
                      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">Questions we recruit for</p>
                      <ul className="mt-6 space-y-5">
                        {questions.map((q) => (
                          <li key={q} className="flex gap-3 text-[15px] leading-relaxed text-body">
                            <Quote size={14} className="mt-1.5 shrink-0 text-muted" />
                            {q}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
            <Reveal>
              <div className="flex flex-col items-start justify-between gap-6 rounded-3xl border border-dashed border-line/15 p-8 sm:flex-row sm:items-center">
                <p className="max-w-xl text-[16px] text-body">
                  Working on something outside these sectors? We recruit for adjacent and niche markets regularly.
                </p>
                <Button to="/request-trial" variant="ghost">
                  Tell us the brief
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
