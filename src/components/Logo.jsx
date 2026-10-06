import { useId } from 'react'

// The Savnec mark: a single continuous "S" trace with two endpoint nodes.
// Reads as a letter, a route and a connection between two parties.
export const MARK_PATH =
  'M21 9H13a3 3 0 0 0-3 3v1a3 3 0 0 0 3 3h6a3 3 0 0 1 3 3v1a3 3 0 0 1-3 3H11'

export function LogoMark({ size = 32, className = '' }) {
  const id = useId().replace(/:/g, '')
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`g-${id}`} x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#16916A" />
          <stop offset="1" stopColor="#0B5A3E" />
        </linearGradient>
      </defs>
      <rect width="32" height="32" rx="8" fill={`url(#g-${id})`} />
      <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" stroke="#FFFFFF" strokeOpacity="0.18" />
      <path d={MARK_PATH} stroke="#FFFFFF" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="22" cy="9" r="2" fill="#FFFFFF" />
      <circle cx="10" cy="23" r="2" fill="#6BE3B5" />
    </svg>
  )
}

export default function Logo({ className = '' }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark size={30} />
      <span className="text-[17px] font-semibold tracking-[0.18em] text-white">SAVNEC</span>
    </span>
  )
}
