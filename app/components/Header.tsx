'use client';

import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#0c2080] w-full relative z-20 overflow-hidden">
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center justify-between h-[72px] px-16 max-w-full">
        {/* Logo Section */}
        <div className="flex items-center gap-6 w-[260px]">
          <div className="relative h-[51.84px] w-[243px]">
            <Image
              src="/images/logos/S@S_Logo_WHITE_RGB.png"
              alt="Software@Scale Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Decorative S Element */}
        <div className="flex-1 h-[73px] relative">
          <div className="absolute left-[-6px] top-[0.5px] w-[269px] h-[72px] overflow-hidden">
            <Image
              src="/images/logos/Desktop Menu_S_Element.svg"
              alt="Decorative S Element"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8">
          {/* Navigation Links */}
          <div className="flex items-center gap-8">
            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-center gap-1">
                <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                  About
                </span>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 rotate-180 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-center gap-1">
                <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                  Our Services
                </span>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 rotate-180 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-center gap-1">
                <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                  Industries
                </span>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 rotate-180 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2.5">
              <div className="flex items-center justify-center gap-1">
                <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                  Collections
                </span>
                <div className="flex items-center justify-center">
                  <div className="w-6 h-6 rotate-180 flex items-center justify-center">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1">
              <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                Careers
              </span>
            </div>
          </div>

          {/* Contact Button */}
          <div className="flex items-center gap-4">
            <button className="bg-[#5ae0f6] flex items-center justify-center gap-2 px-5 py-2 rounded-xl">
              <span className="font-medium text-[#002b50] text-base leading-6 whitespace-nowrap">
                Contact
              </span>
            </button>
          </div>
        </nav>
      </div>

      {/* Tablet Header */}
      <div className="hidden md:flex lg:hidden items-center justify-between h-[72px] px-8 max-w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="relative h-[40px] w-[188px]">
            <Image
              src="/images/logos/S@S_Logo_WHITE_RGB.png"
              alt="Software@Scale Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Decorative S Element - Smaller */}
        <div className="flex-1 h-[60px] relative max-w-[200px]">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[60px] overflow-hidden">
            <Image
              src="/images/logos/Desktop Menu_S_Element.svg"
              alt="Decorative S Element"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Simplified Navigation */}
        <div className="flex items-center gap-4">
          <button className="bg-[#5ae0f6] flex items-center justify-center gap-2 px-4 py-2 rounded-xl">
            <span className="font-medium text-[#002b50] text-sm leading-5 whitespace-nowrap">
              Contact
            </span>
          </button>
          <button 
            onClick={toggleMobileMenu}
            className="flex items-center justify-center w-12 h-12"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between h-[72px] px-4 max-w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="relative h-[30px] w-[144px]">
            <Image
              src="/images/logos/S@S_Logo_WHITE_RGB.png"
              alt="Software@Scale Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Decorative S Element - Mobile */}
        <div className="flex-1 h-[72px] relative max-w-[250px]">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 w-[240px] h-[240px] overflow-visible">
            <Image
              src="/images/logos/S@S_Logo_Mark_RGB.svg"
              alt="Software@Scale Logo Mark"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Hamburger Menu */}
        <button 
          onClick={toggleMobileMenu}
          className="flex items-center justify-center w-12 h-12"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0c2080] border-t border-[#1a3a9a] z-50 md:hidden">
          <nav className="flex flex-col p-4">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between py-3 border-b border-[#1a3a9a]">
                <span className="font-normal text-white text-base leading-6">
                  About
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-[#1a3a9a]">
                <span className="font-normal text-white text-base leading-6">
                  Our Services
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-[#1a3a9a]">
                <span className="font-normal text-white text-base leading-6">
                  Industries
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="flex items-center justify-between py-3 border-b border-[#1a3a9a]">
                <span className="font-normal text-white text-base leading-6">
                  Collections
                </span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              <div className="py-3 border-b border-[#1a3a9a]">
                <span className="font-normal text-white text-base leading-6">
                  Careers
                </span>
              </div>

              <div className="pt-4">
                <button className="bg-[#5ae0f6] flex items-center justify-center gap-2 px-6 py-3 rounded-xl w-full">
                  <span className="font-medium text-[#002b50] text-base leading-6">
                    Contact
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Tablet Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0c2080] border-t border-[#1a3a9a] z-50 hidden md:block lg:hidden">
          <nav className="flex flex-col p-6">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between py-3 border-b border-[#1a3a9a]">
                  <span className="font-normal text-white text-base leading-6">
                    About
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-[#1a3a9a]">
                  <span className="font-normal text-white text-base leading-6">
                    Our Services
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between py-3 border-b border-[#1a3a9a]">
                  <span className="font-normal text-white text-base leading-6">
                    Industries
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="flex items-center justify-between py-3 border-b border-[#1a3a9a]">
                  <span className="font-normal text-white text-base leading-6">
                    Collections
                  </span>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>

                <div className="py-3">
                  <span className="font-normal text-white text-base leading-6">
                    Careers
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;