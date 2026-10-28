'use client'

import Link from 'next/link'
import {
  ArrowUpRight,
  Clock,
  Clock3,
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
  Filter,
  Target,
  Wallet,
  MessageSquareText,
} from 'lucide-react'
import { Button, Eyebrow, Reveal, SectionHeading, SpotlightCard, GlowBackdrop, Counter, Section, heroIn } from '@/components/ui'
import { NetworkMap, EngagementConsole, Marquee, CtaBand } from '@/components/Visuals'
import { Testimonials } from '@/components/Proof'
import { industries, segments, formats } from '@/data/content'
import { site } from '@/config/site'

const formatIcons = [Phone, ListChecks, Users, Network, NotebookPen, Brain]

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

const sides = [
  {
    to: '/clients',
    kicker: 'For clients',
    title: 'Less chasing. Better calls.',
    cta: 'How we work with clients',
    items: [
      [Clock3, 'Your team’s hours back', 'We handle sourcing, screening, scheduling and payment.'],
      [Filter, 'Fewer wasted calls', 'Screener answers arrive with every profile, so you book the people who fit.'],
      [ShieldCheck, 'A clean compliance trail', 'Conflict checks and engagement records kept for every project.'],
    ],
  },
  {
    to: '/experts',
    kicker: 'For experts',
    title: 'Respect for your time.',
    cta: 'How it works for experts',
    items: [
      [Target, 'Only relevant requests', 'You hear from us when a project genuinely matches your background.'],
      [Wallet, 'Fair, agreed pay', 'Your rate is agreed before the engagement and paid when it is done.'],
      [MessageSquareText, 'Clear rules up front', 'You know what you can and can’t discuss before the call starts.'],
    ],
  },
]

