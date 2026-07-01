'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/shared/Button';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface LeadershipSectionProps {
  title: string;
  description: string;
  founders: Array<{
    name: string;
    role: string;
    imageSrc: string;
    description: string;
    objectPosition?: string;
  }>;
  buttonText: string;
  buttonLink?: string;
  underImageSrc: string;
  overImageSrc: string;
}

export default function LeadershipSection({
  title,
  description,
  founders,
  buttonText,
  buttonLink,
  underImageSrc,
  overImageSrc,
}: LeadershipSectionProps) {
  return (
    <section className="bg-[#006cc9] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="flex flex-col gap-12 md:gap-20 items-start max-w-[1280px] mx-auto w-full">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-5 md:gap-6 items-start w-full"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.65, ease }}
        >
          <h2 className="font-bold text-white text-[32px] md:text-[48px] leading-[1.2] tracking-[-0.32px] md:tracking-[-0.48px] w-full">
            {title}
          </h2>
          <p className="font-normal text-white text-base md:text-[18px] leading-[1.5] w-full max-w-[768px]">
            {description}
          </p>
        </motion.div>

        {/* Mobile / tablet layout */}
        <div className="flex flex-col gap-10 w-full lg:hidden">
          {/* Single image */}
          <motion.div
            className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.65, ease }}
          >
            <Image src={underImageSrc} alt="Leadership team" fill className="object-cover" />
          </motion.div>

          {/* Founders */}
          <div className="flex flex-col gap-3 items-start w-full">
            <h3 className="font-bold text-[#14d3f3] text-[24px] leading-[1.3] tracking-[-0.24px]">
              Featured Founders:
            </h3>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-5 w-full"
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
              >
                <div className="aspect-square relative rounded-2xl overflow-hidden w-full">
                  <Image
                    src={founder.imageSrc}
                    alt={founder.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: founder.objectPosition ?? 'center' }}
                  />
                </div>
                <div className="flex flex-col gap-3 w-full">
                  <div className="flex flex-col font-semibold leading-[1.5] text-[18px] w-full">
                    <p className="text-white">{founder.name}</p>
                    <p className="text-[#14d3f3]">{founder.role}</p>
                  </div>
                  <p className="font-normal leading-[1.5] text-white text-base w-full">
                    {founder.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div>
            {buttonLink ? (
              <Link href={buttonLink}><Button variant="primary">{buttonText}</Button></Link>
            ) : (
              <Button variant="primary">{buttonText}</Button>
            )}
          </div>
        </div>

        {/* Desktop layout */}
        <div className="hidden lg:flex gap-16 items-start w-full">
          {/* Overlapping image block */}
          <motion.div
            className="flex-[1_0_0] h-[883px] relative"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.65, ease }}
          >
            <div className="absolute h-[882px] left-0 right-[12.42%] rounded-bl-[16px] rounded-br-[38px] rounded-tl-[16px] rounded-tr-[16px] top-[1.4px] overflow-hidden">
              <Image src={underImageSrc} alt="Main" fill className="object-cover" />
            </div>
            <div className="absolute aspect-[496/274] left-[18.5%] right-0 rounded-[16px] top-[74.4px] overflow-hidden">
              <Image src={overImageSrc} alt="Overlap" fill className="object-cover scale-110 translate-x-2" />
            </div>
          </motion.div>

          {/* Right: founders + button */}
          <motion.div
            className="flex flex-[1_0_0] flex-col gap-8 w-full"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.65, delay: 0.1, ease }}
          >
            <h3 className="font-bold text-[#14d3f3] text-[32px] leading-[1.3] tracking-[-0.32px]">
              Featured Founders:
            </h3>
            <div className="flex gap-16 items-start justify-center w-full">
              {founders.map((founder, index) => (
                <div key={index} className="flex flex-[1_0_0] flex-col gap-6 w-full">
                  <div className="aspect-square relative rounded-2xl overflow-hidden w-full">
                    <Image
                      src={founder.imageSrc}
                      alt={founder.name}
                      fill
                      className="object-cover"
                      style={{ objectPosition: founder.objectPosition ?? 'center' }}
                    />
                  </div>
                  <div className="flex flex-col gap-4 items-center w-full">
                    <div className="flex flex-col font-semibold items-center leading-[1.5] text-[20px] w-full">
                      <p className="text-white w-full">{founder.name}</p>
                      <p className="text-[#14d3f3] w-full">{founder.role}</p>
                    </div>
                    <p className="font-normal leading-[1.5] text-white text-[16px] w-full">
                      {founder.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex items-center">
              {buttonLink ? (
                <Link href={buttonLink}><Button variant="primary">{buttonText}</Button></Link>
              ) : (
                <Button variant="primary">{buttonText}</Button>
              )}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
