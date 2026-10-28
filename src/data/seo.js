// ─────────────────────────────────────────────────────────────
//  PAGE TITLES, DESCRIPTIONS & SEARCH SETTINGS
//  Every page gets its own title, description, canonical address
//  and link-preview tags from here, built into the HTML at build
//  time. "updated" is the date the page last changed in a way
//  worth telling Google about; it feeds sitemap.xml. Change it
//  when you edit a page's content.
// ─────────────────────────────────────────────────────────────

export const SITE_URL = 'https://www.savnec.com'
export const DEFAULT_TITLE = 'Savnec | Expert Network for Market Research, Investment & Strategy Teams'

// One spelling of every page address, shared by the canonical tag, link previews and the sitemap.
export const canonicalUrl = (path) => `${SITE_URL}${path === '/' ? '/' : path}`

export const pageMeta = {
  '/': {
    title: null,
    updated: '2026-10-28',
    description:
      'Expert network connecting market research firms, investors and strategy teams with vetted industry experts for calls, IDIs, B2B surveys and focus groups.',
  },
  '/services': {
    title: 'Services: Expert Calls, IDIs, B2B Surveys, Focus Groups & Recruitment',
    updated: '2026-10-28',
    description:
      'Expert calls and IDIs, B2B surveys, focus groups, custom recruitment, diary studies and AI domain experts, each recruited, screened and compliance-checked for your project.',
  },
  '/clients': {
    title: 'For Clients: Research, Investment & Strategy Teams',
    updated: '2026-10-28',
    description:
      'How Savnec works with market research firms, investors, strategy and consulting teams: experts recruited for each brief, screened before you see them, first profiles usually within 24 to 48 hours.',
  },
  '/experts': {
    title: 'For Experts: Paid Consultations on Your Terms',
    updated: '2026-10-28',
    description:
      'Join the Savnec expert network. Paid consultations on your schedule with market research, investment and strategy teams. Free to join, no minimum commitment.',
  },
  '/industries': {
    title: 'Industries & Expert Coverage',
    updated: '2026-10-28',
    description:
      'Expert recruitment across technology, media and telecom, advertising, market research, healthcare, private equity, consumer, financial services, industrials, consulting and AI data.',
  },
  '/compliance': {
    title: 'Compliance & Expert Screening',
    updated: '2026-10-28',
    description:
      'How Savnec verifies experts, screens for conflicts and protects confidential and material non-public information on every engagement.',
  },
  '/about': {
    title: 'About Us',
    updated: '2026-10-28',
    description:
      'Savnec is a Delaware-registered expert network connecting research, investment and strategy teams worldwide with the people who know the answer.',
  },
  '/insights': {
    title: 'Insights',
    updated: '2026-10-28',
    description: 'Guides from Savnec on expert networks, primary research method, commercial due diligence and compliance.',
  },
  '/faqs': {
    title: 'FAQs',
    updated: '2026-10-28',
    description: 'Answers to common questions from Savnec clients and experts about timelines, pricing, payment and compliance.',
  },
  '/careers': {
    title: 'Careers',
    updated: '2026-10-28',
    description: 'Careers at Savnec. Help research, investment and strategy teams reach the people who know the answer.',
  },
  '/contact': {
    title: 'Contact Us',
    updated: '2026-10-28',
    description: 'Contact Savnec about a research project, joining the expert network or anything else.',
  },
  '/request-trial': {
    title: 'Request a Trial',
    updated: '2026-10-28',
    description: 'Start a trial project with Savnec. Send one live brief and see a screened shortlist of experts, usually within 24 to 48 hours.',
  },
  '/join': {
    title: 'Join as an Expert',
    updated: '2026-10-28',
    description: 'Apply to join the Savnec expert network. Paid consultations, flexible scheduling and no minimum commitment.',
  },
  '/privacy-policy': {
    title: 'Privacy & Cookie Policy',
    updated: '2026-10-15',
    description: 'How Savnec collects, uses, shares and protects personal information, and how our website uses cookies.',
  },
  '/terms': {
    title: 'Terms & Conditions',
    updated: '2026-10-15',
    description: 'The terms that govern use of the Savnec website and participation in the Savnec expert network.',
  },
}

export const fullTitle = (title) => (title ? `${title} | Savnec` : DEFAULT_TITLE)

const OG_IMAGE = { url: '/og-image.png', width: 1200, height: 630, alt: 'Savnec: the central point for expert sourcing.' }

// Title, description, canonical address and link-preview tags for one page.
export function buildMetadata({ path, title, description, type = 'website', noindex = false }) {
  const t = fullTitle(title)
  const url = canonicalUrl(path)
  return {
    title: { absolute: t },
    description,
    alternates: { canonical: url },
    openGraph: { type, siteName: 'Savnec', title: t, description, url, images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title: t, description, images: [OG_IMAGE.url] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  }
}

export const metadataFor = (path) => buildMetadata({ path, ...pageMeta[path] })

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Savnec',
  legalName: 'Savnec LLC',
  url: SITE_URL,
  logo: `${SITE_URL}/brand/savnec-icon-512.png`,
  slogan: 'The central point for expert sourcing.',
  description: 'Expert network connecting market research, investment and corporate strategy teams with vetted industry experts.',
  email: 'hello@savnec.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '8 The Green #25201',
    addressLocality: 'Dover',
    addressRegion: 'DE',
    postalCode: '19901',
    addressCountry: 'US',
  },
  sameAs: ['https://www.linkedin.com/company/savnec', 'https://www.instagram.com/savnec'],
}

// Structured data as a script tag body. "<" is escaped so the JSON can never close the tag early.
export const jsonLdScript = (data) => ({ __html: JSON.stringify(data).replace(/</g, '\\u003c') })
