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
  imageSrc: "/images/case/case7.png",
  tagline: "Case Study",
  title: "IRESS",
  titleHighlight: "",
  description: "A global financial services technology provider modernises content delivery and analytics through a cloud-native CMS platform on AWS.",
  overlayOpacity: 0.6,
  descriptionBelow: true,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Industry:", value: "Financial Services Technology" },
    { label: "Services:", value: "Engineering as a Service, Cloud Engineering, Platform Architecture, CMS Integration, Security Architecture Technology Advisory" },
  ],
  richTextContent: `IRESS serves a sophisticated global ecosystem across the financial services value chain, supporting more than 10,000 business clients and over 500,000 end-users who rely on its technology daily. Operating across Asia-Pacific, North America, Africa, and Europe, IRESS delivers solutions that must scale across diverse regulatory environments and market structures.

IRESS engaged Software@Scale to design and deliver a modern cloud-native CMS platform on AWS using Payload CMS, improving performance, reducing dependency risk, consolidating fragmented systems, and introducing stronger observability and usage insight.`,
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const CASE_STUDY_DELIVERABLES_DATA: CaseStudyDeliverablesData = {
  sectionTitle: "What We Delivered",
  sectionSubtitle: "Software@Scale designed a secure AWS-based platform that enabled external content administration while ensuring critical data control and reliability remained within IRESS’s AWS environment.",
  deliverables: [
    {
      iconSrc: "/images/icons/cloud_upload.svg",
      title: "Cloud CMS Platform",
      description: "Delivered a modern cloud-native architecture using Payload CMS as the external content administration layer integrated into AWS.",
    },
    {
      iconSrc: "/images/icons/data_check.svg",
      title: "Secure Application Layer",
      description: "Implemented CloudFront, WAF, Certificate Manager, Route 53, S3, Lambda, and API Gateway to support a secure and performant client-facing application.",
    },
    {
      iconSrc: "/images/icons/sync_lock.svg",
      title: "Reliable Synchronisation",
      description: "Built webhook-driven synchronisation using SNS, SQS, and Lambda to reliably sync CMS changes back into IRESS infrastructure.",
    },
    {
      iconSrc: "/images/icons/database_upload.svg",
      title: "Structured Storage",
      description: "Implemented a dual storage model using S3 for assets and DynamoDB for high-performance metadata retrieval.",
    },
    {
      iconSrc: "/images/icons/search_insights.svg",
      title: "Monitoring & Insight",
      description: "Established comprehensive observability using CloudWatch to provide real-time visibility into system health, performance, and usage.",
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
  description: "As usage increased and systems expanded, IRESS faced operational constraints that limited performance, agility, and data-driven decision-making.",
  listItems: [
    "Performance and responsiveness issues impacting user experience and time-sensitive financial operations",
    "Fragmented data architecture creating silos and requiring manual consolidation for reporting",
    "Heavy reliance on external vendors slowing development cycles and increasing operational risk",
    "Limited visibility into user behaviour and platform usage, restricting optimisation and product insight",
  ],
  imageSrc: "/images/case/case8.png",
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
        iconSrc: "/images/icons/speed_dark2.svg",
        title: "Faster Performance",
        description: "Improved speed and responsiveness for users through a modern cloud-native delivery architecture.",
      },
      {
        iconSrc: "/images/icons/lock_person.svg",
        title: "Reduced Risk",
        description: "Kept critical data within IRESS’s AWS environment, reducing single points of failure and dependency exposure.",
      },
      {
        iconSrc: "/images/icons/moved_location.svg",
        title: "Greater Agility",
        description: "Reduced reliance on third-party vendors, enabling faster iteration and response to change.",
      },
      {
        iconSrc: "/images/icons/search_insights_dark.svg",
        title: "Better Insight",
        description: "Introduced analytics and observability foundations to support data-driven product and experience improvements.",
      },
    ],
    imageSrc: "/images/case/case9.jpg",
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
    technologiesContent: "• Amazon Web Services (AWS) • Amazon CloudFront • AWS WAF • AWS Certificate Manager • Amazon Route 53 • Amazon S3 • AWS Lambda • Amazon API Gateway • Amazon SNS • Amazon SQS • Amazon DynamoDB • Amazon CloudWatch • Payload CMS",
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