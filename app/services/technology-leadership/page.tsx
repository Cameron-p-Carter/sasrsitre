import ServicePageLayout2 from '@/app/components/templates/ServicePageLayout2';

const SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/tl1.jpg",
    tagline: "Lead",
    title: "Technology Leadership For",
    titleHighlight: "Critical Decisions",
    description: "Not every technology challenge requires more engineers.\n\nSometimes organisations need experienced leaders who have solved similar problems before.\n\nSoftware@Scale provides access to technology executives, architects and engineering leaders who help organisations navigate complex decisions, reduce risk and move forward with confidence.",
    overlayOpacity: 0.5,
    objectPosition: "center 25%",
    buttons: [
      { text: "Talk To A Technology Leader", href: "/contact-us", variant: "primary" as const },
      { text: "View Proven Delivery", href: "/collections/case-studies", variant: "outline" as const },
    ],
  },
  imageTextContent: {
    title: "When Organisations Need Technology Leadership",
    description: `The most expensive technology decisions are often made before delivery begins.

Whether you're planning a transformation, assessing a platform, evaluating an acquisition or navigating a complex technology challenge, experienced leadership can significantly reduce risk and improve outcomes.`,
    imageSrc: "/images/placeholder/tl2.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
    outcomeItems: [
      {
        iconSrc: "/images/icons/flowchart.svg",
        title: "Major Technology Decisions",
        description: "The organisation is making decisions that will have long-term implications for delivery, cost, risk or scalability.",
      },
      {
        iconSrc: "/images/icons/foundation.svg",
        title: "Architecture Uncertainty",
        description: "Leaders need confidence that platforms are scalable, maintainable and aligned to business goals.",
      },
      {
        iconSrc: "/images/icons/person_check.svg",
        title: "Executive Capability Gaps",
        description: "Internal teams need additional leadership capacity or independent guidance.",
      },
      {
        iconSrc: "/images/icons/handshake.svg",
        title: "Transactions, Funding Or Mergers",
        description: "Technology platforms need to be assessed before investment, acquisition or strategic decisions are made.",
      },
    ],
  },
  imageTextContent2: {
    title: "Why Technology Leaders Trust Software@Scale",
    description: `Our leadership team combines executive experience with hands-on engineering depth — giving organisations independent, practical guidance they can trust.`,
    imageSrc: "/images/placeholder/tl3.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: false,
    outcomeItems: [
      {
        iconSrc: "/images/icons/person_pin_circle.svg",
        title: "Leaders Who Have Done It Before",
        description: "Our leadership team has built, operated and transformed technology platforms across banking, payments, insurance, superannuation and digital businesses.",
      },
      {
        iconSrc: "/images/icons/engineering_dark.svg",
        title: "Executive Experience With Engineering Depth",
        description: "We combine strategic thinking with practical engineering expertise.",
      },
      {
        iconSrc: "/images/icons/chat_info.svg",
        title: "Independent Advice",
        description: "Recommendations are based on what is right for the organisation, not on selling larger programs of work.",
      },
      {
        iconSrc: "/images/icons/flag_check.svg",
        title: "Focused On Outcomes",
        description: "Every engagement is designed to improve decision quality, reduce risk and increase delivery confidence.",
      },
    ],
  },
  centeredHeader: {
    title: "How We Help",
    description: "Software@Scale combines executive leadership experience with practical engineering expertise to help organisations make better technology decisions.",
  },
  serviceFeatures1: [
    {
      title: "Fractional Technology Leadership",
      description: "Access experienced technology leaders without the overhead of permanent executive hires.\n\nFractional CTO, Fractional CIO, Technology Leadership Support",
    },
    {
      title: "Architecture & Platform Reviews",
      description: "Independent assessment of platform health, scalability, security and technical risk.\n\nArchitecture Reviews, Platform Assessments, Modernisation Planning",
    },
    {
      title: "Technology Due Diligence",
      description: "Technical assessments that help organisations make informed investment, acquisition and strategic decisions.\n\nPlatform Due Diligence, Technology Risk Reviews, M&A Support",
    },
    {
      title: "Technology Strategy",
      description: "Practical technology roadmaps aligned to business objectives and delivery realities.\n\nTechnology Strategy, Transformation Planning, Operating Model Reviews",
    },
  ],
  serviceFeatures: [
    {
      title: "Fractional Technology Leadership",
      description: "Access experienced technology leaders without the overhead of permanent executive hires.\n\nFractional CTO, Fractional CIO, Technology Leadership Support",
    },
    {
      title: "Architecture & Platform Reviews",
      description: "Independent assessment of platform health, scalability, security and technical risk.\n\nArchitecture Reviews, Platform Assessments, Modernisation Planning",
    },
    {
      title: "Technology Due Diligence",
      description: "Technical assessments that help organisations make informed investment, acquisition and strategic decisions.\n\nPlatform Due Diligence, Technology Risk Reviews, M&A Support",
    },
    {
      title: "Technology Strategy",
      description: "Practical technology roadmaps aligned to business objectives and delivery realities.\n\nTechnology Strategy, Transformation Planning, Operating Model Reviews",
    },
  ],
  centeredHeader2: {
    title: "Why Technology Leadership Matters",
  },
  showServiceFeatures: true,
  repeatCenteredSection: false,
  showPortfolio: true,
  showAwards: false,
  showBlog: false,
  showTestimonial: false,
  ctaSection: {
    imageSrc: "/images/placeholder/placeholder16.jpg",
    title: "Strengthen your technology leadership today",
    description: "Contact us today to explore how our Technology Leadership service can transform your business.",
    primaryButtonText: "Talk To A Technology Leader",
    secondaryButtonText: "View Proven Delivery",
  },
};

export default function TechnologyLeadershipPage() {
  return <ServicePageLayout2 data={SERVICE_DATA} />;
}
