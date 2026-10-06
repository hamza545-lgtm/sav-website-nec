import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { PageHero, useSeo } from '../components/ui.jsx'
import { ArticleBody } from '../components/RichText.jsx'
import { privacyBlocks, termsBlocks, legalDates } from '../data/legal.js'
import { slugify } from '../data/insights.js'
import { site } from '../config/site.js'

function LegalPage({ eyebrow, title, blocks }) {
  const toc = useMemo(() => blocks.filter((b) => b.t === 'h2').map((b) => ({ id: slugify(b.c), label: b.c })), [blocks])
  const [active, setActive] = useState(toc[0]?.id)

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-20% 0px -70% 0px' }
    )
    toc.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [toc])

  const jump = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 100, behavior: 'smooth' })
  }

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={title}
        intro={`Effective ${legalDates.effective}. Last updated ${legalDates.updated}.`}
      />
      <section className="pb-28">
        <div className="container-site grid gap-14 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="max-w-[760px] [&_p]:text-[16px] [&_li]:text-[16px]">
            <ArticleBody blocks={blocks} />
          </div>
          <aside className="hidden lg:block">
            <nav aria-label="Sections" className="sticky top-28">
              <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">Sections</p>
              <ul className="mt-4 max-h-[70vh] space-y-0.5 overflow-y-auto border-l border-line/[0.11]">
                {toc.map((t) => (
                  <li key={t.id}>
                    <button
                      onClick={() => jump(t.id)}
                      className={`relative block w-full py-1.5 pl-4 text-left text-[13px] leading-snug transition-colors ${
                        active === t.id ? 'text-fg' : 'text-muted hover:text-body'
                      }`}
                    >
                      {active === t.id && <motion.span layoutId="legal-rail" className="absolute -left-px top-0 h-full w-[2px] bg-tick" />}
                      {t.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>
        </div>
      </section>
    </>
  )
}

export function Privacy() {
  useSeo('Privacy & Cookie Policy', 'How Savnec collects, uses, shares and protects personal information, and how our website uses cookies.')
  const blocks = useMemo(() => privacyBlocks(site.emails.compliance), [])
  return <LegalPage eyebrow="Legal" title="Privacy & Cookie Policy" blocks={blocks} />
}

export function Terms() {
  useSeo('Terms & Conditions', 'The terms that govern use of the Savnec website and participation in the Savnec expert network.')
  const blocks = useMemo(() => termsBlocks(site.emails.compliance), [])
  return <LegalPage eyebrow="Legal" title="Terms & Conditions" blocks={blocks} />
}
