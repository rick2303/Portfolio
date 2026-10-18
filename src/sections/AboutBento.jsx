import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SectionHeader from "../components/SectionHeader";
import { RevealGroup, RevealItem } from "../components/Reveal";

const stackGroups = [
  {
    label: { en: "Frontend & Mobile", es: "Frontend y Móvil" },
    items: ["React / Next.js", "React Native / Expo", "Ionic / Capacitor", "TypeScript"],
  },
  {
    label: { en: "Backend", es: "Backend" },
    items: ["Node.js", "NestJS", "Express", "Prisma", "C# / .NET"],
  },
  {
    label: { en: "Data, Cloud & Payments", es: "Datos, Cloud y Pagos" },
    items: ["SQL / PL-SQL", "PostgreSQL", "MySQL", "Supabase", "AWS", "Docker", "Stripe", "RevenueCat"],
  },
];

const cellClasses =
  "rounded-3xl bg-white dark:bg-dark-tertiary/60 border border-light-tertiary dark:border-white/5 p-7 md:p-8 transition-colors duration-500";

function AboutBento() {
  const { language } = useAppContext();

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 bg-light-section/60 dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker={language === "en" ? "01 — About" : "01 — Sobre mí"}
          title={language === "en" ? "How I work" : "Cómo trabajo"}
        />

        <RevealGroup className="grid md:grid-cols-6 gap-5">
          {/* Bio */}
          <RevealItem className={`${cellClasses} md:col-span-4`}>
            <div className="space-y-5 text-[16px] md:text-[17px] leading-relaxed text-zinc-700 dark:text-dark-font">
              {language === "en" ? (
                <>
                  <p>
                    I'm a systems engineer who fell in love with{" "}
                    <span className="font-semibold text-light-primary dark:text-dark-font_primary">
                      shipping
                    </span>
                    . My path started in core banking support at Ficohsa — debugging
                    production incidents that touched real money — and that's where I
                    learned what <em className="italic">"mission-critical"</em> actually
                    means.
                  </p>
                  <p>
                    Today I build web and mobile apps at QALI-T, from a regulated KYC/AML
                    account-opening platform to finance apps live on the App Store and
                    Google Play. I'd rather own a feature{" "}
                    <span className="font-semibold text-light-primary dark:text-dark-font_primary">
                      end-to-end
                    </span>{" "}
                    — schema → API → UI → deploy — than work in a narrow slice. I care
                    about apps that stay up on a Sunday night when something breaks.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    Soy ingeniero de sistemas y me enamoré del{" "}
                    <span className="font-semibold text-light-primary dark:text-dark-font_primary">
                      shipping
                    </span>
                    . Mi camino empezó en soporte core bancario en Ficohsa — depurando
                    incidentes que tocaban dinero real — y ahí aprendí lo que{" "}
                    <em className="italic">"crítico"</em> significa de verdad.
                  </p>
                  <p>
                    Hoy construyo apps web y móviles en QALI-T, desde una plataforma
                    regulada de apertura de cuentas con KYC/AML hasta apps de finanzas
                    publicadas en App Store y Google Play. Prefiero apropiarme de un feature{" "}
                    <span className="font-semibold text-light-primary dark:text-dark-font_primary">
                      de punta a punta
                    </span>{" "}
                    — schema → API → UI → deploy — antes que trabajar en un slice
                    estrecho. Me importan las apps que siguen corriendo un domingo en la
                    noche cuando algo se rompe.
                  </p>
                </>
              )}
            </div>
          </RevealItem>

          {/* Actualmente */}
          <RevealItem className={`${cellClasses} md:col-span-2 flex flex-col justify-between`}>
            <div>
              <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-light-secondary dark:text-dark-secondary mb-4">
                {language === "en" ? "Currently" : "Actualmente"}
              </p>
              <h3 className="font-display text-2xl font-medium text-light-primary dark:text-dark-font_primary mb-1">
                Software Engineer
              </h3>
              <a
                href="https://qali-t.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-500 dark:text-dark-font hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
              >
                @ QALI-T
              </a>
              <p className="text-sm text-zinc-400 dark:text-dark-font/70 mt-2 font-mono">
                {language === "en" ? "May 2025 — Present" : "Mayo 2025 — Presente"}
              </p>
            </div>
            <Link
              to="/experience"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-light-secondary dark:text-dark-secondary hover:gap-3 transition-all"
            >
              {language === "en" ? "Full experience" : "Ver experiencia completa"}
              <span aria-hidden="true">→</span>
            </Link>
          </RevealItem>

          {/* Stack */}
          <RevealItem className={`${cellClasses} md:col-span-3`}>
            <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-light-secondary dark:text-dark-secondary mb-5">
              {language === "en" ? "Core Stack" : "Stack Principal"}
            </p>
            <div className="space-y-4">
              {stackGroups.map((group) => (
                <div key={group.label.en}>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-zinc-400 dark:text-dark-font/70 mb-2">
                    {group.label[language]}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-2.5 py-1 text-[12px] font-semibold rounded-md bg-light-section dark:bg-white/5 text-zinc-700 dark:text-zinc-300 border border-light-tertiary dark:border-white/10"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RevealItem>

          {/* Idiomas */}
          <RevealItem className={`${cellClasses} md:col-span-2`}>
            <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-light-secondary dark:text-dark-secondary mb-5">
              {language === "en" ? "Languages" : "Idiomas"}
            </p>
            <div className="space-y-5">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-light-primary dark:text-dark-font_primary">
                    {language === "en" ? "Spanish" : "Español"}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-dark-font/70">
                    {language === "en" ? "Native" : "Nativo"}
                  </p>
                </div>
                <div className="w-full h-1.5 bg-light-section dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-full rounded-full bg-light-secondary dark:bg-dark-secondary" />
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="font-semibold text-light-primary dark:text-dark-font_primary">
                    {language === "en" ? "English" : "Inglés"}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-dark-font/70">
                    {language === "en" ? "Professional" : "Profesional"}
                  </p>
                </div>
                <div className="w-full h-1.5 bg-light-section dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 rounded-full bg-light-secondary dark:bg-dark-secondary" />
                </div>
              </div>
            </div>
          </RevealItem>

          {/* Ubicación */}
          <RevealItem
            className={`${cellClasses} md:col-span-1 flex flex-col items-start justify-between gap-6`}
          >
            <div className="w-10 h-10 rounded-xl bg-light-secondary/10 dark:bg-dark-secondary/10 flex items-center justify-center text-light-secondary dark:text-dark-secondary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-7-7-12a7 7 0 1114 0c0 5-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <p className="font-display text-xl font-medium text-light-primary dark:text-dark-font_primary leading-tight">
                Miami, FL
              </p>
              <p className="text-sm text-zinc-500 dark:text-dark-font mt-1">
                {language === "en" ? "Open to remote" : "Abierto a remoto"}
              </p>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}

export default AboutBento;
