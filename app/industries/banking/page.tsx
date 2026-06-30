import IndustryPageLayout from '@/app/components/templates/IndustryPageLayout';

const BANKING_PORTFOLIO_DATA = {
  viewAllButtonText: "View all",
};

const INDUSTRY_CTA_DATA = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Transform Your Banking Experience",
  description: "Unlock tailored consulting solutions designed specifically for the banking sector's unique challenges.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

// --- Industry Page Specific Data ---

const BANKING_INDUSTRY_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder62.jpg", // Placeholder for Banking
    tagline: "Banking",
    title: "Empowering Banking",
    titleHighlight: "Transformation",
    description: "At Software at Scale, we understand the unique challenges faced by the banking industry. Our tailored solutions drive digital transformation, enhancing efficiency and security in financial services.",
    overlayOpacity: 0.6,
  },
  portfolio: BANKING_PORTFOLIO_DATA,
  cta: INDUSTRY_CTA_DATA,
  challengesImage: "/images/placeholder/bank2.jpg",
};

export default function BankingIndustryPage() {
  return (
    <IndustryPageLayout data={BANKING_INDUSTRY_DATA} />
  );
}