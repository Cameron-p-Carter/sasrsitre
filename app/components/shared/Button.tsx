import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'accent' | 'link';
type ButtonSize = 'sm' | 'md';

interface ButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  onClick?: () => void;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  target?: '_blank' | '_self';
}

/**
 * Standardized Button component for the entire site.
 *
 * Variants:
 * - primary: Cyan filled button (bg-[#5ae0f6])
 * - secondary: Blue outline button (border-[#0c2080])
 * - outline: Cyan outline button for dark backgrounds (border-[#5ae0f6])
 * - accent: Light blue filled button (bg-[#14d3f3])
 * - link: Text button with arrow icon (no background)
 *
 * Sizes:
 * - sm: Smaller padding (px-4 py-2) for header
 * - md: Standard padding (px-6 py-2.5)
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  children,
  className = '',
  fullWidth = false,
  type = 'button',
  target,
}: ButtonProps) {

  // Base styles (common to all buttons)
  const baseStyles = 'font-medium text-base leading-[1.5] whitespace-nowrap transition-colors inline-flex items-center justify-center gap-2';

  // Size styles
  const sizeStyles = {
    sm: 'px-4 py-2 rounded-xl',
    md: 'px-6 py-2.5 rounded-xl',
  };

  // Variant styles
  const variantStyles = {
    primary: 'bg-[#5ae0f6] border border-[#5ae0f6] text-[#0c2080] hover:bg-[#4dd0e6]',
    secondary: 'border border-[#0c2080] text-[#0c2080] hover:bg-[#0c2080] hover:text-white',
    outline: 'border border-[#5ae0f6] text-[#5ae0f6] hover:bg-[#5ae0f6] hover:text-[#0c2080]',
    accent: 'bg-[#14d3f3] border border-[#14d3f3] text-[#0c2080] hover:bg-[#10c0d8]',
    link: 'text-[#00050a] hover:opacity-70 px-0 py-0', // No padding, no background
  };

  // Width styles
  const widthStyles = fullWidth ? 'w-full' : '';

  // Combine all styles
  const buttonClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${widthStyles} ${className}`;

  // Render link button with arrow icon
  if (variant === 'link') {
    const content = (
      <>
        <span>{children}</span>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </>
    );

    if (href) {
      // External link - use <a> tag with security attributes
      if (target === '_blank') {
        return (
          <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
            {content}
          </a>
        );
      }
      // Internal link - use Next.js Link
      return (
        <Link href={href} className={buttonClasses}>
          {content}
        </Link>
      );
    }

    return (
      <button onClick={onClick} className={buttonClasses} type={type}>
        {content}
      </button>
    );
  }

  // Render as Link if href is provided
  if (href) {
    // External link - use <a> tag with security attributes
    if (target === '_blank') {
      return (
        <a href={href} className={buttonClasses} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    // Internal link - use Next.js Link
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }

  // Render as button
  return (
    <button onClick={onClick} className={buttonClasses} type={type}>
      {children}
    </button>
  );
}
