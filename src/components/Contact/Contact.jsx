import './Contact.css'
import { useRef } from 'react'

import emailjs from '@emailjs/browser'

function Contact() {

  const form = useRef()


  const sendEmail = (e) => {

    e.preventDefault()


    emailjs.sendForm(

      'up_10',
      'template_ov9ngfo',

      form.current,

      '5pi_LSSexw_S2kXAk'

    )

    .then(() => {

      alert('Message Sent Successfully ✅')

    })

    .catch(() => {

      alert('Something went wrong ❌')

    })


    e.target.reset()
  }


  return (

    <section
      className="contact"
      id="contact"
    >

      {/* =========================
          SECTION TITLE
      ========================= */}

      <div className="section-title">

        <h4>
          Contact
        </h4>

        <h2>
          Send Me A Message
        </h2>

      </div>



      {/* =========================
          CONTACT FORM
      ========================= */}

      <div className="contact-form-wrapper">

        <form
          ref={form}
          onSubmit={sendEmail}
          className="contact-form"
        >


          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
          />


          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
          />


          <textarea
            name="message"
            placeholder="Write Your Message..."
            rows="7"
            required
          >

          </textarea>


          <button type="submit">

            Send Message

          </button>

        </form>

      </div>



      {/* =========================
          CONTACT CARDS
      ========================= */}

      <div className="contact-cards">


        {/* ===== GITHUB ===== */}

        <div className="contact-card">

          <div className="contact-icon">

            <svg
              className="contact-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >

              <path
                fill="white"
                d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.17c-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.04-.72.08-.71.08-.71 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.67 1.25 3.32.96.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.3 1.18-3.12-.12-.3-.5-1.48.11-3.08 0 0 .96-.31 3.15 1.19a10.9 10.9 0 0 1 5.74 0c2.18-1.5 3.14-1.19 3.14-1.19.62 1.6.24 2.78.12 3.08.73.82 1.18 1.86 1.18 3.12 0 4.43-2.7 5.4-5.27 5.69.41.36.77 1.08.77 2.18v3.23c0 .31.2.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"
              />

            </svg>

          </div>

          <h3>
            GitHub
          </h3>

          <a
            href="https://github.com/tanvirdiu"
            target="_blank"
          >
            Visit Profile
          </a>

        </div>



        {/* ===== FACEBOOK ===== */}

        <div className="contact-card">

          <div className="contact-icon">

            <svg
              className="contact-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >

              <path
                fill="white"
                d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56V12h2.78l-.44 2.89h-2.34v6.99A10 10 0 0 0 22 12"
              />

            </svg>

          </div>

          <h3>
            Facebook
          </h3>

          <a
            href="https://www.facebook.com/tanvirparvez10/"
            target="_blank"
          >
            Visit Profile
          </a>

        </div>



        {/* ===== LINKEDIN ===== */}

        <div className="contact-card">

          <div className="contact-icon">

            <svg
              className="contact-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >

              <path
                fill="white"
                d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.1c.7-1.3 2.4-2.7 4.9-2.7 5.2 0 6.2 3.4 6.2 7.8V24h-5v-7.5c0-1.8 0-4.1-2.5-4.1s-2.9 2-2.9 4V24h-5V8z"
              />

            </svg>

          </div>

          <h3>
            LinkedIn
          </h3>

          <a
            href="https://www.linkedin.com/in/tanvir-parvez-8a3510242/"
            target="_blank"
          >
            Visit Profile
          </a>

        </div>



        {/* ===== TELEGRAM ===== */}

        <div className="contact-card">

          <div className="contact-icon">

            <svg
              className="contact-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >

              <path
                fill="white"
                d="M9.04 15.57 8.66 20.9c.55 0 .79-.24 1.08-.53l2.6-2.5 5.4 3.95c.99.55 1.7.26 1.97-.92L23.3 4.6c.39-1.8-.65-2.5-1.6-2.15L1.77 10.1c-1.76.69-1.73 1.67-.3 2.11l5.1 1.6L18.4 6.4c.56-.36 1.07-.16.65.2"
              />

            </svg>

          </div>

          <h3>
            Telegram
          </h3>

          <a
            href="https://t.me/Tanvir_Parvez_10"
            target="_blank"
          >
            Message Me
          </a>

        </div>



        {/* ===== WHATSAPP ===== */}

        <div className="contact-card">

          <div className="contact-icon">

            <svg
              className="contact-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >

              <path
                fill="white"
                d="M19.11 17.2c-.27-.13-1.6-.79-1.85-.88-.25-.09-.43-.13-.61.13-.18.27-.7.88-.86 1.06-.16.18-.32.2-.59.07-.27-.13-1.14-.42-2.18-1.34-.8-.72-1.35-1.6-1.5-1.87-.16-.27-.02-.41.12-.54.12-.12.27-.31.41-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.61-1.47-.84-2.01-.22-.53-.44-.46-.61-.47h-.52c-.18 0-.47.07-.72.34-.25.27-.95.93-.95 2.27 0 1.34.97 2.63 1.1 2.81.13.18 1.9 2.9 4.6 4.07.64.28 1.14.44 1.53.56.64.2 1.22.17 1.68.1.51-.08 1.6-.65 1.82-1.28.23-.63.23-1.16.16-1.28-.07-.12-.25-.2-.52-.34z"
              />

            </svg>

          </div>

          <h3>
            WhatsApp
          </h3>

          <a
            href="https://wa.me/+8801786644744"
            target="_blank"
          >
            Chat Now
          </a>

        </div>



        {/* ===== EMAIL ===== */}

        <div className="contact-card">

          <div className="contact-icon">

            <svg
              className="contact-svg"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >

              <path
                fill="white"
                d="M2 6.5v11c0 .83.67 1.5 1.5 1.5H6V9.75L12 14l6-4.25V19h2.5c.83 0 1.5-.67 1.5-1.5v-11L12 13 2 6.5z"
              />

              <path
                fill="white"
                d="M22 5c0-.83-.67-1.5-1.5-1.5H20l-8 5.5-8-5.5h-.5C2.67 3.5 2 4.17 2 5l10 7 10-7z"
              />

            </svg>

          </div>

          <h3>
            Email
          </h3>

          <a
            href="mailto:prottoy15-5378@diu.edu.bd"
          >
            Send Email
          </a>

        </div>

      </div>

    </section>

  )
}

export default Contact