import Link from "next/link";
import { Eyebrow } from "@/components/ui/primitives";
import { href, type Locale, type RouteKey } from "@/lib/routes";

/**
 * Cabecera de página interna.
 *
 * El `<h1>` es siempre el título real de la página, no el nombre de la marca:
 * es la señal más fuerte que tiene un motor para saber de qué trata la página.
 * Las migas se renderizan como navegación real, no sólo como JSON-LD.
 */
export default function PageHero({
  eyebrow,
  title,
  lead,
  locale,
  breadcrumb,
  aside,
  current,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  locale: Locale;
  breadcrumb?: { label: string; routeKey: RouteKey }[];
  aside?: React.ReactNode;
  /** Última miga, sin enlace: la página en la que ya estás. */
  current?: string;
}) {
  return (
    <header className="relative overflow-hidden bg-cream pb-[clamp(3rem,7vh,5rem)] pt-[clamp(8rem,16vh,11rem)]">
      <Backdrop />

      <div className="container-bl relative">
        {breadcrumb && breadcrumb.length > 0 && (
          <nav aria-label="breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-micro opacity-45">
              {breadcrumb.map((crumb) => (
                <li key={crumb.routeKey} className="flex items-center gap-2">
                  <Link href={href(crumb.routeKey, locale)} className="hover:opacity-100">
                    {crumb.label}
                  </Link>
                  <span aria-hidden="true">/</span>
                </li>
              ))}
              {current && (
                <li aria-current="page" className="opacity-70">
                  {current}
                </li>
              )}
            </ol>
          </nav>
        )}

        <div className="grid-bl items-end gap-y-8">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow>{eyebrow}</Eyebrow>
            <h1 className="display mt-6 text-h1 max-w-[19ch]" data-rise>
              {title}
            </h1>
            {lead && (
              <p className="text-lead mt-7 max-w-[48ch] opacity-70" data-rise>
                {lead}
              </p>
            )}
          </div>
          {aside && (
            <div className="col-span-12 lg:col-span-3 lg:col-start-10" data-rise>
              {aside}
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

/** Eco suave de la cinta del hero, para que las internas no arranquen planas. */
function Backdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 420"
      preserveAspectRatio="xMidYMid slice"
      className="pointer-events-none absolute inset-0 h-full w-full opacity-45"
    >
      <defs>
        <linearGradient id="bl-page-ribbon" x1="0" y1="0" x2="1" y2="0.4">
          <stop offset="0%" stopColor="#3E6BE8" stopOpacity="0" />
          <stop offset="45%" stopColor="#25CAD3" stopOpacity="0.5" />
          <stop offset="80%" stopColor="#FEAF9B" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ECE241" stopOpacity="0" />
        </linearGradient>
        <filter id="bl-page-soft" x="-20%" y="-40%" width="140%" height="180%">
          <feGaussianBlur stdDeviation="26" />
        </filter>
      </defs>
      <path
        d="M-80 120 C 300 -40, 620 300, 940 120 S 1340 -20, 1540 90"
        stroke="url(#bl-page-ribbon)"
        strokeWidth="120"
        fill="none"
        filter="url(#bl-page-soft)"
        strokeLinecap="round"
      />
    </svg>
  );
}
