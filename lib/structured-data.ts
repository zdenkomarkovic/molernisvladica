// Centralizovani JSON-LD (schema.org) helperi za ceo sajt.
// Koriste se kroz <JsonLd data={...} /> komponentu.

import {
  AREAS_SERVED,
  CONTACT_EMAIL,
  CONTACT_PHONE_HREF,
  GEO,
  OPENING_HOURS,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  SOCIAL_FACEBOOK,
  SOCIAL_INSTAGRAM,
  SERVICES,
} from "./constants";

/** Stabilan @id za poslovni subjekt – referencira se iz drugih šema. */
export const BUSINESS_ID = `${SITE_URL}/#business`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

/** LocalBusiness (moler / izvođač radova) – ide u root layout. */
export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["HomeAndConstructionBusiness", "HousePainter"],
    "@id": BUSINESS_ID,
    name: SITE_NAME,
    alternateName: "Moler Niš – Colorium",
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.jpg`,
    image: [
      `${SITE_URL}/logo.jpg`,
      `${SITE_URL}/m5.png`,
      `${SITE_URL}/m3.png`,
    ],
    telephone: CONTACT_PHONE_HREF,
    email: CONTACT_EMAIL,
    priceRange: "€€",
    currenciesAccepted: "RSD, EUR",
    paymentAccepted: "Gotovina, Bankovni transfer",
    knowsLanguage: ["sr"],
    slogan: "Moler Niš – moleraj koji se primeti na prvi pogled",
    founder: {
      "@type": "Person",
      name: "Vladica",
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Niš",
      addressRegion: "Nišavski okrug",
      addressCountry: "RS",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: GEO.latitude,
      longitude: GEO.longitude,
    },
    areaServed: AREAS_SERVED.map((name) => ({
      "@type": "City",
      name,
    })),
    hasMap: "https://www.google.com/maps?q=Ni%C5%A1,Srbija",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: OPENING_HOURS.days,
        opens: OPENING_HOURS.opens,
        closes: OPENING_HOURS.closes,
      },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: CONTACT_PHONE_HREF,
      email: CONTACT_EMAIL,
      contactType: "customer service",
      areaServed: "RS",
      availableLanguage: "Serbian",
    },
    sameAs: [SOCIAL_FACEBOOK, SOCIAL_INSTAGRAM],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Molerske usluge",
      itemListElement: SERVICES.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          url: `${SITE_URL}/usluge/${service.slug}`,
        },
      })),
    },
  };
}

/** WebSite šema – ide u root layout. */
export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    url: SITE_URL,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    inLanguage: "sr-RS",
    publisher: { "@id": BUSINESS_ID },
  };
}

/** BreadcrumbList – prosleđuje se lista [{ name, path }]. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

/** Service šema za pojedinačnu uslugu. */
export function serviceSchema(service: {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    serviceType: service.title,
    url: `${SITE_URL}/usluge/${service.slug}`,
    provider: { "@id": BUSINESS_ID },
    areaServed: AREAS_SERVED.map((name) => ({ "@type": "City", name })),
    availableChannel: {
      "@type": "ServiceChannel",
      servicePhone: CONTACT_PHONE_HREF,
      serviceUrl: `${SITE_URL}/kontakt`,
    },
  };
}

/** FAQPage šema – prosleđuje se lista [{ question, answer }]. */
export function faqSchema(items: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
