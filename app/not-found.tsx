import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import Button from '@/app/components/shared/Button';

export const metadata: Metadata = {
  title: 'Page not found | Software@Scale',
};

const SUGGESTED_LINKS = [
  { href: '/services/engineering-teams', label: 'Our services' },
  { href: '/collections/case-studies', label: 'Case studies' },
  { href: '/industries/banking', label: 'Industries' },
  { href: '/careers', label: 'Careers' },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main id="main-content" tabIndex={-1} className="outline-none flex-1 bg-[#0c2080]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-16 py-20 md:py-28 flex flex-col gap-8 items-start">
          <p className="text-[#5ae0f6] font-semibold text-base leading-[1.5]">404</p>
          <h1 className="text-white font-bold text-[40px] md:text-[56px] leading-[1.2] tracking-[-0.4px] md:tracking-[-0.56px]">
            We can&apos;t find that page
          </h1>
          <p className="text-white text-base md:text-[18px] leading-[1.5] max-w-[640px]">
            The link may be out of date, or the page may have moved. Try one of these instead, or get in touch and we&apos;ll point you in the right direction.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button href="/" variant="primary">Go to the homepage</Button>
            <Button href="/contact-us" variant="outline">Contact us</Button>
          </div>
          <nav aria-label="Suggested pages" className="pt-4">
            <ul className="flex flex-wrap gap-x-8 gap-y-3">
              {SUGGESTED_LINKS.map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white underline underline-offset-4 hover:text-[#5ae0f6] transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </main>

      <Footer />
    </div>
  );
}
