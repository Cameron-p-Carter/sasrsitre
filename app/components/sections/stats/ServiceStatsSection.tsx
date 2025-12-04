interface Stat {
  value: string;
  description: string;
}

interface ServiceStatsSectionProps {
  title: string;
  listItems: string[];
  stats: Stat[];
  backgroundColor: string;
  textColor: string;
  titleColor: string;
  accentColor: string;
}

const ServiceStatsSection = ({
  title,
  listItems,
  stats,
  backgroundColor,
  textColor,
  titleColor,
  accentColor,
}: ServiceStatsSectionProps) => {
  return (
    <section className={`${backgroundColor} px-5 md:px-16 py-16 md:py-28 w-full`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-[80px] items-start w-full">
          
          {/* Left Column: Content List */}
          <div className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2 items-start">
            <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
              <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
                {title}
              </h2>
              <ul className={`list-disc list-inside space-y-4 font-normal text-base md:text-lg leading-[1.5] w-full ${textColor}`}>
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Right Column: Stats */}
          <div className="flex flex-col gap-12 md:gap-12 w-full md:w-1/2 items-start md:pl-[80px] md:border-l border-solid border-gray-300">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-2 items-start w-full">
                <p className={`font-extrabold text-[64px] md:text-[80px] leading-[1.3] ${accentColor} w-full`}>
                  {stat.value}
                </p>
                <p className={`font-bold text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.2px] w-full ${textColor}`}>
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceStatsSection;