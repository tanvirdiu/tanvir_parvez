import heroImg from '../assets/tanvir2.png'

function Home() {

  return (

    <section className="home" id="home">

      <div className="hero-section">


        {/* ===== LEFT ===== */}

        <div className="left">

          <h3>Hello, I'm</h3>

          <h1>Tanvir Parvez Prottoy</h1>

          <h2>Full Stack Developer</h2>

          <p>
            I build modern and responsive websites using
            React, JavaScript, HTML and CSS. 
          </p>


          {/* ===== BUTTONS ===== */}

          <div className="buttons">

            <button className="hire-btn">
              Hire Me
            </button>

           <a
  href="./Tanvir-Parvez-CV.pdf"
  download
  className="cv-btn"
>
  Download CV
</a>

          </div>


          {/* ===== SOCIAL LINKS ===== */}

          <div className="socials">


            {/* ===== GITHUB ===== */}

            <a
              href="https://github.com/tanvirdiu"
              target="_blank"
            >

              <svg
                className="button-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >

                <path
                  fill="white"
                  d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.71.08-.71 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.18-3.12-.12-.3-.5-1.48.11-3.08 0 0 .96-.31 3.15 1.19a10.9 10.9 0 0 1 5.74 0c2.18-1.5 3.14-1.19 3.14-1.19.62 1.6.24 2.78.12 3.08.73.82 1.18 1.86 1.18 3.12 0 4.43-2.7 5.4-5.27 5.69.41.36.77 1.08.77 2.18v3.23c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
                />

              </svg>

            </a>



            {/* ===== FACEBOOK ===== */}

            <a
              href="https://www.facebook.com/tanvirparvez10/"
              target="_blank"
            >

              <svg
                className="button-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >

                <path
                  fill="white"
                  d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12"
                />

              </svg>

            </a>



            {/* ===== LINKEDIN ===== */}

            <a
              href="https://www.linkedin.com/in/tanvir-parvez-8a3510242/"
              target="_blank"
            >

              <svg
                className="button-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >

                <path
                  fill="white"
                  d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-5V8z"
                />

              </svg>

            </a>



            {/* ===== BEHANCE ===== */}

            <a
              href="https://www.behance.net/f59af084"
              target="_blank"
            >

              <svg
                className="button-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >

                <path
                  fill="white"
                  d="M9.5 11.5s2-.2 2-2.5-1.6-3.5-3.7-3.5H0v13h7.8s4.2.1 4.2-3.8c0-3.9-2.5-3.7-2.5-3.7zm-2.1-3.7h1.1s1 0 1 1.1-.7 1.2-1.5 1.2H7.4V7.8zm1.3 7.2H7.4v-3h1.4s1.7 0 1.7 1.5-1.1 1.5-1.8 1.5zm6.8-6.6c-4 0-4 4-4 4s-.3 4 4 4c0 0 3.6.2 3.6-2.8h-1.9s.1 1.2-1.6 1.2c0 0-1.8.1-1.8-1.8h5.4s.6-4.6-3.7-4.6z"
                />

              </svg>

            </a>

           

          </div>

        </div>



        {/* ===== RIGHT ===== */}

        <div className="right">

          <div className="image-box">

            <img
              src={heroImg}
              alt="Tanvir"
            />

          </div>

        </div>

      </div>

    </section>

  )
}

export default Home