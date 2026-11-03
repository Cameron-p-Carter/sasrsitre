declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Sends a GA4 event; does nothing where GA4 isn't loaded (staging, previews, local).
// Never pass form values, names or email addresses here.
export function trackEvent(name: string, params?: Record<string, string | number>) {
  window.gtag?.('event', name, params);
}
