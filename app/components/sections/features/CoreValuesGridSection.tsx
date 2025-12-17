import Image from 'next/image';

interface CoreValue {
  icon: string;
  title: string;
  description: string;
}

interface CoreValuesGridSectionProps {
  title: string;
  description: string;
  values: CoreValue[];
  variant?: 'light' | 'dark'; // Add variant prop
}

// SVG assets from Figma context
const ICON_COLLABORATION = "/images/icons/group_work.svg";
const ICON_INTEGRITY = "/images/icons/heart_plus.svg";
const ICON_INNOVATION = "/images/icons/explore.svg";

export const defaultCoreValues: CoreValue[] = [
  {
    icon: ICON_COLLABORATION, // Used for Collaborate
    title: "Collaborate: We win as one.",
    description: "We believe great work happens when we work together. Our teams integrate seamlessly with clients and with each other, sharing ideas, supporting growth, and celebrating wins along the way. We communicate openly and value every perspective because teamwork is our biggest strength.",
  },
  {
    icon: ICON_INTEGRITY, // Used for Own it
    title: "Own it: We step up.",
    description: "We take ownership - of our work, our impact, and our outcomes. We don’t pass the buck or wait for someone else to fix it. If something needs doing, we do it. Accountability builds trust, and trust builds great teams.",
  },
  {
    icon: ICON_INNOVATION, // Used for Innovate
    title: "Innovate: We stay curious.",
    description: "We love exploring new ideas, tools, and technologies that make us better. We experiment, learn, and evolve because standing still isn’t an option. Innovation is how we future-proof what we build and how we stay ahead as individuals and as a company.",
  },
];

const CoreValuesGridSection = ({ title, description, values, variant = 'light' }: CoreValuesGridSectionProps) => {
  const isDark = variant === 'dark';
  
  const sectionBgClass = isDark ? 'bg-[#006cc9]' : 'bg-[#cce1f4]';
  const titleColorClass = isDark ? 'text-white' : 'text-[#0c2080]';
  const descriptionColorClass = isDark ? 'text-white' : 'text-[#00050a]';
  const valueContentColorClass = isDark ? 'text-white' : 'text-[#00050a]';
  const iconColorClass = isDark ? 'text-[#5ae0f6]' : 'text-[#006cc9]';

  // Specific class for the highlighted part of the dark mode description
  const highlightClass = 'text-[#14d3f3]';

  const renderDescription = (desc: string) => {
    // Regex to split the description into three parts:
    // 1. Initial text (ends with a period, but not the highlighted one)
    // 2. The highlighted phrase (e.g., "We lift teams higher.")
    // 3. The remaining text (main body)
    const regex = /(.*?\.) (We lift teams higher\.|We clear the way\.|We build with care\.) (.*)/;
    const match = desc.match(regex);
    
    if (match && match.length === 4) {
      // match[1] is the initial text
      // match[2] is the bold phrase
      // match[3] is the main body
      
      return (
        <div className={`font-normal text-base leading-[1.5] w-full ${descriptionColorClass} flex flex-col gap-4`}>
          <p>{match[1].trim()}</p>
          <p className={`font-bold ${highlightClass}`}>{match[2].trim()}</p>
          <p>{match[3].trim()}</p>
        </div>
      );
    }
    
    // Fallback for unexpected format
    return (
      <p className={`font-normal text-base leading-[1.5] w-full ${descriptionColorClass}`}>
        {desc}
      </p>
    );
  };
  
  return (
    <section className={`${sectionBgClass} px-5 md:px-16 py-16 md:py-28 w-full`}>
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-center">
        {/* Section Title and Description */}
        <div className="flex flex-col gap-5 md:gap-6 items-center max-w-[768px] w-full text-center">
          <h2 className={`font-bold ${titleColorClass} text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full`}>
            {title}
          </h2>
          <p className={`font-normal text-base md:text-lg leading-[1.5] ${descriptionColorClass} w-full`}>
            {description}
          </p>
        </div>

        {/* Core Values Grid (Mobile: Stacked, Desktop: 3 Columns) */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-12 w-full">
          {values.map((value, index) => (
            <div key={index} className="flex flex-col gap-6 md:gap-8 items-center w-full md:w-1/3 text-center">
              {/* Icon */}
              <div className={`relative w-12 h-12 shrink-0 ${iconColorClass}`}>
                <Image
                  src={value.icon}
                  alt={value.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Content */}
              <div className={`flex flex-col gap-6 items-center ${valueContentColorClass} w-full`}>
                <h3 className={`font-bold text-[28px] md:text-[32px] leading-[1.3] tracking-[-0.28px] md:tracking-[-0.32px] w-full ${isDark ? 'text-[#5ae0f6]' : 'text-[#00050a]'}`}>
                  {value.title.split(': ')[0]}:<br /> {value.title.split(': ')[1]}
                </h3>
                {isDark ? (
                  renderDescription(value.description)
                ) : (
                  <p className="font-normal text-base leading-[1.5] w-full">
                    {value.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreValuesGridSection;