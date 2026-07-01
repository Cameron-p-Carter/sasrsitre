'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import Image from 'next/image';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease },
  },
};

function AnimatedCounter({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const match = value.match(/^(\d+)([+X]*)$/);
  const targetNum = match ? parseInt(match[1]) : 0;
  const suffix = match ? match[2] : '';
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v));

  useEffect(() => {
    if (inView && match) {
      const controls = animate(count, targetNum, { duration: 1.8, ease: 'easeOut' });
      return controls.stop;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  if (!match) return <span>{value}</span>;

  return (
    <span ref={ref}>
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

const stats = [
  { value: '180+', description: 'Engineering\nSpecialists' },
  { value: '30+', description: 'Enterprise\nClients' },
  { value: '2X', description: 'Deloitte Rising\nStar Winner' },
];

const logos = [
  { src: '/images/logos/aws.png', description: 'Advanced\nPartner', width: 96, height: 73 },
  { src: '/images/logos/gov.svg', description: 'Government\nApproved ICT Supplier', width: 116, height: 85 },
];

const PartnerStatsSection = () => {
  return (
    <section className="bg-[#cce1f4] w-full px-5 md:px-16 py-16 md:py-20">
      <motion.div
        className="max-w-[1280px] mx-auto flex flex-col gap-10 md:gap-0 md:flex-row md:items-center md:justify-between"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-15% 0px' }}
      >
        {/* Stats: 3-up row */}
        <div className="grid grid-cols-3 gap-4 md:gap-0 md:flex md:items-start">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center md:pr-8 md:mr-8 md:border-r md:border-[#00050a]/15 last:md:border-0 last:md:pr-0 last:md:mr-0"
            >
              <p className="font-extrabold text-[40px] sm:text-[56px] md:text-[64px] lg:text-[80px] leading-[1.2] text-[#006cc9] w-full">
                <AnimatedCounter value={stat.value} />
              </p>
              <p className="font-bold text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px] leading-[1.4] tracking-[-0.2px] text-[#00050a] whitespace-pre-wrap">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Divider — desktop only */}
        <div className="hidden md:block w-px h-20 bg-[#00050a]/15 mx-8 shrink-0" />

        {/* Logos: 2-up row */}
        <div className="grid grid-cols-2 gap-6 md:gap-0 md:flex md:items-start">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center text-center md:pr-8 md:mr-8 last:md:pr-0 last:md:mr-0"
            >
              <div className="h-[70px] md:h-[100px] flex items-center justify-center mb-2 md:mb-4">
                <Image
                  src={logo.src}
                  alt={logo.description}
                  width={logo.width}
                  height={logo.height}
                  className="object-contain max-h-[60px] md:max-h-[85px] w-auto"
                />
              </div>
              <p className="font-bold text-[13px] sm:text-[15px] md:text-[18px] lg:text-[20px] leading-[1.4] tracking-[-0.2px] text-[#00050a] whitespace-pre-wrap">
                {logo.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default PartnerStatsSection;
