import { Link } from 'react-router-dom'
import { ArrowUpRight, Building, UserPlus, MessageCircle, Clock } from 'lucide-react'
import { PageHero, Section, Reveal, SpotlightCard, usePageSeo } from '../components/ui.jsx'
import Web3Form from '../components/Form.jsx'
import { site } from '../config/site.js'
import { Address, EmailCards, EmailLine } from '../components/ContactInfo.jsx'

const routes = [
  { to: '/request-trial', icon: Building, title: 'I need experts', body: 'Start a trial project or discuss an upcoming brief.', cta: 'Request a Trial' },
  { to: '/join', icon: UserPlus, title: 'I am an expert', body: 'Apply to join the network and receive relevant projects.', cta: 'Join the network' },
  { to: '#general', icon: MessageCircle, title: 'Something else', body: 'Partnerships, press, vendor onboarding or general questions.', cta: 'Send a message' },
]

export default function Contact() {
  usePageSeo('/contact')
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Reach the <span className="serif-accent text-accent">right team</span> first time.
          </>
        }
        intro="Choose the route that fits. Every message is read by a person and answered within one business day."
      />

      <Section className="!pt-0">
        <div className="grid gap-4 md:grid-cols-3">
          {routes.map(({ to, icon: Icon, title, body, cta }, i) => {
            const inner = (
              <div className="flex h-full flex-col p-8">
                <Icon size={22} className="text-accent" />
                <h3 className="mt-6 text-[21px] font-semibold">{title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{body}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-[14px] text-fg">
                  {cta} <ArrowUpRight size={15} className="text-accent" />
                </span>
              </div>
            )
            return (
              <Reveal key={title} delay={i * 0.06}>
                <SpotlightCard className="h-full">
                  {to.startsWith('#') ? <a href={to}>{inner}</a> : <Link to={to}>{inner}</Link>}
                </SpotlightCard>
              </Reveal>
            )
          })}
        </div>
        {site.showEmails && (
          <Reveal delay={0.1}>
            <div className="mt-12">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">Or email the right team directly</p>
              <EmailCards />
            </div>
          </Reveal>
        )}
      </Section>

      <Section id="general">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-[34px] font-semibold leading-tight sm:text-[42px]">General inquiries</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              For anything that is not a research project or an expert application.
            </p>
            <div className="mt-10 space-y-6">
              <Address className="text-[15px]" />
              <EmailLine who="general" label="Email" />
              <p className="flex items-center gap-2.5 text-[14px] text-muted">
                <Clock size={16} className="shrink-0 text-accent" />
                Replies within one business day
              </p>
            </div>
          </div>
          <Reveal>
            <div className="rounded-3xl p-7 glass sm:p-10">
              <Web3Form
                accessKey={site.web3forms.general}
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
