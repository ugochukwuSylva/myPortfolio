import "./ProjectList.scss";

function ProjectList({ data }) {
  const {
    frontImage,
    backImage,
    title,
    overview,
    technologies,
    backgroundImage,
  } = data;

  // const styles = {
  //   backgroundImage,
  // };

  return (
    <div className="project">
      <div className="card card-front">
        <img src={frontImage} alt="img-of-project" />
        <div className="project-text">
          <h3>{title}</h3>
          <p>{overview}</p>
        </div>
      </div>

      <div className="card card-back">
        <div className="card-picture">
          {backImage.map((img, i) => (
            <img src={img} alt="icon" key={i} />
          ))}
        </div>

        <div className="card-technology">
          {technologies.map((el, i) => (
            <p key={i}>{el}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
