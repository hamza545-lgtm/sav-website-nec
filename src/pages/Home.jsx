import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import {
  ArrowUpRight,
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
import { Button, Eyebrow, Reveal, SectionHeading, SpotlightCard, GlowBackdrop, Counter, Section, ease, usePageSeo } from '../components/ui.jsx'
import { NetworkMap, EngagementConsole, Marquee, CtaBand } from '../components/Visuals.jsx'
import { industries, segments, formats } from '../data/content.js'
import { site } from '../config/site.js'
import { Impact, Testimonials } from '../components/Proof.jsx'

const formatIcons = [Phone, ListChecks, Users, Network, NotebookPen, Brain]

const steps = [
  {
    n: '01',
    title: 'Brief',
    body: 'Tell us the question, the profiles you want and any restrictions. Ten minutes on a call or a short form is enough.',
  },
  {
    n: '02',
    title: 'Recruit',
    body: 'Our team sources candidates for your brief specifically, through direct outreach across companies, roles and regions.',
  },
  {
    n: '03',
    title: 'Screen',
    body: 'Every candidate answers your screener, confirms employment history and clears a conflict check before you see them.',
  },
  {
    n: '04',
    title: 'Speak',
    body: 'Pick the profiles you want. We schedule the calls, surveys or sessions and handle everything after.',
  },
]

function Hero() {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pt-44">
      <GlowBackdrop />
      <div className="container-site relative grid items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
        <div>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease }}>
            <Eyebrow>Expert network · Primary research</Eyebrow>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.04, ease }}
            className="mt-7 text-[46px] font-semibold leading-[0.98] tracking-tightest sm:text-[76px]"
          >
            Primary research at the{' '}
            <span className="serif-accent text-gradient pr-1">speed of the deal.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease }}
            className="mt-8 max-w-xl text-[18px] leading-relaxed text-muted"
          >
            Savnec connects market research, investment and corporate strategy teams with the operators,
            buyers and specialists who already know the answer. Recruited for your question, screened
            before you see them, scheduled around your deadline.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease }}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button to="/request-trial">Request a Trial</Button>
            <Button to="/join" variant="ghost">
              Join as an Expert
            </Button>
          </motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-12 grid max-w-xl grid-cols-1 gap-4 border-t border-line/[0.1] pt-8 sm:grid-cols-3"
          >
            {[
              [Clock, 'First profiles within 48 hours'],
              [Crosshair, 'Custom sourcing for each project'],
              [ShieldCheck, 'Conflict-checked every time'],
            ].map(([Icon, t]) => (
              <li key={t} className="flex items-start gap-2.5 text-[13.5px] leading-snug text-body">
                <Icon size={16} className="mt-0.5 shrink-0 text-accent" />
                {t}
              </li>
            ))}
          </motion.ul>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1, ease }}
        >
          <NetworkMap />
        </motion.div>
      </div>
    </section>
  )
}

