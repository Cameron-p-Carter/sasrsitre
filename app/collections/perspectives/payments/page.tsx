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
  title: "Australia's Payment Infrastructure: A Decade Ahead",
  description: "A look at Australia's real-time payment ecosystem is considered world leading, and how its technical foundations continue to set it apart.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `We often look overseas for best practices, yet here in Australia we have quietly built one of the most sophisticated real time payment ecosystems in the world. It is engineered for speed, security, and seamless interoperability.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placholder153.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `What sets us apart:\n\n**New Payments Platform (NPP)**\nInstant settlement, available 24 hours a day, 7 days a week, including weekends and public holidays. Payments typically clear in under 60 seconds.\n\n**PayID**\nSay goodbye to BSBs and account numbers. Link payments to a mobile number, email address, or ABN for a streamlined experience and lower fraud risk.\n\n**PayTo**\nA consent driven, pull based framework for recurring or one off payments. Customers can authorise and revoke agreements directly in their banking app.\n\n**Osko**\nPeer to peer payments over NPP, complete with real time confirmation and rich metadata.\n\n**ISO 20022**\nA structured, extensible messaging standard that delivers richer data for reconciliation, compliance, and automation.\n\nFrom a systems design perspective, this translates into:\n\n*   Real time APIs replacing nightly batch jobs\n*   Event driven workflows across institutional boundaries\n*   Verified payee addressing to strengthen trust and reduce fraud\n*   Native consent flows built into the protocol\n*   Data rich payloads that reduce operational overhead and fuel automation\n\nThe real magic is not just the technology. It is the alignment of technical architecture, regulatory strategy, and industry adoption. That combination is rare and powerful.`,
    } as RichTextBlock,
  ],
  author: {
    name: "Ravi Chotalia",
    title: "Head of Platform Engineering",
    avatarSrc: "/images/profiles/ravipfp.svg",
  },
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Build Next Generation Payment Systems",
  description: "Contact us to leverage our expertise in Australia's real-time payment ecosystem for your business advantage.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function PaymentsPage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}