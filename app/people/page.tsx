import Header from '@/app/components/layout/Header';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import ImageOverlapSection from '@/app/components/sections/content/ImageOverlapSection';
import PeopleFeaturesSection from '@/app/components/sections/features/PeopleFeaturesSection';
import PeopleTeamSection from '@/app/components/sections/info/PeopleTeamSection';
import CoreValuesTestimonialSection from '@/app/components/sections/values/CoreValuesTestimonialSection';
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
          title="Meet Our"
          titleHighlight="Experts"
          description="At Software at Scale, our team comprises seasoned professionals with extensive backgrounds in technology consultancy. We are committed to providing cutting-edge solutions that empower our clients to thrive in a digital-first world."
          overlayOpacity={0.5}
        />
        <ImageOverlapSection
          title="Company Overview"
          description="At Software@Scale, we specialise in aligning technology strategy with business objectives, leveraging our expertise to drive innovation, efficiency and growth.

We work with large scale financial and commercial institutions to bolster their teams and provide critical expertise to turn around struggling projects and unblock complex technical challenges.

Our multi-disciplinary teams are industry experts in their fields, with specialised skills in all aspects of Software Engineering, Architecture, DevOps and Cybersecurity. They hit the ground running and do whatever it takes to achieve the outcomes."
          underImageSrc="/images/placeholder/placeholder19.jpg"
          overImageSrc="/images/placeholder/placeholder6ontop.jpg"
          primaryButtonText="Learn More"
          secondaryButtonText="Contact"
        />
        <PeopleFeaturesSection />
        <PeopleTeamSection />
        <CoreValuesTestimonialSection />
        <CTASection
          imageSrc="/images/placeholder/placeholder16.jpg"
          title="Join Our Talented Team"
          description="Transform your career with a team that pushes the boundaries of technology and innovation."
          primaryButtonText="Careers"
          secondaryButtonText="Contact"
        />
      </main>
      <Footer />
    </div>
  );
}