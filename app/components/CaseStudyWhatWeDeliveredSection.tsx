import Image from 'next/image';

interface DeliverableItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface CaseStudyWhatWeDeliveredSectionProps {
  sectionTitle: string;
  sectionDescription: string;
  deliverables: DeliverableItem[];
  backgroundColor: string;
  titleColor: string;
  descriptionColor: string;
  deliverableTitleColor: string;
  deliverableTextColor: string;
}

export default function CaseStudyWhatWeDeliveredSection({
  sectionTitle,
  sectionDescription,
  deliverables,
  backgroundColor,
  titleColor,
  descriptionColor,
  deliverableTitleColor,
  deliverableTextColor,
}: CaseStudyWhatWeDeliveredSectionProps) {
  return (
    <section className={`${backgroundColor} w-full`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-28">
        <div className="flex flex-col gap-12 md:gap-20 items-center w-full">
          
          {/* Section Title */}
          <div className="flex flex-col gap-3 md:gap-4 items-center max-w-[768px] w-full text-center">
            <div className="flex flex-col gap-5 md:gap-6 items-center w-full">
              <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
                {sectionTitle}
              </h2>
              <p className={`font-normal text-base md:text-[18px] leading-[1.5] w-full ${descriptionColor}`}>
                {sectionDescription}
              </p>
            </div>
          </div>
          
          {/* Deliverables Grid */}
          <div className="flex flex-col gap-16 items-start w-full">
            <div className="flex flex-col md:flex-row gap-12 md:gap-8 items-center md:items-start justify-center w-full">
              {deliverables.map((deliverable, index) => (
                <div key={index} className="flex flex-col gap-5 md:gap-6 items-center flex-1 text-center">
                  {/* Icon */}
                  <div className="relative w-12 h-12 shrink-0">
                    <Image
                      src={deliverable.iconSrc}
                      alt={deliverable.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-3 md:gap-4 items-start w-full text-center">
                    <h3 className={`font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] w-full ${deliverableTitleColor}`}>
                      {deliverable.title}
                    </h3>
                    <p className={`font-normal text-base leading-[1.5] w-full ${deliverableTextColor}`}>
                      {deliverable.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Actions placeholder */}
          <div className="h-6 w-[89px]" />
        </div>
      </div>
    </section>
  );
}