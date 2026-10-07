import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView, animate } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { site } from '../config/site.js'
import { pageMeta, fullTitle } from '../data/seo.js'

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
    const url = `${site.url}${window.location.pathname === '/' ? '' : window.location.pathname}`
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
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -80px 0px' }}
      transition={{ duration: 0.75, delay, ease }}
    >
      {children}
    </M>
  )
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
    'group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-[14px] font-medium transition-all duration-300'
  const styles = {
    primary:
      'bg-emerald-600 text-white shadow-[0_10px_28px_-14px_rgba(15,110,76,0.75)] hover:bg-emerald-700 hover:shadow-[0_14px_32px_-14px_rgba(15,110,76,0.85)]',
    ghost:
      'border border-line/15 bg-card text-fg hover:border-emerald-500/50',
    light: 'bg-white text-navy-900 hover:bg-ink',
  }
  const inner = (
    <>
      <span className="relative">{children}</span>
      {icon && (
        <ArrowRight
          size={16}
          className="relative transition-transform duration-300 group-hover:translate-x-1"
        />
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
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--x', `${e.clientX - r.left}px`)
    ref.current.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      className={`group relative overflow-hidden rounded-2xl glass transition-colors duration-500 hover:border-emerald-400/30 ${className}`}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            'radial-gradient(420px circle at var(--x, 50%) var(--y, 50%), rgba(43,196,138,0.08), transparent 45%)',
        }}
      />
      <div className="relative">{children}</div>
    </div>
  )
}

export function GlowBackdrop({ className = '' }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden [mask-image:linear-gradient(to_bottom,#000_55%,transparent)] ${className}`} aria-hidden="true">
      <div className="grid-bg absolute inset-0" />
      <div className="soft-glow absolute inset-0" />
    </div>
  )
}

export function PageHero({ eyebrow, title, intro, children }) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 sm:pb-28 sm:pt-48">
      <GlowBackdrop />
      <div className="container-site relative">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease }}
        >
          <Eyebrow>{eyebrow}</Eyebrow>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.04, ease }}
          className="mt-6 max-w-4xl text-[44px] font-semibold leading-[1.02] tracking-tightest sm:text-[68px]"
        >
          {title}
        </motion.h1>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.09, ease }}
            className="mt-7 max-w-2xl text-[18px] leading-relaxed text-muted"
          >
            {intro}
          </motion.p>
        )}
        {children && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.14, ease }}
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
