import { Link } from 'react-router-dom'
import { ArrowUpRight, Building, UserPlus, MessageCircle, MapPin, Clock } from 'lucide-react'
import { PageHero, Section, Reveal, SpotlightCard, useSeo } from '../components/ui.jsx'
import Web3Form from '../components/Form.jsx'
import { site } from '../config/site.js'

const routes = [
  { to: '/request-trial', icon: Building, title: 'I need experts', body: 'Start a trial project or discuss an upcoming brief.', cta: 'Request a Trial' },
  { to: '/join', icon: UserPlus, title: 'I am an expert', body: 'Apply to join the network and receive relevant projects.', cta: 'Join the network' },
  { to: '#general', icon: MessageCircle, title: 'Something else', body: 'Partnerships, press, vendor onboarding or general questions.', cta: 'Send a message' },
]

export default function Contact() {
  useSeo('Contact Us', 'Contact Savnec about a research project, joining the expert network or anything else.')
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
      </Section>

      <Section id="general">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <h2 className="text-[34px] font-semibold leading-tight sm:text-[42px]">General inquiries</h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted">
              For anything that is not a research project or an expert application.
            </p>
            <div className="mt-10 space-y-5 text-[15px] text-body">
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-accent" />
                <span>
                  {site.legalName}
                  <br />
                  {site.address || site.hq}
                </span>
              </p>
              <p className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 shrink-0 text-accent" />
                Replies within one business day
              </p>
              {site.showEmails && (
                <p className="pl-8">
                  <a href={`mailto:${site.emails.general}`} className="text-fg hover:text-accent">
                    {site.emails.general}
                  </a>
                </p>
              )}
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
