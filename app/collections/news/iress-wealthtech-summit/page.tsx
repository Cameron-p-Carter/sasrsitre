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
  title: "Software@Scale at the 2025 Iress WealthTech Summit",
  description: "Bringing together the nation's financial, technology and advice leaders, the Iress WealthTech Summit 2025 explored innovation, trust and the evolving role of technology in client engagement.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `Held in Melbourne on 6 August, the Iress WealthTech Summit brought together more than 300 industry professionals for a day of discussion on how emerging technologies are reshaping advice, operations and client relationships across financial services. The program featured keynote sessions and panel discussions focused on cybersecurity, AI, data management and the ethical adoption of digital tools.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder105.jpg',
      caption: 'Iress WealthTech Summit 2025 bringing together industry professionals',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Louis Droguett, CEO and co-founder of Software@Scale, joined Fraser Jack from The Cyber Collective, John Paul Lonie from Iress, and Peter Worn from Finura in a panel titled "Cyber Risk in Advice: Protecting Clients and Practice in a Digital Age." The discussion addressed the increasing complexity of cybersecurity within financial services and examined how artificial intelligence and cloud infrastructure are redefining the way advice firms manage risk and safeguard client data.\n\nThe summit provided an opportunity for Software@Scale to engage with leaders from across banking, superannuation and technology. Through both its on-stage contribution and event presence, the company reinforced its commitment to helping financial institutions strengthen resilience and performance through secure, scalable software solutions.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/placeholder/placeholder118.jpg',
      caption: 'Louis Droguett participating in the cybersecurity panel discussion at the summit',
    } as ImageBlock,
    {
      type: 'richText',
      content: `The WealthTech Summit underscored the sector's focus on client-centric innovation, transparency and digital trust. For Software@Scale, the event reflected its continued collaboration with partners across the financial ecosystem - advancing smarter, more secure technology for the industry's next phase of growth.`,
    } as RichTextBlock,
  ],
  backgroundColor: "bg-[#cce1f4]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CTA_DATA: CTASectionData = {
  imageSrc: "/images/placeholder/placeholder16.jpg",
  title: "Secure Your Financial Future",
  description: "Discover how Software@Scale's cybersecurity and financial technology expertise can strengthen your organization's resilience and performance.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function IressWealthTechSummitArticlePage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}