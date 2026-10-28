'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero, Section, SectionHeading, Reveal, Eyebrow } from '@/components/ui'
import { CtaBand } from '@/components/Visuals'
import { Address, EmailCards } from '@/components/ContactInfo'

const values = [
  ['Fit over volume', 'Three profiles that fit beat ten that almost do.'],
  ['Honesty', 'If a brief is hard to fill, we say so on day one.'],
  ['Integrity', 'Clients trust us with their questions, experts with their reputations. We protect both.'],
  ['Ownership', 'One team owns every project, from scoping to the final call.'],
]

const difference = [
  ['Recruited for every brief', 'We source experts from scratch for each project rather than recycling a database, so every profile fits the question.'],
  ['Screened before you see them', 'Each expert answers your screener and clears a conflict check, so you can decide in minutes.'],
  ['One accountable team', 'The person who scopes your project runs it to the final call. No hand-offs, no ticket queue.'],
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
        title="Built around the right conversation"
        intro="Savnec is a Delaware-registered expert network connecting research, investment and strategy teams with the people who know the answer."
      />

      <Section tone="card" className="border-y border-line/[0.07]">
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          <Reveal>
            <Eyebrow as="h2">Our mission</Eyebrow>
            <p className="mt-4 text-[21px] font-medium leading-[1.45] text-fg sm:text-[24px]">
              To make first-hand expertise easy to reach, so research, investment and strategy teams can decide with confidence.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Eyebrow as="h2">Our purpose</Eyebrow>
            <p className="mt-4 text-[21px] font-medium leading-[1.45] text-fg sm:text-[24px]">
              To find the person who can answer each question, check they are right for it, and run every conversation safely and on
              time.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading title="Our story" />
            <Reveal delay={0.05}>
              <div className="mt-5 space-y-4 text-[17px] leading-relaxed text-body">
                <p>
                  Some of the best evidence sits in people’s heads: the buyer who ran the tender, the operator who built the plant, the
                  clinician who chooses the therapy.
                </p>
                <p>
                  Savnec was built to reach those people properly. Every project starts with your question and a recruiter who knows the
                  sector, who approaches the right people directly and screens them before you see a single name.
                </p>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <RecruitMap />
          </Reveal>
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading title="The Savnec difference" />
        <div className="mt-9 grid gap-x-10 md:grid-cols-3">
          {difference.map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className="h-full border-t border-line/[0.14] py-6">
                <h3 className="text-[20px] font-semibold">{t}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-body">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading title="Our values" />
          <div className="grid gap-x-10 sm:grid-cols-2">
            {values.map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="h-full border-t border-line/[0.12] py-6">
                  <h3 className="text-[19px] font-semibold">{t}</h3>
                  <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section id="contact" tone="sunk">
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
              <li key={to} className="bg-sunk">
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
