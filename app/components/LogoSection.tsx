'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const LogoSection = () => {
  // White logos for better contrast on blue background
  const logos = [
    { name: "McDonald's", src: "/images/Company Logos/McDonald's_logo_White.png", width: 92, height: 69 },
    { name: "Foxtel", src: "/images/Company Logos/foxtel-logo_White.png", width: 111, height: 37 },
    { name: "Coates", src: "/images/Company Logos/Coates_White.png", width: 144, height: 37 },
    { name: "Commonwealth Bank", src: "/images/Company Logos/Commonwealth_Bank_Logo_White.png", width: 233, height: 67 },
    { name: "Benchmark", src: "/images/Company Logos/Benchmark estimating logo_White.png", width: 161, height: 39 },
    { name: "Toyota", src: "/images/Company Logos/Toyota-Logo_White.png", width: 120, height: 40 },
    { name: "NAB", src: "/images/Company Logos/nab_logo_White.png", width: 100, height: 35 },
    { name: "AMP", src: "/images/Company Logos/AMP_White.png", width: 80, height: 45 },
    { name: "Citibank", src: "/images/Company Logos/Citibank_White.png", width: 120, height: 40 },
    { name: "IAG", src: "/images/Company Logos/IAG_Logo_White.png", width: 90, height: 50 },
    { name: "Ubank", src: "/images/Company Logos/Ubank_Logo_White.png", width: 110, height: 35 },
    { name: "TeamSuper", src: "/images/Company Logos/TeamSuper_Logo_White.png", width: 130, height: 40 },
    { name: "Gofundraise", src: "/images/Company Logos/Gofundraise_White.png", width: 140, height: 35 },
    { name: "Grays", src: "/images/Company Logos/Grays_White.png", width: 100, height: 40 },
    { name: "Achmea", src: "/images/Company Logos/Achmea_logo_White.png", width: 120, height: 45 }
  ];

  // Duplicate logos for seamless loop
  const duplicatedLogos = [...logos, ...logos];

  return (
    <section className="bg-[#006cc9] px-5 lg:px-16 py-12 lg:py-20 w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Mobile: Header above logos */}
        <div className="lg:hidden mb-5">
          <p className="font-bold text-[#5ae0f6] text-[16px] leading-[1.5] text-center">
            Trusted by top companies worldwide
          </p>
        </div>

        {/* Desktop: Text on left, logos on right */}
        <div className="hidden lg:flex gap-[26px] items-center w-full">
          {/* Left: Text */}
          <p className="font-bold text-[#5ae0f6] text-[18px] leading-[1.5] w-[320px] flex-shrink-0">
            Trusted by top companies worldwide
          </p>
          
          {/* Right: Logos */}
          <div className="flex-1 flex items-center justify-end gap-[45px] h-[100px]">
            {logos.slice(0, 5).map((logo, index) => (
              <div
                key={logo.name}
                className="flex items-center justify-center"
                style={{
                  width: `${logo.width}px`,
                  height: `${logo.height}px`
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: Marquee Animation */}
        <div className="lg:hidden relative">
          <div className="flex overflow-hidden">
            <motion.div
              className="flex gap-8 items-center"
              animate={{
                x: [0, -50 * logos.length]
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 20,
                  ease: "linear",
                },
              }}
              style={{ width: `${100 * duplicatedLogos.length}px` }}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ minWidth: '120px' }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={Math.min(logo.width, 100)}
                    height={Math.min(logo.height, 50)}
                    className="object-contain filter brightness-0 invert"
                    style={{ maxHeight: '40px', width: 'auto' }}
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;