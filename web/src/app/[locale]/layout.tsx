import type { Metadata, Viewport } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/chrome/Header";
import Footer from "@/components/chrome/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import { getDictionary } from "@/content";
import { BRAND, SITE } from "@/content/site";
import { fontClassNames } from "@/lib/fonts";
import { LOCALES, type Locale } from "@/lib/routes";
import { jsonLdGraph, organizationLd, websiteLd } from "@/lib/seo";
import "../globals.css";

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: BRAND.cream },
    { media: "(prefers-color-scheme: dark)", color: BRAND.ink },
  ],
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  applicationName: SITE.name,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.legalName,
  formatDetection: { telephone: false },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml", media: "(prefers-color-scheme: light)" },
      { url: "/icon-dark.svg", type: "image/svg+xml", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/icon.svg" }],
  },
};

/**
 * Granulado de papel. Va como data URI para que no cueste un request y para
 * que no dependa de un asset que alguien pueda borrar sin darse cuenta.
 */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.28'/%3E%3C/svg%3E\")";

/**
 * Arma el estado de animación ANTES del primer paint, para que no se vea el
 * contenido saltar. El timeout es la red de seguridad: si el motor no arrancó
 * en 4 segundos (JS bloqueado, chunk que no llegó, error), destapa todo.
 */
const ARM_ANIMATIONS = `
try{
  var r=document.documentElement;
  if(!matchMedia('(prefers-reduced-motion: reduce)').matches){
    r.setAttribute('data-animate-ready','true');
    setTimeout(function(){ if(!r.hasAttribute('data-animate-running')) r.removeAttribute('data-animate-ready'); },4000);
  }
}catch(e){}
`;

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: raw } = await params;
  if (!LOCALES.includes(raw as Locale)) notFound();
  const locale = raw as Locale;
  const dict = getDictionary(locale);

  return (
    <html lang={dict.htmlLang} className={fontClassNames} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: ARM_ANIMATIONS }} />
        <script
          type="application/ld+json"
          // La entidad Organization y el WebSite van en todas las páginas con el
          // mismo @id: así los motores consolidan una sola entidad y no varias.
          dangerouslySetInnerHTML={{
            __html: jsonLdGraph([organizationLd(locale, dict), websiteLd(locale)]),
          }}
        />
      </head>
      <body style={{ ["--grain-src" as string]: GRAIN }}>
        <Header dict={dict} locale={locale} />
        <main id="main">{children}</main>
        <Footer dict={dict} locale={locale} />
        <div className="grain" aria-hidden="true" />
        <MotionProvider />
      </body>
    </html>
  );
}
