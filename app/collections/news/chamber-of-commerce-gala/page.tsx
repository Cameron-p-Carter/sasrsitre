import ArticlePageLayout from '@/app/components/templates/ArticlePageLayout';

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
  title: "Software@Scale Supports Australian Tamil Chamber of Commerce Gala",
  description: "Software@Scale was proud to support the Australian Tamil Chamber of Commerce's 10th Anniversary Gala Dinner, recognising a decade of contribution to Australia's multicultural business community.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `The Australian Tamil Chamber of Commerce (ATCC) marked its 10th anniversary with its Annual Business Gala Dinner in September 2025, bringing together business leaders, professionals and community representatives from across Australia. The event celebrated the achievements of Tamil professionals and businesses, while reinforcing the importance of cultural connection and enterprise within Australia’s broader economic landscape.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/articles/art8.jpg',
      caption: `Louis Droguett (CEO, Software@Scale)  Patricia Droguett (COO, Software@Scale) Software@Scale with Dr Andrew Charlton at the Australian Tamil Chamber of Commerce 10th Anniversary Gala Dinner`,
    } as ImageBlock,
    {
      type: 'richText',
      content: `Software@Scale supported the milestone event, joining members and guests for an evening that highlighted the role of innovation, entrepreneurship and collaboration in driving sustainable business growth. The gala also provided an opportunity to strengthen relationships across industries and communities, reflecting ATCC’s ongoing commitment to fostering meaningful commercial connections.

A key highlight of the evening was an address by Dr Andrew Charlton, Assistant Minister for Science, Technology and the Digital Economy, Cabinet Secretary, and Special Envoy for Cyber Security and Digital Resilience. Dr Charlton shared insights into how technology, innovation and digital capability are shaping Australia’s future, reinforcing the importance of strong public–private collaboration in building a resilient digital economy.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/articles/art7.jpg',
      caption: `Guests gather at the Australian Tamil Chamber of Commerce 10th Anniversary Gala Dinner, celebrating a decade of community, culture and business leadership.`,
    } as ImageBlock,
    {
      type: 'richText',
      content: `For Software@Scale, participation in the ATCC Gala aligned with its broader commitment to supporting inclusive business communities and engaging with organisations that champion innovation and opportunity. The event underscored the value of cross-cultural collaboration in strengthening Australia’s technology and business ecosystems.`,
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