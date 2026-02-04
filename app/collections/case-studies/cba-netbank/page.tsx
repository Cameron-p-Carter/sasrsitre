import CaseStudyArticleLayout from '@/app/components/templates/CaseStudyArticleLayout';

// --- Data Structures copied from CaseStudyArticleLayout.tsx ---

interface HeroSectionData {
  imageSrc: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  overlayOpacity: number;
    descriptionBelow: true,
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

interface Deliverable {
  iconSrc: string;
  title: string;
  description: string;
}

interface CaseStudyDeliverablesData {
  sectionTitle: string;
  sectionSubtitle: string;
  deliverables: Deliverable[];
  backgroundColor: string;
  titleColor: string;
  subtitleColor: string;
  textColor: string;
  iconColor: string;
  rows?: number;
}

interface FeatureItem {
  iconSrc: string;
  title: string;
  description: string;
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

interface Stat {
  value: string;
  description: string;
}

interface CaseStudyStatsData {
  title: string;
  technologiesContent?: string;
  stats: Stat[];
  backgroundColor: string;
  titleColor: string;
  accentColor: string;
}

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

// --- Placeholder Data ---

const CASE_STUDY_HERO_DATA: HeroSectionData = {
  imageSrc: "/images/case/case16.jpg",
  tagline: "Case Study",
  title: "CBA NetBank",
  titleHighlight: "",
  description: "Australia’s leading bank modernises online banking through a cloud-first, customer-centric digital platform transformation.",
  overlayOpacity: 0.6,
  descriptionBelow: true,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Industry:", value: "Banking / Financial Services" },
    { label: "Services:", value: "Engineering as a Service, Cloud Engineering, Digital Platform Modernisation, Delivery Transformation, Security & Compliance, Technology Advisory" },
  ],
  richTextContent: `Commonwealth Bank of Australia (CBA) serves more than 17 million customers across retail, business, and institutional banking. Guided by its strategy of building tomorrow’s bank today, CBA continues to invest heavily in digital capabilities to deliver secure, modern, and customer-focused banking experiences.

CBA engaged Software@Scale to support the modernisation of its NetBank online banking platform, addressing declining customer satisfaction, mounting technical debt, and delivery constraints caused by a highly fragmented legacy ecosystem.`,
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const CASE_STUDY_DELIVERABLES_DATA: CaseStudyDeliverablesData = {
  sectionTitle: "What We Delivered",
  sectionSubtitle: "Software@Scale supported a holistic transformation across people, process, and technology to modernise NetBank delivery without compromising resilience or regulatory compliance.",
  deliverables: [
    {
      iconSrc: "/images/icons/cloud_done_light.svg",
      title: "Cloud-First Platform",
      description: "Supported migration from on‑premise legacy infrastructure to a cloud‑first AWS architecture.",
    },
    {
      iconSrc: "/images/icons/data_check.svg",
      title: "Unified Monorepo",
      description: "Enabled a modern full‑stack monorepo platform allowing squads to deliver end‑to‑end features on a single stack.",
    },
    {
      iconSrc: "/images/icons/payment_arrow_down.svg",
      title: "Payment Journeys",
      description: "Improved delivery across critical payment workflows including BPAY, PayTo, payment limits, and joint account authorisation.",
    },
    {
      iconSrc: "/images/icons/shield_lock.svg",
      title: "Safer Releases",
      description: "Introduced feature flags, smaller release cycles, and safer deployment patterns to reduce risk.",
    },
    {
      iconSrc: "/images/icons/design_services.svg",
      title: "Design System",
      description: "Implemented the Lumen design system to deliver consistent, accessible experiences aligned to WCAG 2.2.",
    },
  ],
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  subtitleColor: "text-[#5ae0f6]",
  textColor: "text-white",
  iconColor: "text-[#5ae0f6]",
  rows: 2,
};



const CASE_STUDY_CUSTOM_SECTION_DATA: CustomSectionData = {
  sectionTitle: "Key Challenges",
  description: "As customer expectations increased, NetBank Classic and the broader platform ecosystem limited CBA’s ability to deliver modern, secure, and accessible digital banking at pace.",
  listItems: [
    "Declining Net Promoter Scores creating customer retention risk",
    "Legacy infrastructure and tightly coupled services making change slow and risky",
    "Over 300 applications and repositories creating maintenance overhead and dependency complexity",
    "Fragmented APIs and bespoke integrations slowing delivery of customer value",
    "Ageing design systems limiting accessibility and consistency against WCAG 2.2 standards",
  ],
  imageSrc: "/images/case/case17.jpg",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  listTextColor: "text-[#00050a]",
  imageOnRight: false,
};
 
const CASE_STUDY_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Let's Discuss Your Project",
  description: "Contact us today to explore how we can help you achieve your goals effectively.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const CASE_STUDY_PAGE_DATA = {
  hero: CASE_STUDY_HERO_DATA,
  overview: CASE_STUDY_OVERVIEW_DATA,
  customSection: CASE_STUDY_CUSTOM_SECTION_DATA,
  deliverables: CASE_STUDY_DELIVERABLES_DATA,
  outcome: {
    sectionTitle: "The Outcome",
    sectionSubtitle: "The modernisation program improved delivery speed, reduced operational overhead, and strengthened the customer experience foundation.",
    outcomes: [
      {
        iconSrc: "/images/icons/delivery_truck_speed.svg",
        title: "Faster Delivery",
        description: "Enabled smaller, more frequent releases through a unified platform and modern deployment practices.",
      },
      {
        iconSrc: "/images/icons/percent.svg",
        title: "Lower Cost",
        description: "Reduced maintenance overhead by consolidating delivery onto a single cloud‑based platform.",
      },
      {
        iconSrc: "/images/icons/monitoring_dark.svg",
        title: "Improved Stability",
        description: "Strengthened resilience through improved monitoring, alerting, and safer release patterns.",
      },
      {
        iconSrc: "/images/icons/reviews.svg",
        title: "Better Experience",
        description: "Delivered a simpler, more accessible online banking experience aligned to customer needs.",
      },
      {
        iconSrc: "/images/icons/search_check_dark.svg",
        title: "Stronger Insight",
        description: "Improved behavioural and performance insight through unified tagging and data foundations.",
      },
    ],
    imageSrc: "/images/case/case18.jpg",
    backgroundColor: "bg-[#cce1f4]",
    titleColor: "text-[#0c2080]",
    featureTitleColor: "text-[#00050a]",
    featureTextColor: "text-[#00050a]",
    imageOnRight: false,
  },
  testimonial: {
    quote: "[Testimonial from Figma for UBank]",
    name: "UBank Executive",
    title: "Executive, UBank",
  },
  stats: {
    title: "Transforming technical challenges into strategic opportunities",
    technologiesContent: "• Amazon Web Services (AWS) • Amazon CloudFront • Amazon S3 • AWS Certificate Manager • Amazon Route 53 • Amazon ECS • Application Load Balancers • Amazon Aurora PostgreSQL • AWS Bedrock • Microsoft Agent Framework",
    stats: [
      { value: "50%", description: "Cost reduction" },
      { value: "45", description: "Engineers" },
      { value: "99.99%", description: "Up time" },
    ],
    backgroundColor: "bg-[#cce1f4]",
    titleColor: "text-[#0c2080]",
    accentColor: "text-[#006cc9]",
  },
  cta: CASE_STUDY_CTA_DATA,
};

export default function UbankCaseStudyPage() {
  return (
    <CaseStudyArticleLayout data={CASE_STUDY_PAGE_DATA} />
  );
}