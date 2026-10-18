import { FaLinkedinIn, FaGithub, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";
import SectionHeader from "../components/SectionHeader";
import PageTransition from "../components/PageTransition";
import Reveal from "../components/Reveal";
import usePageTitle from "../hooks/usePageTitle";

function Contact() {
  const { language } = useAppContext();
  usePageTitle(language === "en" ? "Contact" : "Contacto");

  const infoItems = [
    {
      icon: <FaMapMarkerAlt size={20} />,
      label: language === "en" ? "Location" : "Ubicación",
      value: `Miami, FL · ${language === "en" ? "Open to remote" : "Abierto a remoto"}`,
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      value: "ricky95hnd@gmail.com",
      href: "mailto:ricky95hnd@gmail.com",
    },
    {
      icon: <FaLinkedinIn size={20} />,
      label: "LinkedIn",
      value: "franky-interiano-info",
      href: "https://www.linkedin.com/in/franky-interiano-info/",
    },
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      value: "rick2303",
      href: "https://github.com/rick2303",
    },
  ];

  const inputClasses =
    "w-full px-5 py-3 rounded-xl border border-light-tertiary dark:border-white/10 bg-light-section/50 dark:bg-dark-primary/50 text-zinc-800 dark:text-dark-font_primary placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:ring-2 focus:ring-light-secondary dark:focus:ring-dark-secondary focus:border-transparent outline-none transition-all";

  return (
    <PageTransition>
      <section
        id="contact"
        className="min-h-screen pt-32 pb-24 px-6 md:px-12 bg-light-background dark:bg-dark-primary transition-colors duration-500"
      >
        <div className="max-w-5xl mx-auto">
          <SectionHeader
            kicker={language === "en" ? "Contact" : "Contacto"}
            title={
              language === "en" ? (
                <>
                  Let's <em className="italic text-light-secondary dark:text-dark-secondary">connect</em>
                </>
              ) : (
                <>
                  <em className="italic text-light-secondary dark:text-dark-secondary">Hablemos</em>
                </>
              )
            }
            subtitle={
              language === "en"
                ? "Interested in a collaboration or have a technical question? My inbox is always open."
                : "¿Interesado en una colaboración o tienes alguna duda técnica? Mi bandeja de entrada está abierta."
            }
          />

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Información */}
            <Reveal className="order-2 lg:order-1">
              <div className="bg-white dark:bg-dark-tertiary/60 border border-light-tertiary dark:border-white/5 p-8 rounded-3xl">
                <h3 className="font-display text-xl font-medium text-light-primary dark:text-dark-font_primary mb-6">
                  {language === "en"
                    ? "Contact Information"
                    : "Información de Contacto"}
                </h3>

                <div className="space-y-6">
                  {infoItems.map((item) => {
                    const content = (
                      <>
                        <div className="w-12 h-12 rounded-xl bg-light-secondary/10 dark:bg-dark-secondary/10 flex items-center justify-center text-light-secondary dark:text-dark-secondary group-hover:scale-110 transition-transform">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-mono font-bold text-zinc-400 dark:text-dark-font/60 uppercase tracking-widest">
                            {item.label}
                          </p>
                          <p className="text-zinc-700 dark:text-dark-font font-medium">
                            {item.value}
                          </p>
                        </div>
                      </>
                    );

                    return item.href ? (
                      <a
                        key={item.label}
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                        className="flex items-center gap-4 group"
                      >
                        {content}
                      </a>
                    ) : (
                      <div key={item.label} className="flex items-center gap-4">
                        {content}
                      </div>
                    );
                  })}
                </div>
              </div>
            </Reveal>

            {/* Formulario */}
            <Reveal delay={0.1} className="order-1 lg:order-2">
              <form
                action="https://formspree.io/f/xanjggbq"
                method="POST"
                className="bg-white dark:bg-dark-tertiary/60 border border-light-tertiary dark:border-white/5 p-8 rounded-3xl space-y-5"
              >
                <div>
                  <label className="block text-xs font-mono font-bold text-light-secondary dark:text-dark-secondary uppercase tracking-widest mb-2 ml-1">
                    {language === "en" ? "Name" : "Nombre"}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    className={inputClasses}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-light-secondary dark:text-dark-secondary uppercase tracking-widest mb-2 ml-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    className={inputClasses}
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-light-secondary dark:text-dark-secondary uppercase tracking-widest mb-2 ml-1">
                    {language === "en" ? "Message" : "Mensaje"}
                  </label>
                  <textarea
                    name="message"
                    rows="4"
                    required
                    className={`${inputClasses} resize-none`}
                    placeholder="..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-light-primary dark:bg-dark-font_primary text-white dark:text-dark-primary font-semibold py-4 rounded-xl hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-900/15 dark:hover:shadow-white/10 transition-all active:scale-95"
                >
                  {language === "en" ? "Send Message" : "Enviar Mensaje"}
                </button>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Contact;
