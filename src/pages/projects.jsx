import ProjectCard from "../components/projectCard";
import { useAppContext } from "../context/AppContext";

const projects = [
    {
    title: {
      en: "Personal portfolio",
      es: "Portafolio personal",
    },
    description: {
      en: "Personal portfolio made with React JS, Tailwind, and Vite",
      es: "Portafolio personal realizado con React JS, Tailwind y Vite",
    },
    year: "2025",
    image: "/projects/portfolio.png",
    link: "https://github.com/rick2303/Portfolio",
  },
  {
    title: {
      en: "UNAH Enrollment System",
      es: "Sistema de matrícula de la UNAH",
    },
    description: {
      en: "UNAH enrollment system developed as a class project for Software Engineering, proposed as an improvement to the university’s current enrollment platform.",
      es: "Sistema de matricula de la UNAH como proyecto de clase para ingeniería de software como una propuesta de mejoramiento al sistema de matricula de la universidad.",
    },
    year: "2023",
    image: "/projects/unah.jpeg",
    link: "https://github.com/rick2303/RegistroUNAH",
  },
  {
    title: { en: "CPM_LATAM", es: "CPM_LATAM" },
    description: {
      en: "Web simulator developed for the Simulation Theory course, allowing real-time calculations and visual projections of the impact of migration on the population of various American countries.",
      es: "Simulador web para la clase de teoría de la simulación que permite calcular y ver en tiempo real las proyecciones del impacto que tiene la migración en la población de distintos países de América.",
    },
    year: "2023",
    image: "/projects/cpm.png",
    link: "https://github.com/rick2303/CPM_LATAM",
  },
  {
    title: { en: "CREW", es: "CREW" },
    description: {
      en: "Web-based delivery service application created as part of the Object-Oriented Programming class project.",
      es: "Aplicacion web de servicios delivery como parte del proyecto de la clase de programación orientada a objetos.",
    },
    year: "2022",
    image: "/projects/crew.png",
    link: "https://github.com/rick2303/CREW",
  },
];

function ProjectsSection() {
  const { language } = useAppContext();

  return (
    <section
      id="projects"
      className="min-h-screen px-4 md:px-20 py-20 bg-light-secondary dark:bg-dark-primary text-light-primary dark:text-white transition-all duration-300 ease-in-out"
    >
      <h2 className="text-3xl font-bold text-center text-light-primary dark:text-dark-font_primary mb-8">
        {language === "es" ? "Proyectos" : "Projects"}
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} language={language} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
