import Header from './components/Header';
import BlogSection from './components/BlogSection';
import LogoSection from './components/LogoSection';
import ExpertiseSection from './components/ExpertiseSection';
import AwardsSection from './components/AwardsSection';
import EliteTalentSection from './components/EliteTalentSection';
import WhyChooseSection from './components/WhyChooseSection';
import TransformingIdeasSection from './components/TransformingIdeasSection';
import ProvenApproachSection from './components/ProvenApproachSection';
import PortfolioSection from './components/PortfolioSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center px-16 py-0">
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
        <div className="relative z-10 w-full max-w-[1280px] flex flex-col gap-20">
          <div className="flex flex-col gap-8 max-w-[560px] w-full">
            {/* Content */}
            <div className="flex flex-col gap-6 h-[464px]">
              {/* Main Heading */}
              <h1 className="font-bold text-white text-[56px] leading-[1.2] tracking-[-0.56px] min-w-full">
                <span>
                  Building elite solutions for{' '}
                  <br />
                </span>
                <span className="text-[#5ae0f6]">elite businesses</span>
              </h1>
              
              {/* Description */}
              <p className="font-normal text-white text-[18px] leading-[1.5] min-w-full">
                At Software@Scale, we align technology strategy with your business goals to foster innovation and growth. Our expert team tackles complex challenges, ensuring your projects thrive and deliver exceptional results.
              </p>
              
              {/* Award Badges */}
              <div className="flex gap-[33px] h-[107px] w-[547px]">
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
            
            {/* Action Buttons */}
            <div className="flex gap-4">
              <button className="bg-[#5ae0f6] border border-[#5ae0f6] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl">
                <span className="font-medium text-[#00050a] text-base leading-[1.5] whitespace-nowrap">
                  Learn More
                </span>
              </button>
              <button className="border border-[#5ae0f6] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl">
                <span className="font-medium text-[#5ae0f6] text-base leading-[1.5] whitespace-nowrap">
                  Scale Now
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
      
      {/* Blog Section */}
      <BlogSection />
      
      {/* Logo Section */}
      <LogoSection />
      
      {/* Expertise Section */}
      <ExpertiseSection />
      
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
      <PortfolioSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
