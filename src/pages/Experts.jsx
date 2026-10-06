import { Wallet, CalendarClock, Lock, Globe, Phone, ListChecks, Users, Brain, X, Check } from 'lucide-react'
import { PageHero, Button, Section, SectionHeading, Reveal, SpotlightCard, useSeo } from '../components/ui.jsx'
import { CtaBand } from '../components/Visuals.jsx'

const reasons = [
  [Wallet, 'Paid for your time', 'Your rate is agreed before every engagement. No unpaid "intro calls", no sliding scale after the fact.'],
  [CalendarClock, 'On your schedule', 'Accept what interests you, decline what doesn’t. Calls fit around your working week, in your time zone.'],
  [Lock, 'Clear boundaries', 'You share experience and judgment, never confidential information. We brief you on the rules before every call.'],
  [Globe, 'Interesting questions', 'Investors, strategy teams and researchers who want to understand your industry the way you do.'],
]

const work = [
  [Phone, 'Phone or video consultations', 'Usually 30 to 60 minutes with a single client.'],
  [ListChecks, 'Surveys', 'Structured questions you complete online in your own time.'],
  [Users, 'Interviews & panels', 'Small-group discussions or in-depth one-to-one research interviews.'],
  [Brain, 'AI evaluation projects', 'Reviewing and grading model outputs in your field of expertise.'],
]

const steps = [
  ['Apply', 'Share your background in a short form. It takes about five minutes.'],
  ['Get matched', 'When a project fits your experience, we send you a short description and a few screening questions.'],
  ['Confirm', 'Agree the rate and time, accept the engagement terms and confirm you have no conflicts.'],
  ['Consult & get paid', 'Have the conversation. Payment is processed after the engagement is complete.'],
]

const dos = ['Your own experience and judgment', 'How an industry or role works in practice', 'Publicly available information', 'Your views on trends and competitors']
const donts = ['Confidential information from any employer', 'Material non-public information (MNPI)', 'Trade secrets or internal financials', 'Anything that breaches an agreement you have signed']

export default function Experts() {
  useSeo('For Experts', 'Join the Savnec expert network. Paid consultations on your schedule with investors, consultants and research teams.')
  return (
    <>
      <PageHero
        eyebrow="For experts"
        title={
          <>
            Your experience has a <span className="serif-accent text-emerald-300">market rate.</span>
          </>
        }
        intro="Senior operators, specialists and former executives use Savnec to share what they know with the people making decisions about their industry. Paid, confidential, and entirely on your terms."
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Button to="/join">Join the network</Button>
          <Button to="/faqs" variant="ghost">
            Expert FAQs
          </Button>
        </div>
      </PageHero>

      <Section>
        <SectionHeading eyebrow="Why experts join" title="Respect for your time and your obligations." />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {reasons.map(([Icon, t, b], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <SpotlightCard className="h-full p-8">
                <Icon size={22} className="text-emerald-300" />
                <h3 className="mt-6 text-[21px] font-semibold">{t}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-steel">{b}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading
            eyebrow="How it works"
            title="From application to first call."
            intro="No minimum hours, no exclusivity and no cost to join. You can pause or leave at any time."
          />
          <ol className="space-y-4">
            {steps.map(([t, b], i) => (
              <Reveal key={t} delay={i * 0.06}>
                <li className="flex gap-6 rounded-2xl border border-white/[0.07] bg-navy-900/40 p-6 transition-colors hover:border-emerald-400/30">
                  <span className="font-serif text-[40px] italic leading-none text-emerald-300/80">{i + 1}</span>
                  <div>
                    <h3 className="text-[19px] font-semibold">{t}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-steel">{b}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="The work" title="Ways to contribute." align="center" />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {work.map(([Icon, t, b], i) => (
            <Reveal key={t} delay={i * 0.06}>
              <SpotlightCard className="h-full p-7">
                <Icon size={20} className="text-emerald-300" />
                <h3 className="mt-5 text-[17px] font-semibold">{t}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-steel">{b}</p>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="The rules"
          title="What you can and can't discuss."
          intro="These rules protect you, your employers and our clients. We repeat them before every engagement."
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-3xl border border-emerald-400/20 bg-emerald-500/[0.05] p-8">
              <h3 className="text-[18px] font-semibold">You can share</h3>
              <ul className="mt-6 space-y-4">
                {dos.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[15px] text-ink">
                    <Check size={17} className="mt-0.5 shrink-0 text-emerald-300" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="h-full rounded-3xl border border-white/[0.08] bg-white/[0.02] p-8">
              <h3 className="text-[18px] font-semibold">You must never share</h3>
              <ul className="mt-6 space-y-4">
                {donts.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-[15px] text-ink">
                    <X size={17} className="mt-0.5 shrink-0 text-red-300/80" />
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
        title={
          <>
            Five minutes to apply. <span className="serif-accent text-emerald-300">No obligation after.</span>
          </>
        }
        body="Tell us where you have worked and what you know. We will reach out when a project matches your background."
      />
    </>
  )
}
