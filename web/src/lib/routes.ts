/**
 * Tabla de rutas bilingüe.
 *
 * El español vive en la raíz (`/servicios`) y el inglés bajo `/en`
 * (`/en/services`). Una sola tabla es la fuente de verdad para el ruteo, el
 * sitemap, los `hreflang` y el selector de idioma — así es imposible que una
 * página exista en un idioma y quede huérfana en el otro.
 */

export const LOCALES = ["es", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "es";

export const SERVICE_KEYS = ["product-development", "staff-augmentation", "ai-data"] as const;
export type ServiceKey = (typeof SERVICE_KEYS)[number];

export const CASE_KEYS = ["universidad-siglo-21", "teclab", "capabilia"] as const;
export type CaseKey = (typeof CASE_KEYS)[number];

export type RouteKey =
  | "home"
  | "services"
  | "work"
  | "technologies"
  | "about"
  | "faq"
  | "contact"
  | "blog"
  | `service:${ServiceKey}`
  | `case:${CaseKey}`;

type Segments = Record<Locale, string[]>;

export const ROUTES: Record<RouteKey, Segments> = {
  home: { es: [], en: [] },
  services: { es: ["servicios"], en: ["services"] },
  "service:product-development": {
    es: ["servicios", "product-development"],
    en: ["services", "product-development"],
  },
  "service:staff-augmentation": {
    es: ["servicios", "staff-augmentation"],
    en: ["services", "staff-augmentation"],
  },
  "service:ai-data": {
    es: ["servicios", "ia-y-datos"],
    en: ["services", "ai-and-data"],
  },
  work: { es: ["experiencias"], en: ["work"] },
  "case:universidad-siglo-21": {
    es: ["experiencias", "universidad-siglo-21"],
    en: ["work", "universidad-siglo-21"],
  },
  "case:teclab": { es: ["experiencias", "teclab"], en: ["work", "teclab"] },
  "case:capabilia": { es: ["experiencias", "capabilia"], en: ["work", "capabilia"] },
  technologies: { es: ["tecnologias"], en: ["technologies"] },
  about: { es: ["nosotros"], en: ["about"] },
  faq: { es: ["faq"], en: ["faq"] },
  contact: { es: ["contacto"], en: ["contact"] },
  blog: { es: ["blog"], en: ["blog"] },
};

export const ROUTE_KEYS = Object.keys(ROUTES) as RouteKey[];

/** Ruta absoluta dentro del sitio: `/`, `/servicios`, `/en`, `/en/services`. */
export function href(key: RouteKey, locale: Locale): string {
  const segments = ROUTES[key][locale];
  const prefix = locale === DEFAULT_LOCALE ? [] : [locale];
  const path = [...prefix, ...segments].join("/");
  return path ? `/${path}` : "/";
}

/** Los segmentos que consume el catch-all, sin barra inicial. */
export function slugFor(key: RouteKey, locale: Locale): string[] {
  const prefix = locale === DEFAULT_LOCALE ? [] : [locale];
  return [...prefix, ...ROUTES[key][locale]];
}

/**
 * Camino inverso: de los segmentos de la URL al par (locale, routeKey).
 * Devuelve `null` para cualquier cosa que no esté en la tabla — eso es un 404.
 */
export function resolveRoute(slug: string[] | undefined): { locale: Locale; key: RouteKey } | null {
  const parts = (slug ?? []).filter(Boolean);
  const maybeLocale = parts[0] as Locale | undefined;
  const isPrefixed = maybeLocale !== undefined && maybeLocale !== DEFAULT_LOCALE && LOCALES.includes(maybeLocale);
  const locale: Locale = isPrefixed ? maybeLocale : DEFAULT_LOCALE;
  const rest = isPrefixed ? parts.slice(1) : parts;

  for (const key of ROUTE_KEYS) {
    const segments = ROUTES[key][locale];
    if (segments.length === rest.length && segments.every((s, i) => s === rest[i])) {
      return { locale, key };
    }
  }
  return null;
}

/** Mapa de alternativas para `<link rel="alternate" hreflang>`. */
export function alternatesFor(key: RouteKey): Record<Locale | "x-default", string> {
  return {
    es: href(key, "es"),
    en: href(key, "en"),
    "x-default": href(key, DEFAULT_LOCALE),
  };
}

/** Misma página, otro idioma — para el switch del header. */
export function otherLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}

export function serviceKeyOf(key: RouteKey): ServiceKey | null {
  return key.startsWith("service:") ? (key.slice("service:".length) as ServiceKey) : null;
}

export function caseKeyOf(key: RouteKey): CaseKey | null {
  return key.startsWith("case:") ? (key.slice("case:".length) as CaseKey) : null;
}

/**
 * Resuelve la clave de ruta a partir del par (locale, segmentos internos).
 * "Internos" = sin el prefijo de idioma, que es lo que entrega el segmento
 * `[...slug]` una vez que el middleware reescribió la URL pública.
 */
export function routeKeyFor(locale: Locale, segments: string[]): RouteKey | null {
  for (const key of ROUTE_KEYS) {
    const expected = ROUTES[key][locale];
    if (expected.length === segments.length && expected.every((s, i) => s === segments[i])) {
      return key;
    }
  }
  return null;
}

/** Todas las páginas de un idioma, para el sitemap y `generateStaticParams`. */
export function allRoutes(locale: Locale): { key: RouteKey; segments: string[] }[] {
  return ROUTE_KEYS.map((key) => ({ key, segments: ROUTES[key][locale] }));
}
