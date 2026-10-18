import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SectionHeader from "../components/SectionHeader";
import FeaturedProject from "../components/FeaturedProject";
import ProjectModal from "../components/ProjectModal";
import Reveal from "../components/Reveal";
import { featuredProjects, projects } from "../data/projects";

function FeaturedProjects() {
  const { language } = useAppContext();
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="projects"
      className="py-24 px-6 md:px-12 bg-light-background dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          kicker={language === "en" ? "02 — Selected Work" : "02 — Trabajo Seleccionado"}
          title={
            language === "en" ? (
              <>
                Featured <em className="italic text-light-secondary dark:text-dark-secondary">projects</em>
              </>
            ) : (
              <>
                Proyectos <em className="italic text-light-secondary dark:text-dark-secondary">destacados</em>
              </>
            )
          }
          subtitle={
            language === "en"
              ? "A hand-picked selection of what I've been building lately."
              : "Una selección de lo que he estado construyendo últimamente."
          }
        />

        <div className="space-y-20 md:space-y-24">
          {featuredProjects.map((project, i) => (
            <FeaturedProject
              key={project.title.en}
              project={project}
              index={i}
              language={language}
              onOpen={() => setSelected(project)}
            />
          ))}
        </div>

        <Reveal className="mt-20 text-center">
          <Link
            to="/projects"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-light-tertiary dark:border-white/15 font-semibold text-light-primary dark:text-dark-font_primary hover:border-light-secondary/50 dark:hover:border-dark-secondary/50 hover:bg-light-section dark:hover:bg-white/5 transition-all duration-300"
          >
            {language === "en"
              ? `View all ${projects.length} projects`
              : `Ver los ${projects.length} proyectos`}
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </Reveal>
      </div>

      <ProjectModal
        project={selected}
        language={language}
        onClose={() => setSelected(null)}
      />
    </section>
  );
}

export default FeaturedProjects;
