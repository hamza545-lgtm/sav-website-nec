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
}
