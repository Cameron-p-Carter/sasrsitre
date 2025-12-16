import Link from 'next/link';
import Image from 'next/image';

const WhyChooseSection = () => {
  const features = [
    {
      icon: (
        <Image
          src="/images/icons/search_insights.svg"
          alt="Search insights icon"
          width={48}
          height={48}
        />
      ),
      title: "Experience the Difference with Our Tailored Solutions and Expertise",
      description: "We prioritise your business objectives to deliver impactful results."
    },
    {
      icon: (
        <Image
          src="/images/icons/design_services.svg"
          alt="Design services icon"
          width={48}
          height={48}
        />
      ),
      title: "Expert Problem Solvers Dedicated to Overcoming Your Challenges",
      description: "Our team excels at finding innovative solutions to complex problems."
    },
    {
      icon: (
        <Image
          src="/images/icons/travel_explore.svg"
          alt="Travel explore icon"
          width={48}
          height={48}
        />
      ),
      title: "Global Reach with Local Expertise for Every Project",
      description: "We operate on a global scale while understanding local markets."
    },
    {
      icon: (
        <Image
          src="/images/icons/interactive_space.svg"
          alt="Interactive space icon"
          width={48}
          height={48}
        />
      ),
      title: "Multi-disciplinary Teams Bringing Diverse Skills to Your Projects",
      description: "Our teams combine expertise from various fields to enhance project outcomes."
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
      title: "Scalable Solutions Designed to Grow with Your Business Needs",
      description: "We ensure that our solutions can adapt as your business evolves."
    },
    {
      icon: (
        <Image
          src="/images/icons/handyman.svg"
          alt="Handyman icon"
          width={48}
          height={48}
        />
      ),
      title: "Engineering Excellence at the Core of Everything We Do",
      description: "Our commitment to quality drives every aspect of our engineering processes."
    }
  ];

  return (
    <section className="bg-[#006cc9] flex flex-col gap-12 lg:gap-20 items-center px-5 lg:px-16 py-16 lg:py-28 w-full">
      <div className="flex flex-col gap-12 lg:gap-20 max-w-[1280px] w-full">
        {/* Main Heading */}
        <h2 className="font-bold text-white text-[32px] lg:text-[40px] leading-[1.2] tracking-[-0.32px] lg:tracking-[-0.4px] max-w-[768px] w-full lg:w-[768px]">
          Why Choose Software at Scale for Your Digital Transformation Needs?
        </h2>

        {/* Features - Mobile: Single column, Desktop: 2 rows of 3 */}
        <div className="flex flex-col gap-12 w-full">
          {/* Mobile: Single column stack */}
          <div className="flex lg:hidden flex-col gap-12 w-full">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-3 w-full">
                  <div className="w-12 h-12">
                    {feature.icon}
                  </div>
                  <h3 className="font-bold text-[#5ae0f6] text-[20px] leading-[1.4] tracking-[-0.2px] w-full">
                    {feature.title}
                  </h3>
                  <p className="font-normal text-white text-base leading-[1.5] w-full">
                    {feature.description}
                  </p>
                </div>
                <div className="flex flex-col gap-2 w-full">
                  <Link href="/people" className="flex items-start gap-2 rounded-xl overflow-hidden transition-opacity hover:opacity-70">
                    <span className="font-medium text-[#14d3f3] text-base leading-[1.5] whitespace-nowrap">
                      Learn More
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="#14d3f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Desktop: Original 2 rows of 3 columns layout */}
          <div className="hidden lg:flex flex-col gap-16 w-full">
            {/* Row 1 */}
            <div className="flex gap-12 justify-center w-full">
              {features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex-1 flex flex-col gap-8">
                  <div className="flex flex-col gap-6 w-full">
                    <div className="w-12 h-12">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-[#5ae0f6] text-[24px] leading-[1.4] tracking-[-0.24px] min-w-full">
                      {feature.title}
                    </h3>
                    <p className="font-normal text-white text-base leading-[1.5] min-w-full">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <Link href="/people" className="flex items-start gap-2 rounded-xl overflow-hidden transition-opacity hover:opacity-70">
                      <span className="font-medium text-[#14d3f3] text-base leading-[1.5] whitespace-nowrap">
                        Learn More
                      </span>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 18L15 12L9 6" stroke="#14d3f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Row 2 */}
            <div className="flex gap-12 justify-center w-full">
              {features.slice(3, 6).map((feature, index) => (
                <div key={index + 3} className="flex-1 flex flex-col gap-8">
                  <div className="flex flex-col gap-6 w-full">
                    <div className="w-12 h-12">
                      {feature.icon}
                    </div>
                    <h3 className="font-bold text-[#5ae0f6] text-[24px] leading-[1.4] tracking-[-0.24px] min-w-full">
                      {feature.title}
                    </h3>
                    <p className="font-normal text-white text-base leading-[1.5] min-w-full">
                      {feature.description}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <Link href="/people" className="flex items-start gap-2 rounded-xl overflow-hidden transition-opacity hover:opacity-70">
                      <span className="font-medium text-[#14d3f3] text-base leading-[1.5] whitespace-nowrap">
                        Learn More
                      </span>
                      <div className="w-6 h-6 flex items-center justify-center">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 18L15 12L9 6" stroke="#14d3f3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;