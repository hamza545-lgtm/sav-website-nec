'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { PageHero, Section, Reveal, SpotlightCard } from '@/components/ui'
import Web3Form from '@/components/Form'
import { site } from '@/config/site'
import { Address, EmailCards, EmailLine } from '@/components/ContactInfo'

const routes = [
  { to: '/request-trial', title: 'I need experts', body: 'Start a trial project or discuss an upcoming brief.', cta: 'Request a Trial' },
  { to: '/join', title: 'I am an expert', body: 'Apply to join the network and receive relevant projects.', cta: 'Join the network' },
  { to: '#general', title: 'Something else', body: 'Partnerships, press, vendor onboarding or general questions.', cta: 'Send a message' },
]

export default function Contact() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Reach the right team.
          </>
        }
        intro="Choose the route that fits. Every message is read by a person and answered within one business day."
      />

      <Section className="!pt-0">
        <h2 className="sr-only">Ways to reach Savnec</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {routes.map(({ to, title, body, cta }, i) => {
            const inner = (
              <div className="flex h-full flex-col p-7">
                <h3 className="text-[21px] font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
                <span className="mt-7 inline-flex items-center gap-2 text-[15px] font-medium text-fg">
                  {cta} <ArrowUpRight size={15} className="text-accent" />
                </span>
              </div>
            )
            return (
              <Reveal key={title} delay={i * 0.06}>
                <SpotlightCard className="h-full">
                  {to.startsWith('#') ? <a href={to}>{inner}</a> : <Link href={to}>{inner}</Link>}
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
        {site.showEmails && (
          <Reveal delay={0.1}>
            <div className="mt-10">
              <p className="label mb-4">Or email the right team directly</p>
              <EmailCards />
            </div>
          </Reveal>
        )}
      </Section>

      <Section id="general" tone="sunk">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
          <div>
            <h2 className="text-[30px] font-semibold leading-tight sm:text-[40px]">General inquiries</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              For anything that is not a research project or an expert application.
            </p>
            <div className="mt-10 space-y-6">
              <Address className="text-[15px]" />
              <EmailLine who="general" label="Email" />
              <p className="flex items-center gap-2.5 text-[14px] text-muted">
                Replies within one business day
              </p>
            </div>
          </div>
          <Reveal>
            <div className="rounded-3xl bg-card p-7 shadow-[0_1px_2px_rgba(10,25,47,0.04),0_18px_40px_-28px_rgba(10,25,47,0.25)] sm:p-10">
              <Web3Form
                accessKey={site.web3forms.general}
                fallbackEmail={site.emails.general}
                subject="General inquiry from savnec.com"
                submitLabel="Send message"
                successTitle="Message received."
                successBody="Thank you for getting in touch. We will reply within one business day."
                fields={[
                  { name: 'name', label: 'Full name', required: true },
                  { name: 'email', label: 'Email', type: 'email', required: true },
                  { name: 'company', label: 'Company' },
                  { name: 'topic', label: 'Topic', type: 'select', options: ['Partnership', 'Press', 'Vendor onboarding', 'Compliance pack request', 'Other'], required: true },
                  { name: 'message', label: 'Message', type: 'textarea', full: true, required: true },
                ]}
              />
            </div>
          </Reveal>
        </div>
      </Section>
    </>
  )
}
