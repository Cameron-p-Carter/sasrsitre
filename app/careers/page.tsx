import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HeroHeaderSection from '@/app/components/HeroHeaderSection';
import CareersOpenPositionsSection from '@/app/components/CareersOpenPositionsSection';
import CareersDiscoverSection from '@/app/components/CareersDiscoverSection';
import CareersBenefitsSection from '@/app/components/CareersBenefitsSection';
import CTASection from '@/app/components/CTASection';

const OPEN_POSITIONS_DATA = {
  sectionTitle: "Open Positions",
  sectionDescription: "Join our dynamic team and help shape the future of technology consultancy.",
  positions: [
    {
      title: "Software Engineer",
      description: "Develop innovative solutions for our clients in a collaborative environment.",
      location: "Remote",
      schedule: "Full Time",
      applyUrl: "#"
    },
    {
      title: "Project Manager",
      description: "Lead projects to success while ensuring client satisfaction and team collaboration.",
      location: "Hybrid",
      schedule: "Part Time",
      applyUrl: "#"
    },
    {
      title: "Data Analyst",
      description: "Analyze data trends to drive strategic decisions and improve operational efficiency.",
      location: "Onsite",
      schedule: "Full Time",
      applyUrl: "#"
    }
  ],
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  buttonColor: "border-[#0c2080]",
  buttonTextColor: "text-[#0c2080]"
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
  primaryButtonColor: "border-[#14d3f3]",
  secondaryButtonColor: "text-[#14d3f3]",
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
  secondaryButtonText: "Learn More"
};

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      <main className="pt-[72px]">
        <HeroHeaderSection
          imageSrc="/images/placeholder/91.jpg"
          tagline="Careers"
          title="Join Our Team"
          titleHighlight=""
          description="Become part of an innovative community focused on digital transformation and engineering excellence."
          overlayOpacity={0.6}
        />

        <CareersOpenPositionsSection
          sectionTitle={OPEN_POSITIONS_DATA.sectionTitle}
          sectionDescription={OPEN_POSITIONS_DATA.sectionDescription}
          positions={OPEN_POSITIONS_DATA.positions}
          backgroundColor={OPEN_POSITIONS_DATA.backgroundColor}
          titleColor={OPEN_POSITIONS_DATA.titleColor}
          textColor={OPEN_POSITIONS_DATA.textColor}
          buttonColor={OPEN_POSITIONS_DATA.buttonColor}
          buttonTextColor={OPEN_POSITIONS_DATA.buttonTextColor}
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
          primaryButtonColor={DISCOVER_SECTION_DATA.primaryButtonColor}
          secondaryButtonColor={DISCOVER_SECTION_DATA.secondaryButtonColor}
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
        />
      </main>
      
      <Footer />
    </div>
  );
}