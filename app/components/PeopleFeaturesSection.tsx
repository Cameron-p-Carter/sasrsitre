import Image from 'next/image';

// SVG assets from Figma context
const ICON_ENGINEERING = "/images/icons/engineering.svg"; // Placeholder path
const ICON_CLOUD = "/images/icons/cloud.svg"; // Placeholder path
const ICON_SECURITY = "/images/icons/security.svg"; // Placeholder path

const PeopleFeaturesSection = () => {
  const features = [
    {
      icon: ICON_ENGINEERING,
      title: "Our Engineering Excellence at Your Service",
      description: "Our engineering team is dedicated to delivering innovative solutions tailored to your unique challenges.",
    },
    {
      icon: ICON_CLOUD,
      title: "Cloud Solutions for Modern Businesses",
      description: "We harness the power of cloud technology to enhance scalability and operational efficiency.",
    },
    {
      icon: ICON_SECURITY,
      title: "Robust Security for Your Peace of Mind",
      description: "Our security experts implement proactive measures to safeguard your business from threats.",
    },
  ];

  return (
    <section className="bg-[#006cc9] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-start">
        {/* Features Grid (Mobile: Stacked, Desktop: 3 Columns) */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-12 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-6 md:gap-8 w-full md:w-1/3 items-start">
              {/* Icon */}
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              
              {/* Content */}
              <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
                <h3 className="font-bold text-[#14d3f3] text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.24px] md:tracking-[-0.32px] w-full">
                  {feature.title}
                </h3>
                <p className="font-normal text-base leading-[1.5] text-white w-full">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PeopleFeaturesSection;