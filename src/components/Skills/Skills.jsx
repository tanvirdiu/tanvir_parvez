import './Skills.css'
function Skills() {

  const skills = [

    {
      name: "React",
      percent: "85%"
    },

    {
      name: "JavaScript",
      percent: "80%"
    },

    {
      name: "HTML",
      percent: "98%"
    },

    {
      name: "CSS",
      percent: "95%"
    },

    {
      name: "Firebase",
      percent: "75%"
    },

    {
      name: "Responsive Design",
      percent: "90%"
    },

    {
      name: "REST API",
      percent: "78%"
    },

    {
      name: "Git & GitHub",
      percent: "82%"
    }

  ]

  return (

    <section
      className="skills-section"
      id="skills"
    >

      {/* =========================
          SECTION TITLE
      ========================= */}

      <div className="section-title">

        <h4>
          My Skills
        </h4>

        <h2>
          Technical & Professional Skills
        </h2>

      </div>



      {/* =========================
          TECHNICAL SKILLS
      ========================= */}

      <div className="skills-container">

        {
          skills.map((skill, index) => (

            <div
              className="skill-progress-box"
              key={index}
            >

              <div className="skill-info">

                <h3>
                  {skill.name}
                </h3>

                <span>
                  {skill.percent}
                </span>

              </div>


              <div className="progress-bar">

                <div
                  className="progress-fill"
                  style={{
                    width: skill.percent
                  }}
                >

                </div>

              </div>

            </div>

          ))
        }

      </div>



      {/* =========================
          SOFT SKILLS
      ========================= */}

      <div className="soft-skills">


        {/* ===== PROBLEM SOLVING ===== */}

        <div className="soft-skill-card">

          <div className="soft-icon">
            🧠
          </div>

          <h3>
            Problem Solving
          </h3>

          <p>

            Strong ability to analyze problems
            and create clean practical solutions.

          </p>

        </div>



        {/* ===== FAST LEARNER ===== */}

        <div className="soft-skill-card">

          <div className="soft-icon">
            ⚡
          </div>

          <h3>
            Fast Learner
          </h3>

          <p>

            Quickly adapt to new technologies
            and continuously improve skills.

          </p>

        </div>



        {/* ===== TEAMWORK ===== */}

        <div className="soft-skill-card">

          <div className="soft-icon">
            🤝
          </div>

          <h3>
            Team Collaboration
          </h3>

          <p>

            Comfortable working with teams,
            sharing ideas and building projects.

          </p>

        </div>



        {/* ===== DETAIL ===== */}

        <div className="soft-skill-card">

          <div className="soft-icon">
            🎯
          </div>

          <h3>
            Attention to Detail
          </h3>

          <p>

            Focus on clean UI structure,
            responsive layout and user experience.

          </p>

        </div>



        {/* ===== MOTIVATION ===== */}

        <div className="soft-skill-card">

          <div className="soft-icon">
            🚀
          </div>

          <h3>
            Self Motivation
          </h3>

          <p>

            Passionate about learning,
            improving and building real projects.

          </p>

        </div>



        {/* ===== COMMUNICATION ===== */}

        <div className="soft-skill-card">

          <div className="soft-icon">
            💬
          </div>

          <h3>
            Communication
          </h3>

          <p>

            Able to communicate ideas clearly
            and maintain professional interaction.

          </p>

        </div>



        {/* ===== TIME MANAGEMENT ===== */}

        <div className="soft-skill-card">

          <div className="soft-icon">
            ⏳
          </div>

          <h3>
            Time Management
          </h3>

          <p>

            Ability to manage tasks efficiently
            and complete projects within deadlines.

          </p>

        </div>



        {/* ===== CREATIVITY ===== */}

        <div className="soft-skill-card">

          <div className="soft-icon">
            🎨
          </div>

          <h3>
            Creativity
          </h3>

          <p>

            Creative mindset for building modern
            user interfaces and unique web designs.

          </p>

        </div>



        {/* ===== ADAPTABILITY ===== */}

        <div className="soft-skill-card">

          <div className="soft-icon">
            🔄
          </div>

          <h3>
            Adaptability
          </h3>

          <p>

            Easily adapt to new environments,
            technologies and project requirements.

          </p>

        </div>



        {/* ===== CRITICAL THINKING ===== */}

        <div className="soft-skill-card">

          <div className="soft-icon">
            📌
          </div>

          <h3>
            Critical Thinking
          </h3>

          <p>

            Logical and analytical thinking
            for better decision making and development.

          </p>

        </div>

      </div>

    </section>

  )
}

export default Skills