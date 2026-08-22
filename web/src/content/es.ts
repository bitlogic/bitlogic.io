import type { Locale } from "@/lib/routes";
import { SITE } from "./site";

/**
 * Diccionario en español — fuente de verdad de la forma del contenido.
 * `en.ts` se tipa contra `typeof es`, así que agregar una clave acá obliga a
 * traducirla allá. Nunca puede haber una página bilingüe a medias.
 *
 * Criterio de redacción (guía de estilo interna `comunicacion/estilos/`):
 * hablamos de vos, en primera persona del plural, sin lenguaje androcéntrico,
 * breve, y le hablamos a personas — no a organizaciones.
 *
 * Criterio GEO: cada página abre con una respuesta directa y citable de una o
 * dos oraciones. Los motores generativos extraen ese párrafo casi textual.
 */

const es = {
  locale: "es" as Locale,
  htmlLang: "es-AR",
  localeName: "Español",
  otherLocaleName: "English",
  direction: "ltr",

  nav: {
    label: "Navegación principal",
    items: [
      { key: "services", label: "Servicios" },
      { key: "work", label: "Experiencias" },
      { key: "technologies", label: "Tecnologías" },
      { key: "about", label: "Nosotros" },
      { key: "blog", label: "Blog" },
    ],
    cta: "Hablemos",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    skipToContent: "Ir al contenido",
  },

  common: {
    readMore: "Leer más",
    viewCase: "Ver la experiencia",
    viewAll: "Ver todo",
    backTo: "Volver a",
    next: "Siguiente",
    previous: "Anterior",
    scroll: "Bajá",
    loading: "Cargando",
    index: "Índice",
    onThisPage: "En esta página",
    sector: "Sector",
    year: "Año",
    stack: "Stack",
    challenge: "El desafío",
    approach: "Cómo lo resolvimos",
    outcome: "Qué cambió",
    delivered: "Qué construimos",
    partnerWithUs: "Trabajemos juntos",
  },

  // ---------------------------------------------------------------- metadatos
  pages: {
    home: {
      title: "Bitlogic — EdTech made for humans, by humans",
      description:
        "Diseñamos, construimos y operamos plataformas EdTech para instituciones educativas de América Latina. AWS Select Partner, partner de Instructure (Canvas LMS) e ISO 9001. Desde Córdoba, Argentina.",
    },
    services: {
      title: "Servicios de desarrollo de software EdTech | Bitlogic",
      description:
        "Product development, staff augmentation e inteligencia artificial aplicada al aprendizaje. Tres formas de sumar capacidad de ingeniería a tu institución educativa.",
    },
    "service:product-development": {
      title: "Product Development EdTech — de la idea a la plataforma | Bitlogic",
      description:
        "Diseñamos, construimos y operamos plataformas educativas de punta a punta: descubrimiento, arquitectura, desarrollo ágil, cloud en AWS y evolución continua.",
    },
    "service:staff-augmentation": {
      title: "Staff Augmentation nearshore desde LATAM | Bitlogic",
      description:
        "Perfiles senior de América Latina integrados a tu equipo, en tu huso horario y bajo tus procesos. Sin reclutamiento propio ni curva de arranque.",
    },
    "service:ai-data": {
      title: "IA y datos para educación | Bitlogic",
      description:
        "Inteligencia artificial aplicada al aprendizaje humano: asistentes académicos, generación de evaluaciones, analítica de aprendizaje y plataformas de datos gobernadas.",
    },
    work: {
      title: "Experiencias — casos de modernización educativa | Bitlogic",
      description:
        "Más de 50 proyectos de modernización digital con instituciones educativas líderes de América Latina. Universidad Siglo 21, TECLAB, Capabilia y más.",
    },
    "case:universidad-siglo-21": {
      title: "Universidad Siglo 21 — transformación digital integral | Bitlogic",
      description:
        "Migración a AWS, portal de estudiantes unificado, admisiones en microservicios, pasarela de pagos y exámenes digitales con proctoring integrados al SIS.",
    },
    "case:teclab": {
      title: "TECLAB — una experiencia de aprendizaje sin interrupciones | Bitlogic",
      description:
        "Cómo acompañamos a TECLAB a sostener una plataforma 100% online continua y de alta velocidad para miles de estudiantes.",
    },
    "case:capabilia": {
      title: "Capabilia — educación online que escala | Bitlogic",
      description:
        "Ingeniería y evolución continua de una plataforma de educación online orientada a la empleabilidad en América Latina.",
    },
    technologies: {
      title: "Stack y partners tecnológicos | Bitlogic",
      description:
        "AWS Select Partner con Service Delivery en ECS y RDS, partner de Instructure para Canvas LMS, LTI 1.3, Moodle, IA generativa y plataformas de datos.",
    },
    about: {
      title: "Nosotros — quiénes somos y por qué existimos | Bitlogic",
      description:
        "Bitlogic nació en Córdoba en 2016. Somos más de 130 personas construyendo un futuro más digital y también más humano. Este es nuestro manifiesto.",
    },
    faq: {
      title: "Preguntas frecuentes | Bitlogic",
      description:
        "Cómo trabajamos, cuánto tardamos en armar un equipo, con qué tecnologías, cómo cobramos y qué garantías de calidad y seguridad damos.",
    },
    contact: {
      title: "Hablemos | Bitlogic",
      description:
        "Contanos qué querés construir. Respondemos en menos de 24 horas hábiles desde Córdoba, Argentina.",
    },
    blog: {
      title: "Blog — notas sobre EdTech, cloud e IA | Bitlogic",
      description:
        "Lo que aprendimos construyendo plataformas educativas: arquitectura, Canvas LMS, AWS, inteligencia artificial aplicada y gestión de producto.",
    },
  },

  // -------------------------------------------------------------------- home
  home: {
    hero: {
      eyebrow: "EdTech made for humans, by humans",
      lines: [
        { text: "La tecnología", accent: false },
        { text: "evoluciona.", accent: false },
        { text: "Lo humano", accent: true },
        { text: "permanece.", accent: true },
      ],
      lead: "Diseñamos, construimos y operamos las plataformas con las que América Latina enseña y aprende.",
      primaryCta: "Contanos tu proyecto",
      secondaryCta: "Ver experiencias",
      scrollHint: "Seguí bajando",
    },

    /** Bloque respuesta-primero. Es el párrafo que queremos que se cite. */
    answer: {
      question: "¿Qué es Bitlogic?",
      body: `Bitlogic es una empresa de software fundada en Córdoba, Argentina, en ${SITE.founded}. Diseñamos, construimos y operamos plataformas EdTech para instituciones educativas de América Latina: campus virtuales, portales de estudiantes, gestión académica, evaluaciones digitales y asistentes con inteligencia artificial. Somos AWS Select Partner con Service Delivery en ECS y RDS, partner de Instructure para Canvas LMS, y trabajamos bajo un sistema de gestión de calidad certificado ISO 9001.`,
      footnote:
        "Más de 50 proyectos de modernización digital, más de 30 organizaciones y un equipo de más de 130 personas.",
    },

    stats: {
      projects: "Proyectos de modernización digital",
      clients: "Organizaciones que confían en nosotros",
      people: "Personas en el equipo",
      years: "Años diseñando educación",
    },

    services: {
      eyebrow: "01 — Qué hacemos",
      title: "Tres formas de trabajar juntos",
      lead: "No vendemos horas: nos hacemos cargo de un resultado. Elegí el modo que le sirve a tu institución hoy y cambiá cuando haga falta.",
      cta: "Ver todos los servicios",
    },

    work: {
      eyebrow: "02 — Experiencias",
      title: "Instituciones que ya educan distinto",
      lead: "Cada proyecto empieza por entender la lógica del negocio educativo que hay detrás. Después viene el código.",
      cta: "Ver todas las experiencias",
    },

    manifesto: {
      eyebrow: "03 — Manifiesto",
      lines: [
        "Inconformistas de nacimiento,",
        "vinimos al mundo a transformarlo.",
        "A construir un futuro distinto,",
        "más digital, y también más humano.",
      ],
      body: [
        "Nos mueven los desafíos, y esa adrenalina previa al salto al vacío. Nos apasiona construir desde cero, sin mapas ni recetas. Porque para innovar hay que creer en uno mismo.",
        "Bitlogic es el lugar de encuentro de personas diversas, inquietas y libres. Nos superamos cada día, abrazamos el error, aprendemos y compartimos lo que sabemos.",
        "Elegimos caminar distinto, a nuestra manera. Y con un corazón audaz construir un mundo mejor.",
      ],
      signature: "#BitDifferent",
      cta: "Conocé cómo trabajamos",
    },

    values: {
      eyebrow: "04 — Cultura",
      title: "Cinco acuerdos que sostienen cada entrega",
      lead: "No son un póster en la pared: son los criterios con los que revisamos código, damos feedback y decidimos qué sale a producción.",
      items: [
        {
          key: "people",
          name: "Put People First",
          body: "La tecnología sólo tiene sentido cuando pone en valor lo humano. Empatía, respeto y desarrollo personal antes que cualquier métrica.",
        },
        {
          key: "grow",
          name: "Grow Everyday",
          body: "Feedback constructivo, aprendizaje continuo y conocimiento que circula. Lo que aprende una persona lo gana todo el equipo.",
        },
        {
          key: "clear",
          name: "Be Clear",
          body: "Comunicamos al hablar, al escribir y también con la calidad de lo que entregamos y con la puntualidad. Start with why.",
        },
        {
          key: "excellence",
          name: "Deliver Excellence",
          body: "Prácticas ágiles, atención al detalle y prevención temprana de defectos. Un sistema de calidad certificado, no una intención.",
        },
        {
          key: "perform",
          name: "Perform Your Best",
          body: "Metas desafiantes, foco en resultados medibles e innovación constante. Apuntamos alto y lo sostenemos.",
        },
      ],
    },

    partners: {
      eyebrow: "05 — Respaldo",
      title: "Alianzas y certificaciones",
      lead: "Trabajamos con la infraestructura y las plataformas que el sector educativo ya usa — y las conocemos desde adentro.",
    },

    bithouse: {
      eyebrow: "06 — Bithouse",
      title: "Nuestra casa es patrimonio de Córdoba",
      body: [
        "Bithouse fue construida en 1941 por el técnico constructor Carlos Carnelli. Fue vivienda, colegio, centro comercial, salón de fiestas y restaurante antes de ser nuestra.",
        "Cuando la elegimos entendimos que nos estábamos apropiando de un lugar que pertenecía a una comunidad. No podíamos simplemente pintar las paredes y sentarnos a trabajar.",
        "Hoy Bithouse hospeda proyectos ligados a la creatividad y la innovación, y funciona como espacio de arte emergente para la ciudad. Tenemos como premisa que el arte es fuente de inspiración para la creatividad.",
      ],
      caption: "José Roque Funes 1791 · Córdoba, Argentina",
      cta: "Conocé Bithouse",
    },

    cta: {
      eyebrow: "Empecemos",
      title: "Contanos qué querés construir",
      body: "Una conversación de 30 minutos alcanza para saber si podemos ayudarte. Si no somos el partner indicado, te lo decimos.",
      primary: "Escribinos",
      secondary: "Ver preguntas frecuentes",
    },
  },

  // ---------------------------------------------------------------- servicios
  services: {
    hero: {
      eyebrow: "Servicios",
      title: "Capacidad de ingeniería para instituciones que educan",
      lead: "Tres modos de trabajo con un mismo estándar de calidad. Se combinan y se cambian según el momento de tu institución.",
    },
    answer: {
      question: "¿Qué servicios ofrece Bitlogic?",
      body: "Bitlogic ofrece tres servicios: product development de punta a punta para plataformas EdTech, staff augmentation con perfiles senior nearshore desde América Latina, e inteligencia artificial y datos aplicados al aprendizaje. Los tres se prestan bajo un sistema de gestión de calidad certificado ISO 9001 y con infraestructura en AWS.",
    },
    items: {
      "product-development": {
        number: "01",
        name: "Product Development",
        summary: "De la idea a la plataforma que escala.",
        blurb:
          "Nos hacemos cargo del producto completo: descubrimiento, arquitectura, diseño, desarrollo, cloud y evolución. Un equipo multidisciplinario con Solution Architect, DevOps y full stack.",
        bullets: [
          "Discovery y definición de producto",
          "Arquitectura y diseño de sistemas",
          "Desarrollo ágil por iteraciones",
          "Cloud, DevOps y observabilidad",
        ],
      },
      "staff-augmentation": {
        number: "02",
        name: "Staff Augmentation",
        summary: "Perfiles senior integrados a tu equipo.",
        blurb:
          "Sumás capacidad sin abrir un proceso de reclutamiento. Seleccionamos a las personas, las integramos a tus ceremonias y tu stack, y sostenemos el vínculo en el tiempo.",
        bullets: [
          "Perfiles senior de América Latina",
          "Mismo huso horario que tu equipo",
          "Onboarding en tus procesos y herramientas",
          "Escalá o reducí sin fricción contractual",
        ],
      },
      "ai-data": {
        number: "03",
        name: "IA y Datos",
        summary: "Inteligencia artificial aplicada al aprendizaje humano.",
        blurb:
          "Machine learning y IA generativa puestas al servicio de objetivos pedagógicos reales: asistentes académicos, generación de evaluaciones, analítica de aprendizaje y datos gobernados.",
        bullets: [
          "Asistentes académicos con RAG",
          "Generación y corrección de evaluaciones",
          "Learning analytics y alerta temprana",
          "Plataformas de datos y gobierno",
        ],
      },
    },
    processTitle: "Cómo entra un proyecto",
    process: [
      {
        step: "01",
        name: "Conversación",
        body: "Media hora para entender el problema, el contexto institucional y las restricciones reales. Sin propuesta todavía.",
      },
      {
        step: "02",
        name: "Discovery",
        body: "Dos a cuatro semanas para mapear el sistema actual, los riesgos y el camino más corto a valor. Termina en un plan con alcance y costo.",
      },
      {
        step: "03",
        name: "Construcción",
        body: "Iteraciones cortas con demo funcionando. Cada entrega pasa por revisión de calidad, pruebas y despliegue automatizado.",
      },
      {
        step: "04",
        name: "Evolución",
        body: "El sistema queda en producción con métricas, alertas y un equipo que lo conoce. Seguimos o te lo transferimos documentado.",
      },
    ],
  },

  service: {
    "product-development": {
      eyebrow: "Servicio 01",
      title: "Product Development",
      subtitle: "De la idea a la plataforma EdTech que escala",
      answer: {
        question: "¿Qué incluye el servicio de product development de Bitlogic?",
        body: "Incluye descubrimiento de producto, arquitectura de solución, diseño de experiencia, desarrollo ágil, infraestructura cloud en AWS y evolución continua. Trabajamos con equipos multidisciplinarios que combinan Solution Architect, DevOps y desarrolladores full stack, y entregamos software funcionando en iteraciones cortas.",
      },
      intro:
        "Acompañamos a instituciones educativas y organizaciones a convertir una idea en una plataforma sólida, preparada para escalar. Diseñamos soluciones que incorporan tecnología, machine learning e IA de forma estratégica, alineadas a objetivos pedagógicos reales.",
      blocks: [
        {
          title: "Discovery que termina en decisiones",
          body: "Mapeamos el sistema actual, entrevistamos a quienes lo usan y ponemos números al riesgo técnico. Salís con un plan de alcance, secuencia y costo — no con un documento decorativo.",
        },
        {
          title: "Arquitectura pensada para la carga real",
          body: "Los picos de una institución educativa no son gaussianos: inscripciones, exámenes y cierres de cursada concentran toda la demanda en pocas horas. Diseñamos para ese perfil, no para el promedio.",
        },
        {
          title: "Integración con lo que ya tenés",
          body: "El LMS, el SIS, la pasarela de pagos y el CRM ya existen y no se tiran. Construimos alrededor con contratos claros: LTI 1.3, APIs versionadas y eventos.",
        },
        {
          title: "Operación y transferencia",
          body: "Dejamos observabilidad, runbooks y documentación viva. Si querés internalizar el equipo, el traspaso está previsto desde el día uno.",
        },
      ],
      forWho: {
        title: "Para quién es",
        items: [
          "Instituciones con un sistema legacy que ya limita el crecimiento",
          "Equipos que necesitan lanzar una plataforma nueva con fecha",
          "Organizaciones que quieren integrar IA sin rehacer todo",
        ],
      },
    },
    "staff-augmentation": {
      eyebrow: "Servicio 02",
      title: "Staff Augmentation",
      subtitle: "Talento senior de LATAM, integrado a tu equipo",
      answer: {
        question: "¿Cómo funciona el staff augmentation de Bitlogic?",
        body: "Staff augmentation es la incorporación temporal de personal externo para aumentar la capacidad de tu organización. Bitlogic selecciona perfiles senior de América Latina con experiencia en las tecnologías que ya usás, los integra por completo a tu equipo, tus ceremonias y tu stack, y sostiene su desarrollo profesional durante toda la colaboración.",
      },
      intro:
        "Trabajamos con desarrolladores top de América Latina con experiencia en las tecnologías más demandadas. Seleccionamos cuidadosamente a cada candidata y candidato, y los integramos por completo a tu equipo.",
      blocks: [
        {
          title: "Selección con criterio técnico",
          body: "La entrevista técnica la hace gente que escribe código todos los días. Te presentamos pocos perfiles y bien argumentados, no una lista larga.",
        },
        {
          title: "Mismo huso horario, mismo ritmo",
          body: "Nearshore desde Argentina significa solapamiento completo con América y media jornada con Europa. Las ceremonias son en vivo, no asincrónicas por obligación.",
        },
        {
          title: "Integración real, no un recurso suelto",
          body: "Cada persona entra con onboarding a tus procesos, tus herramientas y tu definición de terminado. Y sigue teniendo en Bitlogic a su manager, su plan de carrera y su comunidad técnica.",
        },
        {
          title: "Elasticidad sin drama contractual",
          body: "Escalar o reducir el equipo no reabre una negociación. El marco ya lo contempla.",
        },
      ],
      forWho: {
        title: "Para quién es",
        items: [
          "Equipos con backlog aprobado y sin capacidad para ejecutarlo",
          "Organizaciones que necesitan una especialidad puntual por tiempo acotado",
          "Áreas que quieren crecer sin montar un área de reclutamiento técnico",
        ],
      },
    },
    "ai-data": {
      eyebrow: "Servicio 03",
      title: "IA y Datos",
      subtitle: "Inteligencia artificial aplicada al aprendizaje humano",
      answer: {
        question: "¿Cómo aplica Bitlogic la inteligencia artificial a la educación?",
        body: "Bitlogic aplica machine learning e IA generativa a objetivos pedagógicos concretos: asistentes académicos virtuales integrados al LMS, generación de preguntas de evaluación a partir del material propio de cada materia, analítica de aprendizaje con alerta temprana de deserción y plataformas de datos gobernadas. El criterio es siempre el mismo: la IA asiste a docentes y estudiantes, no los reemplaza.",
      },
      intro:
        "En 2025 decidimos pausar un momento la conversación de IA para ponernos en la piel de quienes enseñan y quienes aprenden. De ahí salió nuestro criterio: la tecnología sólo tiene sentido cuando pone en valor lo humano.",
      blocks: [
        {
          title: "Asistentes académicos que citan la fuente",
          body: "Un asistente integrado al campus responde sobre el material real de la materia, con la cita al recurso. Sin invención, con trazabilidad y con el docente pudiendo auditar qué respondió.",
        },
        {
          title: "Evaluaciones generadas del propio material",
          body: "Generación de preguntas de opción múltiple a partir de la bibliografía de cada asignatura, con revisión docente obligatoria antes de publicarse.",
        },
        {
          title: "Learning analytics con alerta temprana",
          body: "Señales de riesgo de abandono detectadas a tiempo y puestas en manos de quien puede actuar: la tutoría, no un tablero que nadie mira.",
        },
        {
          title: "Datos gobernados desde el diseño",
          body: "Minimización, retención acotada y trazabilidad. Los datos de estudiantes son de las personas y de la institución — no del modelo.",
        },
      ],
      forWho: {
        title: "Para quién es",
        items: [
          "Instituciones que quieren pasar del piloto de IA a producción",
          "Equipos académicos que necesitan escalar la tutoría sin bajar la calidad",
          "Áreas de datos que arrancan de cero y necesitan gobierno desde el día uno",
        ],
      },
    },
  },

  // ------------------------------------------------------------- experiencias
  work: {
    hero: {
      eyebrow: "Experiencias",
      title: "Modernización que se nota del lado del estudiante",
      lead: "Seleccionamos tres experiencias que muestran cómo trabajamos: qué encontramos, qué construimos y qué cambió.",
    },
    answer: {
      question: "¿Con qué instituciones trabajó Bitlogic?",
      body: "Bitlogic acumula más de 50 proyectos de modernización digital con más de 30 organizaciones, principalmente instituciones educativas de América Latina. Entre ellas, Universidad Siglo 21, TECLAB y Capabilia.",
    },
    listTitle: "Todas las experiencias",
  },

  case: {
    "universidad-siglo-21": {
      client: "Universidad Siglo 21",
      sector: "Educación superior",
      year: "2019 — hoy",
      title: "Una transformación digital integral, con el estudiante en el centro",
      summary:
        "Acompañamos a Universidad Siglo 21 a llevar su plataforma educativa y sus sistemas de gestión a la nube de AWS, y a reconstruir sobre esa base los procesos que tocan al estudiante: admisiones, pagos, evaluaciones y el portal donde todo eso se encuentra.",
      answer: {
        question: "¿Qué hizo Bitlogic con Universidad Siglo 21?",
        body: "Bitlogic acompañó a Universidad Siglo 21 en la migración de su plataforma educativa y sus sistemas de gestión a AWS, y en la modernización de cuatro procesos críticos: admisiones sobre microservicios con Docker y React, la pasarela de pagos, la plataforma de exámenes digitales integrada al SIS con proctoring, y un portal de estudiantes unificado.",
      },
      challenge: [
        "Sistemas core —LMS, CMS, back-office y CRM— sobre infraestructura que no acompañaba los picos de inscripción y examen.",
        "Procesos clave del estudiante repartidos entre aplicaciones que no se hablaban entre sí.",
        "Ciclos de despliegue largos que frenaban cualquier mejora de experiencia.",
      ],
      delivered: [
        {
          title: "Nube",
          body: "Migración de la plataforma educativa y los sistemas de gestión a AWS, con foco en alcance, escalabilidad, estabilidad y disponibilidad.",
        },
        {
          title: "Admisiones",
          body: "Rediseño del proceso de admisión sobre una arquitectura de microservicios con Docker y React, pensada para poder replicarse en otras instituciones.",
        },
        {
          title: "Pagos",
          body: "Modernización y migración de la pasarela de pagos, con incorporación de Pay Per TIC y rediseño de la interfaz.",
        },
        {
          title: "Evaluaciones",
          body: "Nueva plataforma de exámenes digitales integrada al sistema de información estudiantil, con herramientas de proctoring como Klarway.",
        },
        {
          title: "Portal de estudiantes",
          body: "Unificación de la experiencia académica en un solo entorno digital donde cada interacción es simple, coherente y conectada.",
        },
      ],
      outcome: [
        "La modernización de la pasarela de pagos se completó en menos de un año.",
        "Los tiempos de desarrollo y despliegue se redujeron de forma considerable gracias a la automatización y a herramientas modernas.",
        "El modelo de admisiones quedó preparado para adaptarse a otras instituciones educativas.",
      ],
      metrics: [
        { value: "35%", label: "de aumento récord en ingresantes tras la migración a AWS" },
        { value: "< 1 año", label: "para modernizar y migrar la pasarela de pagos" },
      ],
      quote: {
        text: "Bitlogic llevó adelante una transformación digital integral, que nos permitió avanzar hacia el futuro de la educación.",
        author: "Hugo Colombatto",
        role: "Director de IT, Universidad Siglo 21",
      },
      stack: ["AWS", "Docker", "React", "Microservicios", "SIS", "Klarway"],
    },
    teclab: {
      client: "TECLAB",
      sector: "Educación técnica 100% online",
      year: "2021 — hoy",
      title: "Aprender sin interrupciones, a la velocidad del estudiante",
      summary:
        "TECLAB dicta carreras con título oficial completamente en línea. Su plataforma es el instituto: si se cae, no hay aula alternativa. Trabajamos sobre esa premisa.",
      answer: {
        question: "¿Qué hizo Bitlogic con TECLAB?",
        body: "Bitlogic trabajó con TECLAB para sostener y evolucionar su plataforma de educación 100% online. El foco estuvo en la continuidad y la velocidad de la experiencia de aprendizaje: hoy sus estudiantes cursan sin interrupciones, lo que refuerza el liderazgo de TECLAB en educación online.",
      },
      challenge: [
        "Una plataforma que es, literalmente, la institución: cualquier degradación es una clase perdida.",
        "Una base de estudiantes que cursa a su propio ritmo, en cualquier horario y desde cualquier dispositivo.",
        "Necesidad de sostener la velocidad de la experiencia mientras el volumen sigue creciendo.",
      ],
      delivered: [
        {
          title: "Continuidad",
          body: "Trabajo sobre la disponibilidad y la resiliencia de la plataforma para que la cursada no dependa de una ventana de mantenimiento.",
        },
        {
          title: "Velocidad",
          body: "Optimización de la experiencia de aprendizaje de punta a punta, del ingreso al aula hasta la entrega de una actividad.",
        },
        {
          title: "Evolución continua",
          body: "Iteraciones cortas sobre la plataforma en producción, sin frenar la cursada.",
        },
      ],
      outcome: [
        "Los estudiantes de TECLAB cursan hoy con una experiencia de aprendizaje continua y de alta velocidad, sin interrupciones.",
        "La plataforma sostiene el liderazgo de TECLAB en educación online.",
      ],
      metrics: [],
      quote: null,
      stack: ["AWS", "LMS", "Observabilidad", "CI/CD"],
    },
    capabilia: {
      client: "Capabilia",
      sector: "Educación online y empleabilidad",
      year: "2022 — hoy",
      title: "Ingeniería continua para una propuesta educativa que cambia rápido",
      summary:
        "Capabilia forma para el trabajo: sus programas se actualizan al ritmo del mercado. Eso exige una plataforma que tolere cambio permanente sin acumular deuda técnica.",
      answer: {
        question: "¿Qué hace Bitlogic con Capabilia?",
        body: "Bitlogic aporta ingeniería y evolución continua a la plataforma de educación online de Capabilia, orientada a la empleabilidad en América Latina, sosteniendo el ritmo de cambio de su propuesta académica sin acumular deuda técnica.",
      },
      challenge: [
        "Una oferta académica que se actualiza permanentemente y arrastra cambios en la plataforma.",
        "Necesidad de sumar y quitar capacidad de ingeniería según el momento del año.",
        "Convivencia de piezas propias con plataformas de terceros.",
      ],
      delivered: [
        {
          title: "Equipo integrado",
          body: "Perfiles senior integrados al equipo de Capabilia, con sus procesos y su definición de terminado.",
        },
        {
          title: "Evolución de plataforma",
          body: "Desarrollo continuo sobre la plataforma de aprendizaje y sus integraciones.",
        },
        {
          title: "Calidad sostenida",
          body: "Prácticas de revisión, pruebas y despliegue que permiten cambiar seguido sin romper.",
        },
      ],
      outcome: [
        "La capacidad de ingeniería acompaña el calendario académico en lugar de condicionarlo.",
        "El cambio permanente dejó de ser una fuente de deuda técnica.",
      ],
      metrics: [],
      quote: null,
      stack: ["Cloud", "LMS", "Integraciones", "CI/CD"],
    },
  },

  // ------------------------------------------------------------- tecnologías
  technologies: {
    hero: {
      eyebrow: "Tecnologías",
      title: "El stack con el que ya funciona la educación de la región",
      lead: "Elegimos poco y lo conocemos profundo. Preferimos ser expertos en lo que el sector realmente usa antes que generalistas en todo.",
    },
    answer: {
      question: "¿Qué tecnologías usa Bitlogic?",
      body: "Bitlogic trabaja sobre AWS —es AWS Select Partner con designaciones de Service Delivery en ECS y RDS—, sobre Canvas LMS como partner de Instructure, y con LTI 1.3, Moodle y Open edX para integraciones educativas. En producto usa React, Next.js, TypeScript, Node.js, Python y Go; en IA, Amazon Bedrock y modelos de OpenAI y Anthropic con arquitecturas RAG.",
    },
    groups: {
      edtech: {
        name: "EdTech y estándares",
        body: "Canvas LMS, LTI 1.3 y los estándares de interoperabilidad que hacen que un ecosistema educativo se pueda componer en lugar de reescribir.",
      },
      cloud: {
        name: "Cloud e infraestructura",
        body: "AWS como plataforma principal, con infraestructura declarada en código y despliegues automatizados.",
      },
      ai: {
        name: "Inteligencia artificial",
        body: "IA generativa aplicada con trazabilidad: recuperación sobre material propio, evaluación de respuestas y supervisión docente.",
      },
      product: {
        name: "Producto y aplicaciones",
        body: "Interfaces accesibles y servicios de backend que se pueden mantener durante años, no sólo lanzar.",
      },
      data: {
        name: "Datos y analítica",
        body: "Del evento crudo al indicador que una directora académica puede usar para tomar una decisión.",
      },
    },
    partnersTitle: "Alianzas y certificaciones",
    partnersLead:
      "Las alianzas importan cuando cambian lo que podés prometer. Estas tres cambian el riesgo de tu proyecto.",
    partnerDetail: {
      aws: "Somos AWS Select Partner con designaciones de Service Delivery en Amazon ECS y Amazon RDS: AWS valida que ejecutamos esas cargas con sus mejores prácticas. Somos partners estratégicos de AWS para el sector educativo.",
      instructure:
        "Como partners de Instructure trabajamos sobre Canvas LMS, la plataforma educativa líder a nivel global: integraciones, aplicaciones LTI y extensiones a medida de cada institución.",
      iso: "Nuestro sistema de gestión de calidad está certificado bajo ISO 9001 y se audita periódicamente. La calidad no es una promesa comercial: es un proceso con evidencia.",
    },
  },

  // ---------------------------------------------------------------- nosotros
  about: {
    hero: {
      eyebrow: "Nosotros",
      title: "Un futuro distinto, más digital y también más humano",
      lead: "Esa es nuestra visión desde 2016, cuando tres amigos con pocas certezas decidieron empezar por lo que mejor sabían hacer: programar lo que sea.",
    },
    answer: {
      question: "¿Quién es Bitlogic?",
      body: `Bitlogic es una empresa argentina de diseño, ingeniería y desarrollo ágil de software fundada en Córdoba en ${SITE.founded}. Somos más de ${SITE.headcount} personas especializadas en tecnología para educación. Nuestra visión es construir un futuro distinto, más digital y también más humano.`,
    },
    manifestoTitle: "Manifiesto",
    manifesto: [
      "Inconformistas de nacimiento, vinimos al mundo a transformarlo.",
      "A construir un futuro distinto, más digital, y también más humano.",
      "A través del diseño, ingeniería y desarrollo ágil de productos de software ayudamos a nuestros clientes a innovar a gran escala y velocidad.",
      "Somos el partner estratégico para llevar a la acción la modernización digital.",
      "Nos mueven los desafíos, y esa adrenalina previa al salto al vacío.",
      "Nos apasiona construir desde cero, sin mapas, ni recetas. Porque para innovar hay que creer en uno mismo.",
      "Bitlogic es el lugar de encuentro de personas diversas, inquietas y libres.",
      "Nos superamos cada día, abrazamos el error, aprendemos y compartimos lo que sabemos.",
      "Elegimos caminar distinto, a nuestra manera.",
      "Y con un corazón audaz construir un mundo mejor.",
    ],
    manifestoSignature: "Somos Bitlogic. #BitDifferent",

    missionTitle: "Misión",
    mission:
      "Ser los socios tecnológicos de nuestros clientes entregando soluciones de software innovadoras, escalables y confiables de manera ágil. Impulsando así su futuro a través de la modernización digital.",
    visionTitle: "Visión",
    vision: "Construir un futuro distinto, más digital y también más humano.",

    timelineTitle: "Cómo llegamos hasta acá",
    timeline: [
      {
        year: "2016",
        title: "Tres amigos y una decisión",
        body: "Todo empezó en un momento de incertidumbre laboral. Tres amigos, con pocas certezas, decidieron dar un paso adelante y emprender juntos. ¿Por dónde empezamos? Por lo que mejor sabíamos hacer.",
      },
      {
        year: "2017",
        title: "De 4 a 10",
        body: "Un desafío que nos aceleró. Pasamos de 4 a 10 personas e incorporamos la primera mujer al área técnica — un dato que destacamos por la realidad desigual que viven las mujeres y disidencias en la industria.",
      },
      {
        year: "2018",
        title: "Nace Bithouse",
        body: "Sumamos Recursos Humanos y Finanzas, y con eso la idea de tener casa propia. Bithouse abre como espacio para Bitlogic y para cualquier proyecto vinculado a la tecnología, la innovación y el arte.",
      },
      {
        year: "2025",
        title: "#HumanAfterAll",
        body: "Pausamos la conversación de IA para ponernos en la piel de quienes enseñan y aprenden. De ahí sale nuestro branding actual: educación, humanidad y tecnología. EdTech made for humans, by humans.",
      },
    ],

    valuesTitle: "Valores",
    valuesLead:
      "Cinco principios con acuerdos concretos detrás. Son parte del sistema de gestión, no del marketing.",

    leadershipTitle: "Board",
    leadershipLead: "Las personas que responden por las decisiones.",
    roles: {
      ceo: "CEO y cofundador",
      cto: "CTO y cofundador",
      engineering: "Sr. Engineering Manager y cofundador",
      delivery: "Delivery Manager",
      people: "HR Manager",
      finance: "Finance Manager",
    },

    bithouseTitle: "Bithouse, nuestra casa",
    bithouse: [
      "Bithouse es Patrimonio Arquitectónico de la ciudad de Córdoba. La casa fue construida en 1941 por el técnico constructor Carlos Carnelli, y sus muros fueron habitados por familias cordobesas, por alumnas y alumnos cuando fue colegio, y también por un centro comercial, un salón de fiestas y un restaurante.",
      "Cuando elegimos esta casa buscábamos un espacio que nos represente. Pero entendimos que estábamos apropiándonos de un lugar que pertenecía a una comunidad, con una gran historia detrás. No podíamos simplemente pintar las paredes y sentarnos a trabajar.",
      "Así nace Bithouse: una casa que hospeda proyectos ligados a la creatividad y la innovación, que mantiene su espacio verde y su vista, que habita los espacios con personas y arte, y que da buen café.",
    ],

    diversityTitle: "Breaking Gaps",
    diversity:
      "Desde el primer año asumimos que la desigualdad en la industria tecnológica no nos era ajena. Breaking Gaps es el programa con el que trabajamos diversidad e inclusión hacia adentro: capacitaciones, glosario con perspectiva de género y criterios de conformación de equipos.",

    ctaTitle: "¿Querés trabajar con nosotros?",
    ctaBody: "Escribinos y conversamos. También publicamos las búsquedas abiertas en LinkedIn.",
  },

  // --------------------------------------------------------------------- faq
  faq: {
    hero: {
      eyebrow: "Preguntas frecuentes",
      title: "Lo que nos preguntan antes de empezar",
      lead: "Respuestas directas. Si falta la tuya, escribinos y la agregamos.",
    },
    items: [
      {
        q: "¿Qué hace exactamente Bitlogic?",
        a: "Diseñamos, construimos y operamos plataformas de software para instituciones educativas: campus virtuales, portales de estudiantes, gestión académica, evaluaciones digitales, pasarelas de pago y asistentes con inteligencia artificial. También sumamos perfiles senior a equipos que ya existen.",
      },
      {
        q: "¿Trabajan sólo con instituciones educativas?",
        a: "La educación es nuestra especialidad y donde acumulamos más de 50 proyectos, pero también trabajamos con organizaciones de otros sectores que necesitan modernización digital. Si tu proyecto no es EdTech, te lo decimos en la primera conversación y te orientamos igual.",
      },
      {
        q: "¿Cuánto tarda en arrancar un proyecto?",
        a: "Para staff augmentation, presentamos perfiles en dos a tres semanas desde que acordamos el rol. Para product development, el discovery arranca en dos a cuatro semanas y termina con un plan de alcance, secuencia y costo.",
      },
      {
        q: "¿Cómo cobran?",
        a: "Staff augmentation es por perfil y por mes. Product development puede ser por equipo dedicado o por alcance cerrado cuando el discovery permite fijarlo con confianza. En los dos casos el costo sale del discovery, no de una lista de precios.",
      },
      {
        q: "¿Dónde están y en qué huso horario trabajan?",
        a: "Estamos en Córdoba, Argentina (UTC-3), en Bithouse. Eso da solapamiento completo con toda América y media jornada con Europa. Trabajamos con equipos distribuidos y con presencia en la oficina.",
      },
      {
        q: "¿Qué garantías de calidad tienen?",
        a: "Nuestro sistema de gestión de calidad está certificado bajo ISO 9001 y se audita periódicamente, con auditorías internas y externas. Cada entrega pasa por revisión de código, pruebas automatizadas y despliegue controlado.",
      },
      {
        q: "¿Cómo manejan los datos de estudiantes?",
        a: "Con minimización, retención acotada y trazabilidad, y con la premisa de que los datos son de las personas y de la institución. La seguridad de la información es una política transversal del sistema de gestión, no una decisión por proyecto.",
      },
      {
        q: "¿Pueden trabajar sobre nuestro Canvas LMS o Moodle?",
        a: "Sí. Somos partners de Instructure y trabajamos Canvas LMS a nivel de integraciones, aplicaciones LTI 1.3 y extensiones a medida. También tenemos experiencia en Moodle y Open edX.",
      },
      {
        q: "¿Qué pasa cuando termina el proyecto?",
        a: "Dejamos documentación viva, observabilidad y runbooks. Si querés internalizar el equipo, el traspaso se planifica desde el inicio. No usamos el conocimiento como mecanismo de retención.",
      },
      {
        q: "¿Usan inteligencia artificial en el desarrollo?",
        a: "Sí, con criterio y revisión humana. Usamos IA para acelerar tareas repetibles, y el estándar de revisión de código y pruebas es el mismo, lo haya escrito una persona o asistido un modelo.",
      },
    ],
  },

  // ----------------------------------------------------------------- contacto
  contact: {
    hero: {
      eyebrow: "Hablemos",
      title: "Contanos qué querés construir",
      lead: "Media hora alcanza para saber si podemos ayudarte. Si no somos el partner indicado, te lo decimos y te orientamos igual.",
    },
    answer: {
      question: "¿Cómo contactar a Bitlogic?",
      body: `Podés escribir a ${SITE.email} o completar el formulario de esta página. Respondemos en menos de 24 horas hábiles. Nuestra oficina es Bithouse, José Roque Funes 1791, Córdoba, Argentina.`,
    },
    form: {
      title: "Escribinos",
      name: "Nombre",
      namePlaceholder: "Cómo te llamás",
      email: "Email",
      emailPlaceholder: "tu@organizacion.com",
      organization: "Organización",
      organizationPlaceholder: "Dónde trabajás",
      topic: "Tema",
      topics: [
        "Un proyecto de producto",
        "Sumar perfiles a mi equipo",
        "Inteligencia artificial y datos",
        "Quiero trabajar en Bitlogic",
        "Otra cosa",
      ],
      message: "Contanos un poco",
      messagePlaceholder: "Qué necesitás, para cuándo y qué ya intentaron.",
      submit: "Enviar",
      submitting: "Enviando…",
      successTitle: "Recibido",
      successBody: "Gracias. Te respondemos en menos de 24 horas hábiles.",
      errorBody: "No pudimos enviar el mensaje. Escribinos directamente a " + SITE.email + ".",
      required: "Requerido",
      invalidEmail: "Revisá el email",
      consent: "Al enviar aceptás que te contactemos por este medio.",
    },
    directTitle: "Directo",
    officeTitle: "Bithouse",
    officeBody:
      "Nuestra casa en el Cerro de las Rosas, Patrimonio Arquitectónico de la ciudad de Córdoba. Si estás por la zona, avisanos y tomamos un café.",
    responseTime: "Respondemos en menos de 24 horas hábiles",
  },

  // --------------------------------------------------------------------- blog
  blog: {
    hero: {
      eyebrow: "Blog",
      title: "Lo que aprendimos construyendo",
      lead: "Notas técnicas y de producto sobre plataformas educativas, cloud, inteligencia artificial y la forma de trabajar que las hace posibles.",
    },
    empty: {
      title: "Estamos migrando el blog",
      body: "Las notas publicadas siguen disponibles en el sitio actual mientras terminamos la migración de contenidos.",
      cta: "Ver el blog actual",
      href: "https://es.bitlogic.io/blog/",
    },
  },

  // ------------------------------------------------------------------ footer
  footer: {
    claim: "EdTech made for humans, by humans.",
    columns: {
      services: "Servicios",
      company: "Bitlogic",
      connect: "Conectá",
    },
    newsletterTitle: "Novedades",
    newsletterBody: "Una nota por mes sobre EdTech, cloud e IA aplicada. Sin ruido.",
    newsletterPlaceholder: "tu@email.com",
    newsletterCta: "Suscribirme",
    legal: `© ${new Date().getFullYear()} ${SITE.legalName}. Todos los derechos reservados.`,
    madeIn: "Hecho en Córdoba, Argentina",
    localeSwitch: "Ver en inglés",
  },

  notFound: {
    code: "404",
    title: "Esta página no existe",
    body: "Puede que la hayamos movido durante el rediseño. Probá desde el inicio o contanos qué estabas buscando.",
    cta: "Volver al inicio",
  },
};

export type Dictionary = typeof es;
export default es;