function TwoSides() {
  const cards = [
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
  return (
    <Section>
      <div className="grid gap-6 lg:grid-cols-2">
        {cards.map((c, i) => (
          <Reveal key={c.to} delay={i * 0.1}>
            <SpotlightCard className="h-full">
              <Link to={c.to} className="flex h-full flex-col p-8 sm:p-10">
                <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{c.kicker}</span>
                <h3 className="mt-5 text-[30px] font-semibold leading-tight sm:text-[36px]">{c.title}</h3>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {c.points.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-body">
                      <span className="mt-2 h-1 w-3 shrink-0 rounded-full bg-emerald-400" />
                      {p}
                    </li>
                  ))}
                </ul>
                <span className="mt-10 inline-flex items-center gap-2 text-[14px] text-fg">
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

function ConsoleSection() {
  return (
    <Section className="overflow-hidden">
      <div className="grid items-center gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="The Savnec standard"
            title={
              <>
                Recruited for your question. <span className="serif-accent text-accent">Every time.</span>
              </>
            }
            intro="Each project starts with your brief. Our recruiters identify the companies and roles that hold the answer, approach the right people directly and screen them against your questions."
          />
          <Reveal delay={0.15}>
            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line/[0.1] pt-8">
              {site.stats.map((st) => {
                const m = String(st.value).match(/^(\D*)(\d+)(.*)$/)
                return (
                  <div key={st.label}>
                    <p className="text-[40px] font-semibold tracking-tight text-fg">
                      {m ? <Counter prefix={m[1]} to={Number(m[2])} suffix={m[3]} /> : st.value}
                    </p>
                    <p className="mt-1 text-[13.5px] text-muted">{st.label}</p>
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

function Process() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 75%', 'end 60%'] })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="lg:sticky lg:top-32 lg:self-start">
          <SectionHeading
            eyebrow="How it works"
            title="Four steps. One accountable team."
            intro="You deal with the same people from first brief to final call. No hand-offs, no ticket queue."
          />
          <Reveal delay={0.2}>
            <div className="mt-10">
              <Button to="/request-trial">Start a trial project</Button>
            </div>
          </Reveal>
        </div>
        <div ref={ref} className="relative pl-10">
          <div className="absolute bottom-2 left-[11px] top-2 w-px bg-fg/10" />
          <motion.div style={{ scaleY }} className="absolute bottom-2 left-[11px] top-2 w-px origin-top bg-gradient-to-b from-emerald-300 to-emerald-600" />
          <div className="space-y-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.05}>
                <div className="relative">
                  <span className="absolute -left-10 top-8 flex h-[23px] w-[23px] items-center justify-center rounded-full border border-emerald-400/50 bg-page">
                    <span className="h-2 w-2 rounded-full bg-tick" />
                  </span>
                  <SpotlightCard className="p-8">
                    <div className="flex items-baseline gap-4">
                      <span className="font-mono text-[12px] text-accent">{s.n}</span>
                      <h3 className="text-[24px] font-semibold">{s.title}</h3>
                    </div>
                    <p className="mt-3 text-[15.5px] leading-relaxed text-muted">{s.body}</p>
                  </SpotlightCard>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

function Formats() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Formats"
        title="However you need to hear it."
        intro="One call to test a hypothesis, or a full program of interviews, surveys and groups to build the picture. Same recruiting, same screening, same standards."
      />
      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {formats.map((f, i) => {
          const Icon = formatIcons[i]
          return (
            <Reveal key={f.title} delay={(i % 3) * 0.06}>
              <SpotlightCard className="h-full">
                <Link to={`/clients#${f.id}`} className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-accent">
                      <Icon size={19} />
                    </span>
                    <span className="font-mono text-[11px] text-muted">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 text-[19px] font-semibold">{f.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-muted">{f.body}</p>
                </Link>
              </SpotlightCard>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}

function WhoWeServe() {
  return (
    <Section>
      <div className="grid gap-16 lg:grid-cols-2">
        <SectionHeading
          eyebrow="Who we serve"
          title={
            <>
              Built for teams who are paid to be <span className="serif-accent text-accent">right.</span>
            </>
          }
        />
        <div className="divide-y divide-line/[0.1] border-y border-line/[0.1]">
          {segments.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.06}>
              <div className="group grid grid-cols-[48px_1fr] gap-4 py-7">
                <span className="font-mono text-[12px] text-muted transition-colors group-hover:text-accent">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-[20px] font-semibold transition-colors group-hover:text-accent">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-muted">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}

function IndustryGrid() {
  return (
    <Section>
      <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
        <SectionHeading eyebrow="Coverage" title="Ten verticals. Recruited by people who know them." />
        <Reveal>
          <Button to="/industries" variant="ghost">
            All industries
          </Button>
        </Reveal>
      </div>
      <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line/[0.1] bg-fg/[0.07] sm:grid-cols-3 lg:grid-cols-5">
        {industries.map(({ id, name, icon: Icon }, i) => (
          <motion.div
            key={id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04, duration: 0.6 }}
          >
            <Link
              to={`/industries#${id}`}
              className="group relative flex h-full min-h-[170px] flex-col justify-between bg-page p-6 transition-colors duration-500 hover:bg-card"
            >
              <Icon size={22} className="text-muted transition-colors duration-500 group-hover:text-accent" />
              <span className="text-[15px] leading-snug text-body group-hover:text-fg">{name}</span>
              <ArrowUpRight size={15} className="absolute right-5 top-5 text-accent opacity-0 transition-all duration-300 group-hover:opacity-100" />
            </Link>
          </motion.div>
        ))}
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
    <Section>
      <div className="theme-dark relative overflow-hidden rounded-[28px] border border-line/[0.11] bg-page p-8 sm:p-14">
        <div className="glow-blob absolute -left-48 -top-48 h-[520px] w-[520px] opacity-70" />
        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <Eyebrow>Compliance</Eyebrow>
            <h2 className="mt-5 text-[34px] font-semibold leading-[1.08] sm:text-[44px]">
              Diligence on the people <span className="serif-accent text-accent">before</span> diligence on the deal.
            </h2>
            <p className="mt-5 max-w-lg text-[16px] leading-relaxed text-muted">
              Every expert is checked for conflicts, bound by confidentiality and reminded of their
              obligations before each engagement. Aligned with ESOMAR and ICC research standards.
            </p>
            <div className="mt-8">
              <Button to="/compliance" variant="ghost">
                Read our framework
              </Button>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map(([Icon, t], i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-line/[0.1] bg-sunk/70 p-5">
                  <Icon size={18} className="mt-0.5 shrink-0 text-accent" />
                  <span className="text-[14.5px] leading-snug text-body">{t}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default function Home() {
  usePageSeo('/')
  return (
    <>
      <Hero />
      <div className="border-y border-line/[0.1] bg-card">
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
      <ConsoleSection />
      <Impact />
      <Testimonials />
      <Process />
      <Formats />
      <WhoWeServe />
      <IndustryGrid />
      <ComplianceBand />
      <CtaBand />
    </>
  )
}
