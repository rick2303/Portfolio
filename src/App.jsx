import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home";
import Experience from "./pages/experience";
import References from "./pages/references";
import Contact from "./pages/contact";
import Skill from "./pages/skills";
import ProjectsSection from "./pages/projects";
import Languages from "./pages/languages";

function App() {
  return (
    <div className="bg-light-secondary text-black dark:bg-dark-primary dark:text-white min-h-screen transition-colors duration-300">
      <header className="fixed top-0 w-full z-50 bg-black">
        <Navbar />
      </header>
      <main id="home">
        <Home />
        <Experience />
        <Skill />
        <Languages/>
        <ProjectsSection />
        <References />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
