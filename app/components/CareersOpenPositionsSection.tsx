'use client';

import Image from 'next/image';

interface JobPosition {
  title: string;
  description: string;
  location: string;
  schedule: string;
  applyUrl?: string;
}

interface CareersOpenPositionsSectionProps {
  sectionTitle: string;
  sectionDescription: string;
  positions: JobPosition[];
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  buttonColor: string;
  buttonTextColor: string;
}

export default function CareersOpenPositionsSection({
  sectionTitle,
  sectionDescription,
  positions,
  backgroundColor,
  titleColor,
  textColor,
  buttonColor,
  buttonTextColor,
}: CareersOpenPositionsSectionProps) {
  return (
    <section className={`${backgroundColor} w-full`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-28">
        <div className="flex flex-col gap-12 md:gap-20 items-start w-full">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start w-full">
            
            {/* Section Title */}
            <div className="flex flex-col gap-3 md:gap-4 items-start w-full lg:max-w-[560px] flex-shrink-0">
              <div className="flex flex-col gap-5 md:gap-6 items-center w-full">
                <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
                  {sectionTitle}
                </h2>
                <p className={`font-normal text-base md:text-[18px] leading-[1.5] w-full ${textColor}`}>
                  {sectionDescription}
                </p>
              </div>
            </div>
            
            {/* Job Positions */}
            <div className="flex flex-col items-center flex-grow w-full">
              {positions.map((position, index) => (
                <div key={index} className="border-t border-[rgba(0,5,10,0.15)] flex flex-col gap-6 md:gap-8 items-start py-6 md:py-8 w-full">
                  <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
                    
                    {/* Job Details */}
                    <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
                      <div className="flex gap-4 items-center w-full">
                        <h3 className={`font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] ${textColor}`}>
                          {position.title}
                        </h3>
                      </div>
                      <p className={`font-normal text-base leading-[1.5] w-full ${textColor}`}>
                        {position.description}
                      </p>
                    </div>
                    
                    {/* Job Info */}
                    <div className="flex gap-6 items-start w-full">
                      <div className="flex gap-3 items-center">
                        <div className="relative w-6 h-6 shrink-0">
                          <Image
                            src="/images/icons/automation.svg"
                            alt="Location"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className={`font-normal text-base leading-[1.5] ${textColor}`}>
                          {position.location}
                        </p>
                      </div>
                      <div className="flex gap-3 items-center">
                        <div className="relative w-6 h-6 shrink-0">
                          <Image
                            src="/images/icons/automation.svg"
                            alt="Schedule"
                            fill
                            className="object-contain"
                          />
                        </div>
                        <p className={`font-normal text-base leading-[1.5] ${textColor}`}>
                          {position.schedule}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Apply Button */}
                  <div className="flex flex-col gap-4 items-start">
                    <button
                      className={`border border-solid ${buttonColor} flex gap-2 items-center justify-center px-6 py-2.5 rounded-xl`}
                      onClick={() => position.applyUrl && window.open(position.applyUrl, '_blank')}
                    >
                      <span className={`font-medium text-base leading-[1.5] ${buttonTextColor}`}>
                        Apply Now
                      </span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}