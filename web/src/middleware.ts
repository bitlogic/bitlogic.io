import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALES } from "@/lib/routes";

/**
 * El árbol de rutas real es `/es/...` y `/en/...`, pero el español se sirve sin
 * prefijo: `/servicios`, no `/es/servicios`. Este middleware hace la reescritura
 * — no un redirect: la URL que ve la persona y la que indexan los motores es
 * la limpia, y sólo internamente resuelve al segmento `[locale]`.
 *
 * `/es/...` escrito a mano redirige a la versión sin prefijo para que no queden
 * dos URLs con el mismo contenido.
 */
export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /es/servicios → /servicios (301 lógico, una sola URL canónica)
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url, 308);
  }

  const prefixed = LOCALES.some(
    (locale) => locale !== DEFAULT_LOCALE && (pathname === `/${locale}` || pathname.startsWith(`/${locale}/`)),
  );
  if (prefixed) return NextResponse.next();

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    // Todo menos assets, endpoints y los archivos que sirven los crawlers.
    "/((?!_next/|api/|og$|robots\\.txt|sitemap\\.xml|llms\\.txt|llms-full\\.txt|favicon\\.ico|icon\\.svg|.*\\.[a-zA-Z0-9]+$).*)",
  ],
};
