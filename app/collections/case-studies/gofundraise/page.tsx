import CaseStudyArticleLayout from '@/app/components/CaseStudyArticleLayout';

// --- Data Structures copied from CaseStudyArticleLayout.tsx ---

interface HeroSectionData {
  imageSrc: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  overlayOpacity: number;
}

interface DetailItem {
  label: string;
  value: string;
}

interface CaseStudyOverviewData {
  overviewTitle: string;
  details: DetailItem[];
  richTextContent: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
}

interface CustomSectionData {
  sectionTitle: string;
  description: string;
  listItems: string[];
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  listTextColor: string;
  imageOnRight?: boolean;
}

interface OutcomeItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface CaseStudyOutcomeData {
  sectionTitle: string;
  outcomes: OutcomeItem[];
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  featureTitleColor: string;
  featureTextColor: string;
  imageOnRight?: boolean;
}

interface WhatWeDeliveredItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface WhatWeDeliveredSectionData {
  sectionTitle: string;
  sectionDescription: string;
  deliverables: WhatWeDeliveredItem[];
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  deliverableTitleColor: string;
  deliverableTextColor: string;
}

interface SectionHeaderData {
  title: string;
  description: string;
  backgroundColor?: string;
  textColor?: string;
}

interface DeliverableGridItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface DeliverablesGridData {
  sectionTitle: string;
  sectionDescription: string;
  deliverables: DeliverableGridItem[];
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  deliverableTitleColor?: string;
  deliverableTextColor?: string;
}

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

interface CaseStudyArticleData {
  hero: HeroSectionData;
  overview?: CaseStudyOverviewData;
  sectionHeader?: SectionHeaderData;
  deliverablesGrid?: DeliverablesGridData;
  deliverables?: any;
  imageFeatures?: any;
  outcome?: CaseStudyOutcomeData;
  stats?: any;
  customSection?: CustomSectionData;
  whatWeDeliveredSection?: WhatWeDeliveredSectionData;
  cta: CTASectionData;
}

// --- Data ---

const CASE_STUDY_HERO_DATA: HeroSectionData = {
  imageSrc: "/images/placeholder/placeholder87.jpg",
  tagline: "Case Study",
  title: "GoFundraise",
  titleHighlight: "",
  description: "Software@Scale delivers a world-class platform to support GoFundraise’s global growth",
  overlayOpacity: 0.6,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Client:", value: "GoFundraise" },
    { label: "Partner:", value: "Software@Scale" },
    { label: "Industry:", value: "Technology" },
    { label: "Services:", value: "Engineering as a Service, Technology Advisory / Fractional Resources, Security Architecture, Engineering Performance" },
  ],
  richTextContent: `When GoFundraise's ambitious expansion plans were at risk from new players entering the market, Software@Scale stepped in to deliver an expanded platform, and then ready it and the business for global markets.

GoFundraise needed a partner with expertise in complex ecosystems and a deep understanding of payment platforms and security standards in a global environment. Software@Scale was chosen because of our reputation for employing the best technology and people to deliver secure, efficient cloud-based solutions.

Within Software@Scale helped GoFundraise transform into a market-leading global fundraising platform, enabling supporters, event organisers and businesses to increase charitable donations while reducing operational costs and inefficiencies.`,
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const CASE_STUDY_SECTION_HEADER_DATA: SectionHeaderData = {
  title: "What We Delivered",
  description: "Precision-driven data assurance strategies that transform complex migration challenges into seamless operational excellence.",
  backgroundColor: "bg-[#006cc9]",
  textColor: "text-white",
};

