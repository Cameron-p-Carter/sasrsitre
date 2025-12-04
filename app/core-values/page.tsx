import Header from '@/app/components/layout/Header';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import CoreValuesMissionSection from '@/app/components/sections/values/CoreValuesMissionSection';
import CoreValuesTestimonialSection from '@/app/components/sections/values/CoreValuesTestimonialSection';
import CoreValuesGridSection from '@/app/components/sections/features/CoreValuesGridSection';
import CTASection from '@/app/components/sections/cta/CTASection';
import Footer from '@/app/components/layout/Footer';

export default function CoreValuesPage() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
      
      {/* Core Values Content */}
      <main>
        <HeroHeaderSection
          imageSrc="/images/placeholder/placeholder17.jpg"
          tagline="Empower"
          title="Our Core"
          titleHighlight="Values"
          description="At Software at Scale, we are committed to driving innovation and excellence in every project. Our core values of integrity, collaboration, and customer focus guide our mission to empower businesses through technology."
          overlayOpacity={0.6}
        />
        <CoreValuesMissionSection />
        <CoreValuesTestimonialSection />
        <CoreValuesGridSection />
        <CTASection
          imageSrc="/images/placeholder/placeholder16.jpg"
          title="Unlock Your Business Potential"
          description="Discover how our expertise can drive your business forward and achieve your strategic objectives."
          primaryButtonText="Contact"
          secondaryButtonText="Learn More"
        />
      </main>
      <Footer />
    </div>
  );
}