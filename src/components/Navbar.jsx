import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  ArrowRight,
  Building2,
  BookOpen,
  CircleHelp,
  Briefcase,
  Mail,
  Phone,
  ListChecks,
  Users,
  Network,
  NotebookPen,
  Brain,
} from 'lucide-react'
import Logo from './Logo.jsx'
import { Button } from './ui.jsx'
import { industries, formats, useCases } from '../data/content.js'

const formatIcons = { 'expert-calls': Phone, 'b2b-surveys': ListChecks, 'focus-groups': Users, 'custom-recruitment': Network, ethnography: NotebookPen, 'ai-experts': Brain }

export const ucSlug = (name) => `uc-${name.toLowerCase().replace(/\s+/g, '-')}`

const aboutLinks = [
  { to: '/about', label: 'About Savnec', desc: 'Who we are and how we work', icon: Building2 },
  { to: '/insights', label: 'Insights', desc: 'Guides on method and compliance', icon: BookOpen },
  { to: '/faqs', label: 'FAQs', desc: 'Answers for clients and experts', icon: CircleHelp },
  { to: '/careers', label: 'Careers', desc: 'Build the network with us', icon: Briefcase },
  { to: '/contact', label: 'Contact Us', desc: 'Reach the right team', icon: Mail },
]

const nav = [
  { to: '/clients', label: 'Clients', menu: 'clients' },
  { to: '/experts', label: 'Experts' },
  { to: '/industries', label: 'Industries', menu: 'industries' },
  { to: '/compliance', label: 'Compliance' },
  { to: '/about', label: 'About', menu: 'about' },
]

const mobileLinks = {
  clients: [
    { to: '/clients', label: 'How we work' },
    ...formats.map((f) => ({ to: `/clients#${f.id}`, label: f.title })),
    { to: '/request-trial', label: 'Request a Trial' },
  ],
  industries: [{ to: '/industries', label: 'All industries' }, ...industries.map((x) => ({ to: `/industries#${x.id}`, label: x.name }))],
  about: aboutLinks,
}

const itemCls = 'group flex items-start gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-fg/[0.05]'
const iconCls =
  'mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line/[0.12] bg-fg/[0.03] text-accent transition-colors group-hover:border-emerald-400/40'
const headCls = 'px-3 pb-2 pt-2 font-mono text-[10.5px] uppercase tracking-[0.2em] text-muted'

function ClientsMenu({ onClose }) {
  return (
    <div className="grid w-[600px] grid-cols-2 gap-2">
      <div>
        <p className={headCls}>Formats</p>
        {formats.map((f) => {
          const Icon = formatIcons[f.id]
          return (
            <Link key={f.id} to={`/clients#${f.id}`} onClick={onClose} className="group flex items-center gap-3 rounded-xl px-3 py-2 transition-colors hover:bg-fg/[0.05]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line/[0.12] bg-fg/[0.03] text-accent transition-colors group-hover:border-emerald-400/40">
                <Icon size={15} />
              </span>
              <span className="text-[14px] text-body group-hover:text-fg">{f.title}</span>
            </Link>
          )
        })}
      </div>
      <div className="flex flex-col rounded-xl bg-fg/[0.025] p-1">
        <p className={headCls}>Who we serve</p>
        {Object.keys(useCases).map((name) => (
          <Link
            key={name}
            to={`/clients#${ucSlug(name)}`}
            onClick={onClose}
            className="flex items-center justify-between rounded-lg px-3 py-2 text-[14px] text-body transition-colors hover:bg-fg/[0.05] hover:text-fg"
          >
            {name}
            <ArrowRight size={13} className="text-muted" />
          </Link>
        ))}
        <Link
          to="/request-trial"
          onClick={onClose}
          className="group mt-auto rounded-xl border border-emerald-400/25 bg-emerald-500/10 p-4 transition-colors hover:border-emerald-400/50"
        >
          <span className="block text-[14px] font-medium text-fg">Request a Trial</span>
          <span className="mt-1 block text-[12.5px] leading-snug text-muted">Send one live brief and see a screened shortlist.</span>
        </Link>
      </div>
    </div>
  )
}

