import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CTASection from '@/app/components/CTASection';
import NewsGridSection from '@/app/components/NewsGridSection';

// --- Data Structures ---

interface NewsItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  link?: string;
}

interface NewsGridSectionData {
  sectionTitle: string;
  sectionDescription: string;
  newsItems: NewsItem[];
  viewMoreButtonText: string;
}

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

// --- Page Data ---

const NEWS_GRID_DATA: NewsGridSectionData = {
  sectionTitle: "Latest News and Updates",
  sectionDescription: "Stay informed with our latest insights and articles.",
  viewMoreButtonText: "View More",
  newsItems: [
    {
      id: 1,
      imageSrc: "/images/placeholder/placeholder101.jpg", // Placeholder
      title: "Celebrating Growth at the 2025 CUB Awards",
      description: "Software@Scale has been recognised as Australia's Fastest Growing Business at the 2025 CUB Awards, a distinction that reflects its commitment to quality, innovation and measurable impact across the technology sector.",
      link: "/collections/news/cub-awards",
    },
    {
      id: 2,
      imageSrc: "/images/placeholder/placeholder102.png", // Placeholder
      title: "Connecting with the Tech Community at BeerOps 2025",
      description: "Software@Scale joined Australia's largest tech networking event, BeerOps 2025, to connect with peers, share insights and celebrate a diverse, inclusive engineering community.",
      link: "/collections/news/beerops",
    },
    {
      id: 3,
      imageSrc: "/images/placeholder/placeholder103.jpg", // Placeholder
      title: "Louis Droguett Named Finalist in 2025 CEO of the Year Awards",
      description: "Software@Scale's CEO and co-founder, Louis Droguett, has been named a finalist in The CEO Magazine's 2025 Executive of the Year Awards, recognised for his leadership in scaling one of Australia's fastest-growing technology businesses.",
      link: "/collections/news/2025-executive-of-the-year-awards",
    },
    {
      id: 4,
      imageSrc: "/images/placeholder/placeholder104.jpg", // Placeholder
      title: "Software@Scale Presents at AWS Community Day 2025",
      description: "Head of Cloud and Infrastructure, Richard Ford, represented Software@Scale at AWS Community Day Australia 2025, delivering insights on innovation, embedded systems and cloud scalability.",
      link: "/collections/news/aws-community-day",
    },
    {
      id: 5,
      imageSrc: "/images/placeholder/placeholder105.jpg", // Placeholder
      title: "Software@Scale at the 2025 Iress WealthTech Summit",
      description: "Software@Scale joined industry leaders at the Iress WealthTech Summit 2025, where CEO Louis Droguett shared insights on cybersecurity and digital protection in financial advice.",
      link: "/collections/news/iress-wealthtech-summit",
    },
    {
      id: 6,
      imageSrc: "/images/placeholder/placeholder106jpg.jpg", // Placeholder
      title: "Patricia Droguett Recognised at Women Leading Tech Awards 2025",
      description: "Software@Scale's Director of Operations, Patricia Droguett, was recognised as a finalist in the 2025 Atlassian Women Leading Tech Awards, celebrating women driving innovation across Australia's technology sector.",
      link: "/collections/news/women-leading-tech-awards",
    },
    {
      id: 7,
      imageSrc: "/images/placeholder/placeholder107.jpg", // Placeholder
      title: "Software@Scale Named Rising Star in Deloitte Technology Fast 50",
      description: "Software@Scale has been recognised as a Rising Star Winner in the Deloitte Technology Fast 50 Australia 2024 Awards, acknowledging the company's exceptional growth and innovation in the technology sector.",
      link: "/collections/news/deloitte-tech-fast-50",
    },
    {
      id: 8,
      imageSrc: "/images/placeholder/placeholder108.png", // Placeholder
      title: "Approved Supplier: Federal Government ICT Digital and Cloud Marketplace Panels",
      description: "Software@Scale has been approved as a supplier on the Federal Government's ICT Digital and Cloud Marketplace Panels, enabling direct engagement with government agencies for digital transformation initiatives.",
      link: "/collections/news/ict-supplier",
    },
    {
      id: 9,
      imageSrc: "/images/placeholder/placeholder109.jpg", // Placeholder
      title: "Software@Scale Joins Government Digital Marketplace Panels",
      description: "Software@Scale has been successfully onboarded to multiple government digital marketplace panels, expanding our capability to support public sector digital transformation across Australia.",
      link: "/collections/news/panels",
    },
  ],
};

const NEWS_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Get in Touch with Us",
  description: "Reach out today to discover how we can help accelerate your digital transformation journey.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

export default function NewsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      <main className="pt-[72px]">
        <NewsGridSection
          sectionTitle={NEWS_GRID_DATA.sectionTitle}
          sectionDescription={NEWS_GRID_DATA.sectionDescription}
          newsItems={NEWS_GRID_DATA.newsItems}
          viewMoreButtonText={NEWS_GRID_DATA.viewMoreButtonText}
        />
        
        <CTASection
          imageSrc={NEWS_CTA_DATA.imageSrc}
          title={NEWS_CTA_DATA.title}
          description={NEWS_CTA_DATA.description}
          primaryButtonText={NEWS_CTA_DATA.primaryButtonText}
          secondaryButtonText={NEWS_CTA_DATA.secondaryButtonText}
        />
      </main>
      
      <Footer />
    </div>
  );
}