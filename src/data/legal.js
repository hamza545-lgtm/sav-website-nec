// ─────────────────────────────────────────────────────────────
//  LEGAL TEXTS
//  Written for Savnec's current setup. Have them reviewed by a
//  qualified lawyer before relying on them, and update them when
//  you add analytics, a CRM, payment providers or new countries.
// ─────────────────────────────────────────────────────────────

export const legalDates = { effective: 'January 1, 2026', updated: 'October 6, 2026' }

export const privacyBlocks = (email) => [
  {
    t: 'callout',
    c: 'We collect only what we need to run expert research projects, we never sell personal information, and you can ask us at any time what we hold about you, to correct it or to delete it.',
  },
  { t: 'h2', c: '1. Who we are' },
  {
    t: 'p',
    c: 'Savnec LLC (“Savnec”, “we”, “us”) is an expert network with its principal address at 8 The Green, Dover, DE 19901, United States. We connect organizations (“clients”) with industry professionals (“experts”) for research engagements. Savnec is the controller of the personal information described in this Policy.',
  },
  {
    t: 'p',
    c: 'This Policy explains how we collect, use, share and protect personal information when you visit savnec.com, apply to join our network, request our services, apply for a job or otherwise interact with us.',
  },

  { t: 'h2', c: '2. Information we collect' },
  { t: 'h3', c: 'Information you give us' },
  {
    t: 'ul',
    c: [
      '**Clients and prospective clients:** name, work email, company, job title, phone number, project details and any information you include in a brief or message.',
      '**Experts and applicants to our network:** name, contact details, LinkedIn profile, employment history, current and former employers, areas of expertise, country, answers to screening questions, conflict and compliance attestations, and payment details needed to pay you.',
      '**Job applicants:** your CV, LinkedIn profile, location and anything you tell us in your application.',
      '**Everyone:** the content of messages, forms and communications you send us.',
    ],
  },
  { t: 'h3', c: 'Information we collect automatically' },
  {
    t: 'p',
    c: 'When you visit our website, our hosting and security providers process technical data such as your IP address, browser type, device information, pages visited and the date and time of your visit. This is used to deliver the site, keep it secure and understand how it performs.',
  },
  { t: 'h3', c: 'Information from other sources' },
  {
    t: 'p',
    c: 'To identify and verify experts, we use publicly available professional sources such as LinkedIn, company websites, professional registers and published articles. We may also receive your details from a colleague or contact who refers you to us.',
  },
  {
    t: 'p',
    c: 'We do not intentionally collect sensitive personal information such as health, racial or ethnic origin, religious beliefs or political opinions. Please do not include it in forms or messages. Where a professional license is relevant to a project, for example a medical license, we may verify it.',
  },

  { t: 'h2', c: '3. How we use information and our legal bases' },
  {
    t: 'table',
    c: {
      head: ['Purpose', 'Examples', 'Legal basis (where GDPR applies)'],
      rows: [
        ['Providing our services', 'Scoping projects, recruiting and matching experts, scheduling engagements, paying experts', 'Performance of a contract; legitimate interests'],
        ['Expert vetting and compliance', 'Verifying identity and employment, conflict checks, restricted lists, record keeping', 'Legitimate interests; legal obligations'],
        ['Responding to inquiries', 'Answering trial requests, contact forms and questions', 'Legitimate interests; steps before a contract'],
        ['Running and securing our website', 'Hosting, fraud and spam prevention, troubleshooting', 'Legitimate interests'],
        ['Business communications', 'Sending relevant project opportunities to experts, service updates to clients', 'Legitimate interests; consent where required'],
        ['Recruitment', 'Reviewing job applications', 'Steps before a contract; legitimate interests'],
        ['Legal matters', 'Complying with law, responding to lawful requests, defending legal claims', 'Legal obligations; legitimate interests'],
      ],
    },
  },
  {
    t: 'p',
    c: 'We do not use personal information for automated decision-making that produces legal or similarly significant effects.',
  },

  { t: 'h2', c: '4. How we share information' },
  {
    t: 'p',
    c: 'We do not sell personal information, and we do not share it for cross-context behavioral advertising. We share it only as follows:',
  },
  {
    t: 'ul',
    c: [
      '**With clients:** expert profiles are shared in anonymized form. An expert’s name and contact details are shared with a client only once the expert has agreed to the engagement.',
      '**With experts:** a client’s identity is shared with an expert only if the client chooses to disclose it.',
      '**With service providers** who process data on our behalf under confidentiality obligations, such as website hosting, form processing, email, scheduling, video conferencing and payment providers.',
      '**With professional advisers** such as lawyers, accountants and auditors.',
      '**With authorities** where required by law, regulation or legal process, or to protect the rights, property or safety of Savnec, our clients, experts or others.',
      '**In a business transaction** such as a merger, acquisition or sale of assets, subject to appropriate confidentiality.',
    ],
  },

  { t: 'h2', c: '5. Cookies and similar technologies' },
  {
    t: 'p',
    c: 'Cookies are small files stored on your device. Similar technologies include local storage and pixels. Here is what our website uses today:',
  },
  {
    t: 'table',
    c: {
      head: ['Category', 'Purpose', 'Status'],
      rows: [
        ['Strictly necessary', 'Delivering pages securely, preventing spam on forms, remembering basic interface choices', 'In use. These cannot be switched off.'],
        ['Analytics', 'Understanding how visitors use the site so we can improve it', 'Not currently used'],
        ['Marketing', 'Advertising and cross-site tracking', 'Not used'],
      ],
    },
  },
  {
    t: 'p',
    c: 'Our site loads fonts from Google Fonts, which means your browser sends your IP address to Google when a page loads. Forms are processed by Web3Forms. If we introduce analytics or other non-essential cookies, we will update this Policy and, where the law requires it, ask for your consent first.',
  },
  {
    t: 'p',
    c: 'You can block or delete cookies in your browser settings. Blocking strictly necessary technologies may stop parts of the site from working.',
  },

  { t: 'h2', c: '6. International transfers' },
  {
    t: 'p',
    c: 'Savnec is based in the United States and works with clients and experts worldwide, so your information may be processed in countries other than your own. Where we transfer personal information from the UK, the European Economic Area or Switzerland, we rely on appropriate safeguards such as the European Commission’s Standard Contractual Clauses or an adequacy decision.',
  },

  { t: 'h2', c: '7. How long we keep information' },
  {
    t: 'table',
    c: {
      head: ['Information', 'How long'],
      rows: [
        ['Client and engagement records', 'For the duration of the relationship, then as long as needed for legal, tax and compliance purposes, typically up to six years'],
        ['Expert profiles', 'While you remain in our network. You can ask to be removed at any time; engagement records are kept for compliance purposes'],
        ['Inquiries that do not lead to a project', 'Up to two years from our last contact'],
        ['Job applications', 'Up to one year after the role is filled, unless you ask us to delete them sooner'],
      ],
    },
  },

  { t: 'h2', c: '8. How we protect information' },
  {
    t: 'p',
    c: 'We use reasonable administrative, technical and organizational measures to protect personal information, including access controls, encrypted connections and confidentiality obligations for anyone who handles it. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
  },

  { t: 'h2', c: '9. Your rights' },
  {
    t: 'p',
    c: 'Depending on where you live, you may have the right to:',
  },
  {
    t: 'ul',
    c: [
      'Access the personal information we hold about you and receive a copy',
      'Correct information that is inaccurate or incomplete',
      'Delete your information, subject to legal and compliance exceptions',
      'Object to or restrict certain processing, including processing based on legitimate interests',
      'Receive your information in a portable format',
      'Withdraw consent at any time where we rely on it',
      'Complain to your local data protection authority',
    ],
  },
  {
    t: 'p',
    c: `To make a request, email **${email}** or use our [contact form](/contact). We will verify your identity and respond within one month, or within the period your local law requires.`,
  },
  { t: 'h3', c: 'Additional information for US residents' },
  {
    t: 'p',
    c: 'If you live in California or another US state with a comprehensive privacy law, you have the right to know what personal information we collect, use and disclose; to request deletion and correction; and not to be discriminated against for exercising these rights. We do not sell personal information or share it for cross-context behavioral advertising, and we do not use sensitive personal information for purposes that would give rise to a right to limit. You may use an authorized agent to make a request on your behalf.',
  },

  { t: 'h2', c: '10. Marketing communications' },
  {
    t: 'p',
    c: 'You can unsubscribe from promotional messages at any time using the link in the message or by contacting us. We may still send you messages about engagements you are part of or services you use.',
  },

  { t: 'h2', c: '11. Children' },
  {
    t: 'p',
    c: 'Our services are for business professionals. We do not knowingly collect personal information from anyone under 18.',
  },

  { t: 'h2', c: '12. Third-party websites' },
  {
    t: 'p',
    c: 'Our website links to other sites, such as LinkedIn and Instagram. We are not responsible for their privacy practices, and we encourage you to read their policies.',
  },

  { t: 'h2', c: '13. Changes to this Policy' },
  {
    t: 'p',
    c: 'We may update this Policy from time to time. The “last updated” date at the top shows when it last changed. Where changes are significant, we will take reasonable steps to let you know.',
  },

  { t: 'h2', c: '14. Contact us' },
  {
    t: 'p',
    c: `Savnec LLC, 8 The Green, Dover, DE 19901, United States. Email **${email}** or use our [contact form](/contact).`,
  },
]

