import CaseStudiesPageLayout from '@/app/components/templates/CaseStudiesPageLayout';

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
    },
    {
      id: 5,
      title: "UBank",
      description: "Australia's leading digital bank accelerates cloud compliance, data governance, and platform performance to improve delivery velocity and regulatory confidence.",
      image: "/images/case/case2.png",
      aspectRatio: "aspect-square",
      link: "/collections/case-studies/ubank"
    },
    {
      id: 6,
      title: "Qanooni AI",
      description: "Building enterprise-grade legal AI for the GCC region with precision, privacy, and speed.",
      image: "/images/case/case5.png",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/qanooni-ai"
    },
    {
      id: 7,
      title: "IRESS",
      description: "A global financial services technology provider modernises content delivery and analytics through a cloud-native CMS platform on AWS.",
      image: "/images/case/case8.png",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/iress"
    },
    {
      id: 8,
      title: "GoFundraise Cloud and AI",
      description: "Expanding a global fundraising platform into B2B workplace giving through cloud-native architecture and AI-powered campaign tools.",
      image: "/images/case/case11.jpg",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/gofundraise-cloud-ai"
    },
    {
      id: 9,
      title: "Coates Group Automation",
      description: "Modernising IoT fleet management with AWS Greengrass to scale digital signage across hundreds of thousands of global locations.",
      image: "/images/case/case14.jpg",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/coates-group-automation"
    },
    {
      id: 10,
      title: "CBA NetBank",
      description: "Australia's leading bank modernises online banking through a cloud-first, customer-centric digital platform transformation.",
      image: "/images/case/case17.jpg",
      aspectRatio: "aspect-square",
      link: "/collections/case-studies/cba-netbank"
    },
    {
      id: 11,
      title: "CBA Data Platform",
      description: "Australia's leading bank accelerates data platform performance to restore trust, speed delivery, and improve executive decision-making.",
      image: "/images/case/case20.jpg",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/cba-data-platform"
    },
    {
      id: 12,
      title: "Benchmark Estimating",
      description: "Benchmark Estimating accelerates delivery predictability and engineering quality through an AWS-aligned delivery uplift.",
      image: "/images/case/case23.jpg",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/benchmark-estimating"
    }
  ]
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
  cta: CASE_STUDIES_CTA_DATA,
};

export default function CaseStudiesPage() {
  return (
    <CaseStudiesPageLayout data={CASE_STUDIES_PAGE_DATA} />
  );
}