import Image from 'next/image';

export default function PortfolioSection() {
  return (
    <section className="bg-[#cce1f4] px-16 py-28">
      <div className="max-w-[1280px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 max-w-[768px] mx-auto">
          <h2 className="text-[48px] font-bold leading-[1.2] text-[#0c2080] tracking-[-0.48px] mb-6">
            Our Project Highlights
          </h2>
          <p className="text-[18px] font-normal leading-[1.5] text-[#00050a]">
            Explore our successful projects and innovative solutions.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="flex gap-12 items-start justify-center mb-16">
          {/* Left Column */}
          <div className="flex flex-col gap-16 w-[634px]">
            {/* Team Super Card */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-[632/346.5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/placeholder/placeholder11.jpg"
                  alt="Team Super project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[24px] font-bold leading-[1.4] text-[#00050a] tracking-[-0.24px]">
                      Team Super
                    </h3>
                    <p className="text-[16px] font-normal leading-[1.5] text-[#00050a]">
                      Seamless Data Migration Underpins a Major Superannuation Merger.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-[16px] font-medium leading-[1.5] text-[#00050a] group-hover:text-[#0c2080] transition-colors">
                    View project
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Mine Super Card */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full h-[357px] rounded-2xl overflow-hidden">
                <Image
                  src="/images/placeholder/placeholder12.jpg"
                  alt="Mine Super project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[24px] font-bold leading-[1.4] text-[#00050a] tracking-[-0.24px]">
                      Mine Super
                    </h3>
                    <p className="text-[16px] font-normal leading-[1.5] text-[#00050a]">
                      Preparing a Superannuation Platform for Sale and Future Growth.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-[16px] font-medium leading-[1.5] text-[#00050a] group-hover:text-[#0c2080] transition-colors">
                    View project
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-16 flex-1">
            {/* Coates Group Card */}
            <div className="flex flex-col gap-6">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/placeholder/placeholder13.jpg"
                  alt="Coates Group project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[24px] font-bold leading-[1.4] text-[#00050a] tracking-[-0.24px]">
                      Coates Group
                    </h3>
                    <p className="text-[16px] font-normal leading-[1.5] text-[#00050a]">
                      Engineering Acceleration for Global Market Leadership.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-[16px] font-medium leading-[1.5] text-[#00050a] group-hover:text-[#0c2080] transition-colors">
                    View project
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* GoFundraise Card */}
            <div className="flex flex-col gap-6 w-[632px]">
              <div className="relative w-full aspect-[632/346.5] rounded-2xl overflow-hidden">
                <Image
                  src="/images/placeholder/placeholder14.jpg"
                  alt="GoFundraise project"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[24px] font-bold leading-[1.4] text-[#00050a] tracking-[-0.24px]">
                      GoFundraise
                    </h3>
                    <p className="text-[16px] font-normal leading-[1.5] text-[#00050a]">
                      Software@Scale delivers a world-class platform to support GoFundraise's global growth.
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 cursor-pointer group">
                  <span className="text-[16px] font-medium leading-[1.5] text-[#00050a] group-hover:text-[#0c2080] transition-colors">
                    View project
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="border border-[#0c2080] text-[#0c2080] px-6 py-2.5 rounded-xl text-[16px] font-medium leading-[1.5] hover:bg-[#0c2080] hover:text-white transition-colors">
            View all
          </button>
        </div>
      </div>
    </section>
  );
}