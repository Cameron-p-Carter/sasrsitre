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
  title: "When RACI Goes Wrong",
  description: "How seemingly subtle behaviours can distort the RACI model and quietly undermine team accountability.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  date: "Feb 2025",
  readTime: "3 min read"
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `RACI (Responsible, Accountable, Consulted, Informed) has been used by project managers for decades as a way to define the roles of individuals and teams. It has become widely adopted across many organisations. But it is important to watch out for those who appear to be following this framework while actually working around it. I call these toxic behaviours Negotiated and Deflected, and conveniently these extend the acronym to spell RANCID.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placholder162.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `**Negotiated**\nTheir role changes on a seemingly arbitrary basis. Sometimes they take full responsibility, and other times they say “it is not my problem”. Their claim is usually that there is a lack of clarity in the distribution of roles, but it is more likely an exercise in looking for gaps and technicalities in how roles are split rather than trying to help achieve the overall intent and outcome. A common sign is the person who says: “this situation is different due to” followed by a very specific detail.\n\n**Deflected**\nThey consistently find a way to divert work to other individuals or teams rather than themselves. They often appear to be helpful, but in reality they are shifting the majority of the mental load to others. A typical pattern is someone saying: “you can come back to me when you have a question” rather than taking ownership of the problem itself.\n\nThese behaviours can fly under the radar because they are not overtly confrontational. But if they are not identified and addressed, they can significantly hinder how a team or a collection of teams works towards its goals.`,
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
  title: "Define Accountability",
  description: "Contact us to help implement robust governance models and frameworks that drive clear accountability and efficient delivery.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function RaciPage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}
