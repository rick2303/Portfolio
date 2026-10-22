import { Link } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import usePageTitle from "../hooks/usePageTitle";
import { useAppContext } from "../context/AppContext";

function NotFound() {
  const { language } = useAppContext();
  usePageTitle(language === "en" ? "Page not found" : "Página no encontrada");

  return (
    <PageTransition>
      <section className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-32 pb-24 bg-light-background dark:bg-dark-primary transition-colors duration-500">
        <div className="max-w-xl text-center">
          <p className="text-xs font-mono font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 mb-4">
            404
          </p>
          <h1 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-light-primary dark:text-dark-font_primary leading-[1.1] mb-5">
            {language === "en" ? "This page doesn't exist" : "Esta página no existe"}
          </h1>
          <p className="text-base md:text-lg text-zinc-600 dark:text-dark-font leading-relaxed mb-10">
            {language === "en"
              ? "The link may be outdated. Everything I've built is in the projects section."
              : "Puede que el enlace esté desactualizado. Todo lo que he construido está en la sección de proyectos."}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl bg-light-primary dark:bg-dark-font_primary text-white dark:text-dark-primary font-semibold text-sm hover:opacity-90 transition-opacity duration-300"
            >
              {language === "en" ? "Back to home" : "Volver al inicio"}
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center justify-center px-6 py-3 rounded-2xl border border-light-tertiary dark:border-white/15 font-semibold text-sm text-light-primary dark:text-dark-font_primary hover:border-light-secondary/50 dark:hover:border-dark-secondary/50 transition-all duration-300"
            >
              {language === "en" ? "View projects" : "Ver proyectos"}
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default NotFound;
