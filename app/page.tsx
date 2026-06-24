import Header from '@/app/components/layout/Header';
import HeroSection from '@/app/components/sections/hero/HeroSection';
import PartnerStatsSection from '@/app/components/sections/showcase/PartnerStatsSection';
import BoostUnblockSafeguardSection from '@/app/components/sections/showcase/BoostUnblockSafeguardSection';
import BlogSection from '@/app/components/sections/showcase/BlogSection';
import LeadershipSection from '@/app/components/sections/content/LeadershipSection';
import LogoSection from '@/app/components/sections/showcase/LogoSection';
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

      {/* Logo Section */}
      <LogoSection />

      <PartnerStatsSection />
      <BoostUnblockSafeguardSection />

      {/* Proven Approach Section */}
      <ProvenApproachSection />

      <LeadershipSection
        title="Meet The Leaders Behind Software@Scale"
        description="Software@Scale was founded by technology leaders who have spent their careers building, scaling and transforming complex technology platforms across banking, payments, insurance, superannuation and digital businesses. Today, our leadership team combines executive experience with hands-on engineering capability to help clients solve difficult technology challenges and deliver outcomes with confidence."
        buttonText="Meet Our Leadership Team"
        buttonLink="/people"
        underImageSrc="/images/placeholder/placeholder161.jpg"
        overImageSrc="/images/placeholder/placeholder6ontop.jpg"
        founders={[
          {
            name: "Louis Droguett",
            role: "Chief Executive Officer",
            imageSrc: "/images/people/louis.jpg",
            description: "After leading large engineering organisations inside Commonwealth Bank, Louis founded Software@Scale with a simple belief: organisations achieve better outcomes when experienced technology leaders remain accountable for delivery."
          },
          {
            name: "Patricia Droguett",
            role: "Chief Operating Officer",
            imageSrc: "/images/people/patricia.jpg",
            objectPosition: "center 30%",
            description: "Patricia has spent her career delivering large-scale technology transformation programs across financial services and highly regulated environments."
          }
        ]}
      />
      
      <BlogSection />
      
      {/* Awards Section */}
      <AwardsSection />
      
      {/* Elite Talent Section */}
      <EliteTalentSection />
      
      {/* Why Choose Section */}
      <WhyChooseSection />
      
      {/* Transforming Ideas Section */}
      <TransformingIdeasSection />
      
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
