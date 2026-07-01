'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import { ReactNode } from 'react';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

type ContentVariant = 'simple' | 'list' | 'custom';

interface OutcomeItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface ImageTextSectionProps {
  imageOnRight?: boolean;
  variant?: ContentVariant;
  title: string;
  imageSrc: string;
  imageAlt?: string;
  description?: string;
  introDescription?: string;
  listTitle?: string;
  listItems?: string[];
  customContent?: ReactNode;
  outcomeItems?: OutcomeItem[];
  backgroundColor?: string;
  textColor?: string;
  titleColor?: string;
  imageHeight?: string;
  id?: string;
}

export default function ImageTextSection({
  imageOnRight = true,
  variant = 'simple',
  title,
  imageSrc,
  imageAlt,
  description,
  introDescription,
  listTitle,
  listItems = [],
  customContent,
  outcomeItems,
  backgroundColor = 'bg-white',
  textColor = 'text-[#00050a]',
  titleColor = 'text-[#0c2080]',
  imageHeight = 'h-[335px] md:h-[420px]',
  id,
}: ImageTextSectionProps) {

  const renderContent = () => {
    switch (variant) {
      case 'list':
        return (
          <div className={`font-normal text-base md:text-[16px] leading-[1.5] w-full ${textColor}`}>
            {introDescription && <p className="mb-4">{introDescription}</p>}
            {listTitle && (
              <h3 className={`font-bold text-[24px] leading-[1.3] tracking-[-0.24px] mt-6 mb-4 ${titleColor}`}>
                {listTitle}
              </h3>
            )}
            {listItems.length > 0 && (
              <ol className="list-decimal list-inside space-y-2">
                {listItems.map((item, index) => (
                  <li key={index} className="text-base">{item}</li>
                ))}
              </ol>
            )}
          </div>
        );
      case 'custom':
        return customContent;
      case 'simple':
      default:
        return (
          <div className="flex flex-col gap-8 w-full">
            <div className={`font-normal text-base md:text-[16px] leading-[1.5] w-full ${textColor}`}>
              {description && description.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-4 last:mb-0">{paragraph}</p>
              ))}
            </div>
            {outcomeItems && outcomeItems.length > 0 && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-x-6 md:gap-y-10 w-full"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-10% 0px' }}
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              >
                {outcomeItems.map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex flex-col gap-4 items-start w-full"
                    variants={{
                      hidden: { opacity: 0, y: 12 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease } },
                    }}
                  >
                    <div className="relative w-12 h-12 shrink-0">
                      <Image src={item.iconSrc} alt={item.title} width={48} height={48} className="object-contain" />
                    </div>
                    <div className="flex flex-col gap-2 items-start w-full">
                      <p className="font-bold text-[18px] md:text-[20px] leading-[1.4] tracking-[-0.2px] w-full text-[#00050a]">
                        {item.title}
                      </p>
                      <p className={`font-normal text-base leading-[1.5] w-full ${textColor}`}>
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        );
    }
  };

  const content = (
    <motion.div
      className={`content-stretch flex flex-col gap-6 md:gap-8 grow md:basis-0 items-start relative shrink-0 w-full md:w-1/2 order-2 ${imageOnRight ? 'md:order-1' : 'md:order-2'}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.65, ease }}
    >
      <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
        {title}
      </h2>
      {renderContent()}
    </motion.div>
  );

  const image = (
    <motion.div
      className={`relative rounded-2xl shrink-0 w-full h-[335px] md:h-auto md:w-1/2 order-1 overflow-hidden ${imageOnRight ? 'md:order-2' : 'md:order-1'}`}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.65, delay: 0.1, ease }}
    >
      <Image
        src={imageSrc}
        alt={imageAlt || title}
        fill
        className="object-cover rounded-2xl"
      />
    </motion.div>
  );

  return (
    <SectionWrapper backgroundColor={backgroundColor} id={id}>
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-stretch">
        {imageOnRight ? <>{content}{image}</> : <>{image}{content}</>}
      </div>
    </SectionWrapper>
  );
}
