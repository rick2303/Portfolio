import { useState } from "react";
import { useAppContext } from "../context/AppContext";

const experiences = [
  {
    company: "Bank Ficohsa via OE Internacional",
    role: {
      en: "Software Developer",
      es: "Oficial de desarrollo",
    },
    period: {
      en: "April 2025 - Present",
      es: "Abril 2025 - Actualidad",
    },
    details: {
      en: "In my role as a software developer at Ficohsa, I have developed and optimized backend solutions for global banking operations while working in agile Scrum teams. Using PL/SQL, I have created and managed elaborate database objects, such as stored procedures and packages that communicate with OSB services via UTL libraries. By using UTL_FILE to handle international transfer files, I was able to accelerate up transactions and cut down on wait times. Using Confluence, JIRA, Bitbucket, and MIRO for collaborative development and documentation, I also contributed to developing scalable systems that facilitated the integration of regional banks.",
      es: "Responsable de desarrollar servicios back-end para operaciones de cobranzas, usando PL/SQL, intermediarios en .NET y asegurando pruebas QA bajo metodología Scrum.",
    },
    socials: "https://ficohsa.com",
    photo: "/company/ficoLogo.png",
  },
  {
    company: "Bank Ficohsa via Grupo Consisa",
    role: {
      en: "Junior Software Developer",
      es: "Desarrollador junior",
    },
    period: {
      en: "July 2024 - March 2025",
      es: "Julio 2024 - Marzo 2025",
    },
    details: {
      en: "In this role, I supported the development and maintenance of modules related to collections and banking infrastructure. I created secure intermediaries in C# with .NET to enable communication between external systems and the bank’s core infrastructure. I was responsible for building and maintaining Oracle database components and participated in projects connected to the core banking system, Abanks. I actively monitored production environments and applied Scrum methodology throughout the development cycle.",
      es: "Desarrollé interfaces internas con React y Tailwind. Trabajé en la modularización de componentes y diseño responsive.",
    },
    socials: "https://ficohsa.com",
    photo: "/company/ficoLogo.png",
  },
  {
    company: "PIXDEA",
    role: {
      en: "Intern fullstack developer",
      es: "Practicante Desarrollador fullstack",
    },
    period: {
      en: "November 2023 - March 2024",
      es: "Noviembre 2023 - Marzo 2024",
    },
    details: {
      en: "During my intership at PIXDEA, I worked on the frontend and backend development for a web and mobile platform that aims to reduce bullying. I developer serverless APIs using AWS services like Lambda (Node.js), RDS (MySQL), Cognito (authentication), and API Gateway. To help schools monitor the mental health of their kids, I made data visualizations. This program gave me hands-on experience creating cloud-native applications.",
      es: "Durante mis prácticas en PIXDEA, trabajé en el desarrollo frontend y backend de una plataforma web y móvil que busca reducir el acoso escolar. Desarrollo API sin servidor utilizando servicios de AWS como Lambda (Node.js), RDS (MySQL), Cognito (autenticación) y API Gateway. Para ayudar a las escuelas a monitorear la salud mental de sus alumnos, creé visualizaciones de datos. Este programa me proporcionó experiencia práctica en la creación de aplicaciones nativas de la nube.",
    },
    socials: "https://pixdea.com",
    photo: "/company/logo_white.png",
  },
];

function Experience() {
  const { language } = useAppContext();
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (i) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      id="experience"
      className="py-16 px-6 md:px-20 bg-light-secondary dark:bg-dark-primary text-light-primary dark:text-white transition"
    >
      <h2 className="text-4xl font-bold text-center mb-10">
        {language === "en" ? "Experience" : "Experiencia"}
      </h2>

      <div className="relative border-l border-gray-300 dark:border-gray-600 max-w-3xl mx-auto space-y-10">
        {experiences.map((exp, i) => (
          <div key={i} className="pl-8 relative">
            <span className="absolute left-[-24px] top-6 w-12 h-12 bg-dark-D dark:bg-light-primary border-2 border-white dark:border-dark-secondary rounded-full flex items-center justify-center overflow-hidden">
              {" "}
              <a href={exp.socials} target="_blank">
                <img
                  className="w-10 h-10 object-contain"
                  src={exp.photo}
                  alt={exp.company}
                />
              </a>
            </span>

            <div className="bg-white dark:bg-dark-tertiary p-6 rounded-lg shadow hover:shadow-lg transition">
              <div
                className="flex justify-between items-start cursor-pointer"
                onClick={() => toggle(i)}
              >
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {exp.period[language]}
                  </p>
                  <h3 className="text-lg font-semibold dark:text-dark-font">
                    {exp.role[language]}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {exp.company}
                  </p>
                </div>
              </div>

              {openIndex === i && (
                <div>
                  <p className="mt-4 text-gray-700 dark:text-dark-font">
                    {exp.details[language]} <br></br>
                    <br></br>
                    <a href={exp.socials} target="_blank">
                      <p className="text-blue-600">
                        Click here to know more about the company
                      </p>
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
