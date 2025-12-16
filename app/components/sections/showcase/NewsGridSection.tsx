import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/shared/Button';

interface NewsItem {
  id: number;
  imageSrc: string;
  title: string;
  description: string;
  link?: string;
}

interface NewsGridSectionProps {
  sectionTitle: string;
  sectionDescription: string;
  newsItems: NewsItem[];
  viewMoreButtonText: string;
}

const ICON_CHEVRON_RIGHT = "/images/icons/chevron_right.svg"; // Reusing existing icon path

const NewsGridSection = ({
  sectionTitle,
  sectionDescription,
  newsItems,
  viewMoreButtonText,
}: NewsGridSectionProps) => {
  return (
    <section className="bg-[#cce1f4] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-center">
        
        {/* Section Header */}
        <div className="flex flex-col gap-4 md:gap-6 items-center max-w-[768px] w-full text-center">
          <h1 className="font-bold text-[#0c2080] text-[40px] md:text-[56px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.56px] w-full">
            {sectionTitle}
          </h1>
          <p className="font-normal text-base md:text-lg leading-[1.5] text-[#00050a] w-full">
            {sectionDescription}
          </p>
        </div>

        {/* Mobile Layout */}
        <div className="flex flex-col gap-12 md:hidden w-full">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={item.link || "/collections/news/first-article"}
              className="flex flex-col gap-5 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative aspect-[405.333/270] rounded-2xl w-full overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <h3 className="font-bold text-[20px] leading-[1.4] tracking-[-0.2px] text-[#00050a] group-hover:text-[#006cc9] transition-colors">
                    {item.title}
                  </h3>
                  <p className="font-normal text-base leading-[1.5] text-[#00050a]">
                    {item.description}
                  </p>
                </div>

                {/* Action Text */}
                <div className="flex items-center gap-2">
                  <span className="text-base font-medium leading-[1.5] text-[#00050a]">
                    Read more
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Desktop Layout: 3 Columns */}
        <div className="hidden md:grid grid-cols-3 gap-8 w-full">
          {newsItems.map((item) => (
            <Link
              key={item.id}
              href={item.link || "/collections/news/first-article"}
              className="flex flex-col gap-6 cursor-pointer group"
            >
              {/* Image */}
              <div className="relative aspect-[405.333/270] rounded-2xl w-full overflow-hidden">
                <Image
                  src={item.imageSrc}
                  alt={item.title}
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-4">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-bold text-[24px] leading-[1.4] tracking-[-0.24px] text-[#00050a] group-hover:text-[#006cc9] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-normal text-base leading-[1.5] text-[#00050a]">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Action Text */}
                <div className="flex items-center gap-2">
                  <span className="text-base font-medium leading-[1.5] text-[#00050a]">
                    Read more
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsGridSection;