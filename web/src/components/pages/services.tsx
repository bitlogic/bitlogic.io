import Link from "next/link";
import PageHero from "./PageHero";
import { AnswerBlock, Button, Section, SectionHeader } from "@/components/ui/primitives";
import { CtaBand } from "@/components/sections/home-sections";
import type { Dictionary } from "@/content";
import { href, SERVICE_KEYS, type Locale, type ServiceKey } from "@/lib/routes";

/* ========================================================================== */
/*  Índice de servicios                                                       */
/* ========================================================================== */

export function ServicesIndex({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <>
      <PageHero
        eyebrow={dict.services.hero.eyebrow}
        title={dict.services.hero.title}
        lead={dict.services.hero.lead}
        locale={locale}
      />

      <Section className="py-[clamp(3rem,7vh,5rem)]">
        <div className="container-bl">
          <AnswerBlock
            question={dict.services.answer.question}
            body={dict.services.answer.body}
          />
        </div>
      </Section>

      <Section className="pb-[var(--spacing-section)]">
        <div className="container-bl grid gap-6 lg:grid-cols-3">
          {SERVICE_KEYS.map((key) => {
            const service = dict.services.items[key];
            return (
              <Link
                key={key}
                href={href(`service:${key}`, locale)}
                data-rise
                className="group flex flex-col justify-between rounded-[var(--radius-card)] border hairline p-8 transition-[border-color,transform] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-blue/50"
              >
                <div>
                  <span className="eyebrow opacity-35">{service.number}</span>
                  <h2 className="display mt-6 text-h3">{service.name}</h2>
                  <p className="mt-3 text-lead opacity-70">{service.summary}</p>
                  <p className="mt-6 text-micro opacity-60">{service.blurb}</p>
                </div>

                <ul className="mt-8 flex flex-col gap-2 border-t hairline pt-6">
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-micro opacity-70">
                      <span aria-hidden="true" className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Link>
            );
          })}
        </div>
      </Section>

      <Section theme="dark" className="py-[var(--spacing-section)]">
        <div className="container-bl">
          <SectionHeader title={dict.services.processTitle} />
          <ol className="mt-14 grid gap-px overflow-hidden rounded-[var(--radius-card)] bg-cream/15 md:grid-cols-2 lg:grid-cols-4">
            {dict.services.process.map((step) => (
              <li key={step.step} className="flex flex-col gap-4 bg-ink p-8" data-rise>
                <span className="eyebrow text-yellow">{step.step}</span>
                <h3 className="display text-h4">{step.name}</h3>
                <p className="text-micro opacity-60">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  );
}

/* ========================================================================== */
/*  Detalle de un servicio                                                    */
/* ========================================================================== */

export function ServiceDetail({
  dict,
  locale,
  serviceKey,
}: {
  dict: Dictionary;
  locale: Locale;
  serviceKey: ServiceKey;
}) {
  const service = dict.service[serviceKey];
  const summary = dict.services.items[serviceKey];
  const siblings = SERVICE_KEYS.filter((key) => key !== serviceKey);

  return (
    <>
      <PageHero
        eyebrow={service.eyebrow}
        title={service.title}
        lead={service.subtitle}
        locale={locale}
        breadcrumb={[{ label: dict.services.hero.eyebrow, routeKey: "services" }]}
        current={service.title}
        aside={
          <ul className="flex flex-col gap-2 border-t hairline pt-5">
            {summary.bullets.map((bullet) => (
              <li key={bullet} className="text-micro opacity-60">
                {bullet}
              </li>
            ))}
          </ul>
        }
      />

      <Section className="py-[clamp(3rem,7vh,5rem)]">
        <div className="container-bl">
          <AnswerBlock question={service.answer.question} body={service.answer.body} />
        </div>
      </Section>

      <Section className="pb-[var(--spacing-section)]">
        <div className="container-bl">
          <p className="text-lead max-w-[62ch] border-t hairline pt-12 opacity-80" data-rise>
            {service.intro}
          </p>

          <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">
            {service.blocks.map((block, i) => (
              <article key={block.title} data-rise className="flex flex-col gap-4">
                <span className="eyebrow opacity-30">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="display text-h4">{block.title}</h2>
                <p className="max-w-[46ch] opacity-70">{block.body}</p>
              </article>
            ))}
          </div>
        </div>
      </Section>

      <Section theme="dark" className="py-[var(--spacing-section)]">
        <div className="container-bl grid-bl gap-y-10">
          <h2 className="display col-span-12 text-h2 lg:col-span-4" data-rise>
            {service.forWho.title}
          </h2>
          <ul className="col-span-12 flex flex-col lg:col-span-7 lg:col-start-6">
            {service.forWho.items.map((item) => (
              <li
                key={item}
                data-rise
                className="border-b border-cream/15 py-6 text-lead first:border-t first:border-cream/15"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <Section className="py-[var(--spacing-section)]">
        <div className="container-bl">
          <SectionHeader eyebrow={dict.common.next} title={dict.services.hero.eyebrow} />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {siblings.map((key) => (
              <Link
                key={key}
                href={href(`service:${key}`, locale)}
                data-rise
                className="group flex items-center justify-between gap-6 rounded-[var(--radius-card)] border hairline p-8 transition-colors duration-500 hover:border-blue/50"
              >
                <span>
                  <span className="eyebrow opacity-35">{dict.services.items[key].number}</span>
                  <span className="display mt-3 block text-h3">{dict.services.items[key].name}</span>
                </span>
                <span aria-hidden="true" className="text-h3 opacity-25 transition-[opacity,transform] duration-500 group-hover:translate-x-1 group-hover:opacity-70">
                  →
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-12" data-rise>
            <Button href={href("contact", locale)}>{dict.common.partnerWithUs}</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
