import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Clients from './pages/Clients.jsx'
import Experts from './pages/Experts.jsx'
import Industries from './pages/Industries.jsx'
import Compliance from './pages/Compliance.jsx'
import About from './pages/About.jsx'
import Insights from './pages/Insights.jsx'
import Faqs from './pages/Faqs.jsx'
import Careers from './pages/Careers.jsx'
import Contact from './pages/Contact.jsx'
import RequestTrial from './pages/RequestTrial.jsx'
import JoinNetwork from './pages/JoinNetwork.jsx'
import { Privacy, Terms } from './pages/Legal.jsx'
import NotFound from './pages/NotFound.jsx'

function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const id = hash.slice(1)
      const t = setTimeout(() => {
        const el = document.getElementById(id)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 96
          window.scrollTo({ top: y, behavior: 'smooth' })
        }
      }, 650)
      return () => clearTimeout(t)
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
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
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <ScrollManager />
      <ScrollProgress />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/experts" element={<Experts />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/compliance" element={<Compliance />} />
            <Route path="/about" element={<About />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/faqs" element={<Faqs />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/request-trial" element={<RequestTrial />} />
            <Route path="/join" element={<JoinNetwork />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
