import React from "react";
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Resume from './components/Resume';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { EditModeProvider } from './context/EditModeContext';

function App() {
  return (
    <EditModeProvider>
      <div className="bg-gradient-to-br from-blue-100 to-blue-200 min-h-screen text-gray-800 font-sans scroll-smooth">
        <Navbar />
        <Home />
        <About />
        <Projects />
        <Skills />
        <Resume />
        <Testimonials />
        <Contact />
        <Footer />
      </div>
    </EditModeProvider>
  );
}

export default App;
