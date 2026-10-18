import { useAppContext } from "../context/AppContext";
import SectionHeader from "../components/SectionHeader";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import Education from "../components/Education";
import Skills from "../components/skills";
import References from "./references";
import usePageTitle from "../hooks/usePageTitle";

const experiences = [
  {
    company: "QALI-T",
    role: {
      en: "Software Engineer",
      es: "Ingeniero de Software",
    },
    period: { en: "May 2025 - Present", es: "Mayo 2025 - Presente" },
    location: { en: "Miami, FL · Remote", es: "Miami, FL · Remoto" },
    skills: [
      "TypeScript",
      "NestJS",
      "Node.js",
      "Next.js",
      "React Native",
      "Prisma",
      "PostgreSQL / MySQL",
      "Supabase",
      "Stripe",
      "Redis",
    ],
    details: {
      en: [
        "**Regulated Account Opening (KYC/AML):** Led the engineering of a digital account-opening platform for a regulated savings and credit cooperative. New members open an account from their phone with biometric ID verification, validation against the national ID registry (SOAP) and AML blacklist / PEP screening before the member is created in the core system. Live in production.",
        "**Mobile Apps in the Stores:** Built and shipped two consumer finance apps: Splitwo (expense splitting, Expo / React Native, App Store and Google Play) and FynQ (personal finance with AI summaries, Ionic + Capacitor, App Store and Google Play). Both run in-app subscriptions with RevenueCat and web payments with Stripe, reconciled by webhooks.",
        "**Multi-tenant SaaS:** Built a business suite and point of sale where every company gets its own isolated MySQL database, with a migration system that handles locking, auditing and drift detection across tenants, plus subscription billing through Stripe.",
        "**Production Ownership:** Deliver and support 8+ web and mobile applications in production for clients in financial services, education, beauty and automotive: troubleshooting customer-reported issues, fixing root causes in code and data, monitoring with Sentry and deploying.",
        "**API Integrations:** Built and maintain integrations with 10+ third-party services (Stripe, RevenueCat, Didit KYC, Claude API, OneSignal, Resend, Cloudflare R2), handling webhook and payment failures end to end.",
      ],
      es: [
        "**Apertura de Cuentas Regulada (KYC/AML):** Dirigí la ingeniería de una plataforma de apertura de cuentas digital para una cooperativa de ahorro y crédito regulada. Los nuevos socios abren su cuenta desde el celular con verificación biométrica de identidad, validación contra el registro nacional de las personas (SOAP) y revisión en listas negras AML y PEP antes de crear al socio en el core. En producción.",
        "**Apps Móviles en las Tiendas:** Construí y publiqué dos apps de finanzas para consumidores: Splitwo (dividir gastos, Expo / React Native, App Store y Google Play) y FynQ (finanzas personales con resúmenes de IA, Ionic + Capacitor, App Store y Google Play). Ambas cobran suscripciones con RevenueCat en las tiendas y Stripe en web, conciliadas por webhooks.",
        "**SaaS Multi-tenant:** Construí una suite empresarial y punto de venta donde cada empresa tiene su propia base MySQL aislada, con un sistema de migraciones que maneja bloqueo, auditoría y detección de drift entre tenants, más cobro de suscripciones con Stripe.",
        "**Ownership en Producción:** Entrego y doy soporte a 8+ aplicaciones web y móviles en producción para clientes de servicios financieros, educación, belleza y automotriz: diagnostico problemas reportados por clientes, corrijo la causa raíz en código y datos, monitoreo con Sentry y despliego.",
        "**Integraciones de APIs:** Construyo y mantengo integraciones con 10+ servicios externos (Stripe, RevenueCat, Didit KYC, Claude API, OneSignal, Resend, Cloudflare R2), resolviendo fallos de webhooks y pagos de punta a punta.",
      ],
    },
    socials: "https://qali-t.com",
    photo: "/company/qalit.png",
    photoDark: "/company/qalit_blanco.png",
  },
  {
    company: "Grupo FICOHSA (Bank)",
    role: {
      en: "Production Support Analyst / Backend Developer",
      es: "Analista de Soporte de Producción / Desarrollador Backend",
    },
    badge: { en: "Production Fintech", es: "Fintech en Producción" },
    highlight: {
      stat: "8×",
      en: "Faster international transfers (8d → 1d)",
      es: "Aceleración en transferencias internacionales (8d → 1d)",
    },
    period: { en: "July 2024 - October 2025", es: "Julio 2024 - Octubre 2025" },
    location: { en: "Remote", es: "Remoto" },
    skills: ["SQL", "PL/SQL", "C# / .NET", "VISA B2B Connect", "JIRA"],
    details: {
      en: [
        "**8× Faster Transfers:** Reduced international transfer processing from 8 days to 1 on the VISA B2B Connect flow by refactoring PL/SQL workflows, automating reconciliation and tightening escalation paths.",
        "**Core Banking Reliability:** Supported 24/7 core banking applications processing thousands of daily transactions, meeting SLA targets in a regulated environment.",
        "**Level 3 Escalations:** Code-level debugging in C#/.NET and PL/SQL, hotfix deployment and post-incident root cause reports.",
        "**On-call & Coordination:** Took part in on-call rotation; tracked incidents and change requests in JIRA and Confluence with distributed banking teams.",
      ],
      es: [
        "**Transferencias 8× más rápidas:** Reduje el procesamiento de transferencias internacionales de 8 días a 1 en el flujo VISA B2B Connect, refactorizando workflows PL/SQL, automatizando la conciliación y ajustando las rutas de escalamiento.",
        "**Confiabilidad Core Bancario:** Di soporte 24/7 a aplicaciones de core bancario que procesan miles de transacciones diarias, cumpliendo SLAs en un entorno regulado.",
        "**Escalamientos Nivel 3:** Depuración a nivel de código en C#/.NET y PL/SQL, despliegue de hotfixes y reportes de causa raíz post-incidente.",
        "**On-call y Coordinación:** Participé en rotación de guardias; di seguimiento a incidentes y solicitudes de cambio en JIRA y Confluence con equipos bancarios distribuidos.",
      ],
    },
    socials: "https://ficohsa.com",
    photo: "/company/ficoLogo.png",
  },
  {
    company: "PIXDEA",
    role: {
      en: "Jr. Software Developer & Technical Support",
      es: "Desarrollador Jr. & Soporte Técnico",
    },
    period: { en: "Nov 2023 - March 2024", es: "Nov 2023 - Marzo 2024" },
    location: { en: "Tegucigalpa, Honduras", es: "Tegucigalpa, Honduras" },
    skills: ["React.js", "AWS Lambda", "API Gateway", "MySQL", "Node.js"],
    details: {
      en: [
        "**Serverless Data Pipelines:** Designed and deployed serverless backends on AWS Lambda + API Gateway processing MySQL data to power automated analytical dashboards used by internal teams.",
        "**Full-stack Delivery:** Built REST APIs and React front-end components for real-time data visualization — shipping features end-to-end from schema to UI in a lean agile team.",
        "**Production Reliability:** Investigated and resolved backend and data-integrity issues reported by users, validating accuracy across multiple data sources to keep dashboards trustworthy.",
        "**Early Full-SDLC Ownership:** Managed tasks via Git and JIRA across development and technical support — gaining early exposure to the full software lifecycle.",
      ],
      es: [
        "**Pipelines de Datos Serverless:** Diseñé y desplegué backends serverless en AWS Lambda + API Gateway procesando datos de MySQL para alimentar dashboards analíticos automatizados usados por equipos internos.",
        "**Entrega Full-stack:** Construí REST APIs y componentes React para visualización de datos en tiempo real — enviando features de punta a punta, desde schema hasta UI, en un equipo ágil reducido.",
        "**Confiabilidad en Producción:** Investigué y resolví problemas de backend e integridad de datos reportados por usuarios, validando precisión en múltiples fuentes para mantener la confiabilidad de los dashboards.",
        "**Ownership Temprano del SDLC:** Gestioné tareas con Git y JIRA en desarrollo y soporte técnico — exposición temprana al ciclo completo de vida del software.",
      ],
    },
    socials: "https://pixdea.com",
    photo: "/company/logo_white.png",
  },
];