const CASE_STUDY_DELIVERABLES_GRID_DATA: DeliverablesGridData = {
  sectionTitle: "A flexible workplace giving platform",
  sectionDescription: "Software@Scale integrated a new, multi-tenant, workplace giving platform into the existing charity portal. This platform incorporated payroll and reporting tools to facilitate corporate social responsibility impact tracking by participating workplaces.",
  deliverables: [
    {
      iconSrc: "/images/icons/manage_accounts.svg",
      title: "Streamlined",
      description: "Designed the system to be easy for employees to manage their donations and tax receipts."
    },
    {
      iconSrc: "/images/icons/finance_mode.svg",
      title: "Regulatory compliance",
      description: "Ensured compliance with financial and tax regulations in Australia and other regions in anticipation of future expansion."
    },
    {
      iconSrc: "/images/icons/payments.svg",
      title: "Payroll integration",
      description: "Integrated payroll functionality and payment gateways for multi-currency transactions seamlessly, allowing donations to be processed securely and efficiently directly from employees' pays."
    },
    {
      iconSrc: "/images/icons/deployed_code_history.svg",
      title: "Enhanced team agility",
      description: "Developed team capability by introducing DevOps practices and improved agile delivery methodology."
    }
  ],
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  descriptionColor: "text-white",
  deliverableTitleColor: "text-[#5ae0f6]",
  deliverableTextColor: "text-white",
};

const CASE_STUDY_CUSTOM_SECTION_DATA: CustomSectionData = {
  sectionTitle: "Global expansion capability and confidence",
  description: "Software@Scale facilitated global expansion by testing and optimising the fundraising platform and then developing a comprehensive strategy and roadmap for future success.",
  listItems: [
    "Identified and resolved technical bottlenecks to ensure the GoFundraise platform was ready for international expansion.",
    "Optimised the system for efficiency and improved server response times; fine-tuned the codebase and frontend components.",
    "Implemented dynamically adjusted resource management and established the global infrastructure required to support international growth.",
    "Improved technical capability through strategic acquisitions.",
    "Aligned platform offerings with diverse market requirements across major markets in the United States, the United Kingdom and New Zealand.",
    "Established a comprehensive, scalable and innovative foundation for long-term growth in the global fundraising space.",
  ],
  imageSrc: "/images/placeholder/placeholder88.jpg",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  listTextColor: "text-[#00050a]",
  imageOnRight: false,
};

const CASE_STUDY_OUTCOME_DATA: CaseStudyOutcomeData = {
  sectionTitle: "The Outcome",
  outcomes: [
    {
      iconSrc: "/images/icons/analytics.svg",
      title: "Optimised",
      description: "Positioned GoFundraise as a secure, reliable and flexible platform of choice for charities, corporates and individuals keen to raise funds to support the not-for-profit sector in Australia, the United States, the United Kingdom and New Zealand.\n\nDelivered a fully tested and compliant platform capable of handling a tenfold increase in traffic. Enhanced transaction handling capability across multi-region operations to increase payment processing speed by 40%."
    },
    {
      iconSrc: "/images/icons/strategy.svg",
      title: "Developed growth strategy",
      description: "Established and implemented a strategy and roadmap for scalable and innovative growth. Built a robust team with access to specialised engineering talent to support the platform's operational and technical needs."
    }
  ],
  imageSrc: "/images/placeholder/placeholder89.jpg",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  featureTitleColor: "text-[#00050a]",
  featureTextColor: "text-[#00050a]",
  imageOnRight: true,
};


const CASE_STUDY_STATS_DATA = {
  sectionTitle: "Transforming technical challenges into strategic opportunities",
  keyTechnologies: "• Vue.JS • .NET Core, .NET • Amazon EC2",
  stats: [
    { value: "50%", description: "Cost reduction" },
    { value: "45", description: "Engineers" },
    { value: "99.99%", description: "Up time" },
  ],
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  accentColor: "text-[#006cc9]",
};

const CASE_STUDY_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Let's Discuss Your Project",
  description: "Contact us today to explore how we can help you achieve your goals effectively.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const CASE_STUDY_PAGE_DATA: CaseStudyArticleData = {
  hero: CASE_STUDY_HERO_DATA,
  overview: CASE_STUDY_OVERVIEW_DATA,
  sectionHeader: CASE_STUDY_SECTION_HEADER_DATA,
  deliverablesGrid: CASE_STUDY_DELIVERABLES_GRID_DATA,
  customSection: CASE_STUDY_CUSTOM_SECTION_DATA,
  outcome: CASE_STUDY_OUTCOME_DATA,
  stats: CASE_STUDY_STATS_DATA,
  cta: CASE_STUDY_CTA_DATA,
};

export default function CoatesGroupCaseStudyPage() {
  return (
    <CaseStudyArticleLayout data={CASE_STUDY_PAGE_DATA} />
  );
}