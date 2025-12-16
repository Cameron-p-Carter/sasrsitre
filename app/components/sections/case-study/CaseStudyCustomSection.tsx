import Image from 'next/image';

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

interface CaseStudyCustomSectionProps extends CustomSectionData {}

export default function CaseStudyCustomSection({
  sectionTitle,
  description,
  listItems,
  imageSrc,
  backgroundColor,
  titleColor,
  textColor,
  listTextColor,
  imageOnRight = false, // Image on Left by default based on user request
}: CaseStudyCustomSectionProps) {
  
  // Mobile order: Content (order-1), Image (order-2)
  // Desktop order: Controlled by md:order based on imageOnRight prop
  const content = (
    <div className={`flex flex-col gap-6 md:gap-8 items-start justify-center w-full md:w-1/2 px-[64px] md:px-0 md:pl-[80px] md:pr-[64px] py-28 order-1 ${imageOnRight ? 'md:order-1' : 'md:order-2'}`}>
      <div className="flex flex-col gap-6 md:gap-8 items-start max-w-[560px] w-full">
        
        {/* Content */}
        <div className="flex flex-col gap-6 md:gap-8 items-start w-full">
          {/* Section Title */}
          <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
            <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
              <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
                {sectionTitle}
              </h2>
              <p className={`font-normal text-base md:text-[18px] leading-[1.5] w-full ${textColor}`}>
                {description}
              </p>
            </div>
          </div>
          
          {/* List */}
          <ul className="flex flex-col gap-4 items-start w-full list-disc pl-5 font-normal text-base leading-[1.5] text-[#00050a]">
            {listItems.map((item, index) => (
              <li key={index} className="pl-2">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );

  const image = (
    <div className={`relative w-full md:w-1/2 h-[375px] md:h-auto order-2 ${imageOnRight ? 'md:order-2' : 'md:order-1'}`}>
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
        <div className="flex flex-col md:flex-row gap-0 items-start md:items-stretch w-full">
          {/* Render content and image sequentially, relying on order classes for positioning */}
          {content}
          {image}
        </div>
      </div>
    </section>
  );
}