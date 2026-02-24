import { useAppContext } from "../context/AppContext";

const experiences = [
  {
    company: "QALI-T",
    role: {
      en: "Application Support Engineer",
      es: "Ingeniero de Soporte de Aplicaciones",
    },
    period: { en: "May 2025 - Present", es: "Mayo 2025 - Presente" },
    skills: [
      "SQL",
      "Backend logic",
      "Third-party Integrations",
      "Production Support",
    ],
    details: {
      en: [
        "**System Availability:** Ensure the stability and high availability of production web applications (fynq.site, qali-t.com, olanchito.com, lz-englishacademy.com).",
        "**Incident Management:** Identify root causes and implement backend fixes to resolve complex system issues.",
        "**Third-party Integrations:** Manage identity verification workflows (Didit) ensuring secure and reliable data flows.",
        "**Strategic Collaboration:** Translate production incidents into actionable technical solutions with cross-functional teams.",
      ],
      es: [
        "**Disponibilidad del Sistema:** Garantizo la estabilidad y alta disponibilidad de aplicaciones web (fynq.site, qali-t.com).",
        "**Gestión de Incidentes:** Identifico causas raíz e implemento correcciones de backend para resolver incidencias complejas.",
        "**Integraciones Críticas:** Gestiono flujos de verificación de identidad (Didit) asegurando procesos seguros y confiables.",
        "**Colaboración Estratégica:** Traduzco incidentes de producción en soluciones técnicas accionables junto a equipos técnicos.",
      ],
    },
    socials: "https://qali-t.com",
    photo: "/company/qalit.png",
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
        "**Process Optimization:** Reduced international transfer processing time from 8 days to just 1 day.",
        "**Core Banking Support:** Ensured 24/7 availability for critical financial systems in production environments.",
        "**SLA Compliance:** Resolved complex incidents using SQL and PL/SQL while strictly meeting technical requirements.",
        "**Regional Integration:** Led onboarding flows for partner banks to accelerate regional expansion.",
      ],
      es: [
        "**Optimización de Procesos:** Reduje el tiempo de procesamiento de transferencias internacionales de 8 días a solo 1 día.",
        "**Soporte Core Bancario:** Garanticé disponibilidad 24/7 para sistemas financieros críticos en entornos de producción.",
        "**Cumplimiento de SLA:** Resolví incidentes complejos usando SQL y PL/SQL bajo estrictos estándares de calidad.",
        "**Integración Regional:** Lideré flujos de incorporación para bancos aliados acelerando la expansión regional.",
      ],
    },
    socials: "https://ficohsa.com",
    photo: "/company/ficoLogo.png",
  },
  {
    company: "PIXDEA",
    role: {
      en: "Technical Support Engineer",
      es: "Ingeniero de Soporte Técnico",
    },
    period: { en: "Nov 2023 - March 2024", es: "Nov 2023 - Marzo 2024" },
    skills: ["AWS Lambda", "RDS MySQL", "API Gateway", "Cloud Monitoring"],
    details: {
      en: [
        "**Cloud Operations:** Troubleshot backend inconsistencies in cloud-native applications using AWS services.",
        "**Serverless Support:** Managed serverless APIs (Lambda, RDS, API Gateway) to ensure reliable data architecture.",
        "**Data Monitoring:** Specialized in creating monitoring dashboards to track system performance and data accuracy.",
        "**Agile Resolution:** Solved technical issues efficiently in agile environments for a seamless user experience.",
      ],
      es: [
        "**Operaciones Cloud:** Resolví inconsistencias de backend en aplicaciones nativas de la nube mediante servicios AWS.",
        "**Soporte Serverless:** Gestioné APIs serverless (Lambda, RDS, API Gateway) asegurando la confiabilidad de los datos.",
        "**Monitoreo de Datos:** Especializado en la creación de tableros de control para el rendimiento del sistema.",
        "**Resolución Ágil:** Resolví problemas técnicos eficientemente en entornos ágiles para mejorar la experiencia de usuario.",
      ],
    },
    socials: "https://pixdea.com",
    photo: "/company/logo_white.png",
  },
];

// Función para procesar negritas en los detalles
const renderDetail = (text) => {
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return parts.map((part, i) =>
    part.startsWith("**") && part.endsWith("**") ? (
      <strong
        key={i}
        className="text-dark-tertiary dark:text-dark-font_primary font-bold"
      >
        {part.replace(/\*\*/g, "")}
      </strong>
    ) : (
      part
    ),
  );
};

function Experience() {
  const { language } = useAppContext();

  return (
    <section
      id="experience"
      className="py-24 px-6 md:px-20 bg-light-background dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <div className="mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-tertiary dark:text-dark-font_primary">
            {language === "en" ? "Experience" : "Experiencia"}
          </h2>
          <div className="w-20 h-1.5 bg-light-tertiary dark:bg-dark-secondary mt-4"></div>
        </div>

        <div className="relative">
          <div className="absolute left-8 md:left-10 top-0 bottom-0 w-[1px] bg-gray-200 dark:bg-dark-tertiary/50"></div>

          <div className="space-y-20">
            {experiences.map((exp, i) => (
              <div
                key={i}
                className="relative flex flex-col md:flex-row gap-8 md:gap-16"
              >
                <div className="relative z-10 flex-shrink-0">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white dark:bg-dark-tertiary p-3 shadow-xl border border-gray-100 dark:border-dark-secondary/50 flex items-center justify-center overflow-hidden ring-8 ring-light-background dark:ring-dark-primary">
                    <img
                      src={exp.photo}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex-grow pt-2">
                  <div className="flex flex-col gap-1 mb-4">
                    <span className="text-xs font-mono font-bold text-light-tertiary dark:text-dark-secondary tracking-widest uppercase mb-1">
                      {exp.period[language]}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold text-dark-tertiary dark:text-dark-font_primary leading-tight">
                      {exp.role[language]}
                    </h3>
                    <a
                      href={exp.socials}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-lg font-medium text-dark-secondary/70 dark:text-dark-font/50 hover:text-light-tertiary transition-colors w-fit italic"
                    >
                      {exp.company}
                    </a>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-[10px] font-bold border border-gray-200 dark:border-dark-tertiary dark:text-dark-font text-dark-secondary/80 rounded uppercase tracking-wider bg-white/50 dark:bg-dark-tertiary/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-5">
                    {exp.details[language].map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-4 text-dark-secondary dark:text-dark-font/70 leading-relaxed text-[15px] md:text-[16px]"
                      >
                        <span className="text-light-tertiary dark:text-dark-secondary font-bold text-lg leading-none mt-1">
                          •
                        </span>
                        <p className="flex-grow">{renderDetail(item)}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
