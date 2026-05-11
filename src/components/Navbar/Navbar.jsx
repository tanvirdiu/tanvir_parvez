import './Navbar.css'
import { useState } from 'react'

import logo from '../../assets/final_logo.png'

function Navbar({ darkMode, setDarkMode }) {

  const [menuOpen, setMenuOpen] = useState(false)

  return (

    <nav className="navbar">


      {/* ===== LOGO ===== */}

      <div className="logo">

        <img
          src={logo}
          alt="logo"
        />

      </div>



      {/* ===== MOBILE MENU ===== */}

      <div
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >

        {menuOpen ? '✕' : '☰'}

      </div>



      {/* ===== NAV LINKS ===== */}

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a
            href="#home"
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </a>
        </li>

        <li>
          <a
            href="#projects"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#timeline"
            onClick={() => setMenuOpen(false)}
          >
            Journey
          </a>
        </li>

        <li>
          <a
            href="#education"
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>
        </li>

        <li>
          <a
            href="#certificates"
            onClick={() => setMenuOpen(false)}
          >
            Certificates
          </a>
        </li>

        <li>
          <a
            href="#testimonials"
            onClick={() => setMenuOpen(false)}
          >
            Reviews
          </a>
        </li>

        <li>
          <a
            href="#faq"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </a>
        </li>

        <li>
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>

      </ul>



      {/* ===== RIGHT ===== */}

      <div className="nav-right">


        {/* ===== THEME TOGGLE ===== */}

        <button
          className={`theme-toggle ${darkMode ? 'active' : ''}`}
          onClick={() => setDarkMode(!darkMode)}
        >

          <div className="toggle-circle">


            {/* ===== MOON ===== */}

            {darkMode ? (

              <svg
                className="toggle-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >

                <path
                  fill="currentColor"
                  d="M21 12.79A9 9 0 0 1 11.21 3a7 7 0 1 0 9.79 9.79z"
                />

              </svg>

            ) : (


              /* ===== SUN ===== */

              <svg
                className="toggle-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >

                <path
                  fill="currentColor"
                  d="M12 18a6 6 0 1 1 0-12a6 6 0 0 1 0 12"
                />

                <path
                  fill="currentColor"
                  d="M12 2v2M12 20v2M4 12h2M18 12h2"
                />

              </svg>

            )}

          </div>

        </button>

      </div>

    </nav>

  )
}

export default Navbar