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

      <main>
        <HeroHeaderSection
          imageSrc="/images/placeholder/placeholder18.jpg"
          tagline="Leadership"
          title="Leadership Built In The"
          titleHighlight="Organisations You Trust"
          description="Software@Scale was founded by technology leaders who have spent their careers building, scaling and transforming complex technology platforms across banking, payments, insurance, superannuation and digital businesses. Today, our leadership team combines executive experience with hands-on engineering capability to help clients solve difficult technology challenges and deliver outcomes with confidence."
          overlayOpacity={0.5}
          objectPosition="center"
          descriptionBelow={true}
        />

        {/* Why We Started Software@Scale */}
        <ImageOverlapSection
          title="Why We Started Software@Scale"
          description="After leading technology organisations and transformation programs inside large enterprises, we saw a gap between traditional consulting firms and what clients actually needed.

Organisations were often forced to choose between strategic consultants with limited delivery accountability and technical specialists without executive experience.

Software@Scale was founded to bridge that gap. We combine executive technology leadership, principal engineering expertise and hands-on delivery to help organisations solve difficult technology challenges and achieve meaningful outcomes."
          underImageSrc="/images/people/louis.jpg"
          overImageSrc="/images/people/patricia.jpg"
          primaryButtonText="Talk To A Technology Leader"
          secondaryButtonText="View Proven Delivery"
        />

        {/* Executive Technology Leadership */}
        <CoreCompetenciesSection />

        <ServiceCapabilitiesSection />

        {/* PeopleFeaturesSection uses defaults for people page */}
        <PeopleFeaturesSection />

        <PeopleTeamSection />

        <CoreValuesTestimonialSection />

        <CTASection
          imageSrc="/images/placeholder/placeholder16.jpg"
          title="Talk To A Technology Leader"
          description="Whether you're facing delivery pressure, capability gaps or critical technology decisions, Software@Scale can help."
          primaryButtonText="Talk To A Technology Leader"
          primaryButtonUrl="/contact-us"
          secondaryButtonText="View Proven Delivery"
        />
      </main>

      <Footer />
    </div>
  );
}
