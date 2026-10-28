'use client'

import { Wallet, CalendarClock, Lock, Globe, Phone, ListChecks, Users, Brain, X, Check, BadgeCheck } from 'lucide-react'
import { PageHero, Button, Section, SectionHeading, Reveal, SpotlightCard, Eyebrow } from '@/components/ui'
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
      <div className="flex items-center justify-between">
        <Eyebrow as="h2">At a glance</Eyebrow>
        <BadgeCheck size={18} className="text-accent" />
      </div>
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
  [Wallet, 'Paid for your time', 'Your rate is agreed before every engagement. No unpaid "intro calls".'],
  [CalendarClock, 'On your schedule', 'Accept what interests you, decline what doesn’t. Calls fit your working week and time zone.'],
  [Lock, 'Clear boundaries', 'You share experience and judgment, never confidential information. We brief you before every call.'],
  [Globe, 'Interesting questions', 'Investors, strategy teams and researchers who want to understand your industry the way you do.'],
]

const work = [
  [Phone, 'Expert calls & IDIs', 'One-to-one calls or in-depth interviews, usually 30 to 60 minutes.'],
  [ListChecks, 'B2B surveys', 'Structured questions you complete online in your own time.'],
  [Users, 'Focus groups & diary studies', 'Small-group discussions, or short entries about your working day.'],
  [Brain, 'AI evaluation projects', 'Reviewing and grading model outputs in your field.'],
]

const steps = [
  ['Apply', 'Share your background in a short form. It takes about five minutes.'],
  ['Get matched', 'When a project fits your experience, we send a short description and a few screening questions.'],
  ['Confirm', 'Agree the rate and time, accept the engagement terms and confirm you have no conflicts.'],
  ['Consult & get paid', 'Have the conversation. Payment is processed after the engagement is complete.'],
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
            Your experience has a <span className="serif-accent text-accent">market rate.</span>
          </>
        }
        intro="Senior operators, specialists and former executives use Savnec to share what they know with the people making decisions about their industry. Paid, confidential and on your terms."
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
        <SectionHeading eyebrow="Why experts join" title="Respect for your time." />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map(([Icon, t, b], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <SpotlightCard className="h-full p-6 sm:p-7">
                <Icon size={22} className="text-accent" />
                <h3 className="mt-5 text-[19px] font-semibold">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{b}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="navy">
        <SectionHeading title="How it works" intro="No minimum hours, no exclusivity and no cost to join." />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([t, b], i) => (
            <Reveal as="li" key={t} delay={i * 0.07}>
              <div className="h-full rounded-2xl border border-line/[0.12] bg-sunk/60 p-6">
                <span className="font-serif text-[40px] italic leading-none text-accent">{i + 1}</span>
                <h3 className="mt-4 text-[19px] font-semibold">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-body">{b}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section>
        <SectionHeading title="Ways to take part" />
        <div className="mt-9 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {work.map(([Icon, t, b], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <div className="flex h-full gap-4 rounded-2xl border border-line/[0.09] bg-card p-6">
                <Icon size={20} className="mt-0.5 shrink-0 text-accent" />
                <div>
                  <h3 className="text-[17px] font-semibold">{t}</h3>
                  <p className="mt-1.5 text-[14.5px] leading-relaxed text-muted">{b}</p>
                </div>
              </div>
            </Reveal>
          ))}
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
