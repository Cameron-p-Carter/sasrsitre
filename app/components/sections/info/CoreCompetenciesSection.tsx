import React from 'react';
import Image from 'next/image';

export const CoreCompetenciesSection: React.FC = () => {
  return (
    <section className="bg-[#006cc9] flex justify-center py-16 px-5 lg:py-28 lg:px-16">
      <div className="max-w-[1280px] w-full flex flex-col md:flex-row gap-[80px] items-center">
        <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start">
          <h2 className="text-[#14d3f3] text-[36px] lg:text-[48px] font-bold tracking-[-0.48px] leading-[1.2]">
            Executive Technology Leadership
          </h2>
          <div className="text-white text-[16px] lg:text-[18px] leading-[1.5] flex flex-col gap-4">
            <p>
              Our leadership team brings experience across banking, payments, insurance, superannuation, retail, cloud platforms and enterprise technology environments.
            </p>
            <p>
              Unlike traditional consulting firms, our leaders remain actively involved in delivery.
            </p>
          </div>
        </div>
        <div className="flex-[1_0_0] h-[276px] w-full relative rounded-[16px] overflow-hidden">
          <Image
            src="/images/people/execkeader.jpg"
            alt="Executive Technology Leadership"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};
export default CoreCompetenciesSection;