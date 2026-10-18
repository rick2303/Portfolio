import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ScrollProgress from "./components/ScrollProgress";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home";
import ProjectsPage from "./pages/projects";
import Experience from "./pages/experience";
import Contact from "./pages/contact";

function App() {
  return (
    <div className="bg-light-background text-zinc-900 dark:bg-dark-primary dark:text-white min-h-screen font-sans antialiased transition-colors duration-500">
      <ScrollProgress />
      <ScrollToTop />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
