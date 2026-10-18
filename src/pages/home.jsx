import Hero from "../sections/Hero";
import AboutBento from "../sections/AboutBento";
import FeaturedProjects from "../sections/FeaturedProjects";
import ExperiencePreview from "../sections/ExperiencePreview";
import ContactCTA from "../sections/ContactCTA";
import PageTransition from "../components/PageTransition";
import usePageTitle from "../hooks/usePageTitle";

function Home() {
  usePageTitle();

  return (
    <PageTransition>
      <Hero />
      <AboutBento />
      <FeaturedProjects />
      <ExperiencePreview />
      <ContactCTA />
    </PageTransition>
  );
}

export default Home;
