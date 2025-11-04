import Image from 'next/image';

interface ImageTextListSectionProps {
  title: string;
  introDescription: string;
  listTitle: string;
  listItems: string[];
  imageSrc: string;
  backgroundColor: string;
  textColor: string;
  titleColor: string;
  imageOnRight?: boolean; // Default to image on left (false)
}

export default function ImageTextListSection({
  title,
  introDescription,
  listTitle,
  listItems,
  imageSrc,
  backgroundColor,
  textColor,
  titleColor,
  imageOnRight = false,
}: ImageTextListSectionProps) {
  
  const content = (
    <div className="content-stretch flex flex-col gap-6 md:gap-8 grow md:basis-0 items-start relative shrink-0 w-full md:w-1/2 order-2 md:order-2">
      <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
        {title}
      </h2>
      
      {/* Rich Text Content */}
      <div className={`font-normal text-base md:text-[16px] leading-[1.5] w-full ${textColor}`}>
        <p className="mb-4">
          {introDescription}
        </p>
        
        <h3 className={`font-bold text-[24px] leading-[1.3] tracking-[-0.24px] mt-6 mb-4 ${titleColor}`}>
          {listTitle}
        </h3>
        
        <ol className="list-decimal list-inside space-y-2">
          {listItems.map((item, index) => (
            <li key={index} className="text-base">
              {item}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );

  const image = (
    <div className="relative rounded-2xl shrink-0 w-full h-[335px] md:w-1/2 md:h-[420px] order-1 md:order-1">
      <Image
        src={imageSrc}
        alt={title}
        fill
        className="object-cover rounded-2xl"
      />
    </div>
  );

  return (
    <section className={`${backgroundColor} px-5 md:px-16 py-16 md:py-28 w-full`}>
      <div className="max-w-[1280px] mx-auto">
        <div className={`flex flex-col gap-12 md:gap-[80px] items-start w-full ${imageOnRight ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          {imageOnRight ? content : image}
          {imageOnRight ? image : content}
        </div>
      </div>
    </section>
  );
}