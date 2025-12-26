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

interface ArticlePageData {
  header: ArticleHeaderData;
  content: ArticleContentData;
  cta: CTASectionData;
}

// --- Article Data ---

const ARTICLE_HEADER_DATA: ArticleHeaderData = {
  title: "Why Everyone Hates Estimates",
  description: "Estimates frustrate everyone, but understanding the purpose behind them can make the process faster, clearer, and far more useful.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  date: "Apr 2025",
  readTime: "3 min read"
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `**Everyone hates estimates.**\n\nThey take too much time to do, there is not enough information provided as an input, and the most dreaded of all, someone will say “we will not hold you to these estimates” and then end up doing so anyway.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placholder160.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Most organisations have some awareness of different types of estimates, generally based on the level of precision, such as high level estimates versus detailed estimates. But if you consider the purpose of the estimate, there are different approaches that may be taken:\n\n**Needing a maximum cost due to a commercial commitment (For example, a fixed price contract)?**\n\n*   Create a detailed estimate based on clear scope with contingency included.\n*   *Do not bypass the detail, or you will pay for a weak estimate later.*\n\n**Setting an expectation for future planning purposes?**\n\n*   Here a quickly constructed high level estimate with a low to high range can suffice.\n*   *Do not spend too much time on this, as it would be over committing on an uncertain future.*\n\n**Working towards a revenue generating opportunity?**\n\n*   Understand the revenue drivers and provide options that balance time and cost against commercial benefit. Consider what scope can be safely deferred.\n*   *Do not focus on comprehensive scope coverage or you risk missing the opportunity.*\n\n**Looking to achieve a cost saving?**\n\n*   Determine the minimum requirement needed to achieve the cost saving and build the estimate around that minimum.\n*   *Again, do not focus on comprehensive scope coverage that does not directly lead to your goal.*\n\n**Trying to understand whether something unclear or aspirational is achievable?**\n\n*   Estimate an initial step only, such as discovery or a proof of concept.\n*   *Do not burn effort creating estimates for something that is too undefined to size.*\n\nThere are probably other ways to shape estimates, but the most important is understanding the purpose and then shaping the approach accordingly.`,
    } as RichTextBlock,
  ],
  author: {
    name: "Li-Shuai Soh",
    title: "Head of Architecture and Solutions",
    avatarSrc: "/images/profiles/lipfp.svg",
  },
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Get Clear on Delivery",
  description: "Contact us to implement robust estimating and project governance practices for predictable results.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function EstimatesPage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}
