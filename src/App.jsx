import { lazy, Suspense, useEffect, useRef } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'

// Home ships with the first load; every other page loads on demand and is
// prefetched quietly once the browser is idle, so navigation stays instant.
const pages = {
  clients: () => import('./pages/Clients.jsx'),
  experts: () => import('./pages/Experts.jsx'),
  industries: () => import('./pages/Industries.jsx'),
  compliance: () => import('./pages/Compliance.jsx'),
  about: () => import('./pages/About.jsx'),
  insights: () => import('./pages/Insights.jsx'),
  article: () => import('./pages/InsightArticle.jsx'),
  faqs: () => import('./pages/Faqs.jsx'),
  careers: () => import('./pages/Careers.jsx'),
  contact: () => import('./pages/Contact.jsx'),
  trial: () => import('./pages/RequestTrial.jsx'),
  join: () => import('./pages/JoinNetwork.jsx'),
  legal: () => import('./pages/Legal.jsx'),
  notFound: () => import('./pages/NotFound.jsx'),
}
const Clients = lazy(pages.clients)
const Experts = lazy(pages.experts)
const Industries = lazy(pages.industries)
const Compliance = lazy(pages.compliance)
const About = lazy(pages.about)
const Insights = lazy(pages.insights)
const InsightArticle = lazy(pages.article)
const Faqs = lazy(pages.faqs)
const Careers = lazy(pages.careers)
const Contact = lazy(pages.contact)
const RequestTrial = lazy(pages.trial)
const JoinNetwork = lazy(pages.join)
const Privacy = lazy(() => pages.legal().then((m) => ({ default: m.Privacy })))
const Terms = lazy(() => pages.legal().then((m) => ({ default: m.Terms })))
const NotFound = lazy(pages.notFound)

function usePrefetchPages() {
  useEffect(() => {
    if (navigator.connection?.saveData) return
    const run = () => Object.values(pages).forEach((load) => load().catch(() => {}))
    const idle = window.requestIdleCallback || ((cb) => setTimeout(cb, 1500))
    const start = () => idle(run, { timeout: 4000 })
    if (document.readyState === 'complete') start()
    else window.addEventListener('load', start, { once: true })
  }, [])
}

function ScrollManager() {
  const { pathname, hash, key } = useLocation()
  const previous = useRef(null)
  useEffect(() => {
    // Every click on a link creates a new location key, even when it points to the page you are
    // already on (the logo on the home page, say). That case glides back to the top.
    const samePage = previous.current === pathname
    previous.current = pathname
    if (hash) {
      const id = decodeURIComponent(hash.slice(1))
      const go = (behavior) => {
        const el = document.getElementById(id)
        if (!el) return false
        window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 96, behavior })
        return true
      }
      // Already on the page: glide to the section. Arriving from another page or a shared link:
      // wait for the page to render, then go straight there.
      if (go('smooth')) return
      let tries = 0
      const t = setInterval(() => {
        if (go('instant') || ++tries > 30) clearInterval(t)
      }, 120)
      return () => clearInterval(t)
    }
    window.scrollTo({ top: 0, behavior: samePage ? 'smooth' : 'instant' })
  }, [pathname, hash, key])
  return null
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 })
  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-600"
    />
  )
}

export default function App() {
  const location = useLocation()
  usePrefetchPages()
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollManager />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait" initial={false}>
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Suspense fallback={<div className="min-h-screen" />}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/insights/:slug" element={<InsightArticle />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-trial" element={<RequestTrial />} />
            <Route path="/join" element={<JoinNetwork />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/privacy" element={<Navigate to="/privacy-policy" replace />} />
            <Route path="/cookie-policy" element={<Navigate to="/privacy-policy#5-cookies-and-similar-technologies" replace />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          </Suspense>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
