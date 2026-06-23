import Image from 'next/image';

const WhyChooseSection = () => {
  const features = [
    {
      icon: (
        <Image
          src="/images/icons/diversity_1.svg"
          alt="Leadership icon"
          width={48}
          height={48}
        />
      ),
      title: "Executive Technology Leadership",
      description: "Experienced technology leaders who understand both strategy and delivery, remaining actively involved in outcomes."
    },
    {
      icon: (
        <Image
          src="/images/icons/engineering.svg"
          alt="Engineering icon"
          width={48}
          height={48}
        />
      ),
      title: "Principal Engineering Expertise",
      description: "Senior engineers and architects with deep expertise in solving complex, high-stakes technology challenges."
    },
    {
      icon: (
        <Image
          src="/images/icons/monitoring.svg"
          alt="Monitoring icon"
          width={48}
          height={48}
        />
      ),
      title: "Proven Delivery In Regulated Industries",
      description: "A track record of successful delivery across banking, payments, superannuation, insurance and retail."
    },
    {
      icon: (
        <Image
          src="/images/icons/expand.svg"
          alt="Expand icon"
          width={48}
          height={48}
        />
      ),
      title: "Flexible Engagement Models",
      description: "From individual specialists to managed teams, we adapt to your delivery needs and engagement preferences."
    }
  ];

  return (
    <section className="bg-[#006cc9] flex flex-col gap-12 lg:gap-20 items-center px-5 lg:px-16 py-16 lg:py-28 w-full">
      <div className="flex flex-col gap-12 lg:gap-20 max-w-[1280px] w-full">
        {/* Main Heading */}
        <h2 className="font-bold text-white text-[32px] lg:text-[40px] leading-[1.2] tracking-[-0.32px] lg:tracking-[-0.4px] max-w-[768px] w-full lg:w-[768px]">
          Why Enterprise Clients Choose Software@Scale
        </h2>

        {/* Features - 2 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-6 w-full">
              <div className="flex flex-col gap-3 w-full">
                <div className="w-12 h-12">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-[#5ae0f6] text-[20px] lg:text-[24px] leading-[1.4] tracking-[-0.2px] lg:tracking-[-0.24px] w-full">
                  {feature.title}
                </h3>
                <p className="font-normal text-white text-base leading-[1.5] w-full">
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

export default WhyChooseSection;