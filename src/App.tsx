import NeuralBackground from "./components/NeuralBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Education from "./components/Education";
import PracticalExperience from "./components/PracticalExperience";
import Publications from "./components/Publications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import RecognitionMarquee from "./components/RecognitionMarquee";

function App() {
  return (
    <div className="relative min-h-screen bg-void">
      <NeuralBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Certifications />
          <RecognitionMarquee />
          <Education />
          <PracticalExperience />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
