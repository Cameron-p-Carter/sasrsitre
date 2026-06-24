import Image from 'next/image';

const ProvenApproachSection = () => {
  const approaches = [
    {
      icon: "/images/icons/productivity.svg",
      title: "Executive Technology Leadership",
      description: "Experienced technology leaders who understand both strategy and delivery, remaining actively involved in outcomes.",
    },
    {
      icon: "/images/icons/delivery_truck_bolt.svg",
      title: "Proven Delivery In Regulated Industries",
      description: "A track record of successful delivery across banking, payments, superannuation, insurance and retail.",
    },
    {
      icon: "/images/icons/person_pin.svg",
      title: "Principal Engineering Expertise",
      description: "Senior engineers and architects with deep expertise in solving complex, high-stakes technology challenges.",
    },
    {
      icon: "/images/icons/modeling.svg",
      title: "Flexible Engagement Models",
      description: "From individual specialists to managed teams, we adapt to your delivery needs and engagement preferences.",
    }
  ];

  return (
    <section className="bg-[#cce1f4] flex flex-col items-center pb-[112px] pt-[112px] px-[64px] w-full">
      <div className="flex flex-col gap-[80px] items-center max-w-[1280px] w-full">
        {/* Section Title */}
        <div className="flex flex-col items-center max-w-[768px] w-full">
          <h2 className="font-bold text-[48px] leading-[1.2] text-[#0c2080] text-center tracking-[-0.48px] w-full">
            Why Enterprise Clients Choose Software@Scale
          </h2>
        </div>

        {/* Content */}
        <div className="flex gap-[48px] items-center w-full">
          {/* Left Column */}
          <div className="flex-[1_0_0] flex flex-col gap-[64px] items-center w-full">
            {/* 1 */}
            <div className="flex flex-col gap-[24px] items-center w-full">
              <div className="w-[48px] h-[48px] relative">
                <Image src={approaches[0].icon} alt={approaches[0].title} fill />
              </div>
              <div className="flex flex-col gap-[16px] items-center text-[#00050a] text-center w-full">
                <h3 className="font-bold text-[24px] leading-[1.4] tracking-[-0.24px] w-full">
                  {approaches[0].title}
                </h3>
                <p className="font-normal text-[16px] leading-[1.5] w-full">
                  {approaches[0].description}
                </p>
              </div>
            </div>
            {/* 2 */}
            <div className="flex flex-col gap-[24px] items-center w-full">
              <div className="w-[48px] h-[48px] relative">
                <Image src={approaches[1].icon} alt={approaches[1].title} fill />
              </div>
              <div className="flex flex-col gap-[16px] items-center text-[#00050a] text-center w-full">
                <h3 className="font-bold text-[24px] leading-[1.4] tracking-[-0.24px] w-full">
                  {approaches[1].title}
                </h3>
                <p className="font-normal text-[16px] leading-[1.5] w-full">
                  {approaches[1].description}
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative rounded-[16px] shrink-0 w-[540px] h-[540px] overflow-hidden">
            <Image
              src="/images/placeholder/placeholder160.jpg"
              alt="Our proven approach methodology"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="flex-[1_0_0] flex flex-col gap-[64px] items-center w-full">
            {/* 3 */}
            <div className="flex flex-col gap-[24px] items-center w-full">
              <div className="w-[48px] h-[48px] relative">
                <Image src={approaches[2].icon} alt={approaches[2].title} fill />
              </div>
              <div className="flex flex-col gap-[16px] items-center text-[#00050a] text-center w-full">
                <h3 className="font-bold text-[24px] leading-[1.4] tracking-[-0.24px] w-full">
                  {approaches[2].title}
                </h3>
                <p className="font-normal text-[16px] leading-[1.5] w-full">
                  {approaches[2].description}
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="flex flex-col gap-[24px] items-center w-full">
              <div className="w-[48px] h-[48px] relative">
                <Image src={approaches[3].icon} alt={approaches[3].title} fill />
              </div>
              <div className="flex flex-col gap-[16px] items-center text-[#00050a] text-center w-full">
                <h3 className="font-bold text-[24px] leading-[1.4] tracking-[-0.24px] w-full">
                  {approaches[3].title}
                </h3>
                <p className="font-normal text-[16px] leading-[1.5] w-full">
                  {approaches[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvenApproachSection;
