import Image from 'next/image';

const EliteTalentSection = () => {
  const partnerLogos = [
    {
      name: "AWS Partner",
      src: "/images/eliteTalent/AWS_Partner-HOR-Logo.png",
      width: 185,
      height: 39
    },
    {
      name: "Vercel",
      src: "/images/eliteTalent/Vercel_Logo.png",
      width: 201,
      height: 39
    },
    {
      name: "Microsoft",
      src: "/images/eliteTalent/Microsoft_logo.png",
      width: 185,
      height: 47.5
    },
    {
      name: "Guidewire",
      src: "/images/eliteTalent/Guidewire_Logo.png",
      width: 204,
      height: 31.88
    },
    {
      name: "New Relic",
      src: "/images/eliteTalent/new_relic_logo_horizontal.png",
      width: 233,
      height: 19
    },
    {
      name: "Monoova",
      src: "/images/eliteTalent/Monoova_Logo.png",
      width: 219,
      height: 40.8
    },
    {
      name: "6pillars",
      src: "/images/eliteTalent/6pillars_logo.png",
      width: 185,
      height: 39
    },
    {
      name: "Zai",
      src: "/images/eliteTalent/Zai_Logo.png",
      width: 151,
      height: 50
    }
  ];

  return (
    <section className="bg-[#cce1f4] flex flex-col gap-20 items-center px-16 py-28 w-full">
      <div className="flex flex-col gap-20 max-w-[1280px] w-full">
        <div className="flex gap-20 items-center w-full">
          {/* Content Section */}
          <div className="flex-1 flex flex-col gap-8 justify-center">
            <div className="flex flex-col gap-6 w-full">
              <h2 className="font-bold text-[#0c2080] text-[48px] leading-[1.2] tracking-[-0.48px] w-full">
                Elite Talent
              </h2>
              <div className="font-normal text-[#00050a] text-[18px] leading-[1.5] w-full">
                <p className="mb-0">As certified partners of AWS (Advanced), Vercel (Silver), 6pillars.ai</p>
                <p>and New Relic, we're deeply embedded in the modern technology ecosystem trusted to deliver where security, scale and performance are non-negotiable.</p>
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

          {/* Logo Grid Section */}
          <div className="flex-1 flex flex-col h-[384px]">
            <div className="flex flex-wrap gap-2 h-[388px] w-[600px]">
              {/* Row 1 */}
              <div className="flex flex-wrap gap-2 h-[89px] w-[600px]">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[0].width}px`, height: `${partnerLogos[0].height}px` }}>
                    <Image
                      src={partnerLogos[0].src}
                      alt={partnerLogos[0].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
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
              <div className="flex flex-wrap gap-2 h-[89px] w-[600px]">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[2].width}px`, height: `${partnerLogos[2].height}px` }}>
                    <Image
                      src={partnerLogos[2].src}
                      alt={partnerLogos[2].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
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
              <div className="flex flex-wrap gap-2 h-[89px] w-[600px]">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[4].width}px`, height: `${partnerLogos[4].height}px` }}>
                    <Image
                      src={partnerLogos[4].src}
                      alt={partnerLogos[4].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
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
              <div className="flex flex-wrap gap-2 h-[111.75px] w-[600px]">
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
                  <div className="relative" style={{ width: `${partnerLogos[6].width}px`, height: `${partnerLogos[6].height}px` }}>
                    <Image
                      src={partnerLogos[6].src}
                      alt={partnerLogos[6].name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <div className="bg-[#e5f0f9] flex flex-col gap-[14px] h-[84px] items-center justify-center p-[14px] rounded-2xl w-[296px]">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default EliteTalentSection;