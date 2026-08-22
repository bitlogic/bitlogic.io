/**
 * Listado de preguntas frecuentes.
 *
 * A propósito NO es un acordeón. Un acordeón esconde el 90% del texto detrás
 * de un click y, junto con el JSON-LD de `FAQPage`, es la forma más común de
 * perder las citas: el motor ve el marcado pero el usuario que llega no
 * encuentra la respuesta. Acá todo está abierto y en HTML plano.
 */
export default function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <dl className="border-t hairline">
      {items.map((item, i) => (
        <div key={item.q} className="grid-bl gap-y-3 border-b hairline py-9" data-rise>
          <span className="eyebrow col-span-12 opacity-30 md:col-span-1">
            {String(i + 1).padStart(2, "0")}
          </span>
          <dt className="display col-span-12 text-h4 md:col-span-4">{item.q}</dt>
          <dd className="col-span-12 max-w-[58ch] opacity-70 md:col-span-6 md:col-start-6">
            {item.a}
          </dd>
        </div>
      ))}
    </dl>
  );
}
