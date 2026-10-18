import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import ProjectPreview from "./ProjectPreview";
import { StoreIcon } from "./StoreBadges";
import { projectCategories } from "../data/projects";

// Modal de detalle de proyecto: imagen grande, descripción completa y accesos
// al sitio live / repositorio. `project` null => cerrado.
function ProjectModal({ project, language, onClose }) {
  const reduced = useReducedMotion();
  const panelRef = useRef(null);

  useEffect(() => {
    if (!project) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [project, onClose]);

  const isGithub = Boolean(project?.link?.includes("github"));
  const liveUrl = project ? project.live || (isGithub ? null : project.link) || null : null;
  const isPrivate = Boolean(project && !project.link && !project.live);
  const repoUrl = project ? project.repo || (isGithub ? project.link : null) : null;
  const category = project
    ? projectCategories.find((c) => c.id === project.category)
    : null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <Motion.div
          className="fixed inset-0 z-[100] flex items-start md:items-center justify-center p-0 md:p-6 overflow-y-auto"
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? undefined : { opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-zinc-900/50 dark:bg-black/70 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />

          <Motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-label={project.title[language]}
            tabIndex={-1}
            initial={reduced ? false : { opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduced ? undefined : { opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative w-full max-w-4xl my-0 md:my-auto bg-white dark:bg-dark-tertiary md:rounded-3xl border border-light-tertiary dark:border-white/10 shadow-2xl shadow-zinc-900/20 dark:shadow-black/60 overflow-hidden focus:outline-none"
          >
            {/* Cerrar */}
            <button
              type="button"
              onClick={onClose}
              aria-label={language === "en" ? "Close" : "Cerrar"}
              className="absolute top-4 right-4 z-20 p-2 rounded-full backdrop-blur-md bg-white/85 dark:bg-dark-primary/80 border border-white/40 dark:border-white/10 text-zinc-700 dark:text-dark-font_primary shadow-sm hover:bg-white dark:hover:bg-dark-primary transition-colors duration-300"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                viewBox="0 0 24 24"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Imagen grande */}
            <div className="group relative bg-light-section dark:bg-dark-primary">
              <ProjectPreview
                image={project.image}
                imageMobile={project.imageMobile}
                alt={project.title[language]}
                className="aspect-[16/10] md:aspect-[16/8]"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/25 via-transparent to-transparent pointer-events-none" />
              </ProjectPreview>
            </div>

            {/* Contenido */}
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="text-xs font-mono font-medium text-zinc-400 dark:text-dark-font/70">
                  {project.year}
                </span>
                <span className="w-6 h-[1px] bg-zinc-300 dark:bg-white/15" />
                {category && (
                  <span className="text-[10px] font-bold tracking-wider uppercase text-zinc-500 dark:text-dark-font">
                    {category[language]}
                  </span>
                )}
                <span className="flex items-center gap-1.5 text-[10px] font-bold tracking-wider uppercase text-zinc-500 dark:text-dark-font">
                  <span className="relative flex h-2 w-2">
                    {(liveUrl || isPrivate) && (
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-2 w-2 ${
                        liveUrl || isPrivate ? "bg-emerald-500" : "bg-zinc-400"
                      }`}
                    />
                  </span>
                  {liveUrl
                    ? "Live"
                    : isPrivate
                      ? language === "en"
                        ? "In production"
                        : "En producción"
                      : "Code"}
                </span>
              </div>

              <h2 className="font-display text-2xl md:text-3xl font-medium tracking-tight text-light-primary dark:text-dark-font_primary leading-tight mb-5">
                {project.title[language]}
              </h2>

              <p className="text-zinc-600 dark:text-dark-font leading-relaxed text-[15px] md:text-base whitespace-pre-line">
                {project.description[language]}
              </p>

              {project.tech?.length > 0 && (
                <div className="mt-6">
                  <h3 className="text-[10px] font-bold tracking-wider uppercase text-zinc-400 dark:text-dark-font/70 mb-3">
                    {language === "en" ? "Tech stack" : "Tecnologías"}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 text-[11px] font-semibold rounded-md bg-light-secondary/10 dark:bg-dark-secondary/10 text-light-secondary dark:text-dark-secondary border border-light-secondary/20 dark:border-dark-secondary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Acciones */}
              <div className="mt-8 pt-6 border-t border-light-tertiary/70 dark:border-white/10 flex flex-col sm:flex-row gap-3">
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl bg-light-primary dark:bg-dark-font_primary text-white dark:text-dark-primary font-semibold text-sm hover:opacity-90 transition-opacity duration-300"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                      <path d="M15 3h6v6M10 14L21 3" />
                    </svg>
                    {language === "en" ? "Visit live site" : "Ver proyecto live"}
                  </a>
                )}

                {project.stores?.map((store) => (
                  <a
                    key={store.url}
                    href={store.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-light-tertiary dark:border-white/15 font-semibold text-sm text-light-primary dark:text-dark-font_primary hover:border-light-secondary/50 dark:hover:border-dark-secondary/50 hover:bg-light-section dark:hover:bg-white/5 transition-all duration-300"
                  >
                    <StoreIcon label={store.label} />
                    {store.label}
                  </a>
                ))}

                {isPrivate && (
                  <p className="self-center text-sm text-zinc-500 dark:text-dark-font">
                    {language === "en"
                      ? "Private client system. Walkthrough available in interview."
                      : "Sistema privado de cliente. Demo disponible en entrevista."}
                  </p>
                )}

                {repoUrl && (
                  <a
                    href={repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-2xl border border-light-tertiary dark:border-white/15 font-semibold text-sm text-light-primary dark:text-dark-font_primary hover:border-light-secondary/50 dark:hover:border-dark-secondary/50 hover:bg-light-section dark:hover:bg-white/5 transition-all duration-300"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.68-.22.68-.48l-.01-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0112 6.8c.85 0 1.71.11 2.51.34 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85l-.01 2.75c0 .27.18.58.69.48A10 10 0 0022 12c0-5.52-4.48-10-10-10z" />
                    </svg>
                    {language === "en" ? "View code" : "Ver código"}
                  </a>
                )}

                <button
                  type="button"
                  onClick={onClose}
                  className="sm:ml-auto inline-flex items-center justify-center px-6 py-3 rounded-2xl text-sm font-semibold text-zinc-500 dark:text-dark-font hover:text-light-primary dark:hover:text-dark-font_primary transition-colors duration-300"
                >
                  {language === "en" ? "Close" : "Cerrar"}
                </button>
              </div>
            </div>
          </Motion.div>
        </Motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}

export default ProjectModal;
