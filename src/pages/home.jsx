import { useAppContext } from "../context/AppContext";

function Home() {
  const { language } = useAppContext();
  const cvFile =
    language === "en"
      ? "/Resume_FrankyInteriano_Support.pdf"
      : "/Resume_FrankyInteriano_Support.pdf";

  return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-light-background dark:bg-dark-primary transition-colors duration-500">
      {/* CONTENEDOR PRINCIPAL: Tarjeta Gigante Asimétrica */}
      <div className="w-full max-w-7xl flex flex-col-reverse md:flex-row bg-light-secondary dark:bg-dark-tertiary rounded-[2.5rem] shadow-2xl overflow-hidden border border-light-primary/40 dark:border-dark-secondary/30">
        {/* COLUMNA IZQUIERDA: Contenido ampliado (65% del ancho en Desktop) */}
        <div className="md:w-[65%] p-10 md:p-16 lg:p-20 flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold tracking-wider uppercase text-dark-secondary dark:text-dark-font">
              {language === "en"
                ? "Available for work"
                : "Disponible para trabajar"}
            </span>
          </div>

          {/* Título enfocado 100% en Soporte */}
          <h1 className="text-4xl md:text-6xl font-bold text-dark-tertiary dark:text-dark-font_primary leading-[1.1] mb-6">
            {language === "en" ? (
              <>
                Application Support <br />{" "}
                <span className="text-light-tertiary dark:text-dark-secondary">
                  Engineer.
                </span>
              </>
            ) : (
              <>
                Ingeniero de Soporte <br />{" "}
                <span className="text-light-tertiary dark:text-dark-secondary">
                  de Aplicaciones.
                </span>
              </>
            )}
          </h1>

          {/* Resumen basado en tu CV (Bancos, SQL, Incidentes) */}
          <p className="text-lg md:text-xl text-dark-tertiary/80 dark:text-dark-font leading-relaxed mb-10 max-w-2xl">
            {language === "en"
              ? "Hi, I'm Franky Interiano. IT professional with proven experience supporting production systems in banking and web-based environments. I specialize in resolving critical incidents, troubleshooting backend systems, and optimizing SQL databases to ensure high availability."
              : "Hola, soy Franky Interiano. Profesional de TI con experiencia comprobada soportando sistemas de producción en entornos bancarios y web. Me especializo en resolver incidentes críticos, solucionar problemas de backend y optimizar bases de datos SQL para asegurar alta disponibilidad."}
          </p>

          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href={cvFile}
              download
              className="px-8 py-4 bg-dark-tertiary text-light-secondary dark:bg-dark-font_primary dark:text-dark-tertiary font-bold rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
            >
              {language === "en" ? "Download Resume" : "Descargar CV"}
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                ></path>
              </svg>
            </a>

            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-dark-tertiary/20 text-dark-tertiary dark:border-dark-secondary dark:text-dark-font_primary font-bold rounded-2xl hover:bg-dark-tertiary/5 dark:hover:bg-dark-secondary/20 transition-all text-center"
            >
              {language === "en" ? "View Work" : "Ver Proyectos"}
            </a>
          </div>

          {/* Stacks sacados directamente de tu CV */}
          <div className="mt-12 pt-8 border-t border-light-primary/30 dark:border-dark-secondary/30">
            <p className="text-sm font-semibold uppercase tracking-widest text-light-tertiary dark:text-dark-secondary mb-4">
              {language === "en" ? "Core Expertise" : "Especialidad Principal"}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-dark-tertiary dark:text-dark-font font-medium">
              <span>Production Support</span>
              <span className="hidden sm:inline">•</span>
              <span>SQL / PL-SQL</span>
              <span className="hidden sm:inline">•</span>
              <span>Incident Resolution</span>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: Imagen reducida (35% del ancho) */}
        <div className="md:w-[35%] relative min-h-[350px] md:min-h-auto overflow-hidden bg-light-tertiary dark:bg-dark-secondary">
          <img
            src="/profile2.jpeg"
            alt="Franky Interiano"
            className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
          />
          {/* Gradiente para suavizar bordes */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
