import React from "react";

const ProjectCard = ({ title, description, year, image, link, language }) => {
  const isDark = document.documentElement.classList.contains("dark");

  return (
    <a href={link} target="_blank">
      <div className="rounded-xl bg-white  dark:bg-dark-tertiary shadow-lg border dark:border-gray-700 border-gray-200 overflow-hidden h-full flex flex-col">
        <img
          src={image}
          alt={title[language]}
          className="w-full h-48 object-cover border-b border-gray-200 dark:border-gray-600"
        />
        <div className="flex flex-col justify-between flex-1 p-4">
          <div>
            <h3 className="text-xl font-bold text-light-primary dark:text-dark-font_primary mb-1">
              {title[language]}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-sm">
              {description[language]}
            </p>
          </div>

          <div className="mt-4 bg-light-tertiary dark:bg-[#1B3C53] text-white text-xs font-semibold px-3 py-1 rounded-full w-fit">
            {year}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
