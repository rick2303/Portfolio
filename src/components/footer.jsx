import { useAppContext } from "../context/AppContext";

function Footer() {
  const { language } = useAppContext();

  return (
    <footer className=" bg-white/80 dark:bg-dark-tertiary text-white text-center py-4">
      <p className="text-black dark:text-white">
        &copy; 2025 Franky Interiano.{" "}
        {language === "en"
          ? "All rights reserved."
          : "Todos los derechos reservados. "}
      </p>
    </footer>
  );
}

export default Footer;
