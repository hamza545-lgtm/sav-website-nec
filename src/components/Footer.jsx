'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { Wordmark } from './Logo'
import { Address, EmailList } from './ContactInfo'
import { site } from '@/config/site'

const cols = [
  {
    title: 'Services',
    links: [
      ['Expert Calls & IDIs', '/services#expert-calls'],
      ['B2B Surveys', '/services#b2b-surveys'],
      ['Focus Groups', '/services#focus-groups'],
      ['Custom Recruitment', '/services#custom-recruitment'],
      ['All services', '/services'],
    ],
  },
  {
    title: 'Company',
    links: [
      ['Clients', '/clients'],
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
      ['Request a Trial', '/request-trial'],
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
    <footer className="theme-dark relative overflow-hidden bg-[#08162B]">
      <div className="glow-line absolute inset-x-0 top-0 opacity-70" />
      <div className="container-site grid gap-12 pb-12 pt-14 lg:grid-cols-[1.3fr_2fr] lg:pt-16">
        <div>
          <Link href="/" aria-label="Savnec home">
            <Wordmark height={24} />
          </Link>
          <p className="mt-6 max-w-sm text-[21px] font-medium leading-snug tracking-tight text-fg">The central point for expert sourcing.</p>
          <Address className="mt-6" showName={false} />
          <EmailList className="mt-5" />
          {socials.length > 0 && (
            <div className="mt-6 flex gap-3">
              {socials.map(([name, url]) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-full border border-line/[0.12] px-4 py-2 text-[13.5px] text-body transition-colors hover:border-emerald-400/50 hover:text-fg"
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
              <h2 className="font-mono text-[12px] font-normal uppercase tracking-[0.16em] text-body/80">{c.title}</h2>
              <ul className="mt-5 space-y-3">
                {c.links.map(([label, to]) => (
                  <li key={label}>
                    <Link href={to} className="link-underline text-[15px] text-body hover:text-fg">
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
        <div className="mx-auto h-[64px] max-w-site overflow-hidden opacity-[0.06] [mask-image:linear-gradient(to_bottom,#000_30%,transparent)] sm:h-[150px]">
          <Wordmark height={160} className="h-auto w-full" />
        </div>
      </div>

      <div className="relative border-t border-line/[0.1]">
        <div className="container-site flex flex-col gap-4 py-6 text-[13.5px] text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="link-underline hover:text-fg">
              Privacy & Cookie Policy
            </Link>
            <Link href="/terms" className="link-underline hover:text-fg">
              Terms & Conditions
            </Link>
            <Link href="/compliance" className="link-underline hover:text-fg">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
