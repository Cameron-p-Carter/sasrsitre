import Header from '@/app/components/Header';
import HeroHeaderSection from '@/app/components/HeroHeaderSection';
import AwardsSection from '@/app/components/AwardsSection';
import EliteTalentSection from '@/app/components/EliteTalentSection';
import ImageTextContentSection from '@/app/components/ImageTextContentSection';
import CoreValuesTestimonialSection from '@/app/components/CoreValuesTestimonialSection';
import Footer from '@/app/components/Footer';

export default function RecognitionPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      {/* Recognition Page Hero Section */}
      <main className="pt-[72px]">
        <HeroHeaderSection
          imageSrc="/images/placeholder/placeholder20.jpg"
          tagline="Excellence"
          title="Celebrating Our"
          titleHighlight="Achievements"
          description="At Software at Scale, we take pride in our accolades that reflect our commitment to innovation and quality. Awards and recognitions not only validate our efforts but also inspire us to continue delivering exceptional solutions."
          overlayOpacity={0.6}
        />
        <AwardsSection />
        <EliteTalentSection />
        <ImageTextContentSection
          title="Approved Supplier - Federal Government ICT Digital & Cloud Marketplace Panels"
          description="Software@Scale is an approved supplier on the Australian Government’s Digital and Cloud Marketplace Panels, allowing federal agencies to directly engage us for ICT and digital services. Approved across every service category we applied for - including software engineering, architecture, cybersecurity and cloud consulting - this accreditation demonstrates our national capability to deliver complex, high-impact digital projects for government."
          imageSrc="/images/placeholder/placeholder21.jpg"
          backgroundColor="bg-[#006cc9]"
          textColor="text-white"
          titleColor="text-[#14d3f3]"
        />
        <ImageTextContentSection
          title="Approved Supplier - NSW Government ICT Services Scheme (SCM0020)"
          description="Software@Scale is a preferred supplier under the NSW Government ICT Services Scheme (Advanced Register), reflecting our proven ability to deliver secure, compliant and innovative technology solutions. We were approved across all nominated categories - from cloud engineering and software design to data analytics and AI - reinforcing our trusted reputation within the public sector."
          imageSrc="/images/placeholder/placeholder22.jpg"
          backgroundColor="bg-[#cce1f4]"
          textColor="text-[#00050a]"
          titleColor="text-[#0c2080]"
          imageOnRight={false}
        />
        <ImageTextContentSection
          title="Finalist - Atlassian Tech Leadership Awards 2025"
          description="Software@Scale has proudly been named a finalist in the prestigious Atlassian Tech Leadership Awards 2025, which recognises exceptional leadership in the realms of technology, innovation, and organisational culture. This nomination not only highlights our commitment to delivering transformative digital solutions through Atlassian’s robust ecosystem but also celebrates our dedication to empowering both teams and clients to achieve remarkable operational excellence at scale."
          imageSrc="/images/placeholder/placeholder23.jpg"
          backgroundColor="bg-[#006cc9]"
          textColor="text-white"
          titleColor="text-[#14d3f3]"
        />
        <ImageTextContentSection
          title="Winner - Australia’s Fastest Growing Business 2025"
          description="At the prestigious 2025 CUB Awards, Software@Scale proudly received the title of Australia’s Fastest Growing Business. This national recognition is a celebration of exceptional entrepreneurial excellence, groundbreaking innovation, and remarkable expansion in the competitive landscape. Winning this award is a testament to the unwavering dedication of our talented team, the strong partnerships we have built with our clients, and our relentless pursuit of growth through innovative solutions and a steadfast commitment to customer success. We are excited to continue this journey and achieve even greater heights."
          imageSrc="/images/placeholder/placeholder24.jpg"
          backgroundColor="bg-[#cce1f4]"
          textColor="text-[#00050a]"
          titleColor="text-[#0c2080]"
          imageOnRight={false}
        />
        <ImageTextContentSection
          title="Winner - Deloitte Technology Fast 50 Rising Star 2024"
          description="Software@Scale has proudly secured the top position in Australia as the 2024 Deloitte Technology Fast 50 Rising Star Winner. This prestigious recognition celebrates our extraordinary growth and outstanding performance among the most promising emerging technology companies in the region. This remarkable achievement not only underscores our rapid pace of innovation but also highlights our unwavering ability to scale sustainably. Furthermore, it reflects our deep commitment to shaping the future of Australia’s technology landscape, paving the way for new advancements and opportunities in the industry."
          imageSrc="/images/placeholder/placeholder25.jpg"
          backgroundColor="bg-[#006cc9]"
          textColor="text-white"
          titleColor="text-[#14d3f3]"
        />
        <ImageTextContentSection
          title="Finalist - The CEO Magazine Executive of the Year Awards 2025"
          description="Our CEO and Co-Founder, Louis Droguett, has been proudly recognised as a finalist in The CEO Magazine’s prestigious 2025 Executive of the Year Awards. These awards celebrate not only visionary leadership but also outstanding executive performance across the entire landscape of Australia. This remarkable recognition truly honours Louis’s unwavering commitment to innovation, his people-first leadership approach, and the strategic direction that has been instrumental in guiding Software@Scale to its remarkable success."
          imageSrc="/images/placeholder/placeholder26.jpg"
          backgroundColor="bg-[#cce1f4]"
          textColor="text-[#00050a]"
          titleColor="text-[#0c2080]"
          imageOnRight={false}
        />
        <CoreValuesTestimonialSection/>
      </main>
      <Footer />
    </div>
  );
}