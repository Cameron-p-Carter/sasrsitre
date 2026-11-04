'use client';

import Image from 'next/image';
import { useState } from 'react';

// Moving content needs a way to stop it (WCAG 2.2.2). Hovering pauses it for mouse users; this works for everyone.
const PauseButton = ({ paused, onToggle, className = '' }: { paused: boolean; onToggle: () => void; className?: string }) => (
  <button
    type="button"
    onClick={onToggle}
    aria-label={paused ? 'Play logo animation' : 'Pause logo animation'}
    className={`press w-11 h-11 shrink-0 items-center justify-center rounded-full border border-[#5ae0f6]/60 text-[#5ae0f6] hover:bg-[#5ae0f6] hover:text-[#004f99] motion-reduce:hidden ${className}`}
  >
    <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      {paused ? <path d="M4 2.5v11l9-5.5z" /> : <path d="M4 2.5h3v11H4zM9 2.5h3v11H9z" />}
    </svg>
  </button>
);

const LogoSection = () => {
  const [paused, setPaused] = useState(false);

  // White logos for better contrast on blue background
  const logos = [
    { name: "McDonald's", src: "/images/Company Logos/McDonald's_logo_White.png", width: 92, height: 69 },
    { name: "Foxtel", src: "/images/Company Logos/foxtel-logo_White.png", width: 111, height: 37 },
    { name: "Coates", src: "/images/Company Logos/Coates_White.png", width: 144, height: 37 },
    { name: "Commonwealth Bank", src: "/images/Company Logos/Commonwealth-bank_White.png", width: 233, height: 67 },
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
    <section className="bg-[#004f99] px-5 md:px-8 lg:px-16 py-12 md:py-16 lg:py-20 w-full overflow-hidden">
      <div className="max-w-[1280px] mx-auto">
        {/* Mobile: Header above logos */}
        <div className="md:hidden mb-5">
          <p className="font-bold text-[#5ae0f6] text-[16px] leading-[1.5] text-center">
            Trusted by top companies worldwide
          </p>
        </div>

        {/* Tablet: Header above logos */}
        <div className="hidden md:flex lg:hidden flex-col gap-8 items-center w-full">
          <p className="font-bold text-[#5ae0f6] text-[17px] leading-[1.5] text-center">
            Trusted by top companies worldwide
          </p>
          
          {/* Tablet: Static logos grid */}
          <div className="flex flex-wrap items-center justify-center gap-6 w-full">
            {logos.slice(0, 8).map((logo, index) => (
              <div
                key={logo.name}
                className="flex items-center justify-center"
                style={{
                  width: `${Math.min(logo.width * 0.7, 100)}px`,
                  height: `${Math.min(logo.height * 0.7, 40)}px`
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.name}
                  width={Math.min(logo.width * 0.7, 100)}
                  height={Math.min(logo.height * 0.7, 40)}
                  className="object-contain filter brightness-0 invert"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: Text on left, logos marquee on right */}
        <div className="hidden lg:flex gap-8 xl:gap-12 2xl:gap-[26px] items-center w-full">
          {/* Left: Text */}
          <p className="font-bold text-[#5ae0f6] text-[18px] leading-[1.5] w-[260px] xl:w-[280px] 2xl:w-[320px] flex-shrink-0">
            Trusted by top companies worldwide
          </p>

          {/* Right: Marquee Logos */}
          <div className="marquee flex-1 min-w-0 relative overflow-hidden h-[100px]" data-paused={paused}>
            {/* Left fade gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#004f99] to-transparent z-10 pointer-events-none"></div>

            {/* Right fade gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#004f99] to-transparent z-10 pointer-events-none"></div>

            <div
              className="marquee-track flex w-max gap-8 xl:gap-10 2xl:gap-12 pr-8 xl:pr-10 2xl:pr-12 items-center h-full"
              style={{ '--marquee-duration': '30s' } as React.CSSProperties}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  // The second copy only exists to make the loop seamless; hide it from screen readers
                  aria-hidden={index >= logos.length || undefined}
                  className="flex items-center justify-center flex-shrink-0"
                  style={{
                    width: `${logo.width}px`,
                    height: `${logo.height}px`,
                    minWidth: `${logo.width}px`
                  }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={logo.width}
                    height={logo.height}
                    className="object-contain filter brightness-0 invert w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>

          <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="flex" />
        </div>

        {/* Mobile: Marquee Animation */}
        <div className="md:hidden relative flex flex-col items-center gap-4">
          <div className="marquee flex overflow-hidden w-full" data-paused={paused}>
            <div
              className="marquee-track flex w-max gap-8 pr-8 items-center"
              style={{ '--marquee-duration': '60s' } as React.CSSProperties}
            >
              {duplicatedLogos.map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  // The second copy only exists to make the loop seamless; hide it from screen readers
                  aria-hidden={index >= logos.length || undefined}
                  className="flex items-center justify-center flex-shrink-0"
                  style={{ width: '120px' }}
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={Math.min(logo.width, 100)}
                    height={Math.min(logo.height, 50)}
                    className="object-contain filter brightness-0 invert"
                    style={{ maxHeight: '40px', width: 'auto', maxWidth: '100%' }}
                  />
                </div>
              ))}
            </div>
          </div>
          <PauseButton paused={paused} onToggle={() => setPaused(!paused)} className="flex" />
        </div>
      </div>
    </section>
  );
};

export default LogoSection;