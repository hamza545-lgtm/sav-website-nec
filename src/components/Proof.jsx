import { Section, Reveal } from './ui'
import { site } from '@/config/site'

// Client quotes from src/config/site.js, shown once, on the home page. Hidden while the list is empty.
export function Testimonials() {
  const quotes = site.testimonials || []
  if (!quotes.length) return null
  return (
    <Section>
      <Reveal>
        <h2 className="text-[30px] font-semibold leading-[1.1] sm:text-[40px]">
          <span className="text-accent">Trusted</span> by leading decision makers
        </h2>
      </Reveal>
      <div className={`mt-10 grid gap-10 ${quotes.length > 1 ? 'lg:grid-cols-2 lg:gap-0 lg:divide-x lg:divide-line/[0.1]' : ''}`}>
        {quotes.map((q, i) => (
          <Reveal key={i} delay={i * 0.08} className={quotes.length > 1 ? (i % 2 ? 'lg:pl-12' : 'lg:pr-12') : ''}>
            <figure className="flex h-full flex-col">
              <span aria-hidden="true" className="text-[56px] font-medium leading-[0.6] text-emerald-500/70">
                &ldquo;
              </span>
              <blockquote className="mt-4 flex-1 text-[19px] leading-[1.6] text-fg sm:text-[20px]">{q.quote}</blockquote>
              <figcaption className="mt-6 text-[15px]">
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
