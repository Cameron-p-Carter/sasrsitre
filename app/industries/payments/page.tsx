import IndustryPageLayout from '@/app/components/templates/IndustryPageLayout';

const BANKING_PORTFOLIO_DATA = {
  viewAllButtonText: "View all",
};

const INDUSTRY_CTA_DATA = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Transform Your Payments Business Today",
  description: "Discover tailored solutions that drive success in your Payments operations with our expert guidance.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

// --- Industry Page Specific Data ---

const BANKING_INDUSTRY_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder63.jpg", // Placeholder for Banking
    tagline: "Payments",
    title: "Payments Industry",
    titleHighlight: "Experts",
    description: "At Software at Scale, we specialise in transforming the payments landscape through innovative technology solutions. Our deep industry knowledge and technical expertise empower businesses to navigate complexities and achieve operational excellence.",
    overlayOpacity: 0.6,
    objectPosition: "center 40%",
  },
  portfolio: BANKING_PORTFOLIO_DATA,
  cta: INDUSTRY_CTA_DATA,
  challengesImage: "/images/placeholder/pay2.jpg",
  challenges: [
    "Real-time payments",
    "Fraud",
    "Reliability",
    "Compliance",
    "Scale",
  ],
};

export default function BankingIndustryPage() {
  return (
    <IndustryPageLayout data={BANKING_INDUSTRY_DATA} />
  );
}