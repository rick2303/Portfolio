import { useAppContext } from "../context/AppContext";

const skills = [
  // --- PRIORIDAD: DATOS Y SOPORTE CRÍTICO ---
  {
    name: "SQL (Oracle, MySQL, SQL Server, PostgreSQL)",
    img: "/logos/sql.png",
    category: "support",
  },
  { name: "AWS (Cloud Support)", img: "/logos/aws.png", category: "support" },
  { name: "Jira / Trello", img: "/logos/jira.png", category: "support" },
  { name: "Postman", img: "/logos/postman.png", category: "support" },
  { name: "Power BI", img: "/logos/powerbi.png", category: "support" },

  // --- BACKEND & LOGIC ---
  { name: "Java", img: "/logos/java.png", category: "backend" },
  { name: "Node.js / NestJS", img: "/logos/nodeJS.png", category: "backend" },
  { name: "TypeScript", img: "/logos/typescript.png", category: "backend" },

  // --- INFRAESTRUCTURA ---
  { name: "Docker", img: "/logos/docker.png", category: "infra" },
  { name: "Git", img: "/logos/Git.png", category: "infra" },
  { name: "Agile", img: "/logos/agile.png", category: "infra" },

  // --- FRONTEND ---
  { name: "React / Tailwind", img: "/logos/react.png", category: "frontend" },
];

const categories = [
  {
    id: "support",
    en: "Support & Data Ops",
    es: "Soporte y Operaciones de Datos",
  },
  { id: "backend", en: "Backend & Logic", es: "Backend y Lógica" },
  {
    id: "infra",
    en: "Infrastructure & Methods",
    es: "Infraestructura y Métodos",
  },
  {
    id: "frontend",
    en: "Complementary Frontend",
    es: "Frontend Complementario",
  },
];

function Skills() {
  const { language } = useAppContext();

  return (
    <section
      id="skills"
      className="px-6 md:px-20 py-24 bg-light-background dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        {/* Encabezado alineado con Experience */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-tertiary dark:text-dark-font_primary">
            {language === "en" ? "Technical Stack" : "Stack Técnico"}
          </h2>
          <div className="w-20 h-1.5 bg-light-tertiary dark:bg-dark-secondary mt-4"></div>
        </div>

        <div className="space-y-14">
          {categories.map((cat) => (
            <div key={cat.id}>
              {/* Etiqueta de Categoría - Versión de alta legibilidad */}
              <h3 className="text-sm font-mono font-bold text-dark-tertiary dark:text-dark-font_primary tracking-[0.2em] uppercase mb-8 flex items-center gap-4 opacity-90">
                <span className="bg-light-tertiary/10 dark:bg-dark-secondary/10 px-2 py-1 rounded">
                  {cat[language]}
                </span>
                <div className="flex-grow h-[1px] bg-gray-300 dark:bg-dark-tertiary/50"></div>
              </h3>

              {/* Grid de Skills */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5">
                {skills
                  .filter((skill) => skill.category === cat.id)
                  .map((skill, i) => (
                    <div
                      key={i}
                      className="group flex flex-col items-center justify-center bg-white dark:bg-dark-tertiary/10 border border-gray-100 dark:border-dark-secondary/20 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:bg-white dark:hover:bg-dark-tertiary/30"
                    >
                      <div className="w-12 h-12 mb-4 transition-transform duration-300 group-hover:scale-110">
                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <p className="text-[13px] font-bold text-center text-dark-secondary dark:text-dark-font/80 group-hover:text-light-tertiary dark:group-hover:text-dark-secondary transition-colors leading-tight">
                        {skill.name}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
