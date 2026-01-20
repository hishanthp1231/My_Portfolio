import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Technologies from "./Components/Technologies";
import Experience from "./Components/Experience";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <div className="overflow-x-hidden text-slate-900 antialiased selection:bg-indigo-100 selection:text-indigo-900">
      {/* Ultra-Modern Dynamic Background */}
      <div className="fixed top-0 -z-10 h-full w-full bg-white">
        <div className="absolute top-0 z-[-2] h-full w-full blur-[120px] opacity-50">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-200 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] rounded-full bg-cyan-100 animate-bounce [animation-duration:10s]"></div>
          <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] rounded-full bg-violet-100 animate-pulse [animation-duration:8s]"></div>
          <div className="absolute bottom-[20%] left-[10%] w-[35%] h-[35%] rounded-full bg-blue-50 animate-bounce [animation-duration:12s]"></div>
        </div>
      </div>


      <NavBar />

      <div className="container mx-auto px-6 sm:px-12 relative z-0">
        <Hero />
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <About />
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <Technologies />
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <Experience />
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <Projects />
      </div>

      <div className="container mx-auto px-4 sm:px-8">
        <Contact />
      </div>

    </div>

  );
}

export default App
