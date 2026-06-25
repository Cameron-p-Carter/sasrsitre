'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] },
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

const PartnerStatsSection = () => {
  const stats = [
    { value: '180+', description: 'Engineering\nSpecialists' },
    { value: '30+', description: 'Enterprise\nClients' },
    { value: '2X', description: 'Deloitte Rising\nStar Winner' },
    {
      src: '/images/logos/aws.png',
      description: 'Advanced\nPartner',
      isImage: true,
      width: 96,
      height: 73,
    },
    {
      src: '/images/logos/gov.svg',
      description: 'Government\nApproved ICT Supplier',
      isImage: true,
      width: 116,
      height: 85,
    },
  ];

  return (
    <section className="bg-[#cce1f4] w-full py-20 px-4 md:px-16">
      <motion.div
        className="max-w-[1280px] mx-auto flex flex-wrap gap-8 items-start justify-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-15% 0px' }}
      >
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center justify-start text-center w-[200px] border-r border-[#00050a]/15 last:border-0 last:pr-0 pr-6"
          >
            {stat.isImage ? (
              <div className="h-[100px] flex items-center justify-center mb-4">
                <Image
                  src={stat.src!}
                  alt={stat.description}
                  width={stat.width}
                  height={stat.height}
                  className="object-contain"
                />
              </div>
            ) : (
              <p className="font-extrabold text-[64px] md:text-[80px] leading-[1.3] text-[#006cc9] w-full">
                <AnimatedCounter value={stat.value!} />
              </p>
            )}
            <p className="font-bold text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.2px] text-[#00050a] whitespace-pre-wrap">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default PartnerStatsSection;
