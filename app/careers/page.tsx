import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import CareersOpenPositionsSection from '@/app/components/sections/careers/CareersOpenPositionsSection';
import CareersDiscoverSection from '@/app/components/sections/careers/CareersDiscoverSection';
import CareersBenefitsSection from '@/app/components/sections/careers/CareersBenefitsSection';
import CTASection from '@/app/components/sections/cta/CTASection';

interface EmploymentHeroJob {
  title: string;
  description: string;
  city: string;
  country_name: string;
  employment_type_name: string;
  application_url: string;
  department?: string;
}

interface EmploymentHeroResponse {
  data: {
    items: EmploymentHeroJob[];
  };
}

async function getJobs() {
  const res = await fetch(
    'https://api.employmenthero.com/ats/api/v1/embedded/organisations/684d7a29-fa05-4662-b964-3fc2a6a70b0a/jobs',
    {
      headers: {
        'X_ATS_TOKEN': 'fMh0BBvfgQy2wmPhKtybUw',
      },
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    return [];
  }

  const data: EmploymentHeroResponse = await res.json();

  return data.data.items.map((job) => {
    // Strip HTML tags
    const plainText = job.description?.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' ').trim() || '';

    // First try: Extract between "Overview of the Role" and "Key Responsibilities"
    const overviewMatch = plainText.match(/(?:Overview of the Role|Position Overview)[:\s]*(.+?)(?:Key Responsibilities|What You Bring)/i);
    let description = overviewMatch?.[1]?.trim() || '';

    // Fallback: Extract text after "Empower Your Career..." heading up to "Key Responsibilities"
    if (!description) {
      const empowerMatch = plainText.match(/Empower Your Career[^.]+(?:Level|Us)\s+(.+?)(?:Key Responsibilities|What You Bring)/i);
      description = empowerMatch?.[1]?.trim() || '';
    }

    return {
      title: job.title,
      description,
      location: job.city || job.country_name || 'Sydney NSW',
      schedule: job.employment_type_name || 'Full Time',
      applyUrl: job.application_url,
      iconSrc: '/images/careers/handyman_dark.svg',
    };
  });
}

const OPEN_POSITIONS_STYLE = {
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
  secondaryButtonUrl: "https://employmenthero.com/jobs/organisations/software-at-scale/",
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
  primaryButtonUrl: "https://employmenthero.com/jobs/organisations/software-at-scale/"
};

export default async function CareersPage() {
  const positions = await getJobs();

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
          sectionTitle="Open Positions"
          sectionDescription="Join our dynamic team and help shape the future of technology consultancy."
          positions={positions}
          backgroundColor={OPEN_POSITIONS_STYLE.backgroundColor}
          titleColor={OPEN_POSITIONS_STYLE.titleColor}
          textColor={OPEN_POSITIONS_STYLE.textColor}
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