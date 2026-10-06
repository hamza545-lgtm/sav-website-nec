// ─────────────────────────────────────────────────────────────
//  INSIGHTS / BLOG
//  Each article gets its own URL at /insights/<slug>.
//  Block types: p, h2, h3, ul, ol, table, callout.
//  Inline formatting: **bold** and [link text](/path or https://...)
// ─────────────────────────────────────────────────────────────

export const insights = [
  {
    slug: 'what-is-an-expert-network',
    category: 'Guide',
    featured: true,
    title: 'What Is an Expert Network? | How It Works | Benefits',
    description:
      'What an expert network is, how it works step by step, who uses one, the main engagement formats, the benefits and compliance safeguards, and how to choose the right provider.',
    date: '2026-10-06',
    readMinutes: 11,
    blocks: [
      {
        t: 'callout',
        c: 'An **expert network** is a firm that connects organizations with professionals who have first-hand experience of an industry, company or function, so they can learn from them through calls, interviews, surveys and other research formats. The network finds the right people, verifies their background, screens for conflicts and manages every engagement.',
      },
      { t: 'h2', c: 'What is an expert network?' },
      {
        t: 'p',
        c: 'Most business questions reach a point where published data runs out. Industry reports tell you how big a market was last year. Company filings tell you what management chose to disclose. Neither tells you why a procurement team switched suppliers, how physicians really choose between two therapies, or what a regional bank thinks of its core software vendor.',
      },
      {
        t: 'p',
        c: 'An expert network closes that gap. It identifies people with direct, relevant experience, such as current and former executives, operators, buyers, clinicians and engineers, and arranges paid, compliant conversations between them and the organizations that need their perspective.',
      },
      {
        t: 'p',
        c: 'The people consulted are usually called **experts** or advisors. The organizations paying for access are **clients**. The network sits in between: it recruits, verifies, screens, schedules, pays and keeps records, so both sides can focus on the conversation itself.',
      },
      { t: 'h3', c: 'Where the model came from' },
      {
        t: 'p',
        c: 'Expert networks took shape in the late 1990s and early 2000s, when investment firms began to formalize what analysts had always done informally: calling people who knew an industry from the inside. As the practice grew, so did the need for structure. Conflict checks, confidentiality terms and firm rules on non-public information became standard, and the client base widened from hedge funds to consultancies, corporations, market research agencies and, more recently, AI developers.',
      },

      { t: 'h2', c: 'How does an expert network work?' },
      {
        t: 'p',
        c: 'Every network runs its own process, but a well-run engagement follows the same arc. This is how a typical project runs at Savnec.',
      },
      {
        t: 'ol',
        c: [
          '**The brief.** The client describes the question, the profile they want to speak with (role, seniority, company type, geography, recency) and any restrictions, such as companies to exclude.',
          '**Sourcing.** Recruiters identify candidates who match. Some networks search an existing database first. Others, Savnec included, recruit for each brief through direct outreach so the shortlist fits the question rather than the database.',
          '**Screening.** Candidates answer short screening questions written for the project. Good screeners ask for evidence, such as budgets owned or vendors evaluated, rather than self-assessed familiarity.',
          '**Compliance checks.** The network confirms employment history, checks for conflicts of interest, applies the client’s restricted list and has the expert reconfirm their confidentiality obligations.',
          '**Profiles and selection.** The client receives anonymized profiles with screener answers and chooses whom to speak with.',
          '**The engagement.** The network schedules the call, interview, survey or session and handles logistics, recording consent where relevant, and expert payment.',
          '**Follow-up.** More calls, a second wave of recruitment or a different format, depending on what the first round revealed.',
        ],
      },
      {
        t: 'p',
        c: 'For a well-defined brief, the time from request to first profiles is measured in days, not weeks. Savnec typically delivers first profiles within 48 hours.',
      },

      { t: 'h2', c: 'Who uses expert networks?' },
      {
        t: 'p',
        c: 'Expert networks began in the investment world. Today their clients span almost every function that needs outside-in knowledge quickly.',
      },
      {
        t: 'ul',
        c: [
          '**Market research agencies** recruit hard-to-reach B2B respondents, such as senior decision makers, technical buyers and clinicians, for qualitative studies their own panels cannot fill.',
          '**Private equity and venture capital firms** use expert calls across the deal cycle: screening a sector, testing a thesis, speaking with a target’s customers and competitors during commercial due diligence, and planning value creation after close.',
          '**Corporate strategy and development teams** study adjacent markets, test ideas with potential buyers and learn from people who have run similar initiatives elsewhere.',
          '**Management consultancies** bring case teams up to speed in days and pressure-test hypotheses with practitioners.',
          '**AI developers and data companies** source credentialed professionals who can evaluate and improve model output in specialist fields.',
        ],
      },

      { t: 'h2', c: 'Types of expert network engagements' },
      {
        t: 'p',
        c: 'The one-to-one call is still the core product, but most networks now offer several formats. The right one depends on whether you need depth, breadth or observation.',
      },
      {
        t: 'table',
        c: {
          head: ['Format', 'What it is', 'Best for'],
          rows: [
            ['Expert calls & IDIs', 'A 30 to 60 minute one-to-one conversation or in-depth interview', 'Depth, nuance, testing a hypothesis'],
            ['B2B surveys', 'A structured questionnaire answered by verified professionals', 'Comparing views across a defined audience'],
            ['Focus groups', 'A moderated discussion with a small group of professionals', 'Reactions to concepts, messaging or products'],
            ['Custom recruitment', 'Sourcing specific B2B profiles for a client’s own study', 'Agencies running their own fieldwork'],
            ['Diary studies & ethnography', 'Participants record, or are observed in, their real working context over time', 'Understanding workflows as they happen'],
            ['AI domain experts', 'Credentialed specialists for evaluation, annotation and reasoning tasks', 'Improving AI models in specialist fields'],
          ],
        },
      },
      { t: 'p', c: 'See how Savnec runs each format on our [Clients page](/clients).' },

      { t: 'h2', c: 'Benefits of using an expert network' },
      { t: 'h3', c: 'Insight you cannot find in published sources' },
      {
        t: 'p',
        c: 'Experts explain the reasons behind the numbers: why customers churn, how purchasing decisions are made, which competitor is quietly winning. That context rarely appears in reports or databases.',
      },
      { t: 'h3', c: 'Speed' },
      {
        t: 'p',
        c: 'Building your own contacts in an unfamiliar industry takes months. A network can put you in conversation with relevant people within days, which matters when a deal timeline or a client deadline is fixed.',
      },
      { t: 'h3', c: 'Precision' },
      {
        t: 'p',
        c: 'You choose the exact profile, for example a former head of procurement at a mid-sized packaging manufacturer in Germany, not simply someone in packaging. Screening confirms the fit before you spend any time.',
      },
      { t: 'h3', c: 'Several perspectives, not one' },
      {
        t: 'p',
        c: 'Speaking with customers, competitors, suppliers and former employees of the same business lets you triangulate. Where accounts agree, you gain confidence. Where they diverge, you have found the question worth asking next.',
      },
      { t: 'h3', c: 'Compliance handled for you' },
      {
        t: 'p',
        c: 'A professional network takes on conflict checks, confidentiality terms and record keeping, which reduces legal and reputational risk for client and expert alike.',
      },
      { t: 'h3', c: 'Efficient use of budget' },
      {
        t: 'p',
        c: 'Compared with commissioning a full consulting study, a handful of targeted calls can answer a specific question in a fraction of the time and cost.',
      },

      { t: 'h2', c: 'Compliance: how a good expert network keeps conversations safe' },
      {
        t: 'p',
        c: 'The most important rule in the industry is simple. Experts share their experience and judgment, never confidential information or material non-public information (MNPI) about any company. Reputable networks enforce that rule through:',
      },
      {
        t: 'ul',
        c: [
          'Verification of identity and employment history',
          'Conflict-of-interest screening on every project',
          'Restrictions on current employees of named companies, and cool-off periods for recent leavers',
          'Confidentiality and MNPI attestations before each engagement',
          'Client controls such as restricted lists and chaperoned calls',
          'Clear records of every engagement for audit',
        ],
      },
      {
        t: 'p',
        c: 'Research-focused networks also align with professional codes such as the ESOMAR/ICC International Code, and handle personal data under laws like the GDPR and CCPA. Read how this works in practice in [our compliance framework](/compliance).',
      },

      { t: 'h2', c: 'Expert networks compared with other research methods' },
      {
        t: 'table',
        c: {
          head: ['Method', 'Strength', 'Limitation'],
          rows: [
            ['Desk research', 'Fast and inexpensive', 'Limited to what is already published'],
            ['Online panels', 'Large samples at low cost', 'Thin on senior and niche B2B audiences; profiles are self-reported'],
            ['Consulting projects', 'Broad analysis and recommendations', 'Costly and slow for a single question'],
            ['Expert network', 'First-hand, verified, targeted insight, quickly', 'Smaller samples; quality depends on the network’s recruiting'],
          ],
        },
      },
      {
        t: 'p',
        c: 'The methods work best together. Many teams use desk research to frame a question, expert calls to understand it, and B2B surveys to test how widely a view is shared.',
      },

      { t: 'h2', c: 'How to choose an expert network' },
      {
        t: 'ul',
        c: [
          '**Recruiting model.** Does the network recruit for your brief, or mainly search an existing database?',
          '**Screening quality.** Will you see each expert’s answers to your questions before you book?',
          '**Coverage.** Does it have depth in your industries and regions, including niche B2B roles?',
          '**Compliance.** Can it show you its framework and work within your own policy?',
          '**Honest timelines.** Does it commit to realistic dates and tell you early when a profile is hard to find?',
          '**Range of formats.** Can it support calls, surveys, groups and recruitment, so you can change format as the project evolves?',
          '**Service.** Will you have one accountable contact from brief to delivery?',
        ],
      },

      { t: 'h2', c: 'The bottom line' },
      {
        t: 'p',
        c: 'An expert network is, at its simplest, a faster route to the person who knows. Its value lies less in the introduction than in everything around it: finding the right person, proving they are right, and making the conversation safe for everyone involved.',
      },
    ],
    faqs: [
      {
        q: 'Are expert networks legal?',
        a: 'Yes. Expert networks operate legally around the world. The risk lies in sharing confidential or material non-public information, which is why reputable networks screen experts, set clear rules and keep records of every engagement.',
      },
      {
        q: 'How much does an expert network cost?',
        a: 'Pricing depends on the format, the seniority and specialization of the expert, and volume. Calls and interviews are usually priced per engagement, while surveys, focus groups and recruitment projects are typically quoted per project.',
      },
      {
        q: 'How are experts paid?',
        a: 'Experts receive an agreed rate for each engagement, usually based on time for calls and interviews, paid after the engagement is complete.',
      },
      {
        q: 'How quickly can I speak with an expert?',
        a: 'For a well-defined brief, first profiles usually arrive within one to two days, and calls can often take place the same week.',
      },
      {
        q: 'What is the difference between an expert network and a research panel?',
        a: 'A panel is a large pool of pre-registered respondents, suited to broad samples. An expert network recruits and verifies specific professionals for a defined question, which suits senior and niche B2B audiences.',
      },
      {
        q: 'Can I join an expert network as an expert?',
        a: 'Yes. Professionals with relevant industry experience can apply. Joining Savnec is free and carries no minimum commitment.',
      },
    ],
  },

  {
    slug: 'screening-questions-that-work',
    category: 'Method',
    title: 'How to Write Screening Questions That Filter for Real Experience',
    description:
      'Why most expert call screeners fail, and a simple method for writing screening questions that separate genuine experience from a good LinkedIn summary.',
    date: '2026-10-06',
    readMinutes: 4,
    blocks: [
      {
        t: 'p',
        c: 'The most common reason an expert call disappoints is not the expert. It is the screener. Questions like “Are you familiar with this market?” invite everyone to say yes.',
      },
      { t: 'h2', c: 'Ask for evidence, not familiarity' },
      {
        t: 'p',
        c: 'Better screeners ask what the person was responsible for. Instead of familiarity, ask: “In your last role, which vendors did you personally evaluate, and what budget did you control?” A real buyer answers in specifics. Everyone else drifts into generalities.',
      },
      { t: 'h2', c: 'Three rules for a sharper screener' },
      {
        t: 'ul',
        c: [
          '**Keep it short.** Three or four questions. Long screeners lose good experts.',
          '**Ask for a number.** Budget, team size, contract value or volume. Numbers are hard to bluff.',
          '**Test recency.** Experience from a decade ago is history, not insight. Ask when they last did the thing you care about.',
        ],
      },
      {
        t: 'p',
        c: 'Send us your draft screener with any [trial request](/request-trial) and we will tighten it before recruitment starts.',
      },
    ],
  },

  {
    slug: 'commercial-due-diligence-expert-calls',
    category: 'Private Equity',
    title: 'Five Questions to Ask on Every Commercial Due Diligence Call',
    description:
      'Five expert call questions that earn their place in almost every commercial due diligence process, and how to read the pattern across calls.',
    date: '2026-10-06',
    readMinutes: 5,
    blocks: [
      {
        t: 'p',
        c: 'Diligence calls are short and the clock is expensive. These five questions earn their place on almost every one.',
      },
      { t: 'h2', c: 'The five questions' },
      {
        t: 'ol',
        c: [
          '**What would make you switch away from this provider?** Reveals real switching costs and the competitors in the frame.',
          '**Who else did you evaluate, and why did you not choose them?** Tells you how the target wins.',
          '**How has your spend with them changed over three years?** A quiet test of the growth story.',
          '**What would a 10% price increase do?** The closest thing to a pricing-power measurement in a 45-minute call.',
          '**If you ran the company, what would you fix first?** Often the most useful answer of the hour.',
        ],
      },
      { t: 'h2', c: 'Read the pattern, not the call' },
      {
        t: 'p',
        c: 'The answers rarely agree. That is the point. The pattern across eight calls tells you more than any single conversation, so plan the call program as a set, with a mix of current customers, lost customers and competitors.',
      },
    ],
  },

  {
    slug: 'mnpi-expert-calls',
    category: 'Compliance',
    title: 'MNPI in Expert Calls: Where the Line Sits',
    description:
      'What material non-public information means in expert research, where the risk is highest, and how clients and experts can keep calls on the right side of the line.',
    date: '2026-10-06',
    readMinutes: 6,
    blocks: [
      {
        t: 'p',
        c: 'Material non-public information (MNPI) is information a reasonable investor would consider important that has not been made public. Expert networks exist to share experience and judgment, never MNPI.',
      },
      { t: 'h2', c: 'Where the risk is highest' },
      {
        t: 'ul',
        c: [
          'Current employees of a company being discussed',
          'Recent leavers who still hold current knowledge',
          'Anyone close to a pending transaction, earnings release or regulatory decision',
        ],
      },
      {
        t: 'p',
        c: 'That is why we screen for employment status and apply cool-off periods before a call is booked.',
      },
      { t: 'h2', c: 'What clients can do' },
      {
        t: 'p',
        c: 'Frame questions around industry dynamics and historical experience rather than a named company’s unreleased results, and end the call if an expert starts to cross the line. Read more in [our compliance framework](/compliance).',
      },
    ],
  },
]

export const getInsight = (slug) => insights.find((a) => a.slug === slug)

export const formatDate = (iso) =>
  new Date(`${iso}T12:00:00Z`).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })

export const slugify = (s) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
