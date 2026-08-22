"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { href, otherLocale, resolveRoute, type Locale } from "@/lib/routes";

/**
 * Cambio de idioma que conserva la página.
 * Vive en el footer, que es server component, así que resuelve la ruta actual
 * desde el pathname en vez de recibirla por props.
 */
export default function LocaleSwitchLink({
  locale,
  label,
  className = "",
}: {
  locale: Locale;
  label: string;
  className?: string;
}) {
  const pathname = usePathname();
  const other = otherLocale(locale);
  const routeKey = resolveRoute(pathname.split("/").filter(Boolean))?.key ?? "home";

  return (
    <Link href={href(routeKey, other)} hrefLang={other} className={className}>
      {label}
    </Link>
  );
}
