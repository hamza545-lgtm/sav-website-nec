'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { PageHero, Reveal, Button, useActiveSection, scrollToId } from '@/components/ui'
import { CtaBand } from '@/components/Visuals'
import { industries } from '@/data/content'

const industryIds = industries.map((i) => i.id)

export default function Industries() {
  const active = useActiveSection(industryIds, 0.5)

  return (
    <>
      <PageHero
        eyebrow="Industries"
        title={
          <>
            Experts across ten industries
          </>
        }
        intro="Our recruiters specialize by vertical, so they know which titles hold the answer and which questions separate real experience from a good LinkedIn summary."
      />

      <section className="relative pb-14 sm:pb-20">
        <div className="container-site grid gap-10 lg:grid-cols-[260px_1fr] lg:gap-12">
          <aside className="hidden lg:z-10 lg:block">
            <nav aria-label="Industries" className="sticky top-28 space-y-0.5 border-l border-line/[0.12] bg-page">
              {industries.map(({ id, name }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId(id, 110)
                    history.replaceState(null, '', `#${id}`)
                  }}
                  className={`relative block w-full py-2 pl-5 text-left text-[15px] transition-colors ${
                    active === id ? 'font-medium text-fg' : 'text-fg/65 hover:text-fg'
                  }`}
                >
                  {active === id && <motion.span layoutId="ind-rail" className="absolute -left-px top-0 h-full w-[2px] bg-tick" />}
                  {name}
                </a>
              ))}
            </nav>
          </aside>

          <div className="space-y-6">
            {industries.map(({ id, name, summary, focus, experts, questions }) => (
              <Reveal key={id}>
                <article id={id} className="overflow-hidden rounded-3xl glass">
                  <div className="grid md:grid-cols-[1.2fr_1fr]">
                    <div className="p-7 sm:p-9">
                      <h2 className="text-[26px] font-semibold leading-tight sm:text-[32px]">{name}</h2>
                      <p className="mt-3 text-[16px] leading-relaxed text-muted">{summary}</p>
                      <h3 className="label mt-6">Coverage</h3>
                      <ul className="mt-3 flex flex-wrap gap-2">
                        {focus.map((f) => (
                          <li key={f} className="rounded-full border border-line/[0.12] bg-card px-3.5 py-1.5 text-[13.5px] text-body">
                            {f}
                          </li>
                        ))}
                      </ul>
                      <h3 className="label mt-6">Experts we recruit</h3>
                      <ul className="mt-3 grid gap-x-6 gap-y-2 sm:grid-cols-2">
                        {experts.map((e) => (
                          <li key={e} className="flex items-center gap-2.5 text-[15px] text-body">
                            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-tick" />
                            {e}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="border-t border-line/[0.1] bg-sunk/70 p-7 sm:p-9 md:border-l md:border-t-0">
                      <h3 className="eyebrow">What clients ask us</h3>
                      <ul className="mt-5 space-y-5">
                        {questions.map((q) => (
                          <li key={q} className="flex gap-3.5 text-[16px] font-medium leading-snug text-fg">
                            <Quote size={15} className="mt-1 shrink-0 text-accent" />
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
              <div className="flex flex-col items-start justify-between gap-5 rounded-3xl border border-dashed border-line/15 p-7 sm:flex-row sm:items-center">
                <p className="max-w-xl text-[16px] text-body">Working on something outside these sectors? We recruit for adjacent and niche markets regularly.</p>
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
