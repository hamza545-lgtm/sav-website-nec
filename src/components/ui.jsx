import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, animate } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { pageMeta, fullTitle, canonicalUrl } from '../data/seo.js'

export const ease = [0.22, 1, 0.36, 1]

function setMeta(attr, key, content) {
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', content)
}

// Per-page title, description, canonical URL, social tags and optional JSON-LD.
export function useSeo(title, description, { jsonLd, type = 'website', noindex = false } = {}) {
  useEffect(() => {
    const pageTitle = fullTitle(title)
    const url = canonicalUrl(window.location.pathname)
    document.title = pageTitle
    if (description) {
      setMeta('name', 'description', description)
      setMeta('property', 'og:description', description)
      setMeta('name', 'twitter:description', description)
    }
    setMeta('property', 'og:title', pageTitle)
    setMeta('name', 'twitter:title', pageTitle)
    setMeta('property', 'og:url', url)
    setMeta('property', 'og:type', type)
    setMeta('name', 'robots', noindex ? 'noindex' : 'index, follow')

    let canonical = document.head.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', url)

    const existing = document.getElementById('page-jsonld')
    if (existing) existing.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'page-jsonld'
      script.textContent = JSON.stringify(jsonLd)
      document.head.appendChild(script)
    }
  }, [title, description, type, jsonLd, noindex])
}

export function usePageSeo(path) {
  const meta = pageMeta[path] || {}
  useSeo(meta.title, meta.description)
}

export function Reveal({ children, delay = 0, y = 22, className = '', as = 'div' }) {
  const M = motion[as] || motion.div
  return (
    <M
      className={className}
      // The fade runs on the compositor and the short rise on the main thread. Animating the
      // position on the compositor would make the browser lift everything after this element onto
      // separate layers for the duration, softening the text around it and costing extra redraws.
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </M>
  )
}

// The section being read: the last one whose top has passed `line` (a fraction of the window
// height), or the final one once the page is scrolled to the end. It is measured on every scroll
// frame, so the highlight stays right however fast the page moves.
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

export function Eyebrow({ children, className = '' }) {
  return (
    <span className={`eyebrow ${className}`}>
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
      {children}
    </span>
  )
}

export function Button({ to, href, children, variant = 'primary', className = '', icon = true, ...rest }) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[14px] font-medium transition-[background-color,border-color,box-shadow,color,transform] duration-500 ease-out active:scale-[0.985]'
  const styles = {
    primary:
      'bg-emerald-600 text-white shadow-[0_10px_28px_-14px_rgba(15,110,76,0.75)] hover:bg-emerald-700 hover:shadow-[0_14px_32px_-14px_rgba(15,110,76,0.85)]',
    ghost:
      'border border-line/15 bg-card/60 text-fg hover:border-emerald-500/50 hover:bg-card',
    light: 'bg-white text-navy-900 hover:bg-ink',
  }
  const inner = (
    <>
      <span className="relative">{children}</span>
      {icon && (
        <ArrowRight
          size={16}
          className="relative transition-transform duration-500 ease-out group-hover:translate-x-1"
        />
      )}
      {variant === 'primary' && (
        <span aria-hidden="true" className="btn-shine pointer-events-none absolute inset-y-0 -left-[300%] w-[400%] animate-shimmer opacity-60" />
      )}
    </>
  )
  const cls = `${base} ${styles[variant]} ${className}`
  if (to) return <Link to={to} className={cls} {...rest}>{inner}</Link>
  if (href) return <a href={href} className={cls} {...rest}>{inner}</a>
  return <button className={cls} {...rest}>{inner}</button>
}

export function SectionHeading({ eyebrow, title, intro, align = 'left', className = '' }) {
  const center = align === 'center'
  return (
    <div className={`${center ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && (
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="mt-5 text-[34px] font-semibold leading-[1.08] sm:text-[46px]">{title}</h2>
      </Reveal>
      {intro && (
        <Reveal delay={0.1}>
          <p className={`mt-5 text-[17px] leading-relaxed text-muted ${center ? 'mx-auto' : ''} max-w-2xl`}>
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  )
}

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
        style={{
          background:
            'radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(43,196,138,0.08), transparent 45%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

// The hero glows breathe on an 18-second cycle: they drift up to 36px and swell by 8%, easing in
// and out. They are so soft that a whole half-cycle shifts the colour on screen by only a few
// levels, so moving them once a second looks perfectly continuous. Because they move in small
// steps rather than on a separate animated layer, they stay painted into the page itself, which
// keeps every line of text around them on the browser's sharpest rendering path.
const DRIFT_SECONDS = 18
function drift(t, dx, dy) {
  const p = (1 - Math.cos((2 * Math.PI * t) / DRIFT_SECONDS)) / 2
  return `translate(${(dx * p).toFixed(2)}px, ${(dy * p).toFixed(2)}px) scale(${(1 + 0.08 * p).toFixed(4)})`
}
const GLOW_A = [36, -16.8]
const GLOW_B = [15.2, -11.4]
const GLOW_B_OFFSET = 6 // seconds ahead of the first glow, so the two never move in step

function useGlowDrift(boxRef, aRef, bRef) {
  useEffect(() => {
    const box = boxRef.current
    if (!box || !('IntersectionObserver' in window)) return
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const root = document.documentElement
    const start = performance.now()
    let timer = 0
    const step = () => {
      // Hold still while the page is scrolling or hidden; carry on from the same clock afterwards.
      if (document.hidden || root.classList.contains('is-scrolling')) return
      const t = (performance.now() - start) / 1000
      if (aRef.current) aRef.current.style.transform = drift(t, ...GLOW_A)
      if (bRef.current) bRef.current.style.transform = drift(t + GLOW_B_OFFSET, ...GLOW_B)
    }
    // Only run while the hero is on screen.
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
      {/* Fades everything above into the page colour towards the bottom of the section. */}
      <div className="absolute inset-x-0 bottom-0 top-[55%] bg-gradient-to-b from-page/0 to-page" />
    </div>
  )
}

export function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="noise relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      <GlowBackdrop />
      <div className="container-site relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.08, ease }}
          className="mt-6 max-w-4xl text-[44px] font-semibold leading-[1.02] tracking-tightest sm:text-[68px]"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.18, ease }}
            className="mt-7 max-w-2xl text-[18px] leading-relaxed text-muted"
          >
            {intro}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease }}
            className="mt-10"
          >
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}

export function Counter({ to, suffix = '', prefix = '', duration = 1.6 }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '0px 0px -40px 0px' })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const controls = animate(0, to, {
      duration,
      ease: 'easeOut',
      onUpdate: (v) => setVal(Math.round(v)),
    })
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

export function Section({ children, className = '', id }) {
  return (
    <section id={id} className={`relative py-20 sm:py-28 ${className}`}>
      <div className="container-site relative">{children}</div>
    </section>
  )
}

export function Divider() {
  return <div className="glow-line container-site opacity-60" />
}
