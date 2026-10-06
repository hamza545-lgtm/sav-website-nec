// ─────────────────────────────────────────────────────────────
//  SAVNEC SITE SETTINGS
//  This is the only file you need to edit for keys, emails and
//  contact details. Everything else reads from here.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Savnec',
  legalName: 'Savnec LLC',
  domain: 'savnec.com',
  url: 'https://www.savnec.com',
  tagline: 'Verified human expertise for research that has to be right.',
  hq: 'Delaware, United States',
  // Add your full registered address when you want it shown in the footer.
  address: '',

  // Web3Forms access keys (free at https://web3forms.com).
  // Create one key per inbox. Until you have company email, you can
  // create all three on your personal Gmail and swap them later.
  web3forms: {
    clients: 'YOUR_CLIENT_FORM_ACCESS_KEY',
    experts: 'YOUR_EXPERT_FORM_ACCESS_KEY',
    general: 'YOUR_GENERAL_FORM_ACCESS_KEY',
  },

  // Flip showEmails to true once these inboxes exist.
  showEmails: false,
  emails: {
    clients: 'inquiries@savnec.com',
    experts: 'experts@savnec.com',
    general: 'hello@savnec.com',
    careers: 'careers@savnec.com',
    compliance: 'compliance@savnec.com',
  },

  // Leave a link empty ('') to hide it. Update LinkedIn once the page exists.
  social: {
    linkedin: 'https://www.linkedin.com/company/savnec',
    instagram: 'https://www.instagram.com/savnec',
  },

  // ── Proof ────────────────────────────────────────────────
  // Numbers shown in the "Savnec standard" section on the home page.
  // Use real figures only. Swap these for your own track record as it grows,
  // e.g. { value: '120+', label: 'Projects delivered' }.
  stats: [
    { value: '10', label: 'Industry verticals covered' },
    { value: '5', label: 'Regions recruited across' },
    { value: '6', label: 'Research formats' },
    { value: '48h', label: 'Typical time to first profiles' },
  ],

  // Client and expert quotes. The section stays hidden until you add one.
  // Only publish quotes people actually gave you, with their permission.
  // Anonymized attribution is normal in this industry, for example:
  // { quote: 'Their exact words go here.', name: 'Research Director', org: 'B2B research agency, London' },
  testimonials: [],
}
