import { SITE, SITE_SHARED, SITE_URL } from "@/data/site";
import { localePath, type Locale } from "@/lib/i18n";
import { assetUrl } from "@/lib/utils";

export function StructuredData({ locale }: { locale: Locale }) {
  const site = SITE[locale];
  const url = new URL(assetUrl(localePath(locale)), SITE_URL).toString();

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE_SHARED.legalName,
      description: site.description,
      url,
      telephone: SITE_SHARED.contactPhoneDisplay,
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: site.title,
      url,
      inLanguage: locale,
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "On-mountain advertising sponsorship",
      provider: {
        "@type": "Organization",
        name: SITE_SHARED.legalName,
      },
      areaServed: "North Macedonia",
      description: site.description,
      inLanguage: locale,
    },
  ];

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />;
}
