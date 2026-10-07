import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, LoaderCircle, ShieldCheck, Search, Filter, CalendarCheck, FileText } from 'lucide-react'
import { Button, Reveal, Eyebrow } from './ui.jsx'
import { Mark } from './Logo.jsx'

/* ─────────────── Network map (hero) ─────────────── */

const hub = { x: 300, y: 260 }
const nodes = [
  { x: 120, y: 96, label: 'Former CFO', sub: 'Payments' },
  { x: 470, y: 82, label: 'VP Procurement', sub: 'Industrials' },
  { x: 515, y: 270, label: 'Head of IT', sub: 'Health system' },
  { x: 455, y: 452, label: 'Category Director', sub: 'Grocery retail' },
  { x: 135, y: 430, label: 'Ex-GM', sub: 'Enterprise SaaS' },
  { x: 88, y: 262, label: 'Media Buyer', sub: 'Agency' },
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
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % nodes.length), 2200)
    return () => clearInterval(t)
  }, [])

  return (
    <div className="relative mx-auto aspect-[600/520] w-full max-w-[600px]">
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

        {dots.map(([x, y], i) => (
          <motion.circle
            key={i}
            cx={x}
            cy={y}
            r="1.6"
            fill="#8892A0"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.15, 0.6, 0.15] }}
            transition={{ duration: 3 + (i % 4), repeat: Infinity, delay: i * 0.3 }}
          />
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
              animate={
                active === i
                  ? { pathLength: 1, opacity: 1 }
                  : { pathLength: 1, opacity: 0.25 }
              }
              transition={{ pathLength: { duration: 1.2, delay: 0.3 + i * 0.12, ease: 'easeInOut' }, opacity: { duration: 0.6 } }}
            />
            {active === i && <Pulse key={`pulse-${i}`} d={curve(hub, n)} />}
          </g>
        ))}

        <circle cx={hub.x} cy={hub.y} r="90" fill="url(#hubGlow)" />
      </svg>

      {/* Hub */}
      <div
        className="absolute -translate-x-1/2 -translate-y-1/2"
        style={{ left: `${(hub.x / 600) * 100}%`, top: `${(hub.y / 520) * 100}%` }}
      >
        <span className="absolute inset-0 m-auto h-14 w-14 animate-pulseRing rounded-2xl border border-emerald-500/40" />
        <div className="relative rounded-2xl p-1.5 glass shadow-[0_0_50px_-12px_rgba(22,145,106,0.45)]">
          <Mark size={52} />
        </div>
      </div>

      {/* Expert chips */}
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
            className={`flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-1.5 text-[11.5px] transition-all duration-500 glass ${
              active === i ? '!border-emerald-400/60 shadow-[0_0_30px_-6px_rgba(43,196,138,0.7)]' : ''
            }`}
          >
            <span className={`h-1.5 w-1.5 rounded-full ${active === i ? 'bg-tick' : 'bg-muted/60'}`} />
            <span className="text-fg">{n.label}</span>
            <span className="hidden text-muted sm:inline">· {n.sub}</span>
          </div>
        </motion.div>
      ))}
    </div>
  )
}

/* ─────────────── Engagement console ─────────────── */

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

