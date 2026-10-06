// Savnec brand marks.
// Wordmark: lowercase "savnec" in Inter Display SemiBold, with the v drawn as a rising tick:
// every expert is checked before a client sees them. Colors follow the theme tokens, so the
// wordmark is navy on light sections and white on dark ones, with the tick in emerald.

const LETTERS = 'M25.68 73.97C38.43 73.97 47.56 67.63 47.56 57.57C47.56 50 42.82 45.51 32.62 43.36L23.34 41.46C19.04 40.53 16.5 38.62 16.5 35.55C16.5 32.03 19.82 29.3 25.24 29.3C30.86 29.3 34.62 32.67 34.72 37.26H46.29C46 26.66 37.45 20.07 24.95 20.07C12.35 20.07 4.2 26.46 4.2 35.94C4.2 43.75 9.38 48.78 19.24 50.83L28.03 52.64C32.37 53.56 35.06 55.37 35.06 58.5C35.06 62.16 31.45 64.75 25.49 64.75C19.34 64.75 15.72 61.87 15.19 56.84H3.03C3.81 67.92 13.13 73.97 25.68 73.97Z M69.68 73.58C78.07 73.58 82.42 70.07 84.86 65.48H85.06V72.75H97.17V37.6C97.17 26.86 89.21 20.17 75.78 20.17C62.3 20.17 53.9 26.95 53.32 37.21H65.18C65.53 32.86 69.53 29.74 75.54 29.74C81.44 29.74 84.96 32.86 84.96 37.26V37.65C84.96 41.16 81.69 41.31 72.12 42.38C61.47 43.51 51.85 46.39 51.85 58.11C51.85 68.41 59.42 73.58 69.68 73.58ZM72.7 64.45C67.33 64.45 63.87 62.06 63.87 58.01C63.87 53.32 68.36 51.42 73.63 50.63C78.71 49.85 83.49 49.07 85.01 48.1V53.66C85.01 59.67 80.76 64.45 72.7 64.45Z M 173.12 43.6 C 173.12 34.81 177.95 30.96 184.4 30.96 C 190.99 30.96 194.8 34.91 194.8 42.48 V 72.75 H 207.15 V 40.53 C 207.15 27.29 199.53 20.17 188.74 20.17 C 181.66 20.17 176.44 23.29 172.92 29.1 V 21.19 H 160.81 V 72.75 H 173.12 Z M 238.83 73.93 C 250.89 73.93 260.46 66.94 262.42 56.84 H 250.89 C 249.48 61.23 245.33 64.21 239.12 64.21 C 230.82 64.21 226.04 58.59 225.75 50.2 H 263.05 V 46.83 C 263.05 31.01 253.19 20.02 238.34 20.02 C 223.89 20.02 213.69 31.35 213.69 47.02 C 213.69 62.65 223.35 73.93 238.83 73.93 Z M 225.84 41.7 C 226.67 34.33 231.41 29.79 238.54 29.79 C 245.67 29.79 250.45 34.33 251.23 41.7 Z M 292.21 73.93 C 305.25 73.93 314.72 65.53 315.6 54.25 H 303.44 C 302.27 59.96 298.8 63.67 292.36 63.67 C 284.25 63.67 279.46 57.18 279.46 47.02 C 279.46 36.82 284.3 30.27 292.36 30.27 C 298.75 30.27 302.61 34.13 303.54 39.65 H 315.6 C 314.52 28.17 305.15 20.02 292.21 20.02 C 277.12 20.02 267.01 31.1 267.01 47.02 C 267.01 62.94 277.12 73.93 292.21 73.93 Z'
const TICK = 'M96.70 46.08 L120.56 74.17 L156.21 -2.34 L144.79 -7.66 L117.44 51.03 L106.30 37.92Z'

export function Wordmark({ height = 26, className = '' }) {
  const width = (height * 318) / 85
  return (
    <svg width={width} height={height} viewBox="0 -9 318 85" className={`text-fg ${className}`} role="img" aria-label="Savnec">
      <path d={LETTERS} fill="currentColor" />
      <path d={TICK} style={{ fill: 'rgb(var(--tick))' }} />
    </svg>
  )
}

// The tick on its own: favicon, avatar and small brand moments.
export function Mark({ size = 32, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" className={className} aria-hidden="true">
      <rect width="64" height="64" rx="14" fill="#0A192F" />
      <path d={TICK} fill="#4AC492" transform="translate(-23.64 17.37) scale(0.44)" />
    </svg>
  )
}

export default function Logo({ className = '', height = 26 }) {
  return <Wordmark height={height} className={className} />
}
