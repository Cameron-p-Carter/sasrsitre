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
  imageSrc: "/images/case/case4.jpg",
  tagline: "Case Study",
  title: "Qanooni AI",
  titleHighlight: "",
  description: "Building enterprise-grade legal AI for the GCC region with precision, privacy, and speed.",
  overlayOpacity: 0.6,
  descriptionBelow: true,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Industry:", value: "Legal Technology / Artificial Intelligence" },
    { label: "Services:", value: "Engineering as a Service, Cloud Engineering, Data & AI Engineering, Security Architecture, Platform Architecture, Technology Advisory" },
  ],
  richTextContent: `Qanooni AI is revolutionising legal practice in the Middle East by enabling law firms to analyse documents, summarise complex matters, answer nuanced legal queries, and automate time-consuming legal workflows using enterprise-grade artificial intelligence.

Operating in one of the world’s most regulated sectors, Qanooni faced the dual challenge of innovating quickly while maintaining absolute precision, privacy, and compliance. Software@Scale was engaged to stabilise the platform’s foundations, improve retrieval accuracy, and prepare the architecture for enterprise and government adoption across the UAE and broader GCC region.`,
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const CASE_STUDY_DELIVERABLES_DATA: CaseStudyDeliverablesData = {
  sectionTitle: "What We Delivered",
  sectionSubtitle: "Software@Scale strengthened Qanooni’s existing AWS-based architecture, improving reliability, governance, and workflow integration without rebuilding the platform from scratch.",
  deliverables: [
    {
      iconSrc: "/images/icons/database_upload.svg",
      title: "Retrieval Precision",
      description: "Rebuilt ranking, embedding, and clause-matching logic using PostgreSQL, pgVector, and deterministic Base24 identifiers to ensure traceable and consistent legal knowledge retrieval.",
    },
    {
      iconSrc: "/images/icons/autorenew.svg",
      title: "Automated Ingestion",
      description: "Implemented automated multi-corpus ingestion pipelines using AWS Lambda, S3, and containerised parsing services to continuously process regional legal sources.",
    },
    {
      iconSrc: "/images/icons/security_update_good.svg",
      title: "Secure Integrations",
      description: "Built secure connectors into law firm systems so emails, filings, and documents were ingested, indexed, and available immediately without manual upload.",
    },
    {
      iconSrc: "/images/icons/add_link.svg",
      title: "Context Stitching",
      description: "Developed containerised stitching algorithms on AWS EKS/ECS to link related documents and matters into unified context graphs for improved RAG accuracy.",
    },
    {
      iconSrc: "/images/icons/network_intel_node.svg",
      title: "Native Workflows",
      description: "Integrated AI services directly into Microsoft Word and Outlook, enabling summarisation, drafting, and precedent retrieval within daily tools.",
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
  description: "As Qanooni moved from early experimentation toward enterprise adoption, the platform required stronger foundations across retrieval accuracy, regional complexity, and strict governance requirements.",
  listItems: [
    "Disconnected legal knowledge across statutes, templates, precedents, and client documents",
    "Inconsistent legal outputs from ungoverned retrieval and limited evaluation",
    "Manual drafting and summarisation workflows consuming billable hours",
    "Lack of support for GCC legal frameworks and Arabic–English bilingual requirements",
    "Strict data sovereignty, auditability, and multi-tenant isolation requirements in the UAE",
  ],
  imageSrc: "/images/case/case5.png",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  listTextColor: "text-[#00050a]",
  imageOnRight: false,
};
 
const CASE_STUDY_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Ready to accelerate your platform?",
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
    sectionSubtitle: "The platform uplift improved accuracy, reduced operational overhead, and enabled enterprise-ready delivery velocity in a high-compliance legal environment.",
    outcomes: [
      {
        iconSrc: "/images/icons/target.svg",
        title: "Legal Accuracy",
        description: "Delivered consistently reliable outputs by fixing retrieval, ranking, and governance foundations.",
      },
      {
        iconSrc: "/images/icons/finance.svg",
        title: "Reduced Overhead",
        description: "Reduced manual data management effort by approximately 70 percent through automated ingestion and validation.",
      },
      {
        iconSrc: "/images/icons/dataset_linked.svg",
        title: "Real-Time Context",
        description: "Enabled immediate access to complete case context through integrated document and email ingestion.",
      },
      {
        iconSrc: "/images/icons/delivery_truck_speed.svg",
        title: "Faster Delivery",
        description: "Improved feature delivery speed through a stable, scalable ingestion and retrieval architecture.",
      },
      {
        iconSrc: "/images/icons/network_intelligence.svg",
        title: "Richer Intelligence",
        description: "Enabled deeper legal insight by stitching multi-year matter history into unified narratives.",
      },
    ],
    imageSrc: "/images/case/case6.jpg",
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
    technologiesContent: "• Amazon Web Services (AWS) • Amazon EKS & ECS • PostgreSQL • pgVector • AWS Lambda • Amazon S3 • AWS API Gateway • Microsoft Word & Outlook Add-ins • Deterministic Base24 Encoding • Retrieval-Augmented Generation (RAG)",
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