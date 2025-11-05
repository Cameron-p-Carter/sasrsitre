import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import CTASection from '@/app/components/CTASection';
import BlogSection from '@/app/components/BlogSection';
import ArticleHeaderSection from '@/app/components/ArticleHeaderSection';
import ArticleContentSection from '@/app/components/ArticleContentSection';

// --- Data Structures copied from ArticleHeaderSection.tsx and ArticleContentSection.tsx ---

interface ArticleHeaderData {
  title: string;
  description: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
}

interface AuthorData {
  name: string;
  title: string;
  avatarSrc: string;
}

interface ImageBlock {
  type: 'image';
  src: string;
  caption: string;
}

interface QuoteBlock {
  type: 'quote';
  text: string;
}

interface RichTextBlock {
  type: 'richText';
  content: string;
}

type ContentBlock = ImageBlock | QuoteBlock | RichTextBlock;

interface ArticleContentData {
  contentBlocks: ContentBlock[];
  author: AuthorData;
  backgroundColor: string;
  textColor: string;
}

interface CTASectionData {
  imageSrc: string;
  title: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
}

// --- Layout Data Structure ---

interface ArticlePageData {
  header: ArticleHeaderData;
  content: ArticleContentData;
  cta: CTASectionData;
}

interface ArticlePageLayoutProps {
  data: ArticlePageData;
}

const ArticlePageLayout = ({ data }: ArticlePageLayoutProps) => {
  return (
    <div className="min-h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-20">
        <Header />
      </div>
      
      <main className="pt-[72px]">
        <ArticleHeaderSection
          title={data.header.title}
          description={data.header.description}
          backgroundColor={data.header.backgroundColor}
          titleColor={data.header.titleColor}
          textColor={data.header.textColor}
        />
        
        <ArticleContentSection
          contentBlocks={data.content.contentBlocks}
          author={data.content.author}
          backgroundColor={data.content.backgroundColor}
          textColor={data.content.textColor}
        />
        
        <BlogSection />
        
        <CTASection
          imageSrc={data.cta.imageSrc}
          title={data.cta.title}
          description={data.cta.description}
          primaryButtonText={data.cta.primaryButtonText}
          secondaryButtonText={data.cta.secondaryButtonText}
        />
      </main>
      
      <Footer />
    </div>
  );
};

export default ArticlePageLayout;