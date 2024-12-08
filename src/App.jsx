import About from "./components/app/About";
import Hero from "./components/app/Hero";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Hero />

      <About />
     
    </div>
  );
};

export default App;
