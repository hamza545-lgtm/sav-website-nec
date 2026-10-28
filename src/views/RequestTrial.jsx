'use client'

import { Check } from 'lucide-react'
import { GlowBackdrop, Eyebrow } from '@/components/ui'
import Web3Form from '@/components/Form'
import { site } from '@/config/site'
import { EmailLine } from '@/components/ContactInfo'
import { industries, formats } from '@/data/content'

export function FormPage({ eyebrow, title, intro, nextTitle, next, emailWho, children }) {
  return (
    <section className="noise relative overflow-hidden pb-16 pt-32 sm:pb-20 sm:pt-40">
      <GlowBackdrop />
      <div className="container-site relative grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        <div className="hero-in">
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-[40px] font-medium leading-[1.05] tracking-tightest sm:text-[54px]">{title}</h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">{intro}</p>
          {emailWho && <EmailLine who={emailWho} className="mt-4" />}
          <div className="mt-10 border-t border-line/[0.1] pt-7">
            <p className="label">{nextTitle}</p>
            <ol className="mt-6 space-y-5">
              {next.map((n, i) => (
                <li key={n} className="flex gap-4 text-[15.5px] leading-relaxed text-body">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-accent">
                    <Check size={12} />
                  </span>
                  {n}
                </li>
              ))}
            </ol>
          </div>
        </div>
        <div className="hero-in relative" style={{ '--hero-delay': '0.15s', '--hero-y': '30px' }}>
          <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-emerald-400/40 via-line/5 to-transparent" />
          <div className="relative rounded-[28px] bg-card/90 p-7 sm:p-10">{children}</div>
        </div>
      </div>
    </section>
  )
}

export default function RequestTrial() {
  return (
    <FormPage
      eyebrow="Request a trial"
      title={
        <>
          Send one live brief
        </>
      }
      intro="Tell us what you are working on. We will scope it with you, recruit for it and share a screened shortlist, so you can judge our work on a real project."
      emailWho="clients"
      nextTitle="What happens next"
      next={[
        'We reply within one business day to confirm scope and any compliance requirements.',
        'Our recruiters source and screen experts against your criteria.',
        'You review anonymized profiles and choose who to speak with.',
      ]}
    >
      <Web3Form
        accessKey={site.web3forms.clients}
        fallbackEmail={site.emails.clients}
        subject="New trial request from savnec.com"
        submitLabel="Request a Trial"
        successTitle="Brief received."
        successBody="Thank you. A member of our team will be in touch within one business day to scope your project."
        fields={[
          { name: 'name', label: 'Full name', required: true },
          { name: 'email', label: 'Work email', type: 'email', required: true },
          { name: 'company', label: 'Company', required: true },
          { name: 'title', label: 'Job title', required: true },
          { name: 'firm_type', label: 'Firm type', type: 'select', required: true, options: ['Market research firm', 'Private equity', 'Venture capital', 'Hedge fund / public markets', 'Corporate strategy', 'Management consulting', 'AI / data company', 'Other'] },
          { name: 'service', label: 'Service', type: 'select', required: true, options: [...formats.map((f) => f.title), 'Not sure yet'] },
          { name: 'industry', label: 'Industry', type: 'select', options: [...industries.map((i) => i.name), 'Other'] },
          { name: 'timeline', label: 'Timeline', type: 'select', options: ['This week', 'Within 2 weeks', 'This month', 'Exploring'] },
          { name: 'brief', label: 'The brief', type: 'textarea', full: true, required: true, placeholder: 'What do you need to learn, and from whom? Include target roles, geographies and any companies to include or exclude.' },
        ]}
      />
    </FormPage>
  )
}
