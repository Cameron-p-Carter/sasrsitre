interface Stat {
  value: string;
  description: string;
}

interface CaseStudyStatsSectionProps {
  sectionTitle: string;
  stats: Stat[];
  backgroundColor: string;
  titleColor: string;
  accentColor: string;
}

export default function CaseStudyStatsSection({
  sectionTitle,
  stats,
  backgroundColor,
  titleColor,
  accentColor,
}: CaseStudyStatsSectionProps) {
  return (
    <section className={`${backgroundColor} px-5 md:px-16 py-16 md:py-28 w-full`}>
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-center">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:gap-6 items-center max-w-[768px] w-full text-center">
          <h3 className={`font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.32px] md:tracking-[-0.4px] w-full ${titleColor}`}>
            {sectionTitle}
          </h3>
        </div>

        {/* Stats Grid (Mobile: Stacked, Desktop: 3 Columns with dividers) */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-0 w-full">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex flex-col gap-2 md:gap-4 w-full md:w-1/3 items-start md:items-center text-left md:text-center 
                ${index > 0 ? 'md:border-l border-gray-300 border-solid md:pl-8 lg:pl-12' : ''}
              `}
            >
              <p className={`font-extrabold text-[64px] md:text-[80px] leading-[1.3] ${accentColor} w-full`}>
                {stat.value}
              </p>
              <p className={`font-bold text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.2px] w-full ${titleColor}`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}