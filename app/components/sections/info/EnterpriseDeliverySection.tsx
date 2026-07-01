import Image from 'next/image';

const features = [
  {
    icon: "/images/icons/handyman.svg",
    title: "Engineering Teams",
    description: "Build high-performing engineering teams faster with individual specialists, cross-functional squads or ongoing engineering capability."
  },
  {
    icon: "/images/icons/bolt.svg",
    title: "Delivery Acceleration",
    description: "Recover delivery momentum and accelerate outcomes across delayed programs, technical debt and capability gaps."
  },
  {
    icon: "/images/icons/productivity_light.svg",
    title: "Technology Leadership",
    description: "Access experienced technology executives, architects and engineering leaders for critical decisions and transformation."
  },
  {
    icon: "/images/icons/automation1.svg",
    title: "Data & AI",
    description: "Build data foundations and deploy practical AI solutions that create measurable business outcomes."
  }
];

const EnterpriseDeliverySection = () => {
  return (
    <section className="bg-[#006cc9] flex flex-col items-center px-5 lg:px-16 py-16 lg:py-28 w-full">
      <div className="flex flex-col gap-12 lg:gap-20 max-w-[1280px] w-full">
        <h2 className="font-bold text-white text-[32px] lg:text-[40px] leading-[1.2] tracking-[-0.4px] text-center w-full">
          Services Built Around<br />Enterprise Delivery Needs
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-6 items-center">
              <div className="w-12 h-12 relative">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="font-bold text-[#14d3f3] text-[24px] leading-[1.3] text-center">
                {feature.title}
              </h3>
              <p className="font-normal text-white text-base leading-[1.5] text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseDeliverySection;
