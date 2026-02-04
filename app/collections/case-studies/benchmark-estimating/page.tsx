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
  imageSrc: "/images/case/case22.png",
  tagline: "Case Study",
  title: "Benchmark Estimating",
  titleHighlight: "",
  description: "Benchmark Estimating accelerates delivery predictability and engineering quality through an AWS-aligned delivery uplift.",
  overlayOpacity: 0.6,
  descriptionBelow: true,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Industry:", value: "Infrastructure Technology / Estimating Software" },
    { label: "Services:", value: "Engineering as a Service, Delivery Enablement, Cloud Engineering (AWS), Engineering Standards & Quality, Technology Advisory" },
  ],
  richTextContent: `Built by engineers for engineers, Benchmark Estimating has served the infrastructure sector for more than 30 years with powerful cost and carbon estimating solutions. Its enterprise-grade platform supports authorities, asset owners, and contractors across Transport, Water, and Energy, enabling confident decision-making across the full asset lifecycle.

As delivery demand increased, Benchmark Estimating engaged Software@Scale to improve delivery speed, quality, and predictability across engineering squads while maintaining momentum across a mature, feature-rich product.`,
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const CASE_STUDY_DELIVERABLES_DATA: CaseStudyDeliverablesData = {
  sectionTitle: "What We Delivered",
  sectionSubtitle: "Software@Scale partnered with Benchmark Estimating to define a pragmatic uplift plan across people, process, and engineering standards, aligned to modern AWS-enabled delivery practices.",
  deliverables: [
    {
      iconSrc: "/images/icons/cloud_done.svg",
      title: "Story Quality",
      description: "Improved story definition through clearer templates, acceptance criteria standards, and increased analysis capacity.",
    },
    {
      iconSrc: "/images/icons/group_search.svg",
      title: "Estimation Practices",
      description: "Introduced team-based estimation, calibration techniques, and reference stories to improve predictability.",
    },
    {
      iconSrc: "/images/icons/manage_accounts.svg",
      title: "Engineering Quality",
      description: "Established enforceable quality standards including test coverage thresholds, CI/CD gates, and smaller PR practices.",
    },
    {
      iconSrc: "/images/icons/manage_history.svg",
      title: "Performance Uplift",
      description: "Created a structured approach to performance improvement and technical debt prioritisation.",
    },
    {
      iconSrc: "/images/icons/settings_account_box.svg",
      title: "Client Alignment",
      description: "Improved roadmap clarity and shared definitions to align expectations around defects versus enhancements.",
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
  description: "As delivery pressure increased, several structural and operational challenges began to limit speed-to-market, quality, and predictability.",
  listItems: [
    "User stories lacking complete acceptance criteria, creating ambiguity and rework",
    "Estimation variability driven by individual approaches rather than shared practices",
    "Engineering quality gaps including low test coverage and inconsistent review discipline",
    "Legacy code patterns impacting performance and long-term maintainability",
    "Client-side ambiguity between defects and new requirements causing prioritisation friction",
  ],
  imageSrc: "/images/case/case23.jpg",
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
    sectionSubtitle: "The uplift program strengthened delivery confidence, reduced risk, and improved long-term platform sustainability.",
    outcomes: [
      {
        iconSrc: "/images/icons/delivery_truck_speed.svg",
        title: "Predictable Delivery",
        description: "Improved sprint planning accuracy and delivery confidence through shared estimation practices.",
      },
      {
        iconSrc: "/images/icons/monitoring.svg",
        title: "Higher Quality",
        description: "Reduced production risk through stronger test coverage, CI/CD enforcement, and disciplined reviews.",
      },
      {
        iconSrc: "/images/icons/speed.svg",
        title: "Faster Execution",
        description: "Reduced rework and delays through clearer stories and earlier alignment.",
      },
      {
        iconSrc: "/images/icons/published_with_changes.svg",
        title: "Improved Performance",
        description: "Lowered legacy drag through visible, prioritised performance and technical debt initiatives.",
      },
      {
        iconSrc: "/images/icons/shield_person.svg",
        title: "Stronger Trust",
        description: "Improved client confidence through clearer roadmaps and transparent delivery communication.",
      },
    ],
    imageSrc: "/images/case/case24.jpg",
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
    technologiesContent: "• Amazon Web Services (AWS) • CI/CD Pipelines • Unit Testing & Coverage Enforcement • Agile Delivery Enablement • Engineering Standards & Governance",
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