import { useAppContext } from "../context/AppContext";

function Footer() {
  const { language } = useAppContext();

  return (
    <footer className="bg-white dark:bg-dark-primary py-12 border-t border-gray-100 dark:border-white/5 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Lado Izquierdo: Branding y Copyright */}
        <div className="text-center md:text-left">
          <h3 className="text-xl font-extrabold text-light-primary dark:text-white mb-1">
            Franky
            <span className="text-light-tertiary dark:text-dark-secondary">
              .
            </span>
          </h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            &copy; {new Date().getFullYear()} —{" "}
            {language === "en"
              ? "All rights reserved"
              : "Todos los derechos reservados"}
          </p>
        </div>

        {/* Lado Derecho: Built with & Status */}
        <div className="flex flex-col items-center md:items-end gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-light-tertiary dark:bg-dark-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-light-tertiary dark:bg-dark-secondary"></span>
            </span>
            <p className="text-[12px] font-mono font-bold uppercase tracking-widest text-dark-secondary/80 dark:text-dark-font/60">
              {language === "en"
                ? "Available for opportunities"
                : "Disponible para oportunidades"}
            </p>
          </div>

          <p className="text-[11px] text-gray-400 dark:text-gray-500 italic">
            {language === "en"
              ? "Built with React, Tailwind & Love."
              : "Construido con React, Tailwind y pasión."}
          </p>
        </div>
      </div>

      {/* Una línea decorativa final muy sutil */}
      <div className="mt-8 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-200 dark:via-white/5 to-transparent"></div>
    </footer>
  );
}

export default Footer;
