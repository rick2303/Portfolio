import Reveal from "./Reveal";
import ProjectPreview from "./ProjectPreview";
import StoreBadges from "./StoreBadges";

// Fila editorial grande para proyectos destacados del home.
// Alterna imagen izquierda/derecha según el índice.
function FeaturedProject({ project, index, language, onOpen }) {
  const isGithub = Boolean(project.link?.includes("github"));
  const reversed = index % 2 === 1;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen?.();
    }
  };

  return (
    <Reveal>
      <div
        role="button"
        tabIndex={0}
        aria-haspopup="dialog"
        onClick={() => onOpen?.()}
        onKeyDown={handleKeyDown}
        className={`group grid md:grid-cols-2 gap-8 md:gap-14 items-center cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-light-secondary dark:focus-visible:ring-dark-secondary rounded-3xl ${
          reversed ? "md:[direction:rtl]" : ""
        }`}
      >
        {/* Imagen */}
        <div className="[direction:ltr] relative rounded-3xl overflow-hidden border border-light-tertiary dark:border-white/5 bg-light-section dark:bg-dark-tertiary shadow-sm">
          <ProjectPreview
            image={project.image}
            imageMobile={project.imageMobile}
            alt={project.title[language]}
            className="aspect-[16/10]"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          </ProjectPreview>
        </div>

        {/* Contenido */}
        <div className="[direction:ltr]">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono font-medium text-zinc-400 dark:text-dark-font/70">
              {project.year}
            </span>
            <span className="w-6 h-[1px] bg-zinc-300 dark:bg-white/15" />
            <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-zinc-500 dark:text-dark-font">
              <span className="relative flex h-2 w-2">
                {!isGithub && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                )}
                <span
                  className={`relative inline-flex rounded-full h-2 w-2 ${
                    isGithub ? "bg-zinc-400" : "bg-emerald-500"
                  }`}
                ></span>
              </span>
              {isGithub
                ? "Code"
                : project.link
                  ? "Live"
                  : language === "en"
                    ? "In production"
                    : "En producción"}
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-light-primary dark:text-dark-font_primary leading-tight mb-4 group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors duration-300">
            {project.title[language]}
          </h3>

          <StoreBadges stores={project.stores} className="mb-4" />

          <p className="text-zinc-600 dark:text-dark-font leading-relaxed text-[15px] md:text-base mb-6 line-clamp-4">
            {project.description[language]}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-light-secondary/10 dark:bg-dark-secondary/10 text-light-secondary dark:text-dark-secondary border border-light-secondary/20 dark:border-dark-secondary/20"
              >
                {t}
              </span>
            ))}
          </div>

          <span className="inline-flex items-center gap-2 text-sm font-semibold text-light-secondary dark:text-dark-secondary">
            {language === "en" ? "View details" : "Ver detalles"}
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
          </span>
        </div>
      </div>
    </Reveal>
  );
}

export default FeaturedProject;
