import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { PageHero, Section, Reveal, Button, useSeo } from '../components/ui.jsx'
import { Accordion } from '../components/Form.jsx'
import { faqs } from '../data/content.js'

export default function Faqs() {
  useSeo('FAQs', 'Answers to common questions from Savnec clients and experts about timelines, pricing, payment and compliance.')
  const tabs = Object.keys(faqs)
  const [tab, setTab] = useState(tabs[0])
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
        <div className="grid gap-12 lg:grid-cols-[240px_1fr]">
          <Reveal>
            <div className="flex gap-2 lg:sticky lg:top-28 lg:flex-col">
              {tabs.map((t) => (
                <button
                  key={t}
                  onClick={() => setTab(t)}
                  className={`relative rounded-xl px-5 py-3 text-left text-[15px] transition-colors ${tab === t ? 'text-fg' : 'text-muted hover:text-fg'}`}
                >
                  {tab === t && (
                    <motion.span layoutId="faq-tab" className="absolute inset-0 rounded-xl border border-emerald-400/30 bg-emerald-500/10" />
                  )}
                  <span className="relative">For {t.toLowerCase()}</span>
                </button>
              ))}
            </div>
          </Reveal>
          <AnimatePresence mode="wait">
            <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}>
              <Accordion items={faqs[tab]} />
            </motion.div>
          </AnimatePresence>
        </div>
        <Reveal>
          <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-3xl p-8 glass sm:flex-row sm:items-center sm:p-10">
            <div>
              <h3 className="text-[22px] font-semibold">Still have a question?</h3>
              <p className="mt-1 text-[15px] text-muted">We reply within one business day.</p>
            </div>
            <Button to="/contact">Contact us</Button>
          </div>
        </Reveal>
      </Section>
    </>
  )
}
