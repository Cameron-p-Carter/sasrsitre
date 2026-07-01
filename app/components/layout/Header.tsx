'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Button from '@/app/components/shared/Button';

const navItems = [
  {
    label: 'About',
    links: [
      { href: '/core-values', label: 'Our Purpose and Values' },
      { href: '/people', label: 'Who We Are' },
      { href: '/recognition', label: 'Awards and Achievements' },
      { href: '/our-history', label: 'Our History' },
    ],
  },
  {
    label: 'Our Services',
    links: [
      { href: '/services/engineering-teams', label: 'Engineering Teams' },
      { href: '/services/delivery-acceleration', label: 'Delivery Acceleration' },
      { href: '/services/technology-leadership', label: 'Technology Leadership' },
      { href: '/services/data-and-ai', label: 'Data and AI' },
    ],
  },
  {
    label: 'Industries',
    links: [
      { href: '/industries/banking', label: 'Banking' },
      { href: '/industries/payments', label: 'Payments' },
      { href: '/industries/supperannuation', label: 'Superannuation' },
      { href: '/industries/insurance', label: 'Insurance' },
      { href: '/industries/retail', label: 'Retail' },
      { href: '/industries/media', label: 'Media' },
    ],
  },
  {
    label: 'Collections',
    links: [
      { href: '/collections/news', label: 'News' },
      { href: '/collections/case-studies', label: 'Case Studies' },
      { href: '/collections/perspectives', label: 'Perspectives' },
    ],
  },
];

const mobileNavSections = [
  { key: 'about', label: 'About', links: navItems[0].links },
  { key: 'services', label: 'Our Services', links: navItems[1].links },
  { key: 'industries', label: 'Industries', links: navItems[2].links },
  { key: 'collections', label: 'Collections', links: navItems[3].links },
];

