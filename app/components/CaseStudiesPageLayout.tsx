import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CTASection from '@/app/components/CTASection';
import PortfolioSection from '@/app/components/PortfolioSection';
import ArticleHeaderSection from '@/app/components/ArticleHeaderSection';

// --- Shared Data Structures ---

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  aspectRatio: string;
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

// --- Layout Data Structure ---

interface CaseStudiesPageData {
  portfolio: PortfolioSectionData;
  secondaryHeader: ArticleHeaderData;
  cta: CTASectionData;
}

interface CaseStudiesPageLayoutProps {
  data: CaseStudiesPageData;
}

const CaseStudiesPageLayout = ({ data }: CaseStudiesPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      <main className="pt-[72px]">
        {/* Portfolio Section (Main Content) */}
        <PortfolioSection
          title={data.portfolio.title}
          description={data.portfolio.description}
          projects={data.portfolio.projects}
          viewAllButtonText={data.portfolio.viewAllButtonText}
        />
        
        {/* Article Header Section (Secondary Title/Description) */}
        <ArticleHeaderSection
          title={data.secondaryHeader.title}
          description={data.secondaryHeader.description}
          backgroundColor={data.secondaryHeader.backgroundColor}
          titleColor={data.secondaryHeader.titleColor}
          textColor={data.secondaryHeader.textColor}
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