'use client';

import Image from 'next/image';

const BACKGROUND_IMAGE_SRC = "/images/placeholder/placeholder10.jpg";

const CoreValuesMissionSection = () => {
  return (
    <section className="bg-[#cce1f4] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-10 lg:gap-[80px] items-center w-full">
          {/* Left: slides from left */}
          <div className="flex flex-col gap-6 md:gap-8 min-w-0 w-full md:w-1/2 order-1">
            <div className="flex flex-col gap-5 md:gap-6 w-full">
              <h2 className="font-bold text-[#0c2080] text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.32px] md:tracking-[-0.4px] w-full">
                Empowering Your Digital Transformation with Excellence and Innovation
              </h2>
              <p className="font-normal text-base md:text-lg leading-[1.5] text-[#00050a] w-full">
                At Software at Scale, our mission is to drive digital acceleration for enterprises. We are dedicated to engineering excellence, ensuring our clients thrive in a rapidly evolving technological landscape.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="flex flex-col md:flex-row gap-6 items-start py-2 w-full">
                {[
                  { heading: 'Our Mission', body: 'To enable businesses to scale confidently and modernise their platforms with minimal risk.' },
                  { heading: 'Our Values', body: 'Integrity, innovation, and collaboration drive our commitment to client success and excellence.' },
                ].map((item) => (
                  <div key={item.heading} className="flex flex-col gap-3 md:gap-4 w-full md:w-1/2 text-[#00050a]">
                    <h3 className="font-bold text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.18px] md:tracking-[-0.2px] w-full">
                      {item.heading}
                    </h3>
                    <p className="font-normal text-base leading-[1.5] w-full">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: image scales in */}
          <div className="relative rounded-2xl shrink-0 w-full h-[348px] md:w-1/2 md:h-[540px] order-2 overflow-hidden">
            <Image src={BACKGROUND_IMAGE_SRC} alt="Placeholder Image" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesMissionSection;
