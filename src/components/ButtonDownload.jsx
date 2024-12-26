import "./ButtonDownload.scss";

function ButtonDownload({ children }) {
  return (
    <a href="./UGOCHUKWU_CV.pdf" download="UGOCHUKWU_CV" className="resume">
      {children}
    </a>
  );
}

export default ButtonDownload;
