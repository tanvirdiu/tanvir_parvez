function Certificates() {

  const certificates = [

    {
      number: "01",
      title: "IEEE Research Conference",
      issuer: "WIECON-ECE 2025 Conference",
      description:
        "Presented research paper on AI based rose leaf disease classification using lightweight DCNN framework with interpretable visual explanations.",
      skills: [
        "Research",
        "IEEE",
        "Deep Learning",
        "AI"
      ]
    },

    {
      number: "02",
      title: "UI / UX Design",
      issuer: "Creative Interface Design",
      description:
        "Designed modern responsive interfaces, dashboard layouts and user friendly mobile experiences with clean UI systems.",
      skills: [
        "Figma",
        "UI Design",
        "UX Research",
        "Responsive UI"
      ]
    },

    {
      number: "03",
      title: "Take Off Programming Contest",
      issuer: "Final Round Participant",
      description:
        "Qualified for final round by solving competitive programming and logical problem solving challenges.",
      skills: [
        "Problem Solving",
        "Algorithms",
        "Programming"
      ]
    },

    {
      number: "04",
      title: "Unlock The Algorithm",
      issuer: "Final Round Participant",
      description:
        "Participated in advanced algorithmic and coding competition focused on analytical thinking and optimization.",
      skills: [
        "Algorithms",
        "Data Structure",
        "Logic Building"
      ]
    },


  ]


  return (

    <section
      className="certificates"
      id="certificates"
    >

      <div className="section-title">

        <h4>
          Achievements
        </h4>

        <h2>
          Certificates & Activities
        </h2>

      </div>



      <div className="certificate-grid">

        {
          certificates.map((item, index) => (

            <div
              className="certificate-card"
              key={index}
            >

              <div className="certificate-top">

                <span className="certificate-number">
                  {item.number}
                </span>

                <span className="certificate-badge">
                  Certified
                </span>

              </div>


              <h3>
                {item.title}
              </h3>

              <h4>
                {item.issuer}
              </h4>

              <p>
                {item.description}
              </p>


              <div className="certificate-skills">

                {
                  item.skills.map((skill, i) => (

                    <span key={i}>
                      {skill}
                    </span>

                  ))
                }

              </div>

            </div>

          ))
        }

      </div>

    </section>

  )

}

export default Certificates