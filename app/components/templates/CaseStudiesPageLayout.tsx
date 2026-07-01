import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import CTASection from '@/app/components/sections/cta/CTASection';
import PortfolioSection from '@/app/components/sections/showcase/PortfolioSection';

// --- Shared Data Structures ---

interface Project {
  id: number;
  title: string;
  challenge?: string;
  outcome?: string;
  numbers?: string;
  description?: string;
  image: string;
  objectPosition?: string;
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

// --- Layout Data Structure ---

interface CaseStudiesPageData {
  portfolio: PortfolioSectionData;
  cta: CTASectionData;
}

interface CaseStudiesPageLayoutProps {
  data: CaseStudiesPageData;
}

const CaseStudiesPageLayout = ({ data }: CaseStudiesPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
        <Header />
      
      <main>
        {/* Portfolio Section (Main Content) */}
        <PortfolioSection
          title={data.portfolio.title}
          description={data.portfolio.description}
          projects={data.portfolio.projects}
          viewAllButtonText={data.portfolio.viewAllButtonText}
        />
        

        
        {/* CTA Section */}
        <CTASection
          imageSrc={data.cta.imageSrc}
          title={data.cta.title}
          description={data.cta.description}
          primaryButtonText={data.cta.primaryButtonText}
          secondaryButtonText={data.cta.secondaryButtonText}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudiesPageLayout;