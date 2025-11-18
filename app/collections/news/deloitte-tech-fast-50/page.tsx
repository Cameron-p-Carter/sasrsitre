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
  title: "Software@Scale Named #1 Rising Star in Deloitte Tech Fast 50 2024",
  description: "Software@Scale has taken the top spot in Deloitte's 2024 Tech Fast 50 Rising Star Awards, recognised for its exceptional growth and contribution to Australia's technology sector.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `Deloitte's annual Tech Fast 50 Awards celebrate the country's most dynamic and innovative technology companies - those demonstrating sustained performance and the potential to shape the future of the digital economy.\n\nIn 2024, Software@Scale was named the #1 Rising Star, achieving a remarkable 2,356% growth rate over three years. The Rising Star category highlights emerging Australian technology businesses in operation for less than three years that have achieved significant revenue growth and scalability.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder107.jpg',
      caption: 'Software@Scale has taken the top spot in Deloitte\'s 2024 Tech Fast 50 Rising Star Awards',
    } as ImageBlock,
    {
      type: 'richText',
      content: `The award recognises Software@Scale's ability to deliver consistent results in a challenging market, driven by its commitment to technical excellence, client outcomes and delivery at scale. The company joins an impressive list of past Deloitte Tech Fast 50 winners — including Afterpay, Atlassian and Zip - that have gone on to become leading innovators in Australia's technology landscape.\n\nCEO and co-founder Louis Droguett credited the achievement to the company's people, culture and collaborative approach to growth, acknowledging that Software@Scale's success is built on a strong foundation of shared values and client trust.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder121.jpg',
      caption: 'The Software@Scale team celebrating their #1 Rising Star win at Deloitte\'s 2024 Tech Fast 50 Awards.',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Deloitte's 2024 program, sponsored by ASX, Atlassian, Baker McKenzie and Workday, focused on resilience and innovation amid changing economic conditions. The recognition places Software@Scale among the next generation of technology leaders - a position the company continues to strengthen through disciplined growth and engineering excellence.`,
    } as RichTextBlock,
  ],
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Driving Innovation and Growth",
  description: "Discover how Software@Scale's commitment to technical excellence and delivery at scale continues to shape Australia's technology landscape.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function DeloitteTechFast50ArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}