import React from 'react';
import Image from 'next/image';

const features = [
  {
    icon: '/images/icons/bolt.svg',
    title: 'BOOST',
    description: 'Increase engineering capability, improve delivery velocity and strengthen technology teams.',
  },
  {
    icon: '/images/icons/engineering.svg',
    title: 'UNBLOCK',
    description: 'Solve difficult technology challenges, remove bottlenecks and recover critical delivery programs.',
  },
  {
    icon: '/images/icons/security.svg',
    title: 'SAFEGUARD',
    description: 'Reduce operational risk, improve resilience and strengthen security.',
  },
];

const BoostUnblockSafeguardSection = () => {
  return (
    <section className="bg-[#006cc9] w-full py-20 px-4 md:px-16 text-white">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8 items-start justify-center">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center justify-start text-center w-full md:w-[30%] min-w-[250px]">
            <div className="h-[48px] w-[48px] mb-6 relative">
              <Image src={feature.icon} alt={feature.title} fill className="object-contain" />
            </div>
            <h3 className="font-bold text-[32px] leading-[1.3] text-[#14d3f3] mb-6 tracking-[-0.32px]">
              {feature.title}
            </h3>
            <p className="font-normal text-[16px] leading-[1.5]">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BoostUnblockSafeguardSection;
