import { useState } from 'react'

import axios from 'axios'

function Assistant() {

  const [open, setOpen] = useState(false)

  const [input, setInput] = useState('')

  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      text: 'Hi 👋 Ask me about Tanvir.'
    }
  ])


  const sendMessage = async () => {

    if (!input.trim()) return


    const userMessage = {
      role: 'user',
      text: input
    }


    setMessages((prev) => [
      ...prev,
      userMessage
    ])


    const currentInput = input

    setInput('')


    try {

      const response = await axios.post(

        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API}`,

        {
          contents: [
            {
              parts: [
                {
                  text: `

                  You are Tanvir Parvez's AI portfolio assistant.

                  Answer professionally, clearly and shortly.

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

                  User question:
                  ${currentInput}

                  `
                }
              ]
            }
          ]
        },

        {
          headers: {
            'Content-Type': 'application/json'
          }
        }

      )


      const botReply =
        response.data.candidates[0]
        .content.parts[0]
        .text


      setMessages((prev) => [

        ...prev,

        {
          role: 'assistant',
          text: botReply
        }

      ])

    }

    catch (error) {

      console.log(error.response?.data || error)

      setMessages((prev) => [

        ...prev,

        {
          role: 'assistant',
          text: 'AI is temporarily unavailable.'
        }

      ])

    }

  }


  return (

    <div className="assistant">


      {/* ===== BUTTON ===== */}

      <button
        className="assistant-btn"
        onClick={() => setOpen(!open)}
      >

        AI

      </button>



      {/* ===== CHAT BOX ===== */}

      {
        open && (

          <div className="assistant-box">


            <div className="assistant-messages">

              {
                messages.map((msg, i) => (

                  <div
                    key={i}
                    className={msg.role}
                  >

                    {msg.text}

                  </div>

                ))
              }

            </div>



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


              <button onClick={sendMessage}>

                Send

              </button>

            </div>

          </div>

        )
      }

    </div>

  )
}

export default Assistant