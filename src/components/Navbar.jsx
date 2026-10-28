'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { Button } from './ui'
import { industries, formats, useCases } from '@/data/content'

export const ucSlug = (name) => `uc-${name.toLowerCase().replace(/\s+/g, '-')}`

const aboutLinks = [
  { to: '/about', label: 'About Savnec' },
  { to: '/insights', label: 'Insights' },
  { to: '/faqs', label: 'FAQs' },
  { to: '/careers', label: 'Careers' },
  { to: '/contact', label: 'Contact Us' },
]

const nav = [
  { to: '/services', label: 'Services', menu: 'services' },
  { to: '/clients', label: 'Clients', menu: 'clients' },
  { to: '/experts', label: 'Experts' },
  { to: '/industries', label: 'Industries', menu: 'industries' },
  { to: '/compliance', label: 'Compliance' },
  { to: '/about', label: 'About', menu: 'about' },
]

const menuLinks = {
  services: [...formats.map((f) => ({ to: `/services#${f.id}`, label: f.title })), { to: '/services', label: 'All services' }],
  clients: [{ to: '/clients', label: 'How we work with clients' }, ...Object.keys(useCases).map((name) => ({ to: `/clients#${ucSlug(name)}`, label: name }))],
  industries: [...industries.map((x) => ({ to: `/industries#${x.id}`, label: x.name })), { to: '/industries', label: 'All industries' }],
  about: aboutLinks,
}

const itemCls = 'block rounded-lg px-3 py-2 font-ui text-[14.5px] font-medium text-fg/85 transition-colors hover:bg-fg/[0.05] hover:text-fg'
const headCls = 'px-3 pb-1.5 pt-2 font-mono text-[11px] uppercase tracking-[0.16em] text-muted'

function ServicesMenu({ onClose }) {
  return (
    <div className="w-[300px]">
      {menuLinks.services.map((l, i) => (
        <Link
          key={l.to}
          href={l.to}
          onClick={onClose}
          className={i === menuLinks.services.length - 1 ? 'mt-1 flex items-center justify-between rounded-lg border-t border-line/[0.08] px-3 py-2.5 font-ui text-[14px] font-semibold text-accent' : itemCls}
        >
          {l.label}
          {i === menuLinks.services.length - 1 && <ArrowRight size={15} />}
        </Link>
      ))}
    </div>
  )
}

function ClientsMenu({ onClose }) {
  const [how, ...types] = menuLinks.clients
  return (
    <div className="grid w-[520px] grid-cols-[1fr_1fr] gap-2">
      <div>
        <Link href={how.to} onClick={onClose} className={itemCls}>
          {how.label}
        </Link>
        <p className={`${headCls} mt-2`}>Who we serve</p>
        {types.map((l) => (
          <Link key={l.to} href={l.to} onClick={onClose} className={itemCls}>
            {l.label}
          </Link>
        ))}
      </div>
      <Link
        href="/request-trial"
        onClick={onClose}
        className="group flex flex-col justify-end rounded-xl border border-emerald-400/25 bg-emerald-500/[0.08] p-5 transition-colors hover:border-emerald-400/50"
      >
        <span className="font-ui text-[15px] font-semibold text-fg">Request a Trial</span>
        <span className="mt-1 text-[14px] leading-snug text-body">Send one live brief and see a screened shortlist.</span>
        <span className="mt-4 inline-flex items-center gap-1.5 font-ui text-[13.5px] font-semibold text-accent">
          Start <ArrowRight size={14} className="transition-transform group-hover:translate-x-0.5" />
        </span>
      </Link>
    </div>
  )
}

function IndustriesMenu({ onClose }) {
  const list = menuLinks.industries
  return (
    <div className="w-[520px]">
      <div className="grid grid-cols-2 gap-x-2">
        {list.slice(0, -1).map((l) => (
          <Link key={l.to} href={l.to} onClick={onClose} className={itemCls}>
            {l.label}
          </Link>
        ))}
      </div>
      <Link
        href="/industries"
        onClick={onClose}
        className="mt-1 flex items-center justify-between rounded-lg border-t border-line/[0.08] px-3 py-2.5 font-ui text-[14px] font-semibold text-accent"
      >
        All industries <ArrowRight size={15} />
      </Link>
    </div>
  )
}

function AboutMenu({ onClose }) {
  return (
    <div className="w-[220px]">
      {aboutLinks.map((l) => (
        <Link key={l.to} href={l.to} onClick={onClose} className={itemCls}>
          {l.label}
        </Link>
      ))}
    </div>
  )
}

