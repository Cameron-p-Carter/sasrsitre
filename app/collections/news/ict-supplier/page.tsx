import ArticlePageLayout from '@/app/components/ArticlePageLayout';

// --- Data Structures copied from ArticlePageLayout.tsx ---

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

interface ArticlePageData {
  header: ArticleHeaderData;
  content: ArticleContentData;
  cta: CTASectionData;
}

// --- Placeholder Data ---

const ARTICLE_HEADER_DATA: ArticleHeaderData = {
  title: "Software@Scale Approved as ICT Supplier for NSW Government",
  description: "Software@Scale has been added to the NSW Government Advanced Registration Supplier List (SCM0020), reflecting its proven capability in delivering complex, high-compliance technology solutions across state programs.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `The NSW Government's ICT Services Scheme supports agencies in engaging trusted suppliers for technology and digital transformation projects across the state. Software@Scale's inclusion as a preferred supplier underscores its strong performance record, risk management discipline and ability to deliver secure, high-quality outcomes for large-scale programs.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder108.png',
      caption: 'Software@Scale approved as an ICT supplier under the NSW Government ICT Services Scheme, supporting digital transformation across state agencies.',
    } as ImageBlock,
    {
      type: 'richText',
      content: `The company was approved in every category it applied for, including:\n\n• Cloud engineering\n• Software design and development\n• Machine learning and AI\n• Data and analytics\n• Monitoring and security\n\nThis recognition marks an important milestone in Software@Scale's public sector expansion, following consistent success across enterprise and digital transformation engagements. It positions the company to further contribute to NSW Government initiatives aimed at improving service delivery, efficiency and resilience through technology.\n\nSoftware@Scale continues to collaborate closely with government partners to deliver solutions that strengthen infrastructure, protect data integrity and support sustainable innovation across departments and communities.`,
    } as RichTextBlock,
  ],
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "NSW Government ICT Solutions",
  description: "Discover how Software@Scale delivers secure, high-quality technology outcomes for NSW Government digital transformation initiatives.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function ICTSupplierArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}