import Image from 'next/image';
import Header from '@/app/components/layout/Header';
import Footer from '@/app/components/layout/Footer';
import CTASection from '@/app/components/sections/cta/CTASection';

// Layout for the long-form case studies (Challenge, Engagement, Solution, Benefit, Result),
// following the case study design in Figma ("Software@Scale_Website Refresh").

interface Stat {
  value: string;
  label: string;
}

interface IconItem {
  icon: string; // file in /public/images/icons, drawn in the section's colour
  title: string;
  text: string;
}

interface Photo {
  src: string;
  fit?: 'cover' | 'contain'; // contain keeps product shots whole
  background?: string; // fills the space around a contained shot, matching the image's own background
}

export interface CaseStudyStory {
  hero: {
    imageSrc: string;
    client?: string; // shown after "Case Study" on the branded versions
    title: string;
    description: string;
    stats: Stat[];
  };
  overview: {
    paragraphs: string[];
    glance: { label: string; value: string }[];
  };
  challenge: {
    title: string;
    paragraphs: string[];
    bullets: string[];
    closing?: string;
    photo: Photo;
  };
  engagement: {
    title: string;
    paragraphs: string[];
    steps: { title: string; text: string }[];
    photo: Photo;
  };
  solution: {
    title: string;
    intro: string;
    items: IconItem[];
  };
  benefit: {
    title: string;
    lead: string;
    paragraphs: string[];
  };
  result: {
    title: string;
    items: IconItem[];
    closing: string;
    photo: Photo;
  };
  closing: {
    title: string;
    technologies: string[];
    stats: Stat[];
  };
  cta: {
    title: string;
    description: string;
  };
}

const container = 'max-w-[1280px] mx-auto';
const h2 = 'font-bold text-[32px] md:text-[40px] leading-[1.2] tracking-[-0.32px] md:tracking-[-0.4px]';
const eyebrow = 'font-semibold text-base leading-[1.5]';

function Icon({ name, className }: { name: string; className: string }) {
  const url = `url(/images/icons/${name}.svg)`;
  return (
    <span
      aria-hidden="true"
      className={`block w-10 h-10 bg-current ${className}`}
      style={{ maskImage: url, WebkitMaskImage: url, maskSize: 'contain', WebkitMaskSize: 'contain', maskRepeat: 'no-repeat', WebkitMaskRepeat: 'no-repeat' }}
    />
  );
}

function HalfPhoto({ photo, className = '' }: { photo: Photo; className?: string }) {
  const contain = photo.fit === 'contain';
  return (
    <div className={`relative w-full md:w-1/2 min-h-[300px] md:min-h-0 ${className}`} style={{ backgroundColor: photo.background }}>
      <Image src={photo.src} alt="" fill sizes={contain ? '(min-width: 768px) 50vw, 100vw' : '100vw'} className={contain ? 'object-contain' : 'object-cover'} />
    </div>
  );
}

