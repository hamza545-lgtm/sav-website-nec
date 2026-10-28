'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero, Section, SectionHeading, Reveal, Eyebrow } from '@/components/ui'
import { CtaBand } from '@/components/Visuals'
import { Address, EmailCards } from '@/components/ContactInfo'

const principles = [
  ['Fit beats volume', 'Ten profiles that almost match waste a client’s afternoon. Three that fit exactly save their week.'],
  ['Say what is true', 'If a brief is hard to fill, we say so on day one. Clients plan around honest timelines.'],
  ['Protect both sides', 'Clients trust us with their questions. Experts trust us with their reputations. We guard both.'],
  ['Own the outcome', 'One team from scoping to the final call. When something slips, you know who will fix it.'],
]

// Marker positions on the map, in percent of its width and height (Miller projection, see
// public/images/world-dots.svg).
const regions = [
  ['North America', 22.2, 39.3],
  ['Latin America', 33.3, 71.0],
  ['Europe', 53.3, 32.9, 'above'],
  ['Middle East & Africa', 57.2, 57.2],
  ['Asia Pacific', 80.0, 47.7],
]

const more = [
  ['/insights', 'Insights'],
  ['/faqs', 'FAQs'],
  ['/careers', 'Careers'],
  ['/contact', 'Contact Us'],
]

function RecruitMap() {
  return (
    <div className="relative overflow-hidden rounded-3xl p-6 glass sm:p-8">
      <Eyebrow as="h2">Where we recruit</Eyebrow>
      <div className="relative mt-6 aspect-[1000/486] w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/world-dots.svg" alt="" aria-hidden="true" className="absolute inset-0 h-full w-full select-none opacity-50" draggable="false" />
        {/* Pulsing markers first, labels after them, so no animation is ever drawn under a label. */}
        {regions.map(([name, x, y], i) => (
          <span key={`${name}-dot`} aria-hidden="true" className="absolute flex h-3 w-3 -translate-x-1/2 -translate-y-1/2" style={{ left: `${x}%`, top: `${y}%` }}>
            <span className="pointer-events-none absolute -inset-[7px] overflow-hidden">
              <span className="absolute inset-[7px] inline-flex animate-pulseRing rounded-full bg-emerald-400" style={{ animationDelay: `${i * 0.4}s` }} />
            </span>
            <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-tick shadow-[0_0_0_1px_rgba(15,110,76,0.3)]" />
          </span>
        ))}
        <ul>
          {regions.map(([name, x, y, place]) => (
            <li
              key={name}
              className={`absolute -translate-x-1/2 whitespace-nowrap rounded-md bg-card/85 px-1.5 py-0.5 text-[10.5px] font-semibold text-fg sm:text-[12.5px] ${
                place === 'above' ? '-translate-y-full' : ''
              }`}
              style={{ left: `${x}%`, top: place === 'above' ? `calc(${y}% - 10px)` : `calc(${y}% + 10px)` }}
            >
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6 flex flex-col gap-4 border-t border-line/[0.1] pt-5 sm:flex-row sm:items-end sm:justify-between">
        <Address />
        <p className="text-[14px] text-muted sm:text-right">Serving clients and recruiting experts globally.</p>
      </div>
    </div>
  )
}

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Savnec"
        title={
          <>
            Built around the right conversation.
          </>
        }
        intro="Savnec puts research, investment and strategy teams in conversation with the people who know the answer, and makes every one of those conversations safe and worth the time."
      />

      <Section className="!pt-0">
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <Reveal>
            <div className="space-y-5 text-[17.5px] leading-relaxed text-body">
              <p>
                Some of the best evidence sits in people’s heads: the buyer who ran the tender, the operator who built the plant, the
                clinician who chooses the therapy.
              </p>
              <p>
                Every Savnec project starts with your question and a recruiter who knows the sector. They find the companies and roles
                that hold the answer, approach the right people directly and screen them before you see a single name.
              </p>
              <p className="font-medium text-fg">Profiles you can trust, and a team that treats your deadline as its own.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <RecruitMap />
          </Reveal>
        </div>
      </Section>

      <Section tone="navy">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="Principles" title="How we work" />
          <div className="grid gap-x-10 sm:grid-cols-2">
            {principles.map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="h-full border-t border-line/[0.14] py-6">
                  <h3 className="text-[20px] font-semibold">{t}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-body">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <SectionHeading title="Contact" intro="Write to the team that handles your request. A person replies within one business day." />
            <Reveal delay={0.1}>
              <Address className="mt-6 text-[15px]" />
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <EmailCards />
          </Reveal>
        </div>
        <Reveal delay={0.05}>
          <ul className="mt-10 grid gap-px border-y border-line/[0.1] bg-line/[0.1] sm:grid-cols-2 lg:grid-cols-4">
            {more.map(([to, t]) => (
              <li key={to} className="bg-page">
                <Link href={to} className="group flex items-center justify-between px-1 py-5 text-[17px] font-semibold text-fg transition-colors hover:text-accent sm:px-5">
                  {t}
                  <ArrowUpRight size={16} className="text-muted transition-colors group-hover:text-accent" />
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>
      </Section>

      <CtaBand />
    </>
  )
}
