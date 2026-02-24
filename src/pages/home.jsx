import { useAppContext } from "../context/AppContext";

function Home() {
  const { language } = useAppContext();
  const cvFile =
    language === "en"
      ? "/Resume_FrankyInteriano_Support.pdf"
      : "/Resume_FrankyInteriano_Support.pdf";

return (
    <section className="min-h-screen flex items-center justify-center p-6 md:p-12 bg-light-background dark:bg-dark-primary transition-colors duration-500">
      
      {/* CONTENEDOR PRINCIPAL: Ahora usa bg-white en light y dark-tertiary en dark */}
      <div className="mt-9 w-full max-w-7xl flex flex-col-reverse md:flex-row bg-white dark:bg-dark-tertiary rounded-[2.5rem] shadow-2xl overflow-hidden border border-light-tertiary dark:border-white/5">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="md:w-[65%] p-10 md:p-16 lg:p-20 flex flex-col justify-center">
          
          {/* Status Badge */}
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-bold tracking-wider uppercase text-light-secondary dark:text-dark-secondary">
              {language === "en" ? "Available for work" : "Disponible para trabajar"}
            </span>
          </div>

          {/* Título: Usamos light-primary (Slate oscuro) en modo claro */}
          <h1 className="text-4xl md:text-6xl font-bold text-light-primary dark:text-dark-font_primary leading-[1.1] mb-6">
            {language === "en" ? (
              <>
                Application Support <br />
                <span className="text-light-secondary dark:text-dark-secondary">
                  Engineer.
                </span>
              </>
            ) : (
              <>
                Ingeniero de Soporte <br />
                <span className="text-light-secondary dark:text-dark-secondary">
                  de Aplicaciones.
                </span>
              </>
            )}
          </h1>

          {/* Párrafo: Gris Slate balanceado para lectura */}
          <p className="text-lg md:text-xl text-slate-600 dark:text-dark-font leading-relaxed mb-10 max-w-2xl">
            {language === "en"
              ? "Hi, I'm Franky Interiano. IT professional with proven experience supporting production systems in banking and web-based environments. I specialize in resolving critical incidents and optimizing SQL databases."
              : "Hola, soy Franky Interiano. Profesional de TI con experiencia comprobada soportando sistemas de producción en entornos bancarios y web. Me especializo en resolver incidentes críticos y optimizar bases de datos SQL."}
          </p>

          {/* Botones */}
          <div className="flex flex-col sm:flex-row gap-5">
            <a
              href={cvFile}
              download
              className="px-8 py-4 bg-light-secondary text-white dark:bg-dark-font_primary dark:text-dark-primary font-bold rounded-2xl hover:-translate-y-1 hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
            >
              {language === "en" ? "Download Resume" : "Descargar CV"}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </a>

            <a
              href="#projects"
              className="px-8 py-4 bg-transparent border-2 border-light-tertiary text-light-primary dark:border-dark-secondary dark:text-dark-font_primary font-bold rounded-2xl hover:bg-slate-100 dark:hover:bg-dark-secondary/10 transition-all text-center"
            >
              {language === "en" ? "View Work" : "Ver Proyectos"}
            </a>
          </div>

          {/* Expertise: Border sutil */}
          <div className="mt-12 pt-8 border-t border-light-tertiary dark:border-white/10">
            <p className="text-sm font-semibold uppercase tracking-widest text-slate-400 dark:text-dark-secondary mb-4">
              {language === "en" ? "Core Expertise" : "Especialidad Principal"}
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-light-primary dark:text-dark-font font-medium">
              <span>Production Support</span>
              <span className="hidden sm:inline opacity-30">•</span>
              <span>SQL / PL-SQL</span>
              <span className="hidden sm:inline opacity-30">•</span>
              <span>Incident Resolution</span>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA */}
        <div className="md:w-[35%] relative min-h-[350px] md:min-h-auto overflow-hidden bg-slate-200 dark:bg-dark-secondary">
          <img
            src="/profile2.jpeg"
            alt="Franky Interiano"
            className="absolute inset-0 w-full h-full object-cover grayscale-[20%] contrast-110 transition-transform duration-700 hover:scale-105"
          />
          {/* Overlay sutil para la imagen */}
          <div className="absolute inset-0 bg-light-primary/5 dark:bg-dark-primary/20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;