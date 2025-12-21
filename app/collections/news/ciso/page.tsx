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
  title: "Software@Scale Sponsors CISO Masterclass with Joe Sullivan",
  description: "Software@Scale sponsored an exclusive one-day cybersecurity masterclass led by Joe Sullivan, former Chief Security Officer at Facebook, Uber and Cloudflare, convening senior CISOs from across Australia.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `The masterclass brought together 20 of Australia’s leading Chief Information Security Officers for a focused, in-depth discussion on navigating complex cybersecurity incidents and strengthening organisational resilience. Designed as an executive forum, the session emphasised practical decision-making under pressure and the realities of leading through large-scale security events.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/articles/art1.jpg',
      caption: 'Participants and organisers of the CISO masterclass come together following the event, marking funds raised in support of Ukraine Friends.',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Joe Sullivan shared insights drawn from his experience managing some of the world’s most high-profile cybersecurity challenges. Topics included incident response readiness, the importance of trusted internal teams, foundational security architecture, and the operational considerations required to support recovery following a major breach. The discussion encouraged open dialogue among participants, grounded in real-world scenarios rather than theory.

The session also supported a broader social cause, raising funds for Ukraine Friends, a charity supported by Joe Sullivan. This element reinforced the event’s focus on leadership responsibility beyond the technical domain, acknowledging the wider impact of global security and humanitarian challenges.`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/articles/art2.jpg',
      caption: 'Patricia Droguett, COO of Software@Scale, addressing attendees during the Strategic Focus Masterclass on leadership, crisis response and organisational resilience.',
    } as ImageBlock,
    {
      type: 'richText',
      content: `Software@Scale supported the masterclass as part of its ongoing engagement with Australia’s security leadership community. By enabling forums that prioritise shared learning and executive-level collaboration, the company continues to contribute to the advancement of cybersecurity capability across sectors.`,
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