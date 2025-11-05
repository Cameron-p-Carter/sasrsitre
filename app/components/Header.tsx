'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [expandedMobileSection, setExpandedMobileSection] = useState<string | null>(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setExpandedMobileSection(null); // Reset expanded sections when closing menu
  };

  const toggleMobileSection = (section: string) => {
    setExpandedMobileSection(expandedMobileSection === section ? null : section);
  };

  return (
    <header className="bg-[#0c2080] w-full relative z-20">
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center h-[72px] px-12 max-w-full">
        <div className="flex items-center justify-between w-full">
          {/* Logo Section */}
          <div className="flex items-center w-[200px]">
            <Link href="/" className="relative h-[40px] w-[188px]">
              <Image
                src="/images/logos/S@S_Logo_WHITE_RGB.png"
                alt="Software@Scale Logo"
                fill
                className="object-contain"
                priority
              />
            </Link>
          </div>

          {/* Decorative S Element */}
          <div className="flex-1 h-[72px] relative max-w-[300px]">
            <div className="absolute h-[72px] left-0 top-0 w-full overflow-hidden">
              <Image
                src="/images/logos/Desktop Menu_S_Element.svg"
                alt="Decorative S Element"
                fill
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center gap-6">
            <nav className="flex items-center gap-6">
            <div className="relative flex flex-col gap-2.5 group">
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
              
              {/* About Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50">
                <div className="bg-[#0c2080] border border-[#14d3f3] rounded-2xl p-6 min-w-[200px]">
                  <div className="flex flex-col gap-4">
                    <Link href="/core-values" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Our Purpose and Values
                    </Link>
                    <Link href="/people" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Who We Are
                    </Link>
                    <Link href="/recognition" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Awards and Achievements
                    </Link>
                    <Link href="/our-history" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Our History
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col gap-2.5 group">
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
              
              {/* Our Services Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50">
                <div className="bg-[#0c2080] border border-[#14d3f3] rounded-2xl p-6 min-w-[400px]">
                  <div className="flex gap-8">
                    {/* Service Products Column */}
                    <div className="flex flex-col gap-4 flex-1">
                      <h3 className="font-semibold text-white text-sm leading-6">
                        Service Products
                      </h3>
                      <div className="flex flex-col gap-4">
                        <Link href="/services/cloud-engineering" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                          Cloud Engineering
                        </Link>
                        <Link href="/services/security-architecture" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                          Security Architecture
                        </Link>
                        <Link href="/services/platform-acceleration" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                          Platform Acceleration
                        </Link>
                        <Link href="/services/platform-due-diligence" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                          Platform Due Diligence
                        </Link>
                        <Link href="/services/engineering-performance" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                          Engineering Performance
                        </Link>
                        <Link href="/services/data-ai-services" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                          Data & AI Services
                        </Link>
                      </div>
                    </div>
                    
                    {/* General Services Column */}
                    <div className="flex flex-col gap-4 flex-1">
                      <h3 className="font-semibold text-white text-sm leading-6">
                        General Services
                      </h3>
                      <div className="flex flex-col gap-4">
                        <Link href="/services/engineering-as-a-service" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                          EAAS
                        </Link>
                        <Link href="/services/technology-advisory" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                          Technology Advisory /<br />Fractional Services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col gap-2.5 group">
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
              
              {/* Industries Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50">
                <div className="bg-[#0c2080] border border-[#14d3f3] rounded-2xl p-6 min-w-[200px]">
                  <div className="flex flex-col gap-4">
                    <Link href="/industries/banking" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Banking
                    </Link>
                    <Link href="/industries/payments" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Payments
                    </Link>
                    <Link href="/industries/supperannuation" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Superannuation
                    </Link>
                    <Link href="/industries/insurance" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Insurance
                    </Link>
                    <Link href="/industries/retail" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Retail
                    </Link>
                    <Link href="/industries/media" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Media
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative flex flex-col gap-2.5 group">
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
              
              {/* Collections Dropdown Menu */}
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible z-50">
                <div className="bg-[#0c2080] border border-[#14d3f3] rounded-2xl p-6 min-w-[200px]">
                  <div className="flex flex-col gap-4">
                    <Link href="/collections/news" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      News
                    </Link>
                    <Link href="/collections/case-studies" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Case Studies
                    </Link>
                    <Link href="/collections/perspectives" className="font-semibold text-[#14d3f3] text-base leading-6 hover:opacity-80 transition-opacity">
                      Perspectives
                    </Link>
                  </div>
                </div>
              </div>
            </div>

              <Link href="/careers" className="flex items-center justify-center gap-1">
                <span className="font-normal text-white text-base leading-6 whitespace-nowrap">
                  Careers
                </span>
              </Link>
            </nav>

            {/* Contact Button */}
            <Link href="/contact-us" className="bg-[#5ae0f6] flex items-center justify-center gap-2 px-4 py-2 rounded-xl">
              <span className="font-medium text-[#002b50] text-sm leading-5 whitespace-nowrap">
                Contact
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Tablet Header */}
      <div className="hidden md:flex lg:hidden items-center justify-between h-[72px] px-6 max-w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="relative h-[36px] w-[169px]">
            <Image
              src="/images/logos/S@S_Logo_WHITE_RGB.png"
              alt="Software@Scale Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Decorative S Element - Tablet */}
        <div className="flex-1 h-[72px] relative max-w-[300px] overflow-hidden">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 w-[280px] h-[280px]">
            <Image
              src="/images/logos/S@S_Logo_Mark_RGB.svg"
              alt="Software@Scale Logo Mark"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Simplified Navigation */}
        <div className="flex items-center gap-3">
          <Link href="/contact-us" className="bg-[#5ae0f6] flex items-center justify-center gap-2 px-3 py-1.5 rounded-xl">
            <span className="font-medium text-[#002b50] text-sm leading-5 whitespace-nowrap">
              Contact
            </span>
          </Link>
          <button
            onClick={toggleMobileMenu}
            className="flex items-center justify-center w-10 h-10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Header */}
      <div className="flex md:hidden items-center justify-between h-[72px] px-3 max-w-full">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/" className="relative h-[28px] w-[132px]">
            <Image
              src="/images/logos/S@S_Logo_WHITE_RGB.png"
              alt="Software@Scale Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* Decorative S Element - Mobile */}
        <div className="flex-1 h-[72px] relative max-w-[250px] overflow-hidden">
          <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-12 w-[240px] h-[240px]">
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
          className="flex items-center justify-center w-10 h-10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 12H21M3 6H21M3 18H21" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#0c2080] border-t border-[#1a3a9a] z-[60] md:hidden shadow-lg">
          <nav className="flex flex-col px-4 py-3">
            <div className="flex flex-col gap-2">
              {/* About Section */}
              <div className="border-b border-[#1a3a9a]">
                <button
                  onClick={() => toggleMobileSection('about')}
                  className="flex items-center justify-between py-3 w-full text-left"
                >
                  <span className="font-normal text-white text-base leading-6">
                    About
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform ${expandedMobileSection === 'about' ? 'rotate-180' : ''}`}
                  >
                    <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {expandedMobileSection === 'about' && (
                  <div className="pb-4 pl-4">
                    <div className="flex flex-col gap-4">
                      <Link href="/core-values" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Our Purpose and Values
                      </Link>
                      <Link href="/people" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Who We Are
                      </Link>
                      <Link href="/recognition" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Awards and Achievements
                      </Link>
                      <Link href="/our-history" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Our History
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Our Services Section */}
              <div className="border-b border-[#1a3a9a]">
                <button
                  onClick={() => toggleMobileSection('services')}
                  className="flex items-center justify-between py-3 w-full text-left"
                >
                  <span className="font-normal text-white text-base leading-6">
                    Our Services
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform ${expandedMobileSection === 'services' ? 'rotate-180' : ''}`}
                  >
                    <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {expandedMobileSection === 'services' && (
                  <div className="pb-4 pl-4">
                    <div className="flex flex-col gap-4">
                      <div className="mb-2">
                        <h4 className="font-semibold text-white text-sm leading-6 mb-2">Service Products</h4>
                        <div className="flex flex-col gap-2">
                          <Link href="/services/cloud-engineering" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                            Cloud Engineering
                          </Link>
                          <Link href="/services/security-architecture" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                            Security Architecture
                          </Link>
                          <Link href="/services/platform-acceleration" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                            Platform Acceleration
                          </Link>
                          <Link href="/services/platform-due-diligence" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                            Platform Due Diligence
                          </Link>
                          <Link href="/services/engineering-performance" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                            Engineering Performance
                          </Link>
                          <Link href="/services/data-ai-services" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                            Data & AI Services
                          </Link>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm leading-6 mb-2">General Services</h4>
                        <div className="flex flex-col gap-2">
                          <Link href="/services/engineering-as-a-service" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                            EAAS
                          </Link>
                          <Link href="/services/technology-advisory" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                            Technology Advisory / Fractional Services
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Industries Section */}
              <div className="border-b border-[#1a3a9a]">
                <button
                  onClick={() => toggleMobileSection('industries')}
                  className="flex items-center justify-between py-3 w-full text-left"
                >
                  <span className="font-normal text-white text-base leading-6">
                    Industries
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform ${expandedMobileSection === 'industries' ? 'rotate-180' : ''}`}
                  >
                    <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {expandedMobileSection === 'industries' && (
                  <div className="pb-4 pl-4">
                    <div className="flex flex-col gap-4">
                      <Link href="/industries/banking" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Banking
                      </Link>
                      <Link href="/industries/payments" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Payments
                      </Link>
                      <Link href="/industries/supperannuation" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Superannuation
                      </Link>
                      <Link href="/industries/insurance" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Insurance
                      </Link>
                      <Link href="/industries/retail" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Retail
                      </Link>
                      <Link href="/industries/media" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Media
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Collections Section */}
              <div className="border-b border-[#1a3a9a]">
                <button
                  onClick={() => toggleMobileSection('collections')}
                  className="flex items-center justify-between py-3 w-full text-left"
                >
                  <span className="font-normal text-white text-base leading-6">
                    Collections
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={`transform transition-transform ${expandedMobileSection === 'collections' ? 'rotate-180' : ''}`}
                  >
                    <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                {expandedMobileSection === 'collections' && (
                  <div className="pb-4 pl-4">
                    <div className="flex flex-col gap-4">
                      <Link href="/collections/news" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        News
                      </Link>
                      <Link href="/collections/case-studies" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Case Studies
                      </Link>
                      <Link href="/collections/perspectives" className="font-semibold text-[#14d3f3] text-base leading-6 py-1">
                        Perspectives
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              {/* Careers - Direct Link */}
              <div className="py-3 border-b border-[#1a3a9a]">
                <Link href="/careers" className="font-normal text-white text-base leading-6">
                  Careers
                </Link>
              </div>

              {/* Contact Button */}
              <div className="pt-4">
                <Link href="/contact-us" className="bg-[#5ae0f6] flex items-center justify-center gap-2 px-4 py-2 rounded-xl w-full">
                  <span className="font-medium text-[#002b50] text-base leading-6">
                    Contact
                  </span>
                </Link>
              </div>
            </div>
          </nav>
        </div>
      )}

      {/* Tablet Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed top-[72px] left-0 right-0 bg-[#0c2080] border-t border-[#1a3a9a] z-[60] hidden md:block lg:hidden">
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