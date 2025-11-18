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
  title: "Connecting with the Tech Community at BeerOps 2025",
  description: "As sponsors and attendees of BeerOps 2025, Software@Scale joined hundreds of technology professionals in Sydney for an evening that brought together innovation, community and purpose.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `BeerOps 2025 once again lived up to its reputation as Australia's largest and most anticipated technology networking event. Held at Dockside Cockle Bay Wharf, the event drew more than a thousand professionals from across engineering, software, data and product disciplines - a vibrant cross-section of the country's growing tech landscape.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder111.png',
      caption: 'More than a thousand professionals attended the event',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Software@Scale took part as an event sponsor, connecting with clients, partners and industry peers. The team hosted its own activation at the venue, complete with the now-familiar S@S Wheel of Fortune and limited-edition merchandise that quickly became sought-after collectables among attendees. Beyond the energy of the event floor, the evening created genuine opportunities to engage with emerging talent, industry leaders and fellow innovators shaping the next phase of Australia's digital economy.\n\nBeerOps is more than a networking night. Founded in 2014, it has evolved into a national platform for collaboration across DevOps, data, cloud and software engineering. The event's organisers emphasise diversity, inclusion and philanthropy - raising funds for local charities such as the Children's Hospital Foundation while fostering a community built on connection and shared learning.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder112.jpg',
      caption: 'The Software@Scale team at BeerOps 2025',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Speakers from leading organisations, including Commonwealth Bank of Australia and Robert Walters Group, highlighted the importance of community-driven events in strengthening Australia's technology sector. The evening featured stories from professionals whose careers had been shaped by BeerOps - proof of the lasting professional relationships and opportunities that can grow from grassroots industry events.\n\nFor Software@Scale, participation in BeerOps 2025 was both a celebration and a reaffirmation of its values. The company's ongoing involvement in initiatives like this reflects a wider commitment to supporting Australia's engineering culture - one grounded in collaboration, inclusion and technical excellence.`,
    } as RichTextBlock,
  ],
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Connect with Our Community",
  description: "Join us at upcoming technology events and discover how Software@Scale contributes to Australia's innovation ecosystem.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function BeerOpsArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}