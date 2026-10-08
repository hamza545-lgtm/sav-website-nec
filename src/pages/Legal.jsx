import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { PageHero, usePageSeo, useActiveSection } from '../components/ui.jsx'
import { ArticleBody } from '../components/RichText.jsx'
import { privacyBlocks, termsBlocks, legalDates } from '../data/legal.js'
import { slugify } from '../data/insights.js'
import { site } from '../config/site.js'

function LegalPage({ eyebrow, title, blocks }) {
  const toc = useMemo(() => blocks.filter((b) => b.t === 'h2').map((b) => ({ id: slugify(b.c), label: b.c })), [blocks])
  const ids = useMemo(() => toc.map((t) => t.id), [toc])
  const active = useActiveSection(ids)

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
          <aside className="hidden lg:z-10 lg:block">
            <nav aria-label="Sections" className="sticky top-28 bg-page">
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
  usePageSeo('/privacy-policy')
  const blocks = useMemo(() => privacyBlocks(site.emails.compliance), [])
  return <LegalPage eyebrow="Legal" title="Privacy & Cookie Policy" blocks={blocks} />
}

export function Terms() {
  usePageSeo('/terms')
  const blocks = useMemo(() => termsBlocks(site.emails.compliance), [])
  return <LegalPage eyebrow="Legal" title="Terms & Conditions" blocks={blocks} />
}
