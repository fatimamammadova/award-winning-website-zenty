import About from "./components/app/About";
import Contact from "./components/app/Contact";
import Features from "./components/app/Features";
import Footer from "./components/app/Footer";
import Hero from "./components/app/Hero";
import Navbar from "./components/app/Navbar";
import Story from "./components/app/Story";

const App = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Story />
      <Contact/>
      <Footer/>
    </div>
  );
};

export default App;
