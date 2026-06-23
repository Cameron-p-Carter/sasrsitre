import Image from 'next/image';
import Link from 'next/link';

const AWARD_BADGES = [
  {
    src: "/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png",
    alt: "Atlassian Tech Leadership Finalist 2025",
  },
  {
    src: "/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png",
    alt: "CUB Awards Winner 2025",
  },
  {
    src: "/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png",
    alt: "Deloitte Technology Fast 50 Australia Rising Star Winner 2024",
  },
  {
    src: "/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024 3.png",
    alt: "Deloitte Technology Fast 50 Australia Rising Star Winner 2024 (2)",
  },
  {
    src: "/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png",
    alt: "CEO Magazine Executive of the Year Awards Finalist 2025",
  },
];

const AwardsSection = () => {
  return (
    <section className="bg-[#006cc9] px-5 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 w-full">
      <div className="flex flex-col gap-10 md:gap-12 max-w-[1280px] mx-auto w-full">

        {/* Award Badges */}
        <div className="flex flex-wrap gap-6 md:gap-8 items-center justify-center md:justify-start">
          {AWARD_BADGES.map((badge, index) => (
            <Link
              key={index}
              href="/recognition"
              className="relative w-[100px] h-[100px] flex-shrink-0 hover:opacity-80 transition-opacity"
            >
              <Image src={badge.src} alt={badge.alt} fill className="object-contain" />
            </Link>
          ))}
        </div>

        <div className="border-t border-white/20 w-full" />

        {/* Government Supplier */}
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-[42px] items-center w-full">
          <p className="font-bold text-[#14d3f3] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5] flex-1 text-center lg:text-left">
            We are the preferred ICT supplier for NSW and Australian Government Agencies, delivering secure, scalable and innovative technology solutions that support critical services, operational excellence and digital transformation across the public sector.
          </p>
          <div className="flex-shrink-0">
            <div className="relative w-[140px] md:w-[200px] h-[80px] md:h-[100px]">
              <Image
                src="/images/awards/australiangov.svg"
                alt="Australian Government logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AwardsSection;
