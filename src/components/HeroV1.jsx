import "./Hero.scss";
import { ReactTyped } from "react-typed";
import CountUp from "react-countup";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__text__container">
        <span>Hello!</span>
        <div>
          I'm
          <span>
            <ReactTyped
              strings={[
                "Nwaba Ugochukwu",
                "A Frontend Developer",
                "A Software Engineer",
              ]}
              typeSpeed={30}
              backSpeed={60}
              loop
            />
          </span>
        </div>
        <div>
          I have a great passion in creating websites that gives users the best
          experience ever. I ensure my codes are modular, readable, maintainable
          and highly resuable. Hire me and lets get started.
        </div>

        <div className="hero__skill__container">
          <div className="hero__skill">
            <span>
              <CountUp end={100} duration={2} />%
            </span>
            <h6>Resuability</h6>
          </div>
          <div className="hero__skill">
            <span>
              <CountUp end={100} duration={4} />%
            </span>
            <h6>Modularity</h6>
          </div>
          <div className="hero__skill">
            <span>
              <CountUp end={100} duration={6} />%
            </span>
            <h6>Testability</h6>
          </div>
        </div>
      </div>
      {/*  */}

      <div className="hero__img__container">
        <picture>
          <img src="hero-image-1.png" alt="heroimage" />
        </picture>
      </div>
    </div>
  );
}

export default Hero;
