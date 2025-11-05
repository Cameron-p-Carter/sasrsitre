import Image from 'next/image';

interface Deliverable {
  iconSrc: string;
  title: string;
  description: string;
}

interface CaseStudyDeliverablesSectionProps {
  sectionTitle: string;
  sectionSubtitle: string;
  deliverables: Deliverable[];
  backgroundColor: string;
  titleColor: string;
  subtitleColor: string;
  textColor: string;
  iconColor: string; // Not strictly needed if icons are SVGs that can be filtered, but good practice
}

const CaseStudyDeliverablesSection = ({
  sectionTitle,
  sectionSubtitle,
  deliverables,
  backgroundColor,
  titleColor,
  subtitleColor,
  textColor,
}: CaseStudyDeliverablesSectionProps) => {
  return (
    <section className={`${backgroundColor} px-5 md:px-16 py-16 md:py-28 w-full`}>
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-center">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:gap-6 items-center max-w-[768px] w-full text-center">
          <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
            {sectionTitle}
          </h2>
          <p className={`font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] w-full ${subtitleColor}`}>
            {sectionSubtitle}
          </p>
        </div>

        {/* Deliverables Grid (Mobile: Stacked, Desktop: 4 Columns) */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-8 w-full">
          {deliverables.map((item, index) => (
            <div key={index} className="flex flex-col gap-6 md:gap-8 w-full md:w-1/4 items-start md:items-center text-left md:text-center">
              
              {/* Icon */}
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={item.iconSrc}
                  alt={item.title}
                  width={48}
                  height={48}
                  className="object-contain filter brightness-[2.5]" // Assuming icons need brightening on dark background
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-4 items-start md:items-center w-full">
                <h3 className={`font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] w-full ${subtitleColor}`}>
                  {item.title}
                </h3>
                <p className={`font-normal text-base leading-[1.5] w-full ${textColor}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudyDeliverablesSection;