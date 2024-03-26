import "./ButtonDownload.scss";

function ButtonDownload({ children }) {
  return (
    <a hrefs="./MY_RESUME.pdf" download="UGOCHUKWU_RESUME" className="resume">
      {children}
    </a>
  );
}

export default ButtonDownload;
