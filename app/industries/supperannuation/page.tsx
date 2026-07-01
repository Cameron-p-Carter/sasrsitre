import IndustryPageLayout from '@/app/components/templates/IndustryPageLayout';

const BANKING_PORTFOLIO_DATA = {
  viewAllButtonText: "View all",
};

const INDUSTRY_CTA_DATA = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Transform Your Superannuation Strategy",
  description: "Unlock the potential of your superannuation firm with our tailored technology solutions.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

// --- Industry Page Specific Data ---

const BANKING_INDUSTRY_DATA = {
  hero: {
    imageSrc: "/images/placeholder/placeholder64.jpg", // Placeholder for Banking
    tagline: "Empower",
    title: "Superannuation",
    titleHighlight: "Innovation",
    description: "At Software at Scale, we harness cutting-edge technology to drive transformation in the superannuation sector. Our expertise ensures that your organisation achieves engineering excellence and meets the demands of a rapidly evolving digital landscape.",
    overlayOpacity: 0.6,
  },
  portfolio: BANKING_PORTFOLIO_DATA,
  cta: INDUSTRY_CTA_DATA,
  challengesImage: "/images/placeholder/super2.jpg",
  challenges: [
    "Fund mergers",
    "Legacy systems",
    "Member migration",
    "Regulatory obligations",
  ],
};

export default function BankingIndustryPage() {
  return (
    <IndustryPageLayout data={BANKING_INDUSTRY_DATA} />
  );
}