import { useAppContext } from "../context/AppContext";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

function Navbar() {
  const { language, setLanguage, isDarkMode, setIsDarkMode } = useAppContext();

  const toggleLanguage = () => setLanguage(language === "en" ? "es" : "en");
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  const navItems = [
    { id: "#home", label: language === "en" ? "Home" : "Inicio" },
    { id: "#experience", label: language === "en" ? "Experience" : "Experiencia" },
    { id: "#skills", label: language === "en" ? "Skills" : "Habilidades" },
    { id: "#projects", label: language === "en" ? "Projects" : "Proyectos" },
    {
      id: "#references",
      label: language === "en" ? "References" : "Referencias",
    },
    { id: "#contact", label: language === "en" ? "Contact" : "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-dark-tertiary backdrop-blur-md shadow">
      <nav className="flex justify-between items-center px-6 md:px-20 py-4 text-black dark:text-dark-font_primary">
        <div className="text-2xl font-bold">
          <a href="#home">
            <img src="/icon.png" alt="" className="w-10 rounded-lg" />
          </a>
        </div>
        <ul className="hidden md:flex gap-6 font-medium">
          {navItems.map((item) => (
            <li key={item.id}>
              <a href={item.id} className="hover:text-lime-400 transition">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4 text-lg">
          <a href="mailto:ricky95hnd@email.com">
            <FaEnvelope className="hover:text-red-500" />
          </a>
          <a href="https://github.com/rick2303" target="_blank">
            <FaGithub className="hover:text-gray-500" />
          </a>
          <a href="https://www.linkedin.com/in/franky-interiano-info" target="_blank">
            <FaLinkedinIn className="hover:text-blue-500" />
          </a>
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 text-sm border rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {language.toUpperCase()}
          </button>
          <button
            onClick={toggleDarkMode}
            className="hover:text-lime-400 transition text-xl"
          >
            {isDarkMode ? <BsSun /> : <BsMoon />}
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
