import Header from '@/app/components/Header';
import HeroHeaderSection from '@/app/components/HeroHeaderSection';
import HistoryTimelineSection from '@/app/components/HistoryTimelineSection';
import Footer from '@/app/components/Footer';

export default function OurHistoryPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      {/* Our History Page Hero Section */}
      <main className="pt-[72px]">
        <HeroHeaderSection
          imageSrc="/images/placeholder/placeholder27.jpg"
          tagline="Heritage"
          title="Our Evolution"
          titleHighlight="Story"
          description="At Software at Scale, our journey has been marked by innovation and growth. From our founding to becoming an industry leader, we have consistently expanded our capabilities to meet the evolving needs of our clients."
          overlayOpacity={0.5}
        />
        <HistoryTimelineSection />
      </main>
      <Footer />
    </div>
  );
}