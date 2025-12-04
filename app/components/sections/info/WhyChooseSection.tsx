import Link from 'next/link';

const WhyChooseSection = () => {
  const features = [
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 6H6C4.89543 6 4 6.89543 4 8V20C4 21.1046 4.89543 22 6 22H20C21.1046 22 22 21.1046 22 20V8C22 6.89543 21.1046 6 20 6Z" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42 6H28C26.8954 6 26 6.89543 26 8V20C26 21.1046 26.8954 22 28 22H42C43.1046 22 44 21.1046 44 20V8C44 6.89543 43.1046 6 42 6Z" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 26H6C4.89543 26 4 26.8954 4 28V40C4 41.1046 4.89543 42 6 42H20C21.1046 42 22 41.1046 22 40V28C22 26.8954 21.1046 26 20 26Z" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M42 26H28C26.8954 26 26 26.8954 26 28V40C26 41.1046 26.8954 42 28 42H42C43.1046 42 44 41.1046 44 40V28C44 26.8954 43.1046 26 42 26Z" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Experience the Difference with Our Tailored Solutions and Expertise",
      description: "We prioritize your business objectives to deliver impactful results."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 17L12 22L22 17" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M2 27L12 32L22 27" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Expert Problem Solvers Dedicated to Overcoming Your Challenges",
      description: "Our team excels at finding innovative solutions to complex problems."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="10" stroke="#5ae0f6" strokeWidth="2"/>
          <path d="M24 2V6" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M24 42V46" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M46 24H42" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 24H2" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      ),
      title: "Global Reach with Local Expertise for Every Project",
      description: "We operate on a global scale while understanding local markets."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M21 16V8C21 6.89543 21.8954 6 23 6H25C26.1046 6 27 6.89543 27 8V16" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M11 20C11 18.8954 11.8954 18 13 18H35C36.1046 18 37 18.8954 37 20V40C37 41.1046 36.1046 42 35 42H13C11.8954 42 11 41.1046 11 40V20Z" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Multi-disciplinary Teams Bringing Diverse Skills to Your Projects",
      description: "Our teams combine expertise from various fields to enhance project outcomes."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16 3V7" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 3V7" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 11H41" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M7 7H41C42.1046 7 43 7.89543 43 9V41C43 42.1046 42.1046 43 41 43H7C5.89543 43 5 42.1046 5 41V9C5 7.89543 5.89543 7 7 7Z" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
      title: "Scalable Solutions Designed to Grow with Your Business Needs",
      description: "We ensure that our solutions can adapt as your business evolves."
    },
    {
      icon: (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 12L11 10L16 15L33 6L35 8L16 19L9 12Z" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M21 21L23 23L28 18L45 9L47 11L28 22L21 21Z" stroke="#5ae0f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
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
                  <Link href="/people" className="flex items-start gap-2 rounded-xl overflow-hidden hover:transform hover:translate-x-1 transition-transform">
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
                    <Link href="/people" className="flex items-start gap-2 rounded-xl overflow-hidden hover:transform hover:translate-x-1 transition-transform">
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
                    <Link href="/people" className="flex items-start gap-2 rounded-xl overflow-hidden hover:transform hover:translate-x-1 transition-transform">
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