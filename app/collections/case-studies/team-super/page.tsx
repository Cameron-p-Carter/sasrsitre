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

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

// --- Placeholder Data ---

const CASE_STUDY_HERO_DATA: HeroSectionData = {
  imageSrc: "/images/placeholder/80.jpg",
  tagline: "Case Study",
  title: "Team Super: Seamless Data",
  titleHighlight: "Migration",
  description: "Following a major merger, Software@Scale ensured the secure and seamless migration of member data, laying the technical foundation for a smooth transition and future growth.",
  overlayOpacity: 0.5,
};

const CASE_STUDY_OVERVIEW_DATA: CaseStudyOverviewData = {
  overviewTitle: "Overview",
  details: [
    { label: "Client:", value: "Team Super" },
    { label: "Partner:", value: "Software@Scale" },
    { label: "Industry:", value: "Superannuation" },
    { label: "Services:", value: "Data / AI Services" },
  ],
  richTextContent: `Following the merger of Mine Super and TWUSUPER to create Team Super, the newly formed fund faced a critical challenge: to unify member data, systems, and operations into a single, seamless ecosystem, without disrupting services.

Software@Scale (S@S) was appointed to lead assurance and onboarding activities, overseeing the secure migration and seamless integration of TWUSUPER member data into the Mine Super platform. By de-risking this critical phase, S@S helped lay the technical foundations for a smooth transition, safeguarding member trust and ensuring the new Team Super ecosystem was ready for future growth.`,
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const CASE_STUDY_DELIVERABLES_DATA: CaseStudyDeliverablesData = {
  sectionTitle: "What We Delivered",
  sectionSubtitle: "Data Migration & Assurance",
  deliverables: [
    {
      iconSrc: "/images/icons/data_check.svg",
      title: "Data Validation",
      description: "Conducted rigorous checks to verify the completeness and accuracy of member data before, during, and after migration.",
    },
    {
      iconSrc: "/images/icons/deployed_code_account.svg",
      title: "Onboarding Execution",
      description: "Delivered a seamless onboarding of TWUSUPER members, aligning data integrity, compliance needs, and operational workflows within Mine Super's platform.",
    },
    {
      iconSrc: "/images/icons/enhanced_encryption.svg",
      title: "Risk Mitigation",
      description: "Delivered a detailed assurance process that reduced data integrity risks and gave stakeholders confidence in the transition.",
    },
    {
      iconSrc: "/images/icons/interactive_space.svg",
      title: "Collaboration",
      description: "Collaborated with technical teams and business leaders to ensure the platform could scale while maintaining service quality.",
    },
  ],
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  subtitleColor: "text-[#5ae0f6]",
  textColor: "text-white",
  iconColor: "text-[#5ae0f6]",
};

const CASE_STUDY_IMAGE_FEATURES_DATA: CaseStudyImageFeaturesData = {
  sectionTitle: "Data & AI Services",
  features: [
    {
      iconSrc: "/images/icons/automation.svg", // Placeholder for automation
      title: "Optimized onboarding",
      description: "Applied best practices across data handling and automation to streamline onboarding, while strengthening reporting capabilities.",
    },
    {
      iconSrc: "/images/icons/security.svg", // Placeholder for security
      title: "Maintained data integrity",
      description: "Safeguarded data integrity to ensure consistent performance across key operational areas, including reporting, service, and compliance.",
    },
  ],
  imageSrc: "/images/placeholder/placeholder100.png", // Placeholder image
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  featureTitleColor: "text-[#5ae0f6]",
  featureTextColor: "text-white",
  imageOnRight: true,
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
  deliverables: CASE_STUDY_DELIVERABLES_DATA,
  imageFeatures: CASE_STUDY_IMAGE_FEATURES_DATA,
  outcome: {
    sectionTitle: "The Outcome",
    outcomes: [
      {
        iconSrc: "/images/icons/transform.svg",
        title: "Smooth Transition",
        description: "Member data was migrated accurately and securely, supporting a frictionless experience for Team Super's members.",
      },
      {
        iconSrc: "/images/icons/book.svg",
        title: "Regulatory Confidence",
        description: "Assurance activities met industry compliance expectations, reducing operational risk.",
      },
      {
        iconSrc: "/images/icons/brick.svg",
        title: "Stronger Foundations",
        description: "The new platform is now positioned to drive future growth, foster innovation and unlock better insights through data.",
      },
    ],
    imageSrc: "/images/placeholder/placeholder81.jpg", // Placeholder image
    backgroundColor: "bg-[#cce1f4]",
    titleColor: "text-[#0c2080]",
    featureTitleColor: "text-[#00050a]",
    featureTextColor: "text-[#00050a]",
    imageOnRight: false,
  },
  stats: {
    sectionTitle: "Transforming technical challenges into strategic opportunities",
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

export default function TeamSuperCaseStudyPage() {
  return (
    <CaseStudyArticleLayout data={CASE_STUDY_PAGE_DATA} />
  );
}