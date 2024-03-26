import "./ButtonDownload.scss";

function ButtonDownload({ children }) {
  return (
    <a href="./MY_RESUME.pdf" download="UGOCHUKWU_RESUME" className="resume">
      {children}
    </a>
  );
}

export default ButtonDownload;
