import { useAppContext } from "../context/AppContext";
import { FaLinkedinIn } from "react-icons/fa";

const references = [
  {
    name: "Gerardo Montoya",
    position: "Back-end Engineer at Shimli AI | Software Engineer at LynxLabs",
    quote: {
      en: "Franky is a responsible and self-taught developer with strong skills in web technologies and databases. He delivers practical solutions and is a great asset to any team.",
      es: "Franky es un desarrollador responsable y autodidacta, con sólidos conocimientos en tecnologías web y bases de datos. Aporta soluciones prácticas y es un gran valor para cualquier equipo.",
    },
    image: "/people/man.png",
    social: "https://www.linkedin.com/in/gerardo-montoya-dfr/",
  },
  {
    name: "Ana Gómez",
    position: "Product Owner at Bank Ficohsa",
    quote: {
      en: `Franky is a reliable and committed professional with great potential to contribute positively to any team or project.
            Proactivity: He takes initiative and seeks solutions without waiting for instructions.
            Quick learner: He easily adapts to new tools and processes.
            Dedication and responsibility: He completes his tasks on time and with high quality.`,
      es: `Franky es un profesional íntegro, comprometido y con gran potencial para contribuir positivamente en cualquier equipo o proyecto.
            Proactividad: toma la iniciativa y busca soluciones sin esperar indicaciones.
            Aprendizaje rápido: se adapta con facilidad a nuevas herramientas y procesos.
            Dedicación y responsabilidad: cumple con sus tareas puntualmente y con alta calidad.`,
    },
    image: "/people/woman.png",
    social: "https://www.linkedin.com/in/ana-gómez-54558b5a/",
  },
  {
    name: "Josué Barahona",
    position: "Scrum Master at Bank Ficohsa",
    quote: {
      en: "Franky is an exceptional person—diligent and committed. His sense of responsibility and transparency make him stand out in everything he does. It’s an honor to know and work with someone like him, and without a doubt, I would highly recommend him to anyone seeking a capable professional in his field.",
      es: "Franky es una persona excepcional, alguien diligente y comprometido, su responsabilidad y transparencia lo hacen único en todo lo que hace. Es un honor conocer y trabajar con alguien como él, sin duda alguna recomendaría a quien fuese necesario este profesional capaz en toda su área.",
    },
    image: "/people/man.png",
    social: "https://www.linkedin.com/in/josué-barahona-68b04472/",
  },
  {
    name: "Gelen Amador",
    position: "DBA | Sr Regional Implementation at Bank Ficohsa",
    quote: {
      en: "I had the pleasure of working with Franky Interiano in the technology department of a prestigious bank, where he was involved in developing solutions using Oracle. During that time, I witnessed his strong commitment, responsibility, and professionalism. His work was always delivered on time, well-documented, and aligned with the standards required for production deployment.",
      es: "Tuve el gusto de trabajar con Franky Interiano en el área de tecnología de un banco de prestigio, donde él estuvo involucrado en el desarrollo de soluciones con Oracle. Durante ese tiempo, pude constatar su alto nivel de compromiso, responsabilidad y profesionalismo. Su trabajo fue siempre puntual, bien documentado y alineado con los estándares requeridos para su paso a producción.",
    },
    image: "/people/woman.png",
    social: "https://www.linkedin.com/in/gelen-fabiola-amador-pavón-5ab48614a/",
  },
  {
    name: "Heidy Nieto",
    position: "Sr Software Developer at Bank Ficohsa",
    quote: {
      en: "He is a highly competent and dedicated professional. His ability to quickly learn new technologies, adapt to different challenges, and deliver effective solutions has been evident in every project he takes part in. He stands out for his excellent analytical thinking, which enables him to identify and solve problems with precision and efficiency. In addition, his collaborative attitude and willingness to share knowledge make him a valuable team member.",
      es: "Es un profesional altamente competente y comprometido. Su capacidad para aprender rápidamente nuevas tecnologías, adaptarse a diferentes retos y entregar soluciones efectivas ha sido evidente en cada proyecto en el que participa. Destaca por su excelente pensamiento analítico, lo cual le permite identificar y resolver problemas con precisión y eficacia. Además, de su actitud colaboradora siempre está dispuesto a compartir sus conocimientos.",
    },
    image: "/people/woman.png",
    social: "https://www.linkedin.com/in/heidynieto/",
  },
  {
    name: "Jackeline Padilla",
    position: "Software Developer at Bank Ficohsa via OE Internacional",
    quote: {
      en: "Franky is a technically strong professional with a problem-solving mindset. His expertise in Oracle and PL/SQL is evident through his efficient development of stored procedures and optimization of complex queries. He also has solid experience in backend development with Node.js and C#, delivering scalable APIs and clean,  maintainable code within the .NET ecosystem.",
      es: "Franky es un profesional técnicamente sólido con una mentalidad orientada a la resolución de problemas. Su experiencia en Oracle y PL/SQL se refleja en el desarrollo eficiente de procedimientos almacenados y en la optimización de consultas complejas. Además, tiene una sólida experiencia en desarrollo backend con Node.js y C#, entregando APIs escalables y un código limpio y mantenible dentro del ecosistema .NET.",
    },
    image: "/people/woman.png",
    social:
      "https://www.linkedin.com/in/jackeline-cristal-padilla-carcamo-389167182/",
  },
];

function References() {
  const { language } = useAppContext();

  return (
    <section
      id="references"
      className="min-h-screen px-4 md:px-20 py-20 bg-light-secondary dark:bg-dark-primary text-light-primary dark:text-white transition-all duration-300 ease-in-out"
    >
      <h2 className="text-4xl font-bold text-center mb-2">
        {language === "en" ? "References" : "Referencias"}
      </h2>
      <p className="text-center mb-4 text-gray-600 dark:text-gray-400">
        {language === "en"
          ? "Personal and professional references based on past collaborations."
          : "Referencias personales y laborales basadas en colaboraciones anteriores."}
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {references.map((ref, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-dark-tertiary rounded-lg p-6 shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={ref.image}
                alt={ref.name}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold  text-lg">
                  {ref.name}{" "}
                  <a href={ref.social} target="_blank">
                    <FaLinkedinIn className="text-dark-secondary dark:text-light-primary font-medium inline-block ml-auto" />
                  </a>
                </h4>
                <p className="text-base text-gray-500">{ref.position}</p>
              </div>
            </div>
            <blockquote className="italic text-gray-700 dark:text-gray-300">
              “{ref.quote[language]}”
            </blockquote>
          </div>
        ))}
      </div>
    </section>
  );
}

export default References;
