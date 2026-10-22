// Fuente única de proyectos.
// category: "fintech" | "fullstack" | "web" | "automation"
// featured: aparece destacado en el home
// image: screenshot desktop (horizontal). imageMobile: screenshot de celular (vertical).
// Con ambas, la card muestra un toggle desktop/mobile; con una sola, muestra esa vista.
// link: sitio en vivo o repo. Sin link = sistema privado de cliente (se muestra como "En producción").
// stores: enlaces a App Store / Google Play (opcional).
// tech: solo lo que de verdad está en el package.json / código del proyecto.
export const projects = [
  {
    title: {
      en: "Digital Account Opening with KYC/AML for a Credit Cooperative",
      es: "Apertura de Cuentas Digital con KYC/AML para una Cooperativa de Ahorro y Crédito",
    },
    description: {
      en: "Led the engineering of a regulated onboarding platform for a Honduran savings and credit cooperative: new members open their account from the phone without visiting a branch. The flow runs biometric identity verification and liveness checks (Didit), validates the person against the national ID registry (RNP SOAP web service), screens them against AML blacklists and PEP lists, and only then creates the member in the cooperative's core system. Backend in NestJS with Redis-backed rate limiting, signed onboarding tokens, request-scoped logging and a global exception filter for auditability. Live in production.",
      es: "Dirigí la ingeniería de una plataforma de onboarding regulado para una cooperativa de ahorro y crédito en Honduras: los nuevos socios abren su cuenta desde el celular sin ir a una agencia. El flujo hace verificación biométrica de identidad y prueba de vida (Didit), valida a la persona contra el Registro Nacional de las Personas (servicio SOAP del RNP), la revisa contra listas negras AML y listas PEP, y solo entonces crea al socio en el core de la cooperativa. Backend en NestJS con rate limiting sobre Redis, tokens de onboarding firmados, logging por request y filtro global de excepciones para auditoría. En producción.",
    },
    year: "2026",
    image: "/projects/kyc_flow.svg",
    tech: ["NestJS", "TypeScript", "Next.js", "Redis", "SOAP / XML", "Didit KYC", "Tesseract OCR", "Zustand"],
    category: "fintech",
    featured: true,
  },
  {
    title: {
      en: "FynQ: Personal Finance App with AI Insights",
      es: "FynQ: App de Finanzas Personales con Análisis de IA",
    },
    description: {
      en: "Personal finance app published on the App Store, Google Play and the web from a single codebase. Users log income and expenses in seconds, automate recurring payments, track budgets and savings goals, and get a daily summary of their money written by AI. Security built for financial data: JWT with refresh tokens, Google sign-in, TOTP two-factor auth, biometric unlock and a privacy screen. Payments run on Stripe for web and RevenueCat for in-app subscriptions, with the server always re-validating subscription state from webhooks. Typed REST API with OpenAPI docs, Prisma on MySQL, Dockerized, errors tracked in Sentry.",
      es: "App de finanzas personales publicada en App Store, Google Play y web desde un solo código. Los usuarios registran ingresos y gastos en segundos, automatizan pagos fijos, controlan presupuestos y metas de ahorro, y reciben cada día un resumen de su dinero escrito con IA. Seguridad pensada para datos financieros: JWT con refresh tokens, login con Google, doble factor TOTP, desbloqueo biométrico y pantalla de privacidad. Los cobros van por Stripe en web y RevenueCat en las tiendas, y el servidor siempre revalida la suscripción desde los webhooks. API REST tipada con documentación OpenAPI, Prisma sobre MySQL, en Docker, errores monitoreados con Sentry.",
    },
    year: "2026",
    image: "/projects/fynq_web.webp",
    imageMobile: "/projects/fynq_mobile.webp",
    link: "https://fynq.site",
    stores: [
      { label: "App Store", url: "https://apps.apple.com/us/app/fynq-expense-tracker/id6816767254" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=site.fynq.app" },
    ],
    tech: ["React", "Ionic", "Capacitor", "Node.js", "Express", "TypeScript", "Prisma", "MySQL", "Stripe", "RevenueCat", "Claude API", "Sentry"],
    category: "fintech",
    featured: true,
  },
  {
    title: {
      en: "Splitwo: Expense Splitting App (iOS, Android & Web)",
      es: "Splitwo: App para Dividir Gastos (iOS, Android y Web)",
    },
    description: {
      en: "Mobile app to split shared expenses between friends, roommates and trips, live on the App Store, Google Play and the web. Built with Expo / React Native on Supabase (PostgreSQL with row-level security, storage for receipts, Edge Functions). Handles group balances and settle-ups, recurring expenses, payment reminders, guest members who can claim their account later, QR invites and push notifications (OneSignal). Premium plan sold through Stripe on the web and RevenueCat in the stores, reconciled by webhooks into a single payment-events table. Includes a Next.js admin panel and a bilingual marketing site.",
      es: "App móvil para dividir gastos compartidos entre amigos, roomies y viajes, publicada en App Store, Google Play y web. Construida con Expo / React Native sobre Supabase (PostgreSQL con row-level security, storage para recibos y Edge Functions). Maneja balances de grupo y liquidaciones, gastos recurrentes, recordatorios de cobro, miembros invitados que luego reclaman su cuenta, invitaciones por QR y notificaciones push (OneSignal). El plan Premium se cobra con Stripe en web y RevenueCat en las tiendas, conciliado por webhooks en una sola tabla de eventos de pago. Incluye panel de administración en Next.js y sitio de marketing bilingüe.",
    },
    year: "2026",
    image: "/projects/splitwo_web.webp",
    imageMobile: "/projects/splitwo_app.webp",
    link: "https://app.splitwo.com",
    stores: [
      { label: "App Store", url: "https://apps.apple.com/app/id6782092464" },
      { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.splitwo.app" },
    ],
    tech: ["React Native", "Expo", "TypeScript", "Supabase", "PostgreSQL", "Stripe", "RevenueCat", "OneSignal", "Next.js", "Sentry"],
    category: "fintech",
    featured: true,
  },
  {
    title: {
      en: "VennQ: Multi-tenant Business Suite & POS",
      es: "VennQ: Suite Empresarial Multi-tenant y POS",
    },
    description: {
      en: "All-in-one operations suite for small and mid-size businesses: sales, inventory, customers, HR, accounting and a point of sale specialized by industry (supermarket, restaurant, auto shop). Multi-tenant architecture where every business gets its own isolated MySQL database, created on sign-up, with a migration system that handles locking, auditing, retries and drift detection across tenants. Subscription billing with Stripe, structured logging with Pino, health checks, rate limiting and EN/ES localization.",
      es: "Suite operativa todo-en-uno para PyMEs: ventas, inventario, clientes, RR.HH., contabilidad y un punto de venta especializado por rubro (supermercado, restaurante, taller). Arquitectura multi-tenant donde cada negocio tiene su propia base MySQL aislada, creada al registrarse, con un sistema de migraciones que maneja bloqueo, auditoría, reintentos y detección de drift entre tenants. Cobro de suscripciones con Stripe, logging estructurado con Pino, health checks, rate limiting y localización EN/ES.",
    },
    year: "2026",
    image: "/projects/vennq_platform.webp",
    link: "https://vennq.com",
    tech: ["Next.js", "NestJS", "TypeScript", "Prisma", "MySQL", "Stripe", "React Query", "Claude API"],
    category: "fullstack",
    featured: true,
  },
  {
    title: {
      en: "getdailyme: Private Habit Tracker for You and Your Friends",
      es: "getdailyme: App de Hábitos Privada para Ti y tus Amigos",
    },
    description: {
      en: "Mobile-first PWA to log daily activities in one tap (water, meals, workouts, reading) and share them only with the friends you choose. Visibility is decided per activity (only me, my friends or selected friends), enforced in the database with PostgreSQL row-level security. Works offline: logs are persisted locally in IndexedDB and sync on their own when the connection comes back. Streaks with freeze days, challenges between friends, one-link friend invites, Web Push reminders that work on the installed app (iPhone included) and scheduled jobs for daily reminders and streaks at risk. Bilingual EN/ES, tested with Vitest and Playwright.",
      es: "PWA mobile-first para registrar actividades diarias en un toque (agua, comidas, entrenamientos, lectura) y compartirlas solo con las amistades que elijas. La visibilidad se decide por actividad (solo yo, mis amigos o amigos seleccionados) y la hace cumplir la base de datos con row-level security de PostgreSQL. Funciona sin conexión: los registros se guardan localmente en IndexedDB y se sincronizan solos al recuperar señal. Rachas con comodines, retos entre amigos, invitaciones con un solo enlace, avisos Web Push que funcionan en la app instalada (también en iPhone) y tareas programadas para recordatorios diarios y rachas en riesgo. Bilingüe EN/ES, con pruebas en Vitest y Playwright.",
    },
    year: "2026",
    image: "/projects/getdailyme.webp",
    link: "https://getdailyme.com",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "TanStack Query", "PWA", "Web Push", "Tailwind CSS", "Playwright"],
    category: "fullstack",
  },
  {
    title: {
      en: "LainZ590: E-Learning Platform for LZ English Academy",
      es: "LainZ590: Plataforma E-Learning para LZ English Academy",
    },
    description: {
      en: "Full-stack e-learning platform built around the academy's own '590 Method'. Course management with a rich-text editor and drag-and-drop ordering, student onboarding, Stripe subscriptions, role-based access (admin / teacher / student), PDF certificate generation and scheduled jobs. Files stored on Cloudflare R2 through the S3 API. Built for production from day one: hardened auth, request-scoped logging, multi-origin CORS, rate limiting and health checks.",
      es: "Plataforma e-learning full-stack construida alrededor del 'Método 590' de la academia. Gestión de cursos con editor de texto enriquecido y ordenamiento drag-and-drop, onboarding de estudiantes, suscripciones con Stripe, acceso por roles (admin / profesor / estudiante), generación de certificados en PDF y tareas programadas. Archivos en Cloudflare R2 vía la API de S3. Pensada para producción desde el día uno: auth endurecida, logging por request, CORS multi-origen, rate limiting y health checks.",
    },
    year: "2026",
    image: "/projects/lz_platform.webp",
    link: "https://app.lainz590.com",
    tech: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "Stripe", "NextAuth", "Cloudflare R2"],
    category: "fullstack",
  },
  {
    title: {
      en: "Sol Beauty Lab: Beauty Studio Management SaaS",
      es: "Sol Beauty Lab: SaaS de Gestión para Estudio de Belleza",
    },
    description: {
      en: "Full-stack management platform used daily by a beauty studio: appointment scheduling with a live calendar, client records with digital consent forms, walk-ins, payments and expense tracking, revenue reports, team roles and a public self-booking page. Shipped as an installable PWA with web push and SMS reminders, bilingual (EN/ES), with cron-driven cleanup jobs.",
      es: "Plataforma full-stack de gestión que un estudio de belleza usa a diario: agenda de citas con calendario en vivo, expedientes de clientas con consentimientos digitales, walk-ins, control de pagos y gastos, reportes de ingresos, roles de equipo y una página pública de auto-reserva. Entregada como PWA instalable con notificaciones push y recordatorios por SMS, bilingüe (EN/ES), con tareas programadas de limpieza.",
    },
    year: "2026",
    image: "/projects/solbeautylab.webp",
    link: "https://solbeautylab.cc",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "PostgreSQL", "Tailwind CSS", "PWA"],
    category: "fullstack",
  },
  {
    title: {
      en: "Payment Integration: LZ English Academy",
      es: "Integración de Pagos: LZ English Academy",
    },
    description: {
      en: "Public site and enrollment flow for an English academy with Stripe checkout. Express API with input validation, rate limiting and security headers handles the payment flow end to end and records enrollments in Supabase.",
      es: "Sitio público y flujo de inscripción para una academia de inglés con checkout de Stripe. Una API en Express con validación de datos, rate limiting y headers de seguridad maneja el flujo de pago de punta a punta y registra las inscripciones en Supabase.",
    },
    year: "2026",
    image: "/projects/lzacademy.webp",
    link: "https://lz-englishacademy.com",
    tech: ["Next.js", "Express", "Supabase", "Stripe", "Zod"],
    category: "fullstack",
  },
  {
    title: {
      en: "Olanchito.com: City Guide & Business Directory",
      es: "Olanchito.com: Guía de la Ciudad y Directorio de Negocios",
    },
    description: {
      en: "City guide and local business directory with interactive maps, QR codes for each listing and paid featured listings through Stripe. Data on Supabase, transactional emails with Resend.",
      es: "Guía de la ciudad y directorio de negocios locales con mapas interactivos, códigos QR por negocio y anuncios destacados pagados con Stripe. Datos en Supabase y correos transaccionales con Resend.",
    },
    year: "2026",
    image: "/projects/olanchito.webp",
    link: "https://olanchito.com",
    tech: ["Next.js", "Supabase", "Stripe", "Leaflet", "Resend"],
    category: "fullstack",
  },
  {
    title: {
      en: "MovelyQ: Pre-launch Registration for a Rental Marketplace",
      es: "MovelyQ: Pre-registro para un Marketplace de Alquileres",
    },
    description: {
      en: "Pre-launch registration site for an equipment and vehicle rental marketplace, built to capture early users with validated sign-up forms and international phone input, stored on Supabase.",
      es: "Sitio de pre-registro para un marketplace de alquiler de equipos y vehículos, hecho para captar usuarios tempranos con formularios validados y teléfono internacional, guardados en Supabase.",
    },
    year: "2026",
    image: "/projects/movelyq.webp",
    link: "https://pre-register.movelyq.com",
    tech: ["React", "Supabase", "Formik", "Yup"],
    category: "web",
  },
  {
    title: {
      en: "Lubricentro Pacura: Local Business Website",
      es: "Lubricentro Pacura: Sitio Web para Negocio Local",
    },
    description: {
      en: "Marketing website for an automotive service business in Olanchito, Honduras. Mobile-first, with one-tap WhatsApp contact and motion-driven sections to present services.",
      es: "Sitio de marketing para un negocio de servicios automotrices en Olanchito, Honduras. Mobile-first, con contacto por WhatsApp en un toque y secciones animadas para presentar los servicios.",
    },
    year: "2026",
    image: "/projects/pacura.webp",
    link: "https://lubricentropacura.netlify.app",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    category: "web",
  },
  {
    title: {
      en: "Bytam Design: Custom Embroidery Catalog",
      es: "Bytam Design: Catálogo de Bordados Personalizados",
    },
    description: {
      en: "Product catalog site for a custom embroidery brand, with category pages and a simple order flow. Static, fast and mobile-first.",
      es: "Sitio de catálogo para una marca de bordados personalizados, con páginas por categoría y un flujo de pedido sencillo. Estático, rápido y mobile-first.",
    },
    year: "2026",
    image: "/projects/bytam.webp",
    link: "https://bytam-design.netlify.app",
    tech: ["React", "Vite", "Tailwind CSS", "React Router"],
    category: "web",
  },
  {
    title: {
      en: "Photography Portfolio & Media Delivery",
      es: "Portafolio de Fotografía y Entrega de Media",
    },
    description: {
      en: "Photography portfolio built with Next.js. Images are served through Cloudinary with automatic format and size optimization, responsive delivery and lazy loading, plus a full-screen lightbox for galleries.",
      es: "Portafolio de fotografía construido con Next.js. Las imágenes se sirven con Cloudinary con optimización automática de formato y tamaño, entrega responsiva y lazy loading, más un lightbox de pantalla completa para las galerías.",
    },
    year: "2025",
    image: "/projects/photography_portfolio.webp",
    link: "https://photography.frankyinteriano.com",
    tech: ["Next.js", "Cloudinary", "Framer Motion"],
    category: "web",
  },
  {
    title: {
      en: "Automation & Scripting: Invitation Bot",
      es: "Automatización de Procesos: Bot de Invitaciones",
    },
    description: {
      en: "Python automation tool using Selenium to send invitations in bulk, replacing a repetitive manual process.",
      es: "Herramienta de automatización en Python con Selenium para enviar invitaciones en lote, reemplazando un proceso manual repetitivo.",
    },
    year: "2025",
    image: "/projects/SendInvitation.webp",
    tech: ["Python", "Selenium", "Automation"],
    category: "automation",
  },
  {
    title: {
      en: "Browser Automation & DOM Analysis Tool",
      es: "Herramienta de Automatización y Análisis DOM",
    },
    description: {
      en: "JavaScript scripts that analyze complex DOM structures, extract large datasets to JSON and run asynchronous tasks inside the browser.",
      es: "Scripts en JavaScript que analizan estructuras DOM complejas, extraen grandes conjuntos de datos a JSON y ejecutan tareas asíncronas dentro del navegador.",
    },
    year: "2025",
    image: "/projects/automation.webp",
    link: "https://github.com/rick2303/InstagramUnfollowAutomation",
    tech: ["JavaScript", "DOM API", "Data Extraction"],
    category: "automation",
  },
  {
    title: {
      en: "RSVP & Guest Management Portal",
      es: "Portal de RSVP y Gestión de Invitados",
    },
    description: {
      en: "Full-stack portal to manage guests and track RSVP responses in real time, with Excel import/export. React front end and a C#/.NET API.",
      es: "Portal full-stack para gestionar invitados y dar seguimiento a confirmaciones en tiempo real, con importación/exportación a Excel. Front end en React y API en C#/.NET.",
    },
    year: "2025",
    image: "/projects/weddingInvitation.webp",
    tech: ["React", "C# / .NET", "SQL", "Zustand"],
    category: "fullstack",
  },
  {
    title: {
      en: "University Enrollment System (UNAH)",
      es: "Sistema de Matrícula Universitaria (UNAH)",
    },
    description: {
      en: "Enrollment system proposal for a high-traffic university process, with relational database modeling and business rules for sections, prerequisites and schedules.",
      es: "Propuesta de sistema de matrícula para un proceso universitario de alto tráfico, con modelado de base de datos relacional y reglas de negocio para secciones, requisitos y horarios.",
    },
    year: "2023",
    image: "/projects/unah.webp",
    link: "https://github.com/rick2303/RegistroUNAH",
    tech: ["Java", "SQL", "MySQL"],
    category: "fullstack",
  },
  {
    title: {
      en: "Migration Impact Simulator (CPM_LATAM)",
      es: "Simulador de Impacto Migratorio (CPM_LATAM)",
    },
    description: {
      en: "Technical lead on a simulator that calculates and visualizes migration impact scenarios in real time.",
      es: "Líder técnico de un simulador que calcula y visualiza escenarios de impacto migratorio en tiempo real.",
    },
    year: "2023",
    image: "/projects/cpm.webp",
    link: "https://github.com/rick2303/CPM_LATAM",
    tech: ["JavaScript", "React"],
    category: "web",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const projectCategories = [
  { id: "all", en: "All", es: "Todos" },
  { id: "fintech", en: "Fintech & Mobile", es: "Fintech y Móvil" },
  { id: "fullstack", en: "Full-Stack", es: "Full-Stack" },
  { id: "web", en: "Web & Landing", es: "Web y Landing" },
  { id: "automation", en: "Automation", es: "Automatización" },
];
