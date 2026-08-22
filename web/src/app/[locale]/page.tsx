import type { Metadata } from "next";
import Hero from "@/components/hero/Hero";
import {
  AnswerAndStats,
  BithouseSection,
  CtaBand,
  ManifestoSection,
  PartnersSection,
  ServicesTeaser,
  ValuesSection,
  WorkTeaser,
} from "@/components/sections/home-sections";
import { getDictionary } from "@/content";
import type { Locale } from "@/lib/routes";
import { buildMetadata, jsonLdGraph, statsLd } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return buildMetadata({ locale, routeKey: "home", dict: getDictionary(locale) });
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const dict = getDictionary(locale);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdGraph([statsLd(dict)]) }}
      />
      <Hero dict={dict} locale={locale} />
      <AnswerAndStats dict={dict} />
      <ServicesTeaser dict={dict} locale={locale} />
      <WorkTeaser dict={dict} locale={locale} />
      <ManifestoSection dict={dict} locale={locale} />
      <ValuesSection dict={dict} />
      <PartnersSection dict={dict} />
      <BithouseSection dict={dict} locale={locale} />
      <CtaBand dict={dict} locale={locale} />
    </>
  );
}
