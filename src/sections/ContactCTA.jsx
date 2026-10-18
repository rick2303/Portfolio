import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import Reveal from "../components/Reveal";

function ContactCTA() {
  const { language } = useAppContext();

  return (
    <section className="py-24 px-6 md:px-12 bg-light-background dark:bg-dark-primary transition-colors duration-500">
      <Reveal className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-light-primary dark:bg-dark-tertiary px-8 py-16 md:px-16 md:py-20 text-center grain">
          {/* Glow sutil */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[300px] w-[500px] rounded-full bg-white/10 blur-[100px]"
          />

          <p className="relative text-xs font-mono font-medium uppercase tracking-[0.3em] text-zinc-400 mb-6">
            {language === "en" ? "Next project" : "Siguiente proyecto"}
          </p>
          <h2 className="relative font-display text-4xl md:text-6xl font-medium tracking-tight text-white leading-[1.1] mb-6">
            {language === "en" ? (
              <>
                Let's build something{" "}
                <em className="italic text-dark-secondary">together.</em>
              </>
            ) : (
              <>
                ¿Construimos algo{" "}
                <em className="italic text-dark-secondary">juntos?</em>
              </>
            )}
          </h2>
          <p className="relative text-zinc-300 max-w-xl mx-auto mb-10 text-base md:text-lg leading-relaxed">
            {language === "en"
              ? "I'm open to full-time roles, freelance projects and interesting collaborations."
              : "Estoy abierto a roles full-time, proyectos freelance y colaboraciones interesantes."}
          </p>
          <div className="relative flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-light-primary font-semibold rounded-2xl hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 transition-all duration-300"
            >
              {language === "en" ? "Get in touch" : "Hablemos"}
            </Link>
            <a
              href="mailto:ricky95hnd@gmail.com"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300"
            >
              ricky95hnd@gmail.com
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

export default ContactCTA;
