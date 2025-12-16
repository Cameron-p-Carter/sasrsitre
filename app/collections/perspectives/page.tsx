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
  sectionTitle: "Expert Insights Await You",
  sectionDescription: "Discover the latest industry trends and analyses.",
  viewMoreButtonText: "View More",
  newsItems: [
    {
      id: 1,
      imageSrc: "/images/perspectives/placeholder152.jpg",
      title: "What Makes a Great Tech Leader?",
      description: "A practical look at the three intangible qualities that distinguish strong technical managers from exceptional tech leaders.",
      link: "/collections/perspectives/tech-leadership",
    },
    // {
    //   id: 2,
    //   imageSrc: "/images/perspectives/placholder153.jpg",
    //   title: "Australia's Payment Infrastructure: A Decade Ahead",
    //   description: "A look at Australia's real-time payment ecosystem is considered world leading, and how its technical foundations continue to set it apart.",
    //   link: "/collections/perspectives/payments",
    // },
    {
      id: 2,
      imageSrc: "/images/perspectives/placholder154.jpg",
      title: "Bridging the Trust Gap Between Business and Technology",
      description: "A clear breakdown of why trust fails between business and tech teams, and what both sides must change to rebuild it.",
      link: "/collections/perspectives/trust-gap",
    },
    // {
    //   id: 4,
    //   imageSrc: "/images/perspectives/placholder155.jpg",
    //   title: "Great Delivery Starts With Strong Partnerships",
    //   description: "The strongest delivery outcomes come from true partnerships between Engineering Leads and Delivery or Program Managers working as one.",
    //   link: "/collections/perspectives/partnerships",
    // },
    {
      id: 3,
      imageSrc: "/images/perspectives/placholder156.jpg",
      title: "Small Decisions, Big Consequences",
      description: "How seemingly minor choices in technology and business can create long-term impacts, and what leaders can do to avoid preventable outcomes.",
      link: "/collections/perspectives/decision-making",
    },
    // {
    //   id: 6,
    //   imageSrc: "/images/perspectives/placholder157.jpg",
    //   title: "The Cobra Effect in Software",
    //   description: "How well-intended metrics can create perverse incentives and lead teams further from the outcomes they are trying to achieve.",
    //   link: "/collections/perspectives/cobra-effect",
    // },
    {
      id: 4,
      imageSrc: "/images/perspectives/placholder158.jpg",
      title: "What Good Leadership Really Looks Like",
      description: "A clearer definition of effective leadership based on problem solving, forward planning, and empowering teams rather than simply directing them.",
      link: "/collections/perspectives/good-leadership",
    },
    // {
    //   id: 8,
    //   imageSrc: "/images/perspectives/placholder159.jpg",
    //   title: "The Best Optimisation Is the One You Do Not Write",
    //   description: "A practical approach to performance engineering where measurement, clarity, and value-driven decisions outperform quick fixes.",
    //   link: "/collections/perspectives/optimisation",
    // },
    {
      id: 5,
      imageSrc: "/images/perspectives/placholder160.jpg",
      title: "Why Everyone Hates Estimates",
      description: "Estimates frustrate everyone, but understanding the purpose behind them can make the process faster, clearer, and far more useful.",
      link: "/collections/perspectives/estimates",
    },
    // {
    //   id: 10,
    //   imageSrc: "/images/perspectives/placholder161.jpg",
    //   title: "Care. Delivery. Honesty. The Consultant Trifecta",
    //   description: "What separates brilliant consultants from genuinely valuable ones is not skill alone, but the right mix of care, delivery, and candour.",
    //   link: "/collections/perspectives/consulting",
    // },
    {
      id: 6,
      imageSrc: "/images/perspectives/placholder162.jpg",
      title: "When RACI Goes Wrong",
      description: "How seemingly subtle behaviours can distort the RACI model and quietly undermine team accountability.",
      link: "/collections/perspectives/raci",
    },
    // {
    //   id: 12,
    //   imageSrc: "/images/perspectives/placeholder163.jpg",
    //   title: "From Hype to Engineered Success: Be the Pragmatist",
    //   description: "Three approaches dominate how teams use AI today, but only one consistently ships reliable outcomes.",
    //   link: "/collections/perspectives/pragmatism",
    // },
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