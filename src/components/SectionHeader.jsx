// Encabezado editorial unificado: kicker mono cobre + título serif.
function SectionHeader({ kicker, title, subtitle, align = "left", className = "" }) {
  const centered = align === "center";

  return (
    <div
      className={`mb-14 md:mb-16 ${centered ? "flex flex-col items-center text-center" : ""} ${className}`}
    >
      <p
        className={`flex items-center gap-3 text-xs font-mono font-medium uppercase tracking-[0.25em] text-zinc-500 dark:text-zinc-400 mb-4 ${
          centered ? "justify-center" : ""
        }`}
      >
        <span className="inline-block w-8 h-[1px] bg-zinc-400 dark:bg-zinc-500" />
        {kicker}
      </p>
      <h2 className="font-display text-4xl md:text-5xl font-medium tracking-tight text-light-primary dark:text-dark-font_primary leading-[1.1]">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-5 text-base md:text-lg text-zinc-600 dark:text-dark-font leading-relaxed ${
            centered ? "max-w-2xl" : "max-w-2xl"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
