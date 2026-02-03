import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import CTASection from '@/app/components/sections/cta/CTASection';
import HeroHeaderSection from '@/app/components/sections/hero/HeroHeaderSection';
import CaseStudyOverviewSection from '@/app/components/sections/case-study/CaseStudyOverviewSection';
import CaseStudyDeliverablesSection from '@/app/components/sections/case-study/CaseStudyDeliverablesSection';
import CaseStudyImageFeaturesSection from '@/app/components/sections/case-study/CaseStudyImageFeaturesSection';
import CaseStudyOutcomeSection from '@/app/components/sections/case-study/CaseStudyOutcomeSection';
import CaseStudyStatsSection from '@/app/components/sections/stats/CaseStudyStatsSection';
import CoreValuesTestimonialSection from '@/app/components/sections/values/CoreValuesTestimonialSection';
import CaseStudyCustomSection from '@/app/components/sections/case-study/CaseStudyCustomSection';
import CaseStudySolutionSection from '@/app/components/sections/case-study/CaseStudySolutionSection';
import CaseStudyWhatWeDeliveredSection from '@/app/components/sections/case-study/CaseStudyWhatWeDeliveredSection';
import CaseStudySectionHeader from '@/app/components/sections/case-study/CaseStudySectionHeader';
import CaseStudyDeliverablesGrid from '@/app/components/sections/case-study/CaseStudyDeliverablesGrid';

// --- Shared Data Structures ---

interface HeroSectionData {
  imageSrc: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  overlayOpacity: number;
  descriptionBelow?: boolean;
  objectPosition?: string;
}

interface DetailItem {
  label: string;
  value: string;
}

interface CaseStudyOverviewData {
  overviewTitle: string;
  details: DetailItem[];
  richTextContent: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
}

interface Deliverable {
  iconSrc: string;
  title: string;
  description: string;
}

interface CaseStudyDeliverablesData {
  sectionTitle: string;
  sectionSubtitle: string;
  deliverables: Deliverable[];
  backgroundColor: string;
  titleColor: string;
  subtitleColor: string;
  textColor: string;
  iconColor: string;
  rows?: number;
}

interface FeatureItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface CaseStudyImageFeaturesData {
  sectionTitle: string;
  features: FeatureItem[];
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  featureTitleColor: string;
  featureTextColor: string;
  imageOnRight?: boolean;
}

interface Stat {
  value: string;
  description: string;
}

interface CaseStudyStatsData {
  title: string;
  technologiesContent?: string;
  stats: Stat[];
  backgroundColor: string;
  titleColor: string;
  accentColor: string;
}

interface OutcomeItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface CaseStudyOutcomeData {
  sectionTitle: string;
  outcomes: OutcomeItem[];
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  featureTitleColor: string;
  featureTextColor: string;
  imageOnRight?: boolean;
}

interface CustomSectionData {
  sectionTitle: string;
  description: string;
  listItems: string[];
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  listTextColor: string;
  imageOnRight?: boolean;
}

interface SolutionSectionData {
  sectionTitle: string;
  description: string;
  listItems: string[];
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  listTextColor: string;
  imageOnRight?: boolean;
}

interface WhatWeDeliveredItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface WhatWeDeliveredSectionData {
  sectionTitle: string;
  sectionDescription: string;
  deliverables: WhatWeDeliveredItem[];
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  deliverableTitleColor: string;
  deliverableTextColor: string;
}

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

interface TestimonialData {
  quote: string;
  name: string;
  title: string;
}

interface SectionHeaderData {
  title: string;
  description: string;
  backgroundColor?: string;
  textColor?: string;
}

interface DeliverableGridItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface DeliverablesGridData {
  sectionTitle: string;
  sectionDescription: string;
  deliverables: DeliverableGridItem[];
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  deliverableTitleColor?: string;
  deliverableTextColor?: string;
}

// --- Layout Data Structure ---

interface CaseStudyArticleData {
  hero: HeroSectionData;
  overview?: CaseStudyOverviewData;
  sectionHeader?: SectionHeaderData;
  deliverablesGrid?: DeliverablesGridData;
  deliverablesGrid2?: DeliverablesGridData;
  deliverables?: CaseStudyDeliverablesData;
  imageFeatures?: CaseStudyImageFeaturesData;
  outcome?: CaseStudyOutcomeData;
  stats?: CaseStudyStatsData;
  customSection?: CustomSectionData;
  solutionSection?: SolutionSectionData;
  whatWeDeliveredSection?: WhatWeDeliveredSectionData;
  testimonial?: TestimonialData;
  cta: CTASectionData;
}

interface CaseStudyArticleLayoutProps {
  data: CaseStudyArticleData;
}

const CaseStudyArticleLayout = ({ data }: CaseStudyArticleLayoutProps) => {
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
          descriptionBelow={data.hero.descriptionBelow}
          objectPosition={data.hero.objectPosition}
        />
        
        {data.overview && (
          <CaseStudyOverviewSection
            overviewTitle={data.overview.overviewTitle}
            details={data.overview.details}
            richTextContent={data.overview.richTextContent}
            backgroundColor={data.overview.backgroundColor}
            titleColor={data.overview.titleColor}
            textColor={data.overview.textColor}
          />
        )}

        {data.sectionHeader && (
          <CaseStudySectionHeader
            title={data.sectionHeader.title}
            description={data.sectionHeader.description}
            backgroundColor={data.sectionHeader.backgroundColor}
            textColor={data.sectionHeader.textColor}
          />
        )}

        {data.deliverablesGrid && (
          <CaseStudyDeliverablesGrid
            sectionTitle={data.deliverablesGrid.sectionTitle}
            sectionDescription={data.deliverablesGrid.sectionDescription}
            deliverables={data.deliverablesGrid.deliverables}
            backgroundColor={data.deliverablesGrid.backgroundColor}
            titleColor={data.deliverablesGrid.titleColor}
            descriptionColor={data.deliverablesGrid.descriptionColor}
            deliverableTitleColor={data.deliverablesGrid.deliverableTitleColor}
            deliverableTextColor={data.deliverablesGrid.deliverableTextColor}
          />
        )}

        {data.deliverablesGrid2 && (
          <CaseStudyDeliverablesGrid
            sectionTitle={data.deliverablesGrid2.sectionTitle}
            sectionDescription={data.deliverablesGrid2.sectionDescription}
            deliverables={data.deliverablesGrid2.deliverables}
            backgroundColor={data.deliverablesGrid2.backgroundColor}
            titleColor={data.deliverablesGrid2.titleColor}
            descriptionColor={data.deliverablesGrid2.descriptionColor}
            deliverableTitleColor={data.deliverablesGrid2.deliverableTitleColor}
            deliverableTextColor={data.deliverablesGrid2.deliverableTextColor}
          />
        )}

       {data.customSection && (
         <CaseStudyCustomSection
           sectionTitle={data.customSection.sectionTitle}
           description={data.customSection.description}
           listItems={data.customSection.listItems}
           imageSrc={data.customSection.imageSrc}
           backgroundColor={data.customSection.backgroundColor}
           titleColor={data.customSection.titleColor}
           textColor={data.customSection.textColor}
           listTextColor={data.customSection.listTextColor}
           imageOnRight={data.customSection.imageOnRight}
         />
       )}

       {data.solutionSection && (
         <CaseStudySolutionSection
           sectionTitle={data.solutionSection.sectionTitle}
           description={data.solutionSection.description}
           listItems={data.solutionSection.listItems}
           imageSrc={data.solutionSection.imageSrc}
           backgroundColor={data.solutionSection.backgroundColor}
           titleColor={data.solutionSection.titleColor}
           textColor={data.solutionSection.textColor}
           listTextColor={data.solutionSection.listTextColor}
           imageOnRight={data.solutionSection.imageOnRight}
         />
       )}

       {data.whatWeDeliveredSection && (
         <CaseStudyWhatWeDeliveredSection
           sectionTitle={data.whatWeDeliveredSection.sectionTitle}
           sectionDescription={data.whatWeDeliveredSection.sectionDescription}
           deliverables={data.whatWeDeliveredSection.deliverables}
           backgroundColor={data.whatWeDeliveredSection.backgroundColor}
           titleColor={data.whatWeDeliveredSection.titleColor}
           descriptionColor={data.whatWeDeliveredSection.descriptionColor}
           deliverableTitleColor={data.whatWeDeliveredSection.deliverableTitleColor}
           deliverableTextColor={data.whatWeDeliveredSection.deliverableTextColor}
         />
       )}
       
       {data.deliverables && (
          <CaseStudyDeliverablesSection
            sectionTitle={data.deliverables.sectionTitle}
            sectionSubtitle={data.deliverables.sectionSubtitle}
            deliverables={data.deliverables.deliverables}
            backgroundColor={data.deliverables.backgroundColor}
            titleColor={data.deliverables.titleColor}
            subtitleColor={data.deliverables.subtitleColor}
            textColor={data.deliverables.textColor}
            iconColor={data.deliverables.iconColor}
            rows={data.deliverables.rows}
          />
        )}
        
        {data.imageFeatures && (
          <CaseStudyImageFeaturesSection
            sectionTitle={data.imageFeatures.sectionTitle}
            features={data.imageFeatures.features}
            imageSrc={data.imageFeatures.imageSrc}
            backgroundColor={data.imageFeatures.backgroundColor}
            titleColor={data.imageFeatures.titleColor}
            featureTitleColor={data.imageFeatures.featureTitleColor}
            featureTextColor={data.imageFeatures.featureTextColor}
            imageOnRight={data.imageFeatures.imageOnRight}
          />
        )}
        
        {data.outcome && (
          <CaseStudyOutcomeSection
            sectionTitle={data.outcome.sectionTitle}
            outcomes={data.outcome.outcomes}
            imageSrc={data.outcome.imageSrc}
            backgroundColor={data.outcome.backgroundColor}
            titleColor={data.outcome.titleColor}
            featureTitleColor={data.outcome.featureTitleColor}
            featureTextColor={data.outcome.featureTextColor}
            imageOnRight={data.outcome.imageOnRight}
          />
        )}

        {data.testimonial && (
          <CoreValuesTestimonialSection
            quote={data.testimonial.quote}
            name={data.testimonial.name}
            title={data.testimonial.title}
          />
        )}

        {data.stats && (
          <CaseStudyStatsSection
            title={data.stats.title}
            technologiesContent={data.stats.technologiesContent}
            stats={data.stats.stats}
            backgroundColor={data.stats.backgroundColor}
            titleColor={data.stats.titleColor}
            accentColor={data.stats.accentColor}
          />
        )}
        
        <CTASection
          imageSrc={data.cta.imageSrc}
          title={data.cta.title}
          description={data.cta.description}
          primaryButtonText={data.cta.primaryButtonText}
          secondaryButtonText={data.cta.secondaryButtonText}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyArticleLayout;