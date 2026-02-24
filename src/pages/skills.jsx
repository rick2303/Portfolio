import { useAppContext } from "../context/AppContext";
import Skills from "../components/skills";

function Skill() {
  return (
    <div id="skills" className="bg-light-background dark:bg-dark-primary transition-colors duration-500">
      <Skills />
    </div>
  );
}

export default Skill;