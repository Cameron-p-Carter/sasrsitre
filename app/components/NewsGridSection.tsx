import Image from 'next/image';
import Link from 'next/link';

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

        {/* News Grid (Mobile: Stacked, Desktop: 3 Columns) */}
        <div className="flex flex-col gap-12 md:gap-8 w-full">
          {/* We will render rows of 3 items, but since this is the main page, we will just map all items for now */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            {newsItems.map((item) => (
              <div key={item.id} className="flex flex-col gap-6 items-start">
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
                <div className="flex flex-col gap-4 w-full items-start">
                  <div className="flex flex-col gap-2 items-start text-[#00050a] w-full">
                    <h3 className="font-bold text-[20px] md:text-[24px] leading-[1.4] tracking-[-0.2px] md:tracking-[-0.24px] w-full">
                      {item.title}
                    </h3>
                    <p className="font-normal text-base leading-[1.5] w-full">
                      {item.description}
                    </p>
                  </div>
                  
                  {/* Action Button */}
                  <Link href={item.link || "/collections/news/first-article"} className="flex items-center gap-2 cursor-pointer group">
                    <span className="font-medium text-[#00050a] text-base leading-[1.5] whitespace-nowrap group-hover:text-[#0c2080] transition-colors">
                      Read more
                    </span>
                    <div className="w-6 h-6 flex items-center justify-center text-[#00050a] group-hover:text-[#0c2080] transition-colors">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View More Button */}
        <div className="flex justify-center">
          <button className="border border-[#0c2080] text-[#0c2080] px-6 py-2.5 rounded-xl text-base font-medium leading-[1.5] hover:bg-[#0c2080] hover:text-white transition-colors">
            {viewMoreButtonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsGridSection;