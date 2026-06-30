import React from 'react';
import Image from 'next/image';

const ExecutiveTechnologyLeadership: React.FC = () => {
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

const OriginalCoreCompetencies: React.FC = () => {
  return (
    <section className="bg-[#cce1f4] flex justify-center py-16 px-5 lg:py-28 lg:px-16">
      <div className="max-w-[1280px] w-full">
        <div className="flex flex-col gap-5 items-start">
          <h2 className="text-[#006cc9] text-[36px] lg:text-[48px] font-bold tracking-[-0.48px] leading-[1.2]">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-4 lg:gap-x-12 text-[#00050a] text-[16px] lg:text-[18px] leading-[1.5]">
            <p>
              {`Software@Scale offers a flexible high-calibre delivery model across Engineering as a Service (EaaS) and Technology Advisory, designed to accelerate digital outcomes for complex, regulated environments. `}
            </p>
            <p>
              {`We operate across core verticals such as banking, payments, superannuation, insurance, and QSR, with additional experience in retail and government. `}
            </p>
            <p>
              {`Our service lines span cloud engineering, security architecture, and project acceleration, underpinned by specialised offerings in platform due diligence, engineering performance, and AIdriven solutions. `}
            </p>
            <p>
              Our teams bring deep expertise across modern stacks including React, Node.js, .NET, AWS, Azure, Kubernetes, and emerging technologies like agentic AI and RAG.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export const CoreCompetenciesSection: React.FC = () => {
  return (
    <>
      <ExecutiveTechnologyLeadership />
      <OriginalCoreCompetencies />
    </>
  );
};

interface CoreCompetenciesInfoProps {
  title: string;
  paragraphs: string[];
  imageSrc: string;
  imageOnRight?: boolean;
}

export const CoreCompetenciesInfo: React.FC<CoreCompetenciesInfoProps> = ({ title, paragraphs, imageSrc, imageOnRight = true }) => {
  return (
    <section className="bg-[#006cc9] flex justify-center py-16 px-5 lg:py-28 lg:px-16">
      <div className={`max-w-[1280px] w-full flex flex-col gap-[80px] items-center ${imageOnRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
        <div className="flex flex-[1_0_0] flex-col gap-[24px] items-start">
          <h2 className="text-[#14d3f3] text-[36px] lg:text-[48px] font-bold tracking-[-0.48px] leading-[1.2]">
            {title}
          </h2>
          <div className="text-white text-[16px] lg:text-[18px] leading-[1.5] flex flex-col gap-4">
            {paragraphs.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </div>
        <div className="flex-[1_0_0] h-[276px] w-full relative rounded-[16px] overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CoreCompetenciesSection;