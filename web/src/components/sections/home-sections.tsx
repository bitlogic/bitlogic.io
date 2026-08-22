import Link from "next/link";
import { LogoMark } from "@/components/brand/Logo";
import {
  AnswerBlock,
  Button,
  Eyebrow,
  RevealLines,
  Section,
  SectionHeader,
} from "@/components/ui/primitives";
import type { Dictionary } from "@/content";
import { PARTNERS, STATS } from "@/content/site";
import { CASE_KEYS, href, SERVICE_KEYS, type Locale } from "@/lib/routes";

/* ========================================================================== */
/*  Respuesta + números                                                       */
/* ========================================================================== */

export function AnswerAndStats({ dict }: { dict: Dictionary }) {
  return (
    <Section className="py-[var(--spacing-section)]">
      <div className="container-bl">
        <AnswerBlock
          question={dict.home.answer.question}
          body={dict.home.answer.body}
          footnote={dict.home.answer.footnote}
        />

        <dl className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 border-t hairline pt-12 lg:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.key} data-rise>
              <dt className="sr-only">{dict.home.stats[stat.key]}</dt>
              <dd>
                <span className="display block text-h1 leading-none tabular-nums">
                  {/* El contador anima de 0 al valor; sin JS ya muestra el número. */}
                  <span data-count-to={stat.value}>{stat.value}</span>
                  {stat.suffix}
                </span>
                <span className="mt-3 block max-w-[20ch] text-micro opacity-55">
                  {dict.home.stats[stat.key]}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}

/* ========================================================================== */
/*  Servicios                                                                 */
/* ========================================================================== */

