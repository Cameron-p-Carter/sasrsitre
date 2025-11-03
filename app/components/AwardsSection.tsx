import Image from 'next/image';

const AwardsSection = () => {
  const awards = [
    {
      name: "Australian Government",
      src: "/images/awards/australiangov.svg",
      width: 120,
      height: 80
    },
    {
      name: "NSW Government",
      src: "/images/awards/NSWGovernment_2009.svg",
      width: 80,
      height: 80
    },
    {
      name: "Atlassian Tech Leadership Finalist 2025",
      src: "/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png",
      width: 80,
      height: 80
    },
    {
      name: "CUB Awards Winner 2025",
      src: "/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png",
      width: 80,
      height: 80
    },
    {
      name: "Deloitte Technology Fast 50 Australia Rising Star Winner 2024",
      src: "/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png",
      width: 80,
      height: 80
    },
    {
      name: "CEO Magazine Executive of the Year Awards Finalist 2025",
      src: "/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png",
      width: 80,
      height: 80
    }
  ];

  return (
    <section className="bg-[#006cc9] flex flex-col gap-12 lg:gap-20 items-center px-5 lg:px-16 py-12 lg:py-10 w-full">
      <div className="flex flex-col gap-12 lg:gap-20 max-w-[1280px] w-full">
        {/* Mobile: Text above awards */}
        <div className="lg:hidden flex flex-col gap-5 w-full">
          <p className="font-bold text-[#14d3f3] text-[16px] leading-[1.5] w-full">
            We proudly received awards and are the preferred ICT supplier for NSW and Australian Government Agencies.
          </p>
        </div>

        {/* Desktop: Text on left, awards on right */}
        <div className="hidden lg:flex gap-[42px] items-center w-full">
          {/* Left: Text */}
          <p className="font-bold text-[#14d3f3] text-[18px] leading-[1.5] w-[222px] flex-shrink-0">
            We proudly received awards and are the preferred ICT supplier for NSW and Australian Government Agencies.
          </p>
          
          {/* Right: Awards */}
          <div className="flex-1 flex flex-col gap-4 h-[123px] w-[1082px]">
            <div className="flex gap-[35px] h-[164px] items-start w-[1011px]">
              {awards.map((award, index) => {
                // Desktop sizes based on Figma specifications
                const desktopSizes = [
                  { width: 237, height: 120.4 }, // Australian Government
                  { width: 120, height: 120 },   // NSW Government
                  { width: 120, height: 120 },   // Atlassian
                  { width: 120, height: 120 },   // CUB
                  { width: 120, height: 120 },   // Deloitte
                  { width: 120, height: 120 }    // CEO Magazine
                ];
                
                return (
                  <div
                    key={index}
                    className="relative flex-shrink-0"
                    style={{
                      width: `${desktopSizes[index].width}px`,
                      height: `${desktopSizes[index].height}px`
                    }}
                  >
                    <Image
                      src={award.src}
                      alt={`${award.name} award`}
                      fill
                      className="object-contain"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Mobile: Awards Section - 2 rows of 3 */}
        <div className="lg:hidden flex flex-col gap-6 items-center justify-center w-full">
          {/* Mobile: First row (3 badges) */}
          <div className="flex gap-[25px] items-center justify-center h-[83px] w-full">
            {awards.slice(0, 3).map((award, index) => (
              <div
                key={index}
                className="relative flex-shrink-0"
                style={{
                  width: `${award.width}px`,
                  height: `${award.height}px`
                }}
              >
                <Image
                  src={award.src}
                  alt={`${award.name} award`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* Mobile: Second row (3 badges) */}
          <div className="flex gap-[33px] items-center justify-center h-[107px] w-full">
            {awards.slice(3, 6).map((award, index) => (
              <div
                key={index + 3}
                className="relative flex-shrink-0"
                style={{
                  width: `${award.width}px`,
                  height: `${award.height}px`
                }}
              >
                <Image
                  src={award.src}
                  alt={`${award.name} award`}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;