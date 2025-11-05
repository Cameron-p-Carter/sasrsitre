import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import HeroHeaderSection from '@/app/components/HeroHeaderSection';

export default function ReferralProgramPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      <main className="pt-[72px]">
        <HeroHeaderSection
          imageSrc="/images/placeholder/placeholder25.jpg"
          tagline="Referral"
          title="Join Our"
          titleHighlight="Program"
          description="Unlock rewards by referring clients to our innovative technology solutions and services."
          overlayOpacity={0.6}
        />
      </main>
      
      <Footer />
    </div>
  );
}