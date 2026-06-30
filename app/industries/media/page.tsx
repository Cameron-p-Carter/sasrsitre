import IndustryPageLayout from '@/app/components/templates/IndustryPageLayout';

const BANKING_PORTFOLIO_DATA = {
  viewAllButtonText: "View all",
};

const INDUSTRY_CTA_DATA = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Transform Your Media Experience",
  description: "Discover customised solutions that elevate your media business to new heights. Let's connect today!",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

// --- Industry Page Specific Data ---

const BANKING_INDUSTRY_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder67.jpg", // Placeholder for Banking
    tagline: "Empower",
    title: "Media Solutions",
    titleHighlight: "Redefined",
    description: "At Software at Scale, we specialise in transforming media enterprises through cutting-edge digital solutions. Our commitment to engineering excellence ensures you stay ahead in a rapidly evolving landscape.",
    overlayOpacity: 0.6,
    objectPosition: "center 25%",
  },
  portfolio: BANKING_PORTFOLIO_DATA,
  cta: INDUSTRY_CTA_DATA,
  challengesImage: "/images/placeholder/media2.jpg",
};

export default function BankingIndustryPage() {
  return (
    <IndustryPageLayout data={BANKING_INDUSTRY_DATA} />
  );
}