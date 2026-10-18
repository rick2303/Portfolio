import ProjectPreview from "./ProjectPreview";
import StoreBadges from "./StoreBadges";

const ProjectCard = ({ title, description, year, image, imageMobile, link, stores, language, tech, onOpen }) => {
  const isGithub = Boolean(link?.includes("github"));

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen?.();
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-haspopup="dialog"
      onClick={() => onOpen?.()}
      onKeyDown={handleKeyDown}
      className="group block h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-light-secondary dark:focus-visible:ring-dark-secondary rounded-2xl"
    >
      <div className="relative rounded-2xl bg-white dark:bg-dark-tertiary/60 border border-light-tertiary dark:border-white/5 transition-all duration-500 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-zinc-900/5 dark:hover:shadow-black/40 hover:border-light-secondary/40 dark:hover:border-dark-secondary/30 overflow-hidden h-full flex flex-col">
        {/* Imagen */}
        <ProjectPreview
          image={image}
          imageMobile={imageMobile}
          alt={title[language]}
          className="h-52"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/30 via-transparent to-transparent opacity-60 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

          {/* Tag Live / Code */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md bg-white/85 dark:bg-dark-primary/70 border border-white/40 dark:border-white/10 shadow-sm">
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
            <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-800 dark:text-dark-font_primary">
              {isGithub ? "Code" : link ? "Live" : language === "en" ? "In production" : "En producción"}
            </span>
          </div>

          {/* Año */}
          <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md backdrop-blur-md bg-white/85 dark:bg-dark-primary/70 border border-white/40 dark:border-white/10 text-xs font-mono font-bold text-zinc-800 dark:text-dark-font_primary shadow-sm">
            {year}
          </div>
        </ProjectPreview>

        {/* Contenido */}
        <div className="flex flex-col flex-1 p-6">
          <h3 className="font-display text-xl font-medium tracking-tight text-light-primary dark:text-dark-font_primary group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors duration-300 leading-snug mb-3">
            {title[language]}
          </h3>

          <div className="flex-grow">
            <StoreBadges stores={stores} className="mb-3" />
            <p className="text-zinc-600 dark:text-dark-font text-[15px] leading-relaxed line-clamp-4">
              {description[language]}
            </p>
            {tech && tech.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mt-4">
                {tech.map((t, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-light-secondary/10 dark:bg-dark-secondary/10 text-light-secondary dark:text-dark-secondary border border-light-secondary/20 dark:border-dark-secondary/20 transition-colors group-hover:bg-light-secondary/15 dark:group-hover:bg-dark-secondary/15"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-light-tertiary/70 dark:border-white/5 flex items-center justify-between text-light-secondary dark:text-dark-secondary font-semibold text-sm">
            <span className="transition-all duration-300">
              {language === "en" ? "View details" : "Ver detalles"}
            </span>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
