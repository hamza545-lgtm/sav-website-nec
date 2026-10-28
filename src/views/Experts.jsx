'use client'

import { X, Check } from 'lucide-react'
import { PageHero, Button, Section, SectionHeading, Reveal, Eyebrow } from '@/components/ui'
import { CtaBand } from '@/components/Visuals'
import { EmailLine } from '@/components/ContactInfo'

const terms = [
  ['Cost to join', 'Free'],
  ['Minimum commitment', 'None'],
  ['Your rate', 'Agreed before every engagement'],
  ['Payment', 'After each engagement'],
  ['Typical call', '30 to 60 minutes'],
  ['Exclusivity', 'None. Pause or leave any time'],
]

function TermsCard() {
  return (
    <div className="rounded-3xl p-6 glass sm:p-7">
      <Eyebrow as="h2">At a glance</Eyebrow>
      <dl className="mt-5 divide-y divide-line/[0.08]">
        {terms.map(([k, v]) => (
          <div key={k} className="flex items-baseline justify-between gap-6 py-3 first:pt-0 last:pb-0">
            <dt className="text-[14.5px] text-muted">{k}</dt>
            <dd className="text-right text-[15px] font-semibold text-fg">{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

const reasons = [
  ['Paid for your time', 'Your rate is agreed before every engagement.'],
  ['On your schedule', 'Accept what interests you. Calls fit your week and time zone.'],
  ['Clear boundaries', 'Share experience and judgment, never confidential information.'],
  ['Interesting questions', 'From teams who want to understand your industry.'],
]

const work = [
  ['Expert calls & IDIs', 'One-to-one conversations, usually 30 to 60 minutes.'],
  ['B2B surveys', 'Structured questions, answered online in your own time.'],
  ['Focus groups & diary studies', 'Small-group discussions or short entries about your work.'],
  ['AI evaluation projects', 'Reviewing and grading model outputs in your field.'],
]

const steps = [
  ['Apply', 'A short form about your background. About five minutes.'],
  ['Get matched', 'We send a project summary and a few screening questions.'],
  ['Confirm', 'Agree the rate and time and confirm you have no conflicts.'],
  ['Consult & get paid', 'Have the conversation. Payment follows the engagement.'],
]

const dos = ['Your own experience and judgment', 'How an industry or role works in practice', 'Publicly available information', 'Your views on trends and competitors']
const donts = ['Confidential information from any employer', 'Material non-public information (MNPI)', 'Trade secrets or internal financials', 'Anything that breaches an agreement you have signed']

export default function Experts() {
  return (
    <>
      <PageHero
        eyebrow="For experts"
        title={
          <>
            Your experience has a market rate.
          </>
        }
        intro="Share what you know with the teams making decisions about your industry. Paid, confidential and on your terms."
        aside={<TermsCard />}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/join">Join the network</Button>
          <Button to="/faqs#experts" variant="ghost">
            Expert FAQs
          </Button>
        </div>
        <EmailLine who="experts" label="Questions first? Write to" className="mt-5" />
      </PageHero>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading eyebrow="Why experts join" title="Respect for your time." />
          <div className="grid gap-x-10 sm:grid-cols-2">
            {reasons.map(([t, b], i) => (
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

      <Section tone="navy">
        <SectionHeading title="How it works" intro="No minimum hours, no exclusivity and no cost to join." />
        <div className="relative mt-11">
          <div aria-hidden="true" className="absolute left-0 right-0 top-[22px] hidden h-px bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-600 opacity-60 lg:block" />
          <ol className="grid gap-7 lg:grid-cols-4 lg:gap-10">
            {steps.map(([t, b], i) => (
              <Reveal as="li" key={t} delay={0.1 * i}>
                <div className="flex gap-4 lg:block">
                  <span className="relative z-10 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-emerald-400/50 bg-page font-ui text-[16px] font-semibold text-accent">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[19px] font-semibold lg:mt-5">{t}</h3>
                    <p className="mt-1.5 text-[15.5px] leading-relaxed text-body">{b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading title="Ways to take part" intro="Choose the formats that suit you. You can decline any request." />
          <Reveal>
            <ul className="divide-y divide-line/[0.1] rounded-3xl glass">
              {work.map(([t, b]) => (
                <li key={t} className="p-5 sm:px-6">
                  <h3 className="text-[17.5px] font-semibold">{t}</h3>
                  <p className="mt-1 text-[15.5px] leading-relaxed text-muted">{b}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Section>

      <Section tone="sunk">
        <SectionHeading title="What you can and can't discuss" intro="These rules protect you, your employers and our clients. We repeat them before every engagement." />
        <div className="mt-9 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-emerald-500/25 bg-card p-7 sm:p-8">
              <h3 className="text-[18px] font-semibold">You can share</h3>
              <ul className="mt-5 space-y-3.5">
                {dos.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[15.5px] text-body">
                    <Check size={17} className="mt-0.5 shrink-0 text-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-line/[0.11] bg-card p-7 sm:p-8">
              <h3 className="text-[18px] font-semibold">You must never share</h3>
              <ul className="mt-5 space-y-3.5">
                {donts.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[15.5px] text-body">
                    <X size={17} className="mt-0.5 shrink-0 text-red-500" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <CtaBand
        eyebrow="Join the network"
        title="Five minutes to apply. No obligation after."
        body="Tell us where you have worked and what you know. We reach out when a project matches your background."
        primary={{ to: '/join', label: 'Join the network' }}
        secondary={null}
        emailWho="experts"
      />
    </>
  )
}
