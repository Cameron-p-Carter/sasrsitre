import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CTASection from '@/app/components/CTASection';
import HeroHeaderSection from '@/app/components/HeroHeaderSection';
import CaseStudyOverviewSection from '@/app/components/CaseStudyOverviewSection';
import CaseStudyDeliverablesSection from '@/app/components/CaseStudyDeliverablesSection';
import CaseStudyImageFeaturesSection from '@/app/components/CaseStudyImageFeaturesSection';
import CaseStudyOutcomeSection from '@/app/components/CaseStudyOutcomeSection';
import CaseStudyStatsSection from '@/app/components/CaseStudyStatsSection';
import CoreValuesTestimonialSection from './CoreValuesTestimonialSection';

// --- Shared Data Structures ---

interface HeroSectionData {
  imageSrc: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  overlayOpacity: number;
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
  sectionTitle: string;
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

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

// --- Layout Data Structure ---

interface CaseStudyArticleData {
  hero: HeroSectionData;
  overview: CaseStudyOverviewData;
  deliverables: CaseStudyDeliverablesData;
  imageFeatures: CaseStudyImageFeaturesData;
  outcome: CaseStudyOutcomeData;
  stats: CaseStudyStatsData;
  cta: CTASectionData;
}

interface CaseStudyArticleLayoutProps {
  data: CaseStudyArticleData;
}

const CaseStudyArticleLayout = ({ data }: CaseStudyArticleLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      <main className="pt-[72px]">
        <HeroHeaderSection
          imageSrc={data.hero.imageSrc}
          tagline={data.hero.tagline}
          title={data.hero.title}
          titleHighlight={data.hero.titleHighlight}
          description={data.hero.description}
          overlayOpacity={data.hero.overlayOpacity}
        />
        
        <CaseStudyOverviewSection
          overviewTitle={data.overview.overviewTitle}
          details={data.overview.details}
          richTextContent={data.overview.richTextContent}
          backgroundColor={data.overview.backgroundColor}
          titleColor={data.overview.titleColor}
          textColor={data.overview.textColor}
        />
        
        <CaseStudyDeliverablesSection
          sectionTitle={data.deliverables.sectionTitle}
          sectionSubtitle={data.deliverables.sectionSubtitle}
          deliverables={data.deliverables.deliverables}
          backgroundColor={data.deliverables.backgroundColor}
          titleColor={data.deliverables.titleColor}
          subtitleColor={data.deliverables.subtitleColor}
          textColor={data.deliverables.textColor}
          iconColor={data.deliverables.iconColor}
        />
        
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

        <CoreValuesTestimonialSection
        />

        <CaseStudyStatsSection
          sectionTitle={data.stats.sectionTitle}
          stats={data.stats.stats}
          backgroundColor={data.stats.backgroundColor}
          titleColor={data.stats.titleColor}
          accentColor={data.stats.accentColor}
        />
        
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