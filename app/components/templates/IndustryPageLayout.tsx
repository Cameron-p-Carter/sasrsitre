import Header from '@/app/components/layout/Header';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import PortfolioSection from '@/app/components/sections/showcase/PortfolioSection';
import CTASection from '@/app/components/sections/cta/CTASection';
import { CoreCompetenciesGrid } from '@/app/components/sections/info/CoreCompetenciesSection';
import Footer from '@/app/components/layout/Footer';

// --- Shared Data Structures ---

interface Project {
  id: number;
  title: string;
  challenge: string;
  outcome: string;
  numbers: string;
  image: string;
  objectPosition?: string;
  link?: string;
}

const SHARED_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Coates Group",
    challenge: "Scale engineering capability across a global restaurant technology platform.",
    outcome: "Built and embedded a 45-person engineering capability supporting platform growth — 30+ countries supported.",
    numbers: "45+ person engineering capability\n30+ countries",
    image: "/images/placeholder/placeholder12.jpg",
    objectPosition: "top",
    link: "/collections/case-studies/coates-group",
  },
  {
    id: 2,
    title: "Commonwealth Bank of Australia",
    challenge: "Deliver large-scale digital banking initiatives across highly regulated environments.",
    outcome: "Supported engineering delivery across critical customer-facing platforms.",
    numbers: "45+ person engineering capability\n30+ countries",
    image: "/images/case/case19.png",
    objectPosition: "right",
    link: "/collections/case-studies/cba-netbank",
  },
  {
    id: 3,
    title: "National Australia Bank",
    challenge: "Accelerate cloud and platform engineering capability within a rapidly growing digital banking environment.",
    outcome: "Strengthened platform delivery and engineering capability.",
    numbers: "45+ person engineering capability\n30+ countries",
    image: "/images/case/case17.jpg",
    link: "/collections/case-studies/nab",
  },
  {
    id: 4,
    title: "GoFundraise",
    challenge: "Support international growth through modern cloud-native engineering capability.",
    outcome: "Delivered scalable platform capability supporting expansion and product innovation.",
    numbers: "45+ person engineering capability\n30+ countries",
    image: "/images/placeholder/placeholder14.jpg",
    link: "/collections/case-studies/gofundraise",
  },
];

interface PortfolioSectionData {
  viewAllButtonText: string;
}

interface HeroSectionData {
  imageSrc: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  overlayOpacity: number;
  objectPosition?: string;
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
  challenges?: string[];
  challengesImage?: string;
}

interface IndustryPageLayoutProps {
  data: IndustryPageData;
}

const IndustryPageLayout = ({ data }: IndustryPageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
        <Header />
      
      <main>
        <HeroHeaderSection
          imageSrc={data.hero.imageSrc}
          tagline={data.hero.tagline}
          title={data.hero.title}
          titleHighlight={data.hero.titleHighlight}
          description={data.hero.description}
          overlayOpacity={data.hero.overlayOpacity}
          objectPosition={data.hero.objectPosition}
        />
        
        <CoreCompetenciesGrid title="Common Challenges" imageSrc={data.challengesImage ?? "/images/people/execkeader.jpg"} imageOnRight={false} items={data.challenges} />

        <PortfolioSection
          variant="dark"
          title="Proven Delivery"
          description="We've helped organisations across banking, payments, superannuation, retail and digital platforms solve complex technology challenges and strengthen engineering capability."
          projects={SHARED_PROJECTS}
          viewAllButtonText={data.portfolio.viewAllButtonText}
        />
        
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