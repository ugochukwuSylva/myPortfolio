import "./ButtonDownload.scss";

function ButtonDownload({ children }) {
  return (
    <a
      href="./MY_RESUME.pdf"
      download="UGOCHUKWU_RESUME"
      className="resume resume__color-green"
    >
      {children}
    </a>
  );
}

export default ButtonDownload;
