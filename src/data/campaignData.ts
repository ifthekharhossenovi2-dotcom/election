export interface Commitment {
  id: number;
  title: string;
  bengaliTitle: string;
  summary: string;
  description: string;
  tag: string;
  iconName: string;
  keyPoints: string[];
}

export interface LeadershipItem {
  role: string;
  organization: string;
  type: string;
  duration?: string;
  description: string[];
  certificate?: string;
}

export interface AchievementItem {
  title: string;
  issuer: string;
  date?: string;
  validity?: string;
  category: 'award' | 'certification' | 'appreciation';
}

export interface FinanceItem {
  id: string;
  eventName: string;
  category: 'Workshops' | 'Contests' | 'Tech Fest' | 'Logistics' | 'Sponsorships' | 'Membership';
  budgeted: number;
  actual: number;
  date: string;
  status: 'Audited' | 'Balanced' | 'Under Budget' | 'Verified';
  receiptCount: number;
  notes: string;
}

export const CAMPAIGN_INFO = {
  candidateName: 'Iftekhar Hossen Ovi',
  bengaliCandidateName: 'ইফতেখার হোসেন অভি',
  position: 'Treasurer — PCIU Computer Club | Election 2026–2027',
  officialHeaderTitle: 'Treasurer — PCIU Computer Club | Election 2026–2027',
  bengaliPosition: 'কোষাধ্যক্ষ — পিসিআইইউ কম্পিউটার ক্লাব | নির্বাচন ২০২৬–২০২৭',
  term: '2026–2027',
  electionDate: '29 October 2026',
  bengaliElectionDate: '২৯ অক্টোবর ২০২৬',
  campaignPeriod: '24–28 October 2026',
  bengaliCampaignPeriod: '২৪–২৮ অক্টোবর ২০২৬',
  symbolName: 'Keyboard',
  bengaliSymbolName: 'কীবোর্ড',
  symbolEmoji: '⌨️',
  slogan: 'Every Taka Should Have a Purpose',
  bengaliSlogan: 'প্রতিটি টাকার একটি সুনির্দিষ্ট উদ্দেশ্য থাকা উচিত।',
  manifestoCentralTheme: 'Every Taka Should Have a Purpose',
  bengaliManifestoTheme: 'প্রতিটি টাকার একটি সুনির্দিষ্ট উদ্দেশ্য থাকা উচিত।',
  closingPrinciple: 'Clear Records. Planned Spending. Accountable Finances.',
  bengaliClosingPrinciple: 'স্বচ্ছ রেকর্ড • পরিকল্পিত ব্যয় • দায়বদ্ধ অর্থব্যবস্থা',
  supportingMessage: 'Transparency in Records. Responsibility in Spending. Accountability in Every Decision.',
  bengaliSupportingMessage: 'হিসাবে স্বচ্ছতা • ব্যয়ে দায়িত্বশীলতা • প্রতিটি সিদ্ধান্তে দায়বদ্ধতা।',
  department: 'Department of Computer Science & Engineering',
  institution: 'Port City International University (PCIU)',
  campusLocation: 'Chittagong, Bangladesh',
  bio: `I am Iftekhar Hossen Ovi, a disciplined student of Computer Science & Engineering at Port City International University (PCIU). With extensive experience as a campus ambassador, competitive programmer, and general member of the PCIU Computer Club, I bring technical discipline, integrity, and proactive budget governance. As your Treasurer for 2026–2027, my conviction is simple: Every Taka Should Have a Purpose.`,
  votingCallBengali: 'আপনার মূল্যবান ভোটটি “ইফতেখার হোসেন অভি” কে “কীবোর্ড (⌨️)” মার্কায় ভোট দিয়ে জয়যুক্ত করুন',
  votingDesignationBengali: '“ কোষাধ্যক্ষ (Treasurer) পদে....”',
  socialLinks: {
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
    facebook: 'https://facebook.com',
    email: 'ifthekharhossenovi@gmail.com'
  }
};

