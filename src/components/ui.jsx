'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { animate } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export const ease = [0.22, 1, 0.36, 1]

/* ─────────────── Reveal on scroll ───────────────
   One shared observer for the whole page. Each element fades up once, the first time it
   comes into view. The hidden starting state lives in CSS (.js .reveal), so the server HTML
   is complete and readable before any script runs. */
const watchers = new Map()
let observer = null
function getObserver() {
  if (observer || typeof window === 'undefined' || !('IntersectionObserver' in window)) return observer
  observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue
        const show = watchers.get(entry.target)
        if (show) show()
        watchers.delete(entry.target)
        observer.unobserve(entry.target)
      }
    },
    { rootMargin: '0px 0px -64px 0px' }
  )
  return observer
}

export function useInViewOnce(ref) {
  const [inView, setInView] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = getObserver()
    if (!obs) {
      setInView(true)
      return
    }
    watchers.set(el, () => setInView(true))
    obs.observe(el)
    return () => {
      watchers.delete(el)
      obs.unobserve(el)
    }
  }, [ref])
  return inView
}

export function Reveal({ children, delay = 0, y = 22, className = '', as: Tag = 'div', style, ...rest }) {
  const ref = useRef(null)
  const shown = useInViewOnce(ref)
  const vars = { ...style }
  if (delay) vars['--reveal-delay'] = `${delay}s`
  if (y !== 22) vars['--reveal-y'] = `${y}px`
  return (
    <Tag ref={ref} className={`reveal ${shown ? 'is-in' : ''} ${className}`} style={vars} {...rest}>
      {children}
    </Tag>
  )
}

// While visible, true; false once scrolled away. For loops that should only run on screen.
export function useOnScreen(ref, margin = '0px') {
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current
    if (!el || !('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { rootMargin: margin })
    io.observe(el)
    return () => io.disconnect()
  }, [ref, margin])
  return visible
}

// The section being read: the last one whose top has passed `line` (a fraction of the window
// height), or the final one once the page is scrolled to the end.
export function useActiveSection(ids, line = 0.3) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    let frame = 0
    const measure = () => {
      frame = 0
      const doc = document.documentElement
      let current = ids[0]
      if (window.scrollY > 0 && window.scrollY + window.innerHeight >= doc.scrollHeight - 4) {
        current = ids[ids.length - 1]
      } else {
        const limit = window.innerHeight * line
        for (const id of ids) {
          const el = document.getElementById(id)
          if (!el) continue
          if (el.getBoundingClientRect().top > limit) break
          current = id
        }
      }
      setActive(current)
    }
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    measure()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [ids, line])
  return active
}

export function scrollToId(id, offset = 100) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' })
}

/* ─────────────── Type ─────────────── */

// Section label. Pass as="h2" when the label is the section's only heading.
export function Eyebrow({ children, className = '', as: Tag = 'span' }) {
  return (
    <Tag className={`eyebrow ${className}`}>
      <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
      {children}
    </Tag>
  )
}

export function SectionHeading({ eyebrow, title, intro, align = 'left', className = '' }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow as={title ? 'p' : 'h2'}>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      {title && (
        <Reveal delay={0.05}>
          <h2 className={`${eyebrow ? 'mt-4' : ''} text-[30px] font-medium leading-[1.12] sm:text-[40px]`}>{title}</h2>
        </Reveal>
      )}
      {intro && (
        <Reveal delay={0.1}>
          <p className={`mt-4 max-w-2xl text-[16.5px] leading-relaxed text-muted sm:text-[17px] ${center ? 'mx-auto' : ''}`}>{intro}</p>
        </Reveal>
      )}
    </div>
  )
}

/* ─────────────── Buttons ─────────────── */

