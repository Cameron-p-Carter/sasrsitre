import Image from 'next/image';

const LogoSection = () => {
  const companyLogos = [
    {
      name: "McDonald's",
      src: "/images/Company Logos/McDonald's_logo_White.png",
      width: 92,
      height: 69
    },
    {
      name: "Foxtel",
      src: "/images/Company Logos/foxtel-logo_White.png",
      width: 111,
      height: 37
    },
    {
      name: "Coates",
      src: "/images/Company Logos/Coates_White.png",
      width: 144,
      height: 37
    },
    {
      name: "Commonwealth Bank",
      src: "/images/Company Logos/Commonwealth_Bank_Logo_White.png",
      width: 233,
      height: 67
    },
    {
      name: "Benchmark Estimating",
      src: "/images/Company Logos/Benchmark estimating logo_White.png",
      width: 161,
      height: 39
    }
  ];

  return (
    <section className="bg-[#006cc9] flex flex-col gap-20 items-center px-16 py-20 w-full">
      <div className="flex flex-col gap-20 max-w-[1280px] w-full">
        <div className="flex gap-[26px] items-center w-full">
          {/* Text Section */}
          <p className="font-bold text-[#5ae0f6] text-[18px] leading-[1.5] w-[320px] flex-shrink-0">
            Trusted by top companies worldwide
          </p>
          
          {/* Logos Section */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="flex flex-wrap gap-[45px] h-[100px] items-center justify-end w-[935px]">
              {companyLogos.map((logo, index) => (
                <div 
                  key={index}
                  className="relative flex-shrink-0"
                  style={{ 
                    width: `${logo.width}px`, 
                    height: `${logo.height}px` 
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={`${logo.name} logo`}
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

export default LogoSection;