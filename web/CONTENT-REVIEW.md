# Revisión de contenido antes de publicar

Todo el copy del sitio salió de fuentes propias de Bitlogic. Este documento
lista cada afirmación verificable con su origen, y separa lo que puede salir tal
cual de lo que necesita que alguien confirme.

El criterio con el que se escribió: **si un dato no estaba en una fuente propia,
no entró**. No hay métricas inventadas en ningún caso de estudio. Eso importa
más que de costumbre: el sitio está construido para que los motores generativos
lo citen textual, y un número inventado se propaga sin control.

---

## Verificado — sale como está

| Afirmación | Dónde aparece | Fuente |
|---|---|---|
| Fundada en Córdoba en 2016 por tres amigos | Home, Nosotros, `llms.txt` | Handbook `bitlogic-home/quienes-somos/nuestra-historia.md` |
| 2017: de 4 a 10 personas, primera mujer en el área técnica | Nosotros (línea de tiempo) | Ídem |
| 2018: se suman HR y Finanzas; nace Bithouse | Nosotros | Ídem |
| Más de 130 personas | Home, Nosotros, `llms.txt` | Handbook `estructura/equipo.md` |
| +50 proyectos de modernización, +30 clientes | Home, Experiencias | es.bitlogic.io (home y Propuesta de valor) |
| AWS Select Partner, Service Delivery en ECS y RDS | Home, Tecnologías, FAQ | Propuesta de valor + sitio actual |
| Partner de Instructure / Canvas LMS | Home, Tecnologías, FAQ | Ídem |
| Sistema de gestión de calidad ISO 9001, auditado | FAQ, Tecnologías | Handbook, sección QMS (auditorías IRAM) |
| Bithouse: 1941, Carlos Carnelli, Patrimonio Arquitectónico de Córdoba | Home, Nosotros | Handbook `cultura/bithouse.md` |
| Dirección: José Roque Funes 1791, Córdoba | Footer, Contacto, JSON-LD | Handbook + sitio actual |
| Manifiesto (texto completo) | Home, Nosotros | Handbook `quienes-somos/manifiesto.md`, textual |
| Valores: Put People First, Grow Everyday, Be Clear, Deliver Excellence, Perform Your Best | Home, Nosotros | Handbook `cultura/culture-deck.md` |
| Visión y misión | Nosotros | Handbook `quienes-somos/proposito-y-valores.md`, textual |
| Claim "EdTech made for humans, by humans" y `#HumanAfterAll` | Todo el sitio | Handbook `comunicacion/recursos-de-marca.md` |
| Paleta 2025 y tipografías del brandbook | Design system | Ídem |
| Board (seis nombres y roles) | Nosotros | Handbook `estructura/equipo.md` |
| Siglo 21: migración a AWS; admisiones en microservicios con Docker y React; pasarela de pagos con Pay Per TIC en menos de un año; exámenes digitales integrados al SIS con proctoring Klarway; portal de estudiantes unificado | Caso Siglo 21 | Notas del blog de es.bitlogic.io sobre cada uno de esos proyectos |
| Siglo 21: aumento récord del 35% en ingresantes | Caso Siglo 21 (métrica) | Declaración de Ezequiel Frascarelli, Director General de Marketing y Comunicación de Siglo 21, citada en el blog |
| TECLAB: experiencia de aprendizaje continua y de alta velocidad, sin interrupciones | Caso TECLAB | es.bitlogic.io, sección EdTech |

---

## Necesita confirmación antes de publicar

1. **Cita de Hugo Colombatto (Director de IT, Universidad Siglo 21).** El texto
   que está en el sitio es una reconstrucción de la cita que publica
   es.bitlogic.io. Antes de publicar hay que copiarla **textual** de la fuente
   original y confirmar que el cargo sigue vigente.
   → `src/content/es.ts` y `en.ts`, `case["universidad-siglo-21"].quote`.

2. **Caso Capabilia.** Es cliente real, pero no hay material público con
   entregables ni resultados. Está escrito en términos cualitativos y
   deliberadamente conservadores: no afirma nada que no se pueda sostener.
   Conviene que quien lleva la cuenta lo lea y, si se puede, sume dos o tres
   hechos concretos (qué se construyó, qué cambió) y una métrica.
   → `case.capabilia` en ambos diccionarios.

3. **Años de las experiencias** (2019, 2021, 2022 — "hoy"). Son estimaciones
   razonables por el orden de las publicaciones, no fechas confirmadas.
   → campo `year` de cada caso.

4. **`hola@bitlogic.io` y el teléfono.** Definir la casilla real que recibe los
   leads. El teléfono que está puesto sale del handbook interno (es el del CEO):
   si no va a ser el número público, sacarlo.
   → `src/content/site.ts`, `SITE.email` / `SITE.phone`.

5. **Coordenadas geográficas** del JSON-LD: son aproximadas al barrio Cerro de
   las Rosas. Reemplazar por las exactas de Google Maps.
   → `src/content/site.ts`, `ADDRESS.geo`.

6. **Perfiles sociales.** `x.com/bitlogicos` y el perfil de Clutch salieron de
   búsqueda; confirmar que son los oficiales y están activos. Van en `sameAs`
   del JSON-LD, así que definen la identidad de la empresa para los motores.
   → `src/content/site.ts`, `SOCIALS`.

7. **Compromisos operativos escritos en la FAQ**: "respondemos en menos de 24
   horas hábiles", "perfiles en dos a tres semanas", "discovery en dos a cuatro
   semanas". Son promesas públicas — que las valide quien las va a cumplir.
   → `dict.faq.items` y `dict.contact.responseTime`.

8. **Stack listado en Tecnologías.** La lista es representativa del trabajo que
   describen los casos, pero no es un inventario auditado. Que ingeniería saque
   lo que no se use y sume lo que falte.
   → `src/content/site.ts`, `TECH_GROUPS`.

---

## Decisiones de contenido que conviene conocer

- **No hay métricas por caso salvo las de Siglo 21**, que son públicas. Los
  bloques de métricas se renderizan sólo si el array `metrics` tiene elementos:
  agregar números después es una línea por caso, sin tocar componentes.
- **El blog no se migró.** La página existe y enlaza al blog actual. Migrar el
  contenido de Strapi es un proyecto aparte, y es la palanca más grande que
  queda para GEO.
- **Los nombres de clientes se usan sin logos.** Si hay autorización de uso de
  marca, los logos suman credibilidad en la home.
- **El sitio se dirige a personas y tutea**, en primera persona del plural y sin
  marca de género, siguiendo `bitlogic-home/comunicacion/estilos/`. Los clientes
  se nombran "organizaciones" o "instituciones educativas", nunca "corporación",
  "negocio" ni "firma".
