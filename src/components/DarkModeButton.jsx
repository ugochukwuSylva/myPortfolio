import "./DarkModeButton.scss";

import { BsBrightnessHigh } from "react-icons/bs";
import { IoMoonOutline } from "react-icons/io5";

import { usePortfolio } from "../context/PortfolioContext";

function DarkModeButton() {
  const { isDark, toggleDarkMode } = usePortfolio();
  return (
    <button onClick={toggleDarkMode}>
      {isDark ? <BsBrightnessHigh /> : <IoMoonOutline />}
    </button>
  );
}

export default DarkModeButton;
