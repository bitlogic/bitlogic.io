import { SITE } from "./site";
import type { Dictionary } from "./es";

/**
 * English dictionary. Typed against `Dictionary` (inferred from `es.ts`), so
 * TypeScript refuses to build if a key is missing or renamed on one side.
 */

const en: Dictionary = {
  locale: "en",
  htmlLang: "en",
  localeName: "English",
  otherLocaleName: "Español",
  direction: "ltr",

  nav: {
    label: "Main navigation",
    items: [
      { key: "services", label: "Services" },
      { key: "work", label: "Work" },
      { key: "technologies", label: "Technologies" },
      { key: "about", label: "About" },
      { key: "blog", label: "Blog" },
    ],
    cta: "Let's talk",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    skipToContent: "Skip to content",
  },

  common: {
    readMore: "Read more",
    viewCase: "View the case",
    viewAll: "View all",
    backTo: "Back to",
    next: "Next",
    previous: "Previous",
    scroll: "Scroll",
    loading: "Loading",
    index: "Index",
    onThisPage: "On this page",
    sector: "Sector",
    year: "Year",
    stack: "Stack",
    challenge: "The challenge",
    approach: "How we solved it",
    outcome: "What changed",
    delivered: "What we built",
    partnerWithUs: "Work with us",
  },

  pages: {
    home: {
      title: "Bitlogic — EdTech made for humans, by humans",
      description:
        "We design, build and run EdTech platforms for educational institutions across Latin America. AWS Select Partner, Instructure (Canvas LMS) partner, ISO 9001 certified. From Córdoba, Argentina.",
    },
    services: {
      title: "EdTech software development services | Bitlogic",
      description:
        "Product development, staff augmentation, and AI applied to learning. Three ways to add engineering capacity to your institution.",
    },
    "service:product-development": {
      title: "EdTech product development — idea to platform | Bitlogic",
      description:
        "We design, build and run educational platforms end to end: discovery, architecture, agile delivery, AWS cloud and continuous evolution.",
    },
    "service:staff-augmentation": {
      title: "Nearshore staff augmentation from LATAM | Bitlogic",
      description:
        "Senior Latin American engineers embedded in your team, in your time zone and under your process. No recruiting pipeline, no ramp-up tax.",
    },
    "service:ai-data": {
      title: "AI and data for education | Bitlogic",
      description:
        "Artificial intelligence applied to human learning: academic assistants, assessment generation, learning analytics and governed data platforms.",
    },
    work: {
      title: "Work — educational modernization case studies | Bitlogic",
      description:
        "More than 50 digital modernization projects with leading Latin American educational institutions. Universidad Siglo 21, TECLAB, Capabilia and more.",
    },
    "case:universidad-siglo-21": {
      title: "Universidad Siglo 21 — end-to-end digital transformation | Bitlogic",
      description:
        "AWS migration, unified student portal, microservices-based admissions, payment gateway and digital exams with proctoring integrated into the SIS.",
    },
    "case:teclab": {
      title: "TECLAB — a learning experience without interruptions | Bitlogic",
      description:
        "How we helped TECLAB sustain a continuous, high-speed, 100% online platform for thousands of students.",
    },
    "case:capabilia": {
      title: "Capabilia — online education that scales | Bitlogic",
      description:
        "Continuous engineering for an employability-focused online education platform in Latin America.",
    },
    technologies: {
      title: "Technology stack and partners | Bitlogic",
      description:
        "AWS Select Partner with ECS and RDS Service Delivery designations, Instructure partner for Canvas LMS, LTI 1.3, Moodle, generative AI and data platforms.",
    },
    about: {
      title: "About — who we are and why we exist | Bitlogic",
      description:
        "Bitlogic started in Córdoba in 2016. We are more than 130 people building a future that is more digital and also more human. This is our manifesto.",
    },
    faq: {
      title: "Frequently asked questions | Bitlogic",
      description:
        "How we work, how long it takes to staff a team, which technologies we use, how we price, and what quality and security guarantees we offer.",
    },
    contact: {
      title: "Let's talk | Bitlogic",
      description:
        "Tell us what you want to build. We reply within one business day, from Córdoba, Argentina.",
    },
    blog: {
      title: "Blog — notes on EdTech, cloud and AI | Bitlogic",
      description:
        "What we learned building educational platforms: architecture, Canvas LMS, AWS, applied artificial intelligence and product management.",
    },
  },

  home: {
    hero: {
      eyebrow: "EdTech made for humans, by humans",
      lines: [
        { text: "Technology", accent: false },
        { text: "evolves.", accent: false },
        { text: "Humanity", accent: true },
        { text: "remains.", accent: true },
      ],
      lead: "We design, build and run the platforms Latin America teaches and learns on.",
      primaryCta: "Tell us about your project",
      secondaryCta: "See our work",
      scrollHint: "Keep scrolling",
    },

    answer: {
      question: "What is Bitlogic?",
      body: `Bitlogic is a software company founded in Córdoba, Argentina, in ${SITE.founded}. We design, build and run EdTech platforms for educational institutions across Latin America: virtual campuses, student portals, academic management, digital assessment and AI assistants. We are an AWS Select Partner with ECS and RDS Service Delivery designations, an Instructure partner for Canvas LMS, and we operate under an ISO 9001 certified quality management system.`,
      footnote:
        "More than 50 digital modernization projects, more than 30 organizations, and a team of over 130 people.",
    },

    stats: {
      projects: "Digital modernization projects",
      clients: "Organizations that trust us",
      people: "People on the team",
      years: "Years designing education",
    },

    services: {
      eyebrow: "01 — What we do",
      title: "Three ways to work together",
      lead: "We don't sell hours, we own an outcome. Pick the mode that fits your institution today and switch when it stops fitting.",
      cta: "See all services",
    },

    work: {
      eyebrow: "02 — Work",
      title: "Institutions already teaching differently",
      lead: "Every project starts by understanding the educational business logic behind it. The code comes after.",
      cta: "See all our work",
    },

    manifesto: {
      eyebrow: "03 — Manifesto",
      lines: [
        "Nonconformists by birth,",
        "we came into the world to change it.",
        "To build a different future,",
        "more digital, and also more human.",
      ],
      body: [
        "Challenges move us, and that rush right before the leap. We love building from scratch, with no maps and no recipes. Because innovating takes believing in yourself.",
        "Bitlogic is where diverse, restless and free people meet. We push ourselves every day, we embrace error, we learn and we share what we know.",
        "We choose to walk differently, our own way. And with a bold heart, to build a better world.",
      ],
      signature: "#BitDifferent",
      cta: "See how we work",
    },

    values: {
      eyebrow: "04 — Culture",
      title: "Five agreements behind every delivery",
      lead: "Not a poster on a wall: these are the criteria we use to review code, give feedback and decide what ships.",
      items: [
        {
          key: "people",
          name: "Put People First",
          body: "Technology only makes sense when it puts human value first. Empathy, respect and personal growth before any metric.",
        },
        {
          key: "grow",
          name: "Grow Everyday",
          body: "Constructive feedback, continuous learning, and knowledge that circulates. What one person learns, the whole team gains.",
        },
        {
          key: "clear",
          name: "Be Clear",
          body: "We communicate when we speak and write, but also through the quality of what we deliver and through punctuality. Start with why.",
        },
        {
          key: "excellence",
          name: "Deliver Excellence",
          body: "Agile practice, attention to detail and early defect prevention. A certified quality system, not a good intention.",
        },
        {
          key: "perform",
          name: "Perform Your Best",
          body: "Ambitious goals, focus on measurable results and constant innovation. We aim high and we keep it there.",
        },
      ],
    },

    partners: {
      eyebrow: "05 — Credentials",
      title: "Partnerships and certifications",
      lead: "We work with the infrastructure and platforms the education sector already runs on — and we know them from the inside.",
    },

    bithouse: {
      eyebrow: "06 — Bithouse",
      title: "Our house is a heritage building in Córdoba",
      body: [
        "Bithouse was built in 1941 by master builder Carlos Carnelli. It was a home, a school, a shopping arcade, an event hall and a restaurant before it was ours.",
        "When we chose it we understood we were taking over a place that belonged to a community. We couldn't just paint the walls and sit down to work.",
        "Today Bithouse hosts projects tied to creativity and innovation, and works as a space for emerging art in the city. Our premise: art is a source of inspiration for creativity.",
      ],
      caption: "José Roque Funes 1791 · Córdoba, Argentina",
      cta: "About Bithouse",
    },

    cta: {
      eyebrow: "Get started",
      title: "Tell us what you want to build",
      body: "A 30-minute conversation is enough to know whether we can help. If we're not the right partner, we'll say so.",
      primary: "Write to us",
      secondary: "Read the FAQ",
    },
  },

  services: {
    hero: {
      eyebrow: "Services",
      title: "Engineering capacity for institutions that educate",
      lead: "Three ways of working, one quality standard. They combine, and they change as your institution changes.",
    },
    answer: {
      question: "What services does Bitlogic offer?",
      body: "Bitlogic offers three services: end-to-end product development for EdTech platforms, staff augmentation with senior nearshore engineers from Latin America, and artificial intelligence and data applied to learning. All three run under an ISO 9001 certified quality management system and on AWS infrastructure.",
    },
    items: {
      "product-development": {
        number: "01",
        name: "Product Development",
        summary: "From the idea to a platform that scales.",
        blurb:
          "We own the whole product: discovery, architecture, design, development, cloud and evolution. A multidisciplinary team with Solution Architect, DevOps and full stack engineers.",
        bullets: [
          "Discovery and product definition",
          "Architecture and system design",
          "Agile, iteration-based delivery",
          "Cloud, DevOps and observability",
        ],
      },
      "staff-augmentation": {
        number: "02",
        name: "Staff Augmentation",
        summary: "Senior engineers embedded in your team.",
        blurb:
          "Add capacity without opening a recruiting pipeline. We select the people, embed them in your ceremonies and your stack, and keep the relationship healthy over time.",
        bullets: [
          "Senior profiles from Latin America",
          "Same time zone as your team",
          "Onboarded into your process and tooling",
          "Scale up or down without contract friction",
        ],
      },
      "ai-data": {
        number: "03",
        name: "AI and Data",
        summary: "Artificial intelligence applied to human learning.",
        blurb:
          "Machine learning and generative AI put to work on real pedagogical goals: academic assistants, assessment generation, learning analytics and governed data.",
        bullets: [
          "RAG-based academic assistants",
          "Assessment generation and grading support",
          "Learning analytics and early warning",
          "Data platforms and governance",
        ],
      },
    },
    processTitle: "How a project starts",
    process: [
      {
        step: "01",
        name: "Conversation",
        body: "Half an hour to understand the problem, the institutional context and the real constraints. No proposal yet.",
      },
      {
        step: "02",
        name: "Discovery",
        body: "Two to four weeks mapping the current system, the risks and the shortest path to value. It ends in a plan with scope and cost.",
      },
      {
        step: "03",
        name: "Build",
        body: "Short iterations with a working demo. Every delivery goes through quality review, testing and automated deployment.",
      },
      {
        step: "04",
        name: "Evolve",
        body: "The system runs in production with metrics, alerts and a team that knows it. We keep going, or we hand it over documented.",
      },
    ],
  },

  service: {
    "product-development": {
      eyebrow: "Service 01",
      title: "Product Development",
      subtitle: "From the idea to an EdTech platform that scales",
      answer: {
        question: "What does Bitlogic's product development service include?",
        body: "It includes product discovery, solution architecture, experience design, agile development, AWS cloud infrastructure and continuous evolution. We work with multidisciplinary teams combining Solution Architect, DevOps and full stack developers, and we ship working software in short iterations.",
      },
      intro:
        "We help educational institutions and organizations turn an idea into a solid platform, ready to scale. We design solutions that bring in technology, machine learning and AI strategically, aligned with real pedagogical goals.",
      blocks: [
        {
          title: "Discovery that ends in decisions",
          body: "We map the current system, interview the people who use it and put numbers on the technical risk. You leave with a plan for scope, sequence and cost — not a decorative document.",
        },
        {
          title: "Architecture designed for the real load",
          body: "An institution's peaks are not Gaussian: enrolment, exams and term closings concentrate all the demand into a few hours. We design for that profile, not for the average.",
        },
        {
          title: "Integration with what you already run",
          body: "The LMS, the SIS, the payment gateway and the CRM already exist and are not going away. We build around them with clear contracts: LTI 1.3, versioned APIs and events.",
        },
        {
          title: "Operation and handover",
          body: "We leave observability, runbooks and living documentation. If you want to bring the team in-house, the handover is planned from day one.",
        },
      ],
      forWho: {
        title: "Who it's for",
        items: [
          "Institutions whose legacy system already caps their growth",
          "Teams that need to launch a new platform against a date",
          "Organizations that want to add AI without rebuilding everything",
        ],
      },
    },
    "staff-augmentation": {
      eyebrow: "Service 02",
      title: "Staff Augmentation",
      subtitle: "Senior LATAM talent, embedded in your team",
      answer: {
        question: "How does Bitlogic's staff augmentation work?",
        body: "Staff augmentation is the temporary addition of external personnel to increase your organization's capacity. Bitlogic selects senior engineers from Latin America with experience in the technologies you already use, embeds them fully into your team, ceremonies and stack, and supports their professional development throughout the engagement.",
      },
      intro:
        "We work with top developers from Latin America experienced in the most in-demand technologies. We select each candidate carefully and embed them completely into your team.",
      blocks: [
        {
          title: "Selection with technical judgement",
          body: "The technical interview is run by people who write code every day. You get a short, well-argued shortlist, not a long list.",
        },
        {
          title: "Same time zone, same rhythm",
          body: "Nearshore from Argentina means full overlap with the Americas and half a day with Europe. Ceremonies happen live, not asynchronously by necessity.",
        },
        {
          title: "Real integration, not a loose resource",
          body: "Each person is onboarded into your process, your tools and your definition of done. And they keep their manager, career plan and technical community at Bitlogic.",
        },
        {
          title: "Elasticity without contract drama",
          body: "Scaling the team up or down doesn't reopen a negotiation. The framework already covers it.",
        },
      ],
      forWho: {
        title: "Who it's for",
        items: [
          "Teams with an approved backlog and no capacity to execute it",
          "Organizations that need one specialty for a bounded period",
          "Groups that want to grow without building a technical recruiting function",
        ],
      },
    },
    "ai-data": {
      eyebrow: "Service 03",
      title: "AI and Data",
      subtitle: "Artificial intelligence applied to human learning",
      answer: {
        question: "How does Bitlogic apply artificial intelligence to education?",
        body: "Bitlogic applies machine learning and generative AI to concrete pedagogical goals: virtual academic assistants integrated into the LMS, assessment question generation from each subject's own material, learning analytics with early dropout warnings, and governed data platforms. The criterion is always the same: AI assists teachers and students, it does not replace them.",
      },
      intro:
        "In 2025 we paused the AI conversation for a moment to put ourselves in the shoes of the people who teach and the people who learn. Our criterion came out of that: technology only makes sense when it puts human value first.",
      blocks: [
        {
          title: "Academic assistants that cite the source",
          body: "An assistant embedded in the campus answers from the subject's real material, with a citation to the resource. No invention, full traceability, and teachers able to audit every answer.",
        },
        {
          title: "Assessments generated from your own material",
          body: "Multiple-choice question generation from each subject's bibliography, with mandatory teacher review before anything is published.",
        },
        {
          title: "Learning analytics with early warning",
          body: "Dropout risk signals detected in time and put in the hands of the people who can act — tutors, not a dashboard nobody opens.",
        },
        {
          title: "Data governed by design",
          body: "Minimization, bounded retention and traceability. Student data belongs to the people and the institution — not to the model.",
        },
      ],
      forWho: {
        title: "Who it's for",
        items: [
          "Institutions moving an AI pilot into production",
          "Academic teams that need to scale tutoring without losing quality",
          "Data teams starting from zero that need governance from day one",
        ],
      },
    },
  },

  work: {
    hero: {
      eyebrow: "Work",
      title: "Modernization the student can actually feel",
      lead: "Three cases that show how we work: what we found, what we built, and what changed.",
    },
    answer: {
      question: "Which institutions has Bitlogic worked with?",
      body: "Bitlogic has delivered more than 50 digital modernization projects with more than 30 organizations, mostly educational institutions across Latin America — among them Universidad Siglo 21, TECLAB and Capabilia.",
    },
    listTitle: "All case studies",
  },

  case: {
    "universidad-siglo-21": {
      client: "Universidad Siglo 21",
      sector: "Higher education",
      year: "2019 — present",
      title: "An end-to-end digital transformation, with the student at the centre",
      summary:
        "We helped Universidad Siglo 21 move its educational platform and management systems to the AWS cloud, and rebuild on that base the processes that touch the student: admissions, payments, assessment and the portal where all of it meets.",
      answer: {
        question: "What did Bitlogic do with Universidad Siglo 21?",
        body: "Bitlogic supported Universidad Siglo 21 in migrating its educational platform and management systems to AWS, and in modernizing four critical processes: admissions on a microservices architecture with Docker and React, the payment gateway, a digital exam platform integrated into the SIS with proctoring, and a unified student portal.",
      },
      challenge: [
        "Core systems — LMS, CMS, back office and CRM — on infrastructure that couldn't follow enrolment and exam peaks.",
        "Key student processes spread across applications that didn't talk to each other.",
        "Long deployment cycles that stalled any experience improvement.",
      ],
      delivered: [
        {
          title: "Cloud",
          body: "Migration of the educational platform and management systems to AWS, focused on reach, scalability, stability and availability.",
        },
        {
          title: "Admissions",
          body: "Redesign of the admissions process on a microservices architecture with Docker and React, built so it can be adapted to other institutions.",
        },
        {
          title: "Payments",
          body: "Modernization and migration of the payment gateway, adding Pay Per TIC and redesigning the interface.",
        },
        {
          title: "Assessment",
          body: "A new digital exam platform integrated into the student information system, with proctoring tools such as Klarway.",
        },
        {
          title: "Student portal",
          body: "The academic experience unified into a single digital environment where every interaction is simple, coherent and connected.",
        },
      ],
      outcome: [
        "The payment gateway modernization was completed in under a year.",
        "Development and deployment times dropped considerably thanks to automation and modern tooling.",
        "The admissions model was left ready to adapt to other educational institutions.",
      ],
      metrics: [
        { value: "35%", label: "record increase in admitted students after the AWS migration" },
        { value: "< 1 year", label: "to modernize and migrate the payment gateway" },
      ],
      quote: {
        text: "Bitlogic carried out an end-to-end digital transformation that let us move towards the future of education.",
        author: "Hugo Colombatto",
        role: "IT Director, Universidad Siglo 21",
      },
      stack: ["AWS", "Docker", "React", "Microservices", "SIS", "Klarway"],
    },
    teclab: {
      client: "TECLAB",
      sector: "100% online technical education",
      year: "2021 — present",
      title: "Learning without interruptions, at the student's own speed",
      summary:
        "TECLAB delivers officially accredited degrees entirely online. Its platform is the institute: if it goes down, there is no fallback classroom. We worked from that premise.",
      answer: {
        question: "What did Bitlogic do with TECLAB?",
        body: "Bitlogic worked with TECLAB to sustain and evolve its 100% online education platform. The focus was continuity and speed of the learning experience: its students now study without interruptions, which reinforces TECLAB's leadership in online education.",
      },
      challenge: [
        "A platform that is, quite literally, the institution: any degradation is a lost class.",
        "A student base studying at its own pace, at any hour, from any device.",
        "The need to hold the speed of the experience while volume keeps growing.",
      ],
      delivered: [
        {
          title: "Continuity",
          body: "Work on platform availability and resilience so that studying doesn't depend on a maintenance window.",
        },
        {
          title: "Speed",
          body: "End-to-end optimization of the learning experience, from entering the classroom to submitting an assignment.",
        },
        {
          title: "Continuous evolution",
          body: "Short iterations on the live platform, without pausing the term.",
        },
      ],
      outcome: [
        "TECLAB students now enjoy a continuous, high-speed learning experience without interruptions.",
        "The platform sustains TECLAB's leadership in online education.",
      ],
      metrics: [],
      quote: null,
      stack: ["AWS", "LMS", "Observability", "CI/CD"],
    },
    capabilia: {
      client: "Capabilia",
      sector: "Online education and employability",
      year: "2022 — present",
      title: "Continuous engineering for an academic offer that moves fast",
      summary:
        "Capabilia trains for work: its programmes update at the speed of the job market. That demands a platform that tolerates permanent change without piling up technical debt.",
      answer: {
        question: "What does Bitlogic do with Capabilia?",
        body: "Bitlogic provides engineering and continuous evolution for Capabilia's employability-focused online education platform in Latin America, sustaining the pace of change of its academic offer without accumulating technical debt.",
      },
      challenge: [
        "An academic offer that updates constantly and drags platform changes with it.",
        "The need to add and remove engineering capacity depending on the time of year.",
        "In-house components living alongside third-party platforms.",
      ],
      delivered: [
        {
          title: "Embedded team",
          body: "Senior engineers embedded in Capabilia's team, under their process and their definition of done.",
        },
        {
          title: "Platform evolution",
          body: "Continuous development on the learning platform and its integrations.",
        },
        {
          title: "Sustained quality",
          body: "Review, testing and deployment practice that make frequent change safe.",
        },
      ],
      outcome: [
        "Engineering capacity follows the academic calendar instead of constraining it.",
        "Permanent change stopped being a source of technical debt.",
      ],
      metrics: [],
      quote: null,
      stack: ["Cloud", "LMS", "Integrations", "CI/CD"],
    },
  },

  technologies: {
    hero: {
      eyebrow: "Technologies",
      title: "The stack the region's education already runs on",
      lead: "We pick few things and know them deeply. We'd rather be expert in what the sector actually uses than generalist in everything.",
    },
    answer: {
      question: "What technologies does Bitlogic use?",
      body: "Bitlogic builds on AWS — it is an AWS Select Partner with Service Delivery designations for ECS and RDS — on Canvas LMS as an Instructure partner, and with LTI 1.3, Moodle and Open edX for educational integrations. On the product side: React, Next.js, TypeScript, Node.js, Python and Go; on AI: Amazon Bedrock plus OpenAI and Anthropic models with RAG architectures.",
    },
    groups: {
      edtech: {
        name: "EdTech and standards",
        body: "Canvas LMS, LTI 1.3 and the interoperability standards that let an educational ecosystem be composed instead of rewritten.",
      },
      cloud: {
        name: "Cloud and infrastructure",
        body: "AWS as the primary platform, with infrastructure declared as code and automated deployments.",
      },
      ai: {
        name: "Artificial intelligence",
        body: "Generative AI applied with traceability: retrieval over your own material, answer evaluation and teacher oversight.",
      },
      product: {
        name: "Product and applications",
        body: "Accessible interfaces and backend services that can be maintained for years, not just launched.",
      },
      data: {
        name: "Data and analytics",
        body: "From the raw event to the indicator an academic director can act on.",
      },
    },
    partnersTitle: "Partnerships and certifications",
    partnersLead:
      "Partnerships matter when they change what you can promise. These three change the risk profile of your project.",
    partnerDetail: {
      aws: "We are an AWS Select Partner with Service Delivery designations for Amazon ECS and Amazon RDS: AWS validates that we run those workloads to its best practices. We are strategic AWS partners for the education sector.",
      instructure:
        "As Instructure partners we work on Canvas LMS, the leading global educational platform: integrations, LTI applications and extensions tailored to each institution.",
      iso: "Our quality management system is ISO 9001 certified and audited periodically. Quality isn't a sales promise here: it's a process with evidence.",
    },
  },

  about: {
    hero: {
      eyebrow: "About",
      title: "A different future — more digital and also more human",
      lead: "That's been our vision since 2016, when three friends with few certainties decided to start with what they knew best: writing code, whatever it took.",
    },
    answer: {
      question: "Who is Bitlogic?",
      body: `Bitlogic is an Argentine software design, engineering and agile development company founded in Córdoba in ${SITE.founded}. We are more than ${SITE.headcount} people specialized in technology for education. Our vision is to build a different future — more digital and also more human.`,
    },
    manifestoTitle: "Manifesto",
    manifesto: [
      "Nonconformists by birth, we came into the world to change it.",
      "To build a different future, more digital, and also more human.",
      "Through the design, engineering and agile development of software products we help our clients innovate at scale and speed.",
      "We are the strategic partner that turns digital modernization into action.",
      "Challenges move us, and that rush right before the leap.",
      "We love building from scratch, with no maps and no recipes. Because innovating takes believing in yourself.",
      "Bitlogic is where diverse, restless and free people meet.",
      "We push ourselves every day, we embrace error, we learn and we share what we know.",
      "We choose to walk differently, our own way.",
      "And with a bold heart, to build a better world.",
    ],
    manifestoSignature: "We are Bitlogic. #BitDifferent",

    missionTitle: "Mission",
    mission:
      "To be our clients' technology partners, delivering innovative, scalable and reliable software solutions in an agile way — driving their future through digital modernization.",
    visionTitle: "Vision",
    vision: "To build a different future, more digital and also more human.",

    timelineTitle: "How we got here",
    timeline: [
      {
        year: "2016",
        title: "Three friends and a decision",
        body: "It all started in a moment of job uncertainty. Three friends, with few certainties, decided to step forward and start something together. Where do we begin? With what we knew best.",
      },
      {
        year: "2017",
        title: "From 4 to 10",
        body: "A challenge that accelerated us. We went from 4 to 10 people and welcomed the first woman onto the technical team — something we call out because of the unequal reality women and dissidents face in this industry.",
      },
      {
        year: "2018",
        title: "Bithouse opens",
        body: "We added People and Finance, and with that the idea of having a house of our own. Bithouse opened as a space for Bitlogic and for any project tied to technology, innovation and art.",
      },
      {
        year: "2025",
        title: "#HumanAfterAll",
        body: "We paused the AI conversation to put ourselves in the shoes of those who teach and those who learn. That's where our current branding comes from: education, humanity and technology. EdTech made for humans, by humans.",
      },
    ],

    valuesTitle: "Values",
    valuesLead:
      "Five principles with concrete agreements behind them. They're part of the management system, not the marketing.",

    leadershipTitle: "Board",
    leadershipLead: "The people accountable for the decisions.",
    roles: {
      ceo: "CEO and co-founder",
      cto: "CTO and co-founder",
      engineering: "Sr. Engineering Manager and co-founder",
      delivery: "Delivery Manager",
      people: "HR Manager",
      finance: "Finance Manager",
    },

    bithouseTitle: "Bithouse, our home",
    bithouse: [
      "Bithouse is a listed heritage building in the city of Córdoba. It was built in 1941 by master builder Carlos Carnelli, and its walls housed Córdoba families, students and teachers when it was a school, and later a shopping arcade, an event hall and a restaurant.",
      "When we chose this house we were looking for a space that represented us. But we understood we were taking over a place that belonged to a community, with a long history behind it. We couldn't just paint the walls and sit down to work.",
      "That's how Bithouse was born: a house that hosts projects tied to creativity and innovation, that keeps its garden and its view, that fills its rooms with people and art, and that serves good coffee.",
    ],

    diversityTitle: "Breaking Gaps",
    diversity:
      "From year one we accepted that inequality in the tech industry was our problem too. Breaking Gaps is the programme we run diversity and inclusion through: training, a gender-aware glossary, and criteria for how teams are formed.",

    ctaTitle: "Want to work with us?",
    ctaBody: "Write to us and let's talk. We also post open roles on LinkedIn.",
  },

  faq: {
    hero: {
      eyebrow: "FAQ",
      title: "What people ask us before we start",
      lead: "Direct answers. If yours is missing, write to us and we'll add it.",
    },
    items: [
      {
        q: "What exactly does Bitlogic do?",
        a: "We design, build and run software platforms for educational institutions: virtual campuses, student portals, academic management, digital assessment, payment gateways and AI assistants. We also embed senior engineers into teams that already exist.",
      },
      {
        q: "Do you only work with educational institutions?",
        a: "Education is our specialty and where we've accumulated more than 50 projects, but we also work with organizations in other sectors that need digital modernization. If your project isn't EdTech, we'll tell you in the first conversation and point you somewhere useful anyway.",
      },
      {
        q: "How long does it take to start a project?",
        a: "For staff augmentation, we present candidates two to three weeks after agreeing the role. For product development, discovery starts within two to four weeks and ends with a plan covering scope, sequence and cost.",
      },
      {
        q: "How do you price?",
        a: "Staff augmentation is per profile, per month. Product development can be a dedicated team or a fixed scope when discovery lets us commit confidently. Either way the number comes out of discovery, not a price list.",
      },
      {
        q: "Where are you and what time zone do you work in?",
        a: "We're in Córdoba, Argentina (UTC-3), at Bithouse. That gives full overlap with the Americas and half a day with Europe. We work with distributed teams and with people in the office.",
      },
      {
        q: "What quality guarantees do you offer?",
        a: "Our quality management system is ISO 9001 certified and audited periodically, internally and externally. Every delivery goes through code review, automated testing and controlled deployment.",
      },
      {
        q: "How do you handle student data?",
        a: "With minimization, bounded retention and traceability, and on the premise that the data belongs to the people and the institution. Information security is a cross-cutting policy of the management system, not a per-project decision.",
      },
      {
        q: "Can you work on our Canvas LMS or Moodle?",
        a: "Yes. We're Instructure partners and work on Canvas LMS at the level of integrations, LTI 1.3 applications and custom extensions. We also have Moodle and Open edX experience.",
      },
      {
        q: "What happens when the project ends?",
        a: "We leave living documentation, observability and runbooks. If you want to bring the team in-house, the handover is planned from the start. We don't use knowledge as a retention mechanism.",
      },
      {
        q: "Do you use AI in development?",
        a: "Yes, with judgement and human review. We use AI to speed up repeatable work, and the code review and testing bar is the same whether a person wrote it or a model assisted.",
      },
    ],
  },

  contact: {
    hero: {
      eyebrow: "Let's talk",
      title: "Tell us what you want to build",
      lead: "Half an hour is enough to know whether we can help. If we're not the right partner, we'll say so and point you somewhere useful.",
    },
    answer: {
      question: "How do I contact Bitlogic?",
      body: `You can write to ${SITE.email} or use the form on this page. We reply within one business day. Our office is Bithouse, José Roque Funes 1791, Córdoba, Argentina.`,
    },
    form: {
      title: "Write to us",
      name: "Name",
      namePlaceholder: "What should we call you",
      email: "Email",
      emailPlaceholder: "you@organization.com",
      organization: "Organization",
      organizationPlaceholder: "Where you work",
      topic: "Topic",
      topics: [
        "A product project",
        "Adding engineers to my team",
        "Artificial intelligence and data",
        "I want to work at Bitlogic",
        "Something else",
      ],
      message: "Tell us a bit",
      messagePlaceholder: "What you need, by when, and what you've already tried.",
      submit: "Send",
      submitting: "Sending…",
      successTitle: "Received",
      successBody: "Thank you. We'll reply within one business day.",
      errorBody: "We couldn't send the message. Write to us directly at " + SITE.email + ".",
      required: "Required",
      invalidEmail: "Check the email",
      consent: "By sending this you agree to be contacted at this address.",
    },
    directTitle: "Direct",
    officeTitle: "Bithouse",
    officeBody:
      "Our house in Cerro de las Rosas, a listed heritage building in the city of Córdoba. If you're around, let us know and we'll make coffee.",
    responseTime: "We reply within one business day",
  },

  blog: {
    hero: {
      eyebrow: "Blog",
      title: "What we learned building",
      lead: "Technical and product notes on educational platforms, cloud, artificial intelligence and the way of working that makes them possible.",
    },
    empty: {
      title: "We're migrating the blog",
      body: "Published notes are still available on the current site while we finish migrating the content.",
      cta: "Read the current blog",
      href: "https://en.bitlogic.io/blog/",
    },
  },

  footer: {
    claim: "EdTech made for humans, by humans.",
    columns: {
      services: "Services",
      company: "Bitlogic",
      connect: "Connect",
    },
    newsletterTitle: "Newsletter",
    newsletterBody: "One note a month on EdTech, cloud and applied AI. No noise.",
    newsletterPlaceholder: "you@email.com",
    newsletterCta: "Subscribe",
    legal: `© ${new Date().getFullYear()} ${SITE.legalName} — All rights reserved.`,
    madeIn: "Made in Córdoba, Argentina",
    localeSwitch: "Ver en español",
  },

  notFound: {
    code: "404",
    title: "This page doesn't exist",
    body: "We may have moved it during the redesign. Try from the home page, or tell us what you were looking for.",
    cta: "Back home",
  },
};

export default en;