function Dropdown({ type, onClose }) {
  const Panel = { services: ServicesMenu, clients: ClientsMenu, industries: IndustriesMenu, about: AboutMenu }[type]
  const left = type === 'services' || type === 'clients'
  return (
    // The panel is fully opaque from its first frame and only slides a few pixels, so the page
    // behind never shows through while it opens.
    <motion.div
      initial={{ y: 6 }}
      animate={{ y: 0 }}
      exit={{ opacity: 0, transition: { duration: 0.1 } }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      style={{ x: left ? 0 : '-50%' }}
      className={`absolute top-full z-50 pt-3 ${left ? '-left-2' : 'left-1/2'}`}
    >
      <div className="rounded-2xl border border-line/[0.12] bg-card p-2 shadow-[0_24px_60px_-18px_rgba(10,25,47,0.22)]">
        <Panel onClose={onClose} />
      </div>
    </motion.div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(null)
  const [mobile, setMobile] = useState(false)
  const [mobileSub, setMobileSub] = useState(null)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(null)
    setMobile(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
    if (!mobile) {
      setMobileSub(null)
      return
    }
    const onKey = (e) => e.key === 'Escape' && setMobile(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mobile])

  const isActive = (to) =>
    pathname === to ||
    (to === '/about' && (['/faqs', '/careers', '/contact'].includes(pathname) || pathname.startsWith('/insights'))) ||
    (to === '/clients' && pathname === '/request-trial')

  // The logo on the home page glides back to the top instead of reloading the page.
  const onLogo = (e) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        aria-hidden="true"
        className={`absolute inset-0 border-b transition-[background-color,border-color] duration-500 ${
          scrolled || mobile ? 'border-line/[0.1] bg-page/85 backdrop-blur-xl' : 'border-transparent bg-transparent'
        }`}
      />
      <div className="container-site relative flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Savnec home" onClick={onLogo} className="shrink-0">
          <Logo height={26} />
        </Link>

        <nav
          aria-label="Main"
          className="hidden items-center lg:flex"
          onMouseLeave={() => setOpen(null)}
          onKeyDown={(e) => e.key === 'Escape' && setOpen(null)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setOpen(null)
          }}
        >
          {nav.map((item) => (
            <div key={item.to} className="relative" onMouseEnter={() => setOpen(item.menu || null)} onFocus={() => setOpen(item.menu || null)}>
              <Link
                href={item.to}
                aria-haspopup={item.menu ? 'true' : undefined}
                aria-expanded={item.menu ? open === item.menu : undefined}
                aria-current={pathname === item.to ? 'page' : undefined}
                className={`relative isolate flex items-center gap-1 rounded-full px-3 py-2 font-ui text-[15px] font-medium transition-colors duration-300 xl:px-3.5 ${
                  isActive(item.to) ? 'text-fg' : 'text-fg/[0.88] hover:text-fg'
                }`}
              >
                {item.label}
                {item.menu && <ChevronDown size={15} className={`text-fg/60 transition-transform duration-300 ${open === item.menu ? 'rotate-180' : ''}`} />}
                {isActive(item.to) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full border border-line/[0.12] bg-fg/[0.05]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
              <AnimatePresence>{item.menu && open === item.menu && <Dropdown type={item.menu} onClose={() => setOpen(null)} />}</AnimatePresence>
            </div>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center gap-5 lg:flex">
          <Link href="/join" className="hidden font-ui text-[15px] font-medium text-fg/[0.88] transition-colors hover:text-fg xl:inline">
            Join as an Expert
          </Link>
          <Button to="/request-trial" className="!px-5 !py-2.5 font-ui">
            Request a Trial
          </Button>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line/[0.12] text-fg lg:hidden"
          onClick={() => setMobile((v) => !v)}
          aria-label={mobile ? 'Close menu' : 'Open menu'}
          aria-expanded={mobile}
          aria-controls="mobile-menu"
        >
          {mobile ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            id="mobile-menu"
            className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-page/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-site py-5">
              {nav.map((item) => (
                <div key={item.to} className="border-b border-line/[0.1]">
                  {item.menu ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between py-4 text-left font-ui text-[20px] font-medium text-fg"
                        onClick={() => setMobileSub(mobileSub === item.menu ? null : item.menu)}
                        aria-expanded={mobileSub === item.menu}
                      >
                        {item.label}
                        <ChevronDown size={20} className={`text-muted transition-transform ${mobileSub === item.menu ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileSub === item.menu && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="grid gap-0.5 pb-4">
                              {menuLinks[item.menu].map((l) => (
                                <Link key={l.to} href={l.to} onClick={() => setMobile(false)} className="py-2 font-ui text-[16px] text-fg/80 hover:text-fg">
                                  {l.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link href={item.to} onClick={() => setMobile(false)} className="block py-4 font-ui text-[20px] font-medium text-fg">
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-8 grid gap-3">
                <Button to="/request-trial" onClick={() => setMobile(false)}>
                  Request a Trial
                </Button>
                <Button to="/join" variant="ghost" onClick={() => setMobile(false)}>
                  Join as an Expert
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
