import Image from 'next/image';

const ProvenApproachSection = () => {
  const approaches = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 12H40V36C40 37.1046 39.1046 38 38 38H10C8.89543 38 8 37.1046 8 36V12Z" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M16 8V16" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 8V16" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M8 20H40" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Agile Development Process",
      description: "We utilize agile methodologies to enhance flexibility and responsiveness throughout the project lifecycle."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="8" stroke="#5ae0f6" strokeWidth="2"/>
          <path d="M30 8C30 8 34 12 34 20S30 32 30 32" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M38 12C38 12 42 16 42 24S38 36 38 36" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Data-Driven Decisions",
      description: "We leverage data analytics to inform strategies and optimize outcomes for our clients."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 20C16 16.6863 18.6863 14 22 14H26C29.3137 14 32 16.6863 32 20V28C32 31.3137 29.3137 34 26 34H22C18.6863 34 16 31.3137 16 28V20Z" stroke="#5ae0f6" strokeWidth="2"/>
          <path d="M8 20V28C8 31.3137 10.6863 34 14 34" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M40 20V28C40 31.3137 37.3137 34 34 34" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Collaborative Team Dynamics",
      description: "Our multi-disciplinary teams collaborate closely to drive innovation and ensure project success."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="10" stroke="#5ae0f6" strokeWidth="2"/>
          <path d="M24 8V12" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 36V40" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M40 24H36" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 24H8" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Continuous Improvement",
      description: "We focus on iterative enhancements to refine processes and deliver superior results."
    }
  ];

  return (
    <section className="bg-[#006cc9] flex flex-col gap-20 items-center px-16 py-28 w-full">
      <div className="flex flex-col gap-20 items-center max-w-[1280px] w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-4 items-center max-w-[768px] w-full">
          <div className="flex flex-col gap-6 items-center text-white text-center w-full">
            <h2 className="font-bold text-[48px] leading-[1.2] tracking-[-0.48px] w-full">
              Our Proven Approach to Delivering Excellence
            </h2>
            <p className="font-normal text-[18px] leading-[1.5] w-full">
              At Software at Scale, we employ a structured methodology that ensures optimal results for our clients. Our approach combines industry best practices with innovative solutions tailored to specific business needs.
            </p>
          </div>
        </div>

        {/* Content Layout */}
        <div className="flex gap-12 items-center w-full">
          {/* Left Column */}
          <div className="flex-1 flex flex-col gap-16 items-center">
            {/* Agile Development Process */}
            <div className="flex flex-col gap-6 items-center w-full">
              <div className="w-12 h-12">
                {approaches[0].icon}
              </div>
              <div className="flex flex-col gap-4 items-center text-center w-full">
                <h3 className="font-bold text-[#5ae0f6] text-[24px] leading-[1.4] tracking-[-0.24px] w-full">
                  {approaches[0].title}
                </h3>
                <p className="font-normal text-white text-base leading-[1.5] w-full">
                  {approaches[0].description}
                </p>
              </div>
            </div>

            {/* Collaborative Team Dynamics */}
            <div className="flex flex-col gap-6 items-center w-full">
              <div className="w-12 h-12">
                {approaches[2].icon}
              </div>
              <div className="flex flex-col gap-4 items-center text-center w-full">
                <h3 className="font-bold text-[#5ae0f6] text-[24px] leading-[1.4] tracking-[-0.24px] w-full">
                  {approaches[2].title}
                </h3>
                <p className="font-normal text-white text-base leading-[1.5] w-full">
                  {approaches[2].description}
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="relative w-[540px] h-[540px] rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src="/images/placeholder/placeholder10.jpg"
              alt="Our proven approach methodology"
              fill
              className="object-cover"
            />
          </div>

          {/* Right Column */}
          <div className="flex-1 flex flex-col gap-16 items-center">
            {/* Data-Driven Decisions */}
            <div className="flex flex-col gap-6 items-center w-full">
              <div className="w-12 h-12">
                {approaches[1].icon}
              </div>
              <div className="flex flex-col gap-4 items-center text-center w-full">
                <h3 className="font-bold text-[#5ae0f6] text-[24px] leading-[1.4] tracking-[-0.24px] w-full">
                  {approaches[1].title}
                </h3>
                <p className="font-normal text-white text-base leading-[1.5] w-full">
                  {approaches[1].description}
                </p>
              </div>
            </div>

            {/* Continuous Improvement */}
            <div className="flex flex-col gap-6 items-center w-full">
              <div className="w-12 h-12">
                {approaches[3].icon}
              </div>
              <div className="flex flex-col gap-4 items-center text-center w-full">
                <h3 className="font-bold text-[#5ae0f6] text-[24px] leading-[1.4] tracking-[-0.24px] w-full">
                  {approaches[3].title}
                </h3>
                <p className="font-normal text-white text-base leading-[1.5] w-full">
                  {approaches[3].description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-4 items-start">
          <button className="bg-[#5ae0f6] border border-[#5ae0f6] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl">
            <span className="font-medium text-[#00050a] text-base leading-[1.5] whitespace-nowrap">
              Learn More
            </span>
          </button>
          <button className="border border-[#5ae0f6] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl">
            <span className="font-medium text-[#5ae0f6] text-base leading-[1.5] whitespace-nowrap">
              Scale Now
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProvenApproachSection;