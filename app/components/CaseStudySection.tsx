import Image from 'next/image';

const CASE_STUDIES = [
  {
    imageSrc: '/images/placeholder/placeholder38.jpg', // Placeholder for Team Super
    title: 'Team Super',
    description: 'Seamless Data Migration Underpins a Major Superannuation Merger.',
  },
  {
    imageSrc: '/images/placeholder/placeholder39.jpg', // Placeholder for Coates Group
    title: 'Coates Group',
    description: 'Engineering Acceleration for Global Market Leadership.',
  },
  {
    imageSrc: '/images/placeholder/placeholder40.jpg', // Placeholder for GoFundraise
    title: 'GoFundraise',
    description: 'Software@Scale delivers a world-class platform to support GoFundraise’s global growth.',
  },
];

const ICON_CHEVRON_RIGHT = "/images/icons/chevron_right.svg";

const CaseStudySection = () => {
  return (
    <section className="bg-[#006cc9] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[64px] items-start w-full">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-8 items-start md:items-end justify-between w-full">
          <div className="flex flex-col gap-4 md:gap-6 items-start max-w-[768px] w-full">
            <h2 className="font-bold text-white text-[40px] md:text-[48px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.48px] w-full">
              Our Successful Projects
            </h2>
            <p className="font-normal text-base md:text-lg leading-[1.5] text-white w-full">
              Explore our impactful case studies and client success stories.
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="flex flex-col gap-4 w-[155px] md:w-auto">
            <button className="border border-[#14d3f3] border-solid flex items-center justify-center px-6 py-2.5 rounded-xl w-full">
              <span className="font-medium text-[#14d3f3] text-base leading-[1.5] whitespace-nowrap">
                View all
              </span>
            </button>
          </div>
        </div>

        {/* Case Study Cards Grid */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {CASE_STUDIES.map((study, index) => (
            <div key={index} className="flex flex-col gap-6 w-full md:w-1/3 items-start">
              {/* Image */}
              <div className="relative aspect-[405.333/270] rounded-2xl w-full overflow-hidden">
                <Image
                  src={study.imageSrc}
                  alt={study.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-4 w-full items-start">
                <div className="flex flex-col gap-2 items-start text-white w-full">
                  <h3 className="font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] w-full">
                    {study.title}
                  </h3>
                  <p className="font-normal text-base leading-[1.5] w-full">
                    {study.description}
                  </p>
                </div>
                
                {/* Action Button */}
                <div className="flex items-center justify-center gap-2 rounded-xl overflow-hidden">
                  <span className="font-normal text-[#14d3f3] text-base leading-[1.5] whitespace-nowrap">
                    View project
                  </span>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Image
                      src={ICON_CHEVRON_RIGHT}
                      alt="Arrow"
                      width={24}
                      height={24}
                      className="object-contain filter brightness-[2.5]"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudySection;