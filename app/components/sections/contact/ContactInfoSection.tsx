'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import SectionWrapper from '@/app/components/shared/SectionWrapper';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface Location {
  city: string;
  address: string;
  link: string;
}

interface ContactInfoItem {
  iconSrc: string;
  title: string;
  description: string;
  contactInfo?: string;
  isLink?: boolean;
  locations?: Location[];
}

interface ContactInfoSectionProps {
  contactItems: ContactInfoItem[];
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  linkColor: string;
}

export default function ContactInfoSection({ contactItems, backgroundColor, titleColor, textColor, linkColor }: ContactInfoSectionProps) {
  return (
    <SectionWrapper backgroundColor={backgroundColor}>
      <div className="flex flex-col gap-12 md:gap-20 items-start w-full">
        <motion.div
          className="flex flex-col gap-12 md:flex-row md:gap-12 items-center w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
        >
          {contactItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col gap-5 md:gap-6 items-center flex-1 w-full text-center"
              variants={{
                hidden: { opacity: 0, y: 36 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease } },
              }}
            >
              <motion.div
                className="relative w-12 h-12 shrink-0"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2 + index * 0.1, ease: 'backOut' }}
              >
                <Image src={item.iconSrc} alt={item.title} fill className="object-contain" />
              </motion.div>
              <div className="flex flex-col gap-5 md:gap-6 items-start w-full text-center">
                <div className="flex flex-col gap-3 md:gap-4 items-start w-full">
                  <h3 className={`font-bold text-[24px] md:text-[32px] leading-[1.3] tracking-[-0.24px] md:tracking-[-0.32px] w-full ${titleColor}`}>
                    {item.title}
                  </h3>
                  <p className={`font-normal text-base leading-[1.5] w-full ${textColor}`}>{item.description}</p>
                </div>
                {item.isLink && item.contactInfo ? (
                  <a
                    href={item.title === 'Email' ? `mailto:${item.contactInfo}` : item.title === 'Office' ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(item.contactInfo)}` : '#'}
                    target={item.title === 'Office' ? '_blank' : undefined}
                    rel={item.title === 'Office' ? 'noopener noreferrer' : undefined}
                    className={`font-normal text-base leading-[1.5] underline w-full ${linkColor}`}
                  >
                    {item.contactInfo}
                  </a>
                ) : item.contactInfo ? (
                  <p className={`font-normal text-base leading-[1.5] underline w-full ${linkColor}`}>{item.contactInfo}</p>
                ) : null}
                {item.locations && (
                  <div className="flex flex-col gap-4 items-center w-full">
                    {Object.entries(
                      item.locations.reduce((acc, location) => {
                        if (!acc[location.city]) acc[location.city] = [];
                        acc[location.city].push(location);
                        return acc;
                      }, {} as Record<string, Location[]>)
                    ).map(([city, cityLocations], cityIndex) => (
                      <div key={cityIndex} className="w-full flex flex-col gap-2">
                        <p className={`font-bold text-base leading-[1.5] w-full ${textColor}`}>{city}</p>
                        {cityLocations.map((location, locIndex) => (
                          <a key={locIndex} href={location.link} target="_blank" rel="noopener noreferrer" className={`font-normal text-base leading-[1.5] underline w-full ${textColor}`}>
                            {location.address}
                          </a>
                        ))}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
