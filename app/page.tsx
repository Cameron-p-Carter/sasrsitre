import Header from '@/app/components/layout/Header';
import HeroSection from '@/app/components/sections/hero/HeroSection';
import LogoSection from '@/app/components/sections/showcase/LogoSection';
import AtAGlanceSection from '@/app/components/sections/stats/AtAGlanceSection';
import PeopleFeaturesSection from '@/app/components/sections/features/PeopleFeaturesSection';
import WhyChooseSection from '@/app/components/sections/info/WhyChooseSection';
import ImageOverlapSection from '@/app/components/sections/content/ImageOverlapSection';
import PortfolioSection from '@/app/components/sections/showcase/PortfolioSection';
import TransformingIdeasSection from '@/app/components/sections/info/TransformingIdeasSection';
import AwardsSection from '@/app/components/sections/stats/AwardsSection';
import EliteTalentSection from '@/app/components/sections/info/EliteTalentSection';
import BlogSection from '@/app/components/sections/showcase/BlogSection';
import FoundersSection from '@/app/components/sections/info/FoundersSection';
import CTASection from '@/app/components/sections/cta/CTASection';
import Footer from '@/app/components/layout/Footer';

const BOOST_UNBLOCK_SAFEGUARD = [
  {
    icon: "/images/icons/bolt.svg",
    title: "Boost",
    description: "Increase engineering capability, improve delivery velocity and strengthen technology teams.",
  },
  {
    icon: "/images/icons/dynamic_form.svg",
    title: "Unblock",
    description: "Solve difficult technology challenges, remove bottlenecks and recover critical delivery programs.",
  },
  {
    icon: "/images/icons/security.svg",
    title: "Safeguard",
    description: "Reduce operational risk, improve resilience and strengthen security.",
  },
];

const PROVEN_DELIVERY_DATA = {
  title: "Proven Delivery",
  description: "We've helped organisations across banking, payments, superannuation, retail and digital platforms solve complex technology challenges and strengthen engineering capability.",
  viewAllButtonText: "View Proven Delivery",
  projects: [
    {
      id: 1,
      title: "Coates Group",
      description: "Scale engineering capability across a global restaurant technology platform. Built and embedded a 45-person engineering capability supporting platform growth — 30+ countries supported.",
      image: "/images/placeholder/placeholder12.jpg",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/coates-group"
    },
    {
      id: 2,
      title: "Commonwealth Bank of Australia",
      description: "Deliver large-scale digital banking initiatives across highly regulated environments. Supported engineering delivery across critical customer-facing platforms.",
      image: "/images/placeholder/placeholder11.jpg",
      aspectRatio: "aspect-[335/188]",
      link: "/collections/case-studies/commonwealth-bank"
    },
    {
      id: 3,
      title: "National Australia Bank",
      description: "Accelerate cloud and platform engineering capability within a rapidly growing digital banking environment. Strengthened platform delivery and engineering capability.",
      image: "/images/placeholder/placeholder13.jpg",
      aspectRatio: "aspect-square",
      link: "/collections/case-studies/nab"
    },
    {
      id: 4,
      title: "GoFundraise",
      description: "Support international growth through modern cloud-native engineering capability. Delivered scalable platform capability supporting expansion and product innovation.",
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

      {/* S1: Hero */}
      <HeroSection />

      {/* S2: Trusted By Leading Enterprises */}
      <LogoSection />

      {/* S3: Software@Scale At A Glance */}
      <AtAGlanceSection />

      {/* S4: Boost. Unblock. Safeguard. */}
      <PeopleFeaturesSection features={BOOST_UNBLOCK_SAFEGUARD} />

      {/* S5: Why Enterprise Clients Choose Software@Scale */}
      <WhyChooseSection />

      {/* S6: Meet The Leaders Behind Software@Scale */}
      <ImageOverlapSection
        title="Meet The Leaders Behind Software@Scale"
        description="Software@Scale was founded by technology leaders who have spent their careers building, scaling and transforming complex technology platforms across banking, payments, insurance, superannuation and digital businesses. Today, our leadership team combines executive experience with hands-on engineering capability to help clients solve difficult technology challenges and deliver outcomes with confidence."
        underImageSrc="/images/placeholder/placeholder161.jpg"
        overImageSrc="/images/placeholder/placeholder6ontop.jpg"
        primaryButtonText="Meet Our Leadership Team"
        secondaryButtonText="Contact Us"
      />

      {/* S6: Featured Founders */}
      <FoundersSection />

      {/* S7: Proven Delivery */}
      <PortfolioSection
        title={PROVEN_DELIVERY_DATA.title}
        description={PROVEN_DELIVERY_DATA.description}
        projects={PROVEN_DELIVERY_DATA.projects}
        viewAllButtonText={PROVEN_DELIVERY_DATA.viewAllButtonText}
      />

      {/* S8: Services Built Around Enterprise Delivery Needs */}
      <TransformingIdeasSection />

      {/* S9: Partners & Recognition */}
      <EliteTalentSection />
      <AwardsSection />

      {/* S10: Insights */}
      <BlogSection />

      {/* S11: Contact */}
      <CTASection
        imageSrc="/images/placeholder/placeholder16.jpg"
        title="Talk To A Technology Leader"
        description="Whether you're facing delivery pressure, capability gaps or critical technology decisions, Software@Scale can help."
        primaryButtonText="Talk To A Technology Leader"
        secondaryButtonText="View Proven Delivery"
      />

      <Footer />
    </div>
  );
}
