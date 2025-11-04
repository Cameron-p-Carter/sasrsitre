import Image from 'next/image';

interface ImageTextContentSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  backgroundColor: string;
  textColor: string;
  titleColor: string;
  imageOnRight?: boolean; // Default to image on right
}

export default function ImageTextContentSection({
  title,
  description,
  imageSrc,
  backgroundColor,
  textColor,
  titleColor,
  imageOnRight = true,
}: ImageTextContentSectionProps) {
  const content = (
    <div className="content-stretch flex flex-col gap-6 md:gap-8 grow md:basis-0 items-start relative shrink-0 w-full md:w-1/2 order-1 md:order-1">
      <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
        {title}
      </h2>
      <div className={`font-normal text-base md:text-[16px] leading-[1.5] w-full ${textColor}`}>
        {description.split('\n\n').map((paragraph, index) => (
          <p key={index} className="mb-4 last:mb-0">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );

  const image = (
    <div className="relative rounded-2xl shrink-0 w-full h-[335px] md:w-1/2 md:h-[420px] order-2 md:order-2">
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