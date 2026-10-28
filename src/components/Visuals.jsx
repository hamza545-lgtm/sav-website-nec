'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Check, LoaderCircle, ShieldCheck, Search, Filter, CalendarCheck, FileText, Clock } from 'lucide-react'
import { Button, Eyebrow, Reveal, useOnScreen } from './ui'
import { Mark } from './Logo'
import { site } from '@/config/site'

/* ─────────────── Network map (hero) ─────────────── */

const hub = { x: 300, y: 260 }
const nodes = [
  { x: 120, y: 96, label: 'Former CFO', sub: 'Payments' },
  { x: 470, y: 82, label: 'VP Procurement', sub: 'Industrials' },
  { x: 515, y: 270, label: 'Head of IT', sub: 'Health system' },
  { x: 455, y: 452, label: 'Category Director', sub: 'Grocery retail' },
  { x: 135, y: 430, label: 'Ex-GM', sub: 'Enterprise SaaS' },
  { x: 88, y: 262, label: 'Media Director', sub: 'Advertising' },
]
const dots = [
  [210, 60], [380, 40], [590, 150], [600, 380], [330, 500], [210, 500], [20, 360], [30, 160],
  [170, 190], [420, 180], [430, 350], [190, 340], [300, 120], [300, 410],
]

function curve(a, b) {
  const mx = (a.x + b.x) / 2
  const my = (a.y + b.y) / 2
  const dx = b.x - a.x
  const dy = b.y - a.y
  return `M${a.x},${a.y} Q${mx - dy * 0.18},${my + dx * 0.18} ${b.x},${b.y}`
}

// A glowing packet travelling from Savnec to the active expert.
function Pulse({ d }) {
  const ref = useRef(null)
  useLayoutEffect(() => {
    try {
      ref.current?.beginElement()
    } catch (e) {
      /* older browsers: the static line still shows */
    }
  }, [])
  return (
    <circle r="3.4" fill="#16916A" style={{ filter: 'drop-shadow(0 0 5px rgba(22,145,106,0.6))' }}>
      <animateMotion ref={ref} dur="1.4s" begin="indefinite" fill="freeze" path={d} />
    </circle>
  )
}

