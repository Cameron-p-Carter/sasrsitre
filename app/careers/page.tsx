import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import CareersOpenPositionsSection from '@/app/components/sections/careers/CareersOpenPositionsSection';
import CareersDiscoverSection from '@/app/components/sections/careers/CareersDiscoverSection';
import CareersBenefitsSection from '@/app/components/sections/careers/CareersBenefitsSection';
import CTASection from '@/app/components/sections/cta/CTASection';

const OPEN_POSITIONS_DATA = {
  sectionTitle: "Open Positions",
  sectionDescription: "Join our dynamic team and help shape the future of technology consultancy.",
  positions: [
    {
      title: "AI Solutions Architect - Product Strategy & Implementation",
      description: "Accelerate your AI experience with an amazing opportunity.",
      location: "Sydney NSW (Hybrid)",
      schedule: "Full Time",
      applyUrl: "https://www.seek.com.au/job/89048284?type=standard&ref=search-standalone&origin=jobCard#sol=0aff79f67ba31abe4297c883eca5e73723ec1f6b"
    },
    {
      title: "Principal Engineer (.NET) - Perm or Contract",
      description: "Join a high performing team of digital and engineering leaders solving complex problems at scale with cutting edge tech and global impact.",
      location: "Sydney NSW (Hybrid)",
      schedule: "Full Time",
      applyUrl: "https://www.seek.com.au/job/89131734?type=standard&ref=search-standalone&origin=cardTitle#sol=b386c66092747c0c7fd1e0562b5194f8cb7ccbab"
    },
    {
      title: "Principal Site Reliability and Software Engineer - Perm or Contract",
      description: "Join a high performing team of digital and engineering leaders solving complex problems at scale with cutting edge tech and global impact.",
      location: "Sydney NSW (Hybrid)",
      schedule: "Full Time",
      applyUrl: "https://www.seek.com.au/job/89131726?type=standard&ref=search-standalone&origin=cardTitle#sol=de4ef1d19e54b79bf4afa625c27f9c4e38c2c5c0"
    },
    {
      title: "Senior Android Engineer (Kotlin) - Perm or Contract",
      description: "Senior Android Engineer (Kotlin). Collaborate to deliver enterprise-wide solutions creating significant value at scale.",
      location: "Sydney NSW (Hybrid)",
      schedule: "Full Time",
      applyUrl: "https://www.seek.com.au/job/88755231?type=standard&ref=search-standalone&origin=cardTitle#sol=ad30a8d48ea3162f3c9dce5be79fce6ac7922368"
    },
    {
      title: "Principal Engineer (AI)",
      description: "Principal Engineer (AI) – Lead architecture & hands-on delivery of AI systems, LLM integrations, and scalable platform capabilities.",
      location: "Sydney NSW (Hybrid)",
      schedule: "Contract",
      applyUrl: "https://www.seek.com.au/job/88728280?type=standard&ref=search-standalone#sol=e3d57f21bbb3f7aa2ff5b3c2f9b6f8079260a2f3"
    },
    {
      title: "Principal Engineer (React/TypeScript/Node) - Perm or Contract",
      description: "Join a high performing team of digital and engineering leaders solving complex problems at scale with cutting edge tech and global impact.",
      location: "Sydney NSW (Hybrid)",
      schedule: "Full Time",
      applyUrl: "https://www.seek.com.au/job/88727877?type=standard&ref=search-standalone&origin=jobCard#sol=36f7c777a262737ce85476c07d9dfa184d157cf9"
    },
    {
      title: "Senior Business Analyst - Digital",
      description: "Join our dynamic team as a Senior Digital Business Analyst to deliver digital products that enhance customer experiences and drive business success.",
      location: "Sydney NSW (Hybrid)",
      schedule: "Contract",
      applyUrl: "https://www.seek.com.au/job/88816203?type=standard&ref=search-standalone&origin=jobCard#sol=23be08ef9edf922e39f1662c44f50af942ea19d3"
    }
  ],
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]"
};

