import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ServicesIndex, ServiceDetail } from "@/components/pages/services";
import { WorkIndex, CaseDetail } from "@/components/pages/work";
import {
  AboutPage,
  BlogPage,
  ContactPage,
  FaqPage,
  TechnologiesPage,
} from "@/components/pages/company";
import { getDictionary } from "@/content";
import {
  allRoutes,
  caseKeyOf,
  href,
  LOCALES,
  routeKeyFor,
  serviceKeyOf,
  type Locale,
  type RouteKey,
} from "@/lib/routes";
import {
  breadcrumbLd,
  buildMetadata,
  caseStudyLd,
  contactPageLd,
  faqLd,
  jsonLdGraph,
  serviceLd,
} from "@/lib/seo";

export const dynamicParams = false;

type Params = { locale: Locale; slug: string[] };

/**
 * Una sola página resuelve todo el sitio salvo la home.
 *
 * La alternativa —un archivo por ruta— obligaría a duplicar cada página en dos
 * idiomas con slugs distintos y a mantener el sitemap y los hreflang aparte.
 * Acá la tabla de rutas es la única fuente de verdad: si una página existe en
 * la tabla, existe en los dos idiomas, entra al sitemap y tiene sus alternates.
 */
export function generateStaticParams() {
  return LOCALES.flatMap((locale) =>
    allRoutes(locale)
      .filter((route) => route.segments.length > 0) // la home la sirve `page.tsx`
      .map((route) => ({ locale, slug: route.segments })),
  );
}

function resolve(params: Params): RouteKey {
  const key = routeKeyFor(params.locale, params.slug);
  if (!key) notFound();
  return key;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const resolved = await params;
  const routeKey = resolve(resolved);
  return buildMetadata({
    locale: resolved.locale,
    routeKey,
    dict: getDictionary(resolved.locale),
  });
}

export default async function CatchAllPage({ params }: { params: Promise<Params> }) {
  const resolved = await params;
  const { locale } = resolved;
  const routeKey = resolve(resolved);
  const dict = getDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdGraph(pageLd(routeKey, locale, dict)) }}
      />
      {renderPage(routeKey, locale, dict)}
    </>
  );
}

/* -------------------------------------------------------------------------- */

function renderPage(
  routeKey: RouteKey,
  locale: Locale,
  dict: ReturnType<typeof getDictionary>,
) {
  const serviceKey = serviceKeyOf(routeKey);
  if (serviceKey) return <ServiceDetail dict={dict} locale={locale} serviceKey={serviceKey} />;

  const caseKey = caseKeyOf(routeKey);
  if (caseKey) return <CaseDetail dict={dict} locale={locale} caseKey={caseKey} />;

  switch (routeKey) {
    case "services":
      return <ServicesIndex dict={dict} locale={locale} />;
    case "work":
      return <WorkIndex dict={dict} locale={locale} />;
    case "technologies":
      return <TechnologiesPage dict={dict} locale={locale} />;
    case "about":
      return <AboutPage dict={dict} locale={locale} />;
    case "faq":
      return <FaqPage dict={dict} locale={locale} />;
    case "contact":
      return <ContactPage dict={dict} locale={locale} />;
    case "blog":
      return <BlogPage dict={dict} locale={locale} />;
    default:
      notFound();
  }
}

/** Datos estructurados propios de cada tipo de página. */
function pageLd(
  routeKey: RouteKey,
  locale: Locale,
  dict: ReturnType<typeof getDictionary>,
): Record<string, unknown>[] {
  const home = { name: "Bitlogic", routeKey: "home" as RouteKey };
  const nodes: Record<string, unknown>[] = [];

  const serviceKey = serviceKeyOf(routeKey);
  if (serviceKey) {
    nodes.push(
      serviceLd({
        name: dict.service[serviceKey].title,
        description: dict.service[serviceKey].answer.body,
        url: href(routeKey, locale),
        locale,
      }),
      breadcrumbLd(
        [
          home,
          { name: dict.services.hero.eyebrow, routeKey: "services" },
          { name: dict.service[serviceKey].title, routeKey },
        ],
        locale,
      ),
    );
    return nodes;
  }

  const caseKey = caseKeyOf(routeKey);
  if (caseKey) {
    const item = dict.case[caseKey];
    nodes.push(
      caseStudyLd({
        title: item.title,
        summary: item.summary,
        client: item.client,
        url: href(routeKey, locale),
        locale,
        quote: item.quote,
      }),
      breadcrumbLd(
        [home, { name: dict.work.hero.eyebrow, routeKey: "work" }, { name: item.client, routeKey }],
        locale,
      ),
    );
    return nodes;
  }

  if (routeKey === "faq") {
    nodes.push(faqLd(dict.faq.items));
  }
  if (routeKey === "contact") {
    nodes.push(contactPageLd(locale));
  }

  nodes.push(
    breadcrumbLd([home, { name: dict.pages[routeKey].title.split(" | ")[0], routeKey }], locale),
  );
  return nodes;
}
