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

interface CaseStudyImageFeaturesData {
  sectionTitle: string;
  features: FeatureItem[];
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  featureTitleColor: string;
  featureTextColor: string;
  imageOnRight?: boolean;
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
  imageSrc: "/images/case/case1.png",
  tagline: "Case Study",
  title: "UBank",
  titleHighlight: "",
  description: "Australia’s leading digital bank accelerates cloud compliance, data governance, and platform performance to improve delivery velocity and regulatory confidence.",
  overlayOpacity: 0.6,
  descriptionBelow: true,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Industry:", value: "Banking / Financial Services" },
    { label: "Services:", value: "Engineering as a Service, Cloud Engineering, Data Platform Engineering, Security & Compliance, DevOps & Delivery Enablement, Technology Advisory" },
  ],
  richTextContent: `UBank has been helping everyday Australians get the most out of their banking since 2008 as Australia’s first homegrown digital bank. In 2022, UBank joined forces with 86 400 to leverage a modern smart banking platform, delivering improved technology, performance, and an award-winning product suite.

As UBank continued to scale, increasing regulatory pressure and data complexity created challenges across cloud infrastructure, data governance, and engineering delivery. Software@Scale was engaged to uplift cloud platform compliance, strengthen data foundations, and improve delivery efficiency across CTO business units.`,
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const CASE_STUDY_DELIVERABLES_DATA: CaseStudyDeliverablesData = {
  sectionTitle: "What We Delivered",
  sectionSubtitle: "Software@Scale focused on strengthening UBank’s existing AWS-based platform, introducing clearer governance, safer delivery patterns, and scalable data practices to support compliance and continued growth.",
  deliverables: [
    {
      iconSrc: "/images/icons/cloud_upload.svg",
      title: "Cloud Compliance",
      description: "Enhanced Amazon EKS clusters using service meshes and the Kubernetes Gateway API to enable fine-grained control of ingress and egress traffic in line with stricter regulatory requirements.",
    },
    {
      iconSrc: "/images/icons/code_blocks.svg",
      title: "Infrastructure as Code",
      description: "Extended IaC and GitOps practices beyond infrastructure into third-party services such as GitHub, enabling scalable, auditable change management with reduced delivery friction.",
    },
    {
      iconSrc: "/images/icons/speed.svg",
      title: "CI/CD Acceleration",
      description: "Simplified and streamlined CI/CD integrations to improve developer productivity and reduce bottlenecks across engineering squads.",
    },
    {
      iconSrc: "/images/icons/data_check.svg",
      title: "Data Enablement",
      description: "Implemented best practices across Kafka, Kafka Connect, and ksqlDB to support domain-aligned data products, real-time enrichment, and materialisation.",
    },
    {
      iconSrc: "/images/icons/data_thresholding.svg",
      title: "Data Governance",
      description: "Established enterprise data governance using standard libraries, tooling, and data contracts via Confluent Schema Registry to enforce quality and controlled schema evolution.",
    },
    {
      iconSrc: "/images/icons/money_off.svg",
      title: "Financial Crime",
      description: "Delivered resilient, real-time transfer of customer, account, and transaction data to NAB to support financial crime detection within mandated SLAs.",
    },
    {
      iconSrc: "/images/icons/identity_platform.svg",
      title: "Customer Master",
      description: "Implemented a custom Master Data Management solution to establish a single, trusted source of truth for UBank customer data.",
    },
    {
      iconSrc: "/images/icons/deployed_code_account.svg",
      title: "Platform Reliability",
      description: "Refactored transformation logic using dbt on Amazon Redshift, introduced automated validation, and enabled safe testing through production-mirror environments.",
    },
  ],
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  subtitleColor: "text-[#5ae0f6]",
  textColor: "text-white",
  iconColor: "text-[#5ae0f6]",
  rows: 2,
};

const CASE_STUDY_IMAGE_FEATURES_DATA: CaseStudyImageFeaturesData = {
  sectionTitle: "Technology Advisory & Engineering",
  features: [
    {
      iconSrc: "/images/icons/engineering.svg",
      title: "Platform Scalability",
      description: "Ensured the platform was highly scalable and resilient to support UBank's growth trajectory.",
    },
    {
      iconSrc: "/images/icons/data_check.svg",
      title: "Data Governance",
      description: "Implemented rigorous data governance standards, providing better quality and trust in financial data.",
    },
  ],
  imageSrc: "/images/case/case2.png",
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  featureTitleColor: "text-[#5ae0f6]",
  featureTextColor: "text-white",
  imageOnRight: true,
};

const CASE_STUDY_CUSTOM_SECTION_DATA: CustomSectionData = {
  sectionTitle: "Key Challenges",
  description: "As UBank grew in scale and regulatory exposure, a series of structural and operational challenges began to limit delivery speed, reporting confidence, and platform resilience.",
  listItems: [
    "Cloud compliance pressure driven by stricter security and regulatory requirements across infrastructure and traffic management",
    "Fragmented data sources across internal and third-party systems, resulting in inconsistent reporting and manual reconciliation",
    "Limited data governance maturity with inconsistent approaches to data products, schema evolution, and quality enforcement",
    "Complex real-time data processing increasing operational risk across streaming pipelines and downstream consumers",
    "Squad efficiency constraints as teams spent time resolving data issues rather than delivering new value",
    "Regulatory integration risk requiring guaranteed delivery of customer, account, and transaction data to NAB within strict SLAs",
  ],
  imageSrc: "/images/case/case2.png",
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
  imageFeatures: CASE_STUDY_IMAGE_FEATURES_DATA,
  outcome: {
    sectionTitle: "The Outcome",
    sectionSubtitle: "The platform and data uplifts delivered measurable improvements across trust, compliance, delivery speed, and operational resilience.",
    outcomes: [
      {
        iconSrc: "/images/icons/shield_lock.svg",
        title: "Restored Trust",
        description: "Resolved critical data quality defects, rebuilding confidence in executive reporting and decision-making.",
      },
      {
        iconSrc: "/images/icons/cloud_done.svg",
        title: "Stronger Compliance",
        description: "Improved cloud security controls and governance practices to meet regulatory and audit requirements.",
      },
      {
        iconSrc: "/images/icons/speed.svg",
        title: "Faster Delivery",
        description: "Accelerated development velocity through safer testing environments and streamlined CI/CD pipelines.",
      },
      {
        iconSrc: "/images/icons/security.svg",
        title: "Reduced Risk",
        description: "Lowered production and SLA risk with automated validation, resilient streaming, and controlled change management.",
      },
      {
        iconSrc: "/images/icons/search_insights.svg",
        title: "Deeper Insight",
        description: "Enabled reliable multi-year trend analysis through consistent data models and historical backfill.",
      },
    ],
    imageSrc: "/images/case/case3.png",
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
    technologiesContent: "• Amazon Web Services (AWS) • Amazon EKS • Kubernetes Gateway API • Kafka, Kafka Connect, ksqlDB • Confluent Schema Registry • Amazon Redshift • dbt • AWS Lambda • Amazon CloudWatch • Amazon SNS • Amazon MWAA • AWS Lake Formation • AWS Glue • Apache Iceberg • Terraform • GitOps",
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