const renderDetail = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong key={i} className="text-light-primary dark:text-white font-semibold">
        {part.replace(/\*\*/g, "")}
      </strong>
    ) : (
      part
    ),
  );
};

function Experience() {
  const { language, isDarkMode } = useAppContext();
  usePageTitle(language === "en" ? "Experience" : "Experiencia");

  return (
    <PageTransition>
      <section
        id="experience"
        className="pt-32 pb-24 px-6 md:px-12 bg-light-background dark:bg-dark-primary transition-colors duration-500"
      >
        <div className="max-w-4xl mx-auto">
          <SectionHeader
            kicker={language === "en" ? "01 — Experience" : "01 — Experiencia"}
            title={
              language === "en" ? (
                <>
                  Where I've <em className="italic text-light-secondary dark:text-dark-secondary">worked</em>
                </>
              ) : (
                <>
                  Dónde he <em className="italic text-light-secondary dark:text-dark-secondary">trabajado</em>
                </>
              )
            }
          />

          <div className="relative">
            {/* Línea del timeline */}
            <div className="absolute left-8 md:left-10 top-0 bottom-0 w-[2px] bg-light-tertiary dark:bg-white/10"></div>

            <div className="space-y-16 md:space-y-24">
              {experiences.map((exp, i) => {
                const logoToShow =
                  exp.company === "QALI-T" && isDarkMode ? exp.photoDark : exp.photo;

                return (
                  <Reveal key={i}>
                    <div className="relative flex flex-col md:flex-row gap-6 md:gap-16">
                      {/* Logo */}
                      <div className="relative z-10 flex-shrink-0">
                        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-dark-tertiary p-3 shadow-lg border border-light-tertiary dark:border-white/5 flex items-center justify-center overflow-hidden ring-4 ring-light-background dark:ring-dark-primary">
                          <img
                            src={logoToShow}
                            alt={exp.company}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Contenido */}
                      <div className="flex-grow pt-2 pl-12 md:pl-0">
                        <div className="flex flex-col gap-1 mb-4">
                          <div className="flex flex-wrap items-center gap-2 mb-1">
                            <span className="text-xs font-mono font-bold text-light-secondary dark:text-dark-secondary tracking-widest uppercase">
                              {exp.period[language]}
                            </span>
                            {exp.location && (
                              <span className="text-xs font-mono text-zinc-500 dark:text-dark-font tracking-wider uppercase">
                                {exp.location[language]}
                              </span>
                            )}
                            {exp.badge && (
                              <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-light-secondary/10 dark:bg-dark-secondary/15 text-light-secondary dark:text-dark-secondary border border-light-secondary/30 dark:border-dark-secondary/30">
                                {exp.badge[language]}
                              </span>
                            )}
                          </div>
                          <h3 className="font-display text-2xl md:text-3xl font-medium text-light-primary dark:text-white leading-tight">
                            {exp.role[language]}
                          </h3>
                          <a
                            href={exp.socials}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-medium text-zinc-500 dark:text-dark-font hover:text-light-secondary dark:hover:text-dark-secondary transition-colors w-fit italic"
                          >
                            {exp.company}
                          </a>
                        </div>

                        {/* Métrica destacada */}
                        {exp.highlight && (
                          <div className="mb-6 flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-light-secondary/5 to-transparent dark:from-dark-secondary/10 dark:to-transparent border border-light-secondary/20 dark:border-dark-secondary/20">
                            <div className="font-display text-3xl md:text-4xl font-medium tracking-tight text-light-secondary dark:text-dark-secondary leading-none">
                              {exp.highlight.stat}
                            </div>
                            <div className="text-sm md:text-[15px] text-light-primary dark:text-dark-font_primary leading-snug">
                              {exp.highlight[language]}
                            </div>
                          </div>
                        )}

                        {/* Skills */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {exp.skills.map((skill) => (
                            <span
                              key={skill}
                              className="px-2 py-1 text-[10px] font-bold border border-light-tertiary dark:border-white/10 dark:text-zinc-300 text-zinc-600 rounded uppercase bg-white/50 dark:bg-white/5"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>

                        {/* Detalles */}
                        <ul className="space-y-4">
                          {exp.details[language].map((item, index) => (
                            <li
                              key={index}
                              className="flex gap-3 text-zinc-700 dark:text-zinc-200 leading-relaxed text-[15px] md:text-[16px]"
                            >
                              <span className="text-light-secondary dark:text-dark-secondary font-bold mt-1">
                                •
                              </span>
                              <div className="flex-grow">{renderDetail(item)}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <Education />
      <Skills />
      <References />
    </PageTransition>
  );
}

export default Experience;
