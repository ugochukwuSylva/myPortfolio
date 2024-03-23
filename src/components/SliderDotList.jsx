import "./SliderDotList.scss";

function SliderDotList({ isActiveDot, handleActiveDot }) {
  function handleClick() {
    handleActiveDot();
  }

  return (
    <li
      onClick={handleClick}
      style={{
        backgroundColor: isActiveDot
          ? "var(--color-gray-stable3)"
          : "var(--color-gray-stable4)",
      }}
      className="dot"
    >
      &nbsp;
    </li>
  );
}

export default SliderDotList;
