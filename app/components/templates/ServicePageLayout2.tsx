import Header from '@/app/components/layout/Header';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import Footer from '@/app/components/layout/Footer';
import ImageTextSection from '@/app/components/shared/ImageTextSection';
import CoreValuesTestimonialSection from '@/app/components/sections/values/CoreValuesTestimonialSection';
import CoreValuesGridSection from '@/app/components/sections/features/CoreValuesGridSection';
import ServiceFeatureColumns from '@/app/components/sections/features/ServiceFeatureColumns';
import AwardsSection from '@/app/components/sections/stats/AwardsSection';
import ServiceStatsSection from '@/app/components/sections/stats/ServiceStatsSection';
import CaseStudySection from '@/app/components/sections/showcase/CaseStudySection';
import BlogSection from '@/app/components/sections/showcase/BlogSection';
import CTASection from '@/app/components/sections/cta/CTASection';
import ServiceFeaturesSection from '@/app/components/ServiceFeaturesSection';
import PortfolioSection from '@/app/components/sections/showcase/PortfolioSection';

interface HeroButton {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'link';
}

interface HeroSectionData {
  imageSrc: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  overlayOpacity: number;
  objectPosition?: string;
  buttons?: HeroButton[];
}

interface OutcomeItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface ImageTextContentSectionData {
  title: string;
  description: string;
  imageSrc: string;
  backgroundColor: string;
  textColor: string;
  titleColor: string;
  imageOnRight?: boolean;
  outcomeItems?: OutcomeItem[];
}

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

interface CenteredGridItem {
  icon: string;
  title: string;
  description: string;
}

interface CenteredContentSectionData {
  title: string;
  description: string;
  values: CenteredGridItem[];
  variant?: 'light' | 'dark';
}

interface CenteredHeaderData {
  title: string;
  description: string;
  backgroundColor?: string;
}

interface TestimonialData {
  quote: string;
  name: string;
  title: string;
}

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

interface ServicePageData {
  hero: HeroSectionData;
  imageTextContent?: ImageTextContentSectionData;
  centeredContent?: CenteredContentSectionData;
  centeredHeader?: CenteredHeaderData;
  showServiceFeatures?: boolean;
  imageTextContent2?: ImageTextContentSectionData;
  repeatCenteredSection?: boolean;
  imageTextContent3?: ImageTextContentSectionData;
  showPortfolio?: boolean;
  showAwards?: boolean;
  showBlog?: boolean;
  imageTextListContent?: ImageTextListSectionData;
  serviceFeatureColumns?: ServiceFeatureColumnsData;
  serviceStatsContent?: ServiceStatsSectionData;
  ctaSection?: CTASectionData;
  showTestimonial?: boolean;
  testimonialData?: TestimonialData;
}

interface ServicePageLayout2Props {
  data: ServicePageData;
}

const ServicePageLayout2 = ({ data }: ServicePageLayout2Props) => {
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
          buttons={data.hero.buttons}
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
            outcomeItems={data.imageTextContent.outcomeItems}
          />
        )}
        {data.centeredContent && (
          <CoreValuesGridSection
            title={data.centeredContent.title}
            description={data.centeredContent.description}
            values={data.centeredContent.values}
            variant={data.centeredContent.variant ?? 'light'}
          />
        )}
        {data.centeredHeader && (
          <section className={`${data.centeredHeader.backgroundColor ?? 'bg-[#006cc9]'} px-5 md:px-16 py-16 md:py-20 w-full`}>
            <div className="max-w-[1280px] mx-auto flex flex-col gap-5 md:gap-6 items-center text-center">
              <h2 className="font-bold text-white text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px]">
                {data.centeredHeader.title}
              </h2>
              <p className="font-normal text-white text-base md:text-lg leading-[1.5] max-w-[768px]">
                {data.centeredHeader.description}
              </p>
            </div>
          </section>
        )}
        {data.showServiceFeatures && <ServiceFeaturesSection />}
        {data.imageTextContent2 && (
          <ImageTextSection
            variant="simple"
            title={data.imageTextContent2.title}
            description={data.imageTextContent2.description}
            imageSrc={data.imageTextContent2.imageSrc}
            backgroundColor={data.imageTextContent2.backgroundColor}
            textColor={data.imageTextContent2.textColor}
            titleColor={data.imageTextContent2.titleColor}
            imageOnRight={data.imageTextContent2.imageOnRight}
            outcomeItems={data.imageTextContent2.outcomeItems}
          />
        )}
        {data.repeatCenteredSection && data.centeredHeader && (
          <section className={`${data.centeredHeader.backgroundColor ?? 'bg-[#006cc9]'} px-5 md:px-16 py-16 md:py-20 w-full`}>
            <div className="max-w-[1280px] mx-auto flex flex-col gap-5 md:gap-6 items-center text-center">
              <h2 className="font-bold text-white text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px]">
                {data.centeredHeader.title}
              </h2>
              <p className="font-normal text-white text-base md:text-lg leading-[1.5] max-w-[768px]">
                {data.centeredHeader.description}
              </p>
            </div>
          </section>
        )}
        {data.repeatCenteredSection && data.showServiceFeatures && <ServiceFeaturesSection />}
        {data.imageTextContent3 && (
          <ImageTextSection
            variant="simple"
            title={data.imageTextContent3.title}
            description={data.imageTextContent3.description}
            imageSrc={data.imageTextContent3.imageSrc}
            backgroundColor={data.imageTextContent3.backgroundColor}
            textColor={data.imageTextContent3.textColor}
            titleColor={data.imageTextContent3.titleColor}
            imageOnRight={data.imageTextContent3.imageOnRight}
            outcomeItems={data.imageTextContent3.outcomeItems}
          />
        )}
        {data.showTestimonial && (
          <CoreValuesTestimonialSection
            quote={data.testimonialData?.quote}
            name={data.testimonialData?.name}
            title={data.testimonialData?.title}
          />
        )}
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
        {data.showAwards !== false && <AwardsSection />}
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
        {data.showPortfolio ? (
          <PortfolioSection
            variant="dark"
            title="Proven Delivery"
            description="We've helped organisations across banking, payments, superannuation, retail and digital platforms solve complex technology challenges and strengthen engineering capability."
            viewAllButtonText="View all"
            projects={[
              {
                id: 1,
                title: "Coates Group",
                challenge: "Scale engineering capability across a global restaurant technology platform.",
                outcome: "Built and embedded a 45-person engineering capability supporting platform growth — 30+ countries supported.",
                numbers: "45+ person engineering capability\n30+ countries",
                image: "/images/placeholder/placeholder12.jpg",
                objectPosition: "top",
                link: "/collections/case-studies/coates-group",
              },
              {
                id: 2,
                title: "Commonwealth Bank of Australia",
                challenge: "Deliver large-scale digital banking initiatives across highly regulated environments.",
                outcome: "Supported engineering delivery across critical customer-facing platforms.",
                numbers: "45+ person engineering capability\n30+ countries",
                image: "/images/case/case19.png",
                objectPosition: "right",
                link: "/collections/case-studies/cba-netbank",
              },
              {
                id: 3,
                title: "National Australia Bank",
                challenge: "Accelerate cloud and platform engineering capability within a rapidly growing digital banking environment.",
                outcome: "Strengthened platform delivery and engineering capability.",
                numbers: "45+ person engineering capability\n30+ countries",
                image: "/images/case/case17.jpg",
                link: "/collections/case-studies/nab",
              },
              {
                id: 4,
                title: "GoFundraise",
                challenge: "Support international growth through modern cloud-native engineering capability.",
                outcome: "Delivered scalable platform capability supporting expansion and product innovation.",
                numbers: "45+ person engineering capability\n30+ countries",
                image: "/images/placeholder/placeholder14.jpg",
                link: "/collections/case-studies/gofundraise",
              },
            ]}
          />
        ) : (
          <CaseStudySection />
        )}
        {data.showBlog !== false && <BlogSection />}
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

export default ServicePageLayout2;
