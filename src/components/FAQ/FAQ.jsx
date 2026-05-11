import './FAQ.css'
import { useRef, useState } from 'react'

import emailjs from '@emailjs/browser'

function FAQ() {

  const form = useRef()

  const [success, setSuccess] = useState(false)

  const [error, setError] = useState(false)


  const sendEmail = (e) => {

    e.preventDefault()

    setSuccess(false)

    setError(false)


    emailjs.sendForm(

      'up_10',

      'template_r2c5p0c',

      form.current,

      '5pi_LSSexw_S2kXAk'

    )

    .then(() => {

      setSuccess(true)

      form.current.reset()

    })

    .catch((error) => {

      console.log(error)

      setError(true)

    })

  }


  return (

    <section
      className="faq"
      id="faq"
    >

      {/* ===== TITLE ===== */}

      <div className="section-title">

        <h4>
          Questions
        </h4>

        <h2>
          Ask Me Anything
        </h2>

      </div>



      {/* ===== FAQ BOXES ===== */}

      <div className="faq-container">


        <div className="faq-box">

          <h3>
            What technologies do you use?
          </h3>

          <p>
            I mainly work with React,
            JavaScript, Firebase, HTML,
            CSS and responsive UI design.
          </p>

        </div>



        <div className="faq-box">

          <h3>
            Are you available for freelance work?
          </h3>

          <p>
            Yes. I’m available for frontend,
            portfolio, dashboard and modern
            responsive website projects.
          </p>

        </div>



        <div className="faq-box">

          <h3>
            Do you build mobile responsive websites?
          </h3>

          <p>
            Yes. Every project is optimized
            for mobile, tablet, laptop
            and desktop devices.
          </p>

        </div>



        <div className="faq-box">

          <h3>
            Can you deploy websites online?
          </h3>

          <p>
            Yes. I can deploy websites using
            Vercel, Netlify, Firebase Hosting
            and GitHub.
          </p>

        </div>

      </div>



      {/* ===== ASK QUESTION FORM ===== */}

      <div className="ask-question-box">

        <h2>
          Send Me A Question
        </h2>

        <p>
          Feel free to ask anything.
        </p>



        <form
          ref={form}
          onSubmit={sendEmail}
        >


          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />



          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />



          <textarea
            name="message"
            placeholder="Write Your Message..."
            required
          >

          </textarea>



          <button type="submit">

            Send Message

          </button>

        </form>



        {/* ===== SUCCESS MESSAGE ===== */}

        {
          success && (

            <p className="success-msg">

              Message sent successfully ✅

            </p>

          )
        }



        {/* ===== ERROR MESSAGE ===== */}

        {
          error && (

            <p className="error-msg">

              Failed to send message ❌

            </p>

          )
        }

      </div>

    </section>

  )
}

export default FAQ
