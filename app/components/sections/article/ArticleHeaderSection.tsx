interface ArticleHeaderSectionProps {
  title: string;
  description: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
}

export default function ArticleHeaderSection({
  title,
  description,
  backgroundColor,
  titleColor,
  textColor,
}: ArticleHeaderSectionProps) {
  return (
    <section className={`${backgroundColor} px-5 md:px-16 py-16 md:py-28 w-full`}>
      <div className="max-w-[1280px] mx-auto flex flex-col gap-12 md:gap-[80px] items-center">
        <div className="flex flex-col gap-6 md:gap-8 items-center max-w-[768px] w-full text-center">
          <h1 className={`font-bold text-[40px] md:text-[56px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.56px] w-full ${titleColor}`}>
            {title}
          </h1>
          <p className={`font-normal text-base md:text-lg leading-[1.5] w-full ${textColor}`}>
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}