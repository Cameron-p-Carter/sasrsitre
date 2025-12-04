import Header from '@/app/components/layout/Header';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import HistoryTimelineSection from '@/app/components/sections/timeline/HistoryTimelineSection';
import HistoryFeaturesSection from '@/app/components/sections/features/HistoryFeaturesSection';
import CTASection from '@/app/components/sections/cta/CTASection';
import Footer from '@/app/components/layout/Footer';

export default function OurHistoryPage() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
      
      {/* Our History Page Hero Section */}
      <main>
        <HeroHeaderSection
          imageSrc="/images/placeholder/placeholder27.jpg"
          tagline="Heritage"
          title="Our Evolution"
          titleHighlight="Story"
          description="At Software at Scale, our journey has been marked by innovation and growth. From our founding to becoming an industry leader, we have consistently expanded our capabilities to meet the evolving needs of our clients."
          overlayOpacity={0.5}
        />
        <HistoryTimelineSection />
        <HistoryFeaturesSection />
        <CTASection
          imageSrc="/images/placeholder/placeholder16.jpg"
          title="Join Us on Our Journey"
          description="Discover how we are shaping the future of technology and partnerships at Software at Scale."
          primaryButtonText="Learn More"
          secondaryButtonText="Contact"
        />
      </main>
      <Footer />
    </div>
  );
}