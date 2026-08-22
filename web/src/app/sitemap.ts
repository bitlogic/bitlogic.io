import type { MetadataRoute } from "next";
import { alternatesFor, href, LOCALES, ROUTE_KEYS, type RouteKey } from "@/lib/routes";
import { absolute } from "@/lib/seo";

/**
 * Sitemap con alternates recíprocos.
 *
 * Cada URL declara sus dos idiomas y el `x-default`. Sin esto, español e
 * inglés compiten entre sí como contenido duplicado en lugar de reforzarse.
 */

const PRIORITY: Partial<Record<RouteKey, number>> = {
  home: 1,
  services: 0.9,
  work: 0.9,
  contact: 0.8,
  technologies: 0.8,
  about: 0.8,
  faq: 0.7,
  blog: 0.5,
};

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return LOCALES.flatMap((locale) =>
    ROUTE_KEYS.map((key) => {
      const alt = alternatesFor(key);
      return {
        url: absolute(href(key, locale)),
        lastModified,
        changeFrequency: key === "blog" ? ("weekly" as const) : ("monthly" as const),
        priority: PRIORITY[key] ?? 0.6,
        alternates: {
          languages: {
            es: absolute(alt.es),
            en: absolute(alt.en),
            "x-default": absolute(alt["x-default"]),
          },
        },
      };
    }),
  );
}