const ChevronIcon = ({ className = '' }: { className?: string }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 10));

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
    setExpandedMobileSection(null);
  };

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection((prev) => (prev === section ? null : section));
  };

  return (
    <header
      className={`bg-[#0c2080] w-full sticky top-0 z-50 transition-shadow duration-300 ${scrolled ? 'shadow-[0_4px_32px_rgba(0,0,0,0.35)]' : ''}`}
    >
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center h-[72px] px-12 max-w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center w-[180px]">
            <Link href="/" className="relative h-[50px] w-[165px]">
              <Image src="/images/logos/S@S_Logo_WHITE_RGB.png" alt="Software@Scale Logo" fill className="object-contain" priority />
            </Link>
          </div>

          {/* Decorative S Element */}
          <div className="flex-1 h-[72px] relative overflow-hidden">
            <div className="absolute h-[72px] left-1/2 -translate-x-1/2 top-0 w-[100%]">
              <Image src="/images/logos/Desktop Menu_S_Element.svg" alt="Decorative S Element" fill className="object-cover object-center" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative flex flex-col gap-2.5 group"
                >
                  <div className="flex items-center justify-center gap-1 cursor-default">
                    <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                      {item.label}
                    </span>
                    <div className="w-6 h-6 rotate-180 flex items-center justify-center transition-transform duration-200 group-hover:rotate-0">
                      <ChevronIcon />
                    </div>
                  </div>

                  {/* Dropdown */}
                  <div className="absolute top-full left-0 pt-2 opacity-0 pointer-events-none translate-y-2 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 transition-all duration-200 ease-out z-50">
                    <div className="bg-[#0c2080] border border-[#14d3f3] rounded-2xl p-6 min-w-[220px]">
                      <div className="flex flex-col gap-4">
                        {item.links.map((link) => (
                          <Link key={link.href} href={link.href} className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity whitespace-nowrap">
                            {link.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}

              <Link href="/careers" className="flex items-center justify-center gap-1">
                <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                  Careers
                </span>
              </Link>
            </nav>

            <Button variant="primary" size="sm" href="/contact-us" className="text-sm text-[#002b50]">
              Contact
            </Button>
          </div>
        </div>
      </div>

      {/* Tablet Header */}
      <div className="hidden md:flex lg:hidden items-center justify-between h-[72px] px-6 max-w-full">
        <div className="flex items-center">
          <Link href="/" className="relative h-[36px] w-[169px]">
            <Image src="/images/logos/S@S_Logo_WHITE_RGB.png" alt="Software@Scale Logo" fill className="object-contain" priority />
          </Link>
        </div>
        <div className="flex-1 h-[72px] relative max-w-[300px] overflow-hidden">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 w-[280px] h-[280px]">
            <Image src="/images/logos/S@S_Logo_Mark_RGB.svg" alt="Software@Scale Logo Mark" fill className="object-contain" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="primary" size="sm" href="/contact-us" className="text-sm text-[#002b50] px-3 py-1.5">
            Contact
          </Button>
          <button onClick={toggleMobileMenu} className="flex items-center justify-center w-10 h-10">
            <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between h-[72px] px-3 max-w-full">
        <div className="flex items-center">
          <Link href="/" className="relative h-[28px] w-[132px]">
            <Image src="/images/logos/S@S_Logo_WHITE_RGB.png" alt="Software@Scale Logo" fill className="object-contain" priority />
          </Link>
        </div>
        <div className="flex-1 h-[72px] relative max-w-[250px] overflow-hidden">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 w-[240px] h-[240px]">
            <Image src="/images/logos/S@S_Logo_Mark_RGB.svg" alt="Software@Scale Logo Mark" fill className="object-contain" />
          </div>
        </div>
        <button onClick={toggleMobileMenu} className="flex items-center justify-center w-10 h-10">
          <motion.div animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            className="absolute top-full left-0 right-0 bg-[#0c2080] border-t border-[#1a3a9a] z-[60] md:hidden shadow-lg overflow-hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <nav className="flex flex-col px-4 py-3">
              <div className="flex flex-col gap-2">
                {mobileNavSections.map((section) => (
                  <div key={section.key} className="border-b border-[#1a3a9a]">
                    <button
                      onClick={() => toggleMobileSection(section.key)}
                      className="flex items-center justify-between py-3 w-full text-left"
                    >
                      <span className="font-normal text-white text-base leading-6">{section.label}</span>
                      <motion.div
                        animate={{ rotate: expandedMobileSection === section.key ? 180 : 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <ChevronIcon />
                      </motion.div>
                    </button>
                    <AnimatePresence initial={false}>
                      {expandedMobileSection === section.key && (
                        <motion.div
                          key={section.key + '-links'}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22, ease: 'easeOut' }}
                          className="overflow-hidden"
                        >
                          <div className="pb-4 pl-4 flex flex-col gap-4">
                            {section.links.map((link) => (
                              <Link key={link.href} href={link.href} className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                                {link.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="py-3 border-b border-[#1a3a9a]">
                  <Link href="/careers" className="font-normal text-white text-base leading-6">
                    Careers
                  </Link>
                </div>

                <div className="pt-4">
                  <Link href="/contact-us" className="bg-[#5ae0f6] flex items-center justify-center gap-2 px-4 py-2 rounded-xl w-full">
                    <span className="font-medium text-[#002b50] text-base leading-6">Contact</span>
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tablet Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="tablet-menu"
            className="fixed top-[72px] left-0 right-0 bg-[#0c2080] border-t border-[#1a3a9a] z-[60] hidden md:block lg:hidden shadow-lg"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <nav className="flex flex-col p-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex flex-col gap-4">
                  {mobileNavSections.slice(0, 2).map((section) => (
                    <div key={section.key} className="flex items-center justify-between py-3 border-b border-[#1a3a9a]">
                      <span className="font-normal text-white text-base leading-6">{section.label}</span>
                      <ChevronIcon />
                    </div>
                  ))}
                </div>
                <div className="flex flex-col gap-4">
                  {mobileNavSections.slice(2).map((section) => (
                    <div key={section.key} className="flex items-center justify-between py-3 border-b border-[#1a3a9a]">
                      <span className="font-normal text-white text-base leading-6">{section.label}</span>
                      <ChevronIcon />
                    </div>
                  ))}
                  <div className="py-3">
                    <span className="font-normal text-white text-base leading-6">Careers</span>
                  </div>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
