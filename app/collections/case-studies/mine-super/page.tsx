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

interface CaseStudyArticleData {
  hero: HeroSectionData;
  overview?: CaseStudyOverviewData;
  sectionHeader?: SectionHeaderData;
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

const CASE_STUDY_CUSTOM_SECTION_DATA: CustomSectionData = {
  sectionTitle: "Key Challenges",
  description: "Coates Group faced significant obstacles that jeopardised their market standing. Our team tackled these issues with accuracy and strategic understanding.",
  listItems: [
    "Accelerating delivery across global teams within an ambitious timeline",
    "Resolving production incidents and performance issues across NodeJS and ReactJS stacks",
    "Addressing infrastructure scalability and security gaps ahead of market launch",
    "Uplifting internal engineering capability and governance for enterprise-grade delivery",
  ],
  imageSrc: "/images/placeholder/placeholder34.jpg",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  listTextColor: "text-[#00050a]",
  imageOnRight: false,
};

const CASE_STUDY_OUTCOME_DATA: CaseStudyOutcomeData = {
  sectionTitle: "Results & Impact",
  outcomes: [
    {
      iconSrc: "/images/icons/automation.svg",
      title: "70% Faster Environment Setup",
      description: "Automated infrastructure provisioning with AWS CloudFormation dramatically reduced deployment times and improved consistency across environments."
    },
    {
      iconSrc: "/images/icons/security.svg",
      title: "40% Reduction in Downtime",
      description: "Enhanced observability and monitoring using AWS CloudWatch, CloudTrail, and X-Ray significantly improved system reliability and incident response."
    },
    {
      iconSrc: "/images/icons/cloud_done.svg",
      title: "ISO 27001 Certification Ready",
      description: "DevSecOps implementation and security hardening prepared Coates Group for successful penetration testing and compliance certification."
    },
    {
      iconSrc: "/images/icons/explore.svg",
      title: "30% Operational Overhead Reduction",
      description: "Technology governance frameworks and proactive risk identification streamlined operations and improved delivery transparency."
    }
  ],
  imageSrc: "/images/placeholder/placeholder83.jpg",
  backgroundColor: "bg-white",
  titleColor: "text-[#0c2080]",
  featureTitleColor: "text-[#0c2080]",
  featureTextColor: "text-[#00050a]",
  imageOnRight: false,
};

const CASE_STUDY_SECTION_HEADER_DATA: SectionHeaderData = {
  title: "What We Delivered",
  description: "Precision-driven data assurance strategies that transform complex migration challenges into seamless operational excellence.",
  backgroundColor: "bg-[#006cc9]",
  textColor: "text-white",
};

const CASE_STUDY_WHAT_WE_DELIVERED_DATA: WhatWeDeliveredSectionData = {
  sectionTitle: "What We Delivered",
  sectionDescription: "Our strategy precisely and strategically reshaped the digital landscape of Coates Group.",
  deliverables: [
    {
      iconSrc: "/images/icons/group_work.svg",
      title: "Rapid Team Mobilisation",
      description: "Within just two weeks, Software@Scale deployed a 45-person blended team across onshore and offshore locations, including embedded Heads of Engineering, QA, and Delivery, to stabilise delivery and drive immediate impact."
    },
    {
      iconSrc: "/images/icons/engineering.svg",
      title: "Engineering Turnaround & Delivery Acceleration",
      description: "Critical technical blockers across the platform's backend (NodeJS) and frontend (ReactJS) were quickly resolved. Software@Scale introduced automated infrastructure provisioning with AWS CloudFormation, reducing environment setup times by 70%. Improved observability using AWS CloudWatch, CloudTrail, and X-Ray helped cut downtime by 40% and significantly strengthened system resilience."
    },
    {
      iconSrc: "/images/icons/cloud.svg",
      title: "Scalable Cloud & Security Architecture",
      description: "The team re-architected platform components to optimise scalability and performance on AWS, embedding DevSecOps principles to harden security and prepare for a successful penetration test. This work also supported Coates Group's path toward ISO 27001 certification."
    },
    {
      iconSrc: "/images/icons/settings.svg",
      title: "Governance & Capability Uplift",
      description: "Technology and delivery governance frameworks were introduced to improve transparency and consistency. A full-stack technical audit identified key engineering and performance risks, enabling proactive fixes and cutting operational overhead by 30%."
    }
  ],
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  descriptionColor: "text-white",
  deliverableTitleColor: "text-[#5ae0f6]",
  deliverableTextColor: "text-white",
};

const CASE_STUDY_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Get in Touch with Us",
  description: "Reach out today to discover how we can help accelerate your digital transformation journey.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const CASE_STUDY_PAGE_DATA: CaseStudyArticleData = {
  hero: CASE_STUDY_HERO_DATA,
  overview: CASE_STUDY_OVERVIEW_DATA,
  sectionHeader: CASE_STUDY_SECTION_HEADER_DATA,
  customSection: CASE_STUDY_CUSTOM_SECTION_DATA,
  whatWeDeliveredSection: CASE_STUDY_WHAT_WE_DELIVERED_DATA,
  outcome: CASE_STUDY_OUTCOME_DATA,
  cta: CASE_STUDY_CTA_DATA,
};

export default function CoatesGroupCaseStudyPage() {
  return (
    <CaseStudyArticleLayout data={CASE_STUDY_PAGE_DATA} />
  );
}