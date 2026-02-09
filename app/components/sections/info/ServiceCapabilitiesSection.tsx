import React from 'react';
import Image from 'next/image';

export const ServiceCapabilitiesSection: React.FC = () => {
  return (
    <section className="relative flex justify-center py-28 px-16">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          alt="Background"
          src="/images/people/bg.jpg" // Using the user-provided path
          layout="fill"
          objectFit="cover"
          quality={100}
          className="absolute max-w-none size-full"
        />
        {/* Overlay bg-[rgba(12,32,128,0.7)] is close to dark blue with opacity */}
        <div className="absolute inset-0 bg-[rgba(12,32,128,0.7)]" />
      </div>

      <div className="max-w-[1280px] w-full relative z-10 text-white">
        <div className="flex flex-col lg:flex-row gap-20">
          {/* Left Column (Services and Industries) */}
          <div className="flex flex-col gap-8 w-full lg:w-1/2">
            
            {/* General Services */}
            <div className="flex flex-col gap-6">
              <div className="border-b border-white pb-6">
                <h3 className="text-[#14d3f3] text-[32px] font-bold tracking-[-0.32px] leading-[1.3]">
                  General Services
                </h3>
              </div>
              <ul className="list-disc ml-6 space-y-2 text-base font-bold">
                <li>Engineering as a Service (EAAS)</li>
                <li>Technology Advisory / Fractional Resources</li>
              </ul>
            </div>

            {/* Specialised Services */}
            <div className="flex flex-col gap-6">
              <div className="border-b border-white pb-6">
                <h3 className="text-[#14d3f3] text-[32px] font-bold tracking-[-0.32px] leading-[1.3]">
                  Specialised Services
                </h3>
              </div>
              <div className="flex gap-12 text-base font-bold">
                <ul className="list-disc ml-6 space-y-2">
                  <li>Cloud Engineering</li>
                  <li>Security Architecture</li>
                </ul>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Project Acceleration</li>
                  <li>Platform Due Diligence</li>
                </ul>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Engineering Performance</li>
                  <li>Data / AI Services</li>
                </ul>
              </div>
            </div>
            
            {/* Industries */}
            <div className="flex flex-col gap-6">
              <div className="border-b border-white pb-6">
                <h3 className="text-[#14d3f3] text-[32px] font-bold tracking-[-0.32px] leading-[1.3]">
                  Industries
                </h3>
              </div>
              <div className="flex gap-12 text-base font-bold">
                <ul className="list-disc ml-6 space-y-2">
                  <li>Financial Services</li>
                  <li>Payments</li>
                </ul>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Superannuation</li>
                  <li>Insurance</li>
                  <li>QSR</li>
                </ul>
                <ul className="list-disc ml-6 space-y-2">
                  <li>Media</li>
                  <li>Retail</li>
                  <li>Government</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Column (Technologies) */}
          <div className="flex flex-col gap-6 w-full lg:w-1/2">
            <div className="border-b border-white pb-6">
              <h3 className="text-[#14d3f3] text-[32px] font-bold tracking-[-0.32px] leading-[1.3]">
                Technologies
              </h3>
            </div>
            <div className="flex gap-12 text-base">
              {/* Full Stack, Data, Cloud/DevOps */}
              <div className="space-y-6 flex-1">
                {/* Full Stack */}
                <div>
                  <h4 className="text-[#5ae0f6] text-base font-bold mb-2">Full Stack</h4>
                  <ul className="list-disc ml-6 space-y-1 font-bold">
                    <li>Next.js, Node.js, Angular, React, Vue.js</li>
                    <li>TypeScript, PHP, Python, C#, .NET</li>
                    <li>Java, C++, Scala, Gosu</li>
                  </ul>
                </div>

                {/* Data */}
                <div>
                  <h4 className="text-[#5ae0f6] text-base font-bold mb-2">Data</h4>
                  <ul className="list-disc ml-6 space-y-1 font-bold">
                    <li>Databricks, Snowflake, Microsoft Fabric</li>
                    <li>AWS S3, Glue, Redshift, Athena, EMR</li>
                    <li>BigQuery, Azure Functions, ADLS, ADF</li>
                    <li>Spark, dbt, Kafka</li>
                  </ul>
                </div>

                {/* Cloud / DevOps */}
                <div>
                  <h4 className="text-[#5ae0f6] text-base font-bold mb-2">Cloud / DevOps</h4>
                  <ul className="list-disc ml-6 space-y-1 font-bold">
                    <li>Docker, Kubernetes, Terraform</li>
                    <li>CloudFormation</li>
                    <li>AWS, Azure, GCP</li>
                  </ul>
                </div>
              </div>
              
              {/* AI */}
              <div className="space-y-6 flex-1">
                {/* AI */}
                <div>
                  <h4 className="text-[#5ae0f6] text-base font-bold mb-2">AI</h4>
                  <ul className="list-disc ml-6 space-y-1 font-bold">
                    <li>Frontier Models</li>
                    <li>OpenAI, Gemini, Claude, Grok</li>
                    <li>Open Source Models (Llama4, Qwen, Mistral)</li>
                    <li>IDE & Agents (Cursor, Roo, Windsurf, Copilot Enterprise)</li>
                    <li>Frameworks (Spring AI, LangChain, AWS Bedrock, MCP, LangGraph)</li>
                    <li>Guardrails & Tooling (Vellum AI, Helicone, LangSmith)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCapabilitiesSection;