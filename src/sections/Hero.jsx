import { Link } from "react-router-dom";
import { motion as Motion, useReducedMotion } from "motion/react";
import { useAppContext } from "../context/AppContext";

const ease = [0.21, 0.47, 0.32, 0.98];

function Hero() {
  const { language } = useAppContext();
  const reduced = useReducedMotion();
  const cvFile = "/Resume_FrankyInteriano.pdf";

  const fadeUp = (delay) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease },
        };

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-12 pt-28 pb-16 bg-light-background dark:bg-dark-primary transition-colors duration-500 overflow-hidden">
      {/* Glow cobre sutil */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[520px] w-[520px] rounded-full bg-light-secondary/10 dark:bg-dark-secondary/10 blur-[140px]"
      />

      <div className="relative w-full max-w-7xl mx-auto grid md:grid-cols-[1.2fr_0.8fr] gap-14 md:gap-20 items-center">
        {/* COLUMNA IZQUIERDA */}
        <div>
          {/* Foto en móvil (en desktop va en la columna derecha) */}
          <Motion.div
            {...fadeUp(0)}
            className="md:hidden mb-6 w-28 h-28 rounded-2xl overflow-hidden border border-light-tertiary dark:border-white/10 shadow-lg shadow-zinc-900/10 dark:shadow-black/40"
          >
            <img
              src="/headshot.webp"
              alt="Franky Interiano"
              className="w-full h-full object-cover object-[50%_30%] scale-[1.45] origin-[50%_42%]"
            />
          </Motion.div>

          {/* Status + Location */}
          <Motion.div {...fadeUp(0)} className="flex flex-wrap items-center gap-2 mb-8">
            <div className="inline-flex items-center gap-3 px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-400/20">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-bold tracking-wider uppercase text-emerald-700 dark:text-emerald-300">
                {language === "en" ? "Available for work" : "Disponible para trabajar"}
              </span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-light-secondary/10 dark:bg-dark-secondary/10 border border-light-secondary/20 dark:border-dark-secondary/25 text-light-secondary dark:text-dark-secondary">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21s-7-7-7-12a7 7 0 1114 0c0 5-7 12-7 12z" />
                <circle cx="12" cy="9" r="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="text-xs font-bold tracking-wider uppercase">Miami, FL</span>
            </div>
          </Motion.div>

          {/* Kicker */}
          <Motion.p
            {...fadeUp(0.08)}
            className="flex items-center gap-3 text-xs font-mono font-medium uppercase tracking-[0.3em] text-zinc-500 dark:text-zinc-400 mb-6"
          >
            <span className="inline-block w-8 h-[1px] bg-zinc-400 dark:bg-zinc-500" />
            Fintech · Production Support · Full-Stack
          </Motion.p>

          {/* Título */}
          <Motion.h1
            {...fadeUp(0.16)}
            className="font-display text-5xl md:text-7xl font-medium tracking-tight text-light-primary dark:text-dark-font_primary leading-[1.05] mb-8"
          >
            {language === "en" ? (
              <>
                Software
                <br />
                <em className="italic text-light-secondary dark:text-dark-secondary">
                  Engineer.
                </em>
              </>
            ) : (
              <>
                Ingeniero
                <br />
                <em className="italic text-light-secondary dark:text-dark-secondary">
                  de Software.
                </em>
              </>
            )}
          </Motion.h1>

          {/* Párrafo */}
          <Motion.p
            {...fadeUp(0.24)}
            className="text-lg md:text-xl text-zinc-600 dark:text-dark-font leading-relaxed mb-10 max-w-2xl"
          >
            {language === "en"
              ? "Hi, I'm Franky Interiano. Software engineer with 2.5+ years building and supporting production systems in banking and payments — from 24/7 core banking to a regulated KYC/AML account-opening platform. Strong in SQL, PL/SQL, TypeScript, C#/.NET and AWS. Bilingual EN/ES, U.S. permanent resident."
              : "Hola, soy Franky Interiano. Ingeniero de software con 2.5+ años construyendo y soportando sistemas en producción en banca y pagos — desde core bancario 24/7 hasta una plataforma regulada de apertura de cuentas con KYC/AML. Fuerte en SQL, PL/SQL, TypeScript, C#/.NET y AWS. Bilingüe EN/ES, residente permanente en EE.UU."}
          </Motion.p>

          {/* Botones */}
          <Motion.div {...fadeUp(0.32)} className="flex flex-col sm:flex-row gap-4">
            <a
              href={cvFile}
              download
              className="group px-7 py-3.5 bg-light-primary text-white dark:bg-dark-font_primary dark:text-dark-primary font-semibold tracking-tight rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/15 dark:hover:shadow-white/10 transition-all duration-300 text-center flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-light-background dark:focus-visible:ring-offset-dark-primary focus-visible:ring-light-secondary dark:focus-visible:ring-dark-secondary"
            >
              {language === "en" ? "Download Resume" : "Descargar CV"}
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>

            <Link
              to="/projects"
              className="group px-7 py-3.5 bg-transparent border border-light-tertiary dark:border-white/15 text-light-primary dark:text-dark-font_primary font-semibold tracking-tight rounded-2xl hover:bg-light-section dark:hover:bg-white/5 hover:border-light-secondary/50 dark:hover:border-dark-secondary/50 transition-all duration-300 text-center flex items-center justify-center gap-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-light-background dark:focus-visible:ring-offset-dark-primary focus-visible:ring-light-secondary dark:focus-visible:ring-dark-secondary"
            >
              {language === "en" ? "View Work" : "Ver Proyectos"}
              <svg
                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </Motion.div>

          {/* Track Record */}
          <Motion.div
            {...fadeUp(0.4)}
            className="mt-14 pt-8 border-t border-light-tertiary dark:border-white/10"
          >
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-10 max-w-2xl">
              {[
                { n: "8", plus: true, label: { en: "Apps in Production", es: "Apps en Producción" } },
                { n: "2", label: { en: "Apps on App Store & Google Play", es: "Apps en App Store y Google Play" } },
                { n: "2.5", plus: true, label: { en: "Years Experience", es: "Años de Experiencia" } },
                { n: "10", plus: true, label: { en: "Integrations", es: "Integraciones" } },
              ].map((stat) => (
                <div key={stat.label.en}>
                  <div className="font-display text-3xl md:text-4xl font-medium tracking-tight text-light-primary dark:text-dark-font_primary">
                    {stat.n}
                    {stat.plus && <span className="text-light-secondary dark:text-dark-secondary">+</span>}
                  </div>
                  <div className="text-[11px] md:text-xs font-medium uppercase tracking-wider text-zinc-500 dark:text-dark-font mt-1.5 leading-snug">
                    {stat.label[language]}
                  </div>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>

        {/* COLUMNA DERECHA: retrato editorial */}
        <Motion.div
          {...(reduced
            ? {}
            : {
                initial: { opacity: 0, scale: 0.96 },
                animate: { opacity: 1, scale: 1 },
                transition: { duration: 0.7, delay: 0.2, ease },
              })}
          className="relative hidden md:block max-w-sm w-full mx-auto"
        >
          <div className="relative rounded-[2rem] overflow-hidden border border-light-tertiary dark:border-white/10 shadow-2xl shadow-zinc-900/10 dark:shadow-black/40 bg-light-section dark:bg-dark-tertiary">
            <img
              src="/headshot.webp"
              alt="Franky Interiano"
              className="w-full aspect-[3/4] object-cover object-[50%_30%] scale-[1.12] origin-[50%_80%] transition-transform duration-700 hover:scale-[1.15]"
            />
            {/* Degradado sutil que ancla la foto al diseño */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/30 via-transparent to-transparent pointer-events-none"></div>
          </div>
        </Motion.div>
      </div>
    </section>
  );
}

export default Hero;
