import ArticlePageLayout from '@/app/components/templates/ArticlePageLayout';

// --- Data Structures copied from ArticlePageLayout.tsx ---

interface ArticleHeaderData {
  title: string;
  description: string;
  backgroundColor: string;
  titleColor: string;
  textColor: string;
  date?: string;
  readTime?: string;
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
  title: "Software@Scale Wins Deloitte Rising Star Award for Second Year",
  description: "Software@Scale has been named the winner of Deloitte's 2025 Tech Fast 50 Rising Star Award, becoming the first company to receive the honour in consecutive years.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  date: "Nov 2025",
  readTime: "2 min read"
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `Deloitte’s Tech Fast 50 program has, for more than two decades, recognised Australia’s fastest-growing technology companies based on sustained revenue growth, operational discipline and long-term potential. The Rising Star category highlights emerging organisations demonstrating exceptional momentum in their early years of operation.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/articles/art3.jpg',
      caption: 'Software@Scale recognised as the Deloitte Tech Fast 50 Rising Star winner in both 2024 and 2025.',
    } as ImageBlock,
    {
      type: 'richText',
      content: `In 2025, Software@Scale was named the Rising Star winner for the second year in a row — an achievement unmatched in the program’s history. The recognition reflects consistent performance across delivery, growth and client outcomes in a competitive and evolving market.

The award acknowledges Software@Scale’s ability to scale responsibly while maintaining high standards across engineering, architecture and delivery. Its continued growth has been driven by a focus on ownership, collaboration and technical excellence across complex, high-impact engagements.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/articles/art4.jpg',
      caption: 'The Software@Scale team celebrating their second consecutive Deloitte Tech Fast 50 Rising Star win.',
    } as ImageBlock,
    {
      type: 'richText',
      content: `The 2025 Tech Fast 50 awards were supported by partners including ASX, Atlassian, Baker McKenzie, Amazon Web Services (AWS), SAP and Deloitte. Winners across the program represent a broad cross-section of Australia’s technology sector, spanning fintech, enterprise platforms, sustainability and emerging digital services.

Software@Scale’s back-to-back recognition reinforces its position among Australia’s leading growth-stage technology consultancies, reflecting a sustained commitment to quality, trust and long-term value for clients.`,
    } as RichTextBlock,
  ],
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Champion Inclusive Innovation",
  description: "Join Software@Scale in building an inclusive technology future where diverse leadership drives meaningful change and innovation.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function WomenLeadingTechAwardsArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}
