'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowUpRight,
  ArrowRight,
  Clock,
  Crosshair,
  ShieldCheck,
  Phone,
  ListChecks,
  Users,
  NotebookPen,
  Network,
  Brain,
  Lock,
  UserCheck,
  FileKey,
  Ban,
} from 'lucide-react'
import { Button, Eyebrow, Reveal, SectionHeading, SpotlightCard, GlowBackdrop, Counter, Section, heroIn } from '@/components/ui'
import { NetworkMap, EngagementConsole, Marquee, CtaBand } from '@/components/Visuals'
import { Testimonials } from '@/components/Proof'
import { industries, segments, formats } from '@/data/content'
import { site } from '@/config/site'

const formatIcons = [Phone, ListChecks, Users, Network, NotebookPen, Brain]

/* ─────────────── Hero ─────────────── */

function Hero() {
  const a = heroIn(0, 16)
  const b = heroIn(0.08, 30)
  const c = heroIn(0.2, 24)
  const d = heroIn(0.3, 20)
  const e = heroIn(0.45, 12)
  return (
    <section className="noise relative overflow-hidden pb-12 pt-32 sm:pb-14 sm:pt-40">
      <GlowBackdrop />
      <div className="container-site relative grid items-center gap-12 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <div className={a.className} style={a.style}>
            <Eyebrow>Expert network · Custom recruitment</Eyebrow>
          </div>
          <h1 className={`${b.className} mt-6 text-[46px] font-semibold leading-[0.98] tracking-tightest sm:text-[74px]`} style={b.style}>
            The central point for <span className="serif-accent text-gradient pr-1">expert sourcing.</span>
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
          <ul className={`${e.className} mt-10 grid max-w-xl grid-cols-1 gap-4 border-t border-line/[0.1] pt-7 sm:grid-cols-3`} style={e.style}>
            {[
              [Clock, 'First profiles within 48 hours'],
              [Crosshair, 'Custom sourcing for each project'],
              [ShieldCheck, 'Conflict-checked every time'],
            ].map(([Icon, t]) => (
              <li key={t} className="flex items-start gap-2.5 text-[14px] font-medium leading-snug text-fg/80">
                <Icon size={16} className="mt-0.5 shrink-0 text-accent" />
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="hero-in" style={{ '--hero-delay': '0.2s', '--hero-y': '0px' }}>
          <NetworkMap />
        </div>
      </div>
    </section>
  )
}

/* ─────────────── For clients / For experts ─────────────── */

const sides = [
  {
    to: '/clients',
    kicker: 'For clients',
    title: 'The right expert, not the available one.',
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
                <h2 className="mt-5 text-[28px] font-semibold leading-tight sm:text-[34px]">{c.title}</h2>
                <ul className="mt-7 grid gap-3 sm:grid-cols-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[15.5px] text-body">
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
  ['Brief', 'Tell us the question, the profiles you want and any restrictions. Ten minutes on a call or a short form is enough.'],
  ['Recruit', 'Our team sources candidates for your brief specifically, through direct outreach across companies, roles and regions.'],
  ['Screen', 'Every candidate answers your screener, confirms employment history and clears a conflict check before you see them.'],
  ['Speak', 'Pick the profiles you want. We schedule the calls, surveys or sessions and handle everything after.'],
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
            Every project is recruited from scratch for your brief, and you deal with the same people from first brief to final
            call. No hand-offs, no ticket queue.
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
            <span className="text-[14.5px] text-muted">First profiles usually within 48 hours.</span>
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
        <SectionHeading title="Our services" intro="The same recruiting, screening and compliance standards behind every one." />
        <Reveal>
          <Button to="/clients" variant="ghost">
            See service details
          </Button>
        </Reveal>
      </div>
      <div className="mt-9 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
        {formats.map((f, i) => {
          const Icon = formatIcons[i]
          return (
            <Reveal key={f.title} delay={(i % 3) * 0.05}>
              <Link href={`/clients#${f.id}`} className="group block h-full border-t border-line/[0.12] py-6 transition-colors duration-300 hover:border-emerald-500">
                <span className="flex items-center gap-3">
                  <Icon size={20} className="shrink-0 text-accent" />
                  <span className="text-[19px] font-semibold text-fg transition-colors duration-300 group-hover:text-accent">{f.title}</span>
                </span>
                <span className="mt-2.5 block text-[15.5px] leading-relaxed text-muted">{f.body}</span>
              </Link>
            </Reveal>
          )
        })}
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
          <SectionHeading title="Who we serve" intro="Teams who need first-hand answers from the people closest to a market." />
        </div>
        <ul className="divide-y divide-line/[0.1] border-y border-line/[0.1]">
          {segments.map((s, i) => (
            <Reveal as="li" key={s.title} delay={i * 0.05}>
              <div className="group grid gap-2 py-7 sm:grid-cols-[1fr_1.25fr] sm:gap-8">
                <h3 className="text-[21px] font-semibold leading-snug transition-colors group-hover:text-accent">{s.title}</h3>
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
  const items = [
    [UserCheck, 'Identity and employment verified'],
    [Ban, 'Client restricted lists honored'],
    [FileKey, 'Confidentiality terms on every engagement'],
    [Lock, 'No MNPI, no exceptions'],
  ]
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
            {items.map(([Icon, t]) => (
              <li key={t} className="flex items-center gap-4 py-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-500/10 text-accent">
                  <Icon size={18} />
                </span>
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
          <SectionHeading title="Industries we cover" intro="Our recruiters specialize by sector, so they know which titles hold the answer." />
          <Reveal delay={0.1}>
            <Link href="/industries" className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium text-accent">
              <span className="link-underline">See coverage by industry</span>
              <ArrowRight size={16} />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <ul className="flex flex-wrap gap-2.5">
            {industries.map(({ id, name, icon: Icon }) => (
              <li key={id}>
                <Link
                  href={`/industries#${id}`}
                  className="inline-flex items-center gap-2.5 rounded-full border border-line/[0.12] bg-card px-4 py-2.5 text-[15.5px] font-medium text-fg shadow-[0_1px_2px_rgba(10,25,47,0.04)] transition-colors duration-300 hover:border-emerald-500/60 hover:text-accent sm:px-5 sm:py-3 sm:text-[16.5px]"
                >
                  <Icon size={18} className="shrink-0 text-accent" />
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
      <div className="border-y border-line/[0.08] bg-card">
        <Marquee
          items={[
            'ESOMAR-aligned research standards',
            'Expert calls & IDIs',
            '<24h typical response time',
            'B2B surveys',
            'Custom sourcing per project',
            'Focus groups',
            '100% NDA-governed engagements',
            'Commercial due diligence',
            'B2B niche recruitment',
            'Diary studies & ethnography',
            'AI domain experts',
          ]}
        />
      </div>
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
