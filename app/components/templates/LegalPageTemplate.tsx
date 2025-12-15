import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import ArticleHeaderSection from '@/app/components/sections/article/ArticleHeaderSection';
import { ReactNode } from 'react';

interface LegalPageTemplateProps {
  title: string;
  children: ReactNode;
}

export default function LegalPageTemplate({ title, children }: LegalPageTemplateProps) {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <ArticleHeaderSection
          title={title}
          description=""
          backgroundColor="bg-[#cce1f4]"
          titleColor="text-[#0c2080]"
          textColor="text-[#00050a]"
        />

        {/* Content Section wrapper to centre text content */}
        <section className="bg-[#cce1f4] px-5 md:px-16 py-12 md:py-20 w-full">
          <div className="max-w-[1280px] mx-auto">
            <div className="max-w-[768px] mx-auto w-full">
              {children}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
