import {
  Cpu,
  ShoppingBag,
  Landmark,
  Factory,
  HeartPulse,
  Megaphone,
  TrendingUp,
  Compass,
  BarChart3,
  Database,
} from 'lucide-react'

export const industries = [
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
    icon: BarChart3,
    summary:
      'B2B recruitment for agencies running qualitative and quantitative studies on hard-to-reach professional audiences.',
    focus: ['B2B niche recruitment', 'IDIs & focus groups', 'Quant survey samples', 'Panel augmentation', 'Hard-to-reach decision makers'],
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

export const segments = [
  {
    title: 'Private Equity & Venture Capital',
    body: 'Customer calls, competitor views and operator checks across the deal cycle, delivered at deal speed.',
  },
  {
    title: 'Consulting Firms',
    body: 'Sector depth for case teams who need to sound like insiders by Thursday.',
  },
  {
    title: 'Corporate Strategy Teams',
    body: 'An outside-in read on markets, competitors and customers before capital is committed.',
  },
  {
    title: 'Market Research Agencies',
    body: 'Hard-to-reach B2B respondents for qual and quant studies, recruited and verified.',
  },
]

export const formats = [
  {
    title: '1:1 Expert Calls',
    body: 'Hour-long conversations with operators, customers and former competitors. Scheduled around you.',
  },
  {
    title: 'Expert Surveys',
    body: 'Structured input from dozens of verified professionals when you need a number, not an anecdote.',
  },
  {
    title: 'Focus Groups & IDIs',
    body: 'Qualitative sessions with professional audiences, recruited to your screener and quota.',
  },
  {
    title: 'Custom Recruitment',
    body: 'Niche B2B profiles sourced from scratch for studies, advisory boards and panels.',
  },
  {
    title: 'Written Insights',
    body: 'Short written responses to targeted questions when a call is more than you need.',
  },
  {
    title: 'AI Domain Experts',
    body: 'Credentialed specialists for evaluation, annotation and reasoning work on AI models.',
  },
]

export const faqs = {
  Clients: [
    {
      q: 'How quickly will I see expert profiles?',
      a: 'For most projects, the first profiles arrive within 24 hours of a scoped brief. Highly specialized or multi-region requests can take longer, and we will tell you upfront when that is the case.',
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

export const insights = [
  {
    slug: 'screening-questions',
    tag: 'Method',
    title: 'Write screening questions that filter for real experience',
    read: '4 min read',
    body: [
      'The most common reason an expert call disappoints is not the expert. It is the screener. Questions like “Are you familiar with the market?” invite everyone to say yes.',
      'Better screeners ask for evidence. Instead of familiarity, ask what the person was responsible for: “In your last role, which vendors did you personally evaluate, and what budget did you control?” A real buyer answers in specifics. Everyone else drifts into generalities.',
      'Keep it to three or four questions, ask at least one that requires a number, and include one that tests recency. Experience from 2016 is history, not insight.',
    ],
  },
  {
    slug: 'diligence-call',
    tag: 'Private Equity',
    title: 'Five questions to ask on every commercial diligence call',
    read: '5 min read',
    body: [
      'Diligence calls are short and the clock is expensive. These five questions earn their place on almost every one.',
      'What would make you switch away from this provider? Who else did you evaluate, and why did you not choose them? How has your spend with them changed over three years? What would a 10% price increase do? If you were running the company, what would you fix first?',
      'The answers rarely agree. That is the point. The pattern across eight calls tells you more than any single conversation.',
    ],
  },
  {
    slug: 'mnpi-line',
    tag: 'Compliance',
    title: 'MNPI in expert calls: where the line sits',
    read: '6 min read',
    body: [
      'Material non-public information is information a reasonable investor would consider important and that has not been made public. Expert networks exist to share experience and judgment, never MNPI.',
      'In practice the risk is highest with current employees, recent leavers and anyone close to a pending transaction, earnings release or regulatory decision. That is why we screen for employment status and cool-off periods before a call is booked.',
      'Clients play a part too. Phrase questions around industry dynamics and historical experience rather than a named company’s unreleased numbers, and end the call if an expert starts to cross the line.',
    ],
  },
]
