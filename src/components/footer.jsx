import { Link } from "react-router-dom";
import { FaEnvelope, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

function Footer() {
  const { language } = useAppContext();

  const navItems = [
    { to: "/", label: language === "en" ? "Home" : "Inicio" },
    { to: "/projects", label: language === "en" ? "Projects" : "Proyectos" },
    { to: "/experience", label: language === "en" ? "Experience" : "Experiencia" },
    { to: "/contact", label: language === "en" ? "Contact" : "Contacto" },
  ];

  return (
    <footer className="relative bg-light-section dark:bg-dark-tertiary/40 border-t border-light-tertiary dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Branding */}
          <div>
            <h3 className="font-display text-2xl font-semibold text-light-primary dark:text-white mb-3">
              Franky
              <span className="text-light-secondary dark:text-dark-secondary">.</span>
            </h3>
            <p className="text-sm text-zinc-500 dark:text-dark-font leading-relaxed max-w-xs">
              {language === "en"
                ? "Software engineer · fintech & production support. Banking, payments and production web apps."
                : "Ingeniero de software · fintech y soporte de producción. Banca, pagos y apps web en producción."}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-dark-font/70 mb-4">
              {language === "en" ? "Navigation" : "Navegación"}
            </p>
            <ul className="space-y-2.5">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-[15px] text-light-primary dark:text-zinc-300 hover:text-light-secondary dark:hover:text-dark-secondary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-xs font-mono font-medium uppercase tracking-[0.2em] text-zinc-400 dark:text-dark-font/70 mb-4">
              {language === "en" ? "Elsewhere" : "Encuéntrame"}
            </p>
            <div className="flex gap-3 mb-5">
              <a
                href="mailto:ricky95hnd@gmail.com"
                aria-label="Email"
                className="w-10 h-10 rounded-xl bg-white dark:bg-dark-primary border border-light-tertiary dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-dark-font hover:text-light-secondary dark:hover:text-dark-secondary hover:border-light-secondary/40 dark:hover:border-dark-secondary/40 transition-all"
              >
                <FaEnvelope size={16} />
              </a>
              <a
                href="https://github.com/rick2303"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-white dark:bg-dark-primary border border-light-tertiary dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-dark-font hover:text-light-secondary dark:hover:text-dark-secondary hover:border-light-secondary/40 dark:hover:border-dark-secondary/40 transition-all"
              >
                <FaGithub size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/franky-interiano-info"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-white dark:bg-dark-primary border border-light-tertiary dark:border-white/10 flex items-center justify-center text-zinc-500 dark:text-dark-font hover:text-light-secondary dark:hover:text-dark-secondary hover:border-light-secondary/40 dark:hover:border-dark-secondary/40 transition-all"
              >
                <FaLinkedinIn size={16} />
              </a>
            </div>
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <p className="text-[12px] font-mono uppercase tracking-widest text-zinc-500 dark:text-dark-font/70">
                {language === "en"
                  ? "Available for opportunities"
                  : "Disponible para oportunidades"}
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-light-tertiary dark:border-white/5 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-sm text-zinc-500 dark:text-dark-font/70">
            &copy; {new Date().getFullYear()} Franky Interiano —{" "}
            {language === "en"
              ? "All rights reserved"
              : "Todos los derechos reservados"}
          </p>
          <p className="text-[12px] text-zinc-400 dark:text-zinc-500 italic">
            {language === "en"
              ? "Built with React, Tailwind & Love."
              : "Construido con React, Tailwind y pasión."}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
