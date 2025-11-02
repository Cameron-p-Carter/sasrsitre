import Image from 'next/image';

const TransformingIdeasSection = () => {
  const services = [
    {
      image: "/images/placeholder/placeholder7.jpg",
      title: "Agile Methodologies and Leadership for Success",
      description: "We implement agile practices that enhance project delivery and team collaboration."
    },
    {
      image: "/images/placeholder/placeholder8jpg.jpg",
      title: "Robust Cybersecurity and Compliance Solutions",
      description: "Our cybersecurity services protect your business from evolving threats."
    },
    {
      image: "/images/placeholder/placeholder9.jpg",
      title: "Comprehensive Cloud and Platform Monitoring Services",
      description: "We ensure your cloud infrastructure operates at peak performance."
    }
  ];

  return (
    <section className="bg-[#cce1f4] flex flex-col gap-20 items-center px-16 py-28 w-full">
      <div className="flex flex-col gap-20 max-w-[1280px] w-full">
        {/* Section Header */}
        <div className="flex flex-col gap-4 max-w-[768px] w-full">
          <div className="flex flex-col gap-6 w-full">
            <h2 className="font-bold text-[#0c2080] text-[48px] leading-[1.2] tracking-[-0.48px] w-full">
              Transforming Ideas into Digital Solutions
            </h2>
            <p className="font-normal text-[#00050a] text-[18px] leading-[1.5] w-full">
              At Software at Scale, we specialize in delivering tailored software solutions that meet the unique needs of our clients. Our expertise spans web, mobile, and custom software development, ensuring your digital transformation is seamless and effective.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col gap-16 w-full">
          <div className="flex gap-12 w-full">
            {services.map((service, index) => (
              <div key={index} className="flex-1 flex flex-col gap-8 overflow-hidden">
                {/* Service Image */}
                <div className="relative w-full aspect-[394.667/240] rounded-2xl overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Service Content */}
                <div className="flex flex-col gap-6 w-full">
                  <h3 className="font-bold text-[#0c2080] text-[32px] leading-[1.3] tracking-[-0.32px] w-full">
                    {service.title}
                  </h3>
                  <p className="font-normal text-[#00050a] text-base leading-[1.5] w-full">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-6 items-center">
          <div className="flex gap-6 items-center">
            <button className="bg-[#5ae0f6] border border-[#5ae0f6] border-solid rounded-xl">
              <div className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-inherit overflow-hidden">
                <span className="font-medium text-[#0c2080] text-base leading-[1.5] whitespace-nowrap">
                  Learn More
                </span>
              </div>
            </button>
            
            <button className="flex items-center justify-center gap-2 rounded-xl overflow-hidden">
              <span className="font-medium text-[#0c2080] text-base leading-[1.5] whitespace-nowrap">
                Get Started
              </span>
              <div className="w-6 h-6 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 18L15 12L9 6" stroke="#0c2080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformingIdeasSection;