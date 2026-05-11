import './Assistant.css'

import { HiSparkles } from 'react-icons/hi'

import {
  useState,
  useRef,
  useEffect
}

from 'react'

import axios from 'axios'

import ReactMarkdown from 'react-markdown'


function Assistant() {


  /* =========================
     STATES
  ========================= */

  const [open, setOpen] = useState(false)

  const [input, setInput] = useState('')

  const [loading, setLoading] = useState(false)

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi 👋 Ask me about Tanvir.'
    }
  ])


  /* =========================
     AUTO SCROLL
  ========================= */

  const bottomRef = useRef(null)


  useEffect(() => {

    bottomRef.current?.scrollIntoView({
      behavior: 'smooth'
    })

  }, [messages, loading])



  /* =========================
     LOAD CHAT HISTORY
  ========================= */

  useEffect(() => {

    const savedMessages =
      localStorage.getItem(
        'tanvir-chat-history'
      )

    if (savedMessages) {

      setMessages(
        JSON.parse(savedMessages)
      )

    }

  }, [])



  /* =========================
     SAVE CHAT HISTORY
  ========================= */

  useEffect(() => {

    localStorage.setItem(

      'tanvir-chat-history',

      JSON.stringify(messages)

    )

  }, [messages])



  /* =========================
     SEND MESSAGE
  ========================= */

  const sendMessage = async () => {

    if (!input.trim() || loading)
      return


    const currentInput = input


    /* ===== USER MESSAGE ===== */

    const userMessage = {

      role: 'user',

      text: currentInput
    }


    setMessages((prev) => [
      ...prev,
      userMessage
    ])


    setInput('')

    setLoading(true)



    /* =========================
       CV DOWNLOAD SHORTCUT
    ========================= */

    if (

      currentInput
        .toLowerCase()
        .includes('cv')

      ||

      currentInput
        .toLowerCase()
        .includes('resume')

    ) {

      setTimeout(() => {

        setMessages((prev) => [

          ...prev,

          {
            role: 'assistant',

            text:
              'You can download Tanvir’s CV below.'
          }

        ])

        setLoading(false)

      }, 1000)

      return
    }



    try {

      const response = await axios.post(

        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API}`,

        {
          contents: [
            {
              parts: [
                {
                  text: `

                  You are Tanvir Parvez's professional AI portfolio assistant.

                  Answer professionally,
                  clearly and shortly.

                  If user asks for projects,
                  recommend modern and unique
                  portfolio level projects.

                  Information about Tanvir:

                  - Frontend Developer
                  - React.js Developer
                  - UI/UX Designer
                  - Firebase Developer
                  - JavaScript Expert
                  - Research Presenter
                  - OpenGL Developer
                  - IoT Project Developer
                  - Competitive Programming Enthusiast

                  Skills:

                  React.js,
                  Next.js,
                  Firebase,
                  JavaScript,
                  HTML,
                  CSS,
                  UI/UX,
                  OpenGL,
                  MySQL,
                  IoT,
                  Research

                  User Question:

                  ${currentInput}

                  `
                }
              ]
            }
          ]
        },

        {
          headers: {
            'Content-Type':
              'application/json'
          }
        }

      )



      /* =========================
         SAFE RESPONSE
      ========================= */

      const botReply =

        response?.data
          ?.candidates?.[0]
          ?.content?.parts?.[0]
          ?.text

        ||

        'Sorry, no response available.'



      setMessages((prev) => [

        ...prev,

        {
          role: 'assistant',

          text: botReply
        }

      ])

    }

    catch (error) {

      console.log(

        error?.response?.data
        || error

      )


      setMessages((prev) => [

        ...prev,

        {
          role: 'assistant',

          text:
            'AI is temporarily unavailable.'
        }

      ])

    }

    finally {

      setLoading(false)

    }

  }



  return (

    <div className="assistant">


      {/* =========================
         FLOAT BUTTON
      ========================= */}

      <button

        className="assistant-btn"

        onClick={() =>
          setOpen(!open)
        }
      >

        <HiSparkles />

      </button>



      {/* =========================
         CHAT BOX
      ========================= */}

      {

        open && (

          <div className="assistant-box">


            {/* =========================
               HEADER
            ========================= */}

            <div className="assistant-header">

              <h3>
                Tanvir AI
              </h3>

              <span>
                Online
              </span>

            </div>



            {/* =========================
               MESSAGES
            ========================= */}

            <div className="assistant-messages">


              {

                messages.map((msg, i) => (

                  <div

                    key={i}

                    className={`message ${msg.role}`}

                  >

                    <ReactMarkdown>

                      {msg.text}

                    </ReactMarkdown>

                  </div>

                ))

              }



              {/* =========================
                 TYPING ANIMATION
              ========================= */}

              {

                loading && (

                  <div className="message assistant">

                    <div className="typing">

                      <span></span>
                      <span></span>
                      <span></span>

                    </div>

                  </div>

                )

              }


              <div ref={bottomRef}></div>

            </div>



            {/* =========================
               CV BUTTON
            ========================= */}

            <a

              href="/Tanvir-CV.pdf"

              download

              className="cv-btn"

            >

              Download CV

            </a>



            {/* =========================
               INPUT
            ========================= */}

            <div className="assistant-input">


              <input

                type="text"

                placeholder="Ask something..."

                value={input}

                onChange={(e) =>
                  setInput(e.target.value)
                }

                onKeyDown={(e) => {

                  if (e.key === 'Enter') {

                    sendMessage()

                  }

                }}

              />


              <button

                onClick={sendMessage}

                disabled={loading}

              >

                {

                  loading
                    ? '...'
                    : 'Send'

                }

              </button>

            </div>

          </div>

        )

      }

    </div>

  )
}

export default Assistant