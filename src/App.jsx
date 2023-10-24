import About from "./Sections/About/About";
import Hero from "./Sections/Hero/Hero";
import Navbar from "./Sections/Navbar/Navbar";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <Hero />
      <section className="relative">
        <Navbar />
        <About />
      </section>
    </div>
  );
}

export default App;
