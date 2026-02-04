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
  imageSrc: "/images/case/case19.png",
  tagline: "Case Study",
  title: "CBA Data Platform",
  titleHighlight: "",
  description: "Australia’s leading bank accelerates data platform performance to restore trust, speed delivery, and improve executive decision-making.",
  overlayOpacity: 0.6,
  descriptionBelow: true,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Industry:", value: "Banking / Financial Services" },
    { label: "Services:", value: "Engineering as a Service, Data Platform Engineering, Cloud Engineering, Data Governance & Quality, Delivery Enablement, Technology Advisory" },
  ],
  richTextContent: `Commonwealth Bank of Australia (CBA) serves more than 17 million customers across retail and commercial banking. Guided by its strategy of building tomorrow’s bank today, CBA relies heavily on trusted, timely data to support decision-making across CTO business units.

CBA engaged Software@Scale to uplift the performance, reliability, and governance of its data platforms. Fragmented data sources, weak ETL foundations, and inconsistent outputs were slowing delivery and undermining confidence in executive reporting.`,
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const CASE_STUDY_DELIVERABLES_DATA: CaseStudyDeliverablesData = {
  sectionTitle: "What We Delivered",
  sectionSubtitle: "Software@Scale strengthened CBA’s existing AWS-based data platform, focusing on fixing logic, automating validation, and enabling safer, faster development without replacing core tooling.",
  deliverables: [
    {
      iconSrc: "/images/icons/transform_light.svg",
      title: "Transformation Logic",
      description: "Refactored dbt transformation logic on Amazon Redshift to correct calculation errors and standardise data outputs.",
    },
    {
      iconSrc: "/images/icons/published_with_changes_light.svg",
      title: "Automated Validation",
      description: "Implemented AWS Lambda validation with CloudWatch and SNS alerting to detect anomalies immediately after pipeline runs.",
    },
    {
      iconSrc: "/images/icons/cloud_lock.svg",
      title: "Safe Development",
      description: "Built production-mirror testing environments using Terraform and Amazon MWAA, secured with AWS Lake Formation.",
    },
    {
      iconSrc: "/images/icons/storage.svg",
      title: "Storage Standards",
      description: "Used AWS Glue to backfill missing historical data and adopted Apache Iceberg for efficient, reliable updates.",
    },
  ],
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  subtitleColor: "text-[#5ae0f6]",
  textColor: "text-white",
  iconColor: "text-[#5ae0f6]",
  rows: 1,
};



const CASE_STUDY_CUSTOM_SECTION_DATA: CustomSectionData = {
  sectionTitle: "Key Challenges",
  description: "As data volumes and complexity increased, structural weaknesses in CBA’s data platform began to limit speed, trust, and squad efficiency.",
  listItems: [
    "Multiple disconnected data sources creating conflicting reporting outputs",
    "Lack of robust ETL foundations leading to unreliable downstream data",
    "Low confidence in executive reporting due to data inconsistencies",
    "Manual reconciliation work reducing engineering squad efficiency",
    "Slow data delivery limiting the organisation’s ability to respond quickly",
  ],
  imageSrc: "/images/case/case20.jpg",
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
    sectionSubtitle: "The data platform uplift restored confidence in reporting, reduced operational risk, and improved delivery velocity across data squads.",
    outcomes: [
      {
        iconSrc: "/images/icons/document_search.svg",
        title: "Reporting Trust",
        description: "Resolved critical data quality defects, restoring confidence in executive reporting.",
      },
      {
        iconSrc: "/images/icons/monitoring_dark.svg",
        title: "Reduced Risk",
        description: "Lowered production risk through automated validation across more than 40 pipelines.",
      },
      {
        iconSrc: "/images/icons/delivery_truck_bolt.svg",
        title: "Faster Delivery",
        description: "Improved development velocity with robust, isolated test environments.",
      },
      {
        iconSrc: "/images/icons/search_check_dark.svg",
        title: "Better Insight",
        description: "Enabled multi-year trend analysis through reliable historical data backfill.",
      },
    ],
    imageSrc: "/images/case/case21.jpg",
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
    technologiesContent: "• Amazon Web Services (AWS) • Amazon Redshift • dbt • AWS Lambda • Amazon CloudWatch • Amazon SNS • Amazon MWAA • AWS Lake Formation • AWS Glue • Apache Iceberg • Terraform",
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