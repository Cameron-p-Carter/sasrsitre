import Image from 'next/image';
import Link from 'next/link';

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
            <Link href={primaryButtonUrl} className="bg-[#5ae0f6] border border-[#5ae0f6] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl hover:bg-[#4dd0e6] transition-colors">
              <span className="font-medium text-[#0c2080] text-[16px] leading-[1.5] whitespace-nowrap">
                {primaryButtonText}
              </span>
            </Link>
            <Link href="/core-values" className="border border-[#5ae0f6] border-solid flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl hover:bg-[#5ae0f6] hover:text-[#0c2080] transition-colors">
              <span className="font-medium text-[#5ae0f6] text-[16px] leading-[1.5] whitespace-nowrap hover:text-[#0c2080]">
                {secondaryButtonText}
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}