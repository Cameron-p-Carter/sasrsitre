import Header from '@/app/components/layout/Header';
import HeroSection from '@/app/components/sections/hero/HeroSection';
import BlogSection from '@/app/components/sections/showcase/BlogSection';
import LogoSection from '@/app/components/sections/showcase/LogoSection';
import ImageOverlapSection from '@/app/components/sections/content/ImageOverlapSection';
import AwardsSection from '@/app/components/sections/stats/AwardsSection';
import EliteTalentSection from '@/app/components/sections/info/EliteTalentSection';
import WhyChooseSection from '@/app/components/sections/info/WhyChooseSection';
import TransformingIdeasSection from '@/app/components/sections/info/TransformingIdeasSection';
import ProvenApproachSection from '@/app/components/sections/info/ProvenApproachSection';
import PortfolioSection from '@/app/components/sections/showcase/PortfolioSection';
import CTASection from '@/app/components/sections/cta/CTASection';
import Footer from '@/app/components/layout/Footer';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  aspectRatio: string;
}

const HOME_PORTFOLIO_DATA = {
  title: "Our Project Highlights",
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
      id: 2,
      title: "Mine Super",
      description: "Preparing a Superannuation Platform for Sale and Future Growth.",
      image: "/images/placeholder/placeholder13.jpg",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/mine-super"
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
      id: 4,
      title: "GoFundraise",
      description: "Software@Scale delivers a world-class platform to support GoFundraise's global growth.",
      image: "/images/placeholder/placeholder14.jpg",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/gofundraise"
    }
  ]
};

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <BlogSection />
      
      {/* Logo Section */}
      <LogoSection />
      
      {/* Expertise Section */}
      <ImageOverlapSection
        title="Specialised Engineering and Delivery Expertise"
        description="At Software at Scale, we are dedicated to driving digital acceleration for enterprises through innovative technology solutions. Our mission is to enhance engineering performance and modernise legacy systems while minimizing risk."
        underImageSrc="/images/placeholder/placeholder5under.jpg"
        overImageSrc="/images/placeholder/placeholder6ontop.jpg"
        primaryButtonText="Learn More"
        secondaryButtonText="Contact"
      />
      
      {/* Awards Section */}
      <AwardsSection />
      
      {/* Elite Talent Section */}
      <EliteTalentSection />
      
      {/* Why Choose Section */}
      <WhyChooseSection />
      
      {/* Transforming Ideas Section */}
      <TransformingIdeasSection />
      
      {/* Proven Approach Section */}
      <ProvenApproachSection />
      
      {/* Portfolio Section */}
      <PortfolioSection
        title={HOME_PORTFOLIO_DATA.title}
        description={HOME_PORTFOLIO_DATA.description}
        projects={HOME_PORTFOLIO_DATA.projects}
        viewAllButtonText={HOME_PORTFOLIO_DATA.viewAllButtonText}
      />
      
      {/* CTA Section */}
      <CTASection
        imageSrc="/images/placeholder/placeholder16.jpg"
        title="Get in Touch with Us"
        description="Reach out today to discover how we can help accelerate your digital transformation journey."
        primaryButtonText="Contact"
        secondaryButtonText="Learn More"
      />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
