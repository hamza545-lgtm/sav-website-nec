'use client'

import { PageHero, Section, SectionHeading, Reveal, Eyebrow, Button } from '@/components/ui'
import { CtaBand } from '@/components/Visuals'

const pillars = [
  ['Verified identity & history', 'Identity, employer and prior roles checked against public records.'],
  ['Conflict screening', 'Every engagement checked against the project and your restrictions.'],
  ['Binding confidentiality', 'Terms of engagement, including MNPI obligations, reconfirmed per project.'],
  ['MNPI prohibited', 'No material non-public or confidential information from any employer.'],
  ['Client anonymity', 'Your identity stays private unless you choose to share it.'],
  ['Data protection', 'Collected for a defined purpose, in line with GDPR and CCPA principles.'],
]

const lifecycle = [
  ['Onboarding', 'Identity, employment and terms of engagement'],
  ['Project screening', 'Conflict questions and client restrictions applied'],
  ['Pre-call reminder', 'Confidentiality and MNPI obligations restated'],
  ['Engagement', 'Expert may decline any question, client may end any call'],
  ['Record keeping', 'Engagement records kept for audit and review'],
]

const controls = [
  ['Restricted lists', 'Exclude companies, current employees or named individuals.'],
  ['Cool-off periods', 'Set a minimum time since an expert left a company.'],
  ['Custom attestations', 'Add your own compliance questions to every screener.'],
  ['Chaperoned calls', 'A Savnec team member attends sensitive calls.'],
  ['Recording on consent', 'Recorded or transcribed only with consent from both sides.'],
]

export default function Compliance() {
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title={
          <>
            Built so your compliance team says yes.
          </>
        }
        intro="Our framework is designed around the controls investment firms, consultancies and their counsel expect to see."
      >
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <Button to="/contact" variant="ghost">
            Request our compliance pack
          </Button>
          <p className="text-[14.5px] font-medium text-fg/80">Aligned with the ESOMAR/ICC International Code</p>
        </div>
      </PageHero>

      <Section>
        <SectionHeading title="Six controls on every engagement" />
        <div className="mt-9 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(([t, b], i) => (
            <Reveal key={t} delay={(i % 3) * 0.05}>
              <div className="h-full border-t border-line/[0.12] py-6">
                <h3 className="text-[19px] font-semibold">{t}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{b}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading eyebrow="Lifecycle" title="Compliance at every stage of an engagement" />
        <div className="relative mt-11">
          <div aria-hidden="true" className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-600 opacity-70 lg:block" />
          <ol className="grid gap-7 lg:grid-cols-5">
            {lifecycle.map(([t, b], i) => (
              <Reveal as="li" key={t} delay={0.1 * i}>
                <div className="relative flex gap-4 lg:block">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/50 bg-page font-mono text-[13px] text-accent">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-semibold lg:mt-5">{t}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-body">{b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <SectionHeading eyebrow="Client controls" title="Your policy, applied to every project" intro="Share your policy once. We apply it to every project." />
          <div className="divide-y divide-line/[0.1] rounded-3xl glass">
            {controls.map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="p-5 sm:px-6">
                  <h3 className="text-[17px] font-semibold">{t}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-muted">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section className="!pt-0">
        <Reveal>
          <div className="rounded-3xl border border-line/[0.11] bg-card p-7 sm:p-10">
            <Eyebrow as="h2">Standards</Eyebrow>
            <p className="mt-5 max-w-4xl text-[20px] leading-relaxed text-body sm:text-[23px]">
              Our research practices are aligned with the <span className="text-fg">ESOMAR/ICC International Code</span> on market, opinion and
              social research, and our data handling is designed around <span className="text-fg">GDPR</span> and <span className="text-fg">CCPA</span>{' '}
              principles.
            </p>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Due diligence on us"
        title="Send us your vendor questionnaire."
        body="We are happy to complete your onboarding documentation and walk your compliance team through our process."
        primary={{ to: '/contact', label: 'Contact us' }}
        secondary={{ to: '/request-trial', label: 'Request a Trial' }}
      />
    </>
  )
}
