import Image from 'next/image';

const TIMELINE_DATA = [
  {
    year: '2015',
    title: 'Company Founded',
    description: 'Software at Scale was established to drive digital transformation. Our mission is to empower enterprises with cutting-edge technology solutions.',
    imageSrc: '/images/placeholder/placeholder28.jpg',
    alignment: 'right' as const, // Content on left, Image on right
  },
  {
    year: '2018',
    title: 'First Major Client',
    description: 'We secured our first major client in the financial services sector. This partnership marked a significant step in our growth journey.',
    imageSrc: '/images/placeholder/placeholder29.jpg',
    alignment: 'left' as const, // Content on right, Image on left
  },
  {
    year: '2020',
    title: 'Expanded Service Offerings',
    description: 'We broadened our service offerings to include cloud engineering and security architecture. This expansion allowed us to better serve our clients\' evolving needs.',
    imageSrc: '/images/placeholder/placeholder30.jpg',
    alignment: 'right' as const, // Content on left, Image on right
  },
  {
    year: '2024 Onwards',
    title: 'Achieved Industry Recognition',
    description: 'Software at Scale received multiple awards for innovation and excellence. Our commitment to quality and client success continues to drive our achievements.',
    imageSrc: '/images/placeholder/placeholder31.jpg',
    alignment: 'left' as const, // Content on right, Image on left
  },
];

const HistoryTimelineSection = () => {
  interface TimelineItemData {
    year: string;
    title: string;
    description: string;
    imageSrc: string;
    alignment: 'left' | 'right';
  }

  interface TimelineItemProps {
    item: TimelineItemData;
    isLast: boolean;
    rowIndex: number;
  }

  const TimelineItem = ({ item, isLast, rowIndex }: TimelineItemProps) => {
    const isLeftAligned = item.alignment === 'left';
    
    const imageBlock = (
      <div className={`w-full md:w-1/2 flex ${isLeftAligned ? 'justify-end' : 'justify-start'} pb-12 md:pb-0 md:pt-8 px-0 md:px-0`}>
        <div className="relative aspect-square w-full md:w-[576px] rounded-2xl overflow-hidden">
          <Image
            src={item.imageSrc}
            alt={item.title}
            fill
            className="object-cover rounded-2xl"
          />
        </div>
      </div>
    );

    const contentBlock = (
      <div className={`w-full md:w-1/2 flex flex-col gap-8 md:gap-12 px-0 md:px-0 pt-4 md:pt-8 ${isLeftAligned ? 'items-start md:text-left' : 'items-start md:items-end md:text-right'}`}>
        <div className="flex flex-col gap-6 w-full">
          <h3 className="font-bold text-[#006cc9] text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.4px] w-full">
            {item.year}
          </h3>
          <h4 className="font-bold text-[#0c2080] text-[28px] md:text-[32px] leading-[1.3] tracking-[-0.32px] w-full">
            {item.title}
          </h4>
        </div>
        <p className="font-normal text-base md:text-lg leading-[1.5] text-[#00050a] w-full">
          {item.description}
        </p>
        <div className={`flex gap-6 items-center ${isLeftAligned ? 'justify-start' : 'justify-end'}`}>
          <button className="border border-[#0c2080] border-solid flex items-center justify-center px-6 py-2.5 rounded-xl">
            <span className="font-medium text-[#0c2080] text-base leading-[1.5] whitespace-nowrap">
              Next
            </span>
          </button>
        </div>
      </div>
    );

    const timelineDivider = (
      <div className="relative w-8 shrink-0 hidden md:flex flex-col items-center self-stretch">
        <div className={`w-[3px] bg-[#00050a] ${rowIndex === 0 ? 'h-6' : 'h-8'}`} />
        <div className="relative w-[15px] h-[15px] shrink-0">
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="7.5" cy="7.5" r="7.5" fill="#00050a"/>
          </svg>
        </div>
        <div className={`w-[3px] bg-[#00050a] grow ${isLast ? 'h-0' : 'h-full'}`} />
      </div>
    );

    return (
      <div className="flex w-full items-start">
        {/* Mobile Timeline Divider (Always visible on left) */}
        <div className="relative w-5 shrink-0 flex flex-col items-center self-stretch md:hidden">
          <div className={`w-[3px] bg-[#00050a] ${rowIndex === 0 ? 'h-6' : 'h-8'}`} />
          <div className="relative w-[15px] h-[15px] shrink-0">
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="7.5" r="7.5" fill="#00050a"/>
            </svg>
          </div>
          <div className={`w-[3px] bg-[#00050a] grow ${isLast ? 'h-0' : 'h-full'}`} />
        </div>

        {/* Mobile Content Block (Always stacks content then image) */}
        <div className="flex flex-col gap-8 w-full md:hidden pl-4">
          {contentBlock}
          {imageBlock}
        </div>

        {/* Desktop: Alternating layout */}
        <div className="hidden md:flex w-full gap-12 items-start">
          {isLeftAligned ? contentBlock : imageBlock}
          {timelineDivider}
          {isLeftAligned ? imageBlock : contentBlock}
        </div>
      </div>
    );
  };

  return (
    <section className="bg-[#cce1f4] px-5 md:px-16 py-16 md:py-28 w-full">
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-center">
        {/* Section Title */}
        <div className="flex flex-col gap-5 md:gap-4 items-center max-w-[768px] w-full text-center">
          <h2 className="font-bold text-[#0c2080] text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full">
            Our Journey Through Time
          </h2>
          <p className="font-normal text-base md:text-lg leading-[1.5] text-[#00050a] w-full">
            Discover the pivotal moments that shaped Software at Scale. Our timeline highlights key milestones and achievements since our inception.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="flex flex-col gap-0 w-full">
          {TIMELINE_DATA.map((item, index) => (
            <TimelineItem key={item.year} item={item} isLast={index === TIMELINE_DATA.length - 1} rowIndex={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HistoryTimelineSection;