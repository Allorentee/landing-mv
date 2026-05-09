import { getLocale, getMessages, getTranslations } from "next-intl/server";
import { absoluteUrl, siteConfig, siteUrl } from "@/lib/site";

type FAQItem = { question: string; answer: string };

export async function StructuredData() {
  const locale = await getLocale();
  const messages = await getMessages();
  const tSd = await getTranslations("StructuredData");
  const tMeta = await getTranslations("Meta");

  const faqItems =
    (messages.Faqs as { items?: FAQItem[] }).items ?? ([] as FAQItem[]);

  const langTag = locale === "en" ? "en-US" : "es-ES";

  const organizationId = `${siteUrl}#organization`;
  const websiteId = `${siteUrl}#website`;

  const canonical = locale === "en" ? `${siteUrl}/en` : siteUrl;

  const organization = {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteUrl,
    email: "info.menuvision@gmail.com",
    telephone: "+34-628-530-092",
    logo: absoluteUrl("/logo.svg"),
    sameAs: ["https://www.instagram.com/menuvisionqr"],
  };

  const website = {
    "@type": "WebSite",
    "@id": websiteId,
    url: canonical,
    name: siteConfig.name,
    description: tMeta("description"),
    inLanguage: langTag,
    publisher: { "@id": organizationId },
    about: {
      "@type": "Thing",
      name: tSd("websiteAbout"),
    },
  };

  const homePage = {
    "@type": ["WebPage", "FAQPage"],
    "@id": `${canonical}#webpage`,
    url: canonical,
    name: tMeta("title"),
    description: tMeta("description"),
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl("/preview/poster.png"),
    },
    inLanguage: langTag,
    mainEntity: faqItems.map((faq: FAQItem) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const software = {
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: tSd("priceNote"),
      description: tSd("softwareOfferDesc"),
      url: `${canonical}/#pricing`,
    },
    description: tMeta("description"),
    screenshot: absoluteUrl("/preview/poster.png"),
    url: canonical,
    provider: { "@id": organizationId },
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [organization, website, homePage, software],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
