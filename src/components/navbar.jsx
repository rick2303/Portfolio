import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleLanguage = () => setLanguage(language === "en" ? "es" : "en");
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { to: "/", label: language === "en" ? "Home" : "Inicio", end: true },
    { to: "/projects", label: language === "en" ? "Projects" : "Proyectos" },
    {
      to: "/experience",
      label: language === "en" ? "Experience" : "Experiencia",
    },
    { to: "/contact", label: language === "en" ? "Contact" : "Contacto" },
  ];

  const linkClasses = ({ isActive }) =>
    `relative text-[15px] font-medium tracking-tight transition-colors ${
      isActive
        ? "text-light-secondary dark:text-dark-secondary"
        : "text-light-primary dark:text-zinc-300 hover:text-light-secondary dark:hover:text-dark-secondary"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="absolute inset-0 bg-light-background/90 dark:bg-dark-primary/90 backdrop-blur-md border-b border-light-tertiary dark:border-white/10"></div>

      <nav className="relative max-w-7xl mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        {/* Logo */}
        <div className="flex items-center group z-50">
          <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
            <img
              src="/icon.png"
              alt="Logo"
              className="w-9 h-9 rounded-xl shadow-md transition-transform group-hover:rotate-12"
            />
            <span className="font-display font-semibold text-xl tracking-tight text-light-primary dark:text-white">
              Franky
              <span className="text-light-secondary dark:text-dark-secondary">.</span>
            </span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-10 items-center">
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink to={item.to} end={item.end} className={linkClasses}>
                {({ isActive }) => (
                  <span className="relative group/item">
                    {item.label}
                    <span
                      className={`absolute -bottom-1.5 left-0 h-[2px] bg-light-secondary dark:bg-dark-secondary transition-all duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover/item:w-full"
                      }`}
                    ></span>
                  </span>
                )}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Acciones */}
        <div className="flex items-center gap-2 md:gap-4 z-50">
          <button
            onClick={toggleLanguage}
            className="px-2 py-1 md:px-3 md:py-1.5 text-[10px] md:text-xs font-bold border border-light-primary/30 dark:border-white/20 rounded-lg text-light-primary dark:text-white hover:bg-light-primary hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
          >
            {language.toUpperCase()}
          </button>

          <button
            onClick={toggleDarkMode}
            aria-label={isDarkMode ? "Light mode" : "Dark mode"}
            className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-xl bg-light-section dark:bg-dark-tertiary text-light-primary dark:text-dark-secondary border border-light-tertiary dark:border-white/5 transition-transform active:scale-90"
          >
            {isDarkMode ? <BsSun size={18} /> : <BsMoon size={18} />}
          </button>

          <button
            onClick={toggleMenu}
            aria-label="Menu"
            className="lg:hidden p-2 text-light-primary dark:text-white transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div
          className={`
          fixed inset-0 bg-light-background dark:bg-dark-primary transition-all duration-500 ease-in-out lg:hidden
          ${isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none"}
        `}
        >
          <div className="flex flex-col items-center justify-center h-full space-y-8">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `font-display text-3xl font-medium transition-colors ${
                    isActive
                      ? "text-light-secondary dark:text-dark-secondary italic"
                      : "text-light-primary dark:text-white hover:text-light-secondary dark:hover:text-dark-secondary"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}

            <div className="flex gap-8 pt-8 border-t border-light-tertiary dark:border-white/10 w-2/3 justify-center">
              <a
                href="mailto:ricky95hnd@gmail.com"
                className="text-zinc-400 hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
              >
                <FaEnvelope size={24} />
              </a>
              <a
                href="https://github.com/rick2303"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-light-primary dark:hover:text-white transition-colors"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/franky-interiano-info"
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
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
