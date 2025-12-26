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
  title: "Great Delivery Starts With Strong Partnerships",
  description: "The strongest delivery outcomes come from true partnerships between Engineering Leads and Delivery or Program Managers working as one.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
  date: "Sept 2025",
  readTime: "3 min read"
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `**Great delivery is not just about meeting deadlines. It is about empowering teams to succeed.**\n\nFrom experience, the strongest teams share one essential dynamic: a true partnership between the Engineering Lead and the Delivery or Program Manager.\n\nHere is why this relationship makes all the difference:`,
    } as RichTextBlock,
    {
      type: 'richText',
      content: `**A strong Delivery or Program Manager keeps low level deadlines on track.**\nThey go deeply under the reasons behind delays or obstacles, ask the hard questions, communicate transparently, manage challenging discussions proactively, and shield the team so they can focus on quality.\n\n**A strong Engineering Lead brings clarity, actionable insights, and solutions, not just problems.**\nThey arm the Delivery Manager with clear risks and reasoning to confidently set expectations with customers and stakeholders. They help everyone understand technical risks and trade offs, enabling the team to navigate complexities effectively.`,
    } as RichTextBlock,
    {
      type: 'richText',
      content: `**When this partnership clicks:**\n* Deadlines become realistic and meaningful\n* Risks are identified early and addressed\n* Trust and confidence grow across the whole team\n\n**When this partnership is not there:**\n* Teams face unnecessary pressure to meet unrealistic client expectations\n* Shortcuts become tempting\n* Quality drops and hidden risks increase`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placholder155.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Over the years, I have had the privilege of working with some of the highly respected Heads of Delivery and Program Managers, including Alexey Greyze, Garry Labana, Christian Colmenar, Wendy Khoo, Zina, Darren Vorster, Karen Anderson, Bao Pham, Arun Korri, Timothy Nelson, Hasan Husain, Patricia Droguett. Several of them are now executive leaders and founders, yet they continue to embody this partnership every single day.\n\nThis concept echoes my recent post on the power of “going deeper” in every role by asking better questions and seeking the truth to drive results.\n\nGreat delivery is not driven by pressure. It is fuelled by strong relationships, trust, and genuine curiosity.`,
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
  title: "Strengthen Your Delivery Partnerships",
  description: "Contact us to explore how we can help you align your engineering and delivery functions for superior results.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function PartnershipsPage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}
