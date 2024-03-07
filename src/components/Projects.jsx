import "./Projects.scss";
import { PROJECTS } from "../data/projects";
import ProjectList from "./ProjectList";

function Project() {
  return (
    <section id="Projects" className="projects">
      <h1 className="heading-primary right">Projects</h1>
      <div className="projects-container">
        {PROJECTS.map((project, i) => (
          <ProjectList data={project} key={i} />
        ))}
      </div>

      <div className="projects-bg">
        <video muted loop autoPlay>
          <source src="project-bg-4.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Project;
