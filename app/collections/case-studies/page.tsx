import CaseStudiesPageLayout from '@/app/components/CaseStudiesPageLayout';

// --- Data Structures copied from CaseStudiesPageLayout.tsx and app/page.tsx ---

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  aspectRatio: string;
  link?: string;
}

interface PortfolioSectionData {
  title: string;
  description: string;
  projects: Project[];
  viewAllButtonText: string;
}

interface ArticleHeaderData {
  title: string;
  description: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
}

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

// --- Placeholder Data ---

const CASE_STUDIES_PORTFOLIO_DATA: PortfolioSectionData = {
  title: "Our Case Studies",
  description: "Explore our successful projects and innovative solutions.",
  viewAllButtonText: "View all",
  projects: [
    {
      id: 1,
      title: "Team Super",
      description: "Seamless Data Migration Underpins a Major Superannuation Merger.",
      image: "/images/placeholder/placeholder11.jpg",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/team-super"
    },
    {
      id: 3,
      title: "Coates Group",
      description: "Engineering Acceleration for Global Market Leadership.",
      image: "/images/placeholder/placeholder12.jpg",
      aspectRatio: "aspect-square",
      link: "/collections/case-studies/coates-group"
    },
    {
      id: 2,
      title: "Mine Super",
      description: "Preparing a Superannuation Platform for Sale and Future Growth.",
      image: "/images/placeholder/placeholder13.jpg",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/mine-super"
    },
    {
      id: 4,
      title: "GoFundraise",
      description: "Software@Scale delivers a world-class platform to support GoFundraise's global growth.",
      image: "/images/placeholder/placeholder14.jpg",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/gofundraise"
    }
  ]
};

const CASE_STUDIES_SECONDARY_HEADER: ArticleHeaderData = {
  title: "Ready to transform your business?",
  description: "We partner with elite businesses to deliver scalable, secure, and high-performing technology solutions.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const CASE_STUDIES_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Get in Touch with Us",
  description: "Reach out today to discover how we can help accelerate your digital transformation journey.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const CASE_STUDIES_PAGE_DATA = {
  portfolio: CASE_STUDIES_PORTFOLIO_DATA,
  secondaryHeader: CASE_STUDIES_SECONDARY_HEADER,
  cta: CASE_STUDIES_CTA_DATA,
};

export default function CaseStudiesPage() {
  return (
    <CaseStudiesPageLayout data={CASE_STUDIES_PAGE_DATA} />
  );
}