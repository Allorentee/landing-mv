import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/background/background";
import { StructuredData } from "@/components/seo/structured-data";
import { GTMProvider } from "@/stores/GTM-provider";
import { ThemeProvider } from "@/stores/theme-provider";
import { absoluteUrl, siteConfig, siteUrl } from "@/lib/site";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const ogImage = {
  url: absoluteUrl("/preview/poster.png"),
  width: 1200,
  height: 630,
  alt: "Carta digital MenuVision: menú con QR, alérgenos y vídeos de platos",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteConfig.title,
    template: `%s · ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteUrl }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: "software",
  keywords: [
    "carta digital",
    "menú QR",
    "QR restaurante",
    "carta QR",
    "app carta restaurante",
    "alérgenos menú digital",
    "menú sin gluten QR",
    "software hostelería",
    "carta digital España",
    "MenuVision",
  ],
  alternates: {
    canonical: siteUrl,
    languages: {
      "es-ES": siteUrl,
      es: siteUrl,
      "x-default": siteUrl,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: siteUrl,
    siteName: siteConfig.name,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [ogImage.url],
  },
  formatDetection: {
    telephone: true,
    email: true,
  },
  icons: {
    icon: "/logo.svg",
    apple: [{ url: "/logo.svg", type: "image/svg+xml" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    capable: true,
    title: siteConfig.name,
    statusBarStyle: "default",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-dvh mx-auto w-full`}
      >
        <StructuredData />
        <ThemeProvider>
          <GTMProvider>
            <Background />
            <Toaster />
            {children}
          </GTMProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
