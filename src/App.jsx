import About from "./components/app/About";
import Features from "./components/app/Features";
import Hero from "./components/app/Hero";
import Navbar from "./components/app/Navbar";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features/>
    </div>
  );
};

export default App;
