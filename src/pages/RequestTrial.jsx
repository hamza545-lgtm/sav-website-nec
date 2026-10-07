import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { GlowBackdrop, Eyebrow, ease, usePageSeo } from '../components/ui.jsx'
import Web3Form from '../components/Form.jsx'
import { site } from '../config/site.js'
import { industries, formats } from '../data/content.js'

export function FormPage({ eyebrow, title, intro, nextTitle, next, children }) {
  return (
    <section className="noise relative overflow-hidden pb-28 pt-36 sm:pt-44">
      <GlowBackdrop />
      <div className="container-site relative grid gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }}>
          <Eyebrow>{eyebrow}</Eyebrow>
          <h1 className="mt-6 text-[42px] font-semibold leading-[1.02] tracking-tightest sm:text-[58px]">{title}</h1>
          <p className="mt-6 max-w-md text-[17px] leading-relaxed text-muted">{intro}</p>
          <div className="mt-12 border-t border-line/[0.1] pt-8">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">{nextTitle}</p>
            <ol className="mt-6 space-y-5">
              {next.map((n, i) => (
                <motion.li
                  key={n}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex gap-4 text-[15px] leading-relaxed text-body"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 text-accent">
                    <Check size={12} />
                  </span>
                  {n}
                </motion.li>
              ))}
            </ol>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.15, ease }}
          className="relative"
        >
          <div className="absolute -inset-px rounded-[28px] bg-gradient-to-br from-emerald-400/40 via-line/5 to-transparent" />
          <div className="relative rounded-[28px] bg-card/90 p-7 backdrop-blur-xl sm:p-10">{children}</div>
        </motion.div>
      </div>
    </section>
  )
}

export default function RequestTrial() {
  usePageSeo('/request-trial')
  return (
    <FormPage
      eyebrow="Request a trial"
      title={
        <>
          Send one live brief. <span className="serif-accent text-accent">See the difference.</span>
        </>
      }
      intro="Tell us what you are working on. We will scope it with you, recruit for it and share a screened shortlist, so you can judge our work on a real project."
      nextTitle="What happens next"
      next={[
        'We reply within one business day to confirm scope and any compliance requirements.',
        'Our recruiters source and screen experts against your criteria.',
        'You review anonymized profiles and choose who to speak with.',
      ]}
    >
      <Web3Form
        accessKey={site.web3forms.clients}
        subject="New trial request from savnec.com"
        submitLabel="Request a Trial"
        successTitle="Brief received."
        successBody="Thank you. A member of our team will be in touch within one business day to scope your project."
        fields={[
          { name: 'name', label: 'Full name', required: true },
          { name: 'email', label: 'Work email', type: 'email', required: true },
          { name: 'company', label: 'Company', required: true },
          { name: 'title', label: 'Job title', required: true },
          { name: 'firm_type', label: 'Firm type', type: 'select', required: true, options: ['Market research agency', 'Private equity', 'Venture capital', 'Hedge fund / public markets', 'Corporate strategy', 'Management consulting', 'AI / data company', 'Other'] },
          { name: 'format', label: 'Format', type: 'select', required: true, options: [...formats.map((f) => f.title), 'Not sure yet'] },
          { name: 'industry', label: 'Industry', type: 'select', options: [...industries.map((i) => i.name), 'Other'] },
          { name: 'timeline', label: 'Timeline', type: 'select', options: ['This week', 'Within 2 weeks', 'This month', 'Exploring'] },
          { name: 'brief', label: 'The brief', type: 'textarea', full: true, required: true, placeholder: 'What do you need to learn, and from whom? Include target roles, geographies and any companies to include or exclude.' },
        ]}
      />
    </FormPage>
  )
}
