interface DeliverableItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface CaseStudyDeliverablesGridProps {
  sectionTitle: string;
  sectionDescription: string;
  deliverables: DeliverableItem[];
  backgroundColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  deliverableTitleColor?: string;
  deliverableTextColor?: string;
}

const CaseStudyDeliverablesGrid = ({
  sectionTitle,
  sectionDescription,
  deliverables,
  backgroundColor = "bg-[#006cc9]",
  titleColor = "text-white",
  descriptionColor = "text-white",
  deliverableTitleColor = "text-[#5ae0f6]",
  deliverableTextColor = "text-white",
}: CaseStudyDeliverablesGridProps) => {
  return (
    <div className={`${backgroundColor} box-border flex flex-col gap-12 md:gap-20 items-center px-5 md:px-16 pb-16 md:pb-28 w-full`}>
      <div className="flex flex-col gap-12 md:gap-20 items-start max-w-[1280px] w-full">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start w-full">
          {/* Section Title */}
          <div className="flex flex-col gap-6 md:gap-8 items-start shrink-0 w-full md:w-[380px]">
            <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
              <div className={`flex flex-col gap-5 md:gap-6 items-start ${titleColor} w-full`}>
                <h2 className="font-['Montserrat',sans-serif] font-bold leading-[1.2] text-[36px] md:text-[48px] tracking-[-0.36px] md:tracking-[-0.48px] w-full">
                  {sectionTitle}
                </h2>
                <p className={`font-['Montserrat',sans-serif] font-normal leading-[1.5] text-[16px] md:text-[18px] ${descriptionColor} w-full`}>
                  {sectionDescription}
                </p>
              </div>
            </div>
          </div>

          {/* Content Grid - Mobile: Single Column, Desktop: 2x2 Grid */}
          <div className="flex-1 flex flex-col gap-8 md:gap-16 items-start">
            {/* Mobile: Single Column Layout */}
            <div className="flex flex-col gap-8 md:hidden w-full">
              {deliverables.map((item, index) => (
                <div key={index} className="flex flex-col gap-3 items-start w-full">
                  <img src={item.iconSrc} alt="" className="w-12 h-12" />
                  <h3 className={`font-['Montserrat',sans-serif] font-bold leading-[1.4] text-[20px] tracking-[-0.2px] ${deliverableTitleColor} w-full`}>
                    {item.title}
                  </h3>
                  <p className={`font-['Montserrat',sans-serif] font-normal leading-[1.5] text-[16px] ${deliverableTextColor} w-full`}>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Desktop: 2x2 Grid Layout */}
            <div className="hidden md:flex flex-col gap-16 w-full">
              {/* First Row */}
              <div className="flex gap-12 items-start w-full">
                {deliverables.slice(0, 2).map((item, index) => (
                  <div key={index} className="flex-1 flex flex-col gap-6 items-start">
                    <img src={item.iconSrc} alt="" className="w-12 h-12" />
                    <h3 className={`font-['Montserrat',sans-serif] font-bold leading-[1.4] text-[24px] tracking-[-0.24px] ${deliverableTitleColor} w-full`}>
                      {item.title}
                    </h3>
                    <p className={`font-['Montserrat',sans-serif] font-normal leading-[1.5] text-[16px] ${deliverableTextColor} w-full`}>
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Second Row */}
              {deliverables.length > 2 && (
                <div className="flex gap-12 items-start w-full">
                  {deliverables.slice(2, 4).map((item, index) => (
                    <div key={index} className="flex-1 flex flex-col gap-6 items-start">
                      <img src={item.iconSrc} alt="" className="w-12 h-12" />
                      <h3 className={`font-['Montserrat',sans-serif] font-bold leading-[1.4] text-[24px] tracking-[-0.24px] ${deliverableTitleColor} w-full`}>
                        {item.title}
                      </h3>
                      <p className={`font-['Montserrat',sans-serif] font-normal leading-[1.5] text-[16px] ${deliverableTextColor} w-full`}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDeliverablesGrid;