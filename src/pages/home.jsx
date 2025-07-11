import { useAppContext } from "../context/AppContext";

function Home() {
  const { language } = useAppContext();
  const cvFile =
    language === "en"
      ? "/Resume_FrankyInteriano.pdf"
      : "/Resume_FrankyInteriano_ES.pdf";

  return (
    <section
      className="pt-24 md:pt-32 flex flex-col md:flex-row items-center justify-between px-6 md:px-20 min-h-screen
      bg-light-secondary dark:bg-dark-primary text-light-primary dark:text-white transition-all duration-300 ease-in-out"
    >
      <div className="mb-10 md:mb-0 md:w-1/2 flex justify-center">
        <div className="relative w-64 h-64">
          <img
            src="/profile2.jpeg"
            alt="Foto de perfil"
            className="w-full h-full object-cover rounded-[30px] border-4 border-light-primary dark:border-dark-secondary"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 dark:bg-white/20 text-white  text-center text-sm font-semibold py-2 rounded-b-[30px]">
            Franky Interiano
          </div>
        </div>
      </div>

      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          {language === "en"
            ? "Systems Engineer. Problem-solver. Builder of meaningful software."
            : "Ingeniero en Sistemas. Solucionador de problemas. Desarrollador de software con sentido."}
        </h1>
        <p className="mt-4 text-light-primary dark:text-dark-font text-lg max-w-md">
          {language === "en"
            ? "Having a strong foundation in software development, data analysis, and database expertise, I create and execute effective digital solutions that enhance performance, simplify processes, and provide genuine value to both users and teams."
            : "Con una sólida formación en desarrollo de software, análisis de datos y experencia en bases de datos, diseño e implemento soluciones digitales impactantes que mejoran el rendimiento, agilizan los procesos y brindan valor real tanto a los usuarios como a los equipos."}
        </p>

        <a
          href={cvFile}
          download
          className="inline-block mt-8 
            bg-dark-secondary text-white 
            dark:bg-light-primary dark:text-black 
            font-semibold px-6 py-3 rounded-full shadow 
            hover:opacity-90 transition"
        >
          {language === "en" ? "Download resume ⬇" : "Descargar curriculum ⬇"}
        </a>
      </div>
    </section>
  );
}

export default Home;
