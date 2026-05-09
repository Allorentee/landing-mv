import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { DocumentLangEffect } from "@/components/document-lang/document-lang-effect";
import { StructuredData } from "@/components/seo/structured-data";
import { WhatsAppFloat } from "@/components/whatsapp-float/whatsapp-float";
import { routing } from "@/i18n/routing";
import { absoluteUrl, siteConfig, siteUrl } from "@/lib/site";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Meta" });
  const keywords = t.raw("keywords") as string[];

  const canonical =
    locale === routing.defaultLocale ? siteUrl : `${siteUrl}/${locale}`;

  const ogLocale = locale === "en" ? "en_US" : "es_ES";

  const ogImage = {
    url: absoluteUrl("/preview/poster.png"),
    width: 1200,
    height: 630,
    alt: t("ogImageAlt"),
  };

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: t("title"),
      template: `%s · ${siteConfig.name}`,
    },
    description: t("description"),
    applicationName: siteConfig.name,
    authors: [{ name: siteConfig.name, url: siteUrl }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    category: "software",
    keywords,
    alternates: {
      canonical,
      languages: {
        "es-ES": siteUrl,
        es: siteUrl,
        en: `${siteUrl}/en`,
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
      locale: ogLocale,
      url: canonical,
      siteName: siteConfig.name,
      title: t("title"),
      description: t("description"),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: t("title"),
      description: t("description"),
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
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <DocumentLangEffect />
      <StructuredData />
      {children}
      <WhatsAppFloat />
    </NextIntlClientProvider>
  );
}
