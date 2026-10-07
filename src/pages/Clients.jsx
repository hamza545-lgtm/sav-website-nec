import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Clock, MessageSquareText, ShieldCheck, Target, Repeat, Phone, ListChecks, Users, Network, NotebookPen, Brain } from 'lucide-react'
import { PageHero, Button, Section, SectionHeading, Reveal, SpotlightCard, Eyebrow, usePageSeo } from '../components/ui.jsx'
import { CtaBand } from '../components/Visuals.jsx'
import { formats, useCases } from '../data/content.js'
import { ucSlug } from '../components/Navbar.jsx'

const formatIcons = { 'expert-calls': Phone, 'b2b-surveys': ListChecks, 'focus-groups': Users, 'custom-recruitment': Network, ethnography: NotebookPen, 'ai-experts': Brain }

const formatDetail = {
  'expert-calls': { best: 'Depth, nuance, testing a hypothesis', length: '30 to 60 minutes, phone or video' },
  'b2b-surveys': { best: 'Comparing views across a defined audience', length: 'Short online questionnaire' },
  'focus-groups': { best: 'Reactions to concepts, messaging or products', length: '60 to 90 minute moderated session' },
  'custom-recruitment': { best: 'Agencies running their own fieldwork', length: 'Profiles to your screener and quota' },
  ethnography: { best: 'Seeing real workflows as they happen', length: 'Several days to a few weeks' },
  'ai-experts': { best: 'Evaluation and reasoning data in specialist fields', length: 'Task-based or ongoing cohorts' },
}

const commitments = [
  [Clock, 'Speed you can plan around', 'First profiles typically within 48 hours of a scoped brief. If a request needs longer, you hear that on day one.'],
  [Target, 'Relevance over volume', 'We send fewer, better profiles. Each one comes with screener answers so you can decide in minutes.'],
  [ShieldCheck, 'Compliance by default', 'Conflict checks, confidentiality terms and your restricted list apply to every engagement automatically.'],
  [Repeat, 'One team, start to finish', 'The person who scopes your project is the person who delivers it. No hand-offs, no ticket queue.'],
]

