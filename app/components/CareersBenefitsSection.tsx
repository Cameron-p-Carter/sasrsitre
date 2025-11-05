import Image from 'next/image';

interface BenefitItem {
  iconSrc: string;
  title: string;
  description: string;
}

interface CareersBenefitsSectionProps {
  benefits: BenefitItem[];
  backgroundColor: string;
  titleColor: string;
  textColor: string;
}

export default function CareersBenefitsSection({
  benefits,
  backgroundColor,
  titleColor,
  textColor,
}: CareersBenefitsSectionProps) {
  return (
    <section className={`${backgroundColor} w-full`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-28">
        <div className="flex flex-col gap-12 md:gap-20 items-start w-full">
          <div className="flex flex-col md:flex-row gap-12 items-start w-full">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex flex-col gap-6 md:gap-8 items-start flex-1 w-full">
                <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
                  {/* Icon */}
                  <div className="relative w-12 h-12 shrink-0">
                    <Image
                      src={benefit.iconSrc}
                      alt={benefit.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="flex flex-col gap-5 md:gap-6 items-start w-full">
                    <h3 className={`font-bold text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.24px] md:tracking-[-0.32px] w-full ${titleColor}`}>
                      {benefit.title}
                    </h3>
                    <p className={`font-normal text-base leading-[1.5] w-full ${textColor}`}>
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}