import Image from 'next/image';
import SectionWrapper from '@/app/components/shared/SectionWrapper';

const images = {
  top: '/images/core/top.jpg',
  right: '/images/core/right.jpg',
  bottom: '/images/core/bottom.jpg',
};

const valuesSection = {
  title: 'Living Our Values, Together',
  description:
    'Our culture is shaped by everyday actions. How we collaborate, connect, and grow as a team reflects the values that guide our work and underpin everything we deliver.',
};

/**
 * Renders a section showcasing core values with a three-image layout.
 *
 * The layout consists of:
 * - A 2-column stack on the left (for the top and bottom images).
 * - A single, tall column on the right (for the right image).
 *
 * The structure is:
 * - Column 1 (Left, max-w-[632px]):
 *   - Image: top.jpg (aspect-[632/346.5])
 *   - Image: bottom.jpg (aspect-[632/357])
 * - Column 2 (Right, max-w-[632px]):
 *   - Image: right.jpg (aspect-[632/767])
 *
 * On mobile, columns stack vertically. Images use aspect ratio for responsive height.
 */
export default function ValuesSection() {
  return (
    <SectionWrapper
      backgroundColor="bg-[#006cc9]" // Matching color from CoreValuesTestimonialSection
      padding="px-5 md:px-16 py-16 md:py-28"
      className="text-center"
    >
      <div className="flex flex-col items-center gap-20">
        {/* Section Title */}
        <div className="max-w-[768px] mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
            {valuesSection.title}
          </h2>
          <p className="text-lg text-white/90">{valuesSection.description}</p>
        </div>

        {/* Content - Image Grid */}
        <div className="flex flex-col md:flex-row gap-12 w-full justify-center">
          {/* Left Column (Stack of two images) */}
          <div className="flex flex-col gap-12 w-full md:max-w-[632px]">
            {/* Top Image (Aspect ratio from Figma: 632x346.5) */}
            <div className="relative w-full aspect-[632/346.5] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={images.top}
                alt="Value Image 1"
                fill
                className="object-cover rounded-xl"
              />
            </div>

            {/* Bottom Image (Aspect ratio from Figma: 632x357) */}
            <div className="relative w-full aspect-[632/357] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={images.bottom}
                alt="Value Image 2"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Column (Single tall image - Aspect ratio from Figma: 632x767) */}
          <div className="flex w-full md:max-w-[632px]">
            <div className="relative w-full aspect-[632/767] rounded-xl overflow-hidden shadow-2xl">
              <Image
                src={images.right}
                alt="Value Image 3"
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
