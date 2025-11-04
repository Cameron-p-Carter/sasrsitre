import Image from 'next/image';

// Image asset from Figma context
const BACKGROUND_IMAGE_SRC = "/images/placeholder/placeholder17.jpg";

const CoreValuesSection = () => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 overflow-hidden">
          <Image
            src={BACKGROUND_IMAGE_SRC}
            alt="Background"
            fill
            className="object-cover object-top"
            priority
          />
        </div>
        {/* Overlay: bg-[rgba(12,32,128,0.6)] -> bg-[#0c2080] with opacity 60% */}
        <div className="absolute inset-0 bg-[#0c2080] opacity-60" />
      </div>

      {/* Content Container (Desktop Layout) */}
      <div className="relative z-10 box-border flex flex-col gap-[80px] items-center px-16 py-28 w-full">
        <div className="flex flex-col gap-[80px] items-start max-w-[1280px] mx-auto w-full">
          <div className="flex gap-[80px] items-start w-full">
            {/* Left Column: Tagline and Title */}
            <div className="flex flex-col gap-4 w-1/2 flex-shrink-0">
              <p className="font-semibold text-base leading-[1.5] text-[#14d3f3] whitespace-pre">
                Empower
              </p>
              <h1 className="font-extrabold text-white text-[56px] leading-[1.2] tracking-[-0.56px]">
                <span>Our Core </span>
                <span className="text-[#14d3f3]">Values</span>
              </h1>
            </div>
            
            {/* Right Column: Description */}
            <div className="flex flex-col gap-8 w-1/2">
              <p className="font-normal text-lg leading-[1.5] text-white">
                At Software at Scale, we are committed to driving innovation and excellence in every project. Our core values of integrity, collaboration, and customer focus guide our mission to empower businesses through technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValuesSection;