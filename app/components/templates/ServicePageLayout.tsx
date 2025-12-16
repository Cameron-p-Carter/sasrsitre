import Header from '@/app/components/layout/Header';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import Footer from '@/app/components/layout/Footer';
import ImageTextSection from '@/app/components/shared/ImageTextSection';
import CoreValuesTestimonialSection from '@/app/components/sections/values/CoreValuesTestimonialSection';
import ServiceFeatureColumns from '@/app/components/sections/features/ServiceFeatureColumns';
import AwardsSection from '@/app/components/sections/stats/AwardsSection';
import ServiceStatsSection from '@/app/components/sections/stats/ServiceStatsSection';
import CaseStudySection from '@/app/components/sections/showcase/CaseStudySection';
import BlogSection from '@/app/components/sections/showcase/BlogSection';
import CTASection from '@/app/components/sections/cta/CTASection';

// Define the structure for the Hero section data
interface HeroSectionData {
  imageSrc: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  overlayOpacity: number;
  objectPosition?: string;
}

// Define the structure for the ImageTextContent section data
interface ImageTextContentSectionData {
  title: string;
  description: string;
  imageSrc: string;
  backgroundColor: string;
  textColor: string;
  titleColor: string;
  imageOnRight?: boolean;
}

// Define the structure for the ImageTextList section data
interface ImageTextListSectionData {
  title: string;
  introDescription: string;
  listTitle: string;
  listItems: string[];
  imageSrc: string;
  backgroundColor: string;
  textColor: string;
  titleColor: string;
  imageOnRight?: boolean;
}

// Define the structure for the ServiceFeatureColumns section data
interface FeatureColumn {
  iconSrc: string;
  title: string;
  content: string | string[];
}

interface ServiceFeatureColumnsData {
  columns: FeatureColumn[];
  backgroundColor: string;
  textColor: string;
  titleColor: string;
}

// Define the structure for the ServiceStats section data
interface Stat {
  value: string;
  description: string;
}

interface ServiceStatsSectionData {
  title: string;
  listItems: string[];
  stats: Stat[];
  backgroundColor: string;
  textColor: string;
  titleColor: string;
  accentColor: string;
}

// Define the overall page data structure (starting simple)
interface ServicePageData {
  hero: HeroSectionData;
  imageTextContent?: ImageTextContentSectionData;
  imageTextListContent?: ImageTextListSectionData;
  serviceFeatureColumns?: ServiceFeatureColumnsData;
  serviceStatsContent?: ServiceStatsSectionData;
  ctaSection?: CTASectionData;
  showTestimonial?: boolean;
}

// Define the structure for the CTA section data
interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

interface ServicePageLayoutProps {
  data: ServicePageData;
}

const ServicePageLayout = ({ data }: ServicePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <HeroHeaderSection
          imageSrc={data.hero.imageSrc}
          tagline={data.hero.tagline}
          title={data.hero.title}
          titleHighlight={data.hero.titleHighlight}
          description={data.hero.description}
          overlayOpacity={data.hero.overlayOpacity}
          objectPosition={data.hero.objectPosition}
        />
        {data.imageTextContent && (
          <ImageTextSection
            variant="simple"
            title={data.imageTextContent.title}
            description={data.imageTextContent.description}
            imageSrc={data.imageTextContent.imageSrc}
            backgroundColor={data.imageTextContent.backgroundColor}
            textColor={data.imageTextContent.textColor}
            titleColor={data.imageTextContent.titleColor}
            imageOnRight={data.imageTextContent.imageOnRight}
          />
        )}
        {data.showTestimonial && <CoreValuesTestimonialSection />}
        {data.imageTextListContent && (
          <ImageTextSection
            variant="list"
            title={data.imageTextListContent.title}
            introDescription={data.imageTextListContent.introDescription}
            listTitle={data.imageTextListContent.listTitle}
            listItems={data.imageTextListContent.listItems}
            imageSrc={data.imageTextListContent.imageSrc}
            backgroundColor={data.imageTextListContent.backgroundColor}
            textColor={data.imageTextListContent.textColor}
            titleColor={data.imageTextListContent.titleColor}
            imageOnRight={data.imageTextListContent.imageOnRight}
          />
        )}
        {data.serviceFeatureColumns && (
          <ServiceFeatureColumns
            columns={data.serviceFeatureColumns.columns}
            backgroundColor={data.serviceFeatureColumns.backgroundColor}
            textColor={data.serviceFeatureColumns.textColor}
            titleColor={data.serviceFeatureColumns.titleColor}
          />
        )}
        <AwardsSection />
        {data.serviceStatsContent && (
          <ServiceStatsSection
            title={data.serviceStatsContent.title}
            listItems={data.serviceStatsContent.listItems}
            stats={data.serviceStatsContent.stats}
            backgroundColor={data.serviceStatsContent.backgroundColor}
            textColor={data.serviceStatsContent.textColor}
            titleColor={data.serviceStatsContent.titleColor}
            accentColor={data.serviceStatsContent.accentColor}
          />
        )}
        <CaseStudySection />
        <BlogSection />
        {data.ctaSection && (
          <CTASection
            imageSrc={data.ctaSection.imageSrc}
            title={data.ctaSection.title}
            description={data.ctaSection.description}
            primaryButtonText={data.ctaSection.primaryButtonText}
            secondaryButtonText={data.ctaSection.secondaryButtonText}
          />
        )}
      </main>
      <Footer />
    </div>
  );
};

export default ServicePageLayout;