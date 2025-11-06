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

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
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

interface CaseStudyArticleData {
  hero: HeroSectionData;
  overview?: CaseStudyOverviewData;
  sectionHeader?: SectionHeaderData;
  deliverablesGrid?: DeliverablesGridData;
  deliverablesGrid2?: DeliverablesGridData;
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
  imageSrc: "/images/placeholder/placeholder82.jpg",
  tagline: "Case Study",
  title: "Mine Super",
  titleHighlight: "",
  description: "Preparing a Superannuation Platform for Sale and Future Growth",
  overlayOpacity: 0.6,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Client:", value: "Mine Super (now Team Super)" },
    { label: "Partner:", value: "Software@Scale" },
    { label: "Industry:", value: "Superannuation" },
    { label: "Services:", value: "Engineering as a Service | Cloud Engineering | Platform Due Diligence" },
  ],
  richTextContent: `As Mine Super prepared for the strategic sale of its superannuation platform, they needed to ensure their core digital assets, including the Admin and Member Portals, could operate independently, be securely transferred, and support future enterprise-scale use.

To support this, Software@Scale (S@S) was engaged to lead the technical readiness and due diligence program. Working alongside Mine Super's internal teams and prospective buyers, S@S helped safeguard operational continuity, maintain regulatory compliance, and build confidence in the platform's future viability.`,
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};



const CASE_STUDY_OUTCOME_DATA: CaseStudyOutcomeData = {
  sectionTitle: "The Outcome",
  outcomes: [
    {
      iconSrc: "/images/icons/cloud_upload.svg",
      title: "Future-Proofed Infrastructure",
      description: "The platform was restructured for standalone use, simplifying the transition for new ownership."
    },
    {
      iconSrc: "/images/icons/fast_forward.svg",
      title: "Accelerated Sale Process",
      description: "Comprehensive technical and product due diligence helped move the transaction toward completion."
    },
    {
      iconSrc: "/images/icons/foundation.svg",
      title: "Scalable Foundation",
      description: "New owners now benefit from a compliant, cloud-native solution that can grow with their needs."
    }
  ],
  imageSrc: "/images/placeholder/placeholder83.jpg",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  featureTitleColor: "text-[#00050a]",
  featureTextColor: "text-[#00050a]",
  imageOnRight: false,
};

const CASE_STUDY_SECTION_HEADER_DATA: SectionHeaderData = {
  title: "What We Delivered",
  description: "Precision-driven data assurance strategies that transform complex migration challenges into seamless operational excellence.",
  backgroundColor: "bg-[#006cc9]",
  textColor: "text-white",
};

const CASE_STUDY_DELIVERABLES_GRID_DATA: DeliverablesGridData = {
  sectionTitle: "1. Platform Sale Readiness",
  sectionDescription: "S@S helped transform the platform into a self-contained, cloud-ready asset:",
  deliverables: [
    {
      iconSrc: "/images/icons/cloud_upload.svg",
      title: "Platform migration",
      description: "Migrated platform assets from a third-party provider with full auditability using AWS CloudTrail and encryption via AWS KMS."
    },
    {
      iconSrc: "/images/icons/shield_lock.svg",
      title: "Migrated assets securely",
      description: "Demonstrated re-deployment of the portals in a new AWS environment using infrastructure-as-code (CloudFormation) to ensure easy setup and repeatability."
    },
    {
      iconSrc: "/images/icons/cloud_sync.svg",
      title: "Optimised",
      description: "Ensured compliance with financial services standards and supported scalability through AWS EC2, S3, and EFS."
    },
    {
      iconSrc: "/images/icons/readiness_score.svg",
      title: "Ready for activation",
      description: "Delivered a platform fully prepared for immediate activation, reducing onboarding friction for the future buyer."
    }
  ],
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  descriptionColor: "text-white",
  deliverableTitleColor: "text-[#5ae0f6]",
  deliverableTextColor: "text-white",
};

const CASE_STUDY_DELIVERABLES_GRID_DATA_2: DeliverablesGridData = {
  sectionTitle: "2. Technical Due Diligence",
  sectionDescription: "As the sale progressed, S@S supported buyers with robust due diligence:",
  deliverables: [
    {
      iconSrc: "/images/icons/planner_review.svg",
      title: "Platform assessment",
      description: "Reviewed the platform's architecture, code base, and integrations to assess readiness and risk."
    },
    {
      iconSrc: "/images/icons/manage_accounts.svg",
      title: "AWS audits",
      description: "Conducted security and compliance audits using AWS-native tools."
    },
    {
      iconSrc: "/images/icons/heap_snapshot_multiple.svg",
      title: "Performance testing",
      description: "Simulated high-volume scenarios to test performance and scalability."
    },
    {
      iconSrc: "/images/icons/interactive_space.svg",
      title: "Collaborated",
      description: "Worked closely with business stakeholders to validate key portal functionality and ensure alignment with buyer expectations."
    }
  ],
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  descriptionColor: "text-white",
  deliverableTitleColor: "text-[#5ae0f6]",
  deliverableTextColor: "text-white",
};



const CASE_STUDY_STATS_DATA = {
  sectionTitle: "Transforming technical challenges into strategic opportunities",
  keyTechnologies: "• AWS Cloud Infrastructure • AWS CloudFormation • AWS CloudTrail & KMS • AWS IAM & Auto Scaling • .NET & Angular • Vue.js & Node.js • JMeter",
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
  deliverablesGrid2: CASE_STUDY_DELIVERABLES_GRID_DATA_2,
  outcome: CASE_STUDY_OUTCOME_DATA,
  stats: CASE_STUDY_STATS_DATA,
  cta: CASE_STUDY_CTA_DATA,
};

export default function CoatesGroupCaseStudyPage() {
  return (
    <CaseStudyArticleLayout data={CASE_STUDY_PAGE_DATA} />
  );
}