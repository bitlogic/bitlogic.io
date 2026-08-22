import type { Metadata } from "next";
import type { Dictionary } from "@/content";
import { ADDRESS, PARTNERS, SITE, SOCIALS, STATS } from "@/content/site";
import { alternatesFor, href, type Locale, type RouteKey } from "./routes";

/**
 * Metadatos y datos estructurados.
 *
 * Objetivo explícito: que un motor generativo pueda responder "¿qué hace
 * Bitlogic?", "¿con quién trabajó?" y "¿cómo la contacto?" sin adivinar. Para
 * eso hacen falta tres cosas, y las tres están acá:
 *
 *   1. Una entidad `Organization` completa y consistente en todas las páginas
 *      (mismo `@id`, mismo nombre, misma dirección, mismos `sameAs`).
 *   2. Un tipo de schema por página que corresponda a lo que la página es
 *      (Service, CaseStudy, FAQPage, ContactPage…), enlazado a esa entidad.
 *   3. `hreflang` recíproco entre español e inglés, para que no compitan entre
 *      sí ni se dupliquen como dos empresas distintas.
 */

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

export function absolute(path: string): string {
  return new URL(path, SITE.url).toString();
}

/** Imagen social generada on-demand por `app/og/route.tsx`. */
export function ogImageUrl(title: string, eyebrow: string): string {
  const params = new URLSearchParams({ t: title, e: eyebrow });
  return absolute(`/og?${params.toString()}`);
}

export function buildMetadata({
  locale,
  routeKey,
  dict,
}: {
  locale: Locale;
  routeKey: RouteKey;
  dict: Dictionary;
}): Metadata {
  const page = dict.pages[routeKey];
  const alt = alternatesFor(routeKey);
  const canonical = absolute(href(routeKey, locale));

  return {
    metadataBase: new URL(SITE.url),
    title: page.title,
    description: page.description,
    alternates: {
      canonical,
      languages: {
        es: absolute(alt.es),
        en: absolute(alt.en),
        "x-default": absolute(alt["x-default"]),
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE.name,
      locale: locale === "es" ? "es_AR" : "en_US",
      alternateLocale: locale === "es" ? "en_US" : "es_AR",
      url: canonical,
      title: page.title,
      description: page.description,
      images: [{ url: ogImageUrl(page.title, dict.footer.claim), width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
    },
  };
}

/* -------------------------------------------------------------------------- */
/*  JSON-LD                                                                   */
/* -------------------------------------------------------------------------- */

type Json = Record<string, unknown>;

export function organizationLd(locale: Locale, dict: Dictionary): Json {
  return {
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    legalName: SITE.legalName,
    url: SITE.url,
    logo: { "@type": "ImageObject", url: absolute("/icon.svg") },
    description: dict.home.answer.body,
    slogan: dict.footer.claim,
    foundingDate: SITE.founded,
    email: SITE.email,
    telephone: SITE.phone,
    numberOfEmployees: { "@type": "QuantitativeValue", minValue: SITE.headcount },
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: ADDRESS.locality,
      addressRegion: ADDRESS.region,
      postalCode: ADDRESS.postalCode,
      addressCountry: ADDRESS.country,
    },
    geo: { "@type": "GeoCoordinates", latitude: ADDRESS.geo.lat, longitude: ADDRESS.geo.lng },
    sameAs: SOCIALS.map((s) => s.href),
    knowsAbout: [
      "EdTech",
      "Canvas LMS",
      "LTI 1.3",
      "Learning Management Systems",
      "Amazon Web Services",
      "Cloud migration",
      "Generative AI in education",
      "Learning analytics",
      "Staff augmentation",
      "Nearshore software development",
    ],
    hasCredential: PARTNERS.map((p) => ({
      "@type": "EducationalOccupationalCredential",
      name: `${p.name} — ${p.detail}`,
    })),
    areaServed: [
      { "@type": "Place", name: "Latin America" },
      { "@type": "Country", name: "Argentina" },
      { "@type": "Country", name: "United States" },
    ],
    inLanguage: locale,
  };
}

export function websiteLd(locale: Locale): Json {
  return {
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": ORG_ID },
    inLanguage: locale,
  };
}

export function breadcrumbLd(
  trail: { name: string; routeKey: RouteKey }[],
  locale: Locale,
): Json {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((step, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: step.name,
      item: absolute(href(step.routeKey, locale)),
    })),
  };
}

export function serviceLd({
  name,
  description,
  url,
  locale,
}: {
  name: string;
  description: string;
  url: string;
  locale: Locale;
}): Json {
  return {
    "@type": "Service",
    name,
    description,
    url: absolute(url),
    provider: { "@id": ORG_ID },
    serviceType: name,
    areaServed: { "@type": "Place", name: "Latin America" },
    inLanguage: locale,
  };
}

export function faqLd(items: readonly { q: string; a: string }[]): Json {
  return {
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function caseStudyLd({
  title,
  summary,
  client,
  url,
  locale,
  quote,
}: {
  title: string;
  summary: string;
  client: string;
  url: string;
  locale: Locale;
  quote: { text: string; author: string; role: string } | null;
}): Json {
  const ld: Json = {
    "@type": "Article",
    headline: title,
    description: summary,
    url: absolute(url),
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    about: { "@type": "Organization", name: client },
    inLanguage: locale,
  };
  if (quote) {
    ld.citation = {
      "@type": "Quotation",
      text: quote.text,
      spokenByCharacter: { "@type": "Person", name: quote.author, jobTitle: quote.role },
    };
  }
  return ld;
}

export function contactPageLd(locale: Locale): Json {
  return {
    "@type": "ContactPage",
    url: absolute(href("contact", locale)),
    mainEntity: { "@id": ORG_ID },
    inLanguage: locale,
  };
}

/** Envuelve varios nodos en un solo `@graph` — un único <script> por página. */
export function jsonLdGraph(nodes: Json[]): string {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}

/** Datos numéricos citables, expuestos como `Dataset` liviano. */
export function statsLd(dict: Dictionary): Json {
  return {
    "@type": "ItemList",
    name: "Bitlogic en números",
    itemListElement: STATS.map((stat, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: `${stat.value}${stat.suffix} ${dict.home.stats[stat.key]}`,
    })),
  };
}