export default function CaseStudyStoryLayout({ data }: { data: CaseStudyStory }) {
  const { hero, overview, challenge, engagement, solution, benefit, result, closing, cta } = data;

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main id="main-content" tabIndex={-1} className="outline-none">
        {/* Hero */}
        <section className="relative w-full overflow-hidden bg-[#0c2080]">
          <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
            <Image src={hero.imageSrc} alt="" fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-[rgba(12,32,128,0.8)]" />
          </div>
          <div className="relative z-10 px-5 md:px-16 pt-24 pb-16 md:py-28">
            <div className={`${container} flex flex-col gap-12 md:gap-16`}>
              <div className="flex flex-col gap-4 max-w-[900px]">
                <p className={`${eyebrow} text-[#14d3f3]`}>
                  Case Study
                  {hero.client && (
                    <>
                      <span aria-hidden="true" className="mx-2">•</span>
                      <span className="text-white">{hero.client}</span>
                    </>
                  )}
                </p>
                <h1 className="font-extrabold text-white text-[36px] md:text-[56px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.56px]">
                  {hero.title}
                </h1>
                <p className="text-white text-base md:text-lg leading-[1.5] max-w-[768px]">{hero.description}</p>
              </div>
              <dl className="grid grid-cols-2 md:grid-cols-4 gap-y-8">
                {hero.stats.map((stat, i) => (
                  <div key={stat.label} className={`flex flex-col-reverse gap-2 pr-4 md:pr-8 ${i % 2 ? 'border-l border-white/40 pl-4 md:pl-8' : ''} ${i > 0 ? 'md:border-l md:border-white/40 md:pl-8' : ''}`}>
                    <dt className="text-white text-sm leading-[1.5]">{stat.label}</dt>
                    <dd className="font-bold text-[#14d3f3] text-[32px] md:text-[44px] leading-[1.1]">{stat.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>

        {/* Overview and At a glance */}
        <section className="bg-[#cce1f4] px-5 md:px-16 py-16 md:py-28">
          <div className={`${container} flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-20`}>
            <h2 className={`${h2} text-[#0c2080] md:w-1/4 shrink-0`}>Overview</h2>
            <div className="flex flex-col gap-12 min-w-0 md:w-3/4">
              <div className="flex flex-col gap-4 text-[#00050a] text-base leading-[1.5]">
                {overview.paragraphs.map(p => <p key={p}>{p}</p>)}
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[#0c2080] text-[24px] leading-[1.3]">At a glance</h3>
                <dl className="border-t border-[#0c2080]/20">
                  {overview.glance.map(row => (
                    <div key={row.label} className="flex flex-col sm:flex-row gap-1 sm:gap-6 py-4 border-b border-[#0c2080]/20">
                      <dt className="font-bold text-[#0c2080] text-base md:text-lg leading-[1.5] sm:w-[160px] shrink-0">{row.label}</dt>
                      <dd className="text-[#00050a] text-base leading-[1.5]">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </section>

        {/* The Challenge: photo left */}
        <section className="bg-[#cce1f4] flex flex-col md:flex-row">
          <HalfPhoto photo={challenge.photo} />
          <div className="w-full md:w-1/2 px-5 md:px-16 py-16 md:py-28">
            <div className="flex flex-col gap-6 max-w-[580px]">
              <div className="flex flex-col gap-4">
                <p className={`${eyebrow} text-[#004f99]`}>The Challenge</p>
                <h2 className={`${h2} text-[#0c2080]`}>{challenge.title}</h2>
              </div>
              <div className="flex flex-col gap-4 text-[#00050a] text-base leading-[1.5]">
                {challenge.paragraphs.map(p => <p key={p}>{p}</p>)}
              </div>
              <ul className="flex flex-col gap-4 text-[#00050a] text-base leading-[1.5]">
                {challenge.bullets.map(b => (
                  <li key={b} className="relative pl-6 before:absolute before:left-0 before:top-[0.55em] before:w-2 before:h-2 before:rounded-full before:bg-[#004f99]">{b}</li>
                ))}
              </ul>
              {challenge.closing && <p className="font-bold text-[#0c2080] text-base leading-[1.5]">{challenge.closing}</p>}
            </div>
          </div>
        </section>

        {/* The Engagement: photo right */}
        <section className="bg-[#cce1f4] flex flex-col-reverse md:flex-row">
          <div className="w-full md:w-1/2 px-5 md:px-16 py-16 md:py-28 flex md:justify-end">
            <div className="flex flex-col gap-6 max-w-[580px] w-full">
              <div className="flex flex-col gap-4">
                <p className={`${eyebrow} text-[#004f99]`}>The Engagement</p>
                <h2 className={`${h2} text-[#0c2080]`}>{engagement.title}</h2>
              </div>
              <div className="flex flex-col gap-4 text-[#00050a] text-base leading-[1.5]">
                {engagement.paragraphs.map(p => <p key={p}>{p}</p>)}
              </div>
              <ol className="flex flex-col gap-6">
                {engagement.steps.map((step, i) => (
                  <li key={step.title} className="flex gap-4">
                    <span aria-hidden="true" className="font-bold text-[#004f99] text-[28px] md:text-[32px] leading-none w-12 shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-bold text-[#0c2080] text-lg leading-[1.4]">{step.title}</h3>
                      <p className="text-[#00050a] text-base leading-[1.5]">{step.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
          <HalfPhoto photo={engagement.photo} />
        </section>

        {/* The Solution */}
        <section className="bg-[#004f99] px-5 md:px-16 py-16 md:py-28">
          <div className={`${container} flex flex-col gap-12 md:gap-16`}>
            <div className="flex flex-col gap-4 max-w-[768px]">
              <p className={`${eyebrow} text-[#5ae0f6]`}>The Solution</p>
              <h2 className="font-bold text-white text-[36px] md:text-[48px] leading-[1.2] tracking-[-0.36px] md:tracking-[-0.48px]">{solution.title}</h2>
              <p className="text-white text-base md:text-lg leading-[1.5]">{solution.intro}</p>
            </div>
            <ul className="grid md:grid-cols-2 gap-x-16 gap-y-12">
              {solution.items.map(item => (
                <li key={item.title} className="flex flex-col gap-4">
                  <Icon name={item.icon} className="text-[#5ae0f6]" />
                  <h3 className="font-bold text-[#5ae0f6] text-[20px] md:text-[24px] leading-[1.3]">{item.title}</h3>
                  <p className="text-white text-base leading-[1.5]">{item.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* The Benefit */}
        <section className="bg-[#0c2080] px-5 md:px-16 py-16 md:py-28">
          <div className={`${container} flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-20`}>
            <div className="flex flex-col gap-4 md:w-1/2">
              <p className={`${eyebrow} text-[#5ae0f6]`}>The Benefit</p>
              <h2 className={`${h2} text-white`}>{benefit.title}</h2>
            </div>
            <div className="flex flex-col gap-6 md:w-1/2 text-white">
              <p className="font-bold text-lg md:text-[20px] leading-[1.5]">{benefit.lead}</p>
              {benefit.paragraphs.map(p => <p key={p} className="text-base leading-[1.6]">{p}</p>)}
            </div>
          </div>
        </section>

        {/* The Result */}
        <section className="bg-[#cce1f4] px-5 md:px-16 py-16 md:py-28">
          <div className={`${container} flex flex-col lg:flex-row gap-12 lg:gap-16`}>
            <div className="flex flex-col gap-10 lg:w-[55%]">
              <div className="flex flex-col gap-4">
                <p className={`${eyebrow} text-[#004f99]`}>The Result</p>
                <h2 className={`${h2} text-[#0c2080]`}>{result.title}</h2>
              </div>
              <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                {result.items.map(item => (
                  <li key={item.title} className="flex flex-col gap-3">
                    <Icon name={item.icon} className="text-[#004f99] !w-8 !h-8" />
                    <h3 className="font-bold text-[#0c2080] text-lg md:text-[20px] leading-[1.3]">{item.title}</h3>
                    <p className="text-[#00050a] text-base leading-[1.5]">{item.text}</p>
                  </li>
                ))}
              </ul>
              <p className="font-bold text-[#0c2080] text-base leading-[1.6]">{result.closing}</p>
            </div>
            {/* A contained photo keeps its own shape (a small source image would blur if stretched to the column's height) */}
            <div
              className={`relative w-full lg:w-[45%] rounded-2xl overflow-hidden ${result.photo.fit === 'contain' ? 'aspect-[16/9] self-center' : 'min-h-[300px]'}`}
              style={{ backgroundColor: result.photo.background }}
            >
              <Image src={result.photo.src} alt="" fill sizes={result.photo.fit === 'contain' ? '(min-width: 1024px) 45vw, 100vw' : '(min-width: 1024px) 90vw, 100vw'} className={result.photo.fit === 'contain' ? 'object-contain' : 'object-cover'} />
            </div>
          </div>
        </section>

        {/* Closing stats and technologies */}
        <section className="bg-[#cce1f4] px-5 md:px-16 pb-16 md:pb-28">
          <div className={`${container} flex flex-col gap-12 md:gap-20`}>
            <div className="flex flex-col md:flex-row gap-8 md:gap-10 lg:gap-20">
              <h2 className={`${h2} text-[#0c2080] md:w-1/2`}>{closing.title}</h2>
              <div className="flex flex-col gap-4 md:w-1/2">
                <h3 className="font-bold text-[#00050a] text-lg md:text-[20px] leading-[1.4]">Key Technologies</h3>
                <ul className="columns-2 gap-x-12 text-[#00050a] text-base md:text-lg leading-[1.6]">
                  {closing.technologies.map(t => <li key={t} className="break-inside-avoid">{t}</li>)}
                </ul>
              </div>
            </div>
            <dl className="grid md:grid-cols-3 gap-10 md:gap-8">
              {closing.stats.map(stat => (
                <div key={stat.label} className="flex flex-col-reverse gap-2 border-l-2 border-[#004f99] pl-6">
                  <dt className="font-bold text-[#0c2080] text-lg md:text-[20px] leading-[1.4]">{stat.label}</dt>
                  <dd className="font-extrabold text-[#004f99] text-[56px] lg:text-[80px] leading-[1.1]">{stat.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <CTASection
          imageSrc="/images/placeholder/placeholder16.jpg"
          title={cta.title}
          description={cta.description}
          primaryButtonText="Contact"
          secondaryButtonText="Learn More"
        />
      </main>

      <Footer />
    </div>
  );
}
