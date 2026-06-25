'use client';

import { motion } from 'framer-motion';
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

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const BoostUnblockSafeguardSection = () => {
  return (
    <section className="bg-[#006cc9] w-full py-20 px-4 md:px-16 text-white">
      <motion.div
        className="max-w-[1280px] mx-auto flex flex-wrap gap-8 items-start justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-15% 0px' }}
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="flex flex-col items-center justify-start text-center w-full md:w-[30%] min-w-[250px]"
            whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
          >
            <motion.div
              className="h-[48px] w-[48px] mb-6 relative"
              initial={{ scale: 0, rotate: -15, opacity: 0 }}
              whileInView={{ scale: 1, rotate: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.25 + index * 0.18, ease: 'backOut' }}
            >
              <Image src={feature.icon} alt={feature.title} fill className="object-contain" />
            </motion.div>
            <h3 className="font-bold text-[32px] leading-[1.3] text-[#14d3f3] mb-6 tracking-[-0.32px]">
              {feature.title}
            </h3>
            <p className="font-normal text-[16px] leading-[1.5]">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BoostUnblockSafeguardSection;
