import {
  Inter,
  JetBrains_Mono,
  Playfair_Display,
  Silkscreen,
} from "next/font/google";
import type { Metadata, Viewport } from "next";
import { ContactFab } from "@/components/layout/ContactFab";
import { HamburgerMenu } from "@/components/layout/HamburgerMenu";
import { NetworkBackground } from "@/components/layout/NetworkBackground";
import { ResumeUiProvider } from "@/components/layout/ResumeUi";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { siteConfig } from "@/content/site-config";
import "./globals.css";

const silkscreen = Silkscreen({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-silkscreen",
  display: "optional",
  preload: true,
  adjustFontFallback: true,
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "optional",
  preload: true,
  adjustFontFallback: true,
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  preload: false,
  adjustFontFallback: true,
});

export const viewport: Viewport = {
  themeColor: "#F7F7F9",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: `${siteConfig.fullName} · ${siteConfig.tagline}`,
    template: `%s · ${siteConfig.fullName}`,
  },
  description: siteConfig.positioning,
  applicationName: siteConfig.fullName,
  authors: [{ name: siteConfig.fullName, url: siteConfig.siteUrl }],
  creator: siteConfig.fullName,
  keywords: [
    "Abhishek Deshpande",
    "software engineer",
    "AI engineering",
    "Dallas",
    "TypeScript",
    "Python",
  ],
  robots: { index: true, follow: true },
  openGraph: {
    title: `${siteConfig.fullName} · ${siteConfig.tagline}`,
    description: siteConfig.positioning,
    url: siteConfig.siteUrl,
    siteName: siteConfig.fullName,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.fullName} · ${siteConfig.tagline}`,
    description: siteConfig.positioning,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${silkscreen.variable} ${playfair.variable} ${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-surface font-sans text-ink">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <NetworkBackground />
        <ResumeUiProvider>
          <HamburgerMenu />
          <ScrollToTop />
          <ContactFab />
          <main id="main">{children}</main>
        </ResumeUiProvider>
      </body>
    </html>
  );
}
