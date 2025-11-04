import Header from '@/app/components/Header';
import HeroHeaderSection from '@/app/components/HeroHeaderSection';
import CoreValuesMissionSection from '@/app/components/CoreValuesMissionSection';
import CoreValuesTestimonialSection from '@/app/components/CoreValuesTestimonialSection';
import CoreValuesGridSection from '@/app/components/CoreValuesGridSection';
import CTASection from '@/app/components/CTASection';
import Footer from '@/app/components/Footer';

export default function CoreValuesPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      {/* Core Values Content */}
      <main className="pt-[72px]">
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