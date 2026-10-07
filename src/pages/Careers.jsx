import { Search, Handshake, ShieldCheck, Sprout } from 'lucide-react'
import { PageHero, Section, SectionHeading, Reveal, SpotlightCard, usePageSeo } from '../components/ui.jsx'
import Web3Form from '../components/Form.jsx'
import { site } from '../config/site.js'
import { EmailLine } from '../components/ContactInfo.jsx'

const tracks = [
  [Search, 'Expert Recruitment', 'You find the one person who can answer a hard question, and you enjoy the hunt.'],
  [Handshake, 'Client Service', 'You scope a brief in ten minutes and keep a deal team calm on a tight deadline.'],
  [ShieldCheck, 'Compliance & Operations', 'You care about getting the details right, every time, without slowing anyone down.'],
]

const values = [
  'Early responsibility. You will run real projects in your first weeks.',
  'Direct feedback, given often and in both directions.',
  'Remote-friendly, with working hours that overlap our clients’.',
  'Room to shape how the company works as it grows.',
]

export default function Careers() {
  usePageSeo('/careers')
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title={
          <>
            Find the person <span className="serif-accent text-accent">who knows.</span>
          </>
        }
        intro="Our work is finding the right expert for every question, and doing it properly. If that sounds like you, tell us now and we will be in touch when the right seat opens."
      />

      <Section className="!pt-0">
        <SectionHeading eyebrow="Where you could fit" title="Three ways in." />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {tracks.map(([Icon, t, b], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <SpotlightCard className="h-full p-8">
                <Icon size={22} className="text-accent" />
                <h3 className="mt-6 text-[20px] font-semibold">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted">{b}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionHeading eyebrow="Working here" title="What to expect." />
            <ul className="mt-10 space-y-5">
              {values.map((v) => (
                <Reveal key={v}>
                  <li className="flex gap-4 text-[16px] leading-relaxed text-body">
                    <Sprout size={18} className="mt-1 shrink-0 text-accent" />
                    {v}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal delay={0.1}>
            <div className="rounded-3xl p-7 glass sm:p-10">
              <h3 className="text-[22px] font-semibold">Open application</h3>
              <p className="mt-2 text-[14.5px] text-muted">Tell us who you are and which track interests you.</p>
              <EmailLine who="careers" label="Or email" className="mb-8 mt-1" />
              <Web3Form
                accessKey={site.web3forms.general}
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
