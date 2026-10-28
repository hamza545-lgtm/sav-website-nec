'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero, Section, Reveal, Eyebrow, Button } from '@/components/ui'
import { CtaBand } from '@/components/Visuals'
import { formats } from '@/data/content'

const included = [
  ['Recruited for your project', 'Sourced from scratch against your brief.'],
  ['Screened before you see them', 'Answers to your questions on every profile.'],
  ['Compliance on every engagement', 'Conflict checks, restricted lists, confidentiality.'],
  ['Scheduling and payments handled', 'One team from first brief to final session.'],
]

function Included() {
  return (
    <div className="rounded-3xl p-6 glass sm:p-7">
      <Eyebrow as="h2">Every service includes</Eyebrow>
      <ul className="mt-5 divide-y divide-line/[0.08]">
        {included.map(([t, b]) => (
          <li key={t} className="py-3.5 first:pt-0 last:pb-0">
            <span className="block text-[15.5px] font-semibold text-fg">{t}</span>
            <span className="block text-[14.5px] text-muted">{b}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Services() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our services"
        intro="Expert calls, surveys, focus groups and specialist recruitment, each recruited, screened and compliance-checked for your project."
        aside={<Included />}
      >
        <Button to="/request-trial">Request a Trial</Button>
      </PageHero>

      <Section className="!pt-2">
        <div className="border-t border-line/[0.12]">
          {formats.map((f) => (
            <Reveal key={f.id} delay={0.04}>
              <article id={f.id} className="grid gap-3 border-b border-line/[0.12] py-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
                <div>
                  <h2 className="text-[26px] font-semibold leading-tight sm:text-[30px]">{f.title}</h2>
                  <p className="mt-2 text-[16.5px] text-fg/75">{f.short}</p>
                </div>
                <div>
                  <p className="text-[17px] leading-relaxed text-body">{f.body}</p>
                  <Link
                    href="/request-trial"
                    className="mt-4 inline-flex items-center gap-1.5 font-ui text-[14.5px] font-semibold text-accent"
                  >
                    <span className="link-underline">Request this service</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand
        title="Not sure which service fits?"
        body="Tell us the question and we’ll suggest the right format."
        secondary={{ to: '/contact', label: 'Contact us' }}
      />
    </>
  )
}
