import Image from 'next/image';

interface OutcomeItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface CaseStudyOutcomeSectionProps {
  sectionTitle: string;
  outcomes: OutcomeItem[];
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  featureTitleColor: string;
  featureTextColor: string;
  imageOnRight?: boolean; // Default to image on left (true in Figma, so I'll default to true)
}

export default function CaseStudyOutcomeSection({
  sectionTitle,
  outcomes,
  imageSrc,
  backgroundColor,
  titleColor,
  featureTitleColor,
  featureTextColor,
  imageOnRight = true,
}: CaseStudyOutcomeSectionProps) {
  
  const content = (
    <div className={`flex flex-col gap-8 md:gap-12 items-start justify-center w-full md:w-1/2 px-5 md:px-0 md:pl-[80px] py-16 md:py-28 order-1 ${imageOnRight ? 'md:order-1' : 'md:order-2'}`}>
      <div className="flex flex-col gap-6 md:gap-8 items-start max-w-[560px] w-full">
        <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
          {sectionTitle}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-6 md:gap-y-12 w-full">
          {outcomes.map((outcome, index) => (
            <div key={index} className="flex flex-col gap-4 items-start w-full">
              {/* Icon */}
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={outcome.iconSrc}
                  alt={outcome.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-2 items-start w-full">
                <p className={`font-bold text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.2px] w-full ${featureTitleColor}`}>
                  {outcome.title}
                </p>
                <p className={`font-normal text-base leading-[1.5] w-full ${featureTextColor}`}>
                  {outcome.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const image = (
    <div className={`relative w-full md:w-1/2 min-h-[335px] md:min-h-[720px] order-2 ${imageOnRight ? 'md:order-2' : 'md:order-1'}`}>
      <Image
        src={imageSrc}
        alt={sectionTitle}
        fill
        className="object-cover"
      />
    </div>
  );

  return (
    <section className={`${backgroundColor} w-full`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-0 items-start w-full">
          {content}
          {image}
        </div>
      </div>
    </section>
  );
}