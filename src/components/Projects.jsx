import "./Projects.scss";
import { motion } from "framer-motion";
import { PROJECTS } from "../data/projects";
import ProjectList from "./ProjectList";
import useWindowResizer from "../hook/useWindowResizer";
import { useState } from "react";
import SliderDots from "./SliderDots";

function Project() {
  const [translateX, setTranslateX] = useState(0);
  const { showButton } = useWindowResizer(1200);
  const dataLength = PROJECTS.length - 1;

  function next() {
    setTranslateX((next) => (next === -dataLength ? 0 : next - 1));
  }

  function previous() {
    setTranslateX((prev) => (prev === 0 ? -dataLength : prev + 1));
  }

  function dotSlide(i) {
    setTranslateX(-i);
  }

  return (
    <motion.section
      id="Projects"
      className="projects"
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h1 className="heading-primary right">Projects</h1>

      {showButton && (
        <span onClick={previous} className="btn btn--left">
          &larr;
        </span>
      )}

      <div className="projects-container">
        {PROJECTS.map((project, i) => (
          <ProjectList
            key={i}
            data={project}
            index={i}
            translateX={translateX}
          />
        ))}
      </div>

      <div className="projects-bg">
        <video muted loop autoPlay>
          <source src="project-bg-4.mp4" type="video/mp4" />
        </video>
      </div>

      {showButton && (
        <span onClick={next} className="btn btn--right">
          &rarr;
        </span>
      )}

      {showButton && <SliderDots dotSlide={dotSlide} translateX={translateX} />}
    </motion.section>
  );
}

export default Project;