export function ServicesTeaser({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <Section id="servicios" className="py-[var(--spacing-section)]">
      <div className="container-bl">
        <SectionHeader
          eyebrow={dict.home.services.eyebrow}
          title={dict.home.services.title}
          lead={dict.home.services.lead}
        />

        <ul className="mt-16 border-t hairline">
          {SERVICE_KEYS.map((key) => {
            const service = dict.services.items[key];
            return (
              <li key={key} data-rise>
                <Link
                  href={href(`service:${key}`, locale)}
                  className="group grid-bl items-baseline gap-y-4 border-b hairline py-8 transition-colors duration-500 hover:bg-ink/[0.03] md:py-11"
                >
                  <span className="eyebrow col-span-2 opacity-40 md:col-span-1">
                    {service.number}
                  </span>

                  <h3 className="display col-span-10 text-h3 md:col-span-4 transition-[color,transform] duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2 group-hover:text-blue">
                    {service.name}
                  </h3>

                  <p className="col-span-12 max-w-[46ch] opacity-65 md:col-span-5 md:col-start-6">
                    {service.blurb}
                  </p>

                  <span className="col-span-12 flex items-center gap-2 text-micro opacity-0 transition-opacity duration-500 group-hover:opacity-70 md:col-span-2 md:justify-end md:opacity-40">
                    {service.summary}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-10" data-rise>
          <Button href={href("services", locale)} variant="outline">
            {dict.home.services.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}

/* ========================================================================== */
/*  Experiencias                                                              */
/* ========================================================================== */

export function WorkTeaser({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <Section theme="dark" className="py-[var(--spacing-section)]">
      <div className="container-bl">
        <SectionHeader
          eyebrow={dict.home.work.eyebrow}
          title={dict.home.work.title}
          lead={dict.home.work.lead}
        />

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {CASE_KEYS.map((key, i) => {
            const item = dict.case[key];
            // Composición asimétrica: destacada (2), media (1) y ancha (3).
            const span = i === 0 ? "lg:col-span-2" : i === 2 ? "lg:col-span-3" : "";
            const wide = i === 2;
            return (
              <Link
                key={key}
                href={href(`case:${key}`, locale)}
                data-rise
                className={`group relative flex flex-col justify-between overflow-hidden rounded-[var(--radius-card)] border border-cream/12 p-7 transition-colors duration-500 hover:border-cream/35 ${span}`}
              >
                <CaseGlow index={i} />

                <div className="relative">
                  <div className="flex items-center justify-between gap-4">
                    <span className="eyebrow opacity-50">{item.client}</span>
                    <span className="eyebrow opacity-30">{item.year}</span>
                  </div>
                  <div className={wide ? "mt-6 grid gap-5 lg:grid-cols-2 lg:gap-16" : "mt-6"}>
                    <h3 className="display text-h3 max-w-[20ch]">{item.title}</h3>
                    <p className={`max-w-[52ch] text-micro opacity-70 ${wide ? "" : "mt-4"}`}>
                      {item.summary}
                    </p>
                  </div>
                </div>

                <div className="relative mt-10 flex items-end justify-between gap-6">
                  <ul className="flex flex-wrap gap-2">
                    {item.stack.slice(0, 4).map((tech) => (
                      <li
                        key={tech}
                        className="rounded-full border border-cream/15 px-3 py-1 text-[0.6875rem] opacity-60"
                      >
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <span className="eyebrow shrink-0 opacity-0 transition-opacity duration-500 group-hover:opacity-70">
                    {dict.common.viewCase} →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10" data-rise>
          <Button href={href("work", locale)} variant="outline">
            {dict.home.work.cta}
          </Button>
        </div>
      </div>
    </Section>
  );
}

/** Halo de color que se enciende al pasar el mouse por una tarjeta de caso. */
function CaseGlow({ index }: { index: number }) {
  const tints = ["var(--color-blue)", "var(--color-coral)", "var(--color-yellow)"];
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-25"
      style={{ background: tints[index % tints.length] }}
    />
  );
}

/* ========================================================================== */
/*  Manifiesto                                                                */
/* ========================================================================== */

export function ManifestoSection({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <Section theme="dark" className="relative overflow-hidden pb-[var(--spacing-section)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-1/4 h-[36rem] w-[36rem] rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "var(--color-blue)" }}
      />
      <div className="container-bl relative">
        <div className="grid-bl gap-y-12 border-t border-cream/15 pt-14">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow className="mb-8 !opacity-50">{dict.home.manifesto.eyebrow}</Eyebrow>
            <RevealLines
              lines={dict.home.manifesto.lines}
              as="h2"
              className="display text-h1 leading-[1.02]"
            />
          </div>

          <div className="col-span-12 flex flex-col gap-6 lg:col-span-4 lg:col-start-9 lg:pt-24">
            {dict.home.manifesto.body.map((paragraph, i) => (
              <p key={i} className="max-w-[44ch] opacity-65" data-rise>
                {paragraph}
              </p>
            ))}
            <p className="eyebrow mt-2 text-yellow" data-rise>
              {dict.home.manifesto.signature}
            </p>
            <div data-rise>
              <Button href={href("about", locale)} variant="outline">
                {dict.home.manifesto.cta}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ========================================================================== */
/*  Valores                                                                   */
/* ========================================================================== */

export function ValuesSection({ dict }: { dict: Dictionary }) {
  return (
    <Section className="py-[var(--spacing-section)]">
      <div className="container-bl">
        <SectionHeader
          eyebrow={dict.home.values.eyebrow}
          title={dict.home.values.title}
          lead={dict.home.values.lead}
        />

        <ol className="mt-16 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-ink/10 md:grid-cols-2 lg:grid-cols-3">
          {dict.home.values.items.map((value, i) => (
            <li key={value.key} className="flex flex-col gap-4 bg-cream p-8" data-rise>
              <span className="eyebrow opacity-35">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="display text-h4">{value.name}</h3>
              <p className="text-micro opacity-65">{value.body}</p>
            </li>
          ))}
          {/* La última celda queda con el isotipo para cerrar la grilla. */}
          <li className="hidden items-end bg-cream p-8 lg:flex">
            <LogoMark className="h-20 w-auto text-ink/10" />
          </li>
        </ol>
      </div>
    </Section>
  );
}

/* ========================================================================== */
/*  Partners                                                                  */
/* ========================================================================== */

export function PartnersSection({ dict }: { dict: Dictionary }) {
  return (
    <Section className="pb-[var(--spacing-section)]">
      <div className="container-bl">
        <SectionHeader
          eyebrow={dict.home.partners.eyebrow}
          title={dict.home.partners.title}
          lead={dict.home.partners.lead}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PARTNERS.map((partner) => (
            <div
              key={partner.key}
              data-rise
              className="flex flex-col gap-3 rounded-[var(--radius-card)] border hairline p-7"
            >
              <h3 className="display text-h4">{partner.name}</h3>
              <p className="text-micro opacity-60">{partner.detail}</p>
              <p className="mt-3 text-micro opacity-75">
                {dict.technologies.partnerDetail[partner.key]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ========================================================================== */
/*  Bithouse                                                                  */
/* ========================================================================== */

export function BithouseSection({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <Section className="pb-[var(--spacing-section)]">
      <div className="container-bl">
        <div className="grid-bl items-center gap-y-12 rounded-[var(--radius-card)] bg-blue-wash px-[clamp(1.5rem,4vw,4rem)] py-[clamp(3rem,7vw,5.5rem)]">
          <div className="col-span-12 lg:col-span-5">
            <Eyebrow>{dict.home.bithouse.eyebrow}</Eyebrow>
            <h2 className="display mt-6 text-h2 max-w-[14ch]" data-rise>
              {dict.home.bithouse.title}
            </h2>
            <p className="eyebrow mt-8 opacity-45" data-rise>
              {dict.home.bithouse.caption}
            </p>
            <div className="mt-8" data-rise>
              <Button href={href("about", locale)} variant="outline">
                {dict.home.bithouse.cta}
              </Button>
            </div>
          </div>

          <div className="col-span-12 flex flex-col gap-5 lg:col-span-6 lg:col-start-7">
            {dict.home.bithouse.body.map((paragraph, i) => (
              <p key={i} className="max-w-[52ch] opacity-70" data-rise>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ========================================================================== */
/*  Cierre                                                                    */
/* ========================================================================== */

export function CtaBand({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <Section theme="blue" className="overflow-hidden py-[var(--spacing-section)]">
      <div className="container-bl">
        <div className="grid-bl items-end gap-y-10">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow className="!opacity-70">{dict.home.cta.eyebrow}</Eyebrow>
            <h2 className="display mt-6 text-h1 max-w-[14ch]" data-rise>
              {dict.home.cta.title}
            </h2>
          </div>
          <div className="col-span-12 flex flex-col gap-7 lg:col-span-4 lg:col-start-9">
            <p className="max-w-[38ch] opacity-80" data-rise>
              {dict.home.cta.body}
            </p>
            <div className="flex flex-wrap gap-3" data-rise>
              <Button
                href={href("contact", locale)}
                className="!bg-cream !text-ink hover:!bg-ink hover:!text-cream"
              >
                {dict.home.cta.primary}
              </Button>
              <Button href={href("faq", locale)} variant="outline">
                {dict.home.cta.secondary}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
