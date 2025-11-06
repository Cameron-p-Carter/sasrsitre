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
      imageSrc: "/images/placeholder/placeholder68.png", // Placeholder
      title: "Approved Supplier: Federal Government ICT Digital and Cloud Marketplace Panels",
      description: "Discover how cloud engineering is transforming businesses today.",
    },
    {
      id: 2,
      imageSrc: "/images/placeholder/placeholder69.jpg", // Placeholder
      title: "The Importance of Security Architecture",
      description: "Learn why security architecture is crucial for modern enterprises.",
    },
    {
      id: 3,
      imageSrc: "/images/placeholder/placeholder70.jpg", // Placeholder
      title: "Navigating Project Acceleration Strategies",
      description: "Explore effective strategies for accelerating your projects.",
    },
    {
      id: 4,
      imageSrc: "/images/placeholder/placeholder71.jpg", // Placeholder
      title: "Understanding Platform Due Diligence",
      description: "Get insights into the importance of platform due diligence.",
    },
    {
      id: 5,
      imageSrc: "/images/placeholder/placeholder72.jpg", // Placeholder
      title: "Enhancing Engineering Performance Metrics",
      description: "Learn how to improve your engineering performance metrics effectively.",
    },
    {
      id: 6,
      imageSrc: "/images/placeholder/placeholder73.jpg", // Placeholder
      title: "Latest Trends in Cloud Technology",
      description: "Stay ahead with the latest trends in cloud technology.",
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