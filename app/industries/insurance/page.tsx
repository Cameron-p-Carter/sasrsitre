import IndustryPageLayout from '@/app/components/templates/IndustryPageLayout';

const BANKING_PORTFOLIO_DATA = {
  viewAllButtonText: "View all",
};

const INDUSTRY_CTA_DATA = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Transform Your Insurance Experience",
  description: "Contact us today to explore how we can elevate your insurance operations with our expertise.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

// --- Industry Page Specific Data ---

const BANKING_INDUSTRY_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder65.jpg", // Placeholder for Banking
    tagline: "Innovative",
    title: "Insurance Solutions",
    titleHighlight: "Redefined",
    description: "At Software at Scale, we provide cutting-edge solutions that empower the insurance industry. Our focus on cloud engineering and robust security architecture guarantees operational efficiency and safety.",
    overlayOpacity: 0.6,
  },
  portfolio: BANKING_PORTFOLIO_DATA,
  cta: INDUSTRY_CTA_DATA,
  challengesImage: "/images/placeholder/insure2.jpg",
};

export default function BankingIndustryPage() {
  return (
    <IndustryPageLayout data={BANKING_INDUSTRY_DATA} />
  );
}