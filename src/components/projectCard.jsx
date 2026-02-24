import React from "react";

const ProjectCard = ({ title, description, year, image, link, language }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <div className="relative rounded-2xl bg-white dark:bg-dark-tertiary/10 border border-gray-100 dark:border-dark-secondary/20 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-light-tertiary/10 dark:hover:shadow-dark-secondary/5 overflow-hidden h-full flex flex-col">
        {/* Contenedor de Imagen */}
        <div className="relative h-52 overflow-hidden">
          <img
            src={image}
            alt={title[language]}
            className="w-full h-full object-cover border-b border-gray-100 dark:border-dark-tertiary/50 transition-transform duration-700 group-hover:scale-105"
          />

          {/* Overlay suave al hacer hover */}
          <div className="absolute inset-0 bg-dark-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="bg-white dark:bg-dark-secondary text-dark-tertiary dark:text-white px-5 py-2 rounded-full text-xs font-bold shadow-xl">
              {language === "es" ? "Explorar Proyecto" : "Explore Project"}
            </span>
          </div>
        </div>

        {/* Contenido de la Tarjeta */}
        <div className="flex flex-col flex-1 p-6">
          <div className="flex justify-between items-start mb-4 gap-4">
            <h3 className="text-xl font-bold text-dark-tertiary dark:text-dark-font_primary group-hover:text-light-tertiary dark:group-hover:text-dark-secondary transition-colors duration-300 leading-tight">
              {title[language]}
            </h3>
            {/* FECHA: Color consistente en ambos modos para máxima legibilidad */}
            <span className="shrink-0 px-3 py-1 bg-gray-100 text-dark-secondary text-sm font-mono font-bold rounded-md border border-gray-200 shadow-sm">
              {year}
            </span>
          </div>

          <div className="flex-grow">
            <p className="text-dark-secondary/80 dark:text-dark-font/70 text-[15px] leading-relaxed line-clamp-4">
              {description[language]}
            </p>
          </div>

          {/* Footer: Más simple y funcional */}
          <div className="mt-6 pt-4 border-t border-gray-50 dark:border-dark-tertiary/30 flex items-center text-light-tertiary dark:text-dark-secondary font-bold text-sm">
            <span className="group-hover:mr-2 transition-all duration-300">
              {link.includes("github") ? "GitHub Repository" : "Live Demo"}
            </span>
            <svg
              className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-[-10px] group-hover:translate-x-0"
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
    </a>
  );
};

export default ProjectCard;
