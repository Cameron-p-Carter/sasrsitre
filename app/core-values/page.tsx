import Header from '@/app/components/layout/Header';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import CoreValuesMissionSection from '@/app/components/sections/values/CoreValuesMissionSection';
import CoreValuesTestimonialSection from '@/app/components/sections/values/CoreValuesTestimonialSection';
import CoreValuesGridSection, { defaultCoreValues } from '@/app/components/sections/features/CoreValuesGridSection';
import ValuesSection from '@/app/components/sections/values/ValuesSection';
import CTASection from '@/app/components/sections/cta/CTASection';
import Footer from '@/app/components/layout/Footer';

const SECOND_CORE_VALUES_DATA = {
  title: "Our values make us a stronger team",
  description: "Our values define our culture and are the foundation of our success. They guide our decisions, shape our interactions, and inspire us to achieve excellence together.",
  values: [
    {
      icon: "/images/icons/speed_dark.svg",
      title: "Boost: Increasing velocity and productivity.",
      description: "Uplifting capabilities, processes and practices to build high performing teams that have the scale to meet market demands and stay ahead of the competition. We lift teams higher. We’re here to make an impact. That means helping every team we work with perform at their best - faster, smarter, and stronger. We share knowledge, refine processes, and bring energy that inspires growth. When we boost others, we all rise together. ",
    },
    {
      icon: "/images/icons/block_dark.svg",
      title: "Unblock: Removing obstacles to scale.",
      description: "By unblocking barriers, we ensure that projects can proceed smoothly and efficiently, allowing teams to focus on business growth, innovation and delivering value. We clear the way. Complex problems don’t intimidate us - they motivate us. When things get stuck, we lean in, ask the right questions, and find a path forward. We simplify, collaborate, and get things moving again, because progress doesn’t happen by waiting - it happens by unblocking. ",
    },
    {
      icon: "/images/icons/grading_dark.svg",
      title: "Safeguard: Ensuring data security and integrity.",
      description: "We safeguard critical data implementing robust security measures to protect against potential threats. We build with care. We take pride in doing things right. Our work protects data, systems, and people - and we treat that responsibility seriously. From secure code to reliable delivery, we safeguard the integrity of what we build. Quality and trust are never negotiable. ",
    },
  ],
};

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
          objectPosition="top"
        />
        <CoreValuesMissionSection />
        <CoreValuesTestimonialSection />
        <CoreValuesGridSection
          title="Our Core Values Shape Our Success"
          description="At Software@Scale, we don't just deliver projects - we empower people. Our values shape how we show up for our clients, our teams, and each other every single day."
          values={defaultCoreValues}
        />

        <ValuesSection />

        {/* Second Core Values Grid Section - Content to be fetched from Figma */}
        <CoreValuesGridSection
          title={SECOND_CORE_VALUES_DATA.title}
          description={SECOND_CORE_VALUES_DATA.description}
          values={SECOND_CORE_VALUES_DATA.values}
        />

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