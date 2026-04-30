import ProjectCard from "../components/projectCard";
import { useAppContext } from "../context/AppContext";
const projects = [
  {
    title: {
      en: "Splitwo: Expense Splitting Web App",
      es: "Splitwo: Aplicación Web para Dividir Gastos",
    },
    description: {
      en: "Built the full-stack web application for Splitwo, a platform that simplifies shared expense management between groups. Focused on real-time balance tracking, intuitive UX flows, and secure transaction handling to streamline how people split bills and settle debts.",
      es: "Desarrollé la aplicación web full-stack de Splitwo, una plataforma que simplifica la gestión de gastos compartidos entre grupos. Me enfoqué en el seguimiento de balances en tiempo real, flujos de UX intuitivos y manejo seguro de transacciones para facilitar cómo las personas dividen cuentas y saldan deudas.",
    },
    year: "2026",
    image: "/projects/splitwo_app.png",
    link: "https://app.splitwo.com",
    tech: ["React", "Node.js", "PostgreSQL", "Tailwind CSS", "Stripe"],
  },
  {
    title: {
      en: "Splitwo: Landing Page & Marketing Website",
      es: "Splitwo: Landing Page y Sitio Web de Marketing",
    },
    description: {
      en: "Designed and developed the marketing website for Splitwo, focused on conversion optimization and clear product communication. Built with performance and SEO best practices to drive user acquisition and effectively present the app's value proposition.",
      es: "Diseñé y desarrollé el sitio web de marketing de Splitwo, enfocado en la optimización de conversiones y comunicación clara del producto. Construido con mejores prácticas de rendimiento y SEO para impulsar la adquisición de usuarios y presentar efectivamente la propuesta de valor.",
    },
    year: "2026",
    image: "/projects/splitwo_web.png",
    link: "https://splitwo.com",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
  },
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
    tech: ["React", "Node.js", "Stripe", "REST API"],
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
    tech: ["React", "Node.js", "SQL", "Stripe", "SEO"],
  },
  {
    title: {
      en: "MovelyQ: Logistics & Asset Rental Ecosystem",
      es: "MovelyQ: Ecosistema de Logística y Alquiler de Activos",
    },
    description: {
      en: "Developed a specialized rental platform focusing on SEO optimization and landing page lead generation. Engineered a high-performance architecture for pre-launch registration, ensuring scalable data handling for future market entry.",
      es: "Desarrollé una plataforma de alquiler especializada enfocada en la optimización SEO y generación de leads. Diseñé una arquitectura de alto rendimiento para el registro de pre-lanzamiento, asegurando un manejo de datos escalable.",
    },
    year: "2026",
    image: "/projects/movelyq.png",
    link: "https://pre-register.movelyq.com",
    tech: ["Next.js", "Tailwind CSS", "SEO", "Node.js"],
  },
  {
    title: {
      en: "FynQ: FinTech Asset & Investment Management",
      es: "FynQ: Gestión de Activos Financieros e Inversiones",
    },
    description: {
      en: "Architected a digital finance ecosystem focused on secure asset tracking and real-time data visualization. Implemented a mobile-first approach with optimized API communication to ensure financial data integrity and backend stability.",
      es: "Arquitecté un ecosistema financiero digital enfocado en el seguimiento seguro de activos y visualización de datos en tiempo real. Implementé un enfoque mobile-first con comunicación API optimizada para asegurar la integridad de los datos.",
    },
    year: "2026",
    image: "/projects/fynq_app.png",
    link: "https://fynq.site",
    tech: ["React Native", "Node.js", "REST API", "PostgreSQL", "Stripe"],
  },
  {
    title: {
      en: "Bytam Design: Custom Embroidery E-commerce & Catalog",
      es: "Bytam Design: E-commerce de Bordados Personalizados",
    },
    description: {
      en: "Engineered a digital storefront for specialized embroidery services. Focused on high-fidelity image rendering via Cloudinary and a seamless user interface for garment personalization, integrating efficient file management for custom design orders.",
      es: "Desarrollé una tienda digital para servicios de bordado especializados. Me enfoqué en el renderizado de imágenes de alta fidelidad vía Cloudinary y una interfaz fluida para la personalización de prendas y gestión de archivos de diseño.",
    },
    year: "2026",
    image: "/projects/bytam.png",
    link: "https://bytam-design.netlify.app",
    tech: ["React", "Node.js", "Cloudinary"],
  },
  {
    title: {
      en: "VennQ: Enterprise SaaS & Cloud POS Ecosystem",
      es: "VennQ: Ecosistema SaaS y POS Empresarial en la Nube",
    },
    description: {
      en: "Developed and managed a cloud-based ERP suite for small and medium businesses. I implemented high-fidelity reporting modules and real-time inventory synchronization for multiple branches, maintaining mission-critical system stability and secure data handling for active commercial operations.",
      es: "Desarrollé y gestioné una suite ERP en la nube para pequeñas y medianas empresas. Implementé módulos de reportes de alta fidelidad y sincronización de inventario en tiempo real para múltiples sucursales, manteniendo la estabilidad de sistemas críticos y el manejo seguro de datos para operaciones comerciales activas.",
    },
    year: "2025",
    image: "/projects/vennq_platform.png",
    link: "https://vennq.com",
    tech: ["React", "Node.js", "SQL", "AWS"],
  },
  {
    title: {
      en: "Professional Photography Platform & Media Management",
      es: "Plataforma de Fotografía Profesional y Gestión de Media",
    },
    description: {
      en: "A high-performance visual portfolio built with Next.js and Tailwind CSS. Implemented Cloudinary for automated image optimization, responsive delivery, and lazy loading, ensuring sub-second load times for high-resolution galleries. This project showcases my ability to manage cloud-based media infrastructure and deliver seamless UI/UX.",
      es: "Portfolio visual de alto rendimiento construido con Next.js y Tailwind CSS. Implementé Cloudinary para la optimización automatizada de imágenes, entrega responsiva y lazy loading, garantizando tiempos de carga inferiores a un segundo en galerías de alta resolución. Este proyecto demuestra mi capacidad para gestionar infraestructura de media en la nube y entregar una UI/UX fluida.",
    },
    year: "2025",
    image: "/projects/photography_portfolio.png",
    link: "https://photography.frankyinteriano.com",
    tech: ["Next.js", "Tailwind CSS", "Cloudinary"],
  },
  {
    title: {
      en: "FynQ Digital Portal: Financial Services Landing",
      es: "Portal Digital FynQ: Landing de Servicios Financieros",
    },
    description: {
      en: "Built a high-conversion landing page for the FynQ ecosystem using Next.js. Optimized for performance and cross-device compatibility, serving as the primary digital touchpoint for financial product education and user onboarding.",
      es: "Construí una página de aterrizaje de alta conversión para el ecosistema FynQ usando Next.js. Optimizada para rendimiento y compatibilidad entre dispositivos, funcionando como el punto de contacto principal para usuarios nuevos.",
    },
    year: "2025",
    image: "/projects/fynq_web.png",
    link: "https://fynq.site",
    tech: ["Next.js", "Tailwind CSS", "SEO"],
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
    tech: ["Python", "Selenium", "Web Scraping", "Automation"],
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
    tech: ["JavaScript", "DOM API", "Web Automation", "Data Extraction"],
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
    tech: ["React", "Node.js", "SQL"],
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
    tech: ["Java", "SQL", "MySQL"],
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
    tech: ["JavaScript", "React"],
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
