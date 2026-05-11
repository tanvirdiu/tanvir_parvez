import { useState, useEffect } from 'react'

import './App.css'


/* =========================
   COMPONENTS
========================= */

import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import Stats from './components/Stats/Stats'
import About from './components/About/About'
import Services from './components/Services/Services'
import Projects from './components/Projects/Projects'
import Timeline from './components/Timeline/Timeline'
import Education from './components/Education/Education'
import Certificates from './components/Certificates/Certificates'
import Testimonials from './components/Testimonials/Testimonials'
import FAQ from './components/FAQ/FAQ'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollProgress from './components/ScrollProgress/ScrollProgress'
import Skills from './components/Skills/Skills'
import Assistant from './components/Assistant/Assistant'
import VisitorCounter from './components/VisitorCounter/VisitorCounter'



/* =========================
   STYLES
========================= */
import './styles/global.css'
import './styles/themes.css'
import './styles/responsive.css'
import './styles/variables.css'


function App() {


  /* =========================
     DARK MODE
  ========================= */

  const [darkMode, setDarkMode] =
    useState(true)



  /* =========================
     LIVE THEME COLOR
  ========================= */

  const [themeColor, setThemeColor] = useState(

    localStorage.getItem('themeColor') || '#38bdf8'

  )



  useEffect(() => {

    document.documentElement.style.setProperty(

      '--primary-color',

      themeColor

    )

    localStorage.setItem(

      'themeColor',

      themeColor

    )

  }, [themeColor])



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


      {/* ===== LIVE THEME PICKER ===== */}

      <div className="theme-picker">

        <span
          style={{ background: '#38bdf8' }}
          onClick={() =>
            setThemeColor('#38bdf8')
          }
        ></span>

        <span
          style={{ background: '#a855f7' }}
          onClick={() =>
            setThemeColor('#a855f7')
          }
        ></span>

        <span
          style={{ background: '#22c55e' }}
          onClick={() =>
            setThemeColor('#22c55e')
          }
        ></span>

        <span
          style={{ background: '#f97316' }}
          onClick={() =>
            setThemeColor('#f97316')
          }
        ></span>

      </div>



      {/* ===== NAVBAR ===== */}

      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />


      {/* ===== HOME ===== */}

      <Home />


      {/* ===== STATS ===== */}

      <Stats />


      {/* ===== AI ASSISTANT ===== */}

      <Assistant />


      {/* ===== VISITOR COUNTER ===== */}

      <VisitorCounter />


      {/* ===== ABOUT ===== */}

      <About />


      {/* ===== SKILLS ===== */}

      <Skills />


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