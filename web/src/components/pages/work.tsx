import Link from "next/link";
import PageHero from "./PageHero";
import { AnswerBlock, Button, Section } from "@/components/ui/primitives";
import { CtaBand } from "@/components/sections/home-sections";
import type { Dictionary } from "@/content";
import { CASE_KEYS, href, type CaseKey, type Locale } from "@/lib/routes";

/* ========================================================================== */
/*  Índice de experiencias                                                    */
/* ========================================================================== */

export function WorkIndex({ dict, locale }: { dict: Dictionary; locale: Locale }) {
  return (
    <>
      <PageHero
        eyebrow={dict.work.hero.eyebrow}
        title={dict.work.hero.title}
        lead={dict.work.hero.lead}
        locale={locale}
      />

      <Section className="py-[clamp(3rem,7vh,5rem)]">
        <div className="container-bl">
          <AnswerBlock question={dict.work.answer.question} body={dict.work.answer.body} />
        </div>
      </Section>

      <Section className="pb-[var(--spacing-section)]">
        <div className="container-bl">
          <h2 className="eyebrow border-t hairline pt-5 opacity-40">{dict.work.listTitle}</h2>

          <ul className="mt-4">
            {CASE_KEYS.map((key) => {
              const item = dict.case[key];
              return (
                <li key={key} data-rise>
                  <Link
                    href={href(`case:${key}`, locale)}
                    className="group grid-bl items-start gap-y-5 border-b hairline py-10 transition-colors duration-500 hover:bg-ink/[0.03]"
                  >
                    <div className="col-span-12 md:col-span-3">
                      <span className="display block text-h3 transition-[color,transform] duration-500 ease-[var(--ease-out-expo)] group-hover:translate-x-2 group-hover:text-blue">
                        {item.client}
                      </span>
                      <span className="eyebrow mt-2 block opacity-40">{item.sector}</span>
                    </div>

                    <div className="col-span-12 md:col-span-6">
                      <h3 className="text-lead max-w-[34ch]">{item.title}</h3>
                      <p className="mt-3 max-w-[54ch] text-micro opacity-60">{item.summary}</p>
                    </div>

                    <div className="col-span-12 flex items-center justify-between gap-4 md:col-span-2 md:col-start-11 md:flex-col md:items-end md:gap-3">
                      <span className="eyebrow opacity-40">{item.year}</span>
                      <span className="eyebrow opacity-0 transition-opacity duration-500 group-hover:opacity-70">
                        {dict.common.viewCase} →
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </Section>

      <CtaBand dict={dict} locale={locale} />
    </>
  );
}

/* ========================================================================== */
/*  Detalle de un caso                                                        */
/* ========================================================================== */

export function CaseDetail({
  dict,
  locale,
  caseKey,
}: {
  dict: Dictionary;
  locale: Locale;
  caseKey: CaseKey;
}) {
  const item = dict.case[caseKey];
  const others = CASE_KEYS.filter((key) => key !== caseKey);

  return (
    <>
      <PageHero
        eyebrow={item.client}
        title={item.title}
        lead={item.summary}
        locale={locale}
        breadcrumb={[{ label: dict.work.hero.eyebrow, routeKey: "work" }]}
        current={item.client}
        aside={
          <dl className="flex flex-col gap-5 border-t hairline pt-5 text-micro">
            <div>
              <dt className="eyebrow opacity-35">{dict.common.sector}</dt>
              <dd className="mt-1.5 opacity-75">{item.sector}</dd>
            </div>
            <div>
              <dt className="eyebrow opacity-35">{dict.common.year}</dt>
              <dd className="mt-1.5 opacity-75">{item.year}</dd>
            </div>
            <div>
              <dt className="eyebrow opacity-35">{dict.common.stack}</dt>
              <dd className="mt-1.5 opacity-75">{item.stack.join(" · ")}</dd>
            </div>
          </dl>
        }
      />

      <Section className="py-[clamp(3rem,7vh,5rem)]">
        <div className="container-bl">
          <AnswerBlock question={item.answer.question} body={item.answer.body} />
        </div>
      </Section>

      {item.metrics.length > 0 && (
        <Section theme="dark" className="py-[clamp(3rem,8vh,5rem)]">
          <div className="container-bl">
            <dl className="grid gap-10 md:grid-cols-2">
              {item.metrics.map((metric) => (
                <div key={metric.label} data-rise>
                  <dt className="sr-only">{metric.label}</dt>
                  <dd>
                    <span className="display block text-h1 leading-none text-yellow">
                      {metric.value}
                    </span>
                    <span className="mt-4 block max-w-[32ch] text-micro opacity-60">
                      {metric.label}
                    </span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </Section>
      )}

      <Section className="py-[var(--spacing-section)]">
        <div className="container-bl flex flex-col gap-20">
          <Block title={dict.common.challenge}>
            <ul className="flex flex-col gap-4">
              {item.challenge.map((line) => (
                <li key={line} className="text-lead max-w-[54ch] opacity-75" data-rise>
                  {line}
                </li>
              ))}
            </ul>
          </Block>

          <Block title={dict.common.delivered}>
            <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">
              {item.delivered.map((entry, i) => (
                <article key={entry.title} data-rise className="flex flex-col gap-3">
                  <span className="eyebrow opacity-30">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="display text-h4">{entry.title}</h3>
                  <p className="max-w-[44ch] opacity-70">{entry.body}</p>
                </article>
              ))}
            </div>
          </Block>

          <Block title={dict.common.outcome}>
            <ul className="flex flex-col">
              {item.outcome.map((line) => (
                <li
                  key={line}
                  data-rise
                  className="border-b hairline py-6 text-lead first:border-t first:border-current/15"
                >
                  {line}
                </li>
              ))}
            </ul>
          </Block>
        </div>
      </Section>

      {item.quote && (
        <Section theme="blue" className="py-[var(--spacing-section)]">
          <div className="container-bl">
            <figure className="mx-auto max-w-4xl text-center">
              <blockquote className="display text-h2" data-rise>
                “{item.quote.text}”
              </blockquote>
              <figcaption className="eyebrow mt-10 opacity-70" data-rise>
                {item.quote.author} · {item.quote.role}
              </figcaption>
            </figure>
          </div>
        </Section>
      )}

      <Section className="py-[var(--spacing-section)]">
        <div className="container-bl">
          <h2 className="eyebrow border-t hairline pt-5 opacity-40">{dict.work.listTitle}</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {others.map((key) => (
              <Link
                key={key}
                href={href(`case:${key}`, locale)}
                data-rise
                className="group flex items-center justify-between gap-6 rounded-[var(--radius-card)] border hairline p-8 transition-colors duration-500 hover:border-blue/50"
              >
                <span>
                  <span className="eyebrow opacity-35">{dict.case[key].sector}</span>
                  <span className="display mt-3 block text-h3">{dict.case[key].client}</span>
                </span>
                <span
                  aria-hidden="true"
                  className="text-h3 opacity-25 transition-[opacity,transform] duration-500 group-hover:translate-x-1 group-hover:opacity-70"
                >
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

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid-bl gap-y-6">
      <h2 className="display col-span-12 text-h3 lg:col-span-3" data-rise>
        {title}
      </h2>
      <div className="col-span-12 lg:col-span-8 lg:col-start-5">{children}</div>
    </section>
  );
}
