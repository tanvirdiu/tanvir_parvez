function Education() {

  return (

    <section
      className="education"
      id="education"
    >

      <div className="section-title">

        <h4>
          Education
        </h4>

        <h2>
          Academic Background
        </h2>

      </div>



      <div className="education-container">


        {/* ===== UNIVERSITY ===== */}

        <div className="education-card">

          <div className="edu-top">

            <span className="edu-year">
              2022 - 2025
            </span>

            <span className="edu-badge">
              University
            </span>

          </div>

          <h3>
            Daffodil International University
          </h3>

          <p className="edu-degree">
            BSc in Computer Science And Engineering
          </p>

          <p className="edu-desc">
            Studying Computer engineering with focus on frontend
            development, UI/UX design, database systems,
            Firebase integration and modern web technologies.
          </p>

          <span className="edu-location">
            Dhaka, Bangladesh
          </span>

        </div>



        {/* ===== HSC ===== */}

        <div className="education-card">

          <div className="edu-top">

            <span className="edu-year">
              2018 - 2020
            </span>

            <span className="edu-badge">
              HSC
            </span>

          </div>

          <h3>
             Higher Secondary Certificate 
          </h3>

          <p className="edu-degree">
            Science Background
          </p>

          <p className="edu-desc">
            Completed higher secondary education with science background,
            building strong foundations in mathematics,
            physics and analytical problem solving.
          </p>

          <span className="edu-location">
            Khulna,Bangladesh
          </span>

        </div>



        {/* ===== SSC ===== */}

        <div className="education-card">

          <div className="edu-top">

            <span className="edu-year">
              2016 - 2018
            </span>

            <span className="edu-badge">
              SSC
            </span>

          </div>

          <h3>
            Secondary School Certificate
          </h3>

          <p className="edu-degree">
            Science Background
          </p>

          <p className="edu-desc">
            Developed early interest in technology,
            creativity and computer related learning
            during secondary academic journey.
          </p>

          <span className="edu-location">
            Satkhira, Khulna, Bangladesh
          </span>

        </div>


      </div>

    </section>

  )

}

export default Education