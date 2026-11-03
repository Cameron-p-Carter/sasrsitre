'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { trackEvent } from '@/app/analytics';

const SNITCHER_ID = '8430940';
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Loaded by the root layout on production only, so staging, previews and local work are never counted
export default function Analytics() {
  // Count every click through to a job on Employment Hero, kept separate from sales enquiries
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const link = (e.target as Element).closest?.<HTMLAnchorElement>('a[href*="employmenthero.com"]');
      if (link) trackEvent('job_application_click', { link_url: link.href });
    };
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);

  return (
    <>
      <Script id="snitcher" strategy="afterInteractive">
        {`!function(s,n,i,t,c,h){s.SnitchObject=i;s[i]||(s[i]=function(){
(s[i].q=s[i].q||[]).push(arguments)});s[i].l=+new Date;c=n.createElement(t);
h=n.getElementsByTagName(t)[0];c.src='https://snid.snitcher.com/${SNITCHER_ID}.js';
h.parentNode.insertBefore(c,h)}(window,document,'snid','script');
snid('verify', '${SNITCHER_ID}');`}
      </Script>

      {GA_MEASUREMENT_ID && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];
window.gtag=function(){dataLayer.push(arguments);};
gtag('js',new Date());
gtag('config',${JSON.stringify(GA_MEASUREMENT_ID)},{allow_google_signals:false,allow_ad_personalization_signals:false});`}
          </Script>
        </>
      )}
    </>
  );
}
