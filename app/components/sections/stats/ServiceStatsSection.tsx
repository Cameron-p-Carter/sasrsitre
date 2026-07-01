'use client';

import { useEffect, useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface Stat {
  value: string;
  description: string;
}

interface ServiceStatsSectionProps {
  title: string;
  listItems: string[];
  stats: Stat[];
  backgroundColor: string;
  textColor: string;
  titleColor: string;
  accentColor: string;
}

function AnimatedStat({ value, accentColor, textColor, description }: { value: string; accentColor: string; textColor: string; description: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-10% 0px' });
  const match = value.match(/^(\d+)([^0-9]*)$/);
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

  return (
    <div ref={ref} className="flex flex-col gap-2 items-start w-full">
      <p className={`font-extrabold text-[64px] md:text-[80px] leading-[1.3] ${accentColor} w-full`}>
        {match ? <><motion.span>{rounded}</motion.span>{suffix}</> : value}
      </p>
      <p className={`font-bold text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.2px] w-full ${textColor}`}>
        {description}
      </p>
    </div>
  );
}

const ServiceStatsSection = ({
  title,
  listItems,
  stats,
  backgroundColor,
  textColor,
  titleColor,
  accentColor,
}: ServiceStatsSectionProps) => {
  return (
    <section className={`${backgroundColor} px-5 md:px-16 py-16 md:py-28 w-full`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row gap-12 md:gap-[80px] items-start w-full">

          {/* Left: slides in from left */}
          <motion.div
            className="flex flex-col gap-8 md:gap-12 w-full md:w-1/2 items-start"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.65, ease }}
          >
            <div className="flex flex-col gap-4 md:gap-6 items-start w-full">
              <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
                {title}
              </h2>
              <ul className={`list-disc list-outside pl-5 space-y-4 font-normal text-base md:text-lg leading-[1.5] w-full ${textColor}`}>
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: stats stagger in */}
          <motion.div
            className="flex flex-col gap-12 w-full md:w-1/2 items-start md:pl-[80px] md:border-l border-solid border-gray-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 16 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
                }}
              >
                <AnimatedStat value={stat.value} accentColor={accentColor} textColor={textColor} description={stat.description} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServiceStatsSection;
