import { site } from '../config/site.js'

// The address. On About and Contact it sits under "Savnec"; in the footer it stands alone.
export function Address({ className = '', showName = true }) {
  return (
    <address className={`not-italic text-[14px] leading-relaxed text-muted ${className}`}>
      {showName && <span className="block font-semibold text-fg">{site.name}</span>}
      {site.address}
    </address>
  )
}

export const emailRoutes = () => [
  { key: 'clients', label: 'Clients', note: 'New projects and trials', email: site.emails.clients },
  { key: 'experts', label: 'Experts', note: 'Joining and engagements', email: site.emails.experts },
  { key: 'general', label: 'General', note: 'Everything else', email: site.emails.general },
]

// Compact list for the footer: the client address is emphasised, the rest are quiet.
export function EmailList({ className = '' }) {
  if (!site.showEmails) return null
  return (
    <ul className={`space-y-1.5 text-[14px] ${className}`}>
      {emailRoutes().map((r) => (
        <li key={r.key} className="flex items-baseline gap-3">
          <span className="w-[62px] shrink-0 font-mono text-[10.5px] uppercase tracking-[0.16em] text-muted">{r.label}</span>
          <a
            href={`mailto:${r.email}`}
            className={
              r.key === 'clients'
                ? 'link-underline font-medium text-accent'
                : 'link-underline text-body hover:text-fg'
            }
          >
            {r.email}
          </a>
        </li>
      ))}
    </ul>
  )
}

// Card grid for About and Contact: who should write to which address.
export function EmailCards({ className = '' }) {
  if (!site.showEmails) return null
  return (
    <div className={`grid gap-3 sm:grid-cols-3 ${className}`}>
      {emailRoutes().map((r) => (
        <a
          key={r.key}
          href={`mailto:${r.email}`}
          className={`group rounded-2xl border p-5 transition-colors ${
            r.key === 'clients'
              ? 'border-emerald-600/30 bg-emerald-500/[0.06] hover:border-emerald-600/60'
              : 'border-line/[0.1] bg-card hover:border-line/25'
          }`}
        >
          <span className="block font-mono text-[10.5px] uppercase tracking-[0.18em] text-muted">{r.label}</span>
          <span className={`mt-2 block break-all text-[15px] font-semibold ${r.key === 'clients' ? 'text-accent' : 'text-fg'}`}>
            {r.email}
          </span>
          <span className="mt-1 block text-[13px] text-muted">{r.note}</span>
        </a>
      ))}
    </div>
  )
}

// One quiet line for page heroes and forms: "Prefer email? hello@savnec.com"
export function EmailLine({ who = 'clients', label = 'Prefer email?', className = '' }) {
  if (!site.showEmails) return null
  const email = site.emails[who]
  return (
    <p className={`text-[14px] text-muted ${className}`}>
      {label}{' '}
      <a href={`mailto:${email}`} className="link-underline font-medium text-accent">
        {email}
      </a>
    </p>
  )
}
