import React from 'react';
export const CoreCompetenciesSection: React.FC = () => {
  return (
    <section className="bg-[#006cc9] flex justify-center py-16 px-5 lg:py-28 lg:px-16">
      <div className="max-w-[1280px] w-full">
        <div className="flex flex-col gap-5 items-start">
          <h2 className="text-[#14d3f3] text-[36px] lg:text-[48px] font-bold tracking-[-0.48px] lg:tracking-[-0.48px] leading-[1.2]">
            Executive Technology Leadership
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-12 text-white text-[16px] lg:text-[18px] leading-[1.5]">
            <p>
              Our leadership team brings experience across banking, payments, insurance, superannuation, retail, cloud platforms and enterprise technology environments.
            </p>
            <p>
              Unlike traditional consulting firms, our leaders remain actively involved in delivery. We combine strategic thinking with hands-on engineering expertise to ensure every engagement delivers real outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreCompetenciesSection;