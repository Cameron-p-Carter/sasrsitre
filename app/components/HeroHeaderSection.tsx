import Image from 'next/image';

interface HeroHeaderSectionProps {
  imageSrc: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  overlayOpacity: number; // 0.5 for People, 0.6 for Core Values
}

export default function HeroHeaderSection({
  imageSrc,
  tagline,
  title,
  titleHighlight,
  description,
  overlayOpacity,
}: HeroHeaderSectionProps) {
  const overlayColor = `rgba(12, 32, 128, ${overlayOpacity})`;

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={imageSrc}
            alt="Background"
            fill
            className="object-cover"
            style={{ objectPosition: 'top' }}
            priority
          />
        </div>
        {/* Blue Overlay */}
        <div className="absolute inset-0 bg-[#0c2080]" style={{ opacity: overlayOpacity }} />
      </div>

      {/* Content Container */}
      <div className="relative z-10 box-border flex flex-col gap-12 md:gap-[80px] items-center px-5 md:px-16 pt-24 pb-16 md:py-28 w-full">
        <div className="flex flex-col gap-5 md:gap-[80px] items-start max-w-[1280px] mx-auto w-full">
          {titleHighlight ? (
            // Horizontal layout when highlight exists
            <div className="flex flex-col md:flex-row gap-5 md:gap-[80px] items-start w-full">
              {/* Left Column: Tagline and Title */}
              <div className="flex flex-col gap-3 md:gap-4 w-full md:w-1/2 flex-shrink-0">
                <p className="font-semibold text-base leading-[1.5] text-[#14d3f3] whitespace-pre">
                  {tagline}
                </p>
                <h1 className="font-extrabold text-white text-[40px] md:text-[56px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.56px]">
                  <span>{title} </span>
                  <span className="text-[#14d3f3]">{titleHighlight}</span>
                </h1>
              </div>
              
              {/* Right Column: Description */}
              <div className="flex flex-col gap-6 md:gap-8 w-full md:w-1/2">
                <p className="font-normal text-base md:text-lg leading-[1.5] text-white">
                  {description}
                </p>
              </div>
            </div>
          ) : (
            // Vertical layout when no highlight - following Figma design
            <div className="flex flex-col gap-8 items-start w-full max-w-[768px]">
              <div className="flex flex-col gap-4 items-start w-full">
                <div className="flex items-center">
                  <p className="font-semibold text-base leading-[1.5] text-[#14d3f3] whitespace-pre">
                    {tagline}
                  </p>
                </div>
                <div className="flex flex-col gap-6 items-start text-white w-full">
                  <h1 className="font-extrabold text-[40px] md:text-[56px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.56px] w-full">
                    {title}
                  </h1>
                  <p className="font-normal text-base md:text-lg leading-[1.5] w-full">
                    {description}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}