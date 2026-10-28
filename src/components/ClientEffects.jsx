'use client'

import { useEffect } from 'react'
import { MotionConfig, motion, useScroll, useSpring } from 'framer-motion'

// Animations follow the visitor's "reduce motion" setting.
export function MotionProvider({ children }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-600"
    />
  )
}

export default function ClientEffects() {
  useEffect(() => {
    // While the page is moving, pause the decorative loops (glows, shimmer, pulses) so scrolling
    // gets the whole frame budget. They resume a moment after scrolling stops.
    const root = document.documentElement
    let timer = 0
    const onScroll = () => {
      if (!root.classList.contains('is-scrolling')) root.classList.add('is-scrolling')
      clearTimeout(timer)
      timer = setTimeout(() => root.classList.remove('is-scrolling'), 180)
    }
    // In-page links (/clients#private-equity) change the address without a "hashchange" event,
    // so tell the page about it after the click has been handled.
    const onClick = (e) => {
      const a = e.target.closest && e.target.closest('a[href*="#"]')
      if (a) setTimeout(() => window.dispatchEvent(new Event('savnec:hash')), 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('click', onClick)
      clearTimeout(timer)
    }
  }, [])
  return <ScrollProgress />
}

// The current #hash, kept up to date for in-page links, back/forward and shared links.
export function subscribeHash(callback) {
  const run = () => callback(window.location.hash)
  run()
  window.addEventListener('hashchange', run)
  window.addEventListener('popstate', run)
  window.addEventListener('savnec:hash', run)
  return () => {
    window.removeEventListener('hashchange', run)
    window.removeEventListener('popstate', run)
    window.removeEventListener('savnec:hash', run)
  }
}
