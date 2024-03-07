import "./ButtonDownload.scss";
// ./tech-resume.pdf
// download="RESUME"

function ButtonDownload({ children }) {
  // const colorType = {
  //   backgroundColor: `${
  //     color === "green" ? "var(--color-secondary)" : "var(--color-gray-800)"
  //   }`,
  // };

  return (
    <a href="##" className="resume resume__color-green">
      {children}
    </a>
  );
}

export default ButtonDownload;
