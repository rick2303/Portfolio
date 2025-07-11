import { FaLinkedinIn, FaGithub, FaEnvelope } from "react-icons/fa";
import { useAppContext } from "../context/AppContext";

function Contact() {
  const { language } = useAppContext();

  return (
    <section
      id="contact"
      className="min-h-screen px-6 md:px-20 py-20 bg-light-secondary dark:bg-dark-primary text-light-primary dark:text-white transition"
    >
      <h2 className="text-4xl font-bold text-center mb-4">
        {language === "en" ? "Get in Touch" : "Contáctame"}
      </h2>
      <p className="text-center mb-10 text-gray-600 dark:text-gray-400">
        {language === "en"
          ? "Feel free to reach out if you want to collaborate or just say hi."
          : "No dudes en escribirme si quieres colaborar o simplemente saludar."}
      </p>

      <form
        action="https://formspree.io/f/xanjggbq"
        method="POST"
        className="max-w-xl mx-auto bg-white dark:bg-dark-tertiary p-8 rounded-lg shadow space-y-4"
      >
        <input
          type="text"
          name="name"
          placeholder={language === "en" ? "Your Name" : "Tu Nombre"}
          required
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-transparent"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-transparent"
        />
        <textarea
          name="message"
          rows="5"
          placeholder={language === "en" ? "Your Message" : "Tu Mensaje"}
          required
          className="w-full px-4 py-2 rounded border border-gray-300 dark:border-gray-600 bg-transparent"
        ></textarea>
        <button
          type="submit"
          className="bg-dark-secondary dark:bg-light-primary text-white dark:text-black font-semibold px-6 py-3 rounded hover:opacity-90 transition"
        >
          {language === "en" ? "Send Message" : "Enviar Mensaje"}
        </button>
      </form>

      {/* Socials */}

      <div className="flex justify-center gap-6 mt-10 text-xl">
        <a href="mailto:ricky95hnd@email.com">
          <FaEnvelope className="hover:text-red-500" />
        </a>
        <a
          href="https://www.linkedin.com/in/franky-interiano-info/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn className="hover:text-blue-500" />
        </a>
        <a
          href="https://github.com/rick2303"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub className="hover:text-gray-500" />
        </a>
      </div>
    </section>
  );
}

export default Contact;
