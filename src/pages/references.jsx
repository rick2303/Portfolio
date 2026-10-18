import { useAppContext } from "../context/AppContext";
import { FaLinkedinIn } from "react-icons/fa";
import SectionHeader from "../components/SectionHeader";
import { RevealGroup, RevealItem } from "../components/Reveal";

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
      en: "Franky is an exceptional person—diligent and committed. His sense of responsibility and transparency make him stand out in everything he does. It's an honor to know and work with someone like him, and without a doubt, I would highly recommend him to anyone seeking a capable professional in his field.",
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
      className="py-24 px-6 md:px-12 bg-light-background dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          kicker={language === "en" ? "04 — Endorsements" : "04 — Referencias"}
          title={
            language === "en"
              ? "What colleagues say"
              : "Lo que dicen mis colegas"
          }
          subtitle={
            language === "en"
              ? "Validating my technical expertise through past collaborations."
              : "Validando mi experiencia técnica a través de colaboraciones previas."
          }
        />

        <RevealGroup className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {references.map((ref) => (
            <RevealItem
              key={ref.name}
              className="flex flex-col bg-white dark:bg-dark-tertiary/60 border border-light-tertiary dark:border-white/5 p-8 rounded-3xl hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-black/30 hover:-translate-y-1 hover:border-light-secondary/30 dark:hover:border-dark-secondary/30 transition-all duration-300"
            >
              <div className="flex-grow">
                <div className="font-display text-light-secondary dark:text-dark-secondary text-5xl leading-none mb-4">
                  “
                </div>
                <blockquote className="text-[15px] leading-relaxed text-zinc-600 dark:text-dark-font italic mb-8">
                  {ref.quote[language]}
                </blockquote>
              </div>

              <div className="flex items-center gap-4 border-t border-light-tertiary/70 dark:border-white/5 pt-6 mt-auto">
                <div className="relative shrink-0">
                  <img
                    src={ref.image}
                    alt={ref.name}
                    loading="lazy"
                    className="w-14 h-14 rounded-full object-cover border-2 border-light-secondary/20 dark:border-dark-secondary/20"
                  />
                  <a
                    href={ref.social}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`LinkedIn de ${ref.name}`}
                    className="absolute -bottom-1 -right-1 bg-light-secondary dark:bg-dark-secondary text-white dark:text-dark-primary p-1.5 rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <FaLinkedinIn size={10} />
                  </a>
                </div>

                <div className="overflow-hidden">
                  <h4 className="font-semibold text-light-primary dark:text-dark-font_primary truncate text-base">
                    {ref.name}
                  </h4>
                  <p className="text-[10px] uppercase tracking-wider font-bold text-light-secondary dark:text-dark-secondary leading-tight mt-1 line-clamp-2">
                    {ref.position}
                  </p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

export default References;
