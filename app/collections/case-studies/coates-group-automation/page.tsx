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
  imageSrc: "/images/case/case13.png",
  tagline: "Case Study",
  title: "Coates Group Automation",
  titleHighlight: "",
  description: "Australia’s leading digital bank accelerates cloud compliance, data governance, and platform performance to improve delivery velocity and regulatory confidence.",
  overlayOpacity: 0.6,
  descriptionBelow: true,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Industry:", value: "QSR" },
    { label: "Services:", value: "Engineering as a Service, Cloud & IoT Architecture, Platform Modernisation, DevOps & Delivery Enablement, Security Architecture, Technology Advisory" },
  ],
  richTextContent: `Coates Group provides digital menu boards and self-serve kiosks backed by a proprietary CMS, supporting high-profile global brands including McDonald’s and Dunkin’ Donuts. Central to this solution is Coates’ fleet of Media Players—Ubuntu-based devices deployed across hundreds of thousands of locations worldwide to power digital signage and in-store menu experiences.

As the fleet scaled, Coates faced increasing challenges around security, device management, and deployment velocity. Software@Scale was engaged to lead the design of a modern IoT management solution using AWS Greengrass and guide progression from proof of concept through pilot and global production rollout.`,
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const CASE_STUDY_DELIVERABLES_DATA: CaseStudyDeliverablesData = {
  sectionTitle: "What We Delivered",
  sectionSubtitle: "Software@Scale designed a revised IoT architecture and delivery approach to improve fleet control, security deployment, and scalability while supporting future platform uplift.",
  deliverables: [
    {
      iconSrc: "/images/icons/data_check.svg",
      title: "IoT Architecture",
      description: "Designed an AWS Greengrass-based architecture enabling each Media Player to operate as a managed edge device with improved control and observability.",
    },
    {
      iconSrc: "/images/icons/data_thresholding.svg",
      title: "Secure Deployment",
      description: "Enabled safer, more reliable deployment of security patches and updates across a globally distributed fleet.",
    },
    {
      iconSrc: "/images/icons/deployed_code_update.svg",
      title: "Delivery Governance",
      description: "Established delivery governance practices covering reporting, risk management, and decision-making at scale.",
    },
    {
      iconSrc: "/images/icons/build_circle.svg",
      title: "Rollout Guidance",
      description: "Provided guidance from proof of concept through pilot execution and preparation for global fleet-wide rollout.",
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
  description: "As device volumes and operational complexity increased, the existing fleet management approach began to limit security, scalability, and delivery agility.",
  listItems: [
    "Difficulty deploying security patches reliably across a globally distributed device fleet",
    "Limited visibility and control over hundreds of thousands of Media Players",
    "Slow and risky rollout of updates and platform changes",
    "Growing need for a cloud-native foundation to support ongoing modernisation",
  ],
  imageSrc: "/images/case/case14.jpg",
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
    sectionSubtitle: "The new IoT management approach strengthened security posture, improved fleet control, and positioned Coates for scalable modernisation.",
    outcomes: [
      {
        iconSrc: "/images/icons/shield_person.svg",
        title: "Improved Security",
        description: "Enabled faster and more reliable deployment of security updates across the global device fleet.",
      },
      {
        iconSrc: "/images/icons/subtitles_gear.svg",
        title: "Greater Control",
        description: "Improved visibility and management reliability across hundreds of thousands of Media Players.",
      },
      {
        iconSrc: "/images/icons/delivery_truck_bolt.svg",
        title: "Faster Rollouts",
        description: "Reduced friction and risk when deploying updates and enhancements at scale.",
      },
      {
        iconSrc: "/images/icons/published_with_changes.svg",
        title: "Future Ready",
        description: "Established a modern cloud-native foundation to support ongoing platform evolution.",
      },
    ],
    imageSrc: "/images/case/case15.jpg",
    backgroundColor: "bg-[#cce1f4]",
    titleColor: "text-[#0c2080]",
    featureTitleColor: "text-[#00050a]",
    featureTextColor: "text-[#00050a]",
    imageOnRight: true,
  },
  testimonial: {
    quote: "[Testimonial from Figma for UBank]",
    name: "UBank Executive",
    title: "Executive, UBank",
  },
  stats: {
    title: "Transforming technical challenges into strategic opportunities",
    technologiesContent: "• Amazon Web Services (AWS) • AWS Greengrass • Ubuntu Linux • IoT Device Management",
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