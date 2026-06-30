import IndustryPageLayout from '@/app/components/templates/IndustryPageLayout';

const BANKING_PORTFOLIO_DATA = {
  viewAllButtonText: "View all",
};

const INDUSTRY_CTA_DATA = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Elevate Your Retail Strategy",
  description: "Connect with us to explore customised solutions that drive retail innovation and operational excellence.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

// --- Industry Page Specific Data ---

const BANKING_INDUSTRY_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder66.jpg", // Placeholder for Banking
    tagline: "Retail",
    title: "Empowering Retail",
    titleHighlight: "Excellence",
    description: "At Software at Scale, we are dedicated to transforming the retail landscape through innovative technology solutions. Our expertise helps organisations navigate the complexities of compliance and operational efficiency.",
    overlayOpacity: 0.6,
  },
  portfolio: BANKING_PORTFOLIO_DATA,
  cta: INDUSTRY_CTA_DATA,
  challengesImage: "/images/placeholder/retail2.jpg",
};

export default function BankingIndustryPage() {
  return (
    <IndustryPageLayout data={BANKING_INDUSTRY_DATA} />
  );
}