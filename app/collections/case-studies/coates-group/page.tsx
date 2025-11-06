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

interface CaseStudyArticleData {
  hero: HeroSectionData;
  overview?: CaseStudyOverviewData;
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
  imageSrc: "/images/placeholder/placeholder84.png",
  tagline: "Case Study",
  title: "Coates Group",
  titleHighlight: "",
  description: "Engineering Acceleration for Global Market Leadership",
  overlayOpacity: 0.6,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Client:", value: "Coates Group" },
    { label: "Partner:", value: "Software@Scale" },
    { label: "Industry:", value: "Retail/Media" },
    { label: "Services:", value: "Engineering Performance" },
  ],
  richTextContent: `Coates Group, a global leader in digital signage and retail technology, sought to accelerate their engineering delivery across global teams to maintain market leadership. They faced challenges in scaling their infrastructure and resolving performance issues across their NodeJS and ReactJS stacks.

Software@Scale was engaged to provide engineering acceleration services, focusing on uplifting internal capability, resolving critical production issues, and addressing infrastructure scalability and security gaps ahead of a major market launch.`,
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
  imageSrc: "/images/placeholder/placeholder85.png",
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
      iconSrc: "/images/icons/fastfood.svg",
      title: "Secured Global Mandate",
      description: "Coates successfully launched its US pilot, unlocking North American market share and winning McDonalds' global supplier status."
    },
    {
      iconSrc: "/images/icons/delivery_truck_speed.svg",
      title: "Delivery at Pace",
      description: "Strong teams, tighter governance and proactive issue management enabled a rapid rollout under tight deadlines"
    },
    {
      iconSrc: "/images/icons/desktop_cloud_stack.svg",
      title: "Enterprise-Grade Architecture",
      description: "Delivered secure, scalable infrastructure powering operations across 30+ countries and 14,000 devices."
    },
    {
      iconSrc: "/images/icons/assured_workload.svg",
      title: "Lasting Capability Uplift",
      description: "Internal teams improved processes, accelerated delivery and created stronger engineering practices, in order to set Coates up for sustainable growth."
    }
  ],
  imageSrc: "/images/placeholder/placeholder96.png",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  featureTitleColor: "text-[#00050a]",
  featureTextColor: "text-[#00050a]",
  imageOnRight: false,
};

const CASE_STUDY_WHAT_WE_DELIVERED_DATA: WhatWeDeliveredSectionData = {
  sectionTitle: "What We Delivered",
  sectionDescription: "Our strategy precisely and strategically reshaped the digital landscape of Coates Group.",
  deliverables: [
    {
      iconSrc: "/images/icons/groups.svg",
      title: "Rapid Team Mobilisation",
      description: "Within just two weeks, Software@Scale deployed a 45-person blended team across onshore and offshore locations, including embedded Heads of Engineering, QA, and Delivery, to stabilise delivery and drive immediate impact."
    },
    {
      iconSrc: "/images/icons/handyman.svg",
      title: "Engineering Turnaround & Delivery Acceleration",
      description: "Critical technical blockers across the platform's backend (NodeJS) and frontend (ReactJS) were quickly resolved. Software@Scale introduced automated infrastructure provisioning with AWS CloudFormation, reducing environment setup times by 70%. Improved observability using AWS CloudWatch, CloudTrail, and X-Ray helped cut downtime by 40% and significantly strengthened system resilience."
    },
    {
      iconSrc: "/images/icons/grading.svg",
      title: "Scalable Cloud & Security Architecture",
      description: "The team re-architected platform components to optimise scalability and performance on AWS, embedding DevSecOps principles to harden security and prepare for a successful penetration test. This work also supported Coates Group's path toward ISO 27001 certification."
    },
    {
      iconSrc: "/images/icons/enable.svg",
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

const CASE_STUDY_STATS_DATA = {
  sectionTitle: "Transforming technical challenges into strategic opportunities",
  keyTechnologies: "• Node.js • React.js • AWS CloudFormation • AWS CloudWatch • AWS CloudTrail • AWS X-Ray • DevSecOps practices • ISO 27001-aligned security architecture",
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
  title: "Get in Touch with Us",
  description: "Reach out today to discover how we can help accelerate your digital transformation journey.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const CASE_STUDY_PAGE_DATA: CaseStudyArticleData = {
  hero: CASE_STUDY_HERO_DATA,
  overview: CASE_STUDY_OVERVIEW_DATA,
  customSection: CASE_STUDY_CUSTOM_SECTION_DATA,
  whatWeDeliveredSection: CASE_STUDY_WHAT_WE_DELIVERED_DATA,
  outcome: CASE_STUDY_OUTCOME_DATA,
  stats: CASE_STUDY_STATS_DATA,
  cta: CASE_STUDY_CTA_DATA,
};

export default function CoatesGroupCaseStudyPage() {
  return (
    <CaseStudyArticleLayout data={CASE_STUDY_PAGE_DATA} />
  );
}