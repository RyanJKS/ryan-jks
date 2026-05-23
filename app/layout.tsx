import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { profile } from "@/content/profile";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? profile.siteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Jhelan Suggun | Data Platform Engineer",
    template: "%s | Jhelan Suggun",
  },
  description: profile.seo.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Jhelan Suggun | Data Platform Engineer",
    description: profile.seo.description,
    url: siteUrl,
    siteName: "Jhelan Suggun",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Jhelan Suggun portfolio preview",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jhelan Suggun | Data Platform Engineer",
    description: profile.seo.description,
    images: ["/opengraph-image"],
  },
  keywords: [
    "Jhelan Suggun",
    "Data Platform Engineer",
    "AI Platform Engineer",
    "Enterprise Architecture",
    "Data Platforms",
    "Azure",
    "FastAPI",
    "Next.js",
    "Clean Architecture",
    "Platform Engineering",
  ],
  authors: [{ name: profile.name }],
  creator: profile.name,
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  colorScheme: "dark light",
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
    name: profile.name,
    jobTitle: "Data Platform Engineer",
    email: profile.email,
    url: siteUrl,
    sameAs: [profile.links.linkedin, profile.links.github],
    knowsAbout: [
      "Data platforms",
      "AI platforms",
      "Cloud architecture",
      "Platform engineering",
      "Clean architecture",
      "Identity and governance",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try{const stored=localStorage.getItem("theme");const system=window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.classList.toggle("dark",(stored||system)==="dark");}catch(e){}`}
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
