import "./ButtonDownload.scss";

function ButtonDownload({ children }) {
  // const colorType = {
  //   backgroundColor: `${
  //     color === "green" ? "var(--color-secondary)" : "var(--color-gray-800)"
  //   }`,
  // };

  return (
    <a
      href="./tech-resume.pdf"
      download="UGOCHUKWU_RESUME"
      className="resume resume__color-green"
    >
      {children}
    </a>
  );
}

export default ButtonDownload;