export const MANIFESTO_COMMITMENTS: Commitment[] = [
  {
    id: 1,
    title: 'Transparency',
    bengaliTitle: 'হিসাবের সম্পূর্ণ স্বচ্ছতা',
    summary: 'Maintain clear and accurate records of every taka earned and spent.',
    description: 'Ensure that every single taka received through registrations, sponsorships, and club allocations is meticulously documented in real-time. All financial ledger summaries will be accessible to authorized club bodies with zero hidden entries.',
    tag: 'Core Principle',
    iconName: 'ShieldCheck',
    keyPoints: [
      'Zero unrecorded cash transactions',
      'Standardized voucher and cash-memo protocol',
      'Transparent quarterly summary statements'
    ]
  },
  {
    id: 2,
    title: 'Digital Records',
    bengaliTitle: 'ডিজিটাল স্প্রেডশিট ও ক্লাউড বুককিপিং',
    summary: 'Organize budgets, transactions, and expenses using Sheets or Excel.',
    description: 'Transition from ad-hoc manual paper notes to structured cloud spreadsheets and standardized financial models. Automatic formulas, receipt image linking, and backup archives to prevent data loss.',
    tag: 'Modernization',
    iconName: 'FileSpreadsheet',
    keyPoints: [
      'Automated expense categorizations',
      'Cloud-backed real-time audit logs',
      'Standardized formula templates for event planning'
    ]
  },
  {
    id: 3,
    title: 'Realistic Budgeting',
    bengaliTitle: 'বাস্তবধর্মী ও টেকসই বাজেট প্রণয়ন',
    summary: 'Work with event teams to develop practical, affordable budgets.',
    description: 'Collaborate with event leads before projects begin to estimate true logistical costs, prevent overspending, and prepare contingency reserves rather than hasty post-event adjustments.',
    tag: 'Planning',
    iconName: 'Calculator',
    keyPoints: [
      'Pre-event cost breakdown meetings',
      'Market-rate vendor quotes collection',
      'Buffer margins for emergency contingencies'
    ]
  },
  {
    id: 4,
    title: 'Regular Reports',
    bengaliTitle: 'নিয়মিত আর্থিক প্রতিবেদন পেশ',
    summary: 'Report financial information to the executive committee and faculty advisers according to the club’s established process.',
    description: 'Submit formal income-expenditure reports after every event and during monthly executive meetings. Clear presentations highlighting budget vs. actual outcomes to maintain faculty trust.',
    tag: 'Reporting',
    iconName: 'BarChart3',
    keyPoints: [
      'Formal post-event audited statement within 7 days',
      'Monthly club finance status summaries',
      'Transparency with faculty advisors'
    ]
  },
  {
    id: 5,
    title: 'Sponsorships and Funds',
    bengaliTitle: 'স্পন্সরশিপ ও ফান্ড যথাযথ সংরক্ষণ',
    summary: 'Support sponsorship activities and properly document funds received and how they are used.',
    description: 'Partner with the corporate relations team to provide official invoices, money receipts, and post-event sponsor utilization decks, building long-term sponsor confidence for PCIU.',
    tag: 'Fund Management',
    iconName: 'HandCoins',
    keyPoints: [
      'Official money receipt for every corporate sponsor',
      'Earmarked fund tracking for specific hackathons and fests',
      'Transparent deliverable reports to funding partners'
    ]
  },
  {
    id: 6,
    title: 'Members First',
    bengaliTitle: 'শিক্ষার্থী ও সদস্যদের স্বার্থ অগ্রাধিকার',
    summary: 'Prioritize skill-building events and learning opportunities within approved budgets.',
    description: 'Ensure club funds directly benefit general members by financing high-impact competitive programming sessions, AI/ML workshops, hackathons, and certifications at minimal cost to students.',
    tag: 'Student Welfare',
    iconName: 'GraduationCap',
    keyPoints: [
      'Subsidized participation fees for flagship workshops',
      'Allocation of budget for student learning materials',
      'Equal access to resources across all batches'
    ]
  },
  {
    id: 7,
    title: 'Following the Rules',
    bengaliTitle: 'ক্লাব গঠনতন্ত্র ও নিয়মের পূর্ণাঙ্গ আনুগত্য',
    summary: 'Follow the club constitution, policies, approved budgets, and required authorization procedures.',
    description: 'Strict adherence to PCIU Computer Club constitution, formal approval sign-offs before disbursements, and strict respect for executive committee and advisory board governance.',
    tag: 'Governance',
    iconName: 'Scale',
    keyPoints: [
      'Multi-signature approval for major club expenses',
      'Adherence to PCIU administrative guidelines',
      'Zero unauthorized withdrawals or fund diversions'
    ]
  },
  {
    id: 8,
    title: 'Smart Spending',
    bengaliTitle: 'মিতব্যয়িতা ও বুদ্ধিমান ব্যয় নিয়ন্ত্রণ',
    summary: 'Manage costs carefully without unnecessarily compromising event quality.',
    description: 'Negotiate bulk university rates for catering, printing, banners, and t-shirts. Cut down unnecessary overheads so that more funds go towards prizes and participant value.',
    tag: 'Optimization',
    iconName: 'BadgePercent',
    keyPoints: [
      'Competitive vendor bidding for event printouts & merch',
      'Elimination of redundant operational expenses',
      'Maximizing participant ROI for every taka spent'
    ]
  },
  {
    id: 9,
    title: 'Bills and Receipts',
    bengaliTitle: 'প্রতিটি ভাউচার ও মেমোর ডিজিটাল আর্কাইভ',
    summary: 'Keep supporting documents, receipts, and payment confirmations.',
    description: 'Every expense voucher, vendor invoice, bKash/Nagad/bank payment confirmation is scanned, categorized, and preserved both in a physical folder and secure cloud drive.',
    tag: 'Audit Trail',
    iconName: 'ReceiptText',
    keyPoints: [
      'Digital receipt scan linked directly to spreadsheet row',
      'Physical audit binder organized by fiscal quarter',
      'Verifiable transaction IDs for mobile/banking transfers'
    ]
  },
  {
    id: 10,
    title: 'Budget vs Actual',
    bengaliTitle: 'বাজেট বনাম প্রকৃত ব্যয়ের চুলচেরা বিশ্লেষণ',
    summary: 'Compare planned budgets with actual expenses and investigate significant differences.',
    description: 'Analyze variances between what was planned and what was spent. Identify patterns to improve future event estimates and prevent accidental budget deficits.',
    tag: 'Variance Analysis',
    iconName: 'PieChart',
    keyPoints: [
      'Post-event variance breakdown report',
      'Actionable recommendations for upcoming event teams',
      'Preventive alerts if expenses approach limit'
    ]
  },
  {
    id: 11,
    title: 'Working Together',
    bengaliTitle: 'সম্মিলিত পরামর্শ ও সমঝোতাভিত্তিক কাজ',
    summary: 'Consult committee members, advisers, and members while respecting the established approval process.',
    description: 'Maintain open communication channels with the President, General Secretary, organizing teams, and faculty moderators. Collaborative financial decision-making that respects every voice.',
    tag: 'Teamwork',
    iconName: 'UsersRound',
    keyPoints: [
      'Open consultation with all sub-committee leads',
      'Constructive feedback loops with general members',
      'Unbiased and professional coordination'
    ]
  },
  {
    id: 12,
    title: 'Clean Handover',
    bengaliTitle: 'পরবর্তী কমিটির কাছে সুশৃঙ্খল ও পরিচ্ছন্ন দায়িত্ব হস্তান্তর',
    summary: 'Transfer organized records, transaction history, and outstanding obligations to the next committee.',
    description: 'At the end of the term, deliver an exhaustive audited ledger, all digital spreadsheets, receipts, inventory, and zero pending debt to the incoming 2027–2028 treasurer.',
    tag: 'Sustainability',
    iconName: 'ArrowRightLeft',
    keyPoints: [
      'Comprehensive handover documentation and orientation',
      'Zero unaccounted liabilities left behind',
      'Permanent institutional archive for PCIU Computer Club'
    ]
  }
];

export const SKILLS_DATA = {
  programmingLanguages: [
    { name: 'C', icon: 'Code' },
    { name: 'C++', icon: 'Code' },
    { name: 'C#', icon: 'Code' },
    { name: 'Python', icon: 'Code' },
    { name: 'Java', icon: 'Code' }
  ],
  webDevelopment: [
    { name: 'ASP.NET', icon: 'Globe' },
    { name: 'ASP.NET Core', icon: 'Server' },
    { name: 'Django', icon: 'Cpu' },
    { name: 'HTML', icon: 'Code' },
    { name: 'CSS', icon: 'Palette' }
  ],
  database: [
    { name: 'MySQL', icon: 'Database' },
    { name: 'SQL Server', icon: 'Database' },
    { name: 'DBMS Concepts', icon: 'FolderGit2' }
  ],
  toolsAndPlatforms: [
    { name: 'Visual Studio', icon: 'Terminal' },
    { name: 'VS Code', icon: 'Terminal' },
    { name: 'NetBeans', icon: 'Cpu' },
    { name: 'MS Word', icon: 'FileSpreadsheet' },
    { name: 'MS Excel', icon: 'Table' },
    { name: 'Kaggle', icon: 'Binary' }
  ],
  coreCompetencies: [
    { name: 'Data Structures & Algorithms', icon: 'Binary' },
    { name: 'OOP (Object Oriented Programming)', icon: 'Layers' },
    { name: 'Problem Solving', icon: 'Lightbulb' },
    { name: 'Software Development', icon: 'Cpu' },
    { name: 'Debugging & Code Optimization', icon: 'Wrench' },
    { name: 'Backend Development', icon: 'Server' }
  ],
  treasury: [
    { name: 'Budget Forecasting & Variance Tracking', icon: 'Calculator' },
    { name: 'Advanced Excel & Google Sheets', icon: 'Table' },
    { name: 'Financial Bookkeeping & Ledger Systems', icon: 'BookOpen' },
    { name: 'Voucher & Cash-Memo Audit Systems', icon: 'Receipt' },
    { name: 'Sponsorship Document Accounting', icon: 'HandCoins' },
    { name: 'Digital Banking & Payment Reconciliations', icon: 'CreditCard' }
  ]
};

export const LEADERSHIP_DATA: LeadershipItem[] = [
  {
    role: 'Campus Ambassador',
    organization: 'ICT Olympiad Bangladesh (ICTOB), Season 2',
    type: 'Remote',
    duration: '2024–2025',
    description: [
      'Represented ICTOB on campus and promoted technology awareness among peers.',
      'Created promotional materials and coordinated student outreach for Season 2 events.',
      'Received a Certificate of Appreciation for outstanding contribution and commitment.'
    ],
    certificate: 'Certificate of Appreciation'
  },
  {
    role: 'General Member',
    organization: 'PCIU Computer Club',
    type: 'On Campus',
    duration: 'June 2024 – Present',
    description: [
      'Helped organize technical workshops, coding events, and university programming contests.',
      'Actively participated in problem-solving sessions and member engagement.'
    ]
  },
  {
    role: 'Volunteer',
    organization: 'Port City International University (PCIU)',
    type: 'On Campus',
    description: [
      'Supported organization of academic and university-level events, including student communication and logistics.'
    ]
  },
  {
    role: 'Campus Ambassador',
    organization: 'Ostad',
    type: 'Remote',
    description: [
      'Promoted technology learning and professional development programs; supported community engagement campaigns.'
    ]
  },
  {
    role: 'Campus Ambassador',
    organization: 'Creative IT',
    type: 'Remote',
    description: [
      'Promoted Creative IT\'s professional and technical training programs and organized information sessions for students.'
    ]
  },
  {
    role: 'Campus Ambassador',
    organization: 'The Aura',
    type: 'Remote',
    description: [
      'Represented The Aura community on campus, connecting students to learning opportunities and events.'
    ]
  },
  {
    role: 'Campus Ambassador',
    organization: 'BYLC (Bangladesh Youth Leadership Center)',
    type: 'Remote',
    description: [
      'Represented the BYLC community on campus, connecting students to learning opportunities and events.'
    ],
    certificate: 'Certificate of Appreciation 2020'
  }
];

export const ACHIEVEMENTS_DATA: AchievementItem[] = [
  {
    title: '2nd Place — PCC Monthly Programming Contest',
    issuer: 'PCIU Computer Club',
    date: '27 Feb 2025',
    category: 'award'
  },
  {
    title: 'Gemini Certified Student (University)',
    issuer: 'Google for Education',
    date: '23 Sep 2025',
    validity: 'Valid through 22 Sep 2029',
    category: 'certification'
  },
  {
    title: 'Certificate of Appreciation — Campus Ambassador Season 2',
    issuer: 'ICT Olympiad Bangladesh',
    date: '24 May 2025',
    category: 'appreciation'
  },
  {
    title: 'Certificate of Completion — Networking Technology Workshop',
    issuer: 'Skill Zone',
    date: '23 Aug 2025',
    category: 'certification'
  },
  {
    title: 'Certificate of Completion — Data Science & Machine Learning',
    issuer: 'Interactive Cares',
    category: 'certification'
  },
  {
    title: 'Certificate of Appreciation — Campus Ambassador 2020',
    issuer: 'Bangladesh Youth Leadership Center (BYLC)',
    category: 'appreciation'
  },
  {
    title: 'Certificate of Participation — Bangladesh Youth Volunteer Award',
    issuer: 'Go Up Foundation & Amra Scout Group',
    date: '11 Mar 2023',
    category: 'appreciation'
  }
];

export const ILLUSTRATIVE_FINANCE_DATA: FinanceItem[] = [
  {
    id: 'TX-2026-01',
    eventName: 'PCIU Intra-University Programming Contest (IUPC)',
    category: 'Contests',
    budgeted: 45000,
    actual: 42800,
    date: 'February 2026',
    status: 'Audited',
    receiptCount: 14,
    notes: 'Saved BDT 2,200 via competitive print vendor bidding for winner certificates and banners.'
  },
  {
    id: 'TX-2026-02',
    eventName: 'Hands-on AI & Machine Learning Bootcamp (3 Days)',
    category: 'Workshops',
    budgeted: 28000,
    actual: 26500,
    date: 'April 2026',
    status: 'Balanced',
    receiptCount: 9,
    notes: 'Speaker honorarium, snacks, resource material printing. 100% vouchers scanned.'
  },
  {
    id: 'TX-2026-03',
    eventName: 'PCIU Annual Tech Fest & Project Showcase',
    category: 'Tech Fest',
    budgeted: 120000,
    actual: 118400,
    date: 'June 2026',
    status: 'Verified',
    receiptCount: 38,
    notes: 'Multi-sponsor fund reconciliation with 4 corporate tech sponsors; zero discrepancy.'
  },
  {
    id: 'TX-2026-04',
    eventName: 'Freshers’ Induction & Web Development Hands-on Lab',
    category: 'Workshops',
    budgeted: 18000,
    actual: 17200,
    date: 'August 2026',
    status: 'Under Budget',
    receiptCount: 6,
    notes: 'Member handbook publication and lab snacks. BDT 800 rolled over to reserve.'
  },
  {
    id: 'TX-2026-05',
    eventName: 'Club Logistics, Domain Renewal & Cloud Backup',
    category: 'Logistics',
    budgeted: 15000,
    actual: 14950,
    date: 'September 2026',
    status: 'Audited',
    receiptCount: 4,
    notes: 'Domain, SSL certificates, drive storage, and printed file binders.'
  }
];
