import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';

export default function ReferralProgramPage() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
      
      <main>
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