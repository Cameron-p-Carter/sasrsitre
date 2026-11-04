'use client';

import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import { ReactNode } from 'react';

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
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-6 lg:gap-y-10 w-full">
                {outcomeItems.map((item, index) => (
                  <div key={index} className="flex flex-col gap-4 items-start w-full">
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
                  </div>
                ))}
              </div>
            )}
          </div>
        );
    }
  };

  const content = (
    <div className={`content-stretch flex flex-col gap-6 md:gap-8 grow lg:basis-0 items-start relative shrink-0 min-w-0 w-full lg:w-1/2 order-2 ${imageOnRight ? 'lg:order-1' : 'lg:order-2'}`}>
      <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
        {title}
      </h2>
      {renderContent()}
    </div>
  );

  const image = (
    <div className={`relative rounded-2xl shrink-0 w-full h-[335px] md:h-[420px] lg:h-auto lg:w-1/2 order-1 overflow-hidden ${imageOnRight ? 'lg:order-2' : 'lg:order-1'}`}>
      <Image
        src={imageSrc}
        alt={imageAlt || title}
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  );

  return (
    <SectionWrapper backgroundColor={backgroundColor} id={id}>
      {/* Side by side from 1024px; on tablets the two halves are too narrow for the 48px heading */}
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-stretch">
        {imageOnRight ? <>{content}{image}</> : <>{image}{content}</>}
      </div>
    </SectionWrapper>
  );
}
