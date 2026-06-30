'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/app/components/shared/Button';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const TIMELINE_DATA = [
  { year: 'Early 2023', title: 'Company Founded', description: 'Software@Scale was established to drive digital transformation and deliver complex software engineering. Our mission is to empower enterprises with cutting-edge technology solutions.', imageSrc: '/images/history/history1.jpg', alignment: 'right' as const },
  { year: 'Mid 2024', title: 'Trusted by Australia's Leading Enterprises', description: 'S@S partnered with major banks, superfunds and high-growth technology companies, delivering cloud and product engineering across regulated and mission-critical environments.', imageSrc: '/images/history/his33.png', alignment: 'left' as const },
  { year: 'Late 2024', title: 'Powering Innovation', description: 'Established enterprise AI and data engineering guilds, positioning clients at the forefront of emerging technologies while maintaining strong foundations in security, reliability, and delivery.', imageSrc: '/images/history/history3.jpg', alignment: 'right' as const },
  { year: 'Mid 2025', title: 'Rapid National Growth', description: 'Our team scaled to 100+ engineers and technologists supporting clients across Australia and internationally while maintaining a high performance delivery focused culture.', imageSrc: '/images/history/his34.png', alignment: 'left' as const },
  { year: 'Late 2025', title: 'Award-Winning Performance', description: 'S@S was recognised as one of Australia's fastest-growing technology companies, winning the Deloitte Tech Fast 50 Rising Star award in consecutive years and achieving one of the highest growth rates in the program's history, alongside multiple industry awards.', imageSrc: '/images/history/history5.jpg', alignment: 'right' as const },
  { year: '2026 Onwards', title: 'Independent and Engineering-Led', description: 'Proudly bootstrapped, S@S continues to grow exponentially by trusting our engineers to lead delivery, making decisions in the long term interests of our clients and embedding innovation into the way we design, build, and scale software.', imageSrc: '/images/history/history6.jpg', alignment: 'left' as const },
];

const HistoryTimelineSection = () => {
  interface TimelineItemData { year: string; title: string; description: string; imageSrc: string; alignment: 'left' | 'right'; }
  interface TimelineItemProps { item: TimelineItemData; isLast: boolean; rowIndex: number; }

  const TimelineItem = ({ item, isLast, rowIndex }: TimelineItemProps) => {
    const isLeftAligned = item.alignment === 'left';

    const handleNextClick = () => {
      if (!isLast) document.getElementById(`timeline-item-${rowIndex + 1}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    const imageBlock = (
      <motion.div
        className={`w-full md:w-1/2 flex ${isLeftAligned ? 'justify-end' : 'justify-start'} pb-12 md:pb-0 md:pt-8`}
        initial={{ opacity: 0, x: isLeftAligned ? 48 : -48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="relative aspect-square w-full md:w-[576px] rounded-2xl overflow-hidden">
          <Image src={item.imageSrc} alt={item.title} fill className="object-cover rounded-2xl" />
        </div>
      </motion.div>
    );

    const contentBlock = (
      <motion.div
        className={`w-full md:w-1/2 flex flex-col gap-8 md:gap-12 pt-4 md:pt-8 ${isLeftAligned ? 'items-start md:items-end md:text-right' : 'items-start md:text-left'}`}
        initial={{ opacity: 0, x: isLeftAligned ? -48 : 48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.8, ease }}
      >
        <div className="flex flex-col gap-6 w-full">
          <h3 className="font-bold text-[#006cc9] text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.4px] w-full">{item.year}</h3>
          <h4 className="font-bold text-[#0c2080] text-[28px] md:text-[32px] leading-[1.3] tracking-[-0.32px] w-full">{item.title}</h4>
        </div>
        <p className="font-normal text-base md:text-lg leading-[1.5] text-[#00050a] w-full">{item.description}</p>
        {!isLast && (
          <div className={`flex gap-6 items-center ${isLeftAligned ? 'justify-end' : 'justify-start'}`}>
            <Button variant="secondary" onClick={handleNextClick}>Next</Button>
          </div>
        )}
      </motion.div>
    );

    const timelineDivider = (
      <div className="relative w-8 shrink-0 hidden md:flex flex-col items-center self-stretch">
        <div className={`w-[3px] bg-[#00050a] ${rowIndex === 0 ? 'h-6' : 'h-8'}`} />
        <motion.div
          className="relative w-[15px] h-[15px] shrink-0"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2, ease: 'backOut' }}
        >
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="7.5" fill="#00050a"/></svg>
        </motion.div>
        <div className={`w-[3px] bg-[#00050a] grow ${isLast ? 'h-0' : 'h-full'}`} />
      </div>
    );

    return (
      <div id={`timeline-item-${rowIndex}`} className="flex w-full items-start scroll-mt-24">
        {/* Mobile divider */}
        <div className="relative w-5 shrink-0 flex flex-col items-center self-stretch md:hidden">
          <div className={`w-[3px] bg-[#00050a] ${rowIndex === 0 ? 'h-6' : 'h-8'}`} />
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none"><circle cx="7.5" cy="7.5" r="7.5" fill="#00050a"/></svg>
          <div className={`w-[3px] bg-[#00050a] grow ${isLast ? 'h-0' : 'h-full'}`} />
        </div>
        {/* Mobile content */}
        <div className="flex flex-col gap-8 w-full md:hidden pl-4">
          {contentBlock}
          {imageBlock}
        </div>
        {/* Desktop alternating */}
        <div className="hidden md:flex w-full gap-12 items-start">
          {isLeftAligned ? contentBlock : imageBlock}
          {timelineDivider}
          {isLeftAligned ? imageBlock : contentBlock}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#cce1f4] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-center">
        <motion.div
          className="flex flex-col gap-5 md:gap-4 items-center max-w-[768px] w-full text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.7, ease }}
        >
          <h2 className="font-bold text-[#0c2080] text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full">
            Our Journey Through Time
          </h2>
          <p className="font-normal text-base md:text-lg leading-[1.5] text-[#00050a] w-full">
            Discover the pivotal moments that shaped Software at Scale. Our timeline highlights key milestones and achievements since our inception.
          </p>
        </motion.div>
        <div className="flex flex-col gap-0 w-full">
          {TIMELINE_DATA.map((item, index) => (
            <TimelineItem key={item.year} item={item} isLast={index === TIMELINE_DATA.length - 1} rowIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimelineSection;
