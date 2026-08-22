import type { CSSProperties } from "react";

/**
 * Isotipo de bitlogic: la cinta plegada que forma la B.
 *
 * Los cuatro polígonos están trazados pixel a pixel desde el asset oficial
 * (`src/images/logoprincipal.png` del sitio Gatsby, 69 × 179 útiles), así que
 * la silueta es idéntica al original — no es una reinterpretación.
 * El mismo perfil de cinta es el que anima el hero en WebGL.
 */

const RIBBON = [
  "M0 0 L65 32 L21 54 L5 47 L0 44 Z",
  "M68 34 L68 77 L0 111 L0 67 Z",
  "M46 91 L65 99 L20 121 L3 112 Z",
  "M68 101 L68 144 L0 178 L0 134 Z",
] as const;

type MarkProps = {
  className?: string;
  style?: CSSProperties;
  title?: string;
};

export function LogoMark({ className, style, title }: MarkProps) {
  return (
    <svg
      viewBox="0 0 68 178"
      role={title ? "img" : "presentation"}
      aria-label={title}
      aria-hidden={title ? undefined : true}
      focusable="false"
      className={className}
      style={style}
    >
      {RIBBON.map((d, i) => (
        <path key={i} d={d} fill="currentColor" />
      ))}
    </svg>
  );
}

type LogoProps = {
  /** `full` = isotipo + logotipo. `mark` = sólo el isotipo. */
  variant?: "full" | "mark";
  className?: string;
  /** Alto del isotipo en px; el logotipo escala en proporción. */
  size?: number;
  title?: string;
};

export function Logo({ variant = "full", className, size = 28, title = "Bitlogic" }: LogoProps) {
  return (
    <span
      className={`inline-flex items-center ${className ?? ""}`}
      style={{ gap: size * 0.42 }}
      aria-label={title}
      role="img"
    >
      <LogoMark style={{ height: size, width: (size * 68) / 178 }} />
      {variant === "full" && (
        <span
          aria-hidden="true"
          className="font-[family-name:var(--font-poppins)] font-medium leading-none"
          style={{ fontSize: size * 0.68, letterSpacing: "-0.018em" }}
        >
          bitlogic
        </span>
      )}
    </span>
  );
}

export { RIBBON as LOGO_RIBBON_PATHS };
