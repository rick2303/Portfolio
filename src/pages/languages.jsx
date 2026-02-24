import { useAppContext } from "../context/AppContext";

const languagesData = [
  {
    name: { en: "English", es: "Inglés" },
    level: {
      en: "Full Professional Proficiency",
      es: "Competencia Profesional Completa",
    },
    percentage: "75%",
    flag: "🇺🇸",
  },
  {
    name: { en: "Spanish", es: "Español" },
    level: { en: "Native Speaker", es: "Nativo" },
    percentage: "100%",
    flag: "🇪🇸",
  },
];

function Languages() {
  const { language } = useAppContext();

  return (
    <section
      id="Languages"
      className="py-24 px-6 md:px-20 bg-light-background dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="max-w-4xl mx-auto">
        {/* Título consistente con Skills y Experience */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-tertiary dark:text-dark-font_primary">
            {language === "es" ? "Idiomas" : "Languages"}
          </h2>
          <div className="w-20 h-1.5 bg-light-tertiary dark:bg-dark-secondary mt-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {languagesData.map((lang, i) => (
            <div
              key={i}
              className="relative p-6 rounded-2xl bg-white dark:bg-dark-tertiary/10 border border-gray-100 dark:border-dark-secondary/20 shadow-sm hover:shadow-md transition-all group"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">{lang.flag}</span>
                <div>
                  <h3 className="text-xl font-bold text-dark-tertiary dark:text-dark-font_primary">
                    {lang.name[language]}
                  </h3>
                  <p className="text-sm font-medium text-light-tertiary  dark:text-dark-font_primary">
                    {lang.level[language]}
                  </p>
                </div>
              </div>

              {/* Barra de nivel sutil */}
              <div className="w-full h-2 bg-gray-100 dark:bg-dark-tertiary/50 rounded-full overflow-hidden">
                <div
                  className="h-full bg-light-tertiary dark:bg-dark-secondary transition-all duration-1000 ease-out"
                  style={{ width: lang.percentage }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Languages;
