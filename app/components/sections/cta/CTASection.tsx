import Image from 'next/image';
import Button from '@/app/components/shared/Button';

interface CTASectionProps {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonUrl?: string;
}

export default function CTASection({
  imageSrc,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonUrl = "/contact-us",
}: CTASectionProps) {
  return (
    <section className="relative px-5 md:px-16 py-16 md:py-28">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={imageSrc}
          alt="Call to action background"
          fill
          className="object-cover"
        />
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[rgba(12,32,128,0.5)]"></div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-12 md:gap-8 items-center max-w-[768px] mx-auto text-center">
          {/* Content */}
          <div className="flex flex-col gap-5 md:gap-6 text-white">
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px]">
              {title}
            </h2>
            <p className="text-[16px] md:text-[18px] font-normal leading-[1.5]">
              {description}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <Button variant="primary" href={primaryButtonUrl}>
              {primaryButtonText}
            </Button>
            <Button variant="outline" href="/core-values">
              {secondaryButtonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}