export function Button({ to, href, children, variant = 'primary', className = '', icon = true, ...rest }) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[14.5px] font-medium transition-[background-color,border-color,box-shadow,color,transform] duration-500 ease-out active:scale-[0.985]'
  const styles = {
    primary:
      'bg-emerald-600 text-white shadow-[0_10px_28px_-14px_rgba(15,110,76,0.75)] hover:bg-emerald-700 hover:shadow-[0_14px_32px_-14px_rgba(15,110,76,0.85)]',
    ghost: 'border border-line/15 bg-card/60 text-fg hover:border-emerald-500/50 hover:bg-card',
    light: 'bg-white text-navy-900 hover:bg-ink',
  }
  const inner = (
    <>
      <span className="relative">{children}</span>
      {icon && <ArrowRight size={16} className="relative transition-transform duration-500 ease-out group-hover:translate-x-1" />}
      {variant === 'primary' && (
        <span aria-hidden="true" className="btn-shine pointer-events-none absolute inset-y-0 -left-[300%] w-[400%] animate-shimmer opacity-60" />
      )}
    </>
  )
  const cls = `${base} ${styles[variant]} ${className}`
  if (to)
    return (
      <Link href={to} className={cls} {...rest}>
        {inner}
      </Link>
    )
  if (href)
    return (
      <a href={href} className={cls} {...rest}>
        {inner}
      </a>
    )
  return (
    <button className={cls} {...rest}>
      {inner}
    </button>
  )
}

/* ─────────────── Surfaces ─────────────── */

