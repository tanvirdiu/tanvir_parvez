import { useRef } from 'react'

import emailjs from '@emailjs/browser'

function Contact() {

  const form = useRef()


  const sendEmail = (e) => {

    e.preventDefault()


    emailjs.sendForm(

      'up_10',
      'template_4z6cc15',

      form.current,

      'ERstXuzSmJmoHxXtL'

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

      <div className="section-title">

        <h4>Contact</h4>

        <h2>Send Me A Message</h2>

      </div>



      {/* ===== CONTACT FORM ===== */}

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
          placeholder="Your Message"
          rows="7"
          required
        >
        </textarea>


        <button type="submit">

          Send Message

        </button>

      </form>

    </section>

  )
}

export default Contact