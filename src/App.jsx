import About from "./Sections/About/About";
import AboutMD from "./Sections/About/AboutMD";
import Contact from "./Sections/Contact/Contact";
import Education from "./Sections/Education/Education";
import Experience from "./Sections/Experience/Experience";
import Hero from "./Sections/Hero/Hero";
import Navbar from "./Sections/Navbar/Navbar";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto relative">
      <Hero />
      <section className="sticky top-0 z-10 bg-white dark:bg-[#141616]">
        <Navbar />
        <About />
        <AboutMD />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </section>
    </div>
  );
}

export default App;
