'use client'

import { PageHero, Section, SectionHeading, Reveal } from '@/components/ui'
import Web3Form from '@/components/Form'
import { site } from '@/config/site'
import { EmailLine } from '@/components/ContactInfo'

const tracks = [
  ['Expert Recruitment', 'You find the one person who can answer a hard question.'],
  ['Client Service', 'You scope a brief fast and keep a deal team calm on deadline.'],
  ['Compliance & Operations', 'You get the details right without slowing anyone down.'],
]

const values = [
  'Early responsibility. You will run real projects in your first weeks.',
  'Direct feedback, given often and in both directions.',
  'Remote-friendly, with working hours that overlap our clients’.',
  'Room to shape how the company works as it grows.',
]

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Find the person who knows
          </>
        }
        intro="Our work is finding the right expert for every question, and doing it properly. If that sounds like you, tell us now and we will be in touch when the right seat opens."
      />

      <Section className="!pt-0">
        <SectionHeading title="Three tracks" />
        <div className="mt-9 grid gap-x-10 md:grid-cols-3">
          {tracks.map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.05}>
              <div className="h-full border-t border-line/[0.12] py-6">
                <h3 className="text-[20px] font-semibold">{t}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="sunk">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
          <div>
            <SectionHeading title="Working at Savnec" />
            <ul className="mt-8 space-y-5">
              {values.map((v) => (
                <Reveal key={v}>
                  <li className="flex gap-4 text-[16px] leading-relaxed text-body">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" />
                    {v}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-3xl bg-card p-7 shadow-[0_1px_2px_rgba(10,25,47,0.04),0_18px_40px_-28px_rgba(10,25,47,0.25)] sm:p-10">
              <h3 className="text-[22px] font-semibold">Open application</h3>
              <p className="mt-2 text-[15px] text-muted">Tell us who you are and which track interests you.</p>
              <EmailLine who="careers" label="Or email" className="mb-8 mt-1" />
              <Web3Form
                accessKey={site.web3forms.general}
                fallbackEmail={site.emails.careers}
                subject="Careers: open application"
                submitLabel="Send application"
                successTitle="Application received."
                successBody="Thank you. We read every application and will contact you if there is a fit."
                fields={[
                  { name: 'name', label: 'Full name', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'linkedin', label: 'LinkedIn profile URL', type: 'url', full: true },
                  { name: 'track', label: 'Track', type: 'select', options: ['Expert Recruitment', 'Client Service', 'Compliance & Operations', 'Something else'], required: true },
                  { name: 'location', label: 'Location', required: true },
                  { name: 'message', label: 'Why Savnec, in a few lines', type: 'textarea', rows: 4, full: true, required: true },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
