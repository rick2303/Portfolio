import { useState } from "react";
import { useAppContext } from "../context/AppContext";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { BsSun, BsMoon } from "react-icons/bs";

function Navbar() {
  const { language, setLanguage, isDarkMode, setIsDarkMode } = useAppContext();
  const [isOpen, setIsOpen] = useState(false); // Estado para el menú móvil

  const toggleLanguage = () => setLanguage(language === "en" ? "es" : "en");
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    {
      id: "#experience",
      label: language === "en" ? "Experience" : "Experiencia",
    },
    { id: "#skills", label: language === "en" ? "Skills" : "Habilidades" },
    { id: "#projects", label: language === "en" ? "Projects" : "Proyectos" },
    {
      id: "#references",
      label: language === "en" ? "References" : "Referencias",
    },
    { id: "#contact", label: language === "en" ? "Contact" : "Contacto" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Fondo con Blur */}
      <div className="absolute inset-0 bg-white/90 dark:bg-dark-primary/95 backdrop-blur-md border-b border-gray-200 dark:border-white/10 shadow-sm"></div>

      <nav className="relative max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center group z-50">
          <a href="#home" className="flex items-center gap-2">
            <img
              src="/icon.png"
              alt="Logo"
              className="w-9 h-9 rounded-xl shadow-md transition-transform group-hover:rotate-12"
            />
            <span className="font-extrabold text-xl tracking-tight text-light-primary dark:text-white">
              Franky
              <span className="text-light-tertiary dark:text-dark-secondary">
                .
              </span>
            </span>
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.id}
                className="text-[15px] font-semibold text-light-primary dark:text-gray-200 hover:text-light-tertiary dark:hover:text-dark-secondary transition-all relative group/item"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-light-tertiary dark:bg-dark-secondary transition-all duration-300 group-hover/item:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Acciones (Desktop & Mobile) */}
        <div className="flex items-center gap-2 md:gap-4 z-50">
          {/* Switchers siempre visibles */}
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-bold border-2 border-light-primary dark:border-white/20 rounded-lg text-light-primary dark:text-white hover:bg-light-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            {language.toUpperCase()}
          </button>

          <button
            onClick={toggleDarkMode}
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-light-primary dark:bg-dark-tertiary text-white dark:text-dark-secondary shadow-lg transition-transform active:scale-90"
          >
            {isDarkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
          </button>

          {/* Hamburger Button (Mobile Only) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-light-primary dark:text-white transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`
          fixed inset-0 bg-white dark:bg-dark-primary transition-all duration-500 ease-in-out lg:hidden
          ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}
        `}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.id}
                onClick={() => setIsOpen(false)} // Cerrar al hacer clic
                className="text-2xl font-bold text-light-primary dark:text-white hover:text-light-tertiary dark:hover:text-dark-secondary transition-colors"
              >
                {item.label}
              </a>
            ))}

            {/* Redes Sociales en Móvil */}
            <div className="flex gap-8 pt-8 border-t border-gray-100 dark:border-white/10 w-2/3 justify-center">
              <a
                href="mailto:ricky95hnd@email.com"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://github.com/rick2303"
                target="_blank"
                className="text-gray-400 dark:hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/franky-interiano-info"
                target="_blank"
                className="text-gray-400 hover:text-blue-600 transition-colors"
              >
                <FaLinkedinIn size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