export function NetworkMap() {
  const [active, setActive] = useState(0)
  const ref = useRef(null)
  const visible = useOnScreen(ref)
  // Only cycle while the map is on screen, so it costs nothing once you scroll past.
  useEffect(() => {
    if (!visible) return
    const t = setInterval(() => setActive((a) => (a + 1) % nodes.length), 2200)
    return () => clearInterval(t)
  }, [visible])

  return (
    <div ref={ref} className="relative mx-auto aspect-[600/520] w-full max-w-[600px] [will-change:transform]" aria-hidden="true">
      <svg viewBox="0 0 600 520" className="absolute inset-0 h-full w-full" fill="none">
        <defs>
          <radialGradient id="hubGlow">
            <stop offset="0" stopColor="#2BC48A" stopOpacity="0.3" />
            <stop offset="1" stopColor="#2BC48A" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="lineGrad" x1="0" x2="1">
            <stop offset="0" stopColor="#16916A" stopOpacity="0.15" />
            <stop offset="0.5" stopColor="#16916A" stopOpacity="0.95" />
            <stop offset="1" stopColor="#16916A" stopOpacity="0.15" />
          </linearGradient>
        </defs>
        {[90, 160, 230].map((r, i) => (
          <circle key={r} cx={hub.x} cy={hub.y} r={r} stroke="#8892A0" strokeOpacity={0.12 - i * 0.03} strokeDasharray="2 6" />
        ))}
        {nodes.map((n, i) => (
          <g key={i}>
            <path d={curve(hub, n)} stroke="#0A192F" strokeOpacity="0.1" strokeWidth="1" />
            <motion.path
              d={curve(hub, n)}
              stroke="url(#lineGrad)"
              strokeWidth="1.6"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={active === i ? { pathLength: 1, opacity: 1 } : { pathLength: 1, opacity: 0.25 }}
              transition={{ pathLength: { duration: 1.2, delay: 0.3 + i * 0.12, ease: 'easeInOut' }, opacity: { duration: 0.6 } }}
            />
            {active === i && visible && <Pulse key={`pulse-${i}`} d={curve(hub, n)} />}
          </g>
        ))}
        <circle cx={hub.x} cy={hub.y} r="90" fill="url(#hubGlow)" />
      </svg>

      {dots.map(([x, y], i) => (
        <span
          key={i}
          className="twinkle absolute h-[3px] w-[3px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-steel"
          style={{ left: `${(x / 600) * 100}%`, top: `${(y / 520) * 100}%`, animationDuration: `${3 + (i % 4)}s`, animationDelay: `${i * 0.3}s` }}
        />
      ))}

      <div className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${(hub.x / 600) * 100}%`, top: `${(hub.y / 520) * 100}%` }}>
        <span className="pointer-events-none absolute left-1/2 top-1/2 h-[136px] w-[136px] -translate-x-1/2 -translate-y-1/2 overflow-hidden">
          <span className="absolute inset-0 m-auto h-14 w-14 animate-pulseRing rounded-2xl border border-emerald-500/40" />
        </span>
        <div className="relative rounded-2xl p-1.5 glass-blur shadow-[0_0_50px_-12px_rgba(22,145,106,0.45)]">
          <Mark size={52} />
        </div>
      </div>

      {nodes.map((n, i) => (
        <motion.div
          key={n.label}
          className="absolute"
          style={{ left: `${(n.x / 600) * 100}%`, top: `${(n.y / 520) * 100}%`, x: '-50%', y: '-50%' }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: active === i ? 1.06 : 1 }}
          transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
        >
          <div
            className={`flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[12px] transition-all duration-500 glass-blur ${
              active === i ? '!border-emerald-400/60 shadow-[0_0_30px_-6px_rgba(43,196,138,0.7)]' : ''
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${active === i ? 'bg-tick' : 'bg-muted/60'}`} />
            <span className="font-medium text-fg">{n.label}</span>
            <span className="hidden text-muted sm:inline">· {n.sub}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ─────────────── Engagement console ───────────────
   A sample project moving through its stages. Every row and every shortlist slot has a fixed
   size and stays on the page for the whole loop: states change by fading in place, never by
   adding or removing elements, so the panel never grows, shrinks or moves the page when the
   loop starts again. */

const stages = [
  { icon: FileText, label: 'Brief scoped', meta: 'Mid-market payments · US & UK' },
  { icon: Search, label: 'Sourcing', meta: '42 candidates contacted' },
  { icon: Filter, label: 'Screening', meta: '9 passed screener questions' },
  { icon: ShieldCheck, label: 'Compliance cleared', meta: 'Conflicts & restricted list checked' },
  { icon: CalendarCheck, label: 'Calls scheduled', meta: '3 calls confirmed this week' },
]

const profiles = [
  { initials: 'MR', role: 'Former VP, Merchant Acquiring', org: 'Tier-1 processor', yrs: '14 yrs' },
  { initials: 'AK', role: 'Head of Payments Ops', org: 'Regional bank', yrs: '9 yrs' },
  { initials: 'SL', role: 'Ex-Director, Partnerships', org: 'Fintech scale-up', yrs: '11 yrs' },
]

const LAST_STEP = stages.length + 2 // two beats on the finished state before starting over

export function EngagementConsole() {
  const [step, setStep] = useState(0)
  const ref = useRef(null)
  const visible = useOnScreen(ref)
  useEffect(() => {
    if (!visible) return
    const t = setInterval(() => setStep((s) => (s >= LAST_STEP ? 0 : s + 1)), 1500)
    return () => clearInterval(t)
  }, [visible])
  const done = step >= stages.length

  return (
    <div ref={ref} className="relative rounded-3xl p-[1px]" aria-label="Example project timeline" role="img">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/40 via-line/5 to-transparent" />
      <div className="relative overflow-hidden rounded-3xl bg-card/90">
        <div className="flex items-center justify-between border-b border-line/[0.1] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-fg/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg/10" />
          </div>
          <span className="label">Sample project</span>
        </div>

        <div className="grid md:grid-cols-[1.05fr_1fr]">
          <div className="border-b border-line/[0.1] p-6 md:border-b-0 md:border-r">
            <p className="label">Project status</p>
            <ul className="mt-5 space-y-4">
              {stages.map((s, i) => {
                const state = i < step ? 'done' : i === step ? 'active' : 'idle'
                const Icon = s.icon
                return (
                  <li key={s.label} className="flex h-[44px] items-start gap-3">
                    <span
                      className={`relative flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-colors duration-500 ${
                        state === 'done'
                          ? 'border-emerald-400/50 bg-emerald-500/15 text-accent'
                          : state === 'active'
                            ? 'border-line/20 bg-fg/5 text-fg'
                            : 'border-line/[0.1] text-muted/50'
                      }`}
                    >
                      <Check size={14} className={`absolute transition-opacity duration-300 ${state === 'done' ? 'opacity-100' : 'opacity-0'}`} />
                      <LoaderCircle size={14} className={`absolute ${state === 'active' ? 'animate-spin opacity-100' : 'opacity-0'}`} />
                      <Icon size={14} className={`absolute transition-opacity duration-300 ${state === 'idle' ? 'opacity-100' : 'opacity-0'}`} />
                    </span>
                    <span className="min-w-0">
                      <span className={`block truncate text-[14.5px] font-medium transition-colors ${state === 'idle' ? 'text-muted/60' : 'text-fg'}`}>{s.label}</span>
                      <span className={`block truncate text-[13px] transition-colors ${state === 'idle' ? 'text-muted/40' : 'text-muted'}`}>{s.meta}</span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="p-6">
            <p className="label">Shortlist</p>
            <div className="mt-5 space-y-3">
              {profiles.map((p, i) => {
                const shown = step >= 2 + i
                return (
                  <div key={p.initials} className="relative h-[64px]">
                    <div
                      className={`absolute inset-0 rounded-xl border border-line/[0.08] bg-fg/[0.02] transition-opacity duration-500 ${shown ? 'opacity-0' : 'animate-pulse opacity-100'}`}
                    />
                    <div
                      className={`absolute inset-0 flex items-center gap-3 rounded-xl border border-line/[0.1] bg-card px-3.5 transition-[opacity,transform] duration-500 ${
                        shown ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'
                      }`}
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sunk font-mono text-[11px] text-fg">{p.initials}</span>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-[13.5px] font-medium text-fg">{p.role}</p>
                        <p className="truncate text-[12.5px] text-muted">
                          {p.org} · {p.yrs}
                        </p>
                      </div>
                      <span
                        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/20 text-accent transition-[opacity,transform] duration-300 ${
                          done && shown ? 'scale-100 opacity-100' : 'scale-75 opacity-0'
                        }`}
                      >
                        <ShieldCheck size={13} />
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────── Marquee ─────────────── */

export function Marquee({ items }) {
  const row = [...items, ...items]
  return (
    <div className="group relative overflow-hidden py-5 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center whitespace-nowrap pr-12 text-[15px] font-medium text-fg/70" aria-hidden={i >= items.length}>
            {t}
            <span className="ml-12 h-1 w-1 rotate-45 bg-emerald-400/70" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─────────────── Closing call to action ───────────────
   A full-width navy band that runs straight into the footer, so the end of every page reads
   as one block: the next step, then the details. Text and buttons sit together in one
   centred column. */

export function CtaBand({
  eyebrow = 'Start with one project',
  title = 'Tell us what you need to learn.',
  body = 'We come back with screened experts, usually within 48 hours.',
  primary = { to: '/request-trial', label: 'Request a Trial' },
  secondary = { to: '/join', label: 'Join as an Expert' },
  emailWho = 'clients',
}) {
  return (
    <section className="theme-dark noise relative overflow-hidden bg-page">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/45 via-navy-900 to-[#08162B]" />
      <div className="grid-bg absolute inset-0 opacity-50" />
      <div className="blob-cta" />
      <div className="container-site relative py-14 sm:py-16">
        <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h2 className="mt-4 text-[30px] font-semibold leading-[1.1] sm:text-[40px]">{title}</h2>
          <p className="mt-3 max-w-xl text-[16.5px] leading-relaxed text-body">{body}</p>
          <div className="mt-7 flex w-full flex-col justify-center gap-3 sm:w-auto sm:flex-row">
            <Button to={primary.to}>{primary.label}</Button>
            {secondary && (
              <Button to={secondary.to} variant="ghost">
                {secondary.label}
              </Button>
            )}
          </div>
          {site.showEmails && (
            <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-[14.5px] text-muted">
              <Clock size={15} className="text-accent" />
              A person replies within one business day:
              <a href={`mailto:${site.emails[emailWho]}`} className="link-underline font-medium text-accent">
                {site.emails[emailWho]}
              </a>
            </p>
          )}
        </Reveal>
      </div>
    </section>
  )
}