function TwoSides() {
  return (
    <Section>
      <div className="grid gap-5 lg:grid-cols-2">
        {sides.map((side, k) => (
          <Reveal key={side.kicker} delay={k * 0.08}>
            <SpotlightCard className="h-full">
              <Link href={side.to} className="flex h-full flex-col p-7 sm:p-9">
                <Eyebrow as="p">{side.kicker}</Eyebrow>
                <h2 className="mt-4 text-[26px] font-semibold leading-tight sm:text-[30px]">{side.title}</h2>
                <ul className="mt-7 space-y-5">
                  {side.items.map(([Icon, t, b]) => (
                    <li key={t} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-accent">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="block text-[16px] font-semibold text-fg">{t}</span>
                        <span className="mt-0.5 block text-[15px] leading-relaxed text-muted">{b}</span>
                      </span>
                    </li>
                  ))}
                </ul>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-[15px] font-medium text-fg">
                  {side.cta}
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

function Standard() {
  return (
    <Section tone="navy">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            eyebrow="The Savnec standard"
            title="Every project is recruited from scratch."
            intro="Our recruiters find the companies and roles that hold the answer, approach the right people directly and screen them against your questions."
          />
          <Reveal delay={0.15}>
            <div className="mt-9 grid grid-cols-2 gap-x-6 gap-y-7 border-t border-line/[0.12] pt-8">
              {site.stats.map((st) => {
                const m = String(st.value).match(/^(\D*)(\d+)(.*)$/)
                return (
                  <div key={st.label}>
                    <p className="text-[38px] font-semibold leading-none tracking-tight text-fg sm:text-[42px]">
                      {m ? <Counter prefix={m[1]} to={Number(m[2])} suffix={m[3]} /> : st.value}
                    </p>
                    <p className="mt-2 text-[14.5px] text-body">{st.label}</p>
                  </div>
                )
              })}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <EngagementConsole />
        </Reveal>
      </div>
    </Section>
  )
}

const steps = [
  ['Brief', 'Tell us the question, the profiles you want and any restrictions. Ten minutes is enough.'],
  ['Recruit', 'We source candidates for your brief specifically, through direct outreach.'],
  ['Screen', 'Each candidate answers your screener and clears a conflict check before you see them.'],
  ['Speak', 'Pick the profiles you want. We schedule the sessions and handle everything after.'],
]

function Process() {
  return (
    <Section>
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading title="How it works" intro="One team from first brief to final call. No hand-offs, no ticket queue." />
        <Reveal>
          <Button to="/request-trial" variant="ghost">
            Start a trial project
          </Button>
        </Reveal>
      </div>
      <div className="relative mt-10">
        <div aria-hidden="true" className="absolute left-[8%] right-[8%] top-[39px] hidden h-px bg-gradient-to-r from-emerald-400/0 via-emerald-500/40 to-emerald-400/0 lg:block" />
      <ol className="relative grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map(([t, b], i) => (
          <Reveal as="li" key={t} delay={i * 0.07} className="relative">
            <div className="flex h-full gap-4 rounded-2xl border border-line/[0.09] bg-card p-5 shadow-[0_1px_2px_rgba(10,25,47,0.04)] sm:flex-col sm:gap-0 sm:p-6">
              <span className="relative z-10 flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-emerald-500/40 bg-emerald-500/10 font-mono text-[12.5px] font-medium text-accent">
                {i + 1}
              </span>
              <div>
                <h3 className="text-[19px] font-semibold sm:mt-5 sm:text-[20px]">{t}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-muted sm:mt-2">{b}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
      </div>
    </Section>
  )
}

function Formats() {
  return (
    <Section tone="card" className="border-y border-line/[0.07]">
      <SectionHeading title="Available formats" intro="The same recruiting, screening and compliance standards across every format." />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {formats.map((f, i) => {
          const Icon = formatIcons[i]
          return (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <Link
                href={`/clients#${f.id}`}
                className="group flex h-full gap-4 rounded-2xl border border-line/[0.09] bg-page/60 p-6 transition-colors duration-300 hover:border-emerald-500/40 hover:bg-page"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-accent">
                  <Icon size={19} />
                </span>
                <span>
                  <span className="flex items-center gap-1.5 text-[18px] font-semibold text-fg">
                    {f.title}
                    <ArrowUpRight size={15} className="text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </span>
                  <span className="mt-1.5 block text-[15px] leading-relaxed text-muted">{f.body}</span>
                </span>
              </Link>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function ComplianceBand() {
  const items = [
    [UserCheck, 'Identity and employment verified'],
    [Ban, 'Client restricted lists honored'],
    [FileKey, 'Confidentiality terms on every engagement'],
    [Lock, 'No MNPI, no exceptions'],
  ]
  return (
    <Section tone="navy">
      <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-16">
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
        <div className="grid gap-3 sm:grid-cols-2">
          {items.map(([Icon, t], i) => (
            <Reveal key={t} delay={i * 0.07}>
              <div className="flex h-full items-start gap-3 rounded-2xl border border-line/[0.12] bg-sunk/60 p-5">
                <Icon size={19} className="mt-0.5 shrink-0 text-accent" />
                <span className="text-[16px] font-medium leading-snug text-fg">{t}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

function WhoWeServe() {
  return (
    <Section>
      <SectionHeading title="Who we serve" />
      <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {segments.map((s, i) => (
          <Reveal key={s.title} delay={i * 0.06}>
            <div className="h-full rounded-2xl border-t-2 border-emerald-500/70 bg-card p-6 shadow-[0_1px_2px_rgba(10,25,47,0.04),0_14px_32px_-26px_rgba(10,25,47,0.3)]">
              <h3 className="text-[19px] font-semibold leading-snug">{s.title}</h3>
              <p className="mt-2.5 text-[15px] leading-relaxed text-muted">{s.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}

function IndustryGrid() {
  return (
    <Section tone="sunk">
      <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading title="Industries we cover" />
        <Reveal>
          <Button to="/industries" variant="ghost">
            All industries
          </Button>
        </Reveal>
      </div>
      <div className="mt-9 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line/[0.1] bg-fg/[0.08] sm:grid-cols-3 lg:grid-cols-5">
        {industries.map(({ id, name, icon: Icon }, i) => (
          <Reveal key={id} delay={i * 0.03} y={0}>
            <Link
              href={`/industries#${id}`}
              className="group relative flex h-full min-h-[136px] flex-col justify-between gap-5 bg-card p-5 transition-colors duration-500 hover:bg-page sm:p-6"
            >
              <Icon size={24} className="text-accent" />
              <span className="text-[16px] font-semibold leading-snug text-fg sm:text-[17px]">{name}</span>
              <ArrowUpRight size={16} className="absolute right-5 top-5 text-accent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </Link>
          </Reveal>
        ))}
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
      <Standard />
      <Process />
      <Formats />
      <ComplianceBand />
      <WhoWeServe />
      <IndustryGrid />
      <CtaBand />
    </>
  )
}
