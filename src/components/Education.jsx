import { useAppContext } from "../context/AppContext";
import SectionHeader from "./SectionHeader";
import Reveal from "./Reveal";

const WES_BADGE_URL =
  "https://www.credly.com/badges/f7b85e20-cd69-468e-b788-b4f692619e9d/public_url";

function Education() {
  const { language } = useAppContext();

  return (
    <section
      id="education"
      className="py-24 px-6 md:px-12 bg-light-background dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        <SectionHeader
          kicker={language === "en" ? "02 — Education" : "02 — Educación"}
          title={
            language === "en" ? (
              <>
                Academic <em className="italic text-light-secondary dark:text-dark-secondary">background</em>
              </>
            ) : (
              <>
                Formación <em className="italic text-light-secondary dark:text-dark-secondary">académica</em>
              </>
            )
          }
        />

        <Reveal>
          <div className="rounded-3xl bg-white dark:bg-dark-tertiary/60 border border-light-tertiary dark:border-white/5 p-7 md:p-10 flex flex-col md:flex-row md:items-center gap-8 md:gap-12 transition-colors duration-500">
            <div className="flex-grow">
              <p className="text-xs font-mono font-bold text-light-secondary dark:text-dark-secondary tracking-widest uppercase mb-2">
                2020 — 2024
              </p>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-light-primary dark:text-white leading-tight">
                {language === "en" ? "B.S. Systems Engineering" : "Ingeniería en Sistemas"}
              </h3>
              <p className="text-lg font-medium text-zinc-500 dark:text-dark-font italic mt-1">
                Universidad Nacional Autónoma de Honduras
              </p>

              <div className="mt-6 flex items-start gap-3 p-4 rounded-xl bg-gradient-to-br from-light-secondary/5 to-transparent dark:from-dark-secondary/10 dark:to-transparent border border-light-secondary/20 dark:border-dark-secondary/20">
                <svg
                  className="w-5 h-5 mt-0.5 flex-shrink-0 text-light-secondary dark:text-dark-secondary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <p className="text-sm md:text-[15px] text-zinc-700 dark:text-dark-font_primary leading-snug">
                  {language === "en"
                    ? "Degree verified by World Education Services (WES) — authenticity, accreditation and U.S. equivalency evaluated."
                    : "Título verificado por World Education Services (WES) — autenticidad, acreditación y equivalencia en EE.UU. evaluadas."}
                </p>
              </div>
            </div>

            <a
              href={WES_BADGE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex-shrink-0 self-center flex flex-col items-center gap-3"
              aria-label={
                language === "en"
                  ? "View WES verified credential badge on Credly"
                  : "Ver badge de credencial verificada por WES en Credly"
              }
            >
              <img
                src="/badges/wes.png"
                alt="WES Verified International Academic Qualifications badge"
                width="140"
                height="140"
                loading="lazy"
                className="w-32 h-32 md:w-36 md:h-36 object-contain transition-transform duration-300 group-hover:-translate-y-1"
              />
              <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-light-secondary dark:text-dark-secondary">
                {language === "en" ? "Verify on Credly" : "Verificar en Credly"}
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default Education;
