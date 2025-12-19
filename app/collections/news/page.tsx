import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import CTASection from '@/app/components/sections/cta/CTASection';
import NewsGridSection from '@/app/components/sections/showcase/NewsGridSection';

// --- Data Structures ---

interface NewsItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  link?: string;
  objectPosition?: string;
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
      objectPosition: "object-top",
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
      link: "/collections/news/panels",
    },
    {
      id: 9,
      imageSrc: "/images/placeholder/placeholder109.jpg", // Placeholder
      title: "Software@Scale Joins Government Digital Marketplace Panels",
      description: "Software@Scale has been successfully onboarded to multiple government digital marketplace panels, expanding our capability to support public sector digital transformation across Australia.",
      link: "/collections/news/ict-supplier",
    },
    {
      id: 10,
      imageSrc: "/images/articles/art1.jpg",
      title: "Software@Scale Sponsors CISO Masterclass with Joe Sullivan",
      description: "Software@Scale sponsored an exclusive one-day cybersecurity masterclass led by Joe Sullivan, former Chief Security Officer at Facebook, Uber and Cloudflare, convening senior CISOs from across Australia.",
      link: "/collections/news/ciso",
    },
    {
      id: 11,
      imageSrc: "/images/articles/art3.jpg",
      title: "Software@Scale Wins Deloitte Rising Star Award for Second Year",
      description: "Software@Scale has been named the winner of Deloitte's 2025 Tech Fast 50 Rising Star Award, becoming the first company to receive the honour in consecutive years.",
      link: "/collections/news/deloitte-tech-fast-50-2025",
    },
    {
      id: 12,
      imageSrc: "/images/articles/art5.jpg",
      title: "Software@Scale at BeerOps 2025",
      description: "Software@Scale joined Australia's largest tech networking event, BeerOps 2025, connecting with the engineering community and supporting an industry-led platform for collaboration and giving.",
      link: "/collections/news/beerops-2025",
    },
    {
      id: 13,
      imageSrc: "/images/articles/art7.jpg",
      title: "Software@Scale Supports Australian Tamil Chamber of Commerce Gala",
      description: "Software@Scale was proud to support the Australian Tamil Chamber of Commerce's 10th Anniversary Gala Dinner, recognising a decade of contribution to Australia's multicultural business community.",
      link: "/collections/news/chamber-of-commerce-gala",
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
        <Header />
      
      <main>
        <NewsGridSection
          sectionTitle={NEWS_GRID_DATA.sectionTitle}
          sectionDescription={NEWS_GRID_DATA.sectionDescription}
          newsItems={[...NEWS_GRID_DATA.newsItems].reverse()}
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