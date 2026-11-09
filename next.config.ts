import type { NextConfig } from "next";

// Report-only: the browser logs what this would block but blocks nothing. Check Snitcher and GA4 after
// launch, as they only load on production, then rename the header to Content-Security-Policy to enforce it.
const contentSecurityPolicy = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' https://*.snitcher.com https://*.googletagmanager.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https://*.google-analytics.com https://*.googletagmanager.com",
  "font-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self' https://*.snitcher.com https://*.google-analytics.com https://*.analytics.google.com https://*.googletagmanager.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
].join('; ');

const nextConfig: NextConfig = {
  reactCompiler: true,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Content-Security-Policy-Report-Only', value: contentSecurityPolicy },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // The superannuation page was first published under a misspelt URL; keep old links working
      { source: '/industries/supperannuation', destination: '/industries/superannuation', permanent: true },
      // Mine Super became Team Super; the Team Super case study supersedes the old Mine Super one
      { source: '/collections/case-studies/mine-super', destination: '/collections/case-studies/team-super', permanent: true },
    ];
  },
};

export default nextConfig;
