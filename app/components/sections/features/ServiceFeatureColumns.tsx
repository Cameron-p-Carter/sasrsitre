'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface FeatureColumn {
  iconSrc?: string;
  title: string;
  content: string | string[];
}

interface ServiceFeatureColumnsProps {
  columns: FeatureColumn[];
  backgroundColor: string;
  textColor: string;
  titleColor: string;
}

const ServiceFeatureColumns = ({ columns, backgroundColor, textColor, titleColor }: ServiceFeatureColumnsProps) => {
  return (
    <section className={`${backgroundColor} px-5 md:px-16 pb-16 md:pb-28 w-full`}>
      <div className="max-w-[1280px] mx-auto">
        <motion.div
          className="flex flex-col md:flex-row gap-12 md:gap-12 w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
        >
          {columns.map((column, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-6 md:gap-8 w-full md:w-1/3 items-start"
              variants={{
                hidden: { opacity: 0, y: 36 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
            >
              {column.iconSrc && (
                <div className="relative w-12 h-12 shrink-0">
                  <Image src={column.iconSrc} alt={column.title} width={48} height={48} className="object-contain" />
                </div>
              )}
              <div className="flex flex-col gap-6 md:gap-8 items-start w-full">
                <h3 className={`font-bold text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.24px] md:tracking-[-0.32px] w-full ${titleColor}`}>
                  {column.title}
                </h3>
                <div className={`font-normal text-base leading-[1.5] w-full ${textColor}`}>
                  {Array.isArray(column.content) ? (
                    <ul className="list-disc list-outside pl-5 space-y-2">
                      {column.content.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  ) : index === 2 && typeof column.content === 'string' && column.content.includes('•') ? (
                    <ul className="list-disc list-outside pl-5 space-y-2 md:columns-2" style={{ columnGap: '0px' }}>
                      {column.content.split('•').map(item => item.trim()).filter(item => item.length > 0).map((item, i) => (
                        <li key={i} className="break-inside-avoid">{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="whitespace-pre-wrap">{column.content}</p>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceFeatureColumns;