export function EngagementConsole() {
  const [step, setStep] = useState(0)
  useEffect(() => {
    const t = setInterval(() => setStep((s) => (s >= stages.length + 2 ? 0 : s + 1)), 1500)
    return () => clearInterval(t)
  }, [])
  const done = step >= stages.length

  return (
    <div className="relative rounded-3xl p-[1px]">
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-400/40 via-line/5 to-transparent" />
      <div className="relative overflow-hidden rounded-3xl bg-card/90 backdrop-blur-xl">
        <div className="flex items-center justify-between border-b border-line/[0.1] px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-fg/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg/10" />
            <span className="h-2.5 w-2.5 rounded-full bg-fg/10" />
          </div>
        </div>

        <div className="grid gap-0 md:grid-cols-[1.05fr_1fr]">
          <div className="border-b border-line/[0.1] p-6 md:border-b-0 md:border-r">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">Project status</p>
            <ul className="mt-5 space-y-4">
              {stages.map((s, i) => {
                const state = i < step ? 'done' : i === step ? 'active' : 'idle'
                const Icon = s.icon
                return (
                  <li key={s.label} className="flex items-start gap-3">
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-500 ${
                        state === 'done'
                          ? 'border-emerald-400/50 bg-emerald-500/15 text-accent'
                          : state === 'active'
                          ? 'border-line/20 bg-fg/5 text-fg'
                          : 'border-line/[0.1] text-muted/50'
                      }`}
                    >
                      {state === 'done' ? (
                        <Check size={14} />
                      ) : state === 'active' ? (
                        <LoaderCircle size={14} className="animate-spin" />
                      ) : (
                        <Icon size={14} />
                      )}
                    </span>
                    <span>
                      <span className={`block text-[14px] transition-colors ${state === 'idle' ? 'text-muted/60' : 'text-fg'}`}>
                        {s.label}
                      </span>
                      <span className={`block text-[12.5px] transition-colors ${state === 'idle' ? 'text-muted/40' : 'text-muted'}`}>
                        {s.meta}
                      </span>
                    </span>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="p-6">
            <p className="font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted">Shortlist</p>
            <div className="mt-5 space-y-3">
              <AnimatePresence>
                {profiles.map(
                  (p, i) =>
                    step >= 2 + i && (
                      <motion.div
                        key={p.initials}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.45 }}
                        className="rounded-xl border border-line/[0.1] bg-fg/[0.02] p-3.5"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-sunk font-mono text-[11px] text-fg">
                            {p.initials}
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[13px] text-fg">{p.role}</p>
                            <p className="truncate text-[12px] text-muted">
                              {p.org} · {p.yrs}
                            </p>
                          </div>
                          {done && (
                            <motion.span
                              initial={{ opacity: 0, scale: 0.6 }}
                              animate={{ opacity: 1, scale: 1 }}
                              className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 text-accent"
                            >
                              <ShieldCheck size={13} />
                            </motion.span>
                          )}
                        </div>
                      </motion.div>
                    )
                )}
              </AnimatePresence>
              {step < 2 && (
                <div className="space-y-3">
                  {[0, 1, 2].map((k) => (
                    <div key={k} className="h-[62px] animate-pulse rounded-xl border border-line/[0.08] bg-fg/[0.015]" />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─────────────── Marquee ─────────────── */

export function Marquee({ items }) {
  // Two identical halves; each item carries its own trailing space so -50% loops seamlessly.
  const row = [...items, ...items]
  return (
    <div className="group relative overflow-hidden py-6 [mask-image:linear-gradient(90deg,transparent,#000_10%,#000_90%,transparent)]">
      <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span key={i} className="flex items-center whitespace-nowrap pr-12 text-[15px] text-muted" aria-hidden={i >= items.length}>
            {typeof t === 'string' ? (
              t
            ) : (
              <span className="flex items-baseline gap-2.5">
                <span className="font-semibold tracking-tight text-accent">{t.k}</span>
                <span className="text-body">{t.v}</span>
              </span>
            )}
            <span className="ml-12 h-1 w-1 rotate-45 bg-emerald-400/70" />
          </span>
        ))}
      </div>
    </div>
  )
}

/* ─────────────── CTA band ─────────────── */

export function CtaBand({
  eyebrow = 'Start with one project',
  title = (
    <>
      Bring us the question
      <br className="hidden sm:block" /> <span className="serif-accent text-accent">you can’t answer from a desk.</span>
    </>
  ),
  body = 'Tell us what you need to learn. We will come back with screened experts, usually within 48 hours.',
}) {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="container-site">
        <Reveal>
          <div className="theme-dark noise relative overflow-hidden rounded-[32px] border border-line/[0.12] bg-page px-8 py-16 sm:px-16 sm:py-20">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-700/50 via-navy-900 to-navy-950" />
            <div className="grid-bg absolute inset-0 opacity-60" />
            <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-emerald-400/25 blur-[100px]" />
            <div className="relative grid items-end gap-10 lg:grid-cols-[1.6fr_1fr]">
              <div>
                <Eyebrow>{eyebrow}</Eyebrow>
                <h2 className="mt-5 text-[34px] font-semibold leading-[1.06] sm:text-[52px]">{title}</h2>
                <p className="mt-5 max-w-xl text-[17px] leading-relaxed text-body">{body}</p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col lg:items-end">
                <Button to="/request-trial">Request a Trial</Button>
                <Button to="/join" variant="ghost">
                  Join as an Expert
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
