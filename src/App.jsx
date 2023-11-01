import About from "./Sections/About/About";
import AboutMD from "./Sections/About/AboutMD";
import Hero from "./Sections/Hero/Hero";
import Navbar from "./Sections/Navbar/Navbar";
import Projects from "./Sections/Projects/Projects";
import Skills from "./Sections/Skills/Skills";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto relative">
      <Hero />
      <section className="sticky top-0 z-10 bg-white">
        <Navbar />
        <About />
        <AboutMD />
        <Skills />
        <Projects />
      </section>
    </div>
  );
}

export default App;
