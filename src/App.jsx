import About from "./components/app/About";
import Hero from "./components/app/Hero";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <About />
      <section className="z-0 min-h-screen bg-blue-500" />
    </div>
  );
};

export default App;
