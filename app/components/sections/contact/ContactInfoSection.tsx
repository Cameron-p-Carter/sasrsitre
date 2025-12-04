import Image from 'next/image';

interface ContactInfoItem {
  iconSrc: string;
  title: string;
  description: string;
  contactInfo: string;
  isLink?: boolean;
}

interface ContactInfoSectionProps {
  contactItems: ContactInfoItem[];
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  linkColor: string;
}

export default function ContactInfoSection({
  contactItems,
  backgroundColor,
  titleColor,
  textColor,
  linkColor,
}: ContactInfoSectionProps) {
  return (
    <section className={`${backgroundColor} w-full`}>
      <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-16 md:py-28">
        <div className="flex flex-col gap-12 md:gap-20 items-start w-full">
          {/* Mobile: Single column with 48px gaps, Desktop: 2-column row with 48px gap */}
          <div className="flex flex-col gap-12 md:flex-row md:gap-12 items-center w-full">
            {contactItems.map((item, index) => (
              <div key={index} className="flex flex-col gap-5 md:gap-6 items-center flex-1 w-full text-center">
                {/* Icon */}
                <div className="relative w-12 h-12 shrink-0">
                  <Image
                    src={item.iconSrc}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                
                {/* Contact Info */}
                <div className="flex flex-col gap-5 md:gap-6 items-start w-full text-center">
                  <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
                    <h3 className={`font-bold text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.24px] md:tracking-[-0.32px] w-full ${titleColor}`}>
                      {item.title}
                    </h3>
                    <p className={`font-normal text-base leading-[1.5] w-full ${textColor}`}>
                      {item.description}
                    </p>
                  </div>
                  
                  {item.isLink ? (
                    <a
                      href={item.title === 'Email' ? `mailto:${item.contactInfo}` : '#'}
                      className={`font-normal text-base leading-[1.5] underline w-full ${linkColor}`}
                    >
                      {item.contactInfo}
                    </a>
                  ) : (
                    <p className={`font-normal text-base leading-[1.5] underline w-full ${linkColor}`}>
                      {item.contactInfo}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}