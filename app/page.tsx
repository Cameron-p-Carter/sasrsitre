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
  subtitle: string;
  description: string;
  image: string;
  aspectRatio: string;
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
      subtitle: "45+ person engineering capability\n30+ countries",
      description: "Scale engineering capability across a global restaurant technology platform. Built and embedded a 45-person engineering capability supporting platform growth — 30+ countries supported.",
      image: "/images/placeholder/placeholder12.jpg",
      aspectRatio: "aspect-square",
      objectPosition: "top",
      link: "/collections/case-studies/coates-group"
    },
    {
      id: 2,
      title: "Commonwealth Bank of Australia",
      subtitle: "45+ person engineering capability\n30+ countries",
      description: "Deliver large-scale digital banking initiatives across highly regulated environments. Supported engineering delivery across critical customer-facing platforms.",
      image: "/images/case/case19.png",
      aspectRatio: "aspect-[632/346.5]",
      objectPosition: "right",
      link: "/collections/case-studies/cba-netbank"
    },
    {
      id: 3,
      title: "National Australia Bank",
      subtitle: "45+ person engineering capability\n30+ countries",
      description: "Accelerate cloud and platform engineering capability within a rapidly growing digital banking environment. Strengthened platform delivery and engineering capability.",
      image: "/images/case/case17.jpg",
      aspectRatio: "aspect-square",
      link: "/collections/case-studies/nab"
    },
    {
      id: 4,
      title: "GoFundraise",
      subtitle: "45+ person engineering capability\n30+ countries",
      description: "Support international growth through modern cloud-native engineering capability. Delivered scalable platform capability supporting expansion and product innovation.",
      image: "/images/placeholder/placeholder14.jpg",
      aspectRatio: "aspect-[632/346.5]",
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

      <BlogSection />

      {/* Awards Section */}
      <AwardsSection />

      {/* Elite Talent Section */}
      <EliteTalentSection />

      {/* Why Choose Section */}
      <WhyChooseSection />

      {/* Transforming Ideas Section */}
      <TransformingIdeasSection />
      
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
