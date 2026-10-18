import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SectionHeader from "../components/SectionHeader";
import { RevealGroup, RevealItem } from "../components/Reveal";

const roles = [
  {
    company: "QALI-T",
    role: { en: "Software Engineer", es: "Ingeniero de Software" },
    period: { en: "2025 — Present", es: "2025 — Presente" },
    blurb: {
      en: "Regulated KYC/AML account opening, finance apps on the App Store and Google Play, and 8+ apps in production.",
      es: "Apertura de cuentas regulada (KYC/AML), apps de finanzas en App Store y Google Play, y 8+ apps en producción.",
    },
  },
  {
    company: "Grupo FICOHSA (Bank)",
    role: { en: "Production Support Analyst / Backend Developer", es: "Analista de Soporte de Producción / Desarrollador Backend" },
    period: { en: "2024 — 2025", es: "2024 — 2025" },
    blurb: {
      en: "24/7 core banking support — cut international transfers from 8 days to 1.",
      es: "Soporte core bancario 24/7 — transferencias internacionales de 8 días a 1.",
    },
  },
  {
    company: "PIXDEA",
    role: { en: "Jr. Software Developer & Technical Support", es: "Desarrollador Jr. & Soporte Técnico" },
    period: { en: "2023 — 2024", es: "2023 — 2024" },
    blurb: {
      en: "Serverless backends on AWS Lambda and React dashboards.",
      es: "Backends serverless en AWS Lambda y dashboards en React.",
    },
  },
];

function ExperiencePreview() {
  const { language } = useAppContext();

  return (
    <section className="py-24 px-6 md:px-12 bg-light-section/60 dark:bg-dark-primary transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          kicker={language === "en" ? "03 — Path" : "03 — Trayectoria"}
          title={language === "en" ? "Where I've been" : "Dónde he estado"}
        />

        <RevealGroup className="divide-y divide-light-tertiary dark:divide-white/10 border-y border-light-tertiary dark:border-white/10">
          {roles.map((r) => (
            <RevealItem key={r.company}>
              <Link
                to="/experience"
                className="group grid md:grid-cols-[1fr_auto] gap-2 md:gap-8 items-center py-7 px-2 md:px-4 hover:bg-white dark:hover:bg-white/[0.03] rounded-lg transition-colors duration-300"
              >
                <div>
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <h3 className="font-display text-xl md:text-2xl font-medium text-light-primary dark:text-dark-font_primary group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors">
                      {r.role[language]}
                    </h3>
                    <span className="text-zinc-500 dark:text-dark-font text-sm md:text-base">
                      @ {r.company}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-500 dark:text-dark-font/80 mt-1">
                    {r.blurb[language]}
                  </p>
                </div>
                <div className="flex items-center gap-4 justify-between md:justify-end">
                  <span className="text-xs font-mono text-zinc-400 dark:text-dark-font/60">
                    {r.period[language]}
                  </span>
                  <span
                    aria-hidden="true"
                    className="text-light-secondary dark:text-dark-secondary transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </Link>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default ExperiencePreview;
