'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface BenefitItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface CareersBenefitsSectionProps {
  benefits: BenefitItem[];
  backgroundColor: string;
  titleColor: string;
  textColor: string;
}

export default function CareersBenefitsSection({ benefits, backgroundColor, titleColor, textColor }: CareersBenefitsSectionProps) {
  return (
    <section className={`${backgroundColor} w-full`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-28">
        <div className="flex flex-col gap-12 md:gap-20 items-start w-full">
          <motion.div
            className="flex flex-col md:flex-row gap-12 items-start w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-6 md:gap-8 items-start flex-1 w-full"
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
                }}
              >
                <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
                  <motion.div
                    className="relative w-12 h-12 shrink-0"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.2 + index * 0.12, ease: 'backOut' }}
                  >
                    <Image src={benefit.iconSrc} alt={benefit.title} fill className="object-contain" />
                  </motion.div>
                  <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
                    <h3 className={`font-bold text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.24px] md:tracking-[-0.32px] w-full ${titleColor}`}>
                      {benefit.title}
                    </h3>
                    <p className={`font-normal text-base leading-[1.5] w-full ${textColor}`}>{benefit.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
