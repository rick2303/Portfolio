import { useAppContext } from "../context/AppContext";
import SectionHeader from "./SectionHeader";
import { RevealGroup, RevealItem } from "./Reveal";
import { FaAws } from "react-icons/fa";
import {
  SiNodedotjs,
  SiCapacitor,
  SiExpo,
  SiExpress,
  SiPrisma,
  SiRedis,
  SiSentry,
  SiStripe,
  SiSupabase,
} from "react-icons/si";

// img: logo en /public/logos. icon: componente de react-icons (con color de marca
// opcional; sin color usa el color del texto para que se vea en ambos temas).
const skills = [
  // --- DATOS Y SOPORTE EN PRODUCCIÓN ---
  {
    name: "SQL (Oracle, SQL Server, PostgreSQL, MySQL)",
    img: "/logos/sql.png",
    category: "support",
  },
  { name: "PL/SQL", img: "/logos/plsql.png", category: "support" },
  { name: "Sentry", icon: SiSentry, category: "support" },
  { name: "Postman", img: "/logos/postman.png", category: "support" },
  { name: "Jira / Confluence", img: "/logos/jira.png", category: "support" },
  { name: "Power BI", img: "/logos/powerbi.png", category: "support" },

  // --- BACKEND ---
  { name: "TypeScript", img: "/logos/typescript.png", category: "backend" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E", category: "backend" },
  { name: "NestJS", img: "/logos/nestjs.svg", category: "backend" },
  { name: "Express", icon: SiExpress, category: "backend" },
  { name: "Prisma ORM", icon: SiPrisma, category: "backend" },
  { name: "C# / .NET", img: "/logos/csharp.png", category: "backend" },
  { name: "Java", img: "/logos/java.png", category: "backend" },
  { name: "Python", img: "/logos/python.png", category: "backend" },

  // --- FRONTEND Y MÓVIL ---
  { name: "React / Next.js", img: "/logos/react.png", category: "frontend" },
  { name: "React Native / Expo", icon: SiExpo, category: "frontend" },
  { name: "Ionic / Capacitor", icon: SiCapacitor, color: "#119EFF", category: "frontend" },
  { name: "Tailwind CSS", img: "/logos/tailwind.png", category: "frontend" },

  // --- CLOUD, DATOS Y PAGOS ---
  { name: "AWS", icon: FaAws, category: "infra" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E", category: "infra" },
  { name: "Redis", icon: SiRedis, color: "#DC382D", category: "infra" },
  { name: "Docker", img: "/logos/docker.png", category: "infra" },
  { name: "Stripe / RevenueCat", icon: SiStripe, color: "#635BFF", category: "infra" },
  { name: "Git", img: "/logos/Git.png", category: "infra" },
];

const categories = [
  {
    id: "support",
    en: "Data & Production Support",
    es: "Datos y Soporte en Producción",
  },
  { id: "backend", en: "Backend", es: "Backend" },
  { id: "frontend", en: "Frontend & Mobile", es: "Frontend y Móvil" },
  {
    id: "infra",
    en: "Cloud, Data & Payments",
    es: "Cloud, Datos y Pagos",
  },
];

function Skills() {
  const { language } = useAppContext();

  return (
    <section
      id="skills"
      className="px-6 md:px-12 py-24 bg-light-section/60 dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        <SectionHeader
          kicker={language === "en" ? "03 — Stack" : "03 — Stack"}
          title={language === "en" ? "Technical Stack" : "Stack Técnico"}
        />

        <div className="space-y-14">
          {categories.map((cat) => (
            <div key={cat.id}>
              <h3 className="text-sm font-mono font-bold text-zinc-500 dark:text-dark-font tracking-[0.2em] uppercase mb-8 flex items-center gap-4">
                <span className="bg-white dark:bg-dark-tertiary border border-light-tertiary dark:border-white/5 px-3 py-1 rounded-md">
                  {cat[language]}
                </span>
                <div className="flex-grow h-[1px] bg-light-tertiary dark:bg-white/10"></div>
              </h3>

              <RevealGroup
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5"
                stagger={0.05}
              >
                {skills
                  .filter((skill) => skill.category === cat.id)
                  .map((skill) => (
                    <RevealItem
                      key={skill.name}
                      className="group flex flex-col items-center justify-center bg-white dark:bg-dark-tertiary/60 border border-light-tertiary dark:border-white/5 rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg hover:shadow-zinc-900/5 dark:hover:shadow-black/30 hover:border-light-secondary/40 dark:hover:border-dark-secondary/40"
                    >
                      <div className="w-14 h-14 mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                        {skill.icon ? (
                          <skill.icon
                            aria-label={skill.name}
                            className="w-12 h-12 text-light-primary dark:text-white"
                            style={skill.color ? { color: skill.color } : undefined}
                          />
                        ) : (
                          <img
                            src={skill.img}
                            alt={skill.name}
                            loading="lazy"
                            className="w-full h-full object-contain"
                          />
                        )}
                      </div>
                      <p className="text-[13px] font-semibold text-center text-light-primary dark:text-dark-font_primary group-hover:text-light-secondary dark:group-hover:text-dark-secondary transition-colors leading-tight">
                        {skill.name}
                      </p>
                    </RevealItem>
                  ))}
              </RevealGroup>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
