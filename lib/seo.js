import { getDictionary, getLocalizedPath, normalizeLocale } from "@/lib/i18n";

export const SITE_URL = "https://alperbayram.com";
const DEFAULT_OG_IMAGE = "/og-cover.jpg";

export const SERVICE_SLUGS = [
  "web-development",
  "ecommerce-development",
  "mobile-app-development",
];

export function absoluteUrl(path = "/") {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${SITE_URL}${normalizedPath}`;
}

function alternateLanguages(path) {
  return {
    en: absoluteUrl(getLocalizedPath("en", path)),
    tr: absoluteUrl(getLocalizedPath("tr", path)),
  };
}

export function buildPageMetadata({ locale = "en", path = "/", meta }) {
  const safeLocale = normalizeLocale(locale);
  const localizedPath = getLocalizedPath(safeLocale, path);

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    alternates: {
      canonical: absoluteUrl(localizedPath),
      languages: alternateLanguages(path),
    },
    openGraph: {
      type: "website",
      locale: safeLocale === "tr" ? "tr_TR" : "en_US",
      url: absoluteUrl(localizedPath),
      title: meta.title,
      description: meta.description,
      siteName: "Alper Bayram",
      images: [
        {
          url: absoluteUrl(DEFAULT_OG_IMAGE),
          width: 1200,
          height: 630,
          alt: "Alper Bayram software services",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.description,
      images: [absoluteUrl(DEFAULT_OG_IMAGE)],
    },
  };
}

export function buildHomeJsonLd(locale = "en") {
  const dict = getDictionary(locale);
  const localizedHomeUrl = absoluteUrl(getLocalizedPath(locale, "/"));

  return {
    person: {
      "@context": "https://schema.org",
      "@type": "Person",
      name: dict.common.name,
      jobTitle: dict.common.title,
      email: dict.common.email,
      url: SITE_URL,
      sameAs: [
        "https://www.linkedin.com/in/alper-bayram/",
        "https://github.com/alperbayram",
        "https://alper-bayram.medium.com/",
      ],
    },
    website: {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Alper Bayram",
      url: SITE_URL,
      inLanguage: locale === "tr" ? "tr-TR" : "en-US",
    },
    service: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: locale === "tr" ? "Yazilim Gelistirme Hizmetleri" : "Software Development Services",
      provider: {
        "@type": "Person",
        name: dict.common.name,
      },
      areaServed: "Turkey",
      url: localizedHomeUrl,
      description: dict.home.hero.description,
      email: dict.common.email,
    },
    faq: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: dict.home.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    },
  };
}

export function buildServiceJsonLd({ locale = "en", slug, path }) {
  const dict = getDictionary(locale);
  const item = dict.servicePages.items[slug];

  return {
    service: {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: item.name,
      provider: {
        "@type": "Person",
        name: dict.common.name,
      },
      areaServed: "Turkey",
      description: item.summary,
      url: absoluteUrl(getLocalizedPath(locale, path)),
      email: dict.common.email,
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: dict.servicePages.breadcrumbs.home,
          item: absoluteUrl(getLocalizedPath(locale, "/")),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: dict.servicePages.breadcrumbs.services,
          item: absoluteUrl(getLocalizedPath(locale, "/")) + "#services",
        },
        {
          "@type": "ListItem",
          position: 3,
          name: item.name,
          item: absoluteUrl(getLocalizedPath(locale, path)),
        },
      ],
    },
  };
}
