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
  imageSrc: "/images/case/case10.jpg",
  tagline: "Case Study",
  title: "GoFundraise Cloud and AI",
  titleHighlight: "",
  description: "Expanding a global fundraising platform into B2B workplace giving through cloud-native architecture and AI-powered campaign tools.",
  overlayOpacity: 0.6,
  descriptionBelow: true,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Industry:", value: "Non-Profit Technology / Fundraising Platforms" },
    { label: "Services:", value: "Engineering as a Service, Cloud Engineering, Platform Architecture, Product Strategy, AI Enablement, Technology Advisory" },
  ],
  richTextContent: `GoFundraise is a global digital fundraising platform with more than 18 years of experience supporting non-profit organisations, event organisers, and individual fundraisers. Headquartered in Australia, the platform operates across Australia and North America and powers large-scale events including the San Francisco Marathon and the IRONMAN series.

GoFundraise identified an opportunity to expand beyond individual donors into the corporate workplace giving market. Software@Scale was engaged to design and deliver a secure, scalable B2B platform enabling pre-tax workplace giving, while strengthening campaign creation through AI-assisted tools.`,
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const CASE_STUDY_DELIVERABLES_DATA: CaseStudyDeliverablesData = {
  sectionTitle: "What We Delivered",
  sectionSubtitle: "Software@Scale defined the product scope, designed the AWS platform architecture, and introduced AI-backed campaign tooling to strengthen adoption and engagement.",
  deliverables: [
    {
      iconSrc: "/images/icons/search_check.svg",
      title: "Discovery & Design",
      description: "Led a two-week inception workshop to define requirements, engage payment providers, and validate payroll and disbursement flows.",
    },
    {
      iconSrc: "/images/icons/cloud_upload.svg",
      title: "Cloud-Native Platform",
      description: "Designed a scalable AWS architecture using CloudFront, S3, Certificate Manager, Route 53, ECS, Load Balancers, and Aurora PostgreSQL.",
    },
    {
      iconSrc: "/images/icons/payment_arrow_down.svg",
      title: "Secure Transactions",
      description: "Implemented a backend capable of handling sensitive financial transactions while maintaining a frictionless user experience.",
    },
    {
      iconSrc: "/images/icons/campaign.svg",
      title: "AI Campaign Tools",
      description: "Designed AI features in the Vision editor to generate tailored cause narratives, supporting imagery, and campaign optimisation guidance.",
    },
    {
      iconSrc: "/images/icons/network_intel_node.svg",
      title: "AI Infrastructure",
      description: "Utilised AWS Bedrock and Microsoft Agent Framework to orchestrate AI-powered workflows.",
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
  description: "To enter the workplace giving market, GoFundraise needed to deliver a new value proposition supporting multiple stakeholders and payroll-linked financial flows.",
  listItems: [
    "Expansion into a new B2B market beyond traditional consumer fundraising",
    "Balancing the needs of employers, employees, and charities within a single platform",
    "Supporting pre-tax payroll deductions and employer matching securely",
    "Ensuring high-quality campaign content without reliance on external design resources",
  ],
  imageSrc: "/images/case/case11.jpg",
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
    sectionSubtitle: "The platform delivered improved performance, reduced dependency risk, and stronger operational insight to support ongoing optimisation.",
    outcomes: [
      {
        iconSrc: "/images/icons/payments.svg",
        title: "New Revenue Stream",
        description: "Enabled entry into B2B workplace giving, creating a profitable new revenue channel.",
      },
      {
        iconSrc: "/images/icons/deployed_code_account.svg",
        title: "CSR Enablement",
        description: "Provided employers with a turnkey solution to meet CSR objectives with minimal administrative burden.",
      },
      {
        iconSrc: "/images/icons/diversity_1.svg",
        title: "Frictionless Giving",
        description: "Allowed employees to donate easily through pre-tax salary deductions and a simple interface.",
      },
      {
        iconSrc: "/images/icons/globe.svg",
        title: "Greater Impact",
        description: "Increased participation and donation volumes by reducing friction across the giving journey.",
      },
    ],
    imageSrc: "/images/case/case12.png",
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