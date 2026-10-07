import { Clock3, Filter, ShieldCheck, Wallet, Target, MessageSquareText } from 'lucide-react'
import { Section, SectionHeading, Reveal } from './ui.jsx'
import { site } from '../config/site.js'

const sides = [
  {
    kicker: 'For clients',
    title: 'Less chasing. Better calls.',
    items: [
      [Clock3, 'Your team’s hours back', 'We handle sourcing, screening, scheduling and payment, so analysts spend their time on the conversation, not the admin.'],
      [Filter, 'Fewer wasted calls', 'Screener answers arrive with every profile, so you book the people who fit and skip the ones who don’t.'],
      [ShieldCheck, 'A clean compliance trail', 'Conflict checks, attestations and engagement records are kept for every project, ready when your compliance team asks.'],
    ],
  },
  {
    kicker: 'For experts',
    title: 'Respect for your time.',
    items: [
      [Target, 'Only relevant requests', 'You hear from us when a project genuinely matches your background, not every time a keyword does.'],
      [Wallet, 'Fair, agreed pay', 'Your rate is agreed before the engagement and paid when it is done. No surprises.'],
      [MessageSquareText, 'Clear rules up front', 'You know what you can and can’t discuss before the call starts, so there are no awkward moments.'],
    ],
  },
]

export function Impact() {
  return (
    <section className="relative bg-sunk py-20 sm:py-28">
      <div className="container-site">
        <SectionHeading
          eyebrow="The difference"
          title="What changes when you work with Savnec."
          intro="Expert research should feel simple on both sides of the call. This is what we take off your plate."
        />
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {sides.map((side, k) => (
            <Reveal key={side.kicker} delay={k * 0.08}>
              <div className="h-full rounded-3xl border border-line/[0.08] bg-card p-8 shadow-[0_1px_2px_rgba(10,25,47,0.04),0_18px_40px_-28px_rgba(10,25,47,0.25)] sm:p-10">
                <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">{side.kicker}</p>
                <h3 className="mt-4 text-[26px] font-semibold leading-tight">{side.title}</h3>
                <ul className="mt-8 space-y-6">
                  {side.items.map(([Icon, t, b]) => (
                    <li key={t} className="flex gap-4">
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-accent">
                        <Icon size={18} />
                      </span>
                      <span>
                        <span className="block text-[16px] font-semibold text-fg">{t}</span>
                        <span className="mt-1 block text-[14.5px] leading-relaxed text-muted">{b}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const quotes = site.testimonials || []
  if (!quotes.length) return null
  return (
    <Section>
      <SectionHeading eyebrow="In their words" title="What clients and experts say." />
      <div className={`mt-12 grid gap-5 ${quotes.length > 1 ? 'md:grid-cols-2' : ''} ${quotes.length > 2 ? 'lg:grid-cols-3' : ''}`}>
        {quotes.map((q, i) => (
          <Reveal key={i} delay={i * 0.07}>
            <figure className="flex h-full flex-col rounded-3xl border border-line/[0.08] bg-card p-8">
              <span className="font-serif text-[56px] italic leading-none text-accent" aria-hidden="true">
                &ldquo;
              </span>
              <blockquote className="mt-2 flex-1 text-[17px] leading-relaxed text-fg">{q.quote}</blockquote>
              <figcaption className="mt-8 border-t border-line/[0.08] pt-5 text-[14px]">
                <span className="block font-semibold text-fg">{q.name}</span>
                {q.org && <span className="block text-muted">{q.org}</span>}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  )
}
