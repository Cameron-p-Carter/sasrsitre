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
  title: "Louis Droguett Named Finalist in 2025 CEO of the Year Awards",
  description: "Software@Scale's CEO and co-founder, Louis Droguett, has been named a finalist in The CEO Magazine's 2025 Executive of the Year Awards, recognised for his leadership in scaling one of Australia's fastest-growing technology businesses.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `The CEO Magazine's annual Executive of the Year Awards honour the country's most accomplished leaders across business, technology and professional services. Now in its fourteenth year, the program celebrates excellence in strategy, innovation and impact across diverse industries.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder113.jpg',
      caption: 'CEO Magazine to present the winning trophy on 12 November 2025',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Louis Droguett was shortlisted in the Professional Services Executive of the Year category, joining senior leaders from across Australia recognised for their contribution to growth and transformation within their respective sectors. The selection acknowledges his role in steering Software@Scale through a period of sustained expansion while maintaining a culture of quality and collaboration.\n\nUnder Louis's leadership, Software@Scale has evolved from a specialist consultancy into a national delivery partner supporting clients across enterprise software, data and cloud transformation. His approach combines disciplined execution with a clear focus on long-term value for both clients and teams.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder114.jpg',
      caption: 'CEO, Louis Droguett recognised for his leadership on scaling one of Australia\'s fastest-growing technology businesses.',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Finalists will be celebrated at the Executive of the Year Awards Gala on 12 November 2025 at Crown Melbourne, bringing together industry leaders, entrepreneurs and decision-makers from across the country for an evening of recognition and connection.`,
    } as RichTextBlock,
  ],
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Celebrate Leadership Excellence",
  description: "Discover how Software@Scale's leadership approach drives innovation and growth in Australia's technology sector.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function ExecutiveOfTheYearAwardsArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}