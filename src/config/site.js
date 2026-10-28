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
  // Shown as "Savnec" with this line underneath (footer, About, Contact).
  address: '8 The Green #25201, Dover, DE 19901, United States',

  // Web3Forms access keys (free at https://web3forms.com).
  // Create one key per inbox. Until you have company email, you can
  // create all three on your personal Gmail and swap them later.
  web3forms: {
    clients: '1d3f7d6c-1487-4e7f-8d87-0a0c35f430ce',
    experts: 'dbac5f22-f132-4ea2-b806-a7839a2c8e4d',
    general: '1d3f7d6c-1487-4e7f-8d87-0a0c35f430ce',
  },

  // Set to false to hide the addresses in the footer, About, Contact and Clients pages.
  showEmails: true,
  emails: {
    clients: 'hello@savnec.com', // clients and prospective clients
    experts: 'experts@savnec.com', // experts and applicants
    info: 'info@savnec.com', // general inquiries and the fraud notice under every form
    general: 'info@savnec.com',
    compliance: 'info@savnec.com', // privacy and compliance requests
    careers: 'careers@savnec.com',
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
    { value: '24–48h', label: 'Typical time to first profiles' },
  ],

  // Client and expert quotes. The section stays hidden until you add one.
  // Only publish quotes people actually gave you, with their permission.
  // Anonymized attribution is normal in this industry, for example:
  // { quote: 'Their exact words go here.', name: 'Research Director', org: 'B2B research agency, London' },
  testimonials: [
    {
      quote:
        'We work with a few different networks, but Savnec stands out for reliability and the quality of the profiles we receive for our projects. The clear communication makes a real difference.',
      name: 'Project Manager',
      org: 'Strategy Consulting Firm',
    },
    {
      quote:
        'Savnec is quick to find the right experts for our studies, even when the brief is very specific. They are easy to work with and always deliver on tight timelines.',
      name: 'Research Director',
      org: 'Market Research Firm',
    },
  ],
}
