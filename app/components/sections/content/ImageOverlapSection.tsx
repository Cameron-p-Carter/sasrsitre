import Image from 'next/image';
import Button from '@/app/components/shared/Button';

interface ImageOverlapSectionProps {
  title: string;
  description: string;
  underImageSrc: string;
  overImageSrc: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

export default function ImageOverlapSection({
  title,
  description,
  underImageSrc,
  overImageSrc,
  primaryButtonText,
  secondaryButtonText,
}: ImageOverlapSectionProps) {
  return (
    <section className="bg-[#cce1f4] flex flex-col gap-12 md:gap-16 lg:gap-20 items-center px-5 md:px-8 lg:px-16 py-16 md:py-20 lg:py-28 w-full">
      <div className="flex flex-col gap-12 md:gap-16 lg:gap-20 max-w-[1280px] w-full">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center w-full">
          {/* Image Container */}
          <div className="w-full lg:flex-1 h-[286px] md:h-[400px] lg:h-[532px] relative">
            {/* Main Background Image (goes under) */}
            <div className="absolute h-full left-0 right-[14.74%] md:right-[12.5%] top-0 rounded-2xl overflow-hidden">
              <Image
                src={underImageSrc}
                alt={title}
                fill
                className="object-cover"
              />
            </div>
            
            {/* Overlapping Image (goes on top) */}
            <div className="absolute left-[41.67%] md:left-[40.13%] right-0 top-[34px] md:top-12 lg:top-16 aspect-[195.417/129.92] md:aspect-[364/242] rounded-2xl overflow-hidden">
              <Image
                src={overImageSrc}
                alt={title}
                fill
                className="object-cover scale-110"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full lg:flex-1 flex flex-col gap-6 md:gap-8">
            {/* Section Title */}
            <div className="flex flex-col gap-3 md:gap-4 w-full">
              <div className="flex flex-col gap-5 md:gap-6 w-full">
                <h2 className="font-bold text-[#0c2080] text-[36px] md:text-[44px] lg:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.44px] lg:tracking-[-0.48px] w-full">
                  {title}
                </h2>
                <p className="font-normal text-[#00050a] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5] w-full">
                  {description}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-6 items-center">
              <Button variant="primary" href="/core-values">
                {primaryButtonText}
              </Button>
              <Button variant="link" href="/contact-us">
                {secondaryButtonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}