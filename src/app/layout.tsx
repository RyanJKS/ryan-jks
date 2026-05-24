import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { ThemeProvider } from "@/components/theme/theme-provider";
import { portfolio } from "@/data/portfolio";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? portfolio.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: portfolio.seo.title,
    template: `%s | ${portfolio.name}`,
  },
  description: portfolio.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    url: siteUrl,
    siteName: portfolio.name,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: `${portfolio.name} — Data Platform Engineer portfolio`,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: portfolio.seo.title,
    description: portfolio.seo.description,
    images: ["/opengraph-image"],
  },
  keywords: [
    portfolio.name,
    "Data Platform Engineer",
    "Platform Engineering",
    "AI Enablement",
    "Cloud Systems",
    "Azure",
    "FastAPI",
    "Next.js",
    "Clean Architecture",
  ],
  authors: [{ name: portfolio.fullName }],
  creator: portfolio.fullName,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f7" },
    { media: "(prefers-color-scheme: dark)", color: "#050507" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: portfolio.fullName,
    jobTitle: portfolio.role,
    url: siteUrl,
    sameAs: [portfolio.links.linkedin, portfolio.links.github],
    knowsAbout: [
      "Data platforms",
      "AI enablement",
      "Cloud architecture",
      "Platform engineering",
      "Clean architecture",
      "Developer experience",
    ],
  };

  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{var t=localStorage.getItem("theme");var theme=t==="light"||t==="dark"?t:"light";document.documentElement.classList.toggle("dark",theme==="dark");document.documentElement.style.colorScheme=theme;}catch(e){}`}
        </Script>
        <Script
          id="person-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
