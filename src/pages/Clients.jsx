import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, Clock, MessageSquareText, ShieldCheck, Target, Repeat, Phone, ListChecks, Users, Network, PenLine, Brain } from 'lucide-react'
import { PageHero, Button, Section, SectionHeading, Reveal, SpotlightCard, Eyebrow, useSeo } from '../components/ui.jsx'
import { CtaBand } from '../components/Visuals.jsx'
import { formats } from '../data/content.js'

const formatIcons = [Phone, ListChecks, Users, Network, PenLine, Brain]

const useCases = {
  'Private Equity': {
    lead: 'From first screen to investment committee.',
    items: [
      'Customer calls to test retention, pricing power and switching risk',
      'Former employees on operations, culture and management quality',
      'Competitor and channel checks to validate market share claims',
      'Operator advisors for post-close value creation plans',
    ],
  },
  Consulting: {
    lead: 'Insider depth on a case-team timeline.',
    items: [
      'Rapid hypothesis testing in week one of an engagement',
      'Benchmarks on cost, process and organization design',
      'Buyer interviews for market entry and growth strategy',
      'Survey programs to size markets and segment customers',
    ],
  },
  'Corporate Strategy': {
    lead: 'An outside view before capital moves.',
    items: [
      'Adjacent-market scans ahead of build, buy or partner decisions',
      'Voice-of-customer research on unmet needs',
      'Competitive intelligence from former insiders, within the rules',
      'Target screening and integration lessons for corporate development',
    ],
  },
  'Market Research': {
    lead: 'B2B respondents your panel can’t reach.',
    items: [
      'Recruitment of senior and niche professional audiences',
      'IDIs and focus groups to your screener and quota',
      'Quant sample top-ups for hard-to-fill cells',
      'Multi-country fieldwork support',
    ],
  },
  'AI Data': {
    lead: 'Specialists who can judge what a model gets wrong.',
    items: [
      'Licensed and credentialed professionals for evaluation tasks',
      'Domain experts for rubric writing and reasoning data',
      'Specialist review for annotation quality control',
      'Scaled cohorts recruited by discipline and seniority',
    ],
  },
}

const commitments = [
  [Clock, 'Speed you can plan around', 'First profiles typically within 24 hours of a scoped brief. If a request needs longer, you hear that on day one.'],
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
          <span className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-steel">Expert profile</span>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-400/40 bg-emerald-500/10 px-2.5 py-1 text-[11px] text-emerald-200">
            <ShieldCheck size={12} /> Cleared
          </span>
        </div>
        <div className="mt-6 flex items-center gap-4">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-navy-700 font-mono text-[13px] text-white">
            DK
          </span>
          <div>
            <p className="text-[17px] font-semibold text-white">Former Director of Procurement</p>
            <p className="text-[13.5px] text-steel">Global packaging manufacturer · Left 2025 · 16 years</p>
          </div>
        </div>
        <div className="mt-7 space-y-4 border-t border-white/[0.07] pt-6">
          <div>
            <p className="text-[12px] uppercase tracking-wider text-steel">Screener · Q1</p>
            <p className="mt-1 text-[14px] text-ink">Which resin suppliers did you personally negotiate with?</p>
            <p className="mt-1.5 flex gap-2 text-[14px] text-white">
              <MessageSquareText size={15} className="mt-0.5 shrink-0 text-emerald-300" />
              Led annual contracts with three of the top five, about $140M in spend.
            </p>
          </div>
          <div>
            <p className="text-[12px] uppercase tracking-wider text-steel">Screener · Q2</p>
            <p className="mt-1 text-[14px] text-ink">How recently did you manage supplier pricing?</p>
            <p className="mt-1.5 flex gap-2 text-[14px] text-white">
              <MessageSquareText size={15} className="mt-0.5 shrink-0 text-emerald-300" />
              Through Q3 2025, including two mid-contract renegotiations.
            </p>
          </div>
        </div>
        <div className="mt-6 flex flex-wrap gap-2">
          {['Employment verified', 'No current conflicts', 'Terms accepted'].map((t) => (
            <span key={t} className="rounded-full border border-white/10 px-3 py-1 text-[11.5px] text-ink">
              {t}
            </span>
          ))}
        </div>
        <p className="mt-6 text-[11.5px] text-steel/70">Illustrative profile.</p>
      </div>
    </div>
  )
}

export default function Clients() {
  useSeo('For Clients', 'Expert calls, surveys and custom recruitment for private equity, consulting, corporate strategy, market research and AI data teams.')
  const tabs = Object.keys(useCases)
  const [tab, setTab] = useState(tabs[0])
  return (
    <>
      <PageHero
        eyebrow="For clients"
        title={
          <>
            Your question, answered by someone who was <span className="serif-accent text-emerald-300">in the room.</span>
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
                  <li key={t} className="flex items-center gap-3 text-[15px] text-ink">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-300">
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

      <Section>
        <SectionHeading eyebrow="Use cases" title="Where clients put us to work." />
        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-wrap gap-2">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`relative rounded-full px-5 py-2.5 text-[14px] transition-colors ${tab === t ? 'text-white' : 'text-steel hover:text-white'}`}
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
                    className="rounded-2xl border border-white/[0.07] bg-navy-950/40 p-5 text-[15px] leading-relaxed text-ink"
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
        <SectionHeading eyebrow="Formats" title="Pick the format. We handle the rest." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {formats.map((f, i) => {
            const Icon = formatIcons[i]
            return (
              <Reveal key={f.title} delay={(i % 3) * 0.06}>
                <SpotlightCard className="h-full p-7">
                  <Icon size={20} className="text-emerald-300" />
                  <h3 className="mt-5 text-[19px] font-semibold">{f.title}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-steel">{f.body}</p>
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Our commitments" title="What you can hold us to." align="center" />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {commitments.map(([Icon, t, b], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <SpotlightCard className="h-full p-8">
                <div className="flex items-start gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-emerald-400/25 bg-emerald-500/10 text-emerald-300">
                    <Icon size={19} />
                  </span>
                  <div>
                    <h3 className="text-[20px] font-semibold">{t}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-steel">{b}</p>
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
            Judge us on <span className="serif-accent text-emerald-300">one real brief.</span>
          </>
        }
        body="Send a live question. We will scope it, recruit for it and show you the shortlist. You decide if we have earned the next one."
      />
    </>
  )
}
