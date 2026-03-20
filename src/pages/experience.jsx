import { useAppContext } from "../context/AppContext";

const experiences = [
  {
    company: "QALI-T",
    role: {
      en: "Software Engineer",
      es: "Ingeniero de Software",
    },
    period: { en: "May 2025 - Present", es: "Mayo 2025 - Presente" },
    skills: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SQL",
      "Third-party Integrations",
    ],
    details: {
      en: [
        "**Production Apps:** Built production-ready web applications (fynq.site, qali-t.com, olanchito.com, lz-englishacademy.com, vennq.com, pre-register.movelyq.com) using React.js, Next.js, TypeScript, and Tailwind CSS.",
        "**Front-end Architecture:** Designed scalable front-end structures and implemented backend logic with SQL-based data models.",
        "**Third-party Integrations:** Integrated identity verification workflows (Didit) ensuring secure and reliable user flows.",
        "**Cross-functional Collaboration:** Translated business requirements into technical solutions working closely with stakeholders.",
      ],
      es: [
        "**Apps en Producción:** Desarrollé aplicaciones web listas para producción (fynq.site, qali-t.com, olanchito.com, lz-englishacademy.com, vennq.com, pre-register.movelyq.com) con React.js, Next.js, TypeScript y Tailwind CSS.",
        "**Arquitectura Front-end:** Diseñé estructuras frontend escalables e implementé lógica de backend con modelos de datos SQL.",
        "**Integraciones:** Integré flujos de verificación de identidad (Didit) garantizando procesos de usuario seguros y confiables.",
        "**Colaboración:** Traduje requerimientos de negocio en soluciones técnicas junto a stakeholders y equipos técnicos.",
      ],
    },
    socials: "https://qali-t.com",
    photo: "/company/qalit.png",
    photoDark: "/company/qalit_blanco.png",
  },
  {
    company: "Bank Ficohsa",
    role: {
      en: "Production Support Analyst",
      es: "Analista de Soporte de Producción",
    },
    period: { en: "July 2024 - October 2025", es: "Julio 2024 - Octubre 2025" },
    skills: ["SQL", "PL/SQL", "Java", "SLA Management", "JIRA"],
    details: {
      en: [
        "**Process Optimization:** Reduced international transfer processing time from 8 days to just 1 day through SQL automation and system tuning.",
        "**Core Banking Support:** Ensured 24/7 availability for critical financial systems in a high-stakes production environment.",
        "**Incident Resolution:** Investigated and resolved high-priority incidents using SQL, PL/SQL, and Java, minimizing operational downtime.",
        "**Agile Collaboration:** Managed change requests and incident tracking using JIRA and Confluence across distributed teams.",
      ],
      es: [
        "**Optimización de Procesos:** Reduje el tiempo de procesamiento de transferencias internacionales de 8 días a solo 1 día mediante automatización SQL.",
        "**Soporte Core Bancario:** Garanticé disponibilidad 24/7 para sistemas financieros críticos en entornos de producción de alto impacto.",
        "**Resolución de Incidentes:** Investigué y resolví incidentes de alta prioridad usando SQL, PL/SQL y Java, minimizando tiempos de inactividad.",
        "**Colaboración Ágil:** Gestioné solicitudes de cambio y seguimiento de incidentes con JIRA y Confluence en equipos distribuidos.",
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
    skills: ["React.js", "AWS Lambda", "API Gateway", "MySQL", "Node.js"],
    details: {
      en: [
        "**API Development:** Built REST APIs with AWS API Gateway and connected them to React front-end components for real-time data visualization.",
        "**Serverless Backend:** Implemented data processing logic using AWS Lambda (Node.js, Python) and MySQL to power automated analytical dashboards.",
        "**Technical Support:** Troubleshot backend and data-related issues, validating data accuracy across databases and resolving user-reported inconsistencies.",
        "**Agile Team:** Managed tasks through Git and JIRA, contributing to both development and technical support workflows in a small agile team.",
      ],
      es: [
        "**Desarrollo de APIs:** Construí REST APIs con AWS API Gateway conectadas a componentes React para visualización de datos en tiempo real.",
        "**Backend Serverless:** Implementé lógica de procesamiento de datos con AWS Lambda (Node.js, Python) y MySQL para dashboards analíticos automatizados.",
        "**Soporte Técnico:** Resolví problemas de backend e inconsistencias de datos, validando la precisión de información reportada por usuarios.",
        "**Equipo Ágil:** Gestioné tareas con Git y JIRA, contribuyendo tanto al desarrollo como al soporte técnico en un equipo ágil pequeño.",
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
      <strong key={i} className="text-dark-tertiary dark:text-white">
        {part.replace(/\*\*/g, "")}
      </strong>
    ) : (
      part
    ),
  );
};

function Experience() {
  const { language, isDarkMode } = useAppContext();

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-20 bg-light-background dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-tertiary dark:text-white">
            {language === "en" ? "Experience" : "Experiencia"}
          </h2>
          <div className="w-20 h-1.5 bg-light-tertiary dark:bg-dark-secondary mt-4"></div>
        </div>

        <div className="relative">
          {/* LÍNEA DEL TIMELINE: Posición ajustada para móviles (left-8) */}
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-[2px] bg-gray-200 dark:bg-white/10"></div>

          <div className="space-y-16 md:space-y-24">
            {experiences.map((exp, i) => {
              const logoToShow =
                exp.company === "QALI-T" && isDarkMode
                  ? exp.photoDark
                  : exp.photo;

              return (
                <div
                  key={i}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-16"
                >
                  {/* Contenedor del Logo con Ring para resaltar sobre la línea */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-dark-tertiary p-3 shadow-xl border border-gray-100 dark:border-white/5 flex items-center justify-center overflow-hidden ring-4 ring-light-background dark:ring-dark-primary">
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
                      <span className="text-xs font-mono font-bold text-light-tertiary dark:text-dark-secondary tracking-widest uppercase mb-1">
                        {exp.period[language]}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-dark-tertiary dark:text-white leading-tight">
                        {exp.role[language]}
                      </h3>
                      <a
                        href={exp.socials}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-lg font-medium text-dark-secondary/70 dark:text-gray-400 hover:text-light-tertiary dark:hover:text-dark-secondary transition-colors w-fit italic"
                      >
                        {exp.company}
                      </a>
                    </div>

                    {/* Skills badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-[10px] font-bold border border-gray-200 dark:border-white/10 dark:text-gray-300 text-dark-secondary/80 rounded uppercase bg-white/50 dark:bg-white/5"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* Detalles con texto blanco puro en dark mode */}
                    <ul className="space-y-4">
                      {exp.details[language].map((item, index) => (
                        <li
                          key={index}
                          className="flex gap-3 text-dark-secondary dark:text-gray-200 leading-relaxed text-[15px] md:text-[16px]"
                        >
                          <span className="text-light-tertiary dark:text-dark-secondary font-bold mt-1">
                            •
                          </span>
                          <div className="flex-grow">{renderDetail(item)}</div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
