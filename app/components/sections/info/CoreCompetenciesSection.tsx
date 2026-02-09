import React from 'react';
export const CoreCompetenciesSection: React.FC = () => {
  return (
    <section className="bg-[#006cc9] flex justify-center py-28 px-16">
      <div className="max-w-[1280px] w-full">
        <div className="flex flex-col gap-8 items-start">
          <h2 className="text-[#14d3f3] text-[48px] font-bold tracking-[-0.48px] leading-[1.2]">
            Core Competencies
          </h2>
          <div className="flex flex-col lg:flex-row gap-[92px] text-white text-[18px] leading-[1.5]">
            <div className="flex-1 space-y-4">
              <p>
                {`Software@Scale offers a flexible high-calibre delivery model across Engineering as a Service (EaaS) and Technology Advisory, designed to accelerate digital outcomes for complex, regulated environments. `}
              </p>
              <p>
                {`Our service lines span cloud engineering, security architecture, and project acceleration, underpinned by specialised offerings in platform due diligence, engineering performance, and AIdriven solutions. `}
              </p>
            </div>
            <div className="flex-1 space-y-4">
              <p>
                {`We operate across core verticals such as banking, payments, superannuation, insurance, and QSR, with additional experience in retail and government. `}
              </p>
              <p>
                Our teams bring deep expertise across modern stacks including React, Node.js, .NET, AWS, Azure, Kubernetes, and emerging technologies like agentic AI and RAG.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default CoreCompetenciesSection;