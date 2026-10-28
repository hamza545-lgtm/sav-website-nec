// Addresses from the previous version of the site (index.html, about.html, ...) and short
// aliases. Each one redirects permanently to its clean address, so old links and Google's
// "Page with redirect" entries resolve to the real page.
const pages = [
  'about',
  'clients',
  'experts',
  'industries',
  'compliance',
  'insights',
  'faqs',
  'careers',
  'contact',
  'request-trial',
  'join',
  'privacy-policy',
  'terms',
]

const securityHeaders = [
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      ...pages.map((p) => ({ source: `/${p}.html`, destination: `/${p}`, permanent: true })),
      { source: '/privacy', destination: '/privacy-policy', permanent: true },
      { source: '/cookie-policy', destination: '/privacy-policy#5-cookies-and-similar-technologies', permanent: true },
    ]
  },
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }]
  },
}

export default nextConfig
