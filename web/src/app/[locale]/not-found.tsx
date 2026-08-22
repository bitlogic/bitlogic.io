import Link from "next/link";
import { LogoMark } from "@/components/brand/Logo";
import { getDictionary } from "@/content";
import { DEFAULT_LOCALE, href } from "@/lib/routes";

/**
 * `not-found` no recibe params, así que no puede saber el idioma de la URL que
 * falló. Se muestra en español (el idioma por defecto) con el enlace de vuelta
 * al inicio; es el compromiso razonable para una página que nadie debería ver.
 */
export default function NotFound() {
  const dict = getDictionary(DEFAULT_LOCALE);

  return (
    <section className="flex min-h-[80svh] items-center bg-cream py-32">
      <div className="container-bl">
        <LogoMark className="h-14 w-auto text-blue" />
        <p className="display mt-10 text-hero leading-none opacity-15">{dict.notFound.code}</p>
        <h1 className="display mt-6 text-h2 max-w-[16ch]">{dict.notFound.title}</h1>
        <p className="text-lead mt-5 max-w-[44ch] opacity-70">{dict.notFound.body}</p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href={href("home", DEFAULT_LOCALE)}
            className="inline-flex rounded-full bg-ink px-6 py-3.5 text-micro font-medium text-cream transition-colors hover:bg-blue"
          >
            {dict.notFound.cta}
          </Link>
          <Link
            href={href("contact", DEFAULT_LOCALE)}
            className="inline-flex rounded-full border border-ink/25 px-6 py-3.5 text-micro transition-colors hover:border-ink/60"
          >
            {dict.nav.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