function IndustriesMenu({ onClose }) {
  return (
    <div className="grid w-[640px] grid-cols-2 gap-1">
      {industries.map(({ id, name, icon: Icon }) => (
        <Link key={id} to={`/industries#${id}`} onClick={onClose} className="group flex items-center gap-3 rounded-xl px-3 py-2.5 transition-colors hover:bg-fg/[0.05]">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-line/[0.12] bg-fg/[0.03] text-accent transition-colors group-hover:border-emerald-400/40">
            <Icon size={15} />
          </span>
          <span className="text-[13.5px] text-body group-hover:text-fg">{name}</span>
        </Link>
      ))}
      <Link
        to="/industries"
        onClick={onClose}
        className="col-span-2 mt-1 flex items-center justify-between rounded-xl border-t border-line/[0.08] px-3 py-3 text-[13px] text-accent hover:text-accent"
      >
        View all coverage <ArrowUpRight size={14} />
      </Link>
    </div>
  )
}

function AboutMenu({ onClose }) {
  return (
    <div className="w-[300px]">
      {aboutLinks.map(({ to, label, desc, icon: Icon }) => (
        <Link key={to} to={to} onClick={onClose} className={itemCls}>
          <span className={iconCls}>
            <Icon size={15} />
          </span>
          <span>
            <span className="block text-[14px] text-fg">{label}</span>
            <span className="block text-[12.5px] text-muted">{desc}</span>
          </span>
        </Link>
      ))}
    </div>
  )
}

function Dropdown({ type, onClose }) {
  const Panel = { clients: ClientsMenu, industries: IndustriesMenu, about: AboutMenu }[type]
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 6, scale: 0.98 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      style={{ x: type === 'clients' ? 0 : '-50%' }}
      className={`absolute top-full z-50 pt-4 ${type === 'clients' ? '-left-3' : 'left-1/2'}`}
    >
      <div className="rounded-2xl border border-line/[0.12] bg-card/95 p-2 shadow-[0_30px_80px_-20px_rgba(10,25,47,0.18)] backdrop-blur-xl">
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
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setOpen(null)
    setMobile(false)
  }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = mobile ? 'hidden' : ''
  }, [mobile])

  const isActive = (to) =>
    location.pathname === to ||
    (to === '/about' &&
      (['/faqs', '/careers', '/contact'].includes(location.pathname) || location.pathname.startsWith('/insights'))) ||
    (to === '/clients' && location.pathname === '/request-trial')

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? 'border-b border-line/[0.1] bg-page/70 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        }`}
      >
        <div className="container-site flex h-[72px] items-center justify-between">
          <Link to="/" aria-label="Savnec home">
            <Logo height={30} />
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" onMouseLeave={() => setOpen(null)}>
            {nav.map((item) => (
              <div
                key={item.to}
                className="relative"
                onMouseEnter={() => setOpen(item.menu || null)}
              >
                <NavLink
                  to={item.to}
                  className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-[14px] transition-colors ${
                    isActive(item.to) ? 'text-fg' : 'text-muted hover:text-fg'
                  }`}
                >
                  {item.label}
                  {item.menu && (
                    <ChevronDown
                      size={14}
                      className={`transition-transform duration-300 ${open === item.menu ? 'rotate-180' : ''}`}
                    />
                  )}
                  {isActive(item.to) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full border border-line/[0.12] bg-fg/[0.05]"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                </NavLink>
                <AnimatePresence>
                  {item.menu && open === item.menu && (
                    <Dropdown type={item.menu} onClose={() => setOpen(null)} />
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <Link to="/join" className="text-[14px] text-muted transition-colors hover:text-fg">
              Join as an Expert
            </Link>
            <Button to="/request-trial" className="!px-5 !py-2.5">
              Request a Trial
            </Button>
          </div>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line/[0.12] text-fg lg:hidden"
            onClick={() => setMobile((v) => !v)}
            aria-label={mobile ? 'Close menu' : 'Open menu'}
          >
            {mobile ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 top-[72px] z-40 overflow-y-auto bg-page/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-site py-6">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                  className="border-b border-line/[0.1]"
                >
                  {item.menu ? (
                    <>
                      <button
                        className="flex w-full items-center justify-between py-4 text-left text-[22px] text-fg"
                        onClick={() => setMobileSub(mobileSub === item.menu ? null : item.menu)}
                      >
                        {item.label}
                        <ChevronDown
                          size={20}
                          className={`text-muted transition-transform ${mobileSub === item.menu ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {mobileSub === item.menu && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="grid gap-1 pb-4">
                              {mobileLinks[item.menu].map((l) => (
                                <Link key={l.to} to={l.to} className="py-2 text-[15px] text-muted hover:text-fg">
                                  {l.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link to={item.to} className="block py-4 text-[22px] text-fg">
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <div className="mt-8 grid gap-3">
                <Button to="/request-trial">Request a Trial</Button>
                <Button to="/join" variant="ghost">
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
