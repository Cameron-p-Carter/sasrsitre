// Public base URL of the site, used for absolute links in the sitemap and robots.txt.
// Vercel sets VERCEL_PROJECT_PRODUCTION_URL to the production domain (sasrsitre.vercel.app today,
// softwareatscale.com.au once that domain is added to the project). NEXT_PUBLIC_SITE_URL overrides it.
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : 'https://sasrsitre.vercel.app')
).replace(/\/$/, '');
