import "./App.css";
import { useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div id="home" className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white">
      <NavBar
        containerVariants={containerVariants}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <HeroSection
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <About
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <Education
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <Experience
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />
      
      <Skills containerVariants={containerVariants} />

      <Project
        containerVariants={containerVariants}
        itemVariants={itemVariants}
      />

      <Contact />

      <Footer
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      
    </div>
  );
}

export default App;
