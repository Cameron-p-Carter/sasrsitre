import Image from 'next/image';
import SectionWrapper from './SectionWrapper';
import { ReactNode } from 'react';

type ContentVariant = 'simple' | 'list' | 'custom';

interface ImageTextSectionProps {
  // Layout
  imageOnRight?: boolean;
  variant?: ContentVariant;

  // Content
  title: string;
  imageSrc: string;
  imageAlt?: string;

  // Variant-specific content
  description?: string; // For 'simple' variant
  introDescription?: string; // For 'list' variant
  listTitle?: string; // For 'list' variant
  listItems?: string[]; // For 'list' variant
  customContent?: ReactNode; // For 'custom' variant

  // Styling
  backgroundColor?: string;
  textColor?: string;
  titleColor?: string;

  // Image sizing
  imageHeight?: string;

  // Section wrapper props
  id?: string;
}

/**
 * Unified component for Image + Text section layouts.
 * Supports three variants:
 * - 'simple': Title + paragraph text
 * - 'list': Title + intro + list of items
 * - 'custom': Title + custom React content
 */
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
            {introDescription && (
              <p className="mb-4">
                {introDescription}
              </p>
            )}

            {listTitle && (
              <h3 className={`font-bold text-[24px] leading-[1.3] tracking-[-0.24px] mt-6 mb-4 ${titleColor}`}>
                {listTitle}
              </h3>
            )}

            {listItems.length > 0 && (
              <ol className="list-decimal list-inside space-y-2">
                {listItems.map((item, index) => (
                  <li key={index} className="text-base">
                    {item}
                  </li>
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
          <div className={`font-normal text-base md:text-[16px] leading-[1.5] w-full ${textColor}`}>
            {description && description.split('\n\n').map((paragraph, index) => (
              <p key={index} className="mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        );
    }
  };

  const content = (
    <div className={`content-stretch flex flex-col gap-6 md:gap-8 grow md:basis-0 items-start relative shrink-0 w-full md:w-1/2 order-1 ${imageOnRight ? 'md:order-1' : 'md:order-2'}`}>
      <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
        {title}
      </h2>
      {renderContent()}
    </div>
  );

  const image = (
    <div className={`relative rounded-2xl shrink-0 w-full h-[335px] md:h-auto md:w-1/2 order-2 ${imageOnRight ? 'md:order-2' : 'md:order-1'}`}>
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
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-stretch">
        {imageOnRight ? (
          <>
            {content}
            {image}
          </>
        ) : (
          <>
            {image}
            {content}
          </>
        )}
      </div>
    </SectionWrapper>
  );
}
