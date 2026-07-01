'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/app/components/shared/Button';

const ease: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

const desktopBadges = [
  { src: "/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png", alt: "Atlassian Tech Leadership Finalist 2025" },
  { src: "/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png", alt: "CUB Awards Winner 2025" },
  { src: "/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png", alt: "Deloitte Technology Fast 50 Australia Rising Star Winner 2024" },
  { src: "/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024 3.png", alt: "Deloitte Technology Fast 50 Australia Rising Star Winner 2024 (2)" },
  { src: "/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png", alt: "CEO Magazine Executive of the Year Awards Finalist 2025" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen 2xl:min-h-0 2xl:h-[900px] flex items-center justify-center px-5 md:px-8 lg:px-16 py-0 pt-[72px] overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 min-w-[120vw] min-h-[120vh] w-auto h-auto object-cover"
        aria-hidden="true"
      >
        <source src="/videos/manager-programmer-and-business-man-with-tablet-f-2025-08-29-01-56-12-utc.mp4" type="video/mp4" />
      </video>

      {/* Blue overlay */}
      <motion.div
        className="absolute inset-0 bg-[rgba(12,32,128,0.6)]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        aria-hidden="true"
      />

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto py-4 md:py-6 lg:py-12">
        <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 max-w-[560px]">
          {/* Main Content */}
          <div className="flex flex-col gap-5 md:gap-6">
            {/* Main Heading — each line slides up */}
            <h1 className="font-bold text-white text-[40px] md:text-[48px] lg:text-[56px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.48px] lg:tracking-[-0.56px]">
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease }}
              >
                Solve the problem.
              </motion.span>
              <motion.span
                className="block"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.22, ease }}
              >
                Write the code.
              </motion.span>
              <motion.span
                className="block text-[#5ae0f6]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.34, ease }}
              >
                Scale the solution.
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              className="font-normal text-white text-[16px] md:text-[17px] lg:text-[18px] leading-[1.5]"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.52, ease }}
            >
              At Software@Scale, we align technology strategy with your business goals to foster innovation and growth. Our expert team tackles complex challenges, ensuring your projects thrive and deliver exceptional results.
            </motion.p>

            {/* Award Badges */}
            <div className="mt-2 md:mt-4">
              {/* Mobile: 3 + 2 Grid */}
              <motion.div
                className="flex flex-col gap-4 md:hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.68, ease }}
              >
                <div className="flex gap-4">
                  <Link href="/recognition" className="relative w-[100px] h-[100px] flex-shrink-0 hover:opacity-80 transition-opacity">
                    <Image src="/images/awards/Awards Badges_S@S_ATLASSIAN TECH LEADERSHIP FINALIST 2025.png" alt="Atlassian Tech Leadership Finalist 2025" fill className="object-contain" />
                  </Link>
                  <Link href="/recognition" className="relative w-[100px] h-[100px] flex-shrink-0 hover:opacity-80 transition-opacity">
                    <Image src="/images/awards/Awards-Badges_S@S_CUB-AWARDS-WINNER-2025.png" alt="CUB Awards Winner 2025" fill className="object-contain" />
                  </Link>
                  <Link href="/recognition" className="relative w-[100px] h-[100px] flex-shrink-0 hover:opacity-80 transition-opacity">
                    <Image src="/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024.png" alt="Deloitte Technology Fast 50 Australia Rising Star Winner 2024" fill className="object-contain" />
                  </Link>
                </div>
                <div className="flex gap-4">
                  <Link href="/recognition" className="relative w-[100px] h-[100px] flex-shrink-0 hover:opacity-80 transition-opacity">
                    <Image src="/images/awards/Awards Badges_S@S_DELOITTE TECHNOLOGY FAST 50 AUSTRALIA RISING STAR WINNER 2024 3.png" alt="Deloitte Technology Fast 50 Australia Rising Star Winner 2024 (2)" fill className="object-contain" />
                  </Link>
                  <Link href="/recognition" className="relative w-[100px] h-[100px] flex-shrink-0 hover:opacity-80 transition-opacity">
                    <Image src="/images/awards/Awards Badges_S@S_CEO MAGAZINE EXECUTIVE OF THE YEAR AWARDS FINALIST 2025_Blue.png" alt="CEO Magazine Executive of the Year Awards Finalist 2025" fill className="object-contain" />
                  </Link>
                </div>
              </motion.div>

              {/* Tablet & Desktop: Staggered badge fade-in */}
              <motion.div
                className="hidden md:flex gap-6 lg:gap-[33px]"
                initial="hidden"
                animate="visible"
                variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.68 } } }}
              >
                {desktopBadges.map((badge) => (
                  <motion.div
                    key={badge.alt}
                    variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } } }}
                  >
                    <Link href="/recognition" className="relative w-[100px] h-[100px] flex-shrink-0 block opacity-90 hover:opacity-100 transition-opacity">
                      <Image src={badge.src} alt={badge.alt} fill className="object-contain" />
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.86, ease }}
          >
            <Button variant="primary" href="/core-values">
              Learn More
            </Button>
            <Button variant="outline" href="/contact-us">
              Scale Now
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
