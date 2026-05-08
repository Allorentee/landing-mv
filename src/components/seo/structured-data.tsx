import { faqs } from "@/data/faqs";
import { absoluteUrl, siteConfig, siteUrl } from "@/lib/site";

const organizationId = `${siteUrl}#organization`;
const websiteId = `${siteUrl}#website`;

export function StructuredData() {
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
    url: siteUrl,
    name: siteConfig.name,
    description: siteConfig.description,
    inLanguage: "es-ES",
    publisher: { "@id": organizationId },
    about: {
      "@type": "Thing",
      name: "Software de carta digital y menú QR para restaurantes",
    },
  };

  const homePage = {
    "@type": ["WebPage", "FAQPage"],
    "@id": `${siteUrl}/#webpage`,
    url: siteUrl,
    name: siteConfig.title,
    description: siteConfig.description,
    isPartOf: { "@id": websiteId },
    about: { "@id": organizationId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: absoluteUrl("/preview/poster.png"),
    },
    inLanguage: "es-ES",
    mainEntity: faqs.map((faq) => ({
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
      price: "19.99",
      description:
        "Plan Básico mensual tras periodo promocional; incluye meses gratis de prueba según condiciones vigentes.",
      url: `${siteUrl}/#pricing`,
    },
    description: siteConfig.description,
    screenshot: absoluteUrl("/preview/poster.png"),
    url: siteUrl,
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
