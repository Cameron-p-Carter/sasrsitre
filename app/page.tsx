import Header from '@/app/components/layout/Header';
import HeroSection from '@/app/components/sections/hero/HeroSection';
import PartnerStatsSection from '@/app/components/sections/showcase/PartnerStatsSection';
import BoostUnblockSafeguardSection from '@/app/components/sections/showcase/BoostUnblockSafeguardSection';
import BlogSection from '@/app/components/sections/showcase/BlogSection';
import LeadershipSection from '@/app/components/sections/content/LeadershipSection';
import LogoSection from '@/app/components/sections/showcase/LogoSection';
import AwardsSection from '@/app/components/sections/stats/AwardsSection';
import AwardBadgesSection from '@/app/components/sections/stats/AwardBadgesSection';
import EliteTalentSection from '@/app/components/sections/info/EliteTalentSection';
import ProvenApproachSection from '@/app/components/sections/info/ProvenApproachSection';
import EnterpriseDeliverySection from '@/app/components/sections/info/EnterpriseDeliverySection';
import PortfolioSection from '@/app/components/sections/showcase/PortfolioSection';
import CTASection from '@/app/components/sections/cta/CTASection';
import Footer from '@/app/components/layout/Footer';

interface Project {
  id: number;
  title: string;
  challenge: string;
  outcome: string;
  numbers: string;
  image: string;
  link?: string;
  objectPosition?: string;
}

const HOME_PORTFOLIO_DATA = {
  title: "Proven Delivery",
  description: "We've helped organisations across banking, payments, superannuation, retail and digital platforms solve complex technology challenges and strengthen engineering capability.",
  viewAllButtonText: "View all",
  projects: [
    {
      id: 1,
      title: "Coates Group",
      challenge: "Scale engineering capability across a global restaurant technology platform.",
      outcome: "Built and embedded a 45-person engineering capability supporting platform growth — 30+ countries supported.",
      numbers: "45+ person engineering capability\n30+ countries",
      image: "/images/placeholder/placeholder12.jpg",
      objectPosition: "top",
      link: "/collections/case-studies/coates-group"
    },
    {
      id: 2,
      title: "Commonwealth Bank of Australia",
      challenge: "Deliver large-scale digital banking initiatives across highly regulated environments.",
      outcome: "Supported engineering delivery across critical customer-facing platforms.",
      numbers: "45+ person engineering capability\n30+ countries",
      image: "/images/case/case19.png",
      objectPosition: "right",
      link: "/collections/case-studies/cba-netbank"
    },
    {
      id: 3,
      title: "National Australia Bank",
      challenge: "Accelerate cloud and platform engineering capability within a rapidly growing digital banking environment.",
      outcome: "Strengthened platform delivery and engineering capability.",
      numbers: "45+ person engineering capability\n30+ countries",
      image: "/images/case/case17.jpg",
      link: "/collections/case-studies/nab"
    },
    {
      id: 4,
      title: "GoFundraise",
      challenge: "Support international growth through modern cloud-native engineering capability.",
      outcome: "Delivered scalable platform capability supporting expansion and product innovation.",
      numbers: "45+ person engineering capability\n30+ countries",
      image: "/images/placeholder/placeholder14.jpg",
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
      
      {/* Portfolio Section */}
      <PortfolioSection
        title={HOME_PORTFOLIO_DATA.title}
        description={HOME_PORTFOLIO_DATA.description}
        projects={HOME_PORTFOLIO_DATA.projects}
        viewAllButtonText={HOME_PORTFOLIO_DATA.viewAllButtonText}
      />

      <EnterpriseDeliverySection />

      {/* Elite Talent Section */}
      <EliteTalentSection />
      
      <AwardBadgesSection />

      {/* Awards Section */}
      <AwardsSection />

      <BlogSection />

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
