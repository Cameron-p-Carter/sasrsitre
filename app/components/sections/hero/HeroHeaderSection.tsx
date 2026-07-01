'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '../../shared/Button';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

interface HeroButton {
  text: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'accent' | 'link';
}

interface HeroHeaderSectionProps {
  imageSrc: string;
  tagline: string;
  title: string;
  titleHighlight: string;
  description: string;
  overlayOpacity: number;
  objectPosition?: string;
  descriptionBelow?: boolean;
  buttons?: HeroButton[];
}

export default function HeroHeaderSection({
  imageSrc,
  tagline,
  title,
  titleHighlight,
  description,
  overlayOpacity,
  objectPosition = 'center',
  descriptionBelow = false,
  buttons,
}: HeroHeaderSectionProps) {
  const overlayColor = `rgba(12, 32, 128, ${overlayOpacity})`;

  const renderButtons = () => {
    if (!buttons || buttons.length === 0) return null;
    return (
      <motion.div
        className="flex flex-wrap gap-4 pt-4"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, delay: 0.5, ease }}
      >
        {buttons.map((btn, index) => (
          <Button key={index} variant={btn.variant || 'primary'} href={btn.href} onClick={btn.onClick}>
            {btn.text}
          </Button>
        ))}
      </motion.div>
    );
  };

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, ease }}
        >
          <Image
            src={imageSrc}
            alt="Background"
            fill
            className="object-cover"
            style={{ objectPosition }}
            priority
          />
        </motion.div>
        <motion.div
          className="absolute inset-0"
          style={{ backgroundColor: overlayColor }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 box-border flex flex-col gap-12 md:gap-[80px] items-center px-5 md:px-16 pt-24 pb-16 md:py-28 w-full">
        <div className="flex flex-col gap-5 md:gap-[80px] items-start max-w-[1280px] mx-auto w-full">
          {titleHighlight && !descriptionBelow ? (
            <div className="flex flex-col md:flex-row gap-5 md:gap-[80px] items-start w-full">
              {/* Left: Tagline + Title */}
              <div className="flex flex-col gap-3 md:gap-4 w-full md:w-1/2 flex-shrink-0">
                <motion.p
                  className="font-semibold text-base leading-[1.5] text-[#14d3f3] whitespace-pre"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15, ease }}
                >
                  {tagline}
                </motion.p>
                <motion.h1
                  className="font-extrabold text-white text-[40px] md:text-[56px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.56px]"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.25, ease }}
                >
                  <span>{title} </span>
                  <span className="text-[#14d3f3]">{titleHighlight}</span>
                </motion.h1>
                {renderButtons()}
              </div>
              {/* Right: Description */}
              <motion.div
                className="flex flex-col gap-6 md:gap-8 w-full md:w-1/2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35, ease }}
              >
                <p className="font-normal text-base md:text-lg leading-[1.5] text-white">
                  {description}
                </p>
              </motion.div>
            </div>
          ) : (
            <div className="flex flex-col gap-8 items-start w-full max-w-[768px]">
              <div className="flex flex-col gap-4 items-start w-full">
                <motion.p
                  className="font-semibold text-base leading-[1.5] text-[#14d3f3] whitespace-pre"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, delay: 0.15, ease }}
                >
                  {tagline}
                </motion.p>
                <div className="flex flex-col gap-6 items-start text-white w-full">
                  <motion.h1
                    className="font-extrabold text-[40px] md:text-[56px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.56px] w-full"
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.28, ease }}
                  >
                    {title}
                    {titleHighlight && <span className="text-[#14d3f3]"> {titleHighlight}</span>}
                  </motion.h1>
                  <motion.p
                    className="font-normal text-base md:text-lg leading-[1.5] w-full"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.65, delay: 0.42, ease }}
                  >
                    {description}
                  </motion.p>
                  {renderButtons()}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
