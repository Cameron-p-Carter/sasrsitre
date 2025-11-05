import Link from 'next/link';
import Header from './components/Header';
import BlogSection from './components/BlogSection';
import LogoSection from './components/LogoSection';
import ImageOverlapSection from './components/ImageOverlapSection';
import AwardsSection from './components/AwardsSection';
import EliteTalentSection from './components/EliteTalentSection';
import WhyChooseSection from './components/WhyChooseSection';
import TransformingIdeasSection from './components/TransformingIdeasSection';
import ProvenApproachSection from './components/ProvenApproachSection';
import PortfolioSection from './components/PortfolioSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

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
      aspectRatio: "aspect-[335/188]"
    },
    {
      id: 2,
      title: "Mine Super",
      description: "Preparing a Superannuation Platform for Sale and Future Growth.",
      image: "/images/placeholder/placeholder13.jpg",
      aspectRatio: "aspect-[335/188]"
    },
    {
      id: 3,
      title: "Coates Group",
      description: "Engineering Acceleration for Global Market Leadership.",
      image: "/images/placeholder/placeholder12.jpg",
      aspectRatio: "aspect-square"
    },
    {
      id: 4,
      title: "GoFundraise",
      description: "Software@Scale delivers a world-class platform to support GoFundraise's global growth.",
      image: "/images/placeholder/placeholder14.jpg",
      aspectRatio: "aspect-[335/188]"
    }
  ]
};

export default function Home() {
  return (
    <div>
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      {/* Hero Section */}
      <main className="relative h-screen flex items-center justify-center px-5 md:px-8 lg:px-16 py-0 pt-[72px]">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/manager-programmer-and-business-man-with-tablet-f-2025-08-29-01-56-12-utc.mp4" type="video/mp4" />
        </video>
        
        {/* Blue overlay */}
        <div className="absolute inset-0 bg-[rgba(12,32,128,0.6)]"></div>
        
        {/* Content Container */}
        <div className="relative z-10 w-full max-w-[1280px] flex flex-col gap-12 md:gap-16 lg:gap-20">
          <div className="flex flex-col gap-6 md:gap-8 max-w-[560px] w-full">
            {/* Content */}
            <div className="flex flex-col gap-5 md:gap-6">
              {/* Main Heading */}
              <h1 className="font-bold text-white text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.48px] lg:tracking-[-0.56px] w-full">
                <span>
                  Building elite solutions for{' '}
                  <br className="hidden md:block" />
                </span>
                <span className="text-[#5ae0f6]">elite businesses</span>
              </h1>
              
              {/* Description */}
              <p className="font-normal text-white text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5] w-full">
                At Software@Scale, we align technology strategy with your business goals to foster innovation and growth. Our expert team tackles complex challenges, ensuring your projects thrive and deliver exceptional results.
              </p>
              
              {/* Award Badges - Responsive Layout */}
              <div className="w-full">
                {/* Mobile: 2x2 Grid - Fixed spacing and alignment */}
                <div className="flex flex-col gap-4 md:hidden w-fit">
                  <div className="flex gap-4">
                    <div className="relative w-[100px] h-[100px]">
                      <img
                        src="/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png"
                        alt="Atlassian Tech Leadership Finalist 2025"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative w-[100px] h-[100px]">
                      <img
                        src="/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png"
                        alt="CUB Awards Winner 2025"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="relative w-[100px] h-[100px]">
                      <img
                        src="/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png"
                        alt="Deloitte Technology Fast 50 Australia Rising Star Winner 2024"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                    <div className="relative w-[100px] h-[100px]">
                      <img
                        src="/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png"
                        alt="CEO Magazine Executive of the Year Awards Finalist 2025"
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* Tablet & Desktop: Horizontal Layout */}
                <div className="hidden md:flex gap-6 lg:gap-[33px] h-[107px]">
                  <div className="relative w-[100px] h-[100px]">
                    <img
                      src="/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png"
                      alt="Atlassian Tech Leadership Finalist 2025"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative w-[100px] h-[100px]">
                    <img
                      src="/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png"
                      alt="CUB Awards Winner 2025"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative w-[100px] h-[100px]">
                    <img
                      src="/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png"
                      alt="Deloitte Technology Fast 50 Australia Rising Star Winner 2024"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative w-[100px] h-[100px]">
                    <img
                      src="/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png"
                      alt="CEO Magazine Executive of the Year Awards Finalist 2025"
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* Action Buttons - Fixed positioning */}
            <div className="flex gap-4 pt-2 md:pt-0">
              <Link href="/core-values" className="bg-[#5ae0f6] border border-[#5ae0f6] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl hover:bg-[#4dd0e6] transition-colors">
                <span className="font-medium text-[#00050a] text-base leading-[1.5] whitespace-nowrap">
                  Learn More
                </span>
              </Link>
              <Link href="/contact-us" className="border border-[#5ae0f6] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl hover:bg-[#5ae0f6] hover:text-[#00050a] transition-colors">
                <span className="font-medium text-[#5ae0f6] text-base leading-[1.5] whitespace-nowrap">
                  Scale Now
                </span>
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Logo Section */}
      <LogoSection />
      
      {/* Expertise Section */}
      <ImageOverlapSection
        title="Specialised Engineering and Delivery Expertise"
        description="At Software at Scale, we are dedicated to driving digital acceleration for enterprises through innovative technology solutions. Our mission is to enhance engineering performance and modernize legacy systems while minimizing risk."
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
