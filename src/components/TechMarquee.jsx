import Marquee from 'react-fast-marquee'

function TechMarquee() {

  return (

    <div className="marquee-section">

      <Marquee
        speed={80}
        gradient={false}
      >

        <h2>React</h2>

        <h2>JavaScript</h2>

        <h2>Firebase</h2>

        <h2>HTML5</h2>

        <h2>CSS3</h2>

        <h2>GitHub</h2>

      </Marquee>

    </div>

  )
}

export default TechMarquee