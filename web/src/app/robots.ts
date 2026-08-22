import type { MetadataRoute } from "next";
import { SITE } from "@/content/site";

/**
 * robots.txt
 *
 * Decisión explícita: los crawlers de motores generativos entran. Bloquearlos
 * "por las dudas" es la forma más rápida de desaparecer de las respuestas de
 * ChatGPT, Claude, Perplexity y Gemini — que es exactamente lo contrario de lo
 * que este sitio busca. Se listan uno por uno, en vez de un `*` genérico, para
 * que la decisión quede escrita y sea fácil de revisar.
 *
 * `Google-Extended` y `Applebot-Extended` no afectan el ranking de búsqueda:
 * sólo controlan si el contenido alimenta sus modelos y sus respuestas
 * generativas. Los permitimos por el mismo motivo.
 */

const AI_CRAWLERS = [
  "GPTBot", // OpenAI — entrenamiento
  "OAI-SearchBot", // OpenAI — búsqueda en ChatGPT
  "ChatGPT-User", // OpenAI — navegación a pedido del usuario
  "ClaudeBot", // Anthropic
  "Claude-User",
  "Claude-SearchBot",
  "anthropic-ai",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended", // Gemini / AI Overviews
  "Applebot-Extended",
  "meta-externalagent",
  "Amazonbot",
  "Bytespider",
  "CCBot", // Common Crawl: alimenta a casi todos los demás
  "cohere-ai",
  "DuckAssistBot",
  "MistralAI-User",
  "YouBot",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow: ["/api/"] },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/", disallow: ["/api/"] })),
    ],
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
