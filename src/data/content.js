import {
  Cpu,
  ShoppingBag,
  Landmark,
  Factory,
  HeartPulse,
  Megaphone,
  TrendingUp,
  Compass,
  ChartColumn,
  Database,
} from 'lucide-react'

const allIndustries = [
  {
    id: 'tech',
    name: 'Technology, Media & Telecom',
    short: 'TMT',
    icon: Cpu,
    summary:
      'The buyers, builders and operators behind the stack: the people who choose vendors, run networks and decide what gets renewed.',
    focus: ['Enterprise software & cloud', 'Semiconductors & hardware', 'Telecom & connectivity', 'Media & streaming', 'Cybersecurity'],
    experts: ['CIOs & CTOs', 'IT procurement leads', 'Cloud & data architects', 'Network planning heads', 'Channel partners & resellers', 'Streaming & content executives'],
    questions: [
      'Is AI spend growing the IT budget, or quietly eating the rest of it?',
      'What would make a CIO replace this vendor at renewal, and who would they switch to?',
      'Where are operators actually earning a return on 5G, and where is it still a cost line?',
    ],
  },
  {
    id: 'consumer',
    name: 'Consumer & Retail',
    short: 'Consumer',
    icon: ShoppingBag,
    summary:
      'Category buyers, brand leaders and distributors who see demand shift months before it shows up in the numbers.',
    focus: ['Food & beverage', 'Beauty & personal care', 'E-commerce & marketplaces', 'Apparel & luxury', 'Restaurants & hospitality'],
    experts: ['Retail category buyers', 'Brand & marketing directors', 'Distributors & wholesalers', 'E-commerce leads', 'Store & franchise operators'],
    questions: [
      'Is private label winning on price or on quality now, and which categories are next?',
      'How do retail buyers decide which brands lose shelf space at the next reset?',
      'Is direct-to-consumer still profitable once returns and paid acquisition are counted?',
    ],
  },
  {
    id: 'financial',
    name: 'Financial Services',
    short: 'FS',
    icon: Landmark,
    summary:
      'Bankers, insurers and payments operators who know how money, risk and regulation move in practice, not just on paper.',
    focus: ['Banking & lending', 'Payments & fintech', 'Insurance & insurtech', 'Asset & wealth management', 'Market infrastructure'],
    experts: ['Bank COOs & CIOs', 'Payments product heads', 'Underwriting & claims leaders', 'Fintech partnership managers', 'Risk & compliance officers'],
    questions: [
      'What would it really take for a mid-size bank to replace its core system?',
      'Where is embedded finance making money, and where is it just distribution?',
      'How far has AI actually reached into claims and underwriting, beyond the press release?',
    ],
  },
  {
    id: 'industrial',
    name: 'Industrials & Manufacturing',
    short: 'Industrials',
    icon: Factory,
    summary:
      'Plant managers, procurement heads and supply chain leaders who can speak to capacity, cost and lead times from the floor.',
    focus: ['Automation & robotics', 'Aerospace & defense', 'Building products', 'Chemicals & materials', 'Logistics & transportation'],
    experts: ['Plant & operations managers', 'Procurement & sourcing heads', 'Supply chain directors', 'Distributors', 'Automation & process engineers'],
    questions: [
      'Are customers genuinely reshoring, or just talking about it?',
      'Which suppliers are winning on lead time and reliability rather than price?',
      'What is the real payback on automation for a mid-size plant, from someone who signed it off?',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    short: 'Healthcare',
    icon: HeartPulse,
    summary:
      'Clinicians, payers, hospital decision makers and pharma commercial teams, screened carefully for role, specialty and recency.',
    focus: ['Pharma & biotech', 'Medical devices', 'Providers & health systems', 'Payers & PBMs', 'Healthcare IT'],
    experts: ['Physicians & specialists', 'Hospital procurement & value analysis', 'Payer & PBM pharmacy directors', 'Market access leads', 'Med-device sales leaders'],
    questions: [
      'How do specialists choose between two approved therapies with similar trial data?',
      'What actually gets a new device through a hospital value analysis committee?',
      'Which budgets are health systems cutting first when margins tighten?',
    ],
  },
  {
    id: 'advertising',
    name: 'Advertising & Marketing',
    short: 'AdTech',
    icon: Megaphone,
    summary:
      'The people who hold the budgets and the data: media buyers, agency leaders and CMOs who know where performance is real.',
    focus: ['Ad tech & programmatic', 'Agencies & holding companies', 'Retail media', 'Martech & CRM', 'Creator economy'],
    experts: ['CMOs & marketing directors', 'Media directors & buyers', 'Programmatic traders', 'Agency leaders', 'Retail media leads', 'Ad tech product heads'],
    questions: [
      'How much retail media spend is truly incremental, and how much is search budget in disguise?',
      'Which measurement partners do brands trust now, and which are they quietly dropping?',
      'Where are CMOs moving budget this year, and what would make them pull it back?',
    ],
  },
  {
    id: 'investors',
    name: 'Private Equity & Venture Capital',
    short: 'Investors',
    icon: TrendingUp,
    summary:
      'Fast, precise access for commercial diligence, portfolio work and thesis building, from first screen to final IC.',
    focus: ['Commercial due diligence', 'Customer referencing', 'Competitor deep-dives', 'Value creation', 'Thesis development'],
    experts: ['Customers of the target', 'Former employees', 'Competitor sales & product leads', 'Channel partners', 'Operating executives'],
    questions: [
      'Would customers still renew if prices went up 10%?',
      'What does the target\u2019s strongest competitor really think of it?',
      'Is the growth in the management plan broad-based, or resting on one or two accounts?',
    ],
  },
  {
    id: 'consulting',
    name: 'Management Consulting',
    short: 'Consulting',
    icon: Compass,
    summary:
      'Operator perspective on short timelines, so case teams can pressure-test hypotheses before the steering committee does.',
    focus: ['Market entry & sizing', 'Operations & cost', 'Pricing strategy', 'Digital transformation', 'M&A integration'],
    experts: ['Functional heads (finance, ops, HR, IT)', 'Senior operators', 'Former strategy leads', 'Transformation & integration leads'],
    questions: [
      'What does best-in-class cost-to-serve look like in this segment?',
      'Which adjacencies have operators tried and quietly abandoned, and why?',
      'How long does an ERP migration really take, according to someone who ran one?',
    ],
  },
  {
    id: 'market-research',
    name: 'Market Research Suppliers',
    short: 'Research',
    icon: ChartColumn,
    summary:
      'B2B recruitment for agencies running qualitative studies with professional audiences that panels struggle to reach.',
    focus: ['B2B niche recruitment', 'IDIs & focus groups', 'B2B surveys', 'Diary studies & ethnography', 'Hard-to-reach decision makers'],
    experts: ['C-suite & senior decision makers', 'IT & technical buyers', 'Physicians & clinicians', 'Procurement heads', 'Niche B2B specialists'],
    questions: [
      'We need 30 IT decision makers at 1,000+ employee companies, interviewed by Friday.',
      'Our oncologist quota in Germany is stuck at 40%. Can you close it?',
      'We need hospital procurement heads for 60-minute IDIs, not a ten-minute survey.',
    ],
  },
  {
    id: 'ai-data',
    name: 'AI Data Services',
    short: 'AI Data',
    icon: Database,
    summary:
      'Credentialed specialists for model evaluation, data annotation and reasoning tasks that generalists get wrong.',
    focus: ['Expert annotation', 'Model evaluation & red teaming', 'Reasoning & rubric writing', 'Specialist QA review', 'Multilingual expertise'],
    experts: ['Physicians & clinicians', 'Lawyers & paralegals', 'Accountants & tax specialists', 'Software engineers', 'PhDs & researchers'],
    questions: [
      'We need licensed clinicians to grade medical answers, not generalists.',
      'Find CPAs who can write the tax edge cases our model gets wrong.',
      'We need engineers who still read COBOL to evaluate legacy code.',
    ],
  },
]

// Display order: the sectors Savnec works in most, then the rest.
const industryOrder = [
  'tech',
  'advertising',
  'market-research',
  'healthcare',
  'investors',
  'consumer',
  'financial',
  'industrial',
  'consulting',
  'ai-data',
]
export const industries = industryOrder.map((id) => allIndustries.find((x) => x.id === id))

export const segments = [
  {
    title: 'Market Research Firms & Agencies',
    body: 'Senior and niche B2B respondents for qualitative studies, recruited to your screener and verified before fieldwork.',
  },
  {
    title: 'Private Equity & Venture Capital',
    body: 'Customer calls, competitor views and operator checks across the deal cycle, delivered at deal speed.',
  },
  {
    title: 'Corporate Strategy Teams',
    body: 'An outside-in read on markets, competitors and customers before capital is committed.',
  },
  {
    title: 'Consulting Firms',
    body: 'Sector depth for case teams who need to sound like insiders by Thursday.',
  },
]

// Formats, in order of how often clients ask for them.
export const formats = [
  {
    id: 'expert-calls',
    title: 'Expert Calls & IDIs',
    body: 'One-to-one calls and in-depth interviews with operators, customers and former competitors. Scheduled around you.',
  },
  {
    id: 'b2b-surveys',
    title: 'B2B Surveys',
    body: 'Structured questionnaires answered by verified professionals, so you can compare views across a defined audience.',
  },
  {
    id: 'focus-groups',
    title: 'Focus Groups',
    body: 'Moderated discussions with small groups of professionals, recruited to your screener and quota.',
  },
  {
    id: 'custom-recruitment',
    title: 'Custom Recruitment',
    body: 'Niche B2B profiles sourced from scratch for your own studies, advisory boards and panels.',
  },
  {
    id: 'ethnography',
    title: 'Diary Studies & Ethnography',
    body: 'Professionals record or show their real working day over time, so you see behavior as it happens.',
  },
  {
    id: 'ai-experts',
    title: 'AI Domain Experts',
    body: 'Credentialed specialists for evaluation, annotation and reasoning work on AI models.',
  },
]

export const useCases = {
  'Market Research': {
    lead: 'B2B respondents your panel can’t reach.',
    items: [
      'Recruitment of senior and niche professional audiences',
      'IDIs and focus groups filled to your screener and quota',
      'B2B surveys with verified decision makers',
      'Diary studies and multi-country fieldwork support',
    ],
  },
  'Private Equity': {
    lead: 'From first screen to investment committee.',
    items: [
      'Customer calls to test retention, pricing power and switching risk',
      'Former employees on operations, culture and management quality',
      'Competitor and channel checks to validate market share claims',
      'Operator advisors for post-close value creation plans',
    ],
  },
  'Corporate Strategy': {
    lead: 'An outside view before capital moves.',
    items: [
      'Adjacent-market scans ahead of build, buy or partner decisions',
      'Voice-of-customer research on unmet needs',
      'Competitive intelligence from former insiders, within the rules',
      'Target screening and integration lessons for corporate development',
    ],
  },
  Consulting: {
    lead: 'Insider depth on a case-team timeline.',
    items: [
      'Rapid hypothesis testing in week one of an engagement',
      'Benchmarks on cost, process and organization design',
      'Buyer interviews for market entry and growth strategy',
      'B2B surveys to segment customers and test propositions',
    ],
  },
  'AI Data': {
    lead: 'Specialists who can judge what a model gets wrong.',
    items: [
      'Licensed and credentialed professionals for evaluation tasks',
      'Domain experts for rubric writing and reasoning data',
      'Specialist review for annotation quality control',
      'Cohorts recruited by discipline and seniority',
    ],
  },
}

export const faqs = {
  Clients: [
    {
      q: 'How quickly will I see expert profiles?',
      a: 'For most projects, the first profiles arrive within 48 hours of a scoped brief. Highly specialized or multi-region requests can take longer, and we will tell you upfront when that is the case.',
    },
    {
      q: 'Do you have a fixed database of experts?',
      a: 'No. We recruit for each project against your criteria. That means every expert you see has been contacted, screened and conflict-checked for your specific question, not pulled from a stale list.',
    },
    {
      q: 'What does a trial include?',
      a: 'A trial is a real project on a small scale: we scope your question, source and screen experts, and schedule the calls you approve. It is the fastest way to judge the quality of our recruiting.',
    },
    {
      q: 'Can you work with our compliance requirements?',
      a: 'Yes. Restricted lists, custom screening questions, employment cool-off periods and chaperoned calls can all be built into your engagements. Send us your policy and we will configure around it.',
    },
    {
      q: 'How is pricing structured?',
      a: 'Pricing depends on format, volume and specialization. We share a clear rate card during scoping, before any work begins, so there are no surprises on the invoice.',
    },
  ],
  Experts: [
    {
      q: 'How much time do I need to commit?',
      a: 'None in advance. You decide which requests to accept. Most engagements are a single 30 to 60 minute call.',
    },
    {
      q: 'How are experts paid?',
      a: 'Your rate is agreed with you before each engagement. Payment is made after the engagement is completed, using the payout method you choose.',
    },
    {
      q: 'What am I allowed to discuss?',
      a: 'Your experience, your judgment and publicly available information. You must never share confidential information or material non-public information about any current or former employer, and you can decline any question.',
    },
    {
      q: 'Does joining cost anything?',
      a: 'No. Joining the Savnec network is free, and there is no minimum level of participation. We will never ask you to pay a fee, buy anything or share bank details by message to take part.',
    },
    {
      q: 'How do I know a message really comes from Savnec?',
      a: 'We only contact experts from an @savnec.com email address, our official LinkedIn page, or our official phone and WhatsApp numbers. Messages from Gmail, Hotmail or similar addresses, or through Facebook, Instagram or Telegram, are not from us. If you are unsure, forward the message to info@savnec.com and we will confirm.',
    },
  ],
  Compliance: [
    {
      q: 'How do you screen experts for conflicts?',
      a: 'Before every engagement, experts confirm their current employment, relevant prior roles and any restrictions. We check those answers against the project and the client’s restricted list.',
    },
    {
      q: 'Do experts sign confidentiality terms?',
      a: 'Yes. Every expert accepts our terms of engagement, including confidentiality and MNPI obligations, before their first call and reconfirms them before each new project.',
    },
    {
      q: 'Do you record calls?',
      a: 'Not by default. Recording or transcription is only arranged when the client requests it and the expert consents in advance.',
    },
  ],
}

