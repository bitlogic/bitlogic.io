import Link from "next/link";
import { LogoMark } from "@/components/brand/Logo";
import NewsletterForm from "@/components/forms/NewsletterForm";
import LocaleSwitchLink from "@/components/chrome/LocaleSwitchLink";
import type { Dictionary } from "@/content";
import { ADDRESS, SITE, SOCIALS } from "@/content/site";
import { href, SERVICE_KEYS, type Locale, type RouteKey } from "@/lib/routes";

export default function Footer({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  const companyLinks: RouteKey[] = ["work", "technologies", "about", "faq", "blog"];

  return (
    <footer data-theme="dark" className="relative overflow-hidden bg-ink text-cream">
      <div className="container-bl pb-10 pt-[clamp(4rem,10vh,7rem)]">
        <div className="grid-bl gap-y-14">
          {/* Claim */}
          <div className="col-span-12 lg:col-span-4">
            <LogoMark className="h-16 w-auto text-blue" />
            <p className="display mt-8 text-h3 max-w-[15ch]">{dict.footer.claim}</p>
          </div>

          {/* Columnas de navegación */}
          <nav className="col-span-6 md:col-span-4 lg:col-span-2 lg:col-start-6">
            <h2 className="eyebrow opacity-40">{dict.footer.columns.services}</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {SERVICE_KEYS.map((key) => (
                <li key={key}>
                  <FooterLink href={href(`service:${key}`, locale)}>
                    {dict.services.items[key].name}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="col-span-6 md:col-span-4 lg:col-span-2">
            <h2 className="eyebrow opacity-40">{dict.footer.columns.company}</h2>
            <ul className="mt-5 flex flex-col gap-3">
              {companyLinks.map((key) => (
                <li key={key}>
                  <FooterLink href={href(key, locale)}>
                    {dict.nav.items.find((i) => i.key === key)?.label ?? dict.pages[key].title.split(" — ")[0].split(" | ")[0]}
                  </FooterLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="col-span-12 md:col-span-4 lg:col-span-3 lg:col-start-10">
            <h2 className="eyebrow opacity-40">{dict.footer.columns.connect}</h2>
            <ul className="mt-5 flex flex-col gap-3">
              <li>
                <FooterLink href={`mailto:${SITE.email}`} external>
                  {SITE.email}
                </FooterLink>
              </li>
              {SOCIALS.map((s) => (
                <li key={s.key}>
                  <FooterLink href={s.href} external>
                    {s.label}
                  </FooterLink>
                </li>
              ))}
            </ul>

            <address className="mt-8 text-micro not-italic leading-relaxed opacity-55">
              {ADDRESS.building}
              <br />
              {ADDRESS.street}
              <br />
              {ADDRESS.locality}, {ADDRESS.countryName}
            </address>
          </div>
        </div>

        {/* Newsletter: franja propia, para que no desbalancee la grilla de arriba */}
        <div className="mt-16 grid-bl items-end gap-y-6 border-t border-cream/15 pt-10">
          <div className="col-span-12 lg:col-span-5">
            <h2 className="eyebrow opacity-50">{dict.footer.newsletterTitle}</h2>
            <p className="mt-3 max-w-[38ch] text-micro opacity-60">{dict.footer.newsletterBody}</p>
          </div>
          <div className="col-span-12 lg:col-span-5 lg:col-start-8">
            <NewsletterForm
              placeholder={dict.footer.newsletterPlaceholder}
              cta={dict.footer.newsletterCta}
              successLabel={dict.contact.form.successTitle}
              errorLabel={dict.contact.form.errorBody}
              locale={locale}
            />
          </div>
        </div>

        {/* Barra inferior */}
        <div className="mt-12 flex flex-col gap-4 border-t border-cream/15 pt-6 text-micro opacity-50 sm:flex-row sm:items-center sm:justify-between">
          <p>{dict.footer.legal}</p>
          <div className="flex items-center gap-6">
            <span>{dict.footer.madeIn}</span>
            <LocaleSwitchLink locale={locale} label={dict.footer.localeSwitch} className="hover:opacity-100" />
          </div>
        </div>
      </div>

      {/* Logotipo gigante al pie: la firma de la página. */}
      <div
        aria-hidden="true"
        className="pointer-events-none select-none overflow-hidden px-[var(--spacing-gutter)]"
      >
        <span
          className="block whitespace-nowrap pb-2 font-[family-name:var(--font-poppins)] font-medium leading-[0.86] text-cream/[0.07]"
          style={{ fontSize: "clamp(3.5rem, 26.2vw, 25rem)", letterSpacing: "-0.045em" }}
        >
          bitlogic
        </span>
      </div>
    </footer>
  );
}

function FooterLink({
  href: to,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const cls =
    "text-micro opacity-70 transition-opacity duration-300 hover:opacity-100 focus-visible:opacity-100";
  if (external) {
    return (
      <a href={to} className={cls} target="_blank" rel="noreferrer noopener">
        {children}
      </a>
    );
  }
  return (
    <Link href={to} className={cls}>
      {children}
    </Link>
  );
}
