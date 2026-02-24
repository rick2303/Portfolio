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
    <div className="bg-light-background text-slate-900 dark:bg-dark-primary dark:text-white min-h-screen transition-colors duration-500">
      <header className="fixed top-0 w-full z-50">
        <Navbar />
      </header>

      <main id="home">
        <Home />
        <Experience />
        <Skill />
        <Languages />
        <ProjectsSection />
        <References />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

export default App;