export function SpotlightCard({ children, className = '' }) {
  const ref = useRef(null)
  const frame = useRef(0)
  const onMove = (e) => {
    const { clientX, clientY } = e
    cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect()
      el.style.setProperty('--x', `${clientX - r.left}px`)
      el.style.setProperty('--y', `${clientY - r.top}px`)
    })
  }
  useEffect(() => () => cancelAnimationFrame(frame.current), [])
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-2xl glass transition-[border-color,box-shadow] duration-700 ease-out hover:border-emerald-400/30 hover:shadow-[0_1px_2px_rgba(10,25,47,0.04),0_24px_48px_-26px_rgba(10,25,47,0.3)] ${className}`}
    >
      <div
        className="fade-hover pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(43,196,138,0.08), transparent 45%)' }}
      />
      <div className="relative h-full">{children}</div>
    </div>
  )
}

// Page sections. Tones alternate light and navy down a page; "navy" switches every colour
// inside to the dark theme and adds the soft grid and glow. Navy sections clip their glow with
// overflow: clip (not hidden), so sticky columns inside them still stick to the window.
const tones = {
  page: '',
  sunk: 'bg-sunk',
  card: 'bg-card',
  navy: 'theme-dark bg-page',
}
export function Section({ children, className = '', id, tone = 'page', inner = '' }) {
  const navy = tone === 'navy'
  return (
    <section
      id={id}
      className={`relative ${navy ? 'overflow-clip py-14 sm:py-20' : 'py-12 sm:py-16'} ${tones[tone]} ${className}`}
    >
      {navy && (
        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
          <div className="grid-bg absolute inset-0 opacity-40" />
          <div className="blob-band" />
        </div>
      )}
      <div className={`container-site relative ${inner}`}>{children}</div>
    </section>
  )
}

/* ─────────────── Hero glows ───────────────
   The hero glows breathe on an 18-second cycle: they drift up to 36px and swell by 8%. They
   are so soft that moving them once a second looks continuous, and because they move in small
   steps rather than on an animated layer, the text around them stays perfectly sharp. */
const DRIFT_SECONDS = 18
function drift(t, dx, dy) {
  const p = (1 - Math.cos((2 * Math.PI * t) / DRIFT_SECONDS)) / 2
  return `translate(${(dx * p).toFixed(2)}px, ${(dy * p).toFixed(2)}px) scale(${(1 + 0.08 * p).toFixed(4)})`
}
const GLOW_A = [36, -16.8]
const GLOW_B = [15.2, -11.4]
const GLOW_B_OFFSET = 6

function useGlowDrift(boxRef, aRef, bRef) {
  useEffect(() => {
    const box = boxRef.current
    if (!box || !('IntersectionObserver' in window)) return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const root = document.documentElement
    const start = performance.now()
    let timer = 0
    const step = () => {
      if (document.hidden || root.classList.contains('is-scrolling')) return
      const t = (performance.now() - start) / 1000
      if (aRef.current) aRef.current.style.transform = drift(t, ...GLOW_A)
      if (bRef.current) bRef.current.style.transform = drift(t + GLOW_B_OFFSET, ...GLOW_B)
    }
    const io = new IntersectionObserver(([entry]) => {
      clearInterval(timer)
      if (entry.isIntersecting) {
        step()
        timer = setInterval(step, 1000)
      }
    })
    io.observe(box)
    return () => {
      io.disconnect()
      clearInterval(timer)
    }
  }, [boxRef, aRef, bRef])
}

export function GlowBackdrop({ className = '' }) {
  const box = useRef(null)
  const a = useRef(null)
  const b = useRef(null)
  useGlowDrift(box, a, b)
  return (
    <div ref={box} className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="grid-bg-page absolute inset-0" />
      <div ref={a} className="blob-hero-a" />
      <div ref={b} className="blob-hero-b" style={{ transform: drift(GLOW_B_OFFSET, ...GLOW_B) }} />
      <div className="absolute inset-x-0 bottom-0 top-[55%] bg-gradient-to-b from-page/0 to-page" />
    </div>
  )
}

// Hero entrance helper: CSS-only, staggered by `delay` seconds.
export const heroIn = (delay = 0, y) => ({
  className: 'hero-in',
  style: { '--hero-delay': `${delay}s`, ...(y !== undefined ? { '--hero-y': `${y}px` } : {}) },
})

export function PageHero({ eyebrow, title, intro, children, aside }) {
  const e = heroIn(0, 18)
  const h = heroIn(0.08, 26)
  const p = heroIn(0.18, 20)
  const c = heroIn(0.28, 20)
  return (
    <section className="noise relative overflow-hidden pb-12 pt-32 sm:pb-16 sm:pt-40">
      <GlowBackdrop />
      <div className={`container-site relative ${aside ? 'grid items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16' : ''}`}>
        <div>
          {eyebrow && (
            <div className={e.className} style={e.style}>
              <Eyebrow>{eyebrow}</Eyebrow>
            </div>
          )}
          <h1
            className={`${h.className} ${eyebrow ? 'mt-6' : ''} max-w-4xl text-[40px] font-medium leading-[1.05] tracking-tightest sm:text-[60px]`}
            style={h.style}
          >
            {title}
          </h1>
          {intro && (
            <p className={`${p.className} mt-6 max-w-2xl text-[17px] leading-relaxed text-muted sm:text-[18px]`} style={p.style}>
              {intro}
            </p>
          )}
          {children && (
            <div className={`${c.className} mt-9`} style={c.style}>
              {children}
            </div>
          )}
        </div>
        {aside && (
          <div className="hero-in" style={{ '--hero-delay': '0.22s', '--hero-y': '28px' }}>
            {aside}
          </div>
        )}
      </div>
    </section>
  )
}

/* ─────────────── Numbers ─────────────── */

// Shows the real number in the page HTML; counts up from zero the first time it scrolls into view.
export function Counter({ to, suffix = '', prefix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const [val, setVal] = useState(to)
  const started = useRef(false)
  const inView = useInViewOnce(ref)
  useEffect(() => {
    // Below the fold on arrival: start from zero so the count-up is visible when it arrives.
    const r = ref.current?.getBoundingClientRect()
    if (r && r.top > window.innerHeight) setVal(0)
  }, [])
  useEffect(() => {
    if (!inView || started.current) return
    started.current = true
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(to)
      return
    }
    const controls = animate(0, to, { duration, ease: 'easeOut', onUpdate: (v) => setVal(Math.round(v)) })
    return () => controls.stop()
  }, [inView, to, duration])
  return (
    <span ref={ref} className="inline-block tabular-nums">
      {prefix}
      {val}
      {suffix}
    </span>
  )
}
