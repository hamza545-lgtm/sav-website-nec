'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Check, ShieldCheck, ArrowUpRight } from 'lucide-react'
import { PageHero, Button, Section, SectionHeading, Reveal, Eyebrow } from '@/components/ui'
import { CtaBand } from '@/components/Visuals'
import { subscribeHash } from '@/components/ClientEffects'
import { formats, useCases } from '@/data/content'
import { ucSlug } from '@/components/Navbar'
import { EmailLine } from '@/components/ContactInfo'

const commitments = [
  ['First profiles in 48 hours', 'For most scoped briefs. Longer ones are flagged on day one.'],
  ['Fewer, better profiles', 'Screener answers come with every profile.'],
  ['Compliance by default', 'Conflict checks and your restricted list, every time.'],
  ['One team, start to finish', 'The person who scopes your project delivers it.'],
  ['Clear pricing up front', 'A rate card before any work begins.'],
]

function Commitments() {
  return (
    <div className="rounded-3xl p-6 glass sm:p-7">
      <Eyebrow as="h2">Our commitments</Eyebrow>
      <ul className="mt-5 divide-y divide-line/[0.08]">
        {commitments.map(([t, b]) => (
          <li key={t} className="py-3.5 first:pt-0 last:pb-0">
            <span className="block text-[15.5px] font-semibold text-fg">{t}</span>
            <span className="block text-[14.5px] text-muted">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function ProfileCard() {
  return (
    <div className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-3xl" style={{ boxShadow: '0 0 128px 24px rgba(43,196,138,0.10)' }} />
      <div className="relative rounded-3xl p-7 glass">
        <div className="flex items-center justify-between">
          <span className="label">Expert profile · sample</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-[12px] text-accent">
            <ShieldCheck size={12} /> Cleared
          </span>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-navy-700 font-mono text-[13px] text-white">DK</span>
          <div>
            <p className="text-[17px] font-semibold text-fg">Former Director of Procurement</p>
            <p className="text-[14px] text-muted">Global packaging manufacturer · Left 2025 · 16 years</p>
          </div>
        </div>
        <div className="mt-7 space-y-5 border-t border-line/[0.1] pt-6">
          {[
            ['Which resin suppliers did you personally negotiate with?', 'Led annual contracts with three of the top five, about $140M in spend.'],
            ['How recently did you manage supplier pricing?', 'Through Q3 2025, including two mid-contract renegotiations.'],
          ].map(([q, a], i) => (
            <div key={q}>
              <p className="label">Screener · Q{i + 1}</p>
              <p className="mt-1.5 text-[14.5px] text-body">{q}</p>
              <p className="mt-1.5 border-l-2 border-emerald-500/60 pl-3 text-[14.5px] font-medium text-fg">{a}</p>
            </div>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {['Employment verified', 'No current conflicts', 'Terms accepted'].map((t) => (
            <span key={t} className="rounded-full border border-line/[0.14] px-3 py-1 text-[12.5px] text-body">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

function UseCases() {
  const tabs = Object.keys(useCases)
  const [tab, setTab] = useState(tabs[0])
  // Links such as /clients#uc-private-equity open the matching tab.
  useEffect(
    () =>
      subscribeHash((hash) => {
        const match = tabs.find((t) => `#${ucSlug(t)}` === hash)
        if (match) setTab(match)
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
  return (
    <Section id="use-cases">
      {tabs.map((t) => (
        <span key={t} id={ucSlug(t)} className="absolute top-0" aria-hidden="true" />
      ))}
      <SectionHeading title="Who we work with" />
      <Reveal delay={0.05}>
        <div className="mt-7 flex flex-wrap gap-2" role="tablist" aria-label="Client types">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              id={`tab-${ucSlug(t)}`}
              aria-selected={tab === t}
              aria-controls={`panel-${ucSlug(t)}`}
              onClick={() => setTab(t)}
              className={`relative rounded-full px-5 py-2.5 text-[15px] font-medium transition-colors ${tab === t ? 'text-fg' : 'text-fg/65 hover:text-fg'}`}
            >
              {tab === t && (
                <motion.span
                  layoutId="client-tab"
                  className="absolute inset-0 rounded-full border border-emerald-400/40 bg-emerald-500/10"
                  transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                />
              )}
              <span className="relative">{t}</span>
            </button>
          ))}
        </div>
      </Reveal>
      <div className="mt-6 rounded-3xl p-7 glass sm:p-10">
        {/* Every panel is in the page; only the selected one is shown. */}
        {tabs.map((t) => (
          <div
            key={t}
            role="tabpanel"
            id={`panel-${ucSlug(t)}`}
            aria-labelledby={`tab-${ucSlug(t)}`}
            hidden={tab !== t}
            className={tab === t ? 'page-enter grid gap-8 lg:grid-cols-[0.8fr_1.2fr]' : 'hidden'}
          >
            <div>
              <Eyebrow as="p">{t}</Eyebrow>
              <h3 className="mt-4 text-[26px] font-semibold leading-tight sm:text-[28px]">{useCases[t].lead}</h3>
            </div>
            <ul className="grid content-start gap-x-8 gap-y-4 sm:grid-cols-2">
              {useCases[t].items.map((it) => (
                <li key={it} className="flex gap-3 text-[16px] leading-relaxed text-body">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-accent">
                    <Check size={12} />
                  </span>
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

export default function Clients() {
  return (
    <>
      <PageHero
        eyebrow="For clients"
        title={
          <>
            Your question, answered by someone who was in the room.
          </>
        }
        intro="Operators, buyers and specialists who can tell you what the data can't, screened before you spend a minute with them."
        aside={<Commitments />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/request-trial">Request a Trial</Button>
          <Button to="/compliance" variant="ghost">
            Our compliance framework
          </Button>
        </div>
        <EmailLine who="clients" label="Prefer email? Write to" className="mt-5" />
      </PageHero>

      <Section tone="navy">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading
              eyebrow="What you receive"
              title="Profiles you can decide on in minutes."
              intro="Role, tenure and recency, plus each expert's own answers to your screening questions."
            />
            <Reveal delay={0.15}>
              <ul className="mt-7 space-y-3">
                {['Anonymized until you choose to proceed', 'Answers to your screener, in their words', 'Conflict and restriction status on every profile'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[16px] text-fg">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-accent">
                      <Check size={13} />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <ProfileCard />
          </Reveal>
        </div>
      </Section>

      <Section tone="card" className="border-b border-line/[0.07]">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-16">
          <SectionHeading title="Our services" intro="Six ways to hear from the right people." />
          <Reveal delay={0.05}>
            <ul className="grid gap-x-10 border-t border-line/[0.1] sm:grid-cols-2">
              {formats.map((f) => (
                <li key={f.id}>
                  <Link
                    href={`/services#${f.id}`}
                    className="group flex items-center justify-between gap-4 border-b border-line/[0.1] py-4 text-[17px] font-semibold text-fg transition-colors hover:text-accent"
                  >
                    {f.title}
                    <ArrowUpRight size={16} className="shrink-0 text-muted transition-colors group-hover:text-accent" />
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <UseCases />

      <CtaBand
        eyebrow="Trial project"
        title="Judge us on one real brief."
        body="Send a live question. We scope it, recruit for it and show you the shortlist. You decide if we have earned the next one."
        secondary={null}
      />
    </>
  )
}
