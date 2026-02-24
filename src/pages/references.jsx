import { useAppContext } from "../context/AppContext";
import { FaLinkedinIn } from "react-icons/fa";

const references = [
  {
    name: "Gelen Amador",
    position: "DBA | Sr Regional Implementation at Bank Ficohsa",
    quote: {
      en: "I had the pleasure of working with Franky Interiano in the technology department of a prestigious bank, where he was involved in developing solutions using Oracle. During that time, I witnessed his strong commitment, responsibility, and professionalism. His work was always delivered on time, well-documented, and aligned with the standards required for production deployment.",
      es: "Tuve el gusto de trabajar con Franky Interiano en el área de tecnología de un banco de prestigio, donde él estuvo involucrado en el desarrollo de soluciones con Oracle. Durante ese tiempo, pude constatar su alto nivel de compromiso, responsabilidad y profesionalismo. Su trabajo fue siempre puntual, bien documentado y alineado con los estándares requeridos para su paso a producción.",
    },
    image: "/people/gelen.jpg",
    social: "https://www.linkedin.com/in/gelen-fabiola-amador-pavón-5ab48614a/",
  },
  {
    name: "Jackeline Padilla",
    position: "Software Developer at Bank Ficohsa via OE Internacional",
    quote: {
      en: "Franky is a technically strong professional with a problem-solving mindset. His expertise in Oracle and PL/SQL is evident through his efficient development of stored procedures and optimization of complex queries. He also has solid experience in backend development with Node.js and C#, delivering scalable APIs and clean,  maintainable code within the .NET ecosystem.",
      es: "Franky es un profesional técnicamente sólido con una mentalidad orientada a la resolución de problemas. Su experiencia en Oracle y PL/SQL se refleja en el desarrollo eficiente de procedimientos almacenados y en la optimización de consultas complejas. Además, tiene una sólida experiencia en desarrollo backend con Node.js y C#, entregando APIs escalables y un código limpio y mantenible dentro del ecosistema .NET.",
    },
    image: "/people/jackeline.jpg",
    social:
      "https://www.linkedin.com/in/jackeline-cristal-padilla-carcamo-389167182/",
  },

  {
    name: "Heidy Nieto",
    position: "Sr Software Developer at Bank Ficohsa",
    quote: {
      en: "He is a highly competent and dedicated professional. His ability to quickly learn new technologies, adapt to different challenges, and deliver effective solutions has been evident in every project he takes part in. He stands out for his excellent analytical thinking, which enables him to identify and solve problems with precision and efficiency. In addition, his collaborative attitude and willingness to share knowledge make him a valuable team member.",
      es: "Es un profesional altamente competente y comprometido. Su capacidad para aprender rápidamente nuevas tecnologías, adaptarse a diferentes retos y entregar soluciones efectivas ha sido evidente en cada proyecto en el que participa. Destaca por su excelente pensamiento analítico, lo cual le permite identificar y resolver problemas con precisión y eficacia. Además, de su actitud colaboradora siempre está dispuesto a compartir sus conocimientos.",
    },
    image: "/people/heidy.jpg",
    social: "https://www.linkedin.com/in/heidynieto/",
  },
  {
    name: "Gerardo Montoya",
    position: "Back-end Engineer at Shimli AI | Software Engineer at LynxLabs",
    quote: {
      en: "Franky is a responsible professional with strong skills in technical troubleshooting and databases. He delivers practical solutions and is a great asset to any production support or engineering team.",
      es: "Franky es un profesional responsable con sólidas habilidades en resolución de problemas técnicos y bases de datos. Aporta soluciones prácticas y es un gran activo para cualquier equipo de soporte de producción o ingeniería.",
    },
    image: "/people/gerardo.jpg",
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
    image: "/people/josue.jpg",
    social: "https://www.linkedin.com/in/josué-barahona-68b04472/",
  },
];
function References() {
  const { language } = useAppContext();

  return (
    <section
      id="references"
      className="py-24 px-6 md:px-20 bg-light-background dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        {/* Título y Subtítulo */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-tertiary dark:text-dark-font_primary">
            {language === "en"
              ? "Professional Endorsements"
              : "Referencias Profesionales"}
          </h2>
          <div className="w-20 h-1.5 bg-light-tertiary dark:bg-dark-secondary mt-4"></div>
          <p className="mt-6 text-dark-secondary/70 dark:text-dark-font/60 max-w-2xl">
            {language === "en"
              ? "Validating my technical expertise through past collaborations."
              : "Validando mi experiencia técnica a través de colaboraciones previas."}
          </p>
        </div>

        {/* Grid Uniforme (Mismo tamaño de cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white dark:bg-dark-tertiary/10 border border-gray-100 dark:border-dark-secondary/20 p-8 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Cuerpo del testimonio - flex-grow para empujar el footer abajo y que midan lo mismo */}
              <div className="flex-grow">
                <div className="text-light-tertiary dark:text-dark-secondary text-4xl font-serif mb-4">
                  “
                </div>
                <blockquote className="text-[15px] leading-relaxed text-dark-secondary/80 dark:text-dark-font/80 italic mb-8">
                  {ref.quote[language]}
                </blockquote>
              </div>

              {/* Footer de la Card - Siempre alineado abajo */}
              <div className="flex items-center gap-4 border-t border-gray-50 dark:border-dark-tertiary/30 pt-6 mt-auto">
                <div className="relative shrink-0">
                  <img
                    src={ref.image}
                    alt={ref.name}
                    className="w-14 h-14 rounded-full object-cover border-2 border-light-tertiary/20 dark:border-dark-secondary/20"
                  />
                  <a
                    href={ref.social}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute -bottom-1 -right-1 bg-light-tertiary dark:bg-dark-secondary text-white p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <FaLinkedinIn size={10} />
                  </a>
                </div>

                <div className="overflow-hidden">
                  <h4 className="font-bold text-dark-tertiary dark:text-dark-font_primary truncate text-base">
                    {ref.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-light-tertiary dark:text-dark-secondary leading-tight mt-1 line-clamp-2">
                    {ref.position}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default References;
