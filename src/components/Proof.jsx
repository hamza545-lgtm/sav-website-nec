import { Section, SectionHeading, Reveal } from './ui'
import { site } from '@/config/site'

// Client and expert quotes from src/config/site.js. The section stays hidden until one is added.
export function Testimonials() {
  const quotes = site.testimonials || []
  if (!quotes.length) return null
  return (
    <Section>
      <SectionHeading eyebrow="In their words" title="What clients and experts say." />
      <div className={`mt-10 grid gap-5 ${quotes.length > 1 ? 'md:grid-cols-2' : ''} ${quotes.length > 2 ? 'lg:grid-cols-3' : ''}`}>
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
