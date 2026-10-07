import { Link } from 'react-router-dom'
import { ArrowUpRight, MapPin } from 'lucide-react'
import { Wordmark } from './Logo.jsx'
import { site } from '../config/site.js'

const cols = [
  {
    title: 'Clients',
    links: [
      ['How we work', '/clients'],
      ['Expert Calls & IDIs', '/clients#expert-calls'],
      ['B2B Surveys', '/clients#b2b-surveys'],
      ['Focus Groups', '/clients#focus-groups'],
      ['Request a Trial', '/request-trial'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Experts', '/experts'],
      ['Industries', '/industries'],
      ['Compliance', '/compliance'],
      ['About', '/about'],
      ['Careers', '/careers'],
    ],
  },
  {
    title: 'Resources',
    links: [
      ['Insights', '/insights'],
      ['FAQs', '/faqs'],
      ['Contact Us', '/contact'],
      ['Join as an Expert', '/join'],
    ],
  },
]

export default function Footer() {
  const socials = [
    ['LinkedIn', site.social.linkedin],
    ['Instagram', site.social.instagram],
  ].filter(([, url]) => url)

  return (
    <footer className="theme-dark relative overflow-hidden bg-page">
      <div className="glow-line absolute inset-x-0 top-0 opacity-70" />
      <div className="container-site grid gap-14 pb-16 pt-20 lg:grid-cols-[1.3fr_2fr]">
        <div>
          <Link to="/" aria-label="Savnec home">
            <Wordmark height={24} />
          </Link>
          <p className="mt-7 max-w-sm text-[22px] font-medium leading-snug tracking-tight text-fg">
            {site.tagline}
          </p>
          <p className="mt-7 flex items-start gap-2 text-[14px] text-muted">
            <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
            <span>
              Headquartered in {site.hq}
              {site.address && (
                <>
                  <br />
                  {site.address}
                </>
              )}
            </span>
          </p>
          {site.showEmails && (
            <div className="mt-4 space-y-1 text-[14px]">
              <a className="block text-body hover:text-fg" href={`mailto:${site.emails.clients}`}>
                {site.emails.clients}
              </a>
              <a className="block text-body hover:text-fg" href={`mailto:${site.emails.experts}`}>
                {site.emails.experts}
              </a>
            </div>
          )}
          {socials.length > 0 && (
            <div className="mt-7 flex gap-3">
              {socials.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line/[0.12] px-4 py-2 text-[13px] text-body transition-colors hover:border-emerald-400/50 hover:text-fg"
                >
                  {name}
                  <ArrowUpRight size={13} />
                </a>
              ))}
            </div>
          )}
        </div>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{c.title}</h4>
              <ul className="mt-5 space-y-3">
                {c.links.map(([label, to]) => (
                  <li key={label}>
                    <Link to={to} className="text-[14.5px] text-body transition-colors hover:text-fg">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Oversized wordmark watermark */}
      <div className="pointer-events-none select-none px-5 sm:px-8" aria-hidden="true">
        <div className="mx-auto max-w-site opacity-[0.07] [mask-image:linear-gradient(to_bottom,#000_30%,transparent)]">
          <Wordmark height={220} className="h-auto w-full" />
        </div>
      </div>

      <div className="relative border-t border-line/[0.1]">
        <div className="container-site flex flex-col gap-4 py-6 text-[13px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link to="/privacy-policy" className="hover:text-fg">
              Privacy & Cookie Policy
            </Link>
            <Link to="/terms" className="hover:text-fg">
              Terms & Conditions
            </Link>
            <Link to="/compliance" className="hover:text-fg">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
