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
      'Software buyers, cloud architects, network operators and the people who price, sell and churn the products you are looking at.',
    focus: ['Enterprise SaaS & infrastructure', 'Semiconductors & hardware', 'Telecom & connectivity', 'Media, streaming & gaming', 'Cybersecurity'],
    questions: [
      'How sticky is this vendor once it is embedded in the stack?',
      'What would trigger a switch at renewal?',
      'Where is wallet share moving over the next 24 months?',
    ],
  },
  {
    id: 'consumer',
    name: 'Consumer & Retail',
    short: 'Consumer',
    icon: ShoppingBag,
    summary:
      'Category buyers, brand leaders, distributors and store operators who see demand before it shows up in the numbers.',
    focus: ['Food & beverage', 'Beauty & personal care', 'E-commerce & marketplaces', 'Apparel & luxury', 'Restaurants & hospitality'],
    questions: [
      'How are retailers allocating shelf space in this category?',
      'Which private-label threats are real?',
      'What does a reorder cycle look like from the distributor side?',
    ],
  },
  {
    id: 'financial',
    name: 'Financial Services',
    short: 'FS',
    icon: Landmark,
    summary:
      'Bankers, insurers, payments operators and fintech product leaders who know how money and risk actually move.',
    focus: ['Banking & lending', 'Payments & fintech', 'Insurance & insurtech', 'Asset & wealth management', 'Capital markets infrastructure'],
    questions: [
      'How do mid-market banks evaluate a core-system replacement?',
      'What are payment processors really earning per transaction?',
      'Where is underwriting being automated, and where is it stalling?',
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
    questions: [
      'How are input costs being passed through to customers?',
      'Which suppliers are gaining share on reliability?',
      'What is the real payback period on this equipment?',
    ],
  },
  {
    id: 'healthcare',
    name: 'Healthcare & Life Sciences',
    short: 'Healthcare',
    icon: HeartPulse,
    summary:
      'Clinicians, payers, hospital administrators and pharma commercial teams, screened carefully for role and recency.',
    focus: ['Pharma & biotech', 'Medical devices', 'Providers & health systems', 'Payers & PBMs', 'Healthcare IT'],
    questions: [
      'How do physicians choose between these two therapies today?',
      'What does the formulary process look like at a regional payer?',
      'Which capital purchases are hospitals deferring?',
    ],
  },
  {
    id: 'advertising',
    name: 'Advertising & Marketing',
    short: 'AdTech',
    icon: Megaphone,
    summary:
      'Media buyers, agency leads and CMOs who control budgets and know where performance is real.',
    focus: ['Ad tech & programmatic', 'Agencies & holding companies', 'Retail media', 'Martech & CRM', 'Creator & influencer economy'],
    questions: [
      'How are budgets shifting between channels this year?',
      'What makes an agency switch measurement partners?',
      'Is retail media incremental or cannibalizing search?',
    ],
  },
  {
    id: 'investors',
    name: 'Private Equity & Venture Capital',
    short: 'Investors',
    icon: TrendingUp,
    summary:
      'Fast, precise access for commercial diligence, portfolio work and thesis building, from first screen to final IC.',
    focus: ['Commercial due diligence', 'Customer referencing', 'Competitor deep-dives', 'Portfolio value creation', 'Thesis development'],
    questions: [
      'Would customers renew at a higher price point?',
      'How does management’s story compare with the market’s view?',
      'What are the top three risks a former competitor would flag?',
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
    questions: [
      'What does best-in-class cost-to-serve look like in this segment?',
      'How long does a typical ERP rollout actually take?',
      'Which adjacencies have operators tried and abandoned?',
    ],
  },
  {
    id: 'market-research',
    name: 'Market Research Suppliers',
    short: 'Research',
    icon: ChartColumn,
    summary:
      'B2B recruitment for agencies running qualitative studies with hard-to-reach professional audiences.',
    focus: ['B2B niche recruitment', 'IDIs & focus groups', 'B2B surveys', 'Diary studies & ethnography', 'Hard-to-reach decision makers'],
    questions: [
      'Can you fill 30 IT decision makers at 1,000+ employee firms?',
      'We need procurement leads across three regions by Friday.',
      'Our panel is thin on C-suite in healthcare. Can you top it up?',
    ],
  },
  {
    id: 'ai-data',
    name: 'AI Data Services',
    short: 'AI Data',
    icon: Database,
    summary:
      'Credentialed domain specialists for model evaluation, data annotation and reasoning tasks that generalists get wrong.',
    focus: ['Domain-expert annotation', 'Model evaluation & red teaming', 'Reasoning & rubric writing', 'Specialist QA review', 'Multilingual expertise'],
    questions: [
      'We need licensed clinicians to grade medical answers.',
      'Can you source CPAs to write and review tax scenarios?',
      'We need engineers who can evaluate code in niche languages.',
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
      a: 'No. Joining the Savnec network is free, and there is no minimum level of participation.',
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

