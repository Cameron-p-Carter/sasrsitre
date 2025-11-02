import Image from 'next/image';

const AwardsSection = () => {
  const awards = [
    {
      name: "Australian Government",
      src: "/images/awards/australiangov.svg",
      width: 237,
      height: 120.4
    },
    {
      name: "NSW Government",
      src: "/images/awards/NSWGovernment_2009.svg",
      width: 120,
      height: 120
    },
    {
      name: "Atlassian Tech Leadership Finalist 2025",
      src: "/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png",
      width: 120,
      height: 120
    },
    {
      name: "CUB Awards Winner 2025",
      src: "/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png",
      width: 120,
      height: 120
    },
    {
      name: "Deloitte Technology Fast 50 Australia Rising Star Winner 2024",
      src: "/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png",
      width: 120,
      height: 120
    },
    {
      name: "CEO Magazine Executive of the Year Awards Finalist 2025",
      src: "/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png",
      width: 120,
      height: 120
    }
  ];

  return (
    <section className="bg-[#006cc9] flex flex-col gap-20 items-center px-16 py-10 w-full">
      <div className="flex flex-col gap-20 max-w-[1280px] w-full">
        <div className="flex gap-[42px] items-center w-full">
          {/* Text Section */}
          <p className="font-bold text-[#14d3f3] text-[18px] leading-[1.5] w-[222px] flex-shrink-0">
            We proudly received awards and are the preferred ICT supplier for NSW and Australian Govenment Agencies.
          </p>
          
          {/* Awards Section */}
          <div className="flex flex-col gap-4 h-[123px] w-[1082px]">
            <div className="flex gap-[35px] h-[164px] items-start w-[1011px]">
              {awards.map((award, index) => (
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;