"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/brand/Logo";
import type { Dictionary } from "@/content";
import { href, otherLocale, resolveRoute, type Locale, type RouteKey } from "@/lib/routes";

/**
 * Header.
 *
 * Vive por encima del hero sin fondo y se vuelve sólido al bajar (lo dispara
 * `html[data-scrolled]`, que setea MotionProvider). El cambio de idioma apunta
 * SIEMPRE a la misma página en el otro idioma, nunca a la home: eso lo
 * garantiza la tabla de rutas.
 */
export default function Header({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const other = otherLocale(locale);

  // El header vive en el layout y no recibe la ruta por props: la deduce del
  // pathname público con la misma tabla que usa el ruteo.
  const routeKey: RouteKey =
    resolveRoute(pathname.split("/").filter(Boolean))?.key ?? "home";

  // Escape cierra el menú, y con el menú abierto no se scrollea el fondo.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => setOpen(false), [pathname]);

  // Una página hija marca activo a su padre en el nav.
  const current: RouteKey = routeKey.startsWith("service:")
    ? "services"
    : routeKey.startsWith("case:")
      ? "work"
      : routeKey;

  const navItems = dict.nav.items.map((item) => ({
    ...item,
    href: href(item.key as RouteKey, locale),
    active: item.key === current,
  }));

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-3 focus:text-cream"
      >
        {dict.nav.skipToContent}
      </a>

      <header className="fixed inset-x-0 top-0 z-50 text-ink transition-colors duration-500 [html[data-chrome='dark']_&]:text-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 border-b border-transparent bg-cream/0 backdrop-blur-0 transition-all duration-500 ease-[var(--ease-out-expo)] [html[data-scrolled='true']_&]:border-current/10 [html[data-scrolled='true']_&]:bg-cream/80 [html[data-scrolled='true']_&]:backdrop-blur-xl [html[data-chrome='dark'][data-scrolled='true']_&]:bg-ink/75"
        />

        <div className="container-bl relative flex h-[72px] items-center justify-between gap-6">
          <Link
            href={href("home", locale)}
            className="relative z-10 transition-opacity hover:opacity-70"
            aria-label="Bitlogic"
          >
            <Logo size={24} />
          </Link>

          <nav aria-label={dict.nav.label} className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                aria-current={item.active ? "page" : undefined}
                className="relative rounded-full px-4 py-2 text-micro transition-colors duration-300 hover:bg-current/10 aria-[current=page]:bg-current/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href={href(routeKey, other)}
              hrefLang={other}
              className="hidden rounded-full px-3 py-2 text-micro uppercase tracking-wider opacity-55 transition-opacity hover:opacity-100 sm:block"
              aria-label={dict.footer.localeSwitch}
            >
              {other}
            </Link>

            <Link
              href={href("contact", locale)}
              className="hidden rounded-full bg-ink px-5 py-2.5 text-micro font-medium text-cream transition-colors duration-300 hover:bg-blue lg:inline-flex [html[data-chrome='dark']_&]:bg-cream [html[data-chrome='dark']_&]:text-ink [html[data-chrome='dark']_&]:hover:bg-yellow"
            >
              {dict.nav.cta}
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="relative z-10 -mr-2 flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-current/10 lg:hidden"
            >
              <span className="sr-only">{open ? dict.nav.menuClose : dict.nav.menuOpen}</span>
              <Burger open={open} />
            </button>
          </div>
        </div>
      </header>

      {/* Menú móvil a pantalla completa. */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 bg-cream lg:hidden"
        data-theme="light"
      >
        <div className="container-bl flex h-full flex-col justify-between pb-10 pt-28">
          <nav aria-label={dict.nav.label} className="flex flex-col">
            {navItems.map((item, i) => (
              <Link
                key={item.key}
                href={item.href}
                onClick={() => setOpen(false)}
                className="display border-b hairline py-5 text-h3 transition-colors hover:text-blue"
                style={{ transitionDelay: `${i * 20}ms` }}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-between gap-4">
            <Link
              href={href("contact", locale)}
              onClick={() => setOpen(false)}
              className="inline-flex rounded-full bg-ink px-6 py-3.5 text-micro font-medium text-cream"
            >
              {dict.nav.cta}
            </Link>
            <Link
              href={href(routeKey, other)}
              hrefLang={other}
              onClick={() => setOpen(false)}
              className="eyebrow opacity-60"
            >
              {dict.footer.localeSwitch}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <svg width="20" height="14" viewBox="0 0 20 14" aria-hidden="true">
      <line
        x1="0"
        y1="1"
        x2="20"
        y2="1"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="origin-center transition-transform duration-400 ease-[var(--ease-out-expo)]"
        style={open ? { transform: "translateY(6px) rotate(45deg)" } : undefined}
      />
      <line
        x1="0"
        y1="13"
        x2="20"
        y2="13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        className="origin-center transition-transform duration-400 ease-[var(--ease-out-expo)]"
        style={open ? { transform: "translateY(-6px) rotate(-45deg)" } : undefined}
      />
    </svg>
  );
}
