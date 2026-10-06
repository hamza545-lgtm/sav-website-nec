import { motion } from 'framer-motion'
import { UserCheck, Scale, FileKey, Ban, EyeOff, Database, ClipboardCheck, Headphones, Hourglass, ListX, Mic } from 'lucide-react'
import { PageHero, Section, SectionHeading, Reveal, SpotlightCard, Eyebrow, Button, useSeo } from '../components/ui.jsx'
import { CtaBand } from '../components/Visuals.jsx'

const pillars = [
  [UserCheck, 'Verified identity & history', 'Experts confirm identity, current employer and relevant prior roles. We check what they tell us against public professional records.'],
  [Scale, 'Conflict screening', 'Every engagement is checked for conflicts of interest against the project, the expert’s current role and the client’s restrictions.'],
  [FileKey, 'Binding confidentiality', 'Experts accept our terms of engagement, including confidentiality and MNPI obligations, and reconfirm them before each project.'],
  [Ban, 'MNPI prohibited', 'Experts may not disclose material non-public information or confidential information belonging to any current or former employer.'],
  [EyeOff, 'Client anonymity', 'Client identity is withheld from experts unless the client chooses to disclose it.'],
  [Database, 'Data protection', 'Personal data is collected for a defined purpose, kept only as long as needed and handled with GDPR and CCPA principles in mind.'],
]

const lifecycle = [
  ['Onboarding', 'Identity, employment and terms of engagement'],
  ['Project screening', 'Conflict questions and client restrictions applied'],
  ['Pre-call reminder', 'Confidentiality and MNPI obligations restated'],
  ['Engagement', 'Expert may decline any question, client may end any call'],
  ['Record keeping', 'Engagement records kept for audit and review'],
]

const controls = [
  [ListX, 'Restricted lists', 'Exclude companies, current employees or named individuals from your projects.'],
  [Hourglass, 'Cool-off periods', 'Set a minimum time since an expert left a company before they can speak with you.'],
  [ClipboardCheck, 'Custom attestations', 'Add your own compliance questions to every expert screener.'],
  [Headphones, 'Chaperoned calls', 'Request a Savnec team member to attend and monitor sensitive calls.'],
  [Mic, 'Recording on consent', 'Calls are recorded or transcribed only with advance consent from both sides.'],
]

export default function Compliance() {
  useSeo('Compliance', 'How Savnec screens experts, prevents conflicts and protects confidential and material non-public information.')
  return (
    <>
      <PageHero
        eyebrow="Compliance"
        title={
          <>
            Built so your compliance team <span className="serif-accent text-emerald-300">says yes.</span>
          </>
        }
        intro="Expert research only works if everyone can trust the conversation. Our framework is designed around the controls investment firms, consultancies and their counsel expect to see."
      >
        <Button to="/contact" variant="ghost">
          Request our compliance pack
        </Button>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Framework" title="Six controls on every engagement." />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map(([Icon, t, b], i) => (
            <Reveal key={t} delay={(i % 3) * 0.06}>
              <SpotlightCard className="h-full p-7">
                <div className="flex items-center justify-between">
                  <Icon size={21} className="text-emerald-300" />
                  <span className="font-mono text-[11px] text-steel">0{i + 1}</span>
                </div>
                <h3 className="mt-6 text-[19px] font-semibold">{t}</h3>
                <p className="mt-2 text-[14.5px] leading-relaxed text-steel">{b}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Lifecycle" title="Compliance is a process, not a checkbox." align="center" />
        <div className="relative mt-16">
          <div className="absolute left-0 right-0 top-[22px] hidden h-px bg-white/10 lg:block" />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-0 right-0 top-[22px] hidden h-px origin-left bg-gradient-to-r from-emerald-600 via-emerald-300 to-emerald-600 shadow-[0_0_10px_#2BC48A] lg:block"
          />
          <div className="grid gap-8 lg:grid-cols-5">
            {lifecycle.map(([t, b], i) => (
              <Reveal key={t} delay={0.15 * i}>
                <div className="relative">
                  <span className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-emerald-400/50 bg-navy-950 font-mono text-[12px] text-emerald-300">
                    {i + 1}
                  </span>
                  <h3 className="mt-6 text-[18px] font-semibold">{t}</h3>
                  <p className="mt-2 text-[14.5px] leading-relaxed text-steel">{b}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <SectionHeading
              eyebrow="Client controls"
              title="Your policy, applied automatically."
              intro="Share your expert network policy once. We configure every future project around it."
            />
          </div>
          <div className="divide-y divide-white/[0.07] rounded-3xl glass">
            {controls.map(([Icon, t, b], i) => (
              <Reveal key={t} delay={i * 0.05}>
                <div className="flex gap-5 p-6 sm:p-7">
                  <Icon size={20} className="mt-1 shrink-0 text-emerald-300" />
                  <div>
                    <h3 className="text-[17px] font-semibold">{t}</h3>
                    <p className="mt-1 text-[14.5px] leading-relaxed text-steel">{b}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="rounded-3xl border border-white/[0.08] p-8 sm:p-12">
            <Eyebrow>Standards</Eyebrow>
            <p className="mt-6 max-w-4xl text-[22px] leading-relaxed text-ink sm:text-[26px]">
              Our research practices are aligned with the{' '}
              <span className="text-white">ESOMAR/ICC International Code</span> on market, opinion and social research, and our
              data handling is designed around <span className="text-white">GDPR</span> and <span className="text-white">CCPA</span> principles.
            </p>
          </div>
        </Reveal>
      </Section>

      <CtaBand
        eyebrow="Due diligence on us"
        title={
          <>
            Send us your <span className="serif-accent text-emerald-300">vendor questionnaire.</span>
          </>
        }
        body="We are happy to complete your onboarding documentation and walk your compliance team through our process."
      />
    </>
  )
}
