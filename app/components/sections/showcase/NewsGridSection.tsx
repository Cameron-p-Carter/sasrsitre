'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/shared/Button';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface NewsItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  author?: string;
  role?: string;
  date?: string;
  readTime?: string;
  link?: string;
  objectPosition?: string;
}

interface NewsGridSectionProps {
  sectionTitle: string;
  sectionDescription: string;
  newsItems: NewsItem[];
  viewMoreButtonText: string;
}

const ICON_CHEVRON_RIGHT = "/images/icons/chevron_right.svg";

const NewsCard = ({ item }: { item: NewsItem }) => (
  <Link href={item.link || "/collections/news/first-article"} className="flex flex-col gap-6 cursor-pointer group">
    <div className="relative aspect-[405.333/270] rounded-2xl w-full overflow-hidden">
      <Image src={item.imageSrc} alt={item.title} fill className={`object-cover rounded-2xl ${item.objectPosition || ''}`} />
    </div>
    <div className="flex flex-col gap-6">
      {(item.date || item.readTime) && (
        <p className="text-sm font-semibold leading-[1.5] text-[#00050a]">
          {item.date}
          {item.date && item.readTime && <span className="font-normal"> | </span>}
          {item.readTime}
        </p>
      )}
      <div className="flex flex-col gap-2">
        <h3 className="font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] text-[#00050a] group-hover:text-[#006cc9] transition-colors">
          {item.title}
        </h3>
        <p className="font-normal text-base leading-[1.5] text-[#00050a]">{item.description}</p>
        {(item.author || item.role) && (
          <p className="text-sm leading-[1.5] text-[#00050a]">
            {item.author && <span className="font-semibold">{item.author}</span>}
            {item.author && item.role && <span className="font-normal"> | </span>}
            {item.role && <span className="font-normal">{item.role}</span>}
          </p>
        )}
      </div>
      <div className="flex items-center gap-2 text-[#00050a]">
        <span className="text-base font-medium leading-[1.5]">Read more</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  </Link>
);

const NewsGridSection = ({ sectionTitle, sectionDescription, newsItems, viewMoreButtonText }: NewsGridSectionProps) => {
  const [showAll, setShowAll] = useState(false);
  const displayedItems = showAll ? newsItems : newsItems.slice(0, 6);
  const hasMore = newsItems.length > 6;

  return (
    <section className="bg-[#cce1f4] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-center">

        <motion.div
          className="flex flex-col gap-4 md:gap-6 items-center max-w-[768px] w-full text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10% 0px' }}
          transition={{ duration: 0.65, ease }}
        >
          <h1 className="font-bold text-[#0c2080] text-[40px] md:text-[56px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.56px] w-full">
            {sectionTitle}
          </h1>
          <p className="font-normal text-base md:text-lg leading-[1.5] text-[#00050a] w-full">
            {sectionDescription}
          </p>
        </motion.div>

        {/* Mobile grid */}
        <motion.div
          className="flex flex-col gap-12 md:hidden w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {displayedItems.map((item) => (
            <motion.div
              key={item.id}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
            >
              <NewsCard item={item} />
            </motion.div>
          ))}
        </motion.div>

        {/* Desktop grid */}
        <motion.div
          className="hidden md:grid grid-cols-3 gap-8 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          <AnimatePresence>
            {displayedItems.map((item) => (
              <motion.div
                key={item.id}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease } } }}
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                layout
              >
                <NewsCard item={item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {hasMore && (
          <div className="flex justify-center w-full">
            <Button variant="secondary" onClick={() => setShowAll(!showAll)}>
              {showAll ? 'Show Less' : viewMoreButtonText}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsGridSection;
