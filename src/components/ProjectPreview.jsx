import { useState } from "react";

// Vista previa de proyecto con soporte para screenshot desktop y/o mobile.
// - Solo `image`: se comporta como antes (object-cover).
// - Solo `imageMobile`: muestra el screenshot vertical como un "teléfono"
//   centrado sobre un fondo difuminado de la misma imagen.
// - Ambas: muestra un toggle desktop/mobile en la esquina inferior derecha.
// `children` se renderiza encima (badges, overlays de la card).
function ProjectPreview({ image, imageMobile, alt, className = "", children }) {
  const hasBoth = Boolean(image && imageMobile);
  const [view, setView] = useState(image ? "desktop" : "mobile");
  const showMobile = view === "mobile" && imageMobile;

  const switchView = (e, next) => {
    e.preventDefault();
    e.stopPropagation();
    setView(next);
  };

  return (
    <div
      className={`relative overflow-hidden bg-light-section dark:bg-dark-primary ${className}`}
    >
      {/* Vista desktop */}
      {image && (
        <img
          src={image}
          alt={alt}
          loading="lazy"
          className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105 ${
            showMobile ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
        />
      )}

      {/* Vista mobile: fondo blur + teléfono centrado */}
      {imageMobile && (
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            showMobile ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <img
            src={imageMobile}
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover blur-2xl scale-125 opacity-60 dark:opacity-40"
          />
          <div className="absolute inset-0 bg-white/20 dark:bg-black/30" />
          <div className="absolute inset-0 flex items-center justify-center py-4">
            {/* Mockup de teléfono */}
            <div className="relative h-full rounded-[20px] bg-zinc-900 dark:bg-zinc-950 p-[4px] shadow-xl shadow-zinc-900/40 ring-1 ring-white/15 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
              {/* Botones laterales */}
              <span className="absolute -left-[2px] top-[17%] w-[2px] h-[5%] rounded-l-full bg-zinc-600" />
              <span className="absolute -left-[2px] top-[24%] w-[2px] h-[5%] rounded-l-full bg-zinc-600" />
              <span className="absolute -right-[2px] top-[20%] w-[2px] h-[8%] rounded-r-full bg-zinc-600" />
              {/* Pantalla */}
              <div className="relative h-full overflow-hidden rounded-[16px] bg-white">
                <img
                  src={imageMobile}
                  alt={alt}
                  loading="lazy"
                  className="h-full w-auto object-cover"
                />
                {/* Dynamic island */}
                <span className="absolute top-[1.8%] left-1/2 -translate-x-1/2 w-[32%] h-[3%] min-h-[5px] rounded-full bg-zinc-950" />
              </div>
            </div>
          </div>
        </div>
      )}

      {children}

      {/* Toggle desktop / mobile */}
      {hasBoth && (
        <div className="absolute bottom-3 right-3 z-10 flex items-center gap-0.5 p-1 rounded-full backdrop-blur-md bg-white/85 dark:bg-dark-primary/70 border border-white/40 dark:border-white/10 shadow-sm">
          <button
            type="button"
            aria-label="Desktop preview"
            title="Desktop"
            onClick={(e) => switchView(e, "desktop")}
            className={`p-1.5 rounded-full transition-colors duration-300 ${
              !showMobile
                ? "bg-light-secondary dark:bg-dark-secondary text-white dark:text-dark-primary"
                : "text-zinc-500 dark:text-dark-font hover:text-zinc-800 dark:hover:text-dark-font_primary"
            }`}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="2" y="3" width="20" height="14" rx="2" />
              <line x1="8" y1="21" x2="16" y2="21" />
              <line x1="12" y1="17" x2="12" y2="21" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Mobile preview"
            title="Mobile"
            onClick={(e) => switchView(e, "mobile")}
            className={`p-1.5 rounded-full transition-colors duration-300 ${
              showMobile
                ? "bg-light-secondary dark:bg-dark-secondary text-white dark:text-dark-primary"
                : "text-zinc-500 dark:text-dark-font hover:text-zinc-800 dark:hover:text-dark-font_primary"
            }`}
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <rect x="5" y="2" width="14" height="20" rx="2" />
              <line x1="12" y1="18" x2="12.01" y2="18" />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectPreview;
