import { ReactNode } from 'react';

interface SectionWrapperProps {
  backgroundColor?: string;
  children: ReactNode;
  maxWidth?: string;
  padding?: string;
  id?: string;
  className?: string;
}

/**
 * Shared wrapper component for sections across the site.
 * Provides consistent padding, max-width, and background colour handling.
 */
export default function SectionWrapper({
  backgroundColor = 'bg-white',
  children,
  maxWidth = 'max-w-[1280px]',
  padding = 'px-5 md:px-16 py-16 md:py-28',
  id,
  className = '',
}: SectionWrapperProps) {
  return (
    <section id={id} className={`${backgroundColor} ${padding} w-full ${className}`}>
      <div className={`${maxWidth} mx-auto`}>
        {children}
      </div>
    </section>
  );
}
