import { useAppContext } from "../context/AppContext";

function Languages() {
  const { language } = useAppContext();

  return (
    <section
      id="Languages"
      className="py-16 px-6 md:px-20 bg-light-secondary dark:bg-dark-primary text-light-primary dark:text-white transition"
    >
      {" "}
      <h2 className="text-3xl font-bold text-center text-light-primary dark:text-dark-font_primary mb-8">
        {language === "es" ? "Idiomas" : "Languages"}
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-center max-w-xl mx-auto">
        <div className="rounded-xl bg-white  dark:bg-dark-tertiary shadow-lg border dark:border-gray-700 border-gray-200 overflow-hidden h-full flex flex-col">
          <div className="flex flex-col justify-between flex-1 p-4">
            <div>
              <h3 className="text-xl font-bold text-light-primary dark:text-dark-font_primary mb-1">
                 {language === "es" ? "Ingles" : "English"}
              </h3>
              <p className="text-gray-700 dark:text-dark-font text-sm">
                 {language === "es" ? "Profesional" : "Professional"}
              </p>
            </div>
          </div>
        </div>
        <div className="rounded-xl bg-white  dark:bg-dark-tertiary shadow-lg border dark:border-gray-700 border-gray-200 overflow-hidden h-full flex flex-col">
          <div className="flex flex-col justify-between flex-1 p-4">
            <div>
              <h3 className="text-xl font-bold text-light-primary dark:text-dark-font_primary mb-1">
                 {language === "es" ? "Español" : "Spanish"}
              </h3>
              <p className="text-gray-700 dark:text-dark-font text-sm">
                 {language === "es" ? "Nativo" : "Native"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Languages;
