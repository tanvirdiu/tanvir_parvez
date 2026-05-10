import { useState } from 'react'

import './App.css'


/* =========================
   COMPONENTS
========================= */

import Navbar from './components/Navbar'
import Home from './components/Home'
import Stats from './components/Stats'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Education from './components/Education'

import Certificates from './components/Certificates'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'

import Contact from './components/Contact'

import Footer from './components/Footer'

import ScrollProgress from './components/ScrollProgress'



function App() {

  /* =========================
     DARK MODE
  ========================= */

  const [darkMode, setDarkMode] =
  useState(true)


  return (

    <div
      className={
        darkMode
        ? 'dark-theme'
        : 'light-theme'
      }
    >


      {/* ===== SCROLL BAR ===== */}

      <ScrollProgress />


      {/* ===== NAVBAR ===== */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      {/* ===== HOME ===== */}

      <Home />


      {/* ===== STATS ===== */}

      <Stats />


      {/* ===== ABOUT ===== */}

      <About />


      {/* ===== TECH MARQUEE ===== */}

      


      {/* ===== SERVICES ===== */}

      <Services />


      {/* ===== PROJECTS ===== */}

      <Projects />


      {/* ===== TIMELINE ===== */}

      <Timeline />


      {/* ===== EDUCATION ===== */}

      <Education />


      {/* ===== CERTIFICATES ===== */}

      <Certificates />


      {/* ===== TESTIMONIALS ===== */}

      <Testimonials />


      {/* ===== FAQ ===== */}

      <FAQ />


      {/* ===== CONTACT ===== */}

      <Contact />


      {/* ===== FOOTER ===== */}

      <Footer />

    </div>

  )
}

export default App