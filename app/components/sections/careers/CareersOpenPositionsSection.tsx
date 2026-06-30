'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/app/components/shared/Button';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface JobPosition {
  title: string;
  description: string;
  location: string;
  schedule: string;
  applyUrl?: string;
  iconSrc?: string;
}

interface CareersOpenPositionsSectionProps {
  sectionTitle: string;
  sectionDescription: string;
  positions: JobPosition[];
  backgroundColor: string;
  titleColor: string;
  textColor: string;
}

export default function CareersOpenPositionsSection({ sectionTitle, sectionDescription, positions, backgroundColor, titleColor, textColor }: CareersOpenPositionsSectionProps) {
  return (
    <section className={`${backgroundColor} w-full`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-28">
        <div className="flex flex-col gap-12 md:gap-20 items-start w-full">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-start w-full">

            {/* Title: slides from left */}
            <motion.div
              className="flex flex-col gap-3 md:gap-4 items-start w-full lg:max-w-[256px] flex-shrink-0"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, ease }}
            >
              <div className="flex flex-col gap-5 md:gap-6 items-center w-full">
                <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
                  {sectionTitle}
                </h2>
                <p className={`font-normal text-base md:text-[18px] leading-[1.5] w-full ${textColor}`}>{sectionDescription}</p>
              </div>
            </motion.div>

            {/* Positions: stagger */}
            <motion.div
              className="flex flex-col items-center flex-grow w-full"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-10% 0px' }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
            >
              {positions.map((position, index) => (
                <motion.div
                  key={index}
                  className="border-t border-[rgba(0,5,10,0.15)] flex gap-4 items-start py-6 md:py-8 w-full"
                  variants={{
                    hidden: { opacity: 0, y: 28 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                  }}
                >
                  {position.iconSrc && (
                    <div className="relative w-12 h-12 shrink-0">
                      <Image src={position.iconSrc} alt="" width={48} height={48} className="object-contain" />
                    </div>
                  )}
                  <div className="flex flex-col gap-6 md:gap-8 items-start flex-grow">
                    <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
                      <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
                        <h3 className={`font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] ${textColor}`}>
                          {position.title}
                        </h3>
                        <p className={`font-normal text-base leading-[1.5] w-full ${textColor}`}>{position.description}</p>
                      </div>
                      <div className="flex gap-6 items-start w-full text-[18px]">
                        <div className="flex gap-3 items-center">
                          <div className="relative w-6 h-6 shrink-0">
                            <Image src="/images/icons/location_on.svg" alt="Location" width={24} height={24} className="object-contain" />
                          </div>
                          <p className={`font-normal leading-[1.5] text-nowrap ${textColor}`}>{position.location}</p>
                        </div>
                        <div className="flex gap-3 items-center">
                          <div className="relative w-6 h-6 shrink-0">
                            <Image src="/images/icons/schedule.svg" alt="Schedule" width={24} height={24} className="object-contain" />
                          </div>
                          <p className={`font-normal leading-[1.5] text-nowrap ${textColor}`}>{position.schedule}</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-4 items-start">
                      <Button variant="secondary" href={position.applyUrl} target="_blank">Apply Now</Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
