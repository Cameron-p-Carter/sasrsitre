'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/app/components/shared/Button';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const FEATURES_DATA = [
  { imageSrc: '/images/placeholder/placeholder32.jpg', title: 'Innovations That Have Transformed Our Approach to Client Solutions', description: 'Since our inception, we have embraced cutting-edge technologies to drive success.', buttonText: 'Learn More', link: '/core-values' },
  { imageSrc: '/images/placeholder/placeholder33.jpg', title: 'Key Partnerships That Enhance Our Service Offerings', description: 'Collaborations with industry leaders have strengthened our capabilities and reach.', buttonText: 'Join Us', link: '/careers' },
  { imageSrc: '/images/placeholder/placeholder34.jpg', title: 'Our Commitment to Continuous Improvement and Innovation', description: 'We continually refine our processes to deliver exceptional results for clients.', buttonText: 'Contact', link: '/contact-us' },
];

const HistoryFeaturesSection = () => {
  return (
    <section className="bg-[#006cc9] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-center">
        <motion.h2
          className="font-bold text-white text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.32px] md:tracking-[-0.4px] max-w-[768px] text-center w-full"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease }}
        >
          Milestones That Define Our Journey in Technology Consulting
        </motion.h2>

        <motion.div
          className="flex flex-col md:flex-row gap-12 md:gap-12 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
        >
          {FEATURES_DATA.map((feature, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-6 md:gap-8 w-full md:w-1/3 items-center text-center overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
            >
              <div className="relative aspect-[335/198] md:aspect-[394.667/240] rounded-2xl w-full overflow-hidden">
                <motion.div
                  className="absolute inset-0"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.45, ease }}
                >
                  <Image src={feature.imageSrc} alt={feature.title} fill className="object-cover rounded-2xl" />
                </motion.div>
              </div>
              <div className="flex flex-col gap-6 md:gap-8 w-full items-center">
                <div className="flex flex-col gap-3 md:gap-4 w-full items-center text-white">
                  <h3 className="font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] w-full">{feature.title}</h3>
                  <p className="font-normal text-base leading-[1.5] w-full">{feature.description}</p>
                </div>
                <div className="flex flex-col gap-2 w-full items-center">
                  <Button variant="link" href={feature.link} className="!text-[#14d3f3] hover:!text-[#5ae0f6]">{feature.buttonText}</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryFeaturesSection;
