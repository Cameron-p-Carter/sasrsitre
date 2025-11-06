import IndustryPageLayout from '@/app/components/IndustryPageLayout';

// --- Data Structures copied from app/page.tsx and PortfolioSection.tsx ---

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  aspectRatio: string;
}

const BANKING_PORTFOLIO_DATA = {
  title: "Our Project Highlights",
  description: "Explore our successful projects and innovative solutions.",
  viewAllButtonText: "View all",
  projects: [
    {
      id: 1,
      title: "Team Super",
      description: "Seamless Data Migration Underpins a Major Superannuation Merger.",
      image: "/images/placeholder/placeholder11.jpg",
      aspectRatio: "aspect-[335/188]"
    },
    {
      id: 2,
      title: "Coates Group",
      description: "Engineering Acceleration for Global Market Leadership.",
      image: "/images/placeholder/placeholder12.jpg",
      aspectRatio: "aspect-square"
    },
    {
      id: 3,
      title: "Mine Super",
      description: "Preparing a Superannuation Platform for Sale and Future Growth.",
      image: "/images/placeholder/placeholder13.jpg",
      aspectRatio: "aspect-[335/188]"
    },
    {
      id: 4,
      title: "GoFundraise",
      description: "Software@Scale delivers a world-class platform to support GoFundraise's global growth.",
      image: "/images/placeholder/placeholder14.jpg",
      aspectRatio: "aspect-[335/188]"
    }
  ]
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
    imageSrc: "/images/placeholder/placeholder24.jpg", // Placeholder for Banking
    tagline: "Innovative",
    title: "Insurance Solutions",
    titleHighlight: "Redefined",
    description: "At Software at Scale, we provide cutting-edge solutions that empower the insurance industry. Our focus on cloud engineering and robust security architecture guarantees operational efficiency and safety.",
    overlayOpacity: 0.6,
  },
  portfolio: BANKING_PORTFOLIO_DATA,
  cta: INDUSTRY_CTA_DATA,
};

export default function BankingIndustryPage() {
  return (
    <IndustryPageLayout data={BANKING_INDUSTRY_DATA} />
  );
}