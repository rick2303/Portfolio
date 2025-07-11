import { useAppContext } from "../context/AppContext";
import Skills from "../components/skills";

function Skill() {
  const { language } = useAppContext();

  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-20 bg-light-secondary dark:bg-dark-primary text-light-primary dark:text-white transition"
    >
      <Skills/>
    </section>
  );
}

export default Skill;
