import ProjectCard from "../components/projectCard";
import { useAppContext } from "../context/AppContext";
const projects = [
  {
    title: {
      en: "Payment Gateway Integration - LZ Academy",
      es: "Integración de Pasarela de Pagos - LZ Academy",
    },
    description: {
      en: "Full-stack implementation of Stripe API for an English Academy. I manage the end-to-end payment flow, troubleshooting API responses and ensuring secure transaction data handling.",
      es: "Implementación full-stack de la API de Stripe para una academia de inglés. Gestiono el flujo de pago de extremo a extremo, solucionando problemas de respuestas de la API y asegurando el manejo seguro de los datos de transacciones.",
    },
    year: "2026",
    image: "/projects/lzacademy.png",
    link: "https://lz-englishacademy.com",
  },
  {
    title: {
      en: "Business Directory Platform - Olanchito.com",
      es: "Plataforma de Directorio de Negocios - Olanchito.com",
    },
    description: {
      en: "Developed and maintained a business directory system. Focused on backend optimization for search queries and managing a scalable database of local commercial entities.",
      es: "Desarrollé y mantuve un sistema de directorio de negocios. Enfocado en la optimización del backend para consultas de búsqueda y en la gestión de una base de datos escalable de entidades comerciales locales.",
    },
    year: "2026",
    image: "/projects/olanchito.png",
    link: "https://olanchito.com",
  },
  {
    title: {
      en: "Automation & Scripting: Invitation Bot",
      es: "Automatización de Procesos: Bot de Invitaciones",
    },
    description: {
      en: `Developed a Python-based automation tool using Selenium to streamline notification workflows. This project demonstrates my ability to automate repetitive manual tasks and handle web-based automation—a key skill for improving operational efficiency in support roles.`,
      es: "Desarrollé una herramienta de automatización en Python utilizando Selenium para agilizar flujos de trabajo de notificaciones. Este proyecto demuestra mi capacidad para automatizar tareas manuales repetitivas, una habilidad clave para mejorar la eficiencia operativa en roles de soporte.",
    },
    year: "2025",
    image: "/projects/SendInvitation.png",
    link: "https://github.com/rick2303/WeddingRM",
  },
  {
    title: {
      en: "Browser Automation & DOM Analysis Tool",
      es: "Herramienta de Automatización y Análisis DOM",
    },
    description: {
      en: "A technical project focused on web automation and reverse engineering. Developed scripts to analyze complex DOM structures, extract large datasets into JSON format, and execute asynchronous tasks in the browser environment—demonstrating advanced JavaScript skills for process optimization.",
      es: "Proyecto técnico enfocado en automatización web e ingeniería inversa. Desarrollé scripts para analizar estructuras DOM complejas, extraer conjuntos de datos a formato JSON y ejecutar tareas asíncronas en el navegador, demostrando habilidades avanzadas en JavaScript para la optimización de procesos.",
    },
    year: "2025",
    image: "/projects/automation.png",
    link: "https://github.com/rick2303/InstagramUnfollowAutomation",
  },
  {
    title: {
      en: "Data Management Portal",
      es: "Portal de Gestión de Datos y RSVP",
    },
    description: {
      en: `Built a full-stack portal focused on data integrity and real-time monitoring. Implemented features for user response tracking (RSVP) and status visualization, showing my proficiency in managing end-to-end application logic and backend stability.`,
      es: "Construí un portal enfocado en la integridad de datos y el monitoreo en tiempo real. Implementé funciones para el seguimiento de respuestas de usuarios y visualización de estados, demostrando mi dominio en la gestión de lógica de backend y estabilidad de aplicaciones.",
    },
    year: "2025",
    image: "/projects/weddingInvitation.png",
    link: "https://github.com/rick2303/WeddingRM",
  },
  {
    title: {
      en: "Enterprise System Simulation (UNAH)",
      es: "Simulación de Sistema Empresarial (UNAH)",
    },
    description: {
      en: `Designed a high-traffic enrollment system proposal, focusing on system architecture improvements. This project involved complex database relationship modeling and business logic, mirroring the technical challenges found in enterprise application support.`,
      es: "Diseñé una propuesta de sistema de matrícula de alto tráfico, centrándome en mejoras de arquitectura. El proyecto incluyó modelado complejo de bases de datos y lógica de negocios, reflejando los desafíos técnicos del soporte de aplicaciones empresariales.",
    },
    year: "2023",
    image: "/projects/unah.jpeg",
    link: "https://github.com/rick2303/RegistroUNAH",
  },
  {
    title: {
      en: "Real-time Data Simulator (CPM_LATAM)",
      es: "Simulador de Datos en Tiempo Real (CPM_LATAM)",
    },
    description: {
      en: `Technical lead for a migration impact simulator. Focused on real-time calculations and data visualization, demonstrating strong analytical thinking and the ability to process complex datasets—essential for L2/L3 support reporting.`,
      es: "Líder técnico de un simulador de impacto migratorio. Enfocado en cálculos en tiempo real y visualización de datos, demostrando pensamiento analítico y capacidad para procesar conjuntos de datos complejos, esencial para reportes de soporte L2/L3.",
    },
    year: "2023",
    image: "/projects/cpm.png",
    link: "https://github.com/rick2303/CPM_LATAM",
  },
];

function ProjectsSection() {
  const { language } = useAppContext();

  return (
    <section
      id="projects"
      className="min-h-screen px-4 md:px-20 py-24 bg-light-background dark:bg-dark-primary transition-all duration-500 ease-in-out"
    >
      <div className="mb-16 flex flex-col items-center text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-dark-tertiary dark:text-dark-font_primary">
          {language === "es" ? "Proyectos" : "Projects"}
        </h2>
        <div className="w-20 h-1.5 bg-light-tertiary dark:bg-dark-secondary mt-4"></div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} language={language} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
