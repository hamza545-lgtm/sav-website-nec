'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react'
import { Button, Eyebrow, Reveal, SectionHeading, SpotlightCard, GlowBackdrop, Counter, Section, heroIn } from '@/components/ui'
import { NetworkMap, EngagementConsole, Marquee, CtaBand } from '@/components/Visuals'
import { Testimonials } from '@/components/Proof'
import { industries, segments, formats } from '@/data/content'
import { site } from '@/config/site'

/* ─────────────── Hero ─────────────── */

function Hero() {
  const a = heroIn(0, 16)
  const b = heroIn(0.08, 30)
  const c = heroIn(0.2, 24)
  const d = heroIn(0.3, 20)
  const e = heroIn(0.45, 12)
  return (
    <section className="noise relative overflow-hidden pt-32 sm:pt-40">
      <GlowBackdrop />
      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <div className={a.className} style={a.style}>
            <Eyebrow>Expert network · Custom recruitment</Eyebrow>
          </div>
          <h1 className={`${b.className} mt-6 max-w-[640px] text-[42px] font-medium leading-[1.04] tracking-tightest sm:text-[60px]`} style={b.style}>
            The central point for expert sourcing.
          </h1>
          <p className={`${c.className} mt-7 max-w-xl text-[18px] leading-relaxed text-muted`} style={c.style}>
            Savnec connects market research, investment and corporate strategy teams with the operators, buyers and specialists
            who already know the answer.
          </p>
          <div className={`${d.className} mt-9 flex flex-col gap-3 sm:flex-row`} style={d.style}>
            <Button to="/request-trial">Request a Trial</Button>
            <Button to="/join" variant="ghost">
              Join as an Expert
            </Button>
          </div>
          <ul className={`${e.className} mt-10 flex max-w-[640px] flex-col gap-x-[18px] gap-y-2 border-t border-line/[0.1] pt-6 sm:flex-row sm:flex-wrap`} style={e.style}>
            {['Custom sourcing per project', 'Conflict-checked every time', 'Profiles in 24–48 hours'].map((t) => (
              <li key={t} className="flex items-center gap-2 whitespace-nowrap text-[14.5px] text-body">
                <span className="h-[5px] w-[5px] shrink-0 rounded-full bg-emerald-500" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-in" style={{ '--hero-delay': '0.2s', '--hero-y': '0px' }}>
          <NetworkMap />
        </div>
      </div>
      {/* The ticker sits on the hero background itself: no band, no rules, just the words moving. */}
      <div className="relative mt-10 pb-4 sm:mt-12">
        <Marquee
          items={[
            'ESOMAR-aligned research standards',
            'Expert calls & IDIs',
            'B2B surveys',
            'Custom sourcing per project',
            'Focus groups',
            'NDA-governed engagements',
            'Commercial due diligence',
            'B2B niche recruitment',
            'Diary studies & ethnography',
            'AI domain experts',
          ]}
        />
      </div>
    </section>
  )
}

/* ─────────────── For clients / For experts ─────────────── */

const sides = [
  {
    to: '/clients',
    kicker: 'For clients',
    title: 'The right expert for your question.',
    points: ['Recruited from scratch for each brief', 'Screened against your questions', 'Compliance built into every step', 'One team from scoping to scheduling'],
    cta: 'How we work with clients',
  },
  {
    to: '/experts',
    kicker: 'For experts',
    title: 'Your experience has a market rate.',
    points: ['Paid for every engagement', 'Accept only what interests you', 'Clear confidentiality rules', 'Free to join, no minimum commitment'],
    cta: 'How it works for experts',
  },
]

function TwoSides() {
  return (
    <Section>
      <div className="grid gap-5 lg:grid-cols-2">
        {sides.map((c, i) => (
          <Reveal key={c.to} delay={i * 0.1}>
            <SpotlightCard className="h-full">
              <Link href={c.to} className="flex h-full flex-col p-8 sm:p-10">
                <Eyebrow as="p">{c.kicker}</Eyebrow>
                <h2 className="mt-5 text-[25px] font-semibold leading-tight sm:text-[28px]">{c.title}</h2>
                <ul className="mt-6 space-y-3">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-3 text-[16px] leading-snug text-body">
                      <span className="mt-[9px] h-1 w-3 shrink-0 rounded-full bg-emerald-400" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-9 text-[15px] font-medium text-fg">
                  {c.cta}
                  <ArrowUpRight size={16} className="text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </span>
              </Link>
            </SpotlightCard>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* ─────────────── How it works (the Savnec standard) ───────────────
   One section for the process: the numbers, a live sample project that stays in view on the
   left, and the four steps arriving one by one on the right as the page scrolls. */

const steps = [
  ['Brief', 'Share the question, the profiles you need and any restrictions.'],
  ['Recruit', 'We source candidates for your brief through direct outreach.'],
  ['Screen', 'Each candidate answers your screener and clears a conflict check.'],
  ['Speak', 'Choose who to speak with. We schedule and handle the rest.'],
]

function statBorders(i) {
  return ['', 'border-l pl-5 sm:pl-7', 'border-t lg:border-l lg:border-t-0 lg:pl-7', 'border-l border-t pl-5 sm:pl-7 lg:border-t-0'][i] || ''
}

function HowItWorks() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 70%', 'end 55%'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <Section tone="navy" id="how-it-works">
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end lg:gap-16">
        <SectionHeading eyebrow="The Savnec standard" title="Four steps. One accountable team." />
        <Reveal delay={0.1}>
          <p className="max-w-xl text-[17px] leading-relaxed text-body">
            Recruited from scratch for every project, with one team from first brief to final call.
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div className="mt-10 grid grid-cols-2 border-y border-line/[0.12] lg:grid-cols-4">
          {site.stats.map((st, i) => {
            const m = String(st.value).match(/^(\D*)(\d+)(.*)$/)
            return (
              <div key={st.label} className={`border-line/[0.12] py-6 ${statBorders(i)}`}>
                <p className="text-[38px] font-semibold leading-none tracking-tight text-fg sm:text-[46px]">
                  {m ? <Counter prefix={m[1]} to={Number(m[2])} suffix={m[3]} /> : st.value}
                </p>
                <p className="mt-2.5 text-[14.5px] leading-snug text-body">{st.label}</p>
              </div>
            )
          })}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-12 lg:mt-14 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <EngagementConsole />
          </Reveal>
          <Reveal delay={0.1} className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <Button to="/request-trial">Start a trial project</Button>
            <span className="text-[14.5px] text-muted">First profiles usually within 24–48 hours.</span>
          </Reveal>
        </div>

        <div ref={ref} className="relative pl-10 sm:pl-11">
          <div className="absolute bottom-3 left-[11px] top-3 w-px bg-white/10" />
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-3 left-[11px] top-3 w-px origin-top bg-gradient-to-b from-emerald-300 to-emerald-500"
          />
          <ol className="space-y-6">
            {steps.map(([t, b], i) => (
              <Reveal as="li" key={t} delay={0.05} y={28} className="relative">
                <span className="absolute -left-10 top-8 flex h-[23px] w-[23px] sm:-left-11 items-center justify-center rounded-full border border-emerald-400/60 bg-page">
                  <span className="h-2 w-2 rounded-full bg-tick" />
                </span>
                <div className="rounded-2xl border border-line/[0.1] bg-white/[0.035] p-6 sm:p-8">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mono text-[13px] font-medium text-accent">0{i + 1}</span>
                    <h3 className="text-[24px] font-semibold sm:text-[26px]">{t}</h3>
                  </div>
                  <p className="mt-3 text-[16px] leading-relaxed text-body">{b}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}

/* ─────────────── Our services ─────────────── */

function Services() {
  return (
    <Section tone="card" className="border-y border-line/[0.07]">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading title="Our services" intro="One recruiting and compliance standard behind every service." />
        <Reveal>
          <Button to="/services" variant="ghost">
            All services
          </Button>
        </Reveal>
      </div>
      <div className="mt-9 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
        {formats.map((f, i) => (
          <Reveal key={f.title} delay={(i % 3) * 0.05}>
            <Link href={`/services#${f.id}`} className="group block h-full border-t border-line/[0.12] py-6 transition-colors duration-300 hover:border-emerald-500">
              <span className="flex items-center justify-between gap-3 text-[19px] font-semibold text-fg transition-colors duration-300 group-hover:text-accent">
                {f.title}
                <ArrowUpRight size={17} className="shrink-0 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </span>
              <span className="mt-2 block text-[15.5px] leading-snug text-muted">{f.short}</span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

/* ─────────────── Who we serve ─────────────── */

function WhoWeServe() {
  return (
    <Section>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <SectionHeading title="Who we serve" intro="Teams who need first-hand answers." />
        </div>
        <ul className="divide-y divide-line/[0.1] border-y border-line/[0.1]">
          {segments.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.05}>
              <div className="group grid gap-1.5 py-6 sm:grid-cols-[1fr_1.2fr] sm:items-baseline sm:gap-8">
                <h3 className="text-[20px] font-semibold leading-snug">{s.title}</h3>
                <p className="text-[16px] leading-relaxed text-muted">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </Section>
  )
}

/* ─────────────── Compliance ─────────────── */

function ComplianceBand() {
  const items = ['Identity and employment verified', 'Client restricted lists honored', 'Confidentiality terms on every engagement', 'No MNPI, no exceptions']
  return (
    <Section tone="navy">
      <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow as="h2">Compliance</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <p className="mt-5 max-w-xl text-[21px] font-medium leading-[1.5] text-white sm:text-[24px]">
              Every expert is checked for conflicts, bound by confidentiality and reminded of their obligations before each
              engagement. Aligned with ESOMAR and ICC research standards.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mt-8">
              <Button to="/compliance" variant="ghost">
                Read our framework
              </Button>
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <ul className="divide-y divide-line/[0.12] border-y border-line/[0.12]">
            {items.map((t) => (
              <li key={t} className="flex items-center gap-4 py-5">
                <Check size={18} className="shrink-0 text-accent" />
                <span className="text-[17px] font-medium text-fg">{t}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}

/* ─────────────── Industries ─────────────── */

function Industries() {
  return (
    <Section tone="sunk">
      <div className="grid gap-9 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-16">
        <div>
          <SectionHeading title="Industries we cover" intro="Recruiters who specialize by sector." />
          <Reveal delay={0.1}>
            <Link href="/industries" className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-accent">
              <span className="link-underline">See coverage by industry</span>
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <ul className="flex flex-wrap gap-2.5">
            {industries.map(({ id, name }) => (
              <li key={id}>
                <Link
                  href={`/industries#${id}`}
                  className="inline-flex items-center rounded-full border border-line/[0.12] bg-card px-4 py-2.5 text-[15.5px] font-medium text-fg shadow-[0_1px_2px_rgba(10,25,47,0.04)] transition-colors duration-300 hover:border-emerald-500/60 hover:text-accent sm:px-5 sm:py-3 sm:text-[16.5px]"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </Section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TwoSides />
      <Testimonials />
      <HowItWorks />
      <Services />
      <WhoWeServe />
      <ComplianceBand />
      <Industries />
      <CtaBand />
    </>
  )
}
