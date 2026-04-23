import React from 'react';
import './styles/global.css';
import './App.css';

import useScrollReveal from './hooks/useScrollReveal';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Hero from './sections/Hero/Hero';
import Stats from './sections/Stats/Stats';
import About from './sections/About/About';
import Services from './sections/Services/Services';
import Projects from './sections/Projects/Projects';
import WhyUs from './sections/WhyUs/WhyUs';
import Contact from './sections/Contact/Contact';

function App() {
  useScrollReveal();

  return (
    <div>
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Services />
      <Projects />
      <WhyUs />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;