import Image from 'next/image';
import Link from 'next/link';

interface EliteTalentSectionProps {
  hideLearnMore?: boolean;
}

const EliteTalentSection = ({ hideLearnMore = false }: EliteTalentSectionProps) => {
  const partnerLogos = [
    {
      name: "AWS Partner",
      src: "/images/eliteTalent/AWS_Partner-HOR-Logo.png",
      width: 137,
      height: 29
    },
    {
      name: "Vercel",
      src: "/images/eliteTalent/Vercel_Logo.png",
      width: 128,
      height: 25
    },
    {
      name: "Microsoft",
      src: "/images/eliteTalent/Microsoft_logo.png",
      width: 137,
      height: 29
    },
    {
      name: "Guidewire",
      src: "/images/eliteTalent/Guidewire_Logo.png",
      width: 135.5,
      height: 31
    },
    {
      name: "New Relic",
      src: "/images/eliteTalent/new_relic_logo_horizontal.png",
      width: 135.5,
      height: 21
    },
    {
      name: "Monoova",
      src: "/images/eliteTalent/Monoova_Logo.png",
      width: 128,
      height: 25
    },
    {
      name: "6pillars",
      src: "/images/eliteTalent/6pillars_logo.png",
      width: 137,
      height: 29
    },
    {
      name: "Zai",
      src: "/images/eliteTalent/Zai_Logo.png",
      width: 128,
      height: 47
    }
  ];

  return (
    <section className="bg-[#cce1f4] flex flex-col gap-12 md:gap-16 lg:gap-20 items-center px-5 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 w-full">
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 max-w-[1280px] w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-center w-full">
          {/* Content Section */}
          <div className="w-full lg:flex-1 flex flex-col gap-6 md:gap-8 justify-center">
            <div className="flex flex-col gap-5 md:gap-6 w-full">
              <h2 className="font-bold text-[#0c2080] text-[36px] md:text-[44px] lg:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.44px] lg:tracking-[-0.48px] w-full">
                Elite Talent
              </h2>
              <div className="font-normal text-[#00050a] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5] w-full">
                <p className="mb-0">As certified partners of AWS (Advanced), Vercel (Silver), 6pillars.ai</p>
                <p>and New Relic, we're deeply embedded in the modern technology ecosystem trusted to deliver where security, scale and performance are non-negotiable.</p>
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-6 items-center">
              {!hideLearnMore && (
                <Link href="/recognition" className="bg-[#5ae0f6] border border-[#5ae0f6] border-solid rounded-xl hover:bg-[#4dd4e8] transition-colors">
                  <div className="flex items-center justify-center gap-2 px-6 py-2.5 rounded-inherit overflow-hidden">
                    <span className="font-medium text-[#0c2080] text-base leading-[1.5] whitespace-nowrap">
                      Learn More
                    </span>
                  </div>
                </Link>
              )}
              
              <Link
                href="/contact-us"
                className={hideLearnMore
                  ? "bg-[#5ae0f6] border border-[#5ae0f6] border-solid rounded-xl hover:bg-[#4dd4e8] transition-colors"
                  : "flex items-center justify-center gap-2 rounded-xl overflow-hidden hover:transform hover:translate-x-1 transition-transform px-2 py-1"
                }
              >
                <div className={hideLearnMore
                  ? "flex items-center justify-center gap-2 px-6 py-2.5 rounded-inherit overflow-hidden"
                  : "flex items-center justify-center gap-2"
                }>
                  <span className="font-medium text-[#0c2080] text-base leading-[1.5] whitespace-nowrap">
                    Contact
                  </span>
                  {!hideLearnMore && (
                    <div className="w-6 h-6 flex items-center justify-center">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="#0c2080" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              </Link>
            </div>
          </div>

          {/* Logo Grid Section */}
          <div className="w-full lg:flex-1 flex flex-col gap-2">
            {/* Mobile: 2-column grid, 4 rows */}
            <div className="flex lg:hidden flex-col gap-2 w-full">
              {/* Row 1 */}
              <div className="flex gap-2 w-full">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl flex-1">
                  <div className="relative" style={{ width: `${partnerLogos[0].width}px`, height: `${partnerLogos[0].height}px` }}>
                    <Image
                      src={partnerLogos[0].src}
                      alt={partnerLogos[0].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl flex-1">
                  <div className="relative" style={{ width: `${partnerLogos[1].width}px`, height: `${partnerLogos[1].height}px` }}>
                    <Image
                      src={partnerLogos[1].src}
                      alt={partnerLogos[1].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex gap-2 w-full">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl flex-1">
                  <div className="relative" style={{ width: `${partnerLogos[2].width}px`, height: `${partnerLogos[2].height}px` }}>
                    <Image
                      src={partnerLogos[2].src}
                      alt={partnerLogos[2].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl flex-1">
                  <div className="relative" style={{ width: `${partnerLogos[3].width}px`, height: `${partnerLogos[3].height}px` }}>
                    <Image
                      src={partnerLogos[3].src}
                      alt={partnerLogos[3].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex gap-2 w-full">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl flex-1">
                  <div className="relative" style={{ width: `${partnerLogos[4].width}px`, height: `${partnerLogos[4].height}px` }}>
                    <Image
                      src={partnerLogos[4].src}
                      alt={partnerLogos[4].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl flex-1">
                  <div className="relative" style={{ width: `${partnerLogos[5].width}px`, height: `${partnerLogos[5].height}px` }}>
                    <Image
                      src={partnerLogos[5].src}
                      alt={partnerLogos[5].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex gap-2 w-full">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl flex-1">
                  <div className="relative" style={{ width: `${partnerLogos[6].width}px`, height: `${partnerLogos[6].height}px` }}>
                    <Image
                      src={partnerLogos[6].src}
                      alt={partnerLogos[6].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl flex-1">
                  <div className="relative" style={{ width: `${partnerLogos[7].width}px`, height: `${partnerLogos[7].height}px` }}>
                    <Image
                      src={partnerLogos[7].src}
                      alt={partnerLogos[7].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Desktop: Original layout */}
            <div className="hidden lg:flex flex-wrap gap-2 h-[388px] w-[600px]">
              {/* Row 1 */}
              <div className="flex flex-wrap gap-2 h-[89px] w-[600px]">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[0].width * 1.35}px`, height: `${partnerLogos[0].height * 1.35}px` }}>
                    <Image
                      src={partnerLogos[0].src}
                      alt={partnerLogos[0].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[1].width * 1.57}px`, height: `${partnerLogos[1].height * 1.56}px` }}>
                    <Image
                      src={partnerLogos[1].src}
                      alt={partnerLogos[1].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap gap-2 h-[89px] w-[600px]">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[2].width * 1.35}px`, height: `${partnerLogos[2].height * 1.64}px` }}>
                    <Image
                      src={partnerLogos[2].src}
                      alt={partnerLogos[2].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[3].width * 1.51}px`, height: `${partnerLogos[3].height * 1.03}px` }}>
                    <Image
                      src={partnerLogos[3].src}
                      alt={partnerLogos[3].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="flex flex-wrap gap-2 h-[89px] w-[600px]">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[4].width * 1.72}px`, height: `${partnerLogos[4].height * 1.73}px` }}>
                    <Image
                      src={partnerLogos[4].src}
                      alt={partnerLogos[4].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[5].width * 1.71}px`, height: `${partnerLogos[5].height * 1.63}px` }}>
                    <Image
                      src={partnerLogos[5].src}
                      alt={partnerLogos[5].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>

              {/* Row 4 */}
              <div className="flex flex-wrap gap-2 h-[111.75px] w-[600px]">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[6].width * 1.35}px`, height: `${partnerLogos[6].height * 1.35}px` }}>
                    <Image
                      src={partnerLogos[6].src}
                      alt={partnerLogos[6].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[7].width * 1.18}px`, height: `${partnerLogos[7].height * 1.06}px` }}>
                    <Image
                      src={partnerLogos[7].src}
                      alt={partnerLogos[7].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteTalentSection;