import Header from '@/app/components/layout/Header';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import ImageOverlapSection from '@/app/components/sections/content/ImageOverlapSection';
import PeopleFeaturesSection from '@/app/components/sections/features/PeopleFeaturesSection';
import PeopleTeamSection from '@/app/components/sections/info/PeopleTeamSection';
import CoreValuesTestimonialSection from '@/app/components/sections/values/CoreValuesTestimonialSection';
import CoreCompetenciesSection from '@/app/components/sections/info/CoreCompetenciesSection';
import ServiceCapabilitiesSection from '@/app/components/sections/info/ServiceCapabilitiesSection';
import CTASection from '@/app/components/sections/cta/CTASection';
import Footer from '@/app/components/layout/Footer';

export default function PeoplePage() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
      
      {/* People Page Hero Section */}
      <main>
        <HeroHeaderSection
          imageSrc="/images/placeholder/placeholder18.jpg"
          tagline="Expertise"
          title="Leadership Built In The Organisations"
          titleHighlight="You Trust"
          description="Software@Scale was founded by technology leaders who have spent their careers building, scaling and transforming complex technology platforms across banking, payments, insurance, superannuation and digital businesses.&#10;&#10;Today, our leadership team combines executive experience with hands-on engineering capability to help clients solve difficult technology challenges and deliver outcomes with confidence."
          overlayOpacity={0.5}
          objectPosition="center"
        />
        <ImageOverlapSection
          title="Company Overview"
          description="At Software@Scale, we specialise in aligning technology strategy with business objectives, leveraging our expertise to drive innovation, efficiency and growth.

We work with large scale financial and commercial institutions to bolster their teams and provide critical expertise to turn around struggling projects and unblock complex technical challenges.

Our multi-disciplinary teams are industry experts in their fields, with specialised skills in all aspects of Software Engineering, Architecture, DevOps and Cybersecurity. They hit the ground running and do whatever it takes to achieve the outcomes."
          underImageSrc="/images/placeholder/placeholder161.jpg"
          overImageSrc="/images/placeholder/placeholder6ontop.jpg"
          primaryButtonText="Learn More"
          secondaryButtonText="Contact"
        />
        <CoreCompetenciesSection />
        <ServiceCapabilitiesSection />
        <PeopleFeaturesSection />
        <PeopleTeamSection />
        <CoreValuesTestimonialSection />
        <CTASection
          imageSrc="/images/placeholder/placeholder16.jpg"
          title="Join Our Talented Team"
          description="Transform your career with a team that pushes the boundaries of technology and innovation."
          primaryButtonText="Careers"
          primaryButtonUrl="/careers"
          secondaryButtonText="Contact"
        />
      </main>
      <Footer />
    </div>
  );
}