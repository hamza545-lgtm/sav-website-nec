'use client'

import { motion } from 'framer-motion'
import { PageHero, Section, Reveal, Button, useActiveSection, scrollToId } from '@/components/ui'
import { Accordion } from '@/components/Form'
import { faqs } from '@/data/content'

const groups = Object.keys(faqs)
const ids = groups.map((g) => g.toLowerCase())

export default function Faqs() {
  const active = useActiveSection(ids, 0.35)
  return (
    <>
      <PageHero
        eyebrow="FAQs"
        title={
          <>
            Straight <span className="serif-accent text-accent">answers.</span>
          </>
        }
        intro="The questions we hear most from clients and experts. If yours is not here, ask us directly."
      />
      <Section className="!pt-0">
        <div className="grid gap-10 lg:grid-cols-[220px_1fr] lg:gap-14">
          <aside className="hidden lg:z-10 lg:block">
            <nav aria-label="FAQ groups" className="sticky top-28 space-y-0.5 border-l border-line/[0.12] bg-page">
              {groups.map((g, i) => (
                <a
                  key={g}
                  href={`#${ids[i]}`}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToId(ids[i], 110)
                    history.replaceState(null, '', `#${ids[i]}`)
                  }}
                  className={`relative block py-2 pl-5 text-[15px] transition-colors ${active === ids[i] ? 'font-medium text-fg' : 'text-fg/65 hover:text-fg'}`}
                >
                  {active === ids[i] && <motion.span layoutId="faq-rail" className="absolute -left-px top-0 h-full w-[2px] bg-tick" />}
                  For {g.toLowerCase()}
                </a>
              ))}
            </nav>
          </aside>
          <div className="space-y-12">
            {groups.map((g, i) => (
              <section key={g} id={ids[i]}>
                <h2 className="mb-4 text-[24px] font-semibold sm:text-[28px]">For {g.toLowerCase()}</h2>
                <Accordion items={faqs[g]} defaultOpen={i === 0 ? 0 : -1} />
              </section>
            ))}
          </div>
        </div>
        <Reveal>
          <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl p-7 glass sm:flex-row sm:items-center sm:p-9">
            <div>
              <h2 className="text-[22px] font-semibold">Still have a question?</h2>
              <p className="mt-1 text-[15.5px] text-muted">A person replies within one business day.</p>
            </div>
            <Button to="/contact">Contact us</Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