export const termsBlocks = (email) => [
  {
    t: 'callout',
    c: 'These Terms govern your use of savnec.com and your participation in the Savnec expert network. Client engagements and expert participation may also be governed by separate written agreements, which take priority if they conflict with these Terms.',
  },
  { t: 'h2', c: '1. Acceptance of these Terms' },
  {
    t: 'p',
    c: 'By using our website or services you agree to these Terms. If you do not agree, please do not use them. If you accept these Terms on behalf of an organization, you confirm you have authority to bind it.',
  },

  { t: 'h2', c: '2. Our services' },
  {
    t: 'p',
    c: 'Savnec operates an expert network that connects clients, such as market research agencies, investment firms, consultancies and corporate teams, with industry professionals for expert calls, in-depth interviews, B2B surveys, focus groups, diary studies, custom recruitment and related research. Savnec facilitates these engagements. Savnec does not itself provide investment, legal, medical, tax or other professional advice, and experts do not provide it through our services.',
  },

  { t: 'h2', c: '3. Eligibility' },
  {
    t: 'p',
    c: 'You must be at least 18 years old and use our services for professional purposes.',
  },

  { t: 'h2', c: '4. Client obligations' },
  {
    t: 'ul',
    c: [
      'Use engagements only for lawful business purposes and in line with our compliance standards.',
      'Do not solicit, request or knowingly accept material non-public information (MNPI) or confidential information from an expert, and do not encourage an expert to breach any duty to a current or former employer.',
      'End a call promptly if an expert begins to share information they should not.',
      'Keep expert identities and contact details confidential and do not use them except for the engagement.',
      'Do not engage an expert introduced by Savnec directly, without Savnec, for twelve months after the introduction unless agreed in writing.',
    ],
  },

  { t: 'h2', c: '5. Expert obligations' },
  {
    t: 'ul',
    c: [
      'Provide accurate information about your identity, employment history and expertise, and keep it up to date.',
      'Disclose any conflict of interest and decline any engagement you are not permitted to take part in.',
      'Never disclose confidential information, trade secrets or MNPI belonging to any current or former employer or any other party.',
      'Comply with all agreements and policies that bind you, including your employer’s rules on outside work.',
      'Decline any question you are not comfortable answering or that would breach these obligations.',
      'You take part as an independent contractor, not as an employee or agent of Savnec, and you are responsible for any taxes on fees you receive.',
    ],
  },

  { t: 'h2', c: '6. Fees and payment' },
  {
    t: 'p',
    c: 'Client fees are set out in a rate card, proposal or agreement before work begins. Expert compensation is agreed before each engagement and paid after the engagement is completed. Savnec may withhold payment for engagements that breach these Terms.',
  },

  { t: 'h2', c: '7. Prohibited conduct' },
  {
    t: 'ul',
    c: [
      'Providing false or misleading information',
      'Circumventing our compliance processes',
      'Sharing or seeking confidential information or MNPI',
      'Using our services or website for any unlawful purpose',
      'Interfering with the security or operation of our website, including scraping, probing or introducing malicious code',
    ],
  },

  { t: 'h2', c: '8. Confidentiality' },
  {
    t: 'p',
    c: 'Client identities, project scopes and the substance of engagements are treated as confidential and disclosed only as needed to deliver an engagement, as described in our [Privacy & Cookie Policy](/privacy-policy), or as required by law.',
  },

  { t: 'h2', c: '9. Intellectual property' },
  {
    t: 'p',
    c: 'The Savnec name, wordmark, website design and content are owned by Savnec LLC or its licensors. You may view and print pages for your own business use, but you may not copy, modify or distribute them without our written permission.',
  },

  { t: 'h2', c: '10. Third-party links and services' },
  {
    t: 'p',
    c: 'Our website may link to third-party sites and use third-party services. We are not responsible for their content, availability or practices.',
  },

  { t: 'h2', c: '11. Disclaimers' },
  {
    t: 'p',
    c: 'Our website and services are provided “as is” and “as available”. Experts share their own views. Savnec does not guarantee the accuracy, completeness or suitability of any opinion expressed in an engagement, and you are responsible for decisions you make based on it.',
  },

  { t: 'h2', c: '12. Limitation of liability' },
  {
    t: 'p',
    c: 'To the fullest extent permitted by law, Savnec will not be liable for any indirect, incidental, special, consequential or punitive damages, or for lost profits, revenue or data, arising from your use of our website or services. Nothing in these Terms limits liability that cannot be limited by law.',
  },

  { t: 'h2', c: '13. Indemnification' },
  {
    t: 'p',
    c: 'You agree to indemnify Savnec against claims, losses and costs arising from your breach of these Terms, your misuse of our services or your violation of any law or third-party right.',
  },

  { t: 'h2', c: '14. Suspension and termination' },
  {
    t: 'p',
    c: 'We may suspend or end your access to our services if you breach these Terms or if we need to do so to comply with law or protect others.',
  },

  { t: 'h2', c: '15. Governing law' },
  {
    t: 'p',
    c: 'These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law rules. The state and federal courts located in Delaware have exclusive jurisdiction over any dispute arising from them.',
  },

  { t: 'h2', c: '16. Changes and general terms' },
  {
    t: 'p',
    c: 'We may update these Terms. Continued use after changes take effect means you accept them. If any provision is found unenforceable, the rest remains in effect. These Terms, together with any separate written agreement, are the entire agreement between you and Savnec on their subject.',
  },

  { t: 'h2', c: '17. Contact' },
  {
    t: 'p',
    c: `Questions about these Terms: **${email}** or our [contact form](/contact).`,
  },
]
