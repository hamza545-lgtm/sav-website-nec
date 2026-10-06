import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { slugify } from '../data/insights.js'

// Renders **bold** and [text](href) inside a plain string.
export function Inline({ text }) {
  const parts = text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/g)
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-fg">
          {part.slice(2, -2)}
        </strong>
      )
    }
    const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
    if (link) {
      const [, label, href] = link
      const cls = 'text-accent underline decoration-emerald-400/40 underline-offset-4 transition-colors hover:text-accent hover:decoration-accent'
      return href.startsWith('/') ? (
        <Link key={i} to={href} className={cls}>
          {label}
        </Link>
      ) : (
        <a key={i} href={href} className={cls} target="_blank" rel="noreferrer">
          {label}
        </a>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}

export function ArticleBody({ blocks }) {
  return (
    <div className="space-y-6 text-[17px] leading-[1.75] text-body">
      {blocks.map((b, i) => {
        switch (b.t) {
          case 'h2':
            return (
              <h2 key={i} id={slugify(b.c)} className="scroll-mt-28 pt-8 text-[28px] font-semibold leading-tight sm:text-[32px]">
                {b.c}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={i} className="pt-2 text-[20px] font-semibold leading-snug">
                {b.c}
              </h3>
            )
          case 'ul':
            return (
              <ul key={i} className="space-y-3">
                {b.c.map((li, k) => (
                  <li key={k} className="flex gap-3">
                    <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-400" />
                    <span>
                      <Inline text={li} />
                    </span>
                  </li>
                ))}
              </ul>
            )
          case 'ol':
            return (
              <ol key={i} className="space-y-4">
                {b.c.map((li, k) => (
                  <li key={k} className="flex gap-4">
                    <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-500/10 font-mono text-[12px] text-accent">
                      {k + 1}
                    </span>
                    <span>
                      <Inline text={li} />
                    </span>
                  </li>
                ))}
              </ol>
            )
          case 'table':
            return (
              <div key={i} className="overflow-x-auto rounded-2xl border border-line/[0.11]">
                <table className="w-full min-w-[560px] text-left text-[14.5px]">
                  <thead className="bg-fg/[0.04]">
                    <tr>
                      {b.c.head.map((h) => (
                        <th key={h} className="px-5 py-3.5 font-mono text-[11px] font-normal uppercase tracking-[0.16em] text-muted">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-line/[0.1]">
                    {b.c.rows.map((row, r) => (
                      <tr key={r} className="align-top">
                        {row.map((cell, c) => (
                          <td key={c} className={`px-5 py-4 leading-relaxed ${c === 0 ? 'font-medium text-fg' : 'text-body'}`}>
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )
          case 'callout':
            return (
              <div key={i} className="relative overflow-hidden rounded-2xl border border-emerald-400/25 bg-emerald-500/[0.06] p-6 sm:p-7">
                <span className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-300 to-emerald-600" />
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">In short</p>
                <p className="mt-3 text-[17px] leading-relaxed text-fg">
                  <Inline text={b.c} />
                </p>
              </div>
            )
          default:
            return (
              <p key={i}>
                <Inline text={b.c} />
              </p>
            )
        }
      })}
    </div>
  )
}