function ProfileCard() {
  return (
    <div className="relative">
      <div className="absolute -inset-6 rounded-[40px] bg-emerald-500/10 blur-3xl" />
      <div className="relative rounded-3xl p-7 glass">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">Expert profile</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-[11px] text-accent">
            <ShieldCheck size={12} /> Cleared
          </span>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-navy-700 font-mono text-[13px] text-white">
            DK
          </span>
          <div>
            <p className="text-[17px] font-semibold text-fg">Former Director of Procurement</p>
            <p className="text-[13.5px] text-muted">Global packaging manufacturer · Left 2025 · 16 years</p>
          </div>
        </div>
        <div className="mt-7 space-y-4 border-t border-line/[0.1] pt-6">
          <div>
            <p className="text-[12px] uppercase tracking-wider text-muted">Screener · Q1</p>
            <p className="mt-1 text-[14px] text-body">Which resin suppliers did you personally negotiate with?</p>
            <p className="mt-1.5 flex gap-2 text-[14px] text-fg">
              <MessageSquareText size={15} className="mt-0.5 shrink-0 text-accent" />
              Led annual contracts with three of the top five, about $140M in spend.
            </p>
          </div>
          <div>
            <p className="text-[12px] uppercase tracking-wider text-muted">Screener · Q2</p>
            <p className="mt-1 text-[14px] text-body">How recently did you manage supplier pricing?</p>
            <p className="mt-1.5 flex gap-2 text-[14px] text-fg">
              <MessageSquareText size={15} className="mt-0.5 shrink-0 text-accent" />
              Through Q3 2025, including two mid-contract renegotiations.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {['Employment verified', 'No current conflicts', 'Terms accepted'].map((t) => (
            <span key={t} className="rounded-full border border-line/[0.12] px-3 py-1 text-[11.5px] text-body">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function Clients() {
  usePageSeo('/clients')
  const tabs = Object.keys(useCases)
  const [tab, setTab] = useState(tabs[0])
  const { hash } = useLocation()
  useEffect(() => {
    const match = tabs.find((t) => `#${ucSlug(t)}` === hash)
    if (match) setTab(match)
  }, [hash])
  return (
    <>
      <PageHero
        eyebrow="For clients"
        title={
          <>
            Your question, answered by someone who was <span className="serif-accent text-accent">in the room.</span>
          </>
        }
        intro="We find the operators, buyers and specialists who can tell you what the data can't, then make sure they are the right people before you spend a minute with them."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/request-trial">Request a Trial</Button>
          <Button to="/compliance" variant="ghost">
            Our compliance framework
          </Button>
        </div>
      </PageHero>

      <Section id="formats">
        <SectionHeading
          eyebrow="Formats"
          title="Pick the format. We handle the rest."
          intro="Every format runs on the same recruiting, screening and compliance. Switch between them as your project moves from depth to breadth."
        />
        <div className="mt-14 grid gap-4 md:grid-cols-6">
          {formats.map((f, i) => {
            const Icon = formatIcons[f.id]
            const d = formatDetail[f.id]
            const lead = i === 0
            return (
              <Reveal key={f.id} delay={(i % 3) * 0.06} className={lead ? 'md:col-span-6' : i < 3 ? 'md:col-span-3' : 'md:col-span-2'}>
                <div id={f.id} className="h-full scroll-mt-28">
                  <SpotlightCard className={`h-full ${lead ? 'p-8 sm:p-10' : 'p-7'}`}>
                    <div className={lead ? 'grid gap-8 md:grid-cols-[1.2fr_1fr] md:items-center' : ''}>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-accent">
                            <Icon size={19} />
                          </span>
                          {lead && (
                            <span className="rounded-full border border-emerald-400/30 px-3 py-1 font-mono text-[10.5px] uppercase tracking-[0.18em] text-accent">
                              Most requested
                            </span>
                          )}
                        </div>
                        <h3 className={`mt-6 font-semibold ${lead ? 'text-[28px] sm:text-[32px]' : 'text-[20px]'}`}>{f.title}</h3>
                        <p className={`mt-2 leading-relaxed text-muted ${lead ? 'text-[16px]' : 'text-[14.5px]'}`}>{f.body}</p>
                      </div>
                      <dl className={`grid gap-3 text-[13.5px] ${lead ? '' : 'mt-6 border-t border-line/[0.1] pt-5'}`}>
                        <div className="flex gap-3">
                          <dt className="w-[72px] shrink-0 whitespace-nowrap pt-0.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">Best for</dt>
                          <dd className="text-body">{d.best}</dd>
                        </div>
                        <div className="flex gap-3">
                          <dt className="w-[72px] shrink-0 whitespace-nowrap pt-0.5 font-mono text-[10.5px] uppercase tracking-[0.14em] text-muted">Format</dt>
                          <dd className="text-body">{d.length}</dd>
                        </div>
                      </dl>
                    </div>
                  </SpotlightCard>
                </div>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="What lands in your inbox"
              title="Profiles you can decide on in minutes."
              intro="Every profile shows role, tenure and recency, plus the expert's own answers to your screening questions. You see why they qualify, not just that they do."
            />
            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-3">
                {['Anonymized until you choose to proceed', 'Answers to your screener, in their words', 'Conflict and restriction status on every profile'].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-[15px] text-body">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-accent">
                      <Check size={12} />
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

      <Section id="use-cases">
        {tabs.map((t) => (
          <span key={t} id={ucSlug(t)} className="absolute top-0" aria-hidden="true" />
        ))}
        <SectionHeading eyebrow="Who we serve" title="Where clients put us to work." />
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative rounded-full px-5 py-2.5 text-[14px] transition-colors ${tab === t ? 'text-fg' : 'text-muted hover:text-fg'}`}
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
        <div className="mt-8 min-h-[280px] rounded-3xl p-8 sm:p-12 glass">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
              className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]"
            >
              <div>
                <Eyebrow>{tab}</Eyebrow>
                <h3 className="mt-5 text-[30px] font-semibold leading-tight">{useCases[tab].lead}</h3>
              </div>
              <ul className="grid gap-4 sm:grid-cols-2">
                {useCases[tab].items.map((it, i) => (
                  <motion.li
                    key={it}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.06 * i }}
                    className="rounded-2xl border border-line/[0.1] bg-sunk/70 p-5 text-[15px] leading-relaxed text-body"
                  >
                    {it}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our commitments" title="What you can hold us to." align="center" />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {commitments.map(([Icon, t, b], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <SpotlightCard className="h-full p-8">
                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-accent">
                    <Icon size={19} />
                  </span>
                  <div>
                    <h3 className="text-[20px] font-semibold">{t}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted">{b}</p>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        eyebrow="Trial project"
        title={
          <>
            Judge us on <span className="serif-accent text-accent">one real brief.</span>
          </>
        }
        body="Send a live question. We will scope it, recruit for it and show you the shortlist. You decide if we have earned the next one."
      />
    </>
  )
}
