import "./About.scss";

function About() {
  return (
    <section id="About">
      <div className="about">
        <h1 className="heading-primary">About</h1>
        <div className="about__grid">
          <div className="about__grid-text">
            <div className="text-heading">
              <span className="number">01</span>
              <span className="skill">Dexterity</span>
            </div>
            <p>
              I am a programmer skilled in bringing about optimazation of
              applications with overall improvement in user experience. With the
              help of react hooks like memo, useMemo, useCallback, code
              splitting or lazy loading, the whole flexibility in general web
              applications have been taking to a whole new level.
            </p>
          </div>
          <div className="about__grid-image">
            <img
              srcSet="./about-image-1.jpg 1x, ./about-image-1.jpg 2x"
              alt="tech-images"
            />
          </div>
          {/*  */}

          <div className="about__grid-image">
            <img
              srcSet="./about-image-2.jpg 1x, ./about-image-2.jpg 2x"
              alt="tech-images"
            />
          </div>

          <div className="about__grid-text">
            <div className="text-heading right">
              <span className="skill">Team player</span>
              <span className="number">02</span>
            </div>

            <p>
              Buiding a beautiful UI/UX is a function of how well you can
              collaborate with other programmers, working as a team in
              programming is a commmon practice, hence the reason I have
              delibrately worked on my interpersonal skill to ensure there is
              cooperation and collective responsibility, that way, everyone is
              encouraged to put their best foot forward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
