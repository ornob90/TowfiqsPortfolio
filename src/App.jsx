import About from "./Sections/About/About";
import AboutMD from "./Sections/About/AboutMD";
import Hero from "./Sections/Hero/Hero";
import Navbar from "./Sections/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Hero />
      <section className="relative">
        <Navbar />
        <About />
        <AboutMD />
      </section>
    </div>
  );
}

export default App;
