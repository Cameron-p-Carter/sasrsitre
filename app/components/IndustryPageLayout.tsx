import Header from '@/app/components/Header';
import HeroHeaderSection from '@/app/components/HeroHeaderSection';
import PortfolioSection from '@/app/components/PortfolioSection';
import CoreValuesTestimonialSection from '@/app/components/CoreValuesTestimonialSection';
import BlogSection from '@/app/components/BlogSection';
import CTASection from '@/app/components/CTASection';
import Footer from '@/app/components/Footer';

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

interface HeroSectionData {
  imageSrc: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  overlayOpacity: number;
}

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

// --- Layout Data Structure ---

interface IndustryPageData {
  hero: HeroSectionData;
  portfolio: PortfolioSectionData;
  cta: CTASectionData;
  // Testimonial and Blog are hardcoded components, so no data needed here
}

interface IndustryPageLayoutProps {
  data: IndustryPageData;
}

const IndustryPageLayout = ({ data }: IndustryPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      <main className="pt-[72px]">
        <HeroHeaderSection
          imageSrc={data.hero.imageSrc}
          tagline={data.hero.tagline}
          title={data.hero.title}
          titleHighlight={data.hero.titleHighlight}
          description={data.hero.description}
          overlayOpacity={data.hero.overlayOpacity}
        />
        
        <PortfolioSection
          title={data.portfolio.title}
          description={data.portfolio.description}
          projects={data.portfolio.projects}
          viewAllButtonText={data.portfolio.viewAllButtonText}
        />
        
        <CoreValuesTestimonialSection />
        
        <BlogSection />
        
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

export default IndustryPageLayout;