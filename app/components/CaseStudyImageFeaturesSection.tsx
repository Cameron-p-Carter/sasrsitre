import Image from 'next/image';

interface FeatureItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface CaseStudyImageFeaturesSectionProps {
  sectionTitle: string;
  features: FeatureItem[];
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  featureTitleColor: string;
  featureTextColor: string;
  imageOnRight?: boolean; // Default to image on right (false in Figma, so I'll default to false)
}

export default function CaseStudyImageFeaturesSection({
  sectionTitle,
  features,
  imageSrc,
  backgroundColor,
  titleColor,
  featureTitleColor,
  featureTextColor,
  imageOnRight = false,
}: CaseStudyImageFeaturesSectionProps) {
  
  const content = (
    <div className="flex flex-col gap-8 md:gap-12 items-start w-full md:w-1/2">
      <div className="flex flex-col gap-6 md:gap-8 items-start w-full">
        <h3 className={`font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] w-full ${titleColor}`}>
          {sectionTitle}
        </h3>
        
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-x-6 md:gap-y-12 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-3 items-start w-full">
              {/* Icon */}
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={feature.iconSrc}
                  alt={feature.title}
                  width={48}
                  height={48}
                  className="object-contain filter brightness-[2.5]" // Assuming icons need brightening on dark background
                />
              </div>
              
              {/* Content */}
                <p className={`font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] w-full ${featureTitleColor}`}>
                  {feature.title}
                </p>
                <p className={`font-normal text-base leading-[1.5] w-full ${featureTextColor}`}>
                  {feature.description}
                </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const image = (
    <div className="relative rounded-2xl w-full h-[348px] md:w-1/2 md:h-[420px]">
      <Image
        src={imageSrc}
        alt={sectionTitle}
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  );

  return (
    <section className={`${backgroundColor} px-5 md:px-16 py-16 md:py-28 w-full`}>
      <div className="max-w-[1280px] mx-auto">
        <div className={`flex flex-col gap-12 md:gap-[80px] items-start w-full ${imageOnRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {imageOnRight ? content : image}
          {imageOnRight ? image : content}
        </div>
      </div>
    </section>
  );
}