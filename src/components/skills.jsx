import { useAppContext } from "../context/AppContext";

const skills = [
  { name: "SQL", img: "/logos/sql.png" },
  { name: "PL/SQL", img: "/logos/plsql.png" },
  { name: "Node.js", img: "/logos/nodeJS.png" },
  { name: "C#", img: "/logos/csharp.png" },
  { name: "Git", img: "/logos/Git.png" },
  { name: "JAVA", img: "/logos/java.png" },
  { name: "JavaScript", img: "/logos/JavaScript.png" },
  { name: "React JS", img: "/logos/react.png" },
  { name: "Tailwind CSS", img: "/logos/tailwind.png" },
  { name: "Python", img: "/logos/python.png" },
  { name: "Agile", img: "/logos/agile.png" },
];

function Skills() {
  const { language } = useAppContext();

  return (
    <section
      id="skills"
      className="px-6 md:px-20 py-16 bg-light-secondary dark:bg-dark-primary text-light-primary dark:text-white transition"
    >
      <h2 className="text-4xl font-bold text-center mb-6">
        {language === "en" ? "Skills" : "Habilidades"}
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-400 mb-10">
        {language === "en"
          ? "Technologies and tools I work with."
          : "Tecnologías y herramientas que utilizo."}
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center bg-white dark:bg-dark-tertiary rounded-lg p-4 shadow hover:shadow-md transition"
          >
            <img
              src={skill.img}
              alt={skill.name}
              className="w-12 h-12 object-contain mb-2"
            />
            <p className="text-sm font-medium">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
