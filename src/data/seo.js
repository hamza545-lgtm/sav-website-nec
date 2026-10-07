// ─────────────────────────────────────────────────────────────
//  PAGE TITLES & DESCRIPTIONS
//  Used in the browser and, at build time, baked into a static
//  HTML file per page so Google, LinkedIn and WhatsApp previews
//  show the right title and summary for every link you share.
// ─────────────────────────────────────────────────────────────

export const SITE_URL = 'https://www.savnec.com'
export const DEFAULT_TITLE = 'Savnec | Expert Network for Market Research, Investment & Strategy Teams'

export const pageMeta = {
  '/': {
    title: null,
    description:
      'Savnec is an expert network connecting market research agencies, investors, corporate strategy and consulting teams with vetted industry experts for expert calls, IDIs, B2B surveys, focus groups and custom recruitment.',
  },
  '/clients': {
    title: 'Expert Calls, IDIs, B2B Surveys & Recruitment',
    description:
      'Expert calls and IDIs, B2B surveys, focus groups, custom recruitment and diary studies for market research agencies, investors, corporate strategy and consulting teams. First profiles within 48 hours.',
  },
  '/experts': {
    title: 'For Experts',
    description:
      'Join the Savnec expert network. Paid consultations on your schedule with market research, investment and strategy teams. Free to join, no minimum commitment.',
  },
  '/industries': {
    title: 'Industries',
    description:
      'Expert recruitment across technology, media and telecom, advertising, market research, healthcare, private equity, consumer, financial services, industrials, consulting and AI data.',
  },
  '/compliance': {
    title: 'Compliance',
    description:
      'How Savnec verifies experts, screens for conflicts and protects confidential and material non-public information on every engagement.',
  },
  '/about': {
    title: 'About',
    description:
      'Savnec is an expert network based in Dover, Delaware, connecting research, investment and strategy teams worldwide with the people who know the answer.',
  },
  '/insights': {
    title: 'Insights',
    description: 'Guides from Savnec on expert networks, primary research method, commercial due diligence and compliance.',
  },
  '/faqs': {
    title: 'FAQs',
    description: 'Answers to common questions from Savnec clients and experts about timelines, pricing, payment and compliance.',
  },
  '/careers': {
    title: 'Careers',
    description: 'Careers at Savnec. Help research, investment and strategy teams reach the people who know the answer.',
  },
  '/contact': {
    title: 'Contact Us',
    description: 'Contact Savnec about a research project, joining the expert network or anything else.',
  },
  '/request-trial': {
    title: 'Request a Trial',
    description: 'Start a trial project with Savnec. Send one live brief and see a screened shortlist of experts within 48 hours.',
  },
  '/join': {
    title: 'Join as an Expert',
    description: 'Apply to join the Savnec expert network. Paid consultations, flexible scheduling and no minimum commitment.',
  },
  '/privacy-policy': {
    title: 'Privacy & Cookie Policy',
    description: 'How Savnec collects, uses, shares and protects personal information, and how our website uses cookies.',
  },
  '/terms': {
    title: 'Terms & Conditions',
    description: 'The terms that govern use of the Savnec website and participation in the Savnec expert network.',
  },
}

export const fullTitle = (title) => (title ? `${title} | Savnec` : DEFAULT_TITLE)
