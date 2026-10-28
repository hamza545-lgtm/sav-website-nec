'use client'

import { useMemo } from 'react'
import { motion } from 'framer-motion'
import { PageHero, useActiveSection, scrollToId } from '@/components/ui'
import { ArticleBody } from '@/components/RichText'
import { privacyBlocks, termsBlocks, legalDates } from '@/data/legal'
import { slugify } from '@/data/insights'
import { site } from '@/config/site'

function LegalPage({ eyebrow, title, blocks }) {
  const toc = useMemo(() => blocks.filter((b) => b.t === 'h2').map((b) => ({ id: slugify(b.c), label: b.c })), [blocks])
  const ids = useMemo(() => toc.map((t) => t.id), [toc])
  const active = useActiveSection(ids)

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={`Effective ${legalDates.effective}. Last updated ${legalDates.updated}.`} />
      <section className="pb-16 sm:pb-20">
        <div className="container-site grid gap-12 lg:grid-cols-[minmax(0,1fr)_260px]">
          <div className="max-w-[760px] [&_li]:text-[16px] [&_p]:text-[16px]">
            <ArticleBody blocks={blocks} />
          </div>
          <aside className="hidden lg:z-10 lg:block">
            <nav aria-label="Sections" className="sticky top-28 bg-page">
              <p className="label">Sections</p>
              <ul className="mt-4 max-h-[70vh] space-y-0.5 overflow-y-auto border-l border-line/[0.11]">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      onClick={(e) => {
                        e.preventDefault()
                        scrollToId(t.id, 100)
                        history.replaceState(null, '', `#${t.id}`)
                      }}
                      className={`relative block w-full py-1.5 pl-4 text-left text-[14px] leading-snug transition-colors ${
                        active === t.id ? 'font-medium text-fg' : 'text-fg/60 hover:text-fg'
                      }`}
                    >
                      {active === t.id && <motion.span layoutId="legal-rail" className="absolute -left-px top-0 h-full w-[2px] bg-tick" />}
                      {t.label}
                    </a>
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
  const blocks = useMemo(() => privacyBlocks(site.emails.compliance), [])
  return <LegalPage eyebrow="Legal" title="Privacy & Cookie Policy" blocks={blocks} />
}

export function Terms() {
  const blocks = useMemo(() => termsBlocks(site.emails.compliance), [])
  return <LegalPage eyebrow="Legal" title="Terms & Conditions" blocks={blocks} />
}
