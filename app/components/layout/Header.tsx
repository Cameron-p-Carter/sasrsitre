'use client';

import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
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
      { href: '/industries/superannuation', label: 'Superannuation' },
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

type NavItem = (typeof navItems)[number];

// Desktop dropdown: opens on hover (as before) and from the keyboard. Closed menus are
// `invisible`, which also takes their links out of the tab order.
const DesktopNavItem = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuId = `nav-menu-${item.label.toLowerCase().replace(/\s+/g, '-')}`;
  // Set when the menu is opened with the Down arrow, so focus moves in once it's visible
  const focusFirstOnOpen = useRef(false);

  useEffect(() => {
    if (isOpen && focusFirstOnOpen.current) {
      focusFirstOnOpen.current = false;
      menuRef.current?.querySelector('a')?.focus();
    }
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && isOpen) {
      setIsOpen(false);
      triggerRef.current?.focus();
    } else if (e.key === 'ArrowDown' && e.target === triggerRef.current) {
      e.preventDefault();
      if (isOpen) {
        menuRef.current?.querySelector('a')?.focus();
      } else {
        focusFirstOnOpen.current = true;
        setIsOpen(true);
      }
    }
  };

  return (
    <div
      className="relative flex flex-col gap-2.5 group"
      onMouseLeave={() => setIsOpen(false)}
      onKeyDown={handleKeyDown}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setIsOpen(false);
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex items-center justify-center gap-1 cursor-pointer rounded"
      >
        <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
          {item.label}
        </span>
        <span
          aria-hidden="true"
          className={`w-6 h-6 flex items-center justify-center transition-transform duration-200 group-hover:rotate-0 ${isOpen ? 'rotate-0' : 'rotate-180'}`}
        >
          <ChevronIcon />
        </span>
      </button>

      {/* Dropdown */}
      <div
        id={menuId}
        ref={menuRef}
        // Visibility switches on instantly (so focus can move in) but waits for the fade-out before hiding
        className={`absolute top-full left-0 pt-2 z-50 group-hover:visible group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:[transition:opacity_200ms_ease-out,transform_200ms_ease-out] ${
          isOpen
            ? 'visible opacity-100 pointer-events-auto translate-y-0 [transition:opacity_200ms_ease-out,transform_200ms_ease-out]'
            : 'invisible opacity-0 pointer-events-none translate-y-2 [transition:opacity_200ms_ease-out,transform_200ms_ease-out,visibility_0s_linear_200ms]'
        }`}
      >
        <div className="bg-[#0c2080] border border-[#14d3f3] rounded-2xl p-6 min-w-[220px]">
          <ul className="flex flex-col gap-4">
            {item.links.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity whitespace-nowrap">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, 'change', (v) => setScrolled(v > 10));

  const tabletMenuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileMenuButtonRef = useRef<HTMLButtonElement>(null);

  // While the menu is open: stop the page scrolling behind it, close it with Esc (returning focus to the
  // menu button), and close it if the window widens to desktop, where the menu isn't shown
  useEffect(() => {
    if (!isMobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const close = () => {
      setIsMobileMenuOpen(false);
      setExpandedMobileSection(null);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      close();
      const visibleButton = [tabletMenuButtonRef.current, mobileMenuButtonRef.current].find((b) => b && b.offsetParent !== null);
      visibleButton?.focus();
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onWiden = () => { if (desktop.matches) close(); };
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onWiden);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onWiden);
    };
  }, [isMobileMenuOpen]);

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
              <Image src="/images/logos/Desktop Menu_S_Element.svg" alt="" fill className="object-cover object-center" />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <nav aria-label="Main" className="flex items-center gap-6">
              {navItems.map((item) => (
                <DesktopNavItem key={item.label} item={item} />
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
            <Image src="/images/logos/S@S_Logo_Mark_RGB.svg" alt="" fill className="object-contain" />
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="primary" size="sm" href="/contact-us" className="text-sm text-[#002b50] px-3 py-1.5">
            Contact
          </Button>
          <button
            ref={tabletMenuButtonRef}
            type="button"
            onClick={toggleMobileMenu}
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="flex items-center justify-center w-10 h-10"
          >
            <motion.div aria-hidden="true" animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
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
            <Image src="/images/logos/S@S_Logo_Mark_RGB.svg" alt="" fill className="object-contain" />
          </div>
        </div>
        <button
          ref={mobileMenuButtonRef}
          type="button"
          onClick={toggleMobileMenu}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
          className="flex items-center justify-center w-10 h-10"
        >
          <motion.div aria-hidden="true" animate={{ rotate: isMobileMenuOpen ? 90 : 0 }} transition={{ duration: 0.2 }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </motion.div>
        </button>
      </div>

      {/* Mobile and Tablet Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            key="mobile-menu"
            id="mobile-menu"
            className="fixed top-[72px] bottom-0 left-0 right-0 bg-[#0c2080] border-t border-[#1a3a9a] z-[60] lg:hidden shadow-lg overflow-y-auto overscroll-contain"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
          >
            <nav aria-label="Main" className="flex flex-col px-4 md:px-6 py-3 md:py-6">
              <div className="flex flex-col gap-2">
                {mobileNavSections.map((section) => (
                  <div key={section.key} className="border-b border-[#1a3a9a]">
                    <button
                      type="button"
                      onClick={() => toggleMobileSection(section.key)}
                      aria-expanded={expandedMobileSection === section.key}
                      className="flex items-center justify-between py-3 w-full text-left"
                    >
                      <span className="font-normal text-white text-base leading-6">{section.label}</span>
                      <motion.div
                        aria-hidden="true"
                        animate={{ rotate: expandedMobileSection === section.key ? 0 : 180 }}
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
                  <Link href="/contact-us" className="bg-[#5ae0f6] press flex items-center justify-center gap-2 px-4 py-2 rounded-xl w-full">
                    <span className="font-medium text-[#002b50] text-base leading-6">Contact</span>
                  </Link>
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
