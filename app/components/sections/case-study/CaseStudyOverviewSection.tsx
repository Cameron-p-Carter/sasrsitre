interface DetailItem {
  label: string;
  value: string;
}

interface CaseStudyOverviewSectionProps {
  overviewTitle: string;
  details: DetailItem[];
  richTextContent: string;
  backgroundColor: string;
  titleColor: string;
  textColor:
  string;
}

export default function CaseStudyOverviewSection({
  overviewTitle,
  details,
  richTextContent,
  backgroundColor,
  titleColor,
  textColor,
}: CaseStudyOverviewSectionProps) {
  
  const paragraphs = richTextContent.split('\n\n');

  return (
    <section className={`${backgroundColor} px-5 md:px-16 py-16 md:py-28 w-full`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-[80px] items-start w-full">
          
          {/* Left Column: Overview Title (Fixed width on desktop) */}
          <div className="w-full md:w-[256px] flex-shrink-0">
            <h3 className={`font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.32px] md:tracking-[-0.4px] ${titleColor}`}>
              {overviewTitle}
            </h3>
          </div>
          
          {/* Right Column: Details and Rich Text Content */}
          <div className="flex flex-col gap-8 md:gap-12 flex-grow w-full">
            
            {/* Details List */}
            <div className="w-full border-b border-gray-300 border-solid">
              {details.map((item, index) => (
                <div key={index} className="flex items-center justify-between py-4 border-t border-gray-300 border-solid">
                  <p className={`font-bold text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.2px] ${textColor}`}>
                    {item.label}
                  </p>
                  <p className={`font-normal text-base leading-[1.5] text-right ${textColor}`}>
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Rich Text Content */}
            <div className="flex flex-col gap-4">
              {paragraphs.map((paragraph, index) => (
                <p key={index} className={`font-normal text-base leading-[1.5] ${textColor}`}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}