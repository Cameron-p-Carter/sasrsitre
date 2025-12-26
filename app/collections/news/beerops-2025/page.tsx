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
  title: "Software@Scale at BeerOps 2025",
  description: "Software@Scale joined Australia's largest tech networking event, BeerOps 2025, connecting with the engineering community and supporting an industry-led platform for collaboration and giving.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  date: "Nov 2025",
  readTime: "3 min read"
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `BeerOps 2025 brought together thousands of professionals from across software engineering, cloud, data and security for one of Australia’s most established technology networking events. Known for its inclusive and community-driven approach, BeerOps continues to play a key role in fostering collaboration across the technology sector.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/articles/art5.jpg',
      caption: 'Custom Software@Scale BeerOps 2025 mugs prepared for the event, reflecting the company’s presence and engagement within the engineering community.',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Software@Scale attended the event with a dedicated booth, providing an opportunity to reconnect with clients, partners and peers while engaging with new members of the tech community. The evening facilitated meaningful conversations around engineering practice, emerging technologies and the challenges facing modern software delivery.

The event also highlighted BeerOps’ commitment to social impact, with proceeds supporting the Children’s Hospital. This philanthropic focus remains a defining element of BeerOps, reinforcing the role of the technology community in contributing beyond the industry itself.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/articles/art6.jpg',
      caption: 'The Software@Scale team and community members gathered at BeerOps 2025, connecting over shared conversations around technology, engineering and collaboration.',
    } as ImageBlock,
    {
      type: 'richText',
      content: `For Software@Scale, participation in BeerOps 2025 aligned with its ongoing engagement in industry-led initiatives that prioritise knowledge sharing, professional connection and community contribution. The event provided a valuable forum to strengthen relationships and remain closely connected to the evolving Australian technology landscape.`,
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
