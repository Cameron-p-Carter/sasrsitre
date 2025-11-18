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
  title: "Software@Scale Presents at AWS Community Day 2025",
  description: "Software@Scale's Head of Cloud and Infrastructure, Richard Ford, joined AWS Community Day Australia 2025 in Brisbane to share new perspectives on innovation, scalability and applied cloud engineering.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `AWS Community Day Australia brings together developers, architects and industry leaders from across the country to exchange ideas, showcase solutions and strengthen the nation's technology ecosystem. The 2025 event in Brisbane featured a full program of technical sessions and keynote presentations exploring how cloud technologies continue to accelerate business transformation.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder115.jpg',
      caption: 'Richard Ford presenting at AWS Community Day 2025',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Representing Software@Scale, Richard Ford took the stage with his presentation Why Grass Fed Makes the Best Burgers: A Journey of Discovery - a session that used a creative analogy to explore the relationship between opportunity, innovation and scalable software delivery. The talk examined the engineering approach behind deploying AWS Greengrass across more than 200,000 embedded servers, outlining practical strategies for performance, consistency and security at scale.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder116.jpg',
      caption: 'For the first time in nearly 6 years, AWS Community Day returned to bring builders together in one place',
    } as ImageBlock,
    {
      type: 'richText',
      content: `The event highlighted the importance of community-driven learning and the value of sharing applied experiences within Australia's growing cloud sector. Software@Scale's participation reaffirmed its commitment to contributing to the broader AWS ecosystem and advancing engineering excellence through collaboration and knowledge exchange.`,
    } as RichTextBlock,
  ],
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Advance Your Cloud Journey",
  description: "Discover how Software@Scale's cloud engineering expertise can accelerate your digital transformation and scalability goals.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function AWSCommunityDayArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}