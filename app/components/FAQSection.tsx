interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  title: string;
  description: string;
  faqItems: FAQItem[];
  ctaTitle: string;
  ctaDescription: string;
  ctaButtonText: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  questionColor: string;
  answerColor: string;
  ctaTitleColor: string;
  ctaTextColor: string;
  buttonBorderColor: string;
  buttonTextColor: string;
}

export default function FAQSection({
  title,
  description,
  faqItems,
  ctaTitle,
  ctaDescription,
  ctaButtonText,
  backgroundColor,
  titleColor,
  textColor,
  questionColor,
  answerColor,
  ctaTitleColor,
  ctaTextColor,
  buttonBorderColor,
  buttonTextColor,
}: FAQSectionProps) {
  return (
    <section className={`${backgroundColor} w-full`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-28">
        <div className="flex flex-col gap-12 md:gap-20 items-center w-full">
          {/* Section Title */}
          <div className="flex flex-col gap-5 md:gap-6 items-center max-w-[768px] w-full text-center">
            <h2 className={`font-bold text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px] w-full ${titleColor}`}>
              {title}
            </h2>
            <p className={`font-normal text-base md:text-[18px] leading-[1.5] w-full ${textColor}`}>
              {description}
            </p>
          </div>
          
          {/* FAQ List */}
          <div className="flex flex-col gap-10 md:gap-12 items-start max-w-[768px] w-full">
            {faqItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-3 md:gap-4 items-start w-full">
                <h3 className={`font-bold text-base md:text-[18px] leading-[1.5] w-full ${questionColor}`}>
                  {item.question}
                </h3>
                <p className={`font-normal text-base leading-[1.5] w-full ${answerColor}`}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
          
          {/* CTA Section */}
          <div className="flex flex-col gap-6 items-center max-w-[560px] w-full">
            <div className="flex flex-col gap-3 md:gap-4 items-center w-full text-center">
              <h3 className={`font-bold text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.24px] md:tracking-[-0.32px] w-full ${ctaTitleColor}`}>
                {ctaTitle}
              </h3>
              <p className={`font-normal text-base md:text-[18px] leading-[1.5] w-full ${ctaTextColor}`}>
                {ctaDescription}
              </p>
            </div>
            
            {/* Actions */}
            <div className="flex gap-6 items-center">
              <button className={`border ${buttonBorderColor} border-solid rounded-xl px-6 py-2.5 font-medium text-base leading-[1.5] ${buttonTextColor} hover:opacity-80 transition-opacity`}>
                {ctaButtonText}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}