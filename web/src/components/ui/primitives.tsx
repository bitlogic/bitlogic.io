import Link from "next/link";
import type { ReactNode } from "react";

/* -------------------------------------------------------------------------- */
/*  Primitivas de layout y tipografía                                         */
/*  Server components: nada de esto necesita JS en el cliente.                */
/* -------------------------------------------------------------------------- */

export function Eyebrow({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span className={`eyebrow inline-block opacity-60 ${className}`} data-rise>
      {children}
    </span>
  );
}

/**
 * Texto que se revela línea por línea detrás de una máscara.
 * `lines` ya viene partido: nunca partimos texto por ancho de caracteres,
 * porque el corte cambia con el idioma y con la fuente cargada.
 */
export function RevealLines({
  lines,
  as: Tag = "h2",
  className = "",
  accentClassName = "",
}: {
  lines: readonly (string | { text: string; accent?: boolean })[];
  as?: "h1" | "h2" | "h3" | "p" | "div";
  className?: string;
  accentClassName?: string;
}) {
  return (
    <Tag className={className} data-reveal-lines>
      {lines.map((line, i) => {
        const text = typeof line === "string" ? line : line.text;
        const accent = typeof line === "string" ? false : Boolean(line.accent);
        return (
          <span key={i} className="reveal-line">
            <span className={accent ? accentClassName : undefined}>{text}</span>
          </span>
        );
      })}
    </Tag>
  );
}

export function Section({
  children,
  id,
  className = "",
  theme = "light",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  theme?: "light" | "dark" | "blue";
}) {
  const themes = {
    light: "bg-cream text-ink",
    dark: "bg-ink text-cream",
    blue: "bg-blue text-cream",
  } as const;

  return (
    <section
      id={id}
      data-theme={theme === "light" ? "light" : "dark"}
      className={`relative ${themes[theme]} ${className}`}
    >
      {children}
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  className = "",
  align = "start",
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  className?: string;
  align?: "start" | "center";
}) {
  return (
    <header
      className={`flex flex-col gap-5 ${align === "center" ? "items-center text-center" : ""} ${className}`}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="display text-h2 max-w-[18ch]" data-rise>
        {title}
      </h2>
      {lead && (
        <p className="text-lead max-w-[52ch] opacity-70" data-rise>
          {lead}
        </p>
      )}
    </header>
  );
}

/**
 * Bloque respuesta-primero.
 *
 * Es la pieza central de la estrategia GEO: un `<h2>` con la pregunta tal como
 * la escribiría una persona y, debajo, una respuesta de dos o tres oraciones
 * que se sostiene sola fuera de contexto. Los motores generativos citan esto
 * casi textual, así que va en HTML plano y nunca se esconde detrás de una
 * animación ni de un acordeón.
 */
export function AnswerBlock({
  question,
  body,
  footnote,
  className = "",
}: {
  question: string;
  body: string;
  footnote?: string;
  className?: string;
}) {
  return (
    <div className={`grid-bl items-start gap-y-6 ${className}`}>
      <h2 className="display text-h3 col-span-12 md:col-span-4" data-rise>
        {question}
      </h2>
      <div className="col-span-12 md:col-span-7 md:col-start-6">
        <p className="text-lead" data-rise>
          {body}
        </p>
        {footnote && (
          <p className="eyebrow mt-6 opacity-50" data-rise>
            {footnote}
          </p>
        )}
      </div>
    </div>
  );
}

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline" | "ghost";
  external?: boolean;
  className?: string;
};

export function Button({
  href,
  children,
  variant = "solid",
  external = false,
  className = "",
}: ButtonProps) {
  const base =
    "group inline-flex items-center gap-2.5 rounded-full px-6 py-3.5 text-micro font-medium " +
    "transition-[background-color,color,border-color,transform] duration-300 ease-[var(--ease-out-expo)] " +
    "active:scale-[0.98]";

  const variants = {
    solid: "bg-ink text-cream hover:bg-blue",
    outline: "border border-current/25 hover:border-current/60 hover:bg-current/5",
    ghost: "hover:bg-current/5 px-4",
  } as const;

  const content = (
    <>
      {children}
      <Arrow />
    </>
  );

  const cls = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a href={href} className={cls} target="_blank" rel="noreferrer noopener">
        {content}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {content}
    </Link>
  );
}

function Arrow() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-400 ease-[var(--ease-out-expo)] group-hover:translate-x-1"
    >
      <path
        d="M1 7h11M7.5 2.5 12 7l-4.5 4.5"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Regla capilar de sección, con el número al costado. */
export function Rule({ label, className = "" }: { label?: string; className?: string }) {
  return (
    <div className={`flex items-baseline gap-4 border-t hairline pt-4 ${className}`}>
      {label && <span className="eyebrow opacity-40">{label}</span>}
    </div>
  );
}
