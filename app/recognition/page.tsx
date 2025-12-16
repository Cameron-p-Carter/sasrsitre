import Header from '@/app/components/layout/Header';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import AwardsSection from '@/app/components/sections/stats/AwardsSection';
import EliteTalentSection from '@/app/components/sections/info/EliteTalentSection';
import ImageTextSection from '@/app/components/shared/ImageTextSection';
import CoreValuesTestimonialSection from '@/app/components/sections/values/CoreValuesTestimonialSection';
import CTASection from '@/app/components/sections/cta/CTASection';
import Footer from '@/app/components/layout/Footer';

export default function RecognitionPage() {
  return (
    <div className="min-h-screen bg-white">
        <Header />
      
      {/* Recognition Page Hero Section */}
      <main>
        <HeroHeaderSection
          imageSrc="/images/placeholder/placeholder20.jpg"
          tagline="Excellence"
          title="Celebrating Our"
          titleHighlight="Achievements"
          description="At Software at Scale, we take pride in our accolades that reflect our commitment to innovation and quality. Awards and recognitions not only validate our efforts but also inspire us to continue delivering exceptional solutions."
          overlayOpacity={0.6}
          objectPosition="center"
        />
        <AwardsSection />
        <EliteTalentSection hideLearnMore={true} />
        {/* 1. Back-to-back Winner - Deloitte Technology Fast 50 Rising Star 2024 and 2025 - BLUE BG - Text Left, Image Right */}
        <ImageTextSection variant="simple"
          title="Back-to-back Winner – Deloitte Technology Fast 50 Rising Star 2024 and 2025"
          description="Software@Scale is proud to be recognised for the second consecutive year as the Deloitte Technology Fast 50 Rising Star Winner for 2024 and 2025. This back-to-back achievement celebrates our consistent innovation, exceptional growth, and leading performance among Australia's most dynamic technology companies. Earning the top position two years running underscores our unwavering commitment to scaling sustainably, driving meaningful outcomes for our clients, and shaping the future of Australia's digital economy. These consecutive honours reflect not only our pace of progress but also our enduring vision - to build technology that delivers lasting impact and opportunity across the industry."
          imageSrc="/images/placeholder/placeholder25.jpg"
          backgroundColor="bg-[#006cc9]"
          textColor="text-white"
          titleColor="text-[#14d3f3]"
          imageOnRight={true}
        />
        {/* 2. Approved Supplier - NSW Government ICT Services Scheme - WHITE BG - Image Left, Text Right */}
        <ImageTextSection variant="simple"
          title="Approved Supplier – NSW Government ICT Services Scheme (SCM0020)"
          description="Software@Scale is a preferred supplier under the NSW Government ICT Services Scheme (Advanced Register), reflecting our proven ability to deliver secure, compliant and innovative technology solutions. We were approved across all nominated categories - from cloud engineering and software design to data analytics and AI - reinforcing our trusted reputation within the public sector."
          imageSrc="/images/placeholder/placeholder22.jpg"
          backgroundColor="bg-white"
          textColor="text-[#00050a]"
          titleColor="text-[#0c2080]"
          imageOnRight={false}
        />
        {/* 3. Approved Supplier - Federal Government ICT Digital & Cloud Marketplace Panels - BLUE BG - Text Left, Image Right */}
        <ImageTextSection variant="simple"
          title="Approved Supplier – Federal Government ICT Digital & Cloud Marketplace Panels"
          description="Software@Scale is an approved supplier on the Australian Government's Digital and Cloud Marketplace Panels, allowing federal agencies to directly engage us for ICT and digital services. Approved across every service category we applied for - including software engineering, architecture, cybersecurity and cloud consulting - this accreditation demonstrates our national capability to deliver complex, high-impact digital projects for government."
          imageSrc="/images/placeholder/placeholder21.jpg"
          backgroundColor="bg-[#006cc9]"
          textColor="text-white"
          titleColor="text-[#14d3f3]"
          imageOnRight={true}
        />
        {/* 4. Winner - Australia's Fastest Growing Business 2025 - WHITE BG - Image Left, Text Right */}
        <ImageTextSection variant="simple"
          title="Winner – Australia's Fastest Growing Business 2025"
          description="At the prestigious 2025 CUB Awards, Software@Scale proudly received the title of Australia's Fastest Growing Business. This national recognition is a celebration of exceptional entrepreneurial excellence, groundbreaking innovation, and remarkable expansion in the competitive landscape. Winning this award is a testament to the unwavering dedication of our talented team, the strong partnerships we have built with our clients, and our relentless pursuit of growth through innovative solutions and a steadfast commitment to customer success. We are excited to continue this journey and achieve even greater heights."
          imageSrc="/images/placeholder/placeholder24.jpg"
          backgroundColor="bg-white"
          textColor="text-[#00050a]"
          titleColor="text-[#0c2080]"
          imageOnRight={false}
        />
        {/* 5. Finalist - Atlassian Tech Leadership Awards 2025 - BLUE BG - Text Left, Image Right */}
        <ImageTextSection variant="simple"
          title="Finalist – Atlassian Tech Leadership Awards 2025"
          description="Software@Scale has proudly been named a finalist in the prestigious Atlassian Tech Leadership Awards 2025, which recognises exceptional leadership in the realms of technology, innovation, and organisational culture. This nomination not only highlights our commitment to delivering transformative digital solutions through Atlassian's robust ecosystem but also celebrates our dedication to empowering both teams and clients to achieve remarkable operational excellence at scale."
          imageSrc="/images/placeholder/placeholder23.jpg"
          backgroundColor="bg-[#006cc9]"
          textColor="text-white"
          titleColor="text-[#14d3f3]"
          imageOnRight={true}
        />
        {/* 6. Finalist - The CEO Magazine Executive of the Year Awards 2025 - WHITE BG - Image Left, Text Right */}
        <ImageTextSection variant="simple"
          title="Finalist – The CEO Magazine Executive of the Year Awards 2025"
          description="Our CEO and Co-Founder, Louis Droguett, has been proudly recognised as a finalist in The CEO Magazine's prestigious 2025 Executive of the Year Awards. These awards celebrate not only visionary leadership but also outstanding executive performance across the entire landscape of Australia. This remarkable recognition truly honours Louis's unwavering commitment to innovation, his people-first leadership approach, and the strategic direction that has been instrumental in guiding Software@Scale to its remarkable success."
          imageSrc="/images/placeholder/placeholder26.jpg"
          backgroundColor="bg-white"
          textColor="text-[#00050a]"
          titleColor="text-[#0c2080]"
          imageOnRight={false}
        />
        <CoreValuesTestimonialSection/>
        <CTASection
          imageSrc="/images/placeholder/placeholder16.jpg"
          title="Connect with Our Experts"
          description="Explore how our award-winning services can elevate your business to the next level."
          primaryButtonText="Contact"
          secondaryButtonText="Learn More"
        />
      </main>
      <Footer />
    </div>
  );
}