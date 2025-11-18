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
  title: "Celebrating Growth at the 2025 CUB Awards",
  description: "Software@Scale has been recognised as Australia's Fastest Growing Business at the 2025 CUB Awards, a distinction that reflects its commitment to quality, innovation and measurable impact across the technology sector.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `Software@Scale's recognition at the 2025 CUB Awards highlights a trajectory built on disciplined growth and enduring client partnerships. Hosted by the Club of United Business, the annual awards bring together Australia's most accomplished business leaders to acknowledge excellence in entrepreneurship, innovation and commercial leadership. The accolade positions Software@Scale among the country's most dynamic organisations, acknowledged for its consistent expansion and ability to translate complex challenges into dependable digital solutions.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder110.jpg',
      caption: 'Patricia Droguett (COO, Software@Scale) receives the 2025 Winner for Fastest Growing Business Award',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Since its inception, the company has established a reputation for precision in execution and an unwavering focus on outcomes. What began as a boutique consultancy has evolved into a national delivery partner supporting industries from finance and energy to emerging technology. Central to this progress is a delivery framework that prioritises alignment between engineering, design and strategic intent - enabling Software@Scale to operate with both speed and integrity across large-scale transformation programs.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder101.jpg',
      caption: 'CUB Awards Fastest Growing Business 2025 Winner',
    } as ImageBlock,
    {
      type: 'richText',
      content: `The company's growth has also been driven by an intentional approach to culture and leadership. By maintaining high internal standards, refining governance models and investing in talent, Software@Scale continues to scale its capability while preserving the quality of its work. This award serves as recognition of the strength of that model - growth achieved through clarity, consistency and long-term value creation.\n\nSoftware@Scale's inclusion among the 2025 CUB Award winners reinforces its place within Australia's modern business landscape. As technology reshapes the way organisations operate, the company remains focused on enabling clients to evolve with confidence - delivering software that underpins efficiency, performance and resilience. The recognition is both a milestone and a motivator, underscoring the company's role in setting the standard for excellence in scalable software delivery.`,
    } as RichTextBlock,
  ],
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Join Us on Our Journey",
  description: "Contact us today to explore how our Cloud Engineering services can transform your business.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function FirstArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}