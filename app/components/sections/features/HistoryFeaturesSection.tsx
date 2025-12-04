import Image from 'next/image';

// SVG assets from Figma context
const ICON_CHEVRON_RIGHT = "/images/icons/chevron_right.svg"; // Placeholder path

const FEATURES_DATA = [
  {
    imageSrc: '/images/placeholder/placeholder32.jpg', // Placeholder image path
    title: 'Innovations That Have Transformed Our Approach to Client Solutions',
    description: 'Since our inception, we have embraced cutting-edge technologies to drive success.',
    buttonText: 'Learn More',
  },
  {
    imageSrc: '/images/placeholder/placeholder33.jpg', // Placeholder image path
    title: 'Key Partnerships That Enhance Our Service Offerings',
    description: 'Collaborations with industry leaders have strengthened our capabilities and reach.',
    buttonText: 'Join Us',
  },
  {
    imageSrc: '/images/placeholder/placeholder34.jpg', // Placeholder image path
    title: 'Our Commitment to Continuous Improvement and Innovation',
    description: 'We continually refine our processes to deliver exceptional results for clients.',
    buttonText: 'Contact',
  },
];

const HistoryFeaturesSection = () => {
  return (
    <section className="bg-[#006cc9] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-center">
        {/* Section Title */}
        <h2 className="font-bold text-white text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.32px] md:tracking-[-0.4px] max-w-[768px] text-center w-full">
          Milestones That Define Our Journey in Technology Consulting
        </h2>

        {/* Features Grid (Mobile: Stacked, Desktop: 3 Columns) */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-12 w-full">
          {FEATURES_DATA.map((feature, index) => (
            <div key={index} className="flex flex-col gap-6 md:gap-8 w-full md:w-1/3 items-center text-center overflow-hidden">
              {/* Image */}
              <div className="relative aspect-[335/198] md:aspect-[394.667/240] rounded-2xl w-full overflow-hidden">
                <Image
                  src={feature.imageSrc}
                  alt={feature.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-6 md:gap-8 w-full items-center">
                <div className="flex flex-col gap-3 md:gap-4 w-full items-center text-white">
                  <h3 className="font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] w-full">
                    {feature.title}
                  </h3>
                  <p className="font-normal text-base leading-[1.5] w-full">
                    {feature.description}
                  </p>
                </div>

                {/* Action Button */}
                <div className="flex flex-col gap-2 w-full items-center">
                  <button className="flex items-center justify-center gap-2 rounded-xl overflow-hidden">
                    <span className="font-medium text-[#14d3f3] text-base leading-[1.5] whitespace-nowrap">
                      {feature.buttonText}
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryFeaturesSection;