import Image from 'next/image';

const ExpertiseSection = () => {
  return (
    <section className="bg-[#cce1f4] flex flex-col gap-20 items-center px-16 py-28 w-full">
      <div className="flex flex-col gap-20 max-w-[1280px] w-full">
        <div className="flex gap-16 items-center w-full">
          {/* Image Container */}
          <div className="flex-1 h-[532px] relative">
            {/* Main Background Image (placeholder5under - goes under) */}
            <div className="absolute h-[532px] left-0 right-[12.5%] top-0 rounded-2xl overflow-hidden">
              <Image
                src="/images/placeholder/placeholder5under.jpg"
                alt="Engineering team collaboration"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Overlapping Image (placeholder6ontop - goes on top) */}
            <div className="absolute left-[40.13%] right-0 top-16 aspect-[364/242] rounded-2xl overflow-hidden">
              <Image
                src="/images/placeholder/placeholder6ontop.jpg"
                alt="Technology solutions"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 flex flex-col gap-8">
            {/* Section Title */}
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col gap-6 w-full">
                <h2 className="font-bold text-[#0c2080] text-[48px] leading-[1.2] tracking-[-0.48px] w-full">
                  Specialised Engineering and Delivery Expertise
                </h2>
                <p className="font-normal text-[#00050a] text-[18px] leading-[1.5] w-full">
                  At Software at Scale, we are dedicated to driving digital acceleration for enterprises through innovative technology solutions. Our mission is to enhance engineering performance and modernize legacy systems while minimizing risk.
                </p>
              </div>
            </div>

            {/* Action Buttons */}
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
                  Contact
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
      </div>
    </section>
  );
};

export default ExpertiseSection;