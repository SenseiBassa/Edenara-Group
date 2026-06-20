// ── Brand colour tokens ─────────────────────────────────
export const T = {
  dark:   '#060F1C',
  navy:   '#08192E',
  navy2:  '#0C2240',
  green:  '#1A5235',
  greenL: '#236B46',
  gold:   '#B8922A',
  goldL:  '#D4AA4A',
  cream:  '#F4EFE4',
  slate:  '#8494AC',
  serif:  "'Cormorant Garamond', Georgia, serif",
  sans:   "'DM Sans', system-ui, sans-serif",

  // Per-subsidiary brand colours (sampled from logo artwork)
  euphrora: { solid: '#0A7CB4', light: 'rgba(10,124,180,.14)', border: 'rgba(10,124,180,.35)' },
  pishora:  { solid: '#3A7A1A', light: 'rgba(58,122,26,.14)',  border: 'rgba(58,122,26,.35)'  },
  gihora:   { solid: '#B78521', light: 'rgba(183,133,33,.14)', border: 'rgba(183,133,33,.35)' },
  nexhora:  { solid: '#087C97', light: 'rgba(8,124,151,.14)',  border: 'rgba(8,124,151,.35)'  },
};

// ── Portfolio companies data ─────────────────────────────
export const COMPANIES = [
  {
    key: 'euphrora',
    logo: 'euphrora',
    num: '01',
    name: 'Euphrora Medica',
    sector: 'Healthcare · Biotechnology · MedTech',
    tagline: 'Biotech Innovation. MedTech Solutions. Global Reach.',
    purpose:
      'Advancing human health through scientific innovation and practical healthcare solutions. ' +
      'Euphrora Medica bridges the gap between laboratory discovery and real-world clinical impact ' +
      '— across diagnostics, precision medicine, and health systems.',
    tags: ['Biomedical Innovation', 'Medical Technologies', 'Diagnostics', 'Precision Healthcare', 'R&D', 'Healthcare Systems'],
  },
  {
    key: 'gihora',
    logo: 'gihora',
    num: '02',
    name: 'Gihora Capital',
    sector: 'Finance · Wealth Management · Investment',
    tagline: 'Stewarding Wealth. Building Legacies.',
    purpose:
      'Providing disciplined financial solutions that enable sustainable growth and prosperity. ' +
      'Gihora Capital deploys intelligent capital allocation strategies to build lasting wealth ' +
      'across investment advisory, asset management, and venture funding.',
    tags: ['Investment Advisory', 'Asset Management', 'Capital Growth', 'Wealth Preservation', 'Venture Funding', 'Strategic Finance'],
  },
  {
    key: 'pishora',
    logo: 'pishora',
    num: '03',
    name: 'Pishora Agritech',
    sector: 'Agriculture · Agritech · Supply Chain',
    tagline: 'Sustainable Farming. Reliable Delivery.',
    purpose:
      'Improving food security and agricultural productivity through technology and innovation. ' +
      'Pishora Agritech empowers farmers and food systems across Africa and beyond with smart agricultural solutions.',
    tags: ['Smart Agriculture', 'Food Systems', 'Agritech', 'Supply Chain', 'Agribusiness', 'Sustainability Programs'],
  },
  {
    key: 'nexhora',
    logo: 'nexhora',
    num: '04',
    name: 'Nexhora Technologies',
    sector: 'Technology · AI · Digital Infrastructure',
    tagline: 'Intelligent Systems. Global Impact.',
    purpose:
      'Developing intelligent digital solutions that accelerate growth, improve access, and transform industries. ' +
      'Nexhora leverages AI, enterprise software, data analytics, and emerging technologies to solve complex ' +
      'challenges across global markets.',
    tags: ['AI & Data Analytics', 'Enterprise Solutions', 'Digital Platforms', 'Cybersecurity', 'Innovation Labs', 'Global Solutions'],
  },
];

// ── Leadership ───────────────────────────────────────────
export const LEADERS = [
  {
    init: 'JB',
    name: 'Joshua Samuel Bassa',
    title: 'Founder & Group Director',
    bio: 'Biomedical Scientist, Biomedical Engineer, Researcher, and Entrepreneur focused on translating scientific innovation into scalable business solutions. Joshua leads the Group\'s strategic direction and scientific vision across all portfolio companies.',
    grad: 'linear-gradient(135deg,#B8922A,rgba(184,146,42,.45))',
  },
  {
    init: 'VC',
    name: 'Vivian Chukwurah',
    title: 'Co-Founder & Executive Director',
    bio: 'Strategic leader driving partnerships, operational excellence, and organisational growth. Vivian oversees the Group\'s operational infrastructure and builds the alliances that amplify Edenara\'s global impact.',
    grad: 'linear-gradient(135deg,#236B46,rgba(35,107,70,.45))',
  },
];

// ── Features / Engagement pathways ───────────────────────
export const FEATURES = [
  ['💼', 'Investor Relations',  'Transparent reporting and structured access for investors seeking sustainable opportunities.'],
  ['🔬', 'Research Hub',        'Collaborate with our scientific teams on breakthrough biomedical and agricultural research.'],
  ['🌐', 'Partnerships',        'Strategic alliances with institutions, governments, and enterprises who share our vision.'],
  ['📊', 'ESG Reporting',       'Rigorous sustainability reporting aligned with international ESG standards.'],
  ['💡', 'News & Insights',     'Stay informed on developments across healthcare, finance, agriculture, and technology.'],
  ['🚀', 'Careers',             'Join scientists, financiers, technologists, and innovators building tomorrow\'s solutions.'],
  ['🏛️', 'Institutional Access','Tailored engagement for research institutions and public sector bodies.'],
  ['✉️', 'Enquiry Centre',      'A dedicated team ready to respond to business, media, and collaboration enquiries.'],
];

// ── Nav links ────────────────────────────────────────────
export const NAV_LINKS = ['About', 'Companies', 'Leadership', 'Vision', 'Contact'];

// ── Ticker items ─────────────────────────────────────────
export const TICKER_ITEMS = [
  'Biotechnology', 'Healthcare Innovation', 'Capital Management',
  'Agricultural Technology', 'Food Security', 'Intelligent Systems',
  'AI & Data Analytics', 'Scientific Research', 'Sustainable Development',
  'Africa & Global Markets', 'Precision Medicine', 'Digital Transformation',
];
