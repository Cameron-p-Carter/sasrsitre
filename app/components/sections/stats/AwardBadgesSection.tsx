import Image from 'next/image';

const awards = [
  {
    name: "Atlassian Tech Leadership Finalist 2025",
    src: "/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png",
  },
  {
    name: "CUB Awards Finalist 2025",
    src: "/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png",
  },
  {
    name: "Deloitte Technology Fast 50 Rising Star Winner 2024",
    src: "/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png",
  },
  {
    name: "Deloitte Technology Fast 50 Rising Star Winner 2024 (Alt)",
    src: "/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024 3.png",
  },
  {
    name: "CEO Magazine Executive of the Year Awards Finalist 2025",
    src: "/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png",
  },
];

const AwardBadgesSection = () => {
  return (
    <section className="bg-[#006cc9] px-5 md:px-8 lg:px-16 pt-12 md:pt-16 lg:pt-20 pb-0 w-full">
      <div className="max-w-[1280px] mx-auto w-full flex flex-col lg:flex-row gap-8 lg:gap-16 items-start border-b border-white/20 pb-16">
        <h2 className="text-[32px] md:text-[40px] font-bold text-[#14d3f3] leading-[1.2] lg:w-[500px]">
          Trusted by industry leaders
        </h2>
        
        <div className="flex flex-wrap gap-4 md:gap-8 justify-start lg:flex-1 pl-0 lg:pl-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="relative w-[80px] h-[80px] md:w-[100px] md:h-[100px]"
            >
              <Image
                src={award.src}
                alt={award.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardBadgesSection;