const DISCOVER_SECTION_DATA = {
  sectionTitle: "Discover Your Future with Us",
  sectionDescription: "At Software at Scale, we believe in fostering a culture of innovation and collaboration. Join us to work on cutting-edge projects that make a real impact.",
  imageSrc: "/images/placeholder/96.jpg",
  backgroundColor: "bg-[#006cc9]",
  titleColor: "text-white",
  textColor: "text-white",
  primaryButtonText: "Explore",
  secondaryButtonText: "Apply",
  primaryButtonUrl: "/our-history",
  secondaryButtonUrl: "https://www.seek.com.au/Software-at-Scale-jobs/at-this-company",
};

const BENEFITS_SECTION_DATA = {
  benefits: [
    {
      iconSrc: "/images/icons/diversity_1.svg",
      title: "Emphasizing Growth and Development",
      description: "We are committed to continuous learning and professional development."
    },
    {
      iconSrc: "/images/icons/health_cross.svg",
      title: "Comprehensive Benefits for Our Employees",
      description: "Our competitive benefits package supports your well-being and work-life balance."
    },
    {
      iconSrc: "/images/icons/forward.svg",
      title: "Join Us in Shaping the Future",
      description: "Become part of a forward-thinking team that values your contributions."
    }
  ],
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#00050a]",
  textColor: "text-[#00050a]"
};

const CTA_SECTION_DATA = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Ready to Join Our Team?",
  description: "Take the next step in your career journey with Software@Scale. We're looking for talented individuals who are passionate about technology and innovation.",
  primaryButtonText: "Apply Now",
  secondaryButtonText: "Learn More",
  primaryButtonUrl: "https://www.seek.com.au/Software-at-Scale-jobs/at-this-company"
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
      
      <main>
        <HeroHeaderSection
          imageSrc="/images/placeholder/91.jpg"
          tagline="Careers"
          title="Join Our Team"
          titleHighlight=""
          description="Become part of an innovative community focused on digital transformation and engineering excellence."
          overlayOpacity={0.6}
          objectPosition="top"
        />

        <CareersOpenPositionsSection
          sectionTitle={OPEN_POSITIONS_DATA.sectionTitle}
          sectionDescription={OPEN_POSITIONS_DATA.sectionDescription}
          positions={OPEN_POSITIONS_DATA.positions}
          backgroundColor={OPEN_POSITIONS_DATA.backgroundColor}
          titleColor={OPEN_POSITIONS_DATA.titleColor}
          textColor={OPEN_POSITIONS_DATA.textColor}
        />

        <CareersDiscoverSection
          sectionTitle={DISCOVER_SECTION_DATA.sectionTitle}
          sectionDescription={DISCOVER_SECTION_DATA.sectionDescription}
          imageSrc={DISCOVER_SECTION_DATA.imageSrc}
          backgroundColor={DISCOVER_SECTION_DATA.backgroundColor}
          titleColor={DISCOVER_SECTION_DATA.titleColor}
          textColor={DISCOVER_SECTION_DATA.textColor}
          primaryButtonText={DISCOVER_SECTION_DATA.primaryButtonText}
          secondaryButtonText={DISCOVER_SECTION_DATA.secondaryButtonText}
          primaryButtonUrl={DISCOVER_SECTION_DATA.primaryButtonUrl}
          secondaryButtonUrl={DISCOVER_SECTION_DATA.secondaryButtonUrl}
        />
        
        <CareersBenefitsSection
          benefits={BENEFITS_SECTION_DATA.benefits}
          backgroundColor={BENEFITS_SECTION_DATA.backgroundColor}
          titleColor={BENEFITS_SECTION_DATA.titleColor}
          textColor={BENEFITS_SECTION_DATA.textColor}
        />
        
        <CTASection
          imageSrc={CTA_SECTION_DATA.imageSrc}
          title={CTA_SECTION_DATA.title}
          description={CTA_SECTION_DATA.description}
          primaryButtonText={CTA_SECTION_DATA.primaryButtonText}
          secondaryButtonText={CTA_SECTION_DATA.secondaryButtonText}
          primaryButtonUrl={CTA_SECTION_DATA.primaryButtonUrl}
        />
      </main>
      
      <Footer />
    </div>
  );
}