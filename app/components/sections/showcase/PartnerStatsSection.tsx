import React from 'react';
import Image from 'next/image';

const PartnerStatsSection = () => {
  const stats = [
    { value: '180+', description: 'Engineering\nSpecialists' },
    { value: '30+', description: 'Enterprise\nClients' },
    { value: '2X', description: 'Deloitte Rising\nStar Winner' },
    { 
      src: '/images/logos/aws.png', 
      description: 'Advanced\nPartner', 
      isImage: true,
      width: 96,
      height: 73
    },
    { 
      src: '/images/logos/gov.svg', 
      description: 'Government\nApproved ICT Supplier', 
      isImage: true,
      width: 116,
      height: 85
    },
  ];

  return (
    <section className="bg-[#cce1f4] w-full py-20 px-4 md:px-16">
      <div className="max-w-[1280px] mx-auto flex flex-wrap gap-8 items-start justify-center">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-start text-center w-[200px] border-r border-[#00050a]/15 last:border-0 last:pr-0 pr-6">
            {stat.isImage ? (
              <div className="h-[100px] flex items-center justify-center mb-4">
                <Image src={stat.src!} alt={stat.description} width={stat.width} height={stat.height} className="object-contain" />
              </div>
            ) : (
              <p className="font-extrabold text-[64px] md:text-[80px] leading-[1.3] text-[#006cc9] w-full">
                {stat.value}
              </p>
            )}
            <p className="font-bold text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.2px] text-[#00050a] whitespace-pre-wrap">
              {stat.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PartnerStatsSection;
