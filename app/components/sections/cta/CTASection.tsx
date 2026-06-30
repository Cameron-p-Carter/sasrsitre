'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/app/components/shared/Button';

interface CTASectionProps {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonUrl?: string;
}

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

export default function CTASection({
  imageSrc,
  title,
  description,
  primaryButtonText,
  secondaryButtonText,
  primaryButtonUrl = "/contact-us",
}: CTASectionProps) {
  return (
    <section className="relative px-5 md:px-16 py-16 md:py-28 overflow-hidden">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease }}
      >
        <Image
          src={imageSrc}
          alt="Call to action background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[rgba(12,32,128,0.5)]"></div>
      </motion.div>

      {/* Content Container */}
      <div className="relative z-10 max-w-[1280px] mx-auto">
        <div className="flex flex-col gap-12 md:gap-8 items-center max-w-[768px] mx-auto text-center">
          {/* Content */}
          <motion.div
            className="flex flex-col gap-5 md:gap-6 text-white"
            initial={{ opacity: 0, y: 36 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.8, ease }}
          >
            <h2 className="text-[36px] md:text-[48px] font-bold leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px]">
              {title}
            </h2>
            <p className="text-[16px] md:text-[18px] font-normal leading-[1.5]">
              {description}
            </p>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10% 0px' }}
            transition={{ duration: 0.65, delay: 0.18, ease }}
          >
            <Button variant="primary" href={primaryButtonUrl} target={primaryButtonUrl?.startsWith('http') ? '_blank' : undefined}>
              {primaryButtonText}
            </Button>
            <Button variant="outline" href="/collections/case-studies">
              {secondaryButtonText}
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
