import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

function Contact() {
  const { language } = useAppContext();

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-20 bg-light-background dark:bg-dark-primary transition-colors duration-500"
    >
      <div className="max-w-5xl mx-auto">
        {/* Título y Subtítulo */}
        <div className="mb-16 flex flex-col items-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-dark-tertiary dark:text-dark-font_primary">
            {language === "en" ? "Let's Connect" : "Hablemos"}
          </h2>
          <div className="w-20 h-1.5 bg-light-tertiary dark:bg-dark-secondary mt-4"></div>
          <p className="mt-6 text-dark-secondary/70 dark:text-dark-font/60 max-w-lg">
            {language === "en"
              ? "Interested in a collaboration or have a technical question? My inbox is always open."
              : "¿Interesado en una colaboración o tienes alguna duda técnica? Mi bandeja de entrada está abierta."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Columna de Información */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="bg-white dark:bg-dark-tertiary/10 border border-gray-100 dark:border-dark-secondary/20 p-8 rounded-3xl">
              <h3 className="text-xl font-bold text-dark-tertiary dark:text-dark-font_primary mb-6">
                {language === "en"
                  ? "Contact Information"
                  : "Información de Contacto"}
              </h3>

              <div className="space-y-6">
                <a
                  href="mailto:ricky95hnd@email.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-light-tertiary/10 dark:bg-dark-secondary/10 flex items-center justify-center text-light-tertiary dark:text-dark-secondary group-hover:scale-110 transition-transform">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                      Email
                    </p>
                    <p className="text-dark-secondary dark:text-dark-font font-medium">
                      ricky95hnd@email.com
                    </p>
                  </div>
                </a>

                <a
                  href="https://www.linkedin.com/in/franky-interiano-info/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-light-tertiary/10 dark:bg-dark-secondary/10 flex items-center justify-center text-light-tertiary dark:text-dark-secondary group-hover:scale-110 transition-transform">
                    <FaLinkedinIn size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                      LinkedIn
                    </p>
                    <p className="text-dark-secondary dark:text-dark-font font-medium">
                      franky-interiano-info
                    </p>
                  </div>
                </a>

                <a
                  href="https://github.com/rick2303"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-light-tertiary/10 dark:bg-dark-secondary/10 flex items-center justify-center text-light-tertiary dark:text-dark-secondary group-hover:scale-110 transition-transform">
                    <FaGithub size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-mono font-bold text-gray-400 uppercase tracking-widest">
                      GitHub
                    </p>
                    <p className="text-dark-secondary dark:text-dark-font font-medium">
                      rick2303
                    </p>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <form
            action="https://formspree.io/f/xanjggbq"
            method="POST"
            className="order-1 lg:order-2 bg-white dark:bg-dark-tertiary/10 border border-gray-100 dark:border-dark-secondary/20 p-8 rounded-3xl shadow-sm space-y-5"
          >
            <div>
              <label className="block text-xs font-mono font-bold text-light-tertiary dark:text-dark-secondary uppercase tracking-widest mb-2 ml-1">
                {language === "en" ? "Name" : "Nombre"}
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-dark-tertiary bg-gray-50 dark:bg-dark-primary/50 text-dark-secondary dark:text-dark-font focus:ring-2 focus:ring-light-tertiary dark:focus:ring-dark-secondary outline-none transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-light-tertiary dark:text-dark-secondary uppercase tracking-widest mb-2 ml-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-dark-tertiary bg-gray-50 dark:bg-dark-primary/50 text-dark-secondary dark:text-dark-font focus:ring-2 focus:ring-light-tertiary dark:focus:ring-dark-secondary outline-none transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="block text-xs font-mono font-bold text-light-tertiary dark:text-dark-secondary uppercase tracking-widest mb-2 ml-1">
                {language === "en" ? "Message" : "Mensaje"}
              </label>
              <textarea
                name="message"
                rows="4"
                required
                className="w-full px-5 py-3 rounded-xl border border-gray-200 dark:border-dark-tertiary bg-gray-50 dark:bg-dark-primary/50 text-dark-secondary dark:text-dark-font focus:ring-2 focus:ring-light-tertiary dark:focus:ring-dark-secondary outline-none transition-all resize-none"
                placeholder="..."
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-light-tertiary dark:bg-dark-secondary text-white font-bold py-4 rounded-xl shadow-lg shadow-light-tertiary/20 dark:shadow-dark-secondary/10 hover:-translate-y-1 transition-all active:scale-95"
            >
              {language === "en" ? "Send Message" : "Enviar Mensaje"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
