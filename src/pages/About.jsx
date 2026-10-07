import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight, BookOpen, CircleHelp, Briefcase, Mail } from 'lucide-react'
import { PageHero, Section, SectionHeading, Reveal, SpotlightCard, Eyebrow, usePageSeo } from '../components/ui.jsx'
import { CtaBand } from '../components/Visuals.jsx'
import { site } from '../config/site.js'

const principles = [
  ['Fit beats volume', 'Ten profiles that almost match waste a client’s afternoon. Three that fit exactly save their week.'],
  ['Say what is true', 'If a brief is hard to fill, we say so on day one. Clients plan around honest timelines, not optimistic ones.'],
  ['Protect both sides', 'Clients trust us with their questions. Experts trust us with their reputations. We guard both equally.'],
  ['Own the outcome', 'One team from scoping to the final call. When something slips, you know exactly who will fix it.'],
]

const regions = [
  ['North America', 22, 34],
  ['Latin America', 30, 68],
  ['Europe', 50, 28],
  ['Middle East & Africa', 56, 55],
  ['Asia Pacific', 78, 42],
]

const more = [
  ['/insights', 'Insights', 'Notes on method, diligence and compliance.', BookOpen],
  ['/faqs', 'FAQs', 'Straight answers for clients and experts.', CircleHelp],
  ['/careers', 'Careers', 'Help us build the network.', Briefcase],
  ['/contact', 'Contact Us', 'Reach the right team directly.', Mail],
]

export default function About() {
  usePageSeo('/about')
  return (
    <>
      <PageHero
        eyebrow="About Savnec"
        title={
          <>
            Built around <span className="serif-accent text-accent">the right conversation.</span>
          </>
        }
        intro="Savnec exists to put research, investment and strategy teams in conversation with the people who know the answer, and to make every one of those conversations safe and worth the time."
      />

      <Section>
        <div className="grid gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="space-y-6 text-[18px] leading-relaxed text-body">
              <p>
                Good decisions rest on good evidence, and some of the best evidence sits in people’s heads: the buyer
                who ran the tender, the operator who built the plant, the clinician who chooses the therapy.
              </p>
              <p>
                Every Savnec project starts with your question and a recruiter who knows the sector. They identify the
                companies and roles that hold the answer, approach the right people directly, and screen them against
                your questions before you see a single name.
              </p>
              <p className="text-fg">
                Profiles you can trust, conversations that move the work forward, and a team that treats your
                deadline as its own.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-3xl p-8 glass">
              <Eyebrow>Where we recruit</Eyebrow>
              <div className="relative mt-6 aspect-[16/10] w-full">
                <div className="grid-bg absolute inset-0 opacity-70" />
                {regions.map(([name, x, y], i) => (
                  <motion.div
                    key={name}
                    className="absolute"
                    style={{ left: `${x}%`, top: `${y}%`, x: '-50%', y: '-50%' }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + i * 0.12 }}
                  >
                    <span className="relative flex h-3 w-3">
                      <span className="absolute inline-flex h-full w-full animate-pulseRing rounded-full bg-emerald-400" style={{ animationDelay: `${i * 0.4}s` }} />
                      <span className="relative inline-flex h-3 w-3 rounded-full bg-tick" />
                    </span>
                    <span className="absolute left-1/2 top-5 -translate-x-1/2 whitespace-nowrap text-[12px] text-body">{name}</span>
                  </motion.div>
                ))}
              </div>
              <p className="mt-6 border-t border-line/[0.1] pt-6 text-[14.5px] text-muted">
                Headquartered in {site.hq}. Serving clients and recruiting experts globally.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Principles" title="How we make decisions." />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {principles.map(([t, b], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <SpotlightCard className="h-full p-8">
                <span className="font-serif text-[22px] italic text-accent">0{i + 1}</span>
                <h3 className="mt-4 text-[22px] font-semibold">{t}</h3>
                <p className="mt-2 text-[15.5px] leading-relaxed text-muted">{b}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {more.map(([to, t, b, Icon], i) => (
            <Reveal key={to} delay={i * 0.05}>
              <SpotlightCard className="h-full">
                <Link to={to} className="flex h-full flex-col p-7">
                  <div className="flex items-center justify-between">
                    <Icon size={20} className="text-accent" />
                    <ArrowUpRight size={16} className="text-muted transition-colors group-hover:text-accent" />
                  </div>
                  <h3 className="mt-8 text-[19px] font-semibold">{t}</h3>
                  <p className="mt-1.5 text-[14px] text-muted">{b}</p>
                </Link>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />
    </>
  )
}
