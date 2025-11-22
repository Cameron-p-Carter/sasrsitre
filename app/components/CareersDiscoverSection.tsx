'use client';

import Image from 'next/image';
import Link from 'next/link';

interface CareersDiscoverSectionProps {
  sectionTitle: string;
  sectionDescription: string;
  imageSrc: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonColor: string;
  secondaryButtonColor: string;
  primaryButtonUrl?: string;
  secondaryButtonUrl?: string;
  onPrimaryClick?: () => void;
  onSecondaryClick?: () => void;
}

export default function CareersDiscoverSection({
  sectionTitle,
  sectionDescription,
  imageSrc,
  backgroundColor,
  titleColor,
  textColor,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonColor,
  secondaryButtonColor,
  primaryButtonUrl = "#",
  secondaryButtonUrl = "#",
  onPrimaryClick,
  onSecondaryClick,
}: CareersDiscoverSectionProps) {
  return (
    <section className={`${backgroundColor} w-full`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-28">
        <div className="flex flex-col gap-12 md:gap-20 items-center w-full">
          <div className="flex flex-col lg:flex-row gap-12 md:gap-20 items-center h-auto lg:h-[640px] w-full">
            
            {/* Content Left */}
            <div className="flex flex-col gap-6 md:gap-8 items-start flex-1 w-full">
              {/* Section Title */}
              <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
                <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
                  <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
                    {sectionTitle}
                  </h2>
                  <p className={`font-normal text-base md:text-[18px] leading-[1.5] w-full ${textColor}`}>
                    {sectionDescription}
                  </p>
                </div>
              </div>
              
              {/* Actions */}
              <div className="flex gap-6 items-center">
                <Link
                  href={primaryButtonUrl}
                  className={`border border-solid ${primaryButtonColor} flex gap-2 items-center justify-center px-6 py-2.5 rounded-xl`}
                >
                  <span className={`font-medium text-base leading-[1.5] ${primaryButtonColor.replace('border-', 'text-')}`}>
                    {primaryButtonText}
                  </span>
                </Link>

                <Link
                  href={secondaryButtonUrl}
                  className="flex gap-2 items-center justify-center px-0 py-2.5 rounded-xl"
                >
                  <span className={`font-medium text-base leading-[1.5] ${secondaryButtonColor}`}>
                    {secondaryButtonText}
                  </span>
                  <div className="relative w-6 h-6 shrink-0">
                    <Image
                      src="/images/icons/chevron_right.svg"
                      alt="Arrow"
                      fill
                      className="object-contain"
                    />
                  </div>
                </Link>
              </div>
            </div>
            
            {/* Image */}
            <div className="relative flex-1 w-full h-[348px] md:h-[640px] rounded-2xl overflow-hidden">
              <Image
                src={imageSrc}
                alt={sectionTitle}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}