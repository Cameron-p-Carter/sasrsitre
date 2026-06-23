import ServicePageLayout from '@/app/components/templates/ServicePageLayout';

const SERVICE_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder56.jpg",
    tagline: "Technology Leadership",
    title: "Technology Leadership For",
    titleHighlight: "Critical Decisions",
    description: "Not every technology challenge requires more engineers.\n\nSometimes organisations need experienced leaders who have solved similar problems before. Software@Scale provides access to technology executives, architects and engineering leaders who help organisations navigate complex decisions, reduce risk and move forward with confidence.",
    overlayOpacity: 0.6,
    objectPosition: "center",
  },
  imageTextContent: {
    title: "When Organisations Need Technology Leadership",
    description: "The most expensive technology decisions are often made before delivery begins.\n\nWhether you're planning a transformation, assessing a platform, evaluating an acquisition or navigating a complex technology challenge, experienced leadership can significantly reduce risk and improve outcomes.",
    imageSrc: "/images/placeholder/placeholder57.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: true,
  },
  imageTextListContent: {
    title: "How We Help",
    introDescription: "Software@Scale combines executive leadership experience with practical engineering expertise to help organisations make better technology decisions.",
    listTitle: "Our technology leadership services:",
    listItems: [
      "Fractional Technology Leadership — fractional CTO, CIO and technology leadership support without permanent executive overhead",
      "Architecture & Platform Reviews — independent assessment of platform health, scalability, security and technical risk",
      "Technology Due Diligence — technical assessments for investment, acquisition and strategic decisions",
      "Technology Strategy — practical technology roadmaps aligned to business objectives and delivery realities",
    ],
    imageSrc: "/images/placeholder/placeholder58.jpg",
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#0c2080]",
    imageOnRight: false,
  },
  serviceFeatureColumns: {
    backgroundColor: "bg-[#cce1f4]",
    textColor: "text-[#00050a]",
    titleColor: "text-[#00050a]",
    columns: [
      {
        iconSrc: "/images/icons/diversity_1.svg",
        title: "Leaders Who Have Done It Before",
        content: "Our leadership team has built, operated and transformed technology platforms across banking, payments, insurance, superannuation and digital businesses.",
      },
      {
        iconSrc: "/images/icons/engineering.svg",
        title: "Executive Experience With Engineering Depth",
        content: "We combine strategic thinking with practical engineering expertise — leaders who understand both the boardroom and the codebase.",
      },
      {
        iconSrc: "/images/icons/search_insights.svg",
        title: "Independent Advice",
        content: "Recommendations are based on what is right for the organisation, not on selling larger programs of work.",
      },
      {
        iconSrc: "/images/icons/monitoring.svg",
        title: "Focused On Outcomes",
        content: "Every engagement is designed to improve decision quality, reduce risk and increase delivery confidence.",
      },
    ],
  },
  showTestimonial: true,
  ctaSection: {
    imageSrc: "/images/placeholder/placeholder16.jpg",
    title: "Need Experienced Technology Leadership?",
    description: "Whether you're planning a transformation, evaluating a platform or making a critical technology decision, Software@Scale can help.",
    primaryButtonText: "Talk To A Technology Leader",
    secondaryButtonText: "View Proven Delivery",
  },
};

export default function TechnologyLeadershipPage() {
  return <ServicePageLayout data={SERVICE_DATA} />;
}
