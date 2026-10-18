import { useMemo, useState } from "react";
import { AnimatePresence, motion as Motion, useReducedMotion } from "framer-motion";
import ProjectCard from "../components/projectCard";
import ProjectModal from "../components/ProjectModal";
import SectionHeader from "../components/SectionHeader";
import PageTransition from "../components/PageTransition";
import usePageTitle from "../hooks/usePageTitle";
import { useAppContext } from "../context/AppContext";
import { projects, projectCategories } from "../data/projects";

function ProjectsPage() {
  const { language } = useAppContext();
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const reduced = useReducedMotion();
  usePageTitle(language === "en" ? "Projects" : "Proyectos");

  const filtered = useMemo(
    () => (filter === "all" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <PageTransition>
      <section className="min-h-screen px-6 md:px-12 pt-32 pb-24 bg-light-background dark:bg-dark-primary transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            kicker={language === "en" ? "Archive" : "Archivo"}
            title={
              language === "en" ? (
                <>
                  All <em className="italic text-light-secondary dark:text-dark-secondary">projects</em>
                </>
              ) : (
                <>
                  Todos los <em className="italic text-light-secondary dark:text-dark-secondary">proyectos</em>
                </>
              )
            }
            subtitle={
              language === "en"
                ? "Production apps, marketing sites and automation experiments — filter by type to explore."
                : "Apps en producción, sitios de marketing y experimentos de automatización — filtra por tipo para explorar."
            }
          />

          {/* Filtros */}
          <div className="flex flex-wrap gap-2 mb-12">
            {projectCategories.map((cat) => {
              const active = filter === cat.id;
              const count =
                cat.id === "all"
                  ? projects.length
                  : projects.filter((p) => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 border ${
                    active
                      ? "text-white dark:text-dark-primary border-transparent"
                      : "text-zinc-600 dark:text-dark-font border-light-tertiary dark:border-white/10 hover:border-light-secondary/50 dark:hover:border-dark-secondary/50 hover:text-light-secondary dark:hover:text-dark-secondary"
                  }`}
                >
                  {active && (
                    <Motion.span
                      layoutId={reduced ? undefined : "filter-pill"}
                      className="absolute inset-0 rounded-full bg-light-primary dark:bg-dark-font_primary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    {cat[language]}
                    <span
                      className={`text-[11px] font-mono ${
                        active
                          ? "text-white/60 dark:text-dark-primary/60"
                          : "text-zinc-400 dark:text-dark-font/60"
                      }`}
                    >
                      {count}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grid con animación de layout */}
          <Motion.div layout={!reduced} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filtered.map((project) => (
                <Motion.div
                  key={project.title.en}
                  layout={!reduced}
                  initial={reduced ? false : { opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduced ? undefined : { opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
                >
                  <ProjectCard
                    {...project}
                    language={language}
                    onOpen={() => setSelected(project)}
                  />
                </Motion.div>
              ))}
            </AnimatePresence>
          </Motion.div>
        </div>

        <ProjectModal
          project={selected}
          language={language}
          onClose={() => setSelected(null)}
        />
      </section>
    </PageTransition>
  );
}

export default ProjectsPage;
