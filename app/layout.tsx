import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./motion.css";
import MotionProvider from "@/app/components/shared/MotionProvider";
import Analytics from "@/app/components/shared/Analytics";
import { SITE_URL } from "./site-url";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Software@Scale",
    template: "%s | Software@Scale",
  },
  description: "Software@Scale helps enterprise organisations boost engineering performance, unblock complex technology challenges and safeguard critical platforms.",
  openGraph: {
    type: "website",
    siteName: "Software@Scale",
    locale: "en_AU",
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: '/images/logos/S@S_Logo_Mark_RGB.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased font-sans`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-xl focus:bg-[#5ae0f6] focus:px-4 focus:py-2 focus:text-[#0c2080] focus:font-semibold"
        >
          Skip to content
        </a>
        <MotionProvider>{children}</MotionProvider>
        {process.env.VERCEL_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
