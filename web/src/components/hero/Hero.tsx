import RibbonStage from "./RibbonStage";
import { Button } from "@/components/ui/primitives";
import type { Dictionary } from "@/content";
import { href, type Locale } from "@/lib/routes";

/**
 * Hero de la home.
 *
 * Composición en dos zonas: la tipografía apoya sobre crema limpia a la
 * izquierda y la cinta respira a la derecha. No es sólo estética — un titular
 * de este tamaño encima de un degradé que cambia cada frame tiene un contraste
 * impredecible, y eso no se puede testear. Separar las zonas lo vuelve
 * determinista.
 *
 * El texto se renderiza en el servidor. Si WebGL no arranca, si el usuario
 * pidió menos movimiento o si un crawler no ejecuta JS, el hero dice
 * exactamente lo mismo: la cinta es la capa de arriba, no el soporte.
 */
export default function Hero({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const { hero } = dict.home;

  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-cream">
      {/* Capa 1 — cinta estática: lo que se ve mientras carga y lo que queda
          en dispositivos modestos o con reduced-motion. */}
      <StaticRibbon />

      {/* Capa 2 — la misma cinta, viva. */}
      <div className="absolute inset-0 -z-10">
        <RibbonStage />
      </div>

      {/* Capa 3 — velo. Despeja la mitad izquierda y el pie sin apagar la
          cinta del lado derecho. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(100deg,var(--color-cream)_18%,color-mix(in_oklab,var(--color-cream)_82%,transparent)_40%,transparent_68%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-3/5 bg-[linear-gradient(to_top,var(--color-cream)_18%,transparent)] md:h-2/5 md:bg-[linear-gradient(to_top,var(--color-cream)_10%,transparent)]"
      />

      <div className="container-bl relative flex flex-1 flex-col justify-between gap-10 pb-24 pt-28 md:pt-32">
        <p className="eyebrow max-w-[24ch] opacity-70" data-rise>
          {hero.eyebrow}
        </p>

        <div className="grid-bl items-end gap-y-12">
          <div className="col-span-12 lg:col-span-7">
            <h1
              className="display text-hero"
              data-reveal-lines
              style={{ letterSpacing: "-0.035em" }}
            >
              {hero.lines.map((line, i) => (
                <span key={i} className="reveal-line">
                  <span className={line.accent ? "italic text-blue" : undefined}>{line.text}</span>
                </span>
              ))}
            </h1>

            <p className="text-lead mt-8 max-w-[42ch] opacity-75" data-rise>
              {hero.lead}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3" data-rise>
              <Button href={href("contact", locale)}>{hero.primaryCta}</Button>
              <Button href={href("work", locale)} variant="outline">
                {hero.secondaryCta}
              </Button>
            </div>
          </div>
        </div>

      </div>

      {/* Pie del hero fuera del flujo: así el bloque de tipografía puede usar
          todo el alto disponible sin empujarlo abajo del pliegue. */}
      <div className="container-bl absolute inset-x-0 bottom-0 pb-8">
        <div className="flex items-center justify-between border-t hairline pt-5">
          <span className="eyebrow opacity-40">{hero.scrollHint}</span>
          <span className="eyebrow opacity-40">Córdoba · AR</span>
        </div>
      </div>
    </section>
  );
}

/**
 * Versión estática de la cinta, en SVG.
 * Mismos colores y misma idea de pliegue que la escena WebGL, resuelta con
 * cuatro trazos y un desenfoque suave. Pesa unos 2 KB y viaja en el HTML.
 */
function StaticRibbon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 900"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 -z-20 h-full w-full"
    >
      <defs>
        <linearGradient id="bl-ribbon-a" x1="0" y1="0" x2="1" y2="0.3">
          <stop offset="0%" stopColor="#3E6BE8" />
          <stop offset="38%" stopColor="#25CAD3" />
          <stop offset="72%" stopColor="#FEAF9B" />
          <stop offset="100%" stopColor="#ECE241" />
        </linearGradient>
        <linearGradient id="bl-ribbon-b" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3E6BE8" stopOpacity="0.55" />
          <stop offset="60%" stopColor="#FEAF9B" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#ECE241" stopOpacity="0.3" />
        </linearGradient>
        <filter id="bl-soft" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="18" />
        </filter>
      </defs>

      <g filter="url(#bl-soft)" opacity="0.5">
        <path
          d="M-60 380 C 240 160, 470 600, 760 340 S 1220 120, 1520 310"
          stroke="url(#bl-ribbon-a)"
          strokeWidth="150"
          fill="none"
          strokeLinecap="round"
        />
      </g>
      <path
        d="M-60 380 C 240 160, 470 600, 760 340 S 1220 120, 1520 310"
        stroke="url(#bl-ribbon-a)"
        strokeWidth="92"
        fill="none"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M-60 500 C 300 310, 520 690, 830 450 S 1240 270, 1520 430"
        stroke="url(#bl-ribbon-b)"
        strokeWidth="34"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M-60 260 C 260 100, 560 470, 880 230 S 1260 40, 1520 190"
        stroke="url(#bl-ribbon-b)"
        strokeWidth="14"
        fill="none"
        strokeLinecap="round"
        opacity="0.7"
      />
    </svg>
  );
}
