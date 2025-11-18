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
  title: "Software@Scale Approved on Federal Digital and Cloud Marketplace Panels",
  description: "Software@Scale has been officially approved as a supplier on the Australian Government's Digital and Cloud Marketplace Panels, reinforcing its position as a trusted technology partner for federal and state digital transformation initiatives.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `The approval enables federal agencies to directly engage Software@Scale for ICT and digital services across a range of technical and strategic disciplines. Combined with its existing NSW Government ICT panel accreditation, the company is now positioned to deliver comprehensive, Australia-wide digital solutions.\n\nSoftware@Scale was approved across every category it applied for, including software engineering, architecture, business and process analysis, cybersecurity, cloud consulting, and program and project management.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder109.jpg',
      caption: 'Software@Scale approved as a trusted supplier on the Australian Government\'s Digital and Cloud Marketplace Panels, supporting national ICT and digital transformation initiatives.',
    } as ImageBlock,
    {
      type: 'richText',
      content: `This accreditation underscores the company's growing capability in supporting government programs that demand secure, scalable, and efficient technology outcomes. It reflects Software@Scale's ongoing commitment to delivering engineering excellence, compliance, and value within the public sector.\n\nAs digital transformation continues to accelerate across Australia's public agencies, Software@Scale looks forward to collaborating with federal partners to enhance digital infrastructure, strengthen security frameworks, and advance technology outcomes for government and citizens alike.`,
    } as RichTextBlock,
  ],
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Government Digital Solutions",
  description: "Discover how Software@Scale delivers secure, scalable technology outcomes for federal and state government digital transformation initiatives.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function PanelsArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}