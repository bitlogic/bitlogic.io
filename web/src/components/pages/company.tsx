import PageHero from "./PageHero";
import { AnswerBlock, Button, Eyebrow, Section, SectionHeader } from "@/components/ui/primitives";
import { CtaBand } from "@/components/sections/home-sections";
import ContactForm from "@/components/forms/ContactForm";
import FaqList from "@/components/pages/FaqList";
import { LogoMark } from "@/components/brand/Logo";
import type { Dictionary } from "@/content";
import { ADDRESS, LEADERSHIP, PARTNERS, SITE, SOCIALS, TECH_GROUPS } from "@/content/site";
import { href, type Locale } from "@/lib/routes";

/* ========================================================================== */
/*  Tecnologías                                                               */
/* ========================================================================== */

export function TechnologiesPage({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <>
      <PageHero
        eyebrow={dict.technologies.hero.eyebrow}
        title={dict.technologies.hero.title}
        lead={dict.technologies.hero.lead}
        locale={locale}
      />

      <Section className="py-[clamp(3rem,7vh,5rem)]">
        <div className="container-bl">
          <AnswerBlock
            question={dict.technologies.answer.question}
            body={dict.technologies.answer.body}
          />
        </div>
      </Section>

      <Section className="pb-[var(--spacing-section)]">
        <div className="container-bl border-t hairline">
          {TECH_GROUPS.map((group) => (
            <div key={group.key} className="grid-bl gap-y-6 border-b hairline py-11" data-rise>
              <div className="col-span-12 lg:col-span-4">
                <h2 className="display text-h3">{dict.technologies.groups[group.key].name}</h2>
                <p className="mt-3 max-w-[38ch] text-micro opacity-60">
                  {dict.technologies.groups[group.key].body}
                </p>
              </div>
              <ul className="col-span-12 flex flex-wrap items-start gap-2 lg:col-span-7 lg:col-start-6 lg:justify-end">
                {group.items.map((tech) => (
                  <li
                    key={tech}
                    className="rounded-full border hairline px-4 py-2 text-micro opacity-75 transition-colors duration-300 hover:border-blue/50 hover:text-blue"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section theme="dark" className="py-[var(--spacing-section)]">
        <div className="container-bl">
          <SectionHeader
            title={dict.technologies.partnersTitle}
            lead={dict.technologies.partnersLead}
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-cream/15 md:grid-cols-3">
            {PARTNERS.map((partner) => (
              <article key={partner.key} className="flex flex-col gap-4 bg-ink p-8" data-rise>
                <h3 className="display text-h4">{partner.name}</h3>
                <p className="eyebrow text-yellow">{partner.detail}</p>
                <p className="text-micro opacity-65">
                  {dict.technologies.partnerDetail[partner.key]}
                </p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  );
}

/* ========================================================================== */
/*  Nosotros                                                                  */
/* ========================================================================== */

export function AboutPage({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <>
      <PageHero
        eyebrow={dict.about.hero.eyebrow}
        title={dict.about.hero.title}
        lead={dict.about.hero.lead}
        locale={locale}
      />

      <Section className="py-[clamp(3rem,7vh,5rem)]">
        <div className="container-bl">
          <AnswerBlock question={dict.about.answer.question} body={dict.about.answer.body} />
        </div>
      </Section>

      {/* Misión y visión */}
      <Section className="pb-[var(--spacing-section)]">
        <div className="container-bl grid gap-10 border-t hairline pt-12 md:grid-cols-2">
          <div data-rise>
            <Eyebrow>{dict.about.visionTitle}</Eyebrow>
            <p className="display mt-5 text-h3 max-w-[20ch]">{dict.about.vision}</p>
          </div>
          <div data-rise>
            <Eyebrow>{dict.about.missionTitle}</Eyebrow>
            <p className="mt-5 text-lead max-w-[46ch] opacity-75">{dict.about.mission}</p>
          </div>
        </div>
      </Section>

      {/* Manifiesto */}
      <Section theme="dark" className="relative overflow-hidden py-[var(--spacing-section)]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-10 h-[32rem] w-[32rem] rounded-full opacity-20 blur-[130px]"
          style={{ background: "var(--color-coral)" }}
        />
        <div className="container-bl relative">
          <Eyebrow className="!opacity-50">{dict.about.manifestoTitle}</Eyebrow>
          <div className="mt-10 flex max-w-4xl flex-col gap-6">
            {dict.about.manifesto.map((line, i) => (
              <p
                key={i}
                data-rise
                className={
                  i < 2
                    ? "display text-h2 max-w-[22ch]"
                    : "text-lead max-w-[58ch] opacity-70"
                }
              >
                {line}
              </p>
            ))}
          </div>
          <p className="eyebrow mt-12 text-yellow" data-rise>
            {dict.about.manifestoSignature}
          </p>
        </div>
      </Section>

      {/* Línea de tiempo */}
      <Section className="py-[var(--spacing-section)]">
        <div className="container-bl">
          <SectionHeader title={dict.about.timelineTitle} />
          <ol className="mt-14 border-t hairline">
            {dict.about.timeline.map((entry) => (
              <li key={entry.year} className="grid-bl gap-y-4 border-b hairline py-9" data-rise>
                <span className="display col-span-12 text-h3 text-blue md:col-span-2">
                  {entry.year}
                </span>
                <h3 className="col-span-12 text-lead md:col-span-3">{entry.title}</h3>
                <p className="col-span-12 max-w-[56ch] opacity-65 md:col-span-6 md:col-start-7">
                  {entry.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Valores */}
      <Section className="pb-[var(--spacing-section)]">
        <div className="container-bl">
          <SectionHeader title={dict.about.valuesTitle} lead={dict.about.valuesLead} />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
            {dict.home.values.items.map((value, i) => (
              <li key={value.key} className="flex flex-col gap-4 bg-cream p-8" data-rise>
                <span className="eyebrow opacity-35">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="display text-h4">{value.name}</h3>
                <p className="text-micro opacity-65">{value.body}</p>
              </li>
            ))}
            <li className="hidden items-end bg-cream p-8 lg:flex">
              <LogoMark className="h-20 w-auto text-ink/10" />
            </li>
          </ol>
        </div>
      </Section>

      {/* Board */}
      <Section className="pb-[var(--spacing-section)]">
        <div className="container-bl">
          <SectionHeader title={dict.about.leadershipTitle} lead={dict.about.leadershipLead} />
          <ul className="mt-12 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
            {LEADERSHIP.map((person) => (
              <li key={person.key} className="border-t hairline pt-5" data-rise>
                <p className="display text-h4">{person.name}</p>
                <p className="mt-1.5 text-micro opacity-55">{dict.about.roles[person.roleKey]}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>

      {/* Bithouse + diversidad */}
      <Section theme="dark" className="py-[var(--spacing-section)]">
        <div className="container-bl grid-bl gap-y-14">
          <div className="col-span-12 lg:col-span-7">
            <h2 className="display text-h2 max-w-[16ch]" data-rise>
              {dict.about.bithouseTitle}
            </h2>
            <div className="mt-8 flex flex-col gap-5">
              {dict.about.bithouse.map((paragraph, i) => (
                <p key={i} className="max-w-[58ch] opacity-70" data-rise>
                  {paragraph}
                </p>
              ))}
            </div>
            <address className="eyebrow mt-8 not-italic opacity-45" data-rise>
              {ADDRESS.street} · {ADDRESS.locality}, {ADDRESS.countryName}
            </address>
          </div>

          <div className="col-span-12 lg:col-span-4 lg:col-start-9">
            <div className="rounded-[var(--radius-card)] border border-cream/15 p-8" data-rise>
              <h2 className="display text-h4">{dict.about.diversityTitle}</h2>
              <p className="mt-4 text-micro opacity-65">{dict.about.diversity}</p>
            </div>

            <div className="mt-8" data-rise>
              <h2 className="display text-h4">{dict.about.ctaTitle}</h2>
              <p className="mt-3 text-micro opacity-65">{dict.about.ctaBody}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button href={href("contact", locale)} variant="outline">
                  {dict.nav.cta}
                </Button>
                <Button href={SOCIALS[0].href} variant="ghost" external>
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

/* ========================================================================== */
/*  FAQ                                                                       */
/* ========================================================================== */

export function FaqPage({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <>
      <PageHero
        eyebrow={dict.faq.hero.eyebrow}
        title={dict.faq.hero.title}
        lead={dict.faq.hero.lead}
        locale={locale}
      />

      <Section className="py-[var(--spacing-section)]">
        <div className="container-bl">
          {/* Las preguntas se renderizan abiertas en el HTML servido: un motor
              generativo tiene que poder leer la respuesta sin ejecutar nada. */}
          <FaqList items={dict.faq.items} />
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  );
}

/* ========================================================================== */
/*  Contacto                                                                  */
/* ========================================================================== */

export function ContactPage({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <>
      <PageHero
        eyebrow={dict.contact.hero.eyebrow}
        title={dict.contact.hero.title}
        lead={dict.contact.hero.lead}
        locale={locale}
      />

      <Section className="pb-[var(--spacing-section)] pt-[clamp(2rem,5vh,3.5rem)]">
        <div className="container-bl grid-bl gap-y-14">
          <div className="col-span-12 lg:col-span-7">
            <ContactForm dict={dict} locale={locale} />
          </div>

          <aside className="col-span-12 flex flex-col gap-10 lg:col-span-4 lg:col-start-9">
            <div data-rise>
              <Eyebrow>{dict.contact.directTitle}</Eyebrow>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${SITE.email}`}
                    className="text-lead underline decoration-current/25 underline-offset-4 transition-colors hover:text-blue"
                  >
                    {SITE.email}
                  </a>
                </li>
                <li className="text-micro opacity-55">{dict.contact.responseTime}</li>
              </ul>
            </div>

            <div data-rise>
              <Eyebrow>{dict.contact.officeTitle}</Eyebrow>
              <address className="mt-5 not-italic leading-relaxed opacity-75">
                {ADDRESS.building}
                <br />
                {ADDRESS.street}
                <br />
                {ADDRESS.locality}, {ADDRESS.countryName}
              </address>
              <p className="mt-4 max-w-[36ch] text-micro opacity-55">{dict.contact.officeBody}</p>
            </div>

            <div data-rise>
              <Eyebrow>{dict.footer.columns.connect}</Eyebrow>
              <ul className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
                {SOCIALS.map((social) => (
                  <li key={social.key}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-micro opacity-70 underline decoration-current/20 underline-offset-4 transition-opacity hover:opacity-100"
                    >
                      {social.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

/* ========================================================================== */
/*  Blog                                                                      */
/* ========================================================================== */

export function BlogPage({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <>
      <PageHero
        eyebrow={dict.blog.hero.eyebrow}
        title={dict.blog.hero.title}
        lead={dict.blog.hero.lead}
        locale={locale}
      />

      <Section className="py-[var(--spacing-section)]">
        <div className="container-bl">
          <div
            className="flex flex-col items-start gap-6 rounded-[var(--radius-card)] border hairline p-10"
            data-rise
          >
            <h2 className="display text-h3">{dict.blog.empty.title}</h2>
            <p className="max-w-[48ch] opacity-70">{dict.blog.empty.body}</p>
            <Button href={dict.blog.empty.href} variant="outline" external>
              {dict.blog.empty.cta}
            </Button>
          </div>
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  );
}
