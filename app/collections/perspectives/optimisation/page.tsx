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
  title: "The Best Optimisation Is the One You Do Not Write",
  description: "A practical approach to performance engineering where measurement, clarity, and value-driven decisions outperform quick fixes.",
  backgroundColor: "bg-[#cce1f4]",
  titleColor: "text-[#0c2080]",
  textColor: "text-[#00050a]",
};

const ARTICLE_CONTENT_DATA: ArticleContentData = {
  contentBlocks: [
    {
      type: 'richText',
      content: `As engineers, we thrive on solving hard problems, and it is tempting to dive straight into fix mode. Whether it is adding a cache, tweaking a setting, or minifying code, without solid data these fixes are often educated guesses. In performance engineering, the simplest win is often hiding in plain sight, and it is usually the one that delivers the most business value.\n\n**Measure -> Locate -> Ask and Eliminate -> Optimise and Re measure**`,
    } as RichTextBlock,
    {
      type: 'image',
      src: '/images/perspectives/placholder159.jpg',
      caption: '',
    } as ImageBlock,
    {
      type: 'richText',
      content: `**Measure Every Layer**\nBrowser: Chrome DevTools, Lighthouse, WebPageTest\nNetwork: DevTools Network panel, Charles Proxy, p99 latencies (HTTP Archive)\nAPI: APM traces such as New Relic, Datadog, AppDynamics\nStorage: Slow query logs, EXPLAIN ANALYSE (Postgres) or EXPLAIN (MySQL), PgHero, Percona\n\n**Monitoring: Locate the Hotspot**\nIs your multipurpose API computing extra real time fields on every request, slowing all flows?\nIs the UI re rendering too often because it expects a full payload?\n\n**Ask and Eliminate**\nBefore diving into complex fixes, look for small, high value wins:\nWas this work added for a rare edge case?\nWhich user journeys truly need that JOIN or real time field?\nCould precomputed data serve most users?\nPause to challenge assumptions. Do not remove everything every time, but seize opportunities to strip out low impact logic before tackling bigger problems.\n\n**Optimise and Re measure**\nWith the dead weight gone:\n- Refine queries and algorithms\n- Tackle UX rendering or transformation hotspots\n- Batch calls and memoise heavy computations\n- Apply caching last, with a clear invalidation strategy\n\nThen always measure again to validate improvements, uncover the next hotspot, and repeat.\n\n**Real world win**\nBy questioning two computed fields that were unused for over a year, we removed them and achieved a tenfold speed up for everyday workflows. This impacted only a rare edge case and paved the way for cleaner future releases.\n\n**Try this today**\nPick a sluggish endpoint.\nMeasure across browser, network, API, and storage.\nAsk “Do we really need this?” and “What business value does it deliver?”\nOptimise, re measure, and repeat. Watch performance improve.`,
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
  title: "Optimise for Value",
  description: "Contact us to implement performance practices that cut complexity and deliver measurable business speed improvements.",
  primaryButtonText: "Contact",
  secondaryButtonText: "Learn More",
};

const ARTICLE_PAGE_DATA: ArticlePageData = {
  header: ARTICLE_HEADER_DATA,
  content: ARTICLE_CONTENT_DATA,
  cta: ARTICLE_CTA_DATA,
};

export default function OptimisationPage() {
  return (
    <ArticlePageLayout data={ARTICLE_PAGE_DATA} />
  );